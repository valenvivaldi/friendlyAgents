#!/bin/bash
# ntfy-subagent-hook.sh — SubagentStart/SubagentStop hook
# Sends subagent lifecycle events to ntfy.sh and injects chat context into subagents.

NTFY_TOPIC="${NTFY_TOPIC:-friendlyAgents}"

INPUT=$(cat)
SESSION_ID=$(echo "$INPUT" | jq -r '.session_id // empty' 2>/dev/null)
EVENT=$(echo "$INPUT" | jq -r '.hook_event_name // empty' 2>/dev/null)
AGENT_ID=$(echo "$INPUT" | jq -r '.agent_id // empty' 2>/dev/null)
AGENT_TYPE=$(echo "$INPUT" | jq -r '.agent_type // empty' 2>/dev/null)

if [ -z "$SESSION_ID" ] || [ -z "$AGENT_ID" ]; then
  exit 0
fi

if [ "$EVENT" = "SubagentStart" ]; then
  # Notify UI
  echo -n "{\"session\":\"$SESSION_ID\",\"msg\":\"subagent:start:${AGENT_ID}:${AGENT_TYPE}\"}" \
    | curl -s --data-binary @- "ntfy.sh/$NTFY_TOPIC" > /dev/null 2>&1 &

  # Inject context so the subagent can post messages
  CHAT_CMD="echo -n '{\"session\":\"${SESSION_ID}\",\"msg\":\"subagent:msg:${AGENT_ID}:your message\"}' | curl -s --data-binary @- ntfy.sh/${NTFY_TOPIC} > /dev/null"
  jq -n --arg ctx "[Agents Chat] You are a subagent. Send SHORT status messages (1-10 words) at key milestones.
Command: $CHAT_CMD
Send when you: find something interesting, finish your task, or hit a blocker." \
    '{hookSpecificOutput:{hookEventName:"SubagentStart",additionalContext:$ctx}}'

elif [ "$EVENT" = "SubagentStop" ]; then
  echo -n "{\"session\":\"$SESSION_ID\",\"msg\":\"subagent:stop:${AGENT_ID}\"}" \
    | curl -s --data-binary @- "ntfy.sh/$NTFY_TOPIC" > /dev/null 2>&1 &
fi

exit 0
