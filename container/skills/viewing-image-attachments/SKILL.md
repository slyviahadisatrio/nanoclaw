---
name: viewing-image-attachments
description: View and understand images sent in chat. Use when you see [Photo: /path/to/file] in a message — read the image before responding.
allowed-tools: Read
---

# Viewing Image Attachments

Interpret images sent by the user in chat. When a message includes a photo attachment, the system downloads and resizes it, then embeds the path in the message text. Always view the image before responding.

## 1. How It Works

Photo attachments appear in messages as:

```
[Photo: /workspace/group/images/12345.jpg] optional caption here
```

When you see this pattern, use the Read tool on the file path to view the image. The Read tool is multimodal — it renders images visually, not as raw bytes.

## 2. Workflow

1. Spot `[Photo: /path]` in the incoming message
2. Read the image file with the Read tool
3. Interpret the visual content — screenshots, photos, diagrams, handwriting, anything
4. Respond with awareness of what the image shows, combined with any caption or surrounding text

## 3. What NOT to Do

- Don't respond to a `[Photo: ...]` message without reading the image first
- Don't guess image content from the filename or caption alone
- Don't describe the image back to the user unprompted — respond naturally, as a person who has seen the image would
