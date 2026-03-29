---
name: reacting-to-messages
description: Send and receive Telegram emoji reactions. Use when you want to react to a message or when you see a [Reacted ...] notification in chat.
---

# Reacting to Messages

React to Telegram messages with emoji. Reactions are lightweight acknowledgements — use them the way a person would, not as a substitute for a response.

## 1. Receiving Reactions

When someone reacts to a message, it appears in chat as:

```
[Reacted 👍 to message 123]
```

Respond naturally if the reaction warrants it. Most reactions don't need a reply — they're acknowledgements.

## 2. Sending Reactions

Write a JSON file to the IPC directory:

```bash
echo '{"type":"reaction","chatJid":"tg:CHAT_ID","messageId":"MSG_ID","emoji":"👍"}' > /workspace/ipc/messages/react-$(date +%s).json
```

Replace `CHAT_ID` with the chat ID (without the `tg:` prefix in the value, but with it in the `chatJid` field), `MSG_ID` with the message ID, and the emoji with your choice.

## 3. Available Emoji

Telegram supports a fixed set of reaction emoji: 👍 👎 ❤ 🔥 🥰 👏 😁 🤔 🤯 😱 🤬 😢 🎉 🤩 🤮 💩 🙏 👌 🕊 🤡 🥱 🥴 😍 🐳 ❤‍🔥 🌚 🌭 💯 🤣 ⚡ 🍌 🏆 💔 🤨 😐 🍓 🍾 💋 🖕 😈 😴 😭 🤓 👻 👨‍💻 👀 🎃 🙈 😇 😨 🤝 ✍ 🤗 🫡 🎅 🎄 ☃ 💅 🤪 🗿 🆒 💘 🙉 🦄 😘 💊 🙊 😎 👾 🤷 😡

## 4. When to React

- Quick acknowledgement without a full reply
- Expressing sentiment toward something Rid said
- Responding to a photo or link casually

## 5. What NOT to Do

- Don't react to every message — it's noise
- Don't use reactions as a substitute for responding when a reply is expected
- Don't react to your own messages
