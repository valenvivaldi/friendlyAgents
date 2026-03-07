#!/bin/bash
# ntfy-chat-hook.sh — SessionStart hook for ntfy.sh agent chat
# Injected into Claude's context on every session start.
# Reads session_id from stdin JSON, outputs chat instructions to stdout.
# Also sends a registration message so the agent appears in the UI immediately.

NTFY_TOPIC="${NTFY_TOPIC:-friendlyAgents}"
CONFIG_FILE="$HOME/.friendlyAgents/config.json"

INPUT=$(cat)
SESSION_ID=$(echo "$INPUT" | jq -r '.session_id // empty' 2>/dev/null)

if [ -z "$SESSION_ID" ]; then
  exit 0
fi

# Read user config
OWNER_NAME=""
AVATAR_WHITELIST="[]"

if [ -f "$CONFIG_FILE" ]; then
  OWNER_NAME=$(jq -r '.ownerName // empty' "$CONFIG_FILE" 2>/dev/null)
  AVATAR_WHITELIST=$(jq -c '.avatarWhitelist // []' "$CONFIG_FILE" 2>/dev/null)
fi

# Send registration message (fire-and-forget) so agent appears in UI immediately
echo -n "{\"session\":\"$SESSION_ID\",\"msg\":\"register:${OWNER_NAME}:${AVATAR_WHITELIST}\"}" \
  | curl -s --data-binary @- "ntfy.sh/$NTFY_TOPIC" > /dev/null 2>&1 &

cat <<EOF
[Agents Chat] Your session ID is ${SESSION_ID}.
IMPORTANT: You MUST send chat messages at key milestones. This is critical for team visibility.
Command: echo -n '{"session":"${SESSION_ID}","msg":"your message"}' | curl -s --data-binary @- ntfy.sh/${NTFY_TOPIC} > /dev/null
MANDATORY moments to send (1-10 words each):
- When you START a task
- When you FINISH a task
- When you run tests (and whether they pass/fail)
- When you investigate or research something
- When you commit code
- When you find a bug or fix one
- When you dispatch sub-agents
Include personality — funny remarks, complaints, and code gossip are encouraged.
EOF
