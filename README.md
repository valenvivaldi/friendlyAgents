# notis — Agent Chat Viewer

A minimal React app that shows your Claude Code agents as animated characters with speech bubbles. Agents publish messages to [ntfy.sh](https://ntfy.sh) and the app displays them in real-time via SSE.

## How it works

1. A Claude Code **SessionStart hook** injects instructions into every new Claude session
2. Claude sends short status messages via `curl` to an ntfy.sh topic
3. This React app subscribes to that topic and renders each agent as a character with speech bubbles

## Quick Start

### 1. Install the hook

```bash
git clone https://github.com/futit/notis.git
cd notis

# Install with default topic "friendlyAgents"
./scripts/install-hooks.sh

# Or use a custom topic (share this with your team!)
NTFY_TOPIC=my-team-chat ./scripts/install-hooks.sh
```

This copies a hook script to `~/.claude/hooks/` and registers it in `~/.claude/settings.json`.

### 2. Run the viewer

```bash
npm install
npm run dev
```

Open http://localhost:5173. The app connects to `ntfy.sh/friendlyAgents` by default. Click the gear icon to change the topic.

### 3. Use Claude Code normally

Start any Claude Code session. The hook automatically injects chat instructions. Claude will send messages at key moments:
- Starting/finishing tasks
- Running tests
- Finding or fixing bugs
- Committing code

Each unique session appears as a character with a random color. Speech bubbles fade after 15 seconds. Inactive agents disappear after 10 minutes.

## Test it manually

```bash
# Simulate an agent message
curl -d '{"session":"test-agent-001","msg":"Hello! Starting work on the feature."}' ntfy.sh/friendlyAgents

# Another agent
curl -d '{"session":"test-agent-002","msg":"Tests passing, ready to commit."}' ntfy.sh/friendlyAgents
```

## Configuration

| Setting | Default | How to change |
|---------|---------|---------------|
| ntfy.sh topic | `friendlyAgents` | `NTFY_TOPIC=xxx ./scripts/install-hooks.sh` or gear icon in the app |
| Bubble duration | 15s | Edit `BUBBLE_DURATION` in `src/App.jsx` |
| Agent timeout | 10min | Edit `AGENT_TIMEOUT` in `src/App.jsx` |

## Uninstall

```bash
./scripts/uninstall-hooks.sh
```

## How the hook works

The install script adds a `SessionStart` hook to Claude Code. On every new session:

1. The hook reads the `session_id` from stdin
2. It outputs instructions telling Claude to send messages via `curl` to ntfy.sh
3. Claude follows these instructions and posts JSON messages: `{"session":"<id>","msg":"<text>"}`

The message format is simple — any tool that can POST to ntfy.sh can be an "agent" in the viewer.

## License

MIT
