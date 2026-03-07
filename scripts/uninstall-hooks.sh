#!/bin/bash
# uninstall-hooks.sh — Remove ntfy.sh agent chat hook
set -euo pipefail

SETTINGS="$HOME/.claude/settings.json"
HOOKS_DIR="$HOME/.claude/hooks"

if ! command -v jq &>/dev/null; then
  echo "Error: jq is required."
  exit 1
fi

# Remove hook script
rm -f "$HOOKS_DIR/ntfy-chat.sh"

# Remove from settings.json
if [ -f "$SETTINGS" ] && grep -q "ntfy-chat.sh" "$SETTINGS" 2>/dev/null; then
  jq '.hooks.SessionStart |= map(select(.hooks | all(.command | contains("ntfy-chat.sh") | not)))' "$SETTINGS" > "$SETTINGS.tmp"
  mv "$SETTINGS.tmp" "$SETTINGS"
  echo "[ntfy chat] Hook uninstalled."
else
  echo "[ntfy chat] Hook was not installed."
fi
