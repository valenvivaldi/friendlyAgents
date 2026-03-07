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
HOOK_CMD="$HOOKS_DIR/$HOOK_SCRIPT"

# --- Pre-checks ---
if ! command -v jq &>/dev/null; then
  echo "Error: jq is required. Install with: brew install jq (macOS) or apt install jq (Linux)"
  exit 1
fi

# --- 1. Copy hook script ---
mkdir -p "$HOOKS_DIR"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cp "$SCRIPT_DIR/ntfy-chat-hook.sh" "$HOOK_CMD"
chmod +x "$HOOK_CMD"

# --- 2. Bake topic into the installed hook ---
sed -i.bak "s|NTFY_TOPIC=\"\${NTFY_TOPIC:-friendlyAgents}\"|NTFY_TOPIC=\"\${NTFY_TOPIC:-${NTFY_TOPIC}}\"|" "$HOOK_CMD"
rm -f "$HOOK_CMD.bak"

# --- 3. Check if already installed ---
if [ -f "$SETTINGS" ] && grep -q "ntfy-chat.sh" "$SETTINGS" 2>/dev/null; then
  echo "[ntfy chat] Hook already installed, updated script only. Topic: $NTFY_TOPIC"
  exit 0
fi

# --- 4. Merge hook into settings.json ---
HOOK_ENTRY='{"hooks":[{"type":"command","command":"'"$HOOK_CMD"'","timeout":3}]}'

if [ ! -f "$SETTINGS" ]; then
  mkdir -p "$(dirname "$SETTINGS")"
  jq -n --argjson entry "$HOOK_ENTRY" '{hooks:{SessionStart:[$entry]}}' > "$SETTINGS"
elif jq -e '.hooks.SessionStart' "$SETTINGS" >/dev/null 2>&1; then
  jq --argjson entry "$HOOK_ENTRY" '.hooks.SessionStart += [$entry]' "$SETTINGS" > "$SETTINGS.tmp"
  mv "$SETTINGS.tmp" "$SETTINGS"
elif jq -e '.hooks' "$SETTINGS" >/dev/null 2>&1; then
  jq --argjson entry "$HOOK_ENTRY" '.hooks.SessionStart = [$entry]' "$SETTINGS" > "$SETTINGS.tmp"
  mv "$SETTINGS.tmp" "$SETTINGS"
else
  jq --argjson entry "$HOOK_ENTRY" '. + {hooks:{SessionStart:[$entry]}}' "$SETTINGS" > "$SETTINGS.tmp"
  mv "$SETTINGS.tmp" "$SETTINGS"
fi

echo "[ntfy chat] Hook installed! Topic: $NTFY_TOPIC"
echo "  View agents at: https://github.com/user/notis (run the React app)"
echo "  Override topic anytime with: NTFY_TOPIC=my-topic"
