#!/usr/bin/env python3
"""
Gemini Image Generator Script

Generate images using Google's Gemini 3 Pro Image Preview model.
Supports text-to-image generation and image transformation.

Usage:
    python generate_image.py --prompt "Your prompt" --output "./output.png"
    python generate_image.py --prompt "Transform to watercolor" --input "./source.png" --output "./output.png"

Environment:
    GEMINI_API_KEY: Your Google Gemini API key (required)
"""

import argparse
import base64
import json
import os
import sys
from pathlib import Path
from urllib.request import Request, urlopen
from urllib.error import HTTPError, URLError


# Configuration
API_BASE_URL = "https://generativelanguage.googleapis.com/v1beta"
MODEL_NAME = "gemini-3-pro-image-preview"


def get_api_key() -> str:
    """Retrieve API key from environment variable."""
    api_key = os.environ.get("GEMINI_API_KEY")
    if not api_key:
        print("Error: GEMINI_API_KEY environment variable is not set.", file=sys.stderr)
        print("Please set it with: export GEMINI_API_KEY='your-api-key'", file=sys.stderr)
        sys.exit(1)
    return api_key


def load_image_as_base64(image_path: str) -> tuple[str, str]:
    """Load an image file and return base64 encoded data with mime type."""
    path = Path(image_path)
    if not path.exists():
        raise FileNotFoundError(f"Image file not found: {image_path}")

    # Determine mime type from extension
    extension = path.suffix.lower()
    mime_types = {
        ".png": "image/png",
        ".jpg": "image/jpeg",
        ".jpeg": "image/jpeg",
        ".webp": "image/webp",
        ".heic": "image/heic",
    }
    mime_type = mime_types.get(extension, "image/png")

    with open(path, "rb") as f:
        image_data = base64.b64encode(f.read()).decode("utf-8")

    return image_data, mime_type


def save_image(base64_data: str, output_path: str) -> None:
    """Save base64 encoded image data to file."""
    image_bytes = base64.b64decode(base64_data)
    output = Path(output_path)
    output.parent.mkdir(parents=True, exist_ok=True)

    with open(output, "wb") as f:
        f.write(image_bytes)

    print(f"Image saved to: {output_path}")


def build_request_body(
    prompt: str,
    input_image: str | None = None,
    aspect_ratio: str | None = None,
    image_size: str | None = None,
) -> dict:
    """Build the API request body."""
    parts = []

    # Add input image if provided (for image editing/transformation)
    if input_image:
        image_data, mime_type = load_image_as_base64(input_image)
        parts.append({
            "inline_data": {
                "mime_type": mime_type,
                "data": image_data
            }
        })

    # Add text prompt
    parts.append({"text": prompt})

    # Build request body
    body = {
        "contents": [{
            "parts": parts
        }],
        "generationConfig": {
            "responseModalities": ["TEXT", "IMAGE"]
        }
    }

    # Add image configuration if specified
    if aspect_ratio or image_size:
        image_config = {}
        if aspect_ratio:
            image_config["aspectRatio"] = aspect_ratio
        if image_size:
            image_config["imageSize"] = image_size
        body["generationConfig"]["imageConfig"] = image_config

    return body


def generate_image(
    prompt: str,
    output_path: str,
    input_image: str | None = None,
    aspect_ratio: str | None = None,
    image_size: str | None = None,
) -> dict:
    """
    Generate an image using the Gemini API.

    Args:
        prompt: Text description of the desired image
        output_path: Path to save the generated image
        input_image: Optional input image for editing/transformation
        aspect_ratio: Optional aspect ratio (e.g., "1:1", "16:9", "4:3")
        image_size: Optional image size ("2K" or "4K")

    Returns:
        dict with 'success', 'output_path', and optionally 'text_response'
    """
    api_key = get_api_key()
    url = f"{API_BASE_URL}/models/{MODEL_NAME}:generateContent?key={api_key}"

    # Build request
    body = build_request_body(prompt, input_image, aspect_ratio, image_size)
    data = json.dumps(body).encode("utf-8")

    request = Request(
        url,
        data=data,
        headers={"Content-Type": "application/json"},
        method="POST"
    )

    try:
        with urlopen(request, timeout=120) as response:
            result = json.loads(response.read().decode("utf-8"))
    except HTTPError as e:
        error_body = e.read().decode("utf-8") if e.fp else ""
        print(f"API Error ({e.code}): {e.reason}", file=sys.stderr)
        if error_body:
            try:
                error_json = json.loads(error_body)
                print(f"Details: {json.dumps(error_json, indent=2)}", file=sys.stderr)
            except json.JSONDecodeError:
                print(f"Details: {error_body}", file=sys.stderr)
        sys.exit(1)
    except URLError as e:
        print(f"Network Error: {e.reason}", file=sys.stderr)
        sys.exit(1)

    # Process response
    response_data = {"success": False}

    candidates = result.get("candidates", [])
    if not candidates:
        print("Error: No candidates in response", file=sys.stderr)
        print(f"Response: {json.dumps(result, indent=2)}", file=sys.stderr)
        sys.exit(1)

    parts = candidates[0].get("content", {}).get("parts", [])

    for part in parts:
        # Handle text response
        if "text" in part:
            response_data["text_response"] = part["text"]
            print(f"Model response: {part['text']}")

        # Handle image response
        if "inlineData" in part:
            image_data = part["inlineData"].get("data")
            if image_data:
                save_image(image_data, output_path)
                response_data["success"] = True
                response_data["output_path"] = output_path

    if not response_data["success"]:
        print("Warning: No image was generated in the response", file=sys.stderr)
        print(f"Response parts: {json.dumps(parts, indent=2)}", file=sys.stderr)

    return response_data


def main():
    parser = argparse.ArgumentParser(
        description="Generate images using Gemini 3 Pro Image Preview",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Generate a simple image
  python generate_image.py --prompt "A cute robot mascot" --output robot.png

  # Generate with specific aspect ratio
  python generate_image.py --prompt "App icon" --output icon.png --aspect-ratio 1:1

  # Transform an existing image
  python generate_image.py --prompt "Make it look like watercolor" --input photo.jpg --output art.png

  # Generate high-resolution image
  python generate_image.py --prompt "Detailed landscape" --output landscape.png --image-size 2K
        """
    )

    parser.add_argument(
        "--prompt", "-p",
        required=True,
        help="Text prompt describing the desired image"
    )

    parser.add_argument(
        "--output", "-o",
        required=True,
        help="Output path for the generated image"
    )

    parser.add_argument(
        "--input", "-i",
        help="Input image path for editing/transformation"
    )

    parser.add_argument(
        "--aspect-ratio", "-a",
        choices=["1:1", "16:9", "9:16", "4:3", "3:4", "5:4", "4:5"],
        help="Aspect ratio for the generated image"
    )

    parser.add_argument(
        "--image-size", "-s",
        choices=["2K", "4K"],
        help="Image size/resolution"
    )

    args = parser.parse_args()

    print(f"Generating image with prompt: {args.prompt[:100]}...")

    result = generate_image(
        prompt=args.prompt,
        output_path=args.output,
        input_image=args.input,
        aspect_ratio=args.aspect_ratio,
        image_size=args.image_size,
    )

    if result["success"]:
        print("Image generation completed successfully!")
        sys.exit(0)
    else:
        print("Image generation did not produce an image.", file=sys.stderr)
        sys.exit(1)


if __name__ == "__main__":
    main()
