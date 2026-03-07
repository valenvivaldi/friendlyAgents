#!/bin/bash
# ntfy-tool-hook.sh — PreToolUse hook: sends tool activity to ntfy.sh
# Runs before every tool call. Detects known patterns and sends descriptive
# messages; falls back to a generic wrench-emoji message for unknown tools.

NTFY_TOPIC="${NTFY_TOPIC:-friendlyAgents}"

INPUT=$(cat)
SESSION_ID=$(echo "$INPUT" | jq -r '.session_id // empty' 2>/dev/null)
TOOL_NAME=$(echo "$INPUT" | jq -r '.tool_name // empty' 2>/dev/null)
TOOL_INPUT=$(echo "$INPUT" | jq -c '.tool_input // {}' 2>/dev/null)

if [ -z "$SESSION_ID" ] || [ -z "$TOOL_NAME" ]; then
  exit 0
fi

MSG=""

case "$TOOL_NAME" in
  Bash)
    CMD=$(echo "$TOOL_INPUT" | jq -r '.command // empty' 2>/dev/null)
    case "$CMD" in
      *"npm test"*|*"yarn test"*|*"jest"*|*"vitest"*|*"pytest"*|*"gradle test"*)
        MSG="Running tests..."
        ;;
      *"git commit"*)
        MSG="Committing code..."
        ;;
      *"git push"*)
        MSG="Pushing to remote..."
        ;;
      *"git pull"*|*"git fetch"*)
        MSG="Syncing with remote..."
        ;;
      *"npm install"*|*"yarn install"*|*"pip install"*|*"brew install"*)
        MSG="Installing dependencies..."
        ;;
      *"npm run build"*|*"yarn build"*|*"gradle build"*)
        MSG="Building project..."
        ;;
    esac
    ;;
  Edit|Write)
    FILE=$(echo "$TOOL_INPUT" | jq -r '.file_path // .path // empty' 2>/dev/null)
    if [ -n "$FILE" ]; then
      BASENAME=$(basename "$FILE")
      MSG="Editing $BASENAME"
    fi
    ;;
  Read)
    FILE=$(echo "$TOOL_INPUT" | jq -r '.file_path // .path // empty' 2>/dev/null)
    if [ -n "$FILE" ]; then
      BASENAME=$(basename "$FILE")
      MSG="Reading $BASENAME"
    fi
    ;;
  Grep|Glob)
    MSG="Searching codebase..."
    ;;
  Agent)
    MSG="Dispatching sub-agent..."
    ;;
  WebSearch)
    MSG="Searching the web..."
    ;;
  WebFetch)
    MSG="Fetching a webpage..."
    ;;
esac

# Default: generic wrench message for any unmatched tool
if [ -z "$MSG" ]; then
  MSG="tool:$TOOL_NAME"
fi

# Send async (fire-and-forget) so we don't slow down Claude
echo -n "{\"session\":\"$SESSION_ID\",\"msg\":\"$MSG\"}" \
  | curl -s --data-binary @- "ntfy.sh/$NTFY_TOPIC" > /dev/null 2>&1 &

exit 0
