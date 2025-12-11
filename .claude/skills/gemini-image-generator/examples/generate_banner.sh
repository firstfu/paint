#!/bin/bash
# Example: Generate a project banner using Gemini Image Generator
#
# Prerequisites:
#   - Set GEMINI_API_KEY environment variable
#   - Python 3.8+ installed
#
# Usage:
#   ./generate_banner.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SKILL_DIR="$(dirname "$SCRIPT_DIR")"

# Check for API key
if [ -z "$GEMINI_API_KEY" ]; then
    echo "Error: GEMINI_API_KEY environment variable is not set"
    echo "Please set it with: export GEMINI_API_KEY='your-api-key'"
    exit 1
fi

# Generate hero banner
echo "Generating project banner..."

python3 "$SKILL_DIR/scripts/generate_image.py" \
    --prompt "Professional website hero banner for a tech startup.
              Abstract geometric shapes representing innovation and connectivity.
              Modern gradient from deep blue to cyan.
              Clean, minimal composition with space for text overlay.
              Futuristic, professional atmosphere.
              High quality, suitable for large displays." \
    --output "./hero_banner.png" \
    --aspect-ratio "16:9" \
    --image-size "2K"

echo ""
echo "Done! Check hero_banner.png"
