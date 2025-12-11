#!/usr/bin/env python3
"""
Batch Image Generator Script

Generate multiple images from a configuration file using Gemini 3 Pro Image Preview.

Usage:
    python batch_generate.py --config batch_config.json --output-dir ./generated/

Config file format (JSON):
{
    "images": [
        {
            "name": "icon",
            "prompt": "App icon design...",
            "aspect_ratio": "1:1"
        },
        {
            "name": "banner",
            "prompt": "Website banner...",
            "aspect_ratio": "16:9"
        }
    ],
    "defaults": {
        "image_size": "2K"
    }
}

Environment:
    GEMINI_API_KEY: Your Google Gemini API key (required)
"""

import argparse
import json
import os
import sys
import time
from pathlib import Path

# Import from generate_image.py (same directory)
from generate_image import generate_image


def load_config(config_path: str) -> dict:
    """Load batch configuration from JSON file."""
    path = Path(config_path)
    if not path.exists():
        raise FileNotFoundError(f"Config file not found: {config_path}")

    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)


def batch_generate(
    config_path: str,
    output_dir: str,
    delay: float = 2.0,
) -> dict:
    """
    Generate multiple images based on configuration file.

    Args:
        config_path: Path to JSON configuration file
        output_dir: Directory to save generated images
        delay: Delay between requests in seconds (to avoid rate limiting)

    Returns:
        dict with results summary
    """
    config = load_config(config_path)
    defaults = config.get("defaults", {})
    images = config.get("images", [])

    if not images:
        print("Warning: No images defined in configuration", file=sys.stderr)
        return {"total": 0, "success": 0, "failed": 0}

    # Create output directory
    output_path = Path(output_dir)
    output_path.mkdir(parents=True, exist_ok=True)

    results = {
        "total": len(images),
        "success": 0,
        "failed": 0,
        "generated": [],
        "errors": []
    }

    for i, image_config in enumerate(images, 1):
        name = image_config.get("name", f"image_{i}")
        prompt = image_config.get("prompt")

        if not prompt:
            print(f"[{i}/{len(images)}] Skipping '{name}': No prompt defined", file=sys.stderr)
            results["failed"] += 1
            results["errors"].append({"name": name, "error": "No prompt defined"})
            continue

        # Merge with defaults
        aspect_ratio = image_config.get("aspect_ratio", defaults.get("aspect_ratio"))
        image_size = image_config.get("image_size", defaults.get("image_size"))
        input_image = image_config.get("input_image")
        file_ext = image_config.get("format", "png")

        output_file = output_path / f"{name}.{file_ext}"

        print(f"\n[{i}/{len(images)}] Generating: {name}")
        print(f"  Prompt: {prompt[:80]}{'...' if len(prompt) > 80 else ''}")

        try:
            result = generate_image(
                prompt=prompt,
                output_path=str(output_file),
                input_image=input_image,
                aspect_ratio=aspect_ratio,
                image_size=image_size,
            )

            if result["success"]:
                results["success"] += 1
                results["generated"].append({
                    "name": name,
                    "path": str(output_file),
                    "prompt": prompt
                })
                print(f"  Success: {output_file}")
            else:
                results["failed"] += 1
                results["errors"].append({
                    "name": name,
                    "error": "No image in response"
                })
                print(f"  Failed: No image generated")

        except Exception as e:
            results["failed"] += 1
            results["errors"].append({
                "name": name,
                "error": str(e)
            })
            print(f"  Error: {e}", file=sys.stderr)

        # Delay between requests to avoid rate limiting
        if i < len(images):
            print(f"  Waiting {delay}s before next request...")
            time.sleep(delay)

    return results


def main():
    parser = argparse.ArgumentParser(
        description="Batch generate images using Gemini 3 Pro Image Preview",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Example config file (batch_config.json):
{
    "images": [
        {"name": "icon", "prompt": "App icon...", "aspect_ratio": "1:1"},
        {"name": "banner", "prompt": "Website banner...", "aspect_ratio": "16:9"}
    ],
    "defaults": {"image_size": "2K"}
}

Usage:
  python batch_generate.py --config batch_config.json --output-dir ./generated/
        """
    )

    parser.add_argument(
        "--config", "-c",
        required=True,
        help="Path to JSON configuration file"
    )

    parser.add_argument(
        "--output-dir", "-o",
        default="./generated",
        help="Output directory for generated images (default: ./generated)"
    )

    parser.add_argument(
        "--delay", "-d",
        type=float,
        default=2.0,
        help="Delay between requests in seconds (default: 2.0)"
    )

    args = parser.parse_args()

    print(f"Starting batch generation...")
    print(f"Config: {args.config}")
    print(f"Output directory: {args.output_dir}")

    results = batch_generate(
        config_path=args.config,
        output_dir=args.output_dir,
        delay=args.delay,
    )

    # Print summary
    print("\n" + "=" * 50)
    print("BATCH GENERATION SUMMARY")
    print("=" * 50)
    print(f"Total: {results['total']}")
    print(f"Success: {results['success']}")
    print(f"Failed: {results['failed']}")

    if results["generated"]:
        print("\nGenerated images:")
        for item in results["generated"]:
            print(f"  - {item['name']}: {item['path']}")

    if results["errors"]:
        print("\nErrors:")
        for item in results["errors"]:
            print(f"  - {item['name']}: {item['error']}")

    # Exit with error code if any failures
    sys.exit(0 if results["failed"] == 0 else 1)


if __name__ == "__main__":
    main()
