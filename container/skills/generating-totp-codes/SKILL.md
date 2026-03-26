---
name: generating-totp-codes
description: Generate TOTP two-factor authentication codes. Use when any service prompts for a 2FA code during browser login or API authentication.
allowed-tools: Bash(oathtool:*)
---

# Generating TOTP Codes

Generate time-based one-time passwords (TOTP) for two-factor authentication. Secrets are stored locally per service — codes are generated on demand and valid for 30 seconds.

## 1. Generating a Code

```bash
oathtool --totp -b "$(cat /workspace/group/auth/<service>-totp.secret)"
```

Generate the code immediately before entering it. TOTP codes rotate every 30 seconds — a code generated too early may expire before submission.

## 2. Configured Services

| Service | Secret file |
|---------|-------------|
| GitHub | `/workspace/group/auth/github-totp.secret` |

## 3. When to Use

- A service login via `agent-browser` prompts for a 2FA code
- A CLI tool requires authentication with 2FA
- Any action that triggers a verification challenge on a configured service

## 4. What NOT to Do

- Don't generate a code and wait before entering it — generate right before submission
- Don't hardcode or cache codes — always generate fresh
- Don't expose the secret file contents in chat or logs
