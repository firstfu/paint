# Gemini Image Generation API Reference

Complete API documentation for the Gemini 3 Pro Image Preview model.

## API Endpoint

```
POST https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent
```

## Authentication

Include API key as query parameter:

```
?key=YOUR_GEMINI_API_KEY
```

## Request Format

### Headers

```
Content-Type: application/json
```

### Request Body Structure

```json
{
  "contents": [
    {
      "parts": [
        {
          "text": "string"
        },
        {
          "inline_data": {
            "mime_type": "string",
            "data": "base64-encoded-string"
          }
        }
      ]
    }
  ],
  "generationConfig": {
    "responseModalities": ["TEXT", "IMAGE"],
    "imageConfig": {
      "aspectRatio": "string",
      "imageSize": "string"
    }
  }
}
```

### Field Descriptions

#### contents

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `contents` | array | Yes | Array of content objects |
| `contents[].parts` | array | Yes | Array of content parts (text and/or images) |

#### parts (Text)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `text` | string | Yes | Text prompt or instruction |

#### parts (Image)

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `inline_data.mime_type` | string | Yes | MIME type: `image/png`, `image/jpeg`, `image/webp`, `image/heic` |
| `inline_data.data` | string | Yes | Base64-encoded image data |

#### generationConfig

| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `responseModalities` | array | No | Response types: `["TEXT", "IMAGE"]` or `["IMAGE"]` |
| `imageConfig.aspectRatio` | string | No | Output aspect ratio |
| `imageConfig.imageSize` | string | No | Output resolution |

### Supported Aspect Ratios

| Value | Description |
|-------|-------------|
| `1:1` | Square (icons, avatars) |
| `16:9` | Widescreen (banners, videos) |
| `9:16` | Vertical (stories, mobile) |
| `4:3` | Standard (photos) |
| `3:4` | Portrait standard |
| `5:4` | Classic photo ratio |
| `4:5` | Portrait classic |

### Supported Image Sizes

| Value | Resolution | Description |
|-------|------------|-------------|
| (default) | ~1024px | Standard resolution |
| `2K` | ~2048px | High resolution |
| `4K` | ~4096px | Maximum resolution |

## Response Format

### Success Response (200 OK)

```json
{
  "candidates": [
    {
      "content": {
        "parts": [
          {
            "text": "Description of the generated image..."
          },
          {
            "inlineData": {
              "mimeType": "image/png",
              "data": "base64-encoded-image-data"
            }
          }
        ]
      },
      "finishReason": "STOP",
      "index": 0
    }
  ],
  "usageMetadata": {
    "promptTokenCount": 10,
    "candidatesTokenCount": 100,
    "totalTokenCount": 110
  }
}
```

### Response Fields

| Field | Type | Description |
|-------|------|-------------|
| `candidates` | array | Array of generated responses |
| `candidates[].content.parts` | array | Generated content parts |
| `candidates[].content.parts[].text` | string | Optional text response |
| `candidates[].content.parts[].inlineData` | object | Generated image data |
| `candidates[].content.parts[].inlineData.mimeType` | string | Image MIME type |
| `candidates[].content.parts[].inlineData.data` | string | Base64-encoded image |
| `candidates[].finishReason` | string | Completion reason |
| `usageMetadata` | object | Token usage statistics |

## Error Responses

### 400 Bad Request

```json
{
  "error": {
    "code": 400,
    "message": "Invalid request format",
    "status": "INVALID_ARGUMENT"
  }
}
```

**Causes:**
- Malformed JSON
- Missing required fields
- Invalid prompt content

### 401 Unauthorized

```json
{
  "error": {
    "code": 401,
    "message": "API key not valid",
    "status": "UNAUTHENTICATED"
  }
}
```

**Causes:**
- Missing API key
- Invalid API key
- Expired API key

### 403 Forbidden

```json
{
  "error": {
    "code": 403,
    "message": "Permission denied",
    "status": "PERMISSION_DENIED"
  }
}
```

**Causes:**
- API key lacks model access
- Region restrictions

### 429 Too Many Requests

```json
{
  "error": {
    "code": 429,
    "message": "Resource exhausted",
    "status": "RESOURCE_EXHAUSTED"
  }
}
```

**Causes:**
- Rate limit exceeded
- Quota exhausted

