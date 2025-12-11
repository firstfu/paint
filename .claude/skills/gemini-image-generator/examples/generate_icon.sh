#!/bin/bash
# Example: Generate an app icon using Gemini Image Generator
#
# Prerequisites:
#   - Set GEMINI_API_KEY environment variable
#   - Python 3.8+ installed
#
# Usage:
#   ./generate_icon.sh

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SKILL_DIR="$(dirname "$SCRIPT_DIR")"

# Check for API key
if [ -z "$GEMINI_API_KEY" ]; then
    echo "Error: GEMINI_API_KEY environment variable is not set"
    echo "Please set it with: export GEMINI_API_KEY='your-api-key'"
    exit 1
fi

# Generate app icon
echo "Generating app icon..."

python3 "$SKILL_DIR/scripts/generate_image.py" \
    --prompt "Modern mobile app icon for a task management app.
              Minimalist flat design with a clean checkmark symbol.
              Gradient background from purple to blue.
              Rounded corners suitable for iOS/Android.
              Professional, memorable, works at small sizes." \
    --output "./app_icon.png" \
    --aspect-ratio "1:1"

echo ""
echo "Done! Check app_icon.png"
