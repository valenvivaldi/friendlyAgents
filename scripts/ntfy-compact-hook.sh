#!/bin/bash
# ntfy-compact-hook.sh — PreCompact hook: notifies when context is compacted

NTFY_TOPIC="${NTFY_TOPIC:-friendlyAgents}"

INPUT=$(cat)
SESSION_ID=$(echo "$INPUT" | jq -r '.session_id // empty' 2>/dev/null)
SOURCE=$(echo "$INPUT" | jq -r '.source // "auto"' 2>/dev/null)

if [ -z "$SESSION_ID" ]; then
  exit 0
fi

MSG="Compacting context ($SOURCE)..."

echo -n "{\"session\":\"$SESSION_ID\",\"msg\":\"$MSG\"}" \
  | curl -s --data-binary @- "ntfy.sh/$NTFY_TOPIC" > /dev/null 2>&1 &

exit 0