**Solutions:**
- Implement exponential backoff
- Wait and retry
- Request quota increase

### Safety Filters

When content is blocked:

```json
{
  "candidates": [
    {
      "finishReason": "SAFETY",
      "safetyRatings": [
        {
          "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
          "probability": "HIGH"
        }
      ]
    }
  ]
}
```

## Use Cases

### Text-to-Image Generation

Generate images from text descriptions only.

```json
{
  "contents": [{
    "parts": [{"text": "A serene mountain landscape at sunset"}]
  }],
  "generationConfig": {
    "responseModalities": ["IMAGE"]
  }
}
```

### Image Editing

Modify existing images based on instructions.

```json
{
  "contents": [{
    "parts": [
      {
        "inline_data": {
          "mime_type": "image/png",
          "data": "<base64-image>"
        }
      },
      {"text": "Add a rainbow in the sky"}
    ]
  }],
  "generationConfig": {
    "responseModalities": ["IMAGE"]
  }
}
```

### Style Transfer

Transform image artistic style.

```json
{
  "contents": [{
    "parts": [
      {
        "inline_data": {
          "mime_type": "image/jpeg",
          "data": "<base64-image>"
        }
      },
      {"text": "Transform this into Van Gogh's Starry Night style"}
    ]
  }],
  "generationConfig": {
    "responseModalities": ["TEXT", "IMAGE"]
  }
}
```

### Multi-Image Composition

Combine multiple images.

```json
{
  "contents": [{
    "parts": [
      {"text": "Create a group photo of these people"},
      {
        "inline_data": {
          "mime_type": "image/png",
          "data": "<base64-person1>"
        }
      },
      {
        "inline_data": {
          "mime_type": "image/png",
          "data": "<base64-person2>"
        }
      }
    ]
  }],
  "generationConfig": {
    "responseModalities": ["IMAGE"],
    "imageConfig": {
      "aspectRatio": "16:9"
    }
  }
}
```

## Rate Limits

| Tier | Requests/Minute | Requests/Day |
|------|-----------------|--------------|
| Free | 15 | 1,500 |
| Pay-as-you-go | 60 | 10,000 |
| Enterprise | Custom | Custom |

## Best Practices

### Prompt Writing

1. **Be Specific**: Include detailed descriptions
2. **Specify Style**: Mention artistic style explicitly
3. **Define Output**: Specify format, colors, composition
4. **Avoid Ambiguity**: Clear, unambiguous instructions

### Performance

1. **Compress Images**: Reduce base64 payload size
2. **Use Appropriate Size**: Don't request larger than needed
3. **Implement Retry**: Handle transient errors gracefully
4. **Cache Results**: Store generated images for reuse

### Error Handling

1. **Check Response**: Always verify `candidates` array exists
2. **Handle Safety**: Gracefully handle content blocks
3. **Implement Backoff**: Exponential backoff for rate limits
4. **Log Errors**: Capture error details for debugging

## Code Examples

### Python (requests)

```python
import requests
import base64

API_KEY = "your-api-key"
URL = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent?key={API_KEY}"

response = requests.post(URL, json={
    "contents": [{"parts": [{"text": "A cute robot mascot"}]}],
    "generationConfig": {"responseModalities": ["IMAGE"]}
})

data = response.json()
image_data = data["candidates"][0]["content"]["parts"][0]["inlineData"]["data"]
with open("output.png", "wb") as f:
    f.write(base64.b64decode(image_data))
```

### JavaScript (fetch)

```javascript
const API_KEY = "your-api-key";
const URL = `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent?key=${API_KEY}`;

const response = await fetch(URL, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    contents: [{ parts: [{ text: "A cute robot mascot" }] }],
    generationConfig: { responseModalities: ["IMAGE"] }
  })
});

const data = await response.json();
const imageData = data.candidates[0].content.parts[0].inlineData.data;
const buffer = Buffer.from(imageData, "base64");
fs.writeFileSync("output.png", buffer);
```

### cURL

```bash
curl -X POST \
  "https://generativelanguage.googleapis.com/v1beta/models/gemini-3-pro-image-preview:generateContent?key=$GEMINI_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "contents": [{"parts": [{"text": "A cute robot mascot"}]}],
    "generationConfig": {"responseModalities": ["IMAGE"]}
  }'
```
