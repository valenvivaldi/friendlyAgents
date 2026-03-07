#!/bin/bash
# install-hooks.sh — Install ntfy.sh agent chat hook into ~/.claude/settings.json
# Safe to run multiple times: skips if already installed.
#
# Usage:
#   ./scripts/install-hooks.sh                    # uses default topic "friendlyAgents"
#   NTFY_TOPIC=my-team ./scripts/install-hooks.sh # uses custom topic

set -euo pipefail

NTFY_TOPIC="${NTFY_TOPIC:-friendlyAgents}"
SETTINGS="$HOME/.claude/settings.json"
HOOKS_DIR="$HOME/.claude/hooks"
HOOK_SCRIPT="ntfy-chat.sh"
TOOL_HOOK_SCRIPT="ntfy-tool.sh"
SUBAGENT_HOOK_SCRIPT="ntfy-subagent.sh"
HOOK_CMD="$HOOKS_DIR/$HOOK_SCRIPT"
TOOL_HOOK_CMD="$HOOKS_DIR/$TOOL_HOOK_SCRIPT"
SUBAGENT_HOOK_CMD="$HOOKS_DIR/$SUBAGENT_HOOK_SCRIPT"

# --- Pre-checks ---
if ! command -v jq &>/dev/null; then
  echo "Error: jq is required. Install with: brew install jq (macOS) or apt install jq (Linux)"
  exit 1
fi

# --- 1. Copy hook script ---
mkdir -p "$HOOKS_DIR"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cp "$SCRIPT_DIR/ntfy-chat-hook.sh" "$HOOK_CMD"
cp "$SCRIPT_DIR/ntfy-tool-hook.sh" "$TOOL_HOOK_CMD"
cp "$SCRIPT_DIR/ntfy-subagent-hook.sh" "$SUBAGENT_HOOK_CMD"
chmod +x "$HOOK_CMD" "$TOOL_HOOK_CMD" "$SUBAGENT_HOOK_CMD"

# --- 2. Bake topic into the installed hook ---
for f in "$HOOK_CMD" "$TOOL_HOOK_CMD" "$SUBAGENT_HOOK_CMD"; do
  sed -i.bak "s|NTFY_TOPIC=\"\${NTFY_TOPIC:-friendlyAgents}\"|NTFY_TOPIC=\"\${NTFY_TOPIC:-${NTFY_TOPIC}}\"|" "$f"
  rm -f "$f.bak"
done

# --- 3. Check if already installed ---
SESSION_INSTALLED=false
TOOL_INSTALLED=false
SUBAGENT_INSTALLED=false

if [ -f "$SETTINGS" ]; then
  grep -q "ntfy-chat.sh" "$SETTINGS" 2>/dev/null && SESSION_INSTALLED=true
  grep -q "ntfy-tool.sh" "$SETTINGS" 2>/dev/null && TOOL_INSTALLED=true
  grep -q "ntfy-subagent.sh" "$SETTINGS" 2>/dev/null && SUBAGENT_INSTALLED=true
fi

if $SESSION_INSTALLED && $TOOL_INSTALLED && $SUBAGENT_INSTALLED; then
  echo "[ntfy chat] All hooks already installed, updated scripts only. Topic: $NTFY_TOPIC"
  exit 0
fi

# --- 4. Merge hooks into settings.json ---
SESSION_ENTRY='{"hooks":[{"type":"command","command":"'"$HOOK_CMD"'","timeout":3}]}'
TOOL_ENTRY='{"hooks":[{"type":"command","command":"'"$TOOL_HOOK_CMD"'","timeout":5}]}'
SUBAGENT_ENTRY='{"hooks":[{"type":"command","command":"'"$SUBAGENT_HOOK_CMD"'","timeout":5}]}'

# Ensure settings file exists
if [ ! -f "$SETTINGS" ]; then
  mkdir -p "$(dirname "$SETTINGS")"
  echo '{}' > "$SETTINGS"
fi

# Add SessionStart hook
if ! $SESSION_INSTALLED; then
  if jq -e '.hooks.SessionStart' "$SETTINGS" >/dev/null 2>&1; then
    jq --argjson entry "$SESSION_ENTRY" '.hooks.SessionStart += [$entry]' "$SETTINGS" > "$SETTINGS.tmp"
  elif jq -e '.hooks' "$SETTINGS" >/dev/null 2>&1; then
    jq --argjson entry "$SESSION_ENTRY" '.hooks.SessionStart = [$entry]' "$SETTINGS" > "$SETTINGS.tmp"
  else
    jq --argjson entry "$SESSION_ENTRY" '. + {hooks:{SessionStart:[$entry]}}' "$SETTINGS" > "$SETTINGS.tmp"
  fi
  mv "$SETTINGS.tmp" "$SETTINGS"
fi

# Add PreToolUse hook
if ! $TOOL_INSTALLED; then
  if jq -e '.hooks.PreToolUse' "$SETTINGS" >/dev/null 2>&1; then
    jq --argjson entry "$TOOL_ENTRY" '.hooks.PreToolUse += [$entry]' "$SETTINGS" > "$SETTINGS.tmp"
  elif jq -e '.hooks' "$SETTINGS" >/dev/null 2>&1; then
    jq --argjson entry "$TOOL_ENTRY" '.hooks.PreToolUse = [$entry]' "$SETTINGS" > "$SETTINGS.tmp"
  else
    jq --argjson entry "$TOOL_ENTRY" '.hooks += {PreToolUse:[$entry]}' "$SETTINGS" > "$SETTINGS.tmp"
  fi
  mv "$SETTINGS.tmp" "$SETTINGS"
fi

# Add SubagentStart hook
if ! $SUBAGENT_INSTALLED; then
  if jq -e '.hooks.SubagentStart' "$SETTINGS" >/dev/null 2>&1; then
    jq --argjson entry "$SUBAGENT_ENTRY" '.hooks.SubagentStart += [$entry]' "$SETTINGS" > "$SETTINGS.tmp"
  elif jq -e '.hooks' "$SETTINGS" >/dev/null 2>&1; then
    jq --argjson entry "$SUBAGENT_ENTRY" '.hooks.SubagentStart = [$entry]' "$SETTINGS" > "$SETTINGS.tmp"
  else
    jq --argjson entry "$SUBAGENT_ENTRY" '.hooks += {SubagentStart:[$entry]}' "$SETTINGS" > "$SETTINGS.tmp"
  fi
  mv "$SETTINGS.tmp" "$SETTINGS"

  # Also add SubagentStop (same script handles both events)
  if jq -e '.hooks.SubagentStop' "$SETTINGS" >/dev/null 2>&1; then
    jq --argjson entry "$SUBAGENT_ENTRY" '.hooks.SubagentStop += [$entry]' "$SETTINGS" > "$SETTINGS.tmp"
  else
    jq --argjson entry "$SUBAGENT_ENTRY" '.hooks += {SubagentStop:[$entry]}' "$SETTINGS" > "$SETTINGS.tmp"
  fi
  mv "$SETTINGS.tmp" "$SETTINGS"
fi

echo "[ntfy chat] Hook installed! Topic: $NTFY_TOPIC"
echo "  View agents at: https://github.com/user/notis (run the React app)"
echo "  Override topic anytime with: NTFY_TOPIC=my-topic"
