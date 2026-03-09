import { useState, useEffect, useRef, useCallback } from 'react'
import './App.css'
import { NTFY_BASE_URL, DEFAULT_TOPIC, BUBBLE_DURATION, AGENT_TIMEOUT } from './config'
import { getRandomAvatar, AVATAR_LIST } from './avatars/index'

function randomColor() {
  const hue = Math.floor(Math.random() * 360)
  return `hsl(${hue}, 70%, 55%)`
}

function GearIcon({ onClick }) {
  return (
    <button className="gear-btn" onClick={onClick} title="Settings">
      <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
        <path d="M8.5 1h3l.4 2.4a6.5 6.5 0 0 1 1.6.9l2.3-.8 1.5 2.6-1.9 1.6a6.5 6.5 0 0 1 0 1.8l1.9 1.6-1.5 2.6-2.3-.8a6.5 6.5 0 0 1-1.6.9L11.5 19h-3l-.4-2.4a6.5 6.5 0 0 1-1.6-.9l-2.3.8-1.5-2.6 1.9-1.6a6.5 6.5 0 0 1 0-1.8L2.7 8.9l1.5-2.6 2.3.8a6.5 6.5 0 0 1 1.6-.9L8.5 1zM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"/>
      </svg>
    </button>
  )
}

function SettingsModal({ topic, onSave, onClose }) {
  const [value, setValue] = useState(topic)
  function handleSubmit(e) {
    e.preventDefault()
    if (value.trim()) onSave(value.trim())
  }
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <h2>Settings</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Topic
            <input
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              autoFocus
            />
          </label>
          <div className="modal-actions">
            <button type="button" className="btn-secondary" onClick={onClose}>Cancel</button>
            <button type="submit">Save</button>
          </div>
        </form>
      </div>
    </div>
  )
}

function parseMessage(text) {
  // register:ownerName:["avatar1","avatar2"]
  if (text.startsWith('register:')) {
    const firstColon = text.indexOf(':')
    const secondColon = text.indexOf(':', firstColon + 1)
    const ownerName = text.substring(firstColon + 1, secondColon) || null
    let whitelist = []
    try { whitelist = JSON.parse(text.substring(secondColon + 1)) } catch {}
    return { type: 'register', ownerName, whitelist }
  }
  // subagent:start:agentId:agentType
  // subagent:stop:agentId
  // subagent:msg:agentId:text
  // subagent:tool:agentId:text
  if (text.startsWith('subagent:')) {
    const parts = text.split(':')
    const action = parts[1]
    const agentId = parts[2]
    const rest = parts.slice(3).join(':')
    return { type: 'subagent', action, agentId, text: rest }
  }
  return { type: 'message', text }
}

function formatMessage(text) {
  if (text.startsWith('tool:')) {
    const toolName = text.slice(5)
    return { display: toolName, icon: '\u{1F527}', isToolMsg: true }
  }
  return { display: text, icon: null, isToolMsg: false }
}

function SpeechBubble({ text, fading }) {
  const { display, icon, isToolMsg } = formatMessage(text)
  return (
    <div className={`bubble ${fading ? 'bubble-fade' : ''} ${isToolMsg ? 'bubble-tool' : ''}`}>
      <div className="bubble-text">
        {icon && <span className="tool-icon">{icon}</span>}
        {display}
      </div>
      <div className="bubble-arrow" />
    </div>
  )
}

function AgentCard({ sessionId, agent, shortId, cycleAvatar, getAvatar }) {
  return (
    <div
      className={`agent-card ${!agent.visible ? 'agent-fade-out' : 'agent-fade-in'}`}
    >
      <div className="agent-bubbles">
        {agent.bubble && (
          <SpeechBubble key={agent.bubble.id} text={agent.bubble.text} fading={agent.bubble.fading} />
        )}
      </div>
      <div className="agent-row">
        <div className="agent-body" onDoubleClick={() => cycleAvatar(sessionId)} style={{ cursor: 'pointer' }}>
          {(() => { const Avatar = getAvatar(sessionId, agent.avatarWhitelist); return <div className={`avatar-idle idle-${Avatar.displayName || 'default'}`}><Avatar color={agent.color} /></div> })()}
          <div className="agent-info">
            <span className="agent-id" style={{ color: agent.color }}>{shortId(sessionId)}</span>
            {agent.ownerName && <span className="agent-owner">{agent.ownerName}</span>}
          </div>
        </div>
        {agent.subagents && Object.entries(agent.subagents).map(([subId, sub]) => (
          <div
            key={subId}
            className={`subagent-card ${sub.visible ? 'agent-fade-in' : 'agent-fade-out'}`}
          >
            {sub.bubble && (
              <div className="subagent-bubble-wrap">
                <SpeechBubble key={sub.bubble.id} text={sub.bubble.text} fading={sub.bubble.fading} />
              </div>
            )}
            <div className="subagent-body">
              {(() => { const Avatar = getAvatar(sessionId, agent.avatarWhitelist); return <div className={`avatar-idle idle-${Avatar.displayName || 'default'}`}><Avatar color={agent.color} size={36} /></div> })()}
              <span className="subagent-label">{sub.type || 'sub'}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function App() {
  const [topic, setTopic] = useState(() => localStorage.getItem('ntfy-topic') || DEFAULT_TOPIC)
  const [agents, setAgents] = useState({})
  const [showSettings, setShowSettings] = useState(false)
  const [groupByOwner, setGroupByOwner] = useState(() => localStorage.getItem('group-by-owner') === 'true')
  const eventSourceRef = useRef(null)
  const agentColorsRef = useRef({})
  const avatarOverrides = useRef({})
  const timersRef = useRef([])

  const getAgentColor = useCallback((sessionId) => {
    if (!agentColorsRef.current[sessionId]) {
      agentColorsRef.current[sessionId] = randomColor()
    }
    return agentColorsRef.current[sessionId]
  }, [])

  const getAvatar = useCallback((sessionId, whitelist) => {
    if (avatarOverrides.current[sessionId] != null) {
      return AVATAR_LIST[avatarOverrides.current[sessionId]]
    }
    return getRandomAvatar(sessionId, whitelist)
  }, [])

  const cycleAvatar = useCallback((sessionId) => {
    const current = avatarOverrides.current[sessionId]
    if (current != null) {
      avatarOverrides.current[sessionId] = (current + 1) % AVATAR_LIST.length
    } else {
      const currentAvatar = getRandomAvatar(sessionId)
      const idx = AVATAR_LIST.indexOf(currentAvatar)
      avatarOverrides.current[sessionId] = (idx + 1) % AVATAR_LIST.length
    }
    setAgents((prev) => ({ ...prev }))
  }, [])

  const clearAllTimers = useCallback(() => {
    timersRef.current.forEach(clearTimeout)
    timersRef.current = []
  }, [])

  const subscribe = useCallback((topicName) => {
    if (eventSourceRef.current) eventSourceRef.current.close()
    clearAllTimers()

    const es = new EventSource(`${NTFY_BASE_URL}/${topicName}/sse?since=10m`)

    es.onmessage = (e) => {
      try {
        const data = JSON.parse(e.data)
        if (data.event !== 'message') return

        let parsed
        try {
          // ntfy.sh escapes certain chars (e.g. \!) which breaks JSON.parse
          const sanitized = data.message.replace(/\\([^"\\\/bfnrtu])/g, '$1')
          parsed = JSON.parse(sanitized)
        } catch {
          parsed = { session: 'unknown', msg: data.message }
        }

        const { session, msg } = parsed
        if (!session || !msg) return

        const now = Date.now()
        const parsed2 = parseMessage(msg)

        if (parsed2.type === 'register') {
          const color = getAgentColor(session)
          setAgents((prev) => {
            const existing = prev[session]
            return {
              ...prev,
              [session]: {
                ...existing,
                color,
                lastSeen: now,
                visible: true,
                subagents: existing?.subagents || {},
                bubble: existing?.bubble || null,
                ownerName: parsed2.ownerName || existing?.ownerName || null,
                avatarWhitelist: parsed2.whitelist?.length ? parsed2.whitelist : (existing?.avatarWhitelist || null),
              },
            }
          })
          return
        }

        if (parsed2.type === 'subagent') {
          const { action, agentId, text: subText } = parsed2
          setAgents((prev) => {
            const agent = prev[session]
            if (!agent) return prev
            const subagents = { ...(agent.subagents || {}) }

            if (action === 'start') {
              subagents[agentId] = {
                type: subText,
                bubble: null,
                visible: true,
              }
            } else if (action === 'stop') {
              if (subagents[agentId]) {
                subagents[agentId] = { ...subagents[agentId], visible: false }
                const removeTimer = setTimeout(() => {
                  setAgents((p) => {
                    const a = p[session]
                    if (!a) return p
                    const s = { ...(a.subagents || {}) }
                    delete s[agentId]
                    return { ...p, [session]: { ...a, subagents: s } }
                  })
                }, 1000)
                timersRef.current.push(removeTimer)
              }
            } else if (action === 'msg' || action === 'tool') {
              const bubbleText = action === 'tool' ? subText : subText
              if (subagents[agentId]) {
                const bubbleId = `${now}-${Math.random()}`
                subagents[agentId] = {
                  ...subagents[agentId],
                  bubble: { id: bubbleId, text: bubbleText, fading: false },
                }
                const fadeTimer = setTimeout(() => {
                  setAgents((p) => {
                    const a = p[session]
                    if (!a?.subagents?.[agentId]?.bubble) return p
                    if (a.subagents[agentId].bubble.id !== bubbleId) return p
                    const s = { ...a.subagents }
                    s[agentId] = { ...s[agentId], bubble: { ...s[agentId].bubble, fading: true } }
                    return { ...p, [session]: { ...a, subagents: s } }
                  })
                }, BUBBLE_DURATION - 1000)
                const removeTimer = setTimeout(() => {
                  setAgents((p) => {
                    const a = p[session]
                    if (!a?.subagents?.[agentId]?.bubble) return p
                    if (a.subagents[agentId].bubble.id !== bubbleId) return p
                    const s = { ...a.subagents }
                    s[agentId] = { ...s[agentId], bubble: null }
                    return { ...p, [session]: { ...a, subagents: s } }
                  })
                }, BUBBLE_DURATION)
                timersRef.current.push(fadeTimer, removeTimer)
              }
            }

            return {
              ...prev,
              [session]: { ...agent, lastSeen: now, subagents },
            }
          })
          return
        }

        // Regular message
        const bubbleId = `${now}-${Math.random()}`
        const color = getAgentColor(session)

        setAgents((prev) => {
          const existing = prev[session]
          return {
            ...prev,
            [session]: {
              color,
              lastSeen: now,
              visible: true,
              subagents: existing?.subagents || {},
              bubble: { id: bubbleId, text: msg, createdAt: now, fading: false },
            },
          }
        })

        const fadeTimer = setTimeout(() => {
          setAgents((prev) => {
            const agent = prev[session]
            if (!agent || !agent.bubble || agent.bubble.id !== bubbleId) return prev
            return {
              ...prev,
              [session]: {
                ...agent,
                bubble: { ...agent.bubble, fading: true },
              },
            }
          })
        }, BUBBLE_DURATION - 1000)

        const removeTimer = setTimeout(() => {
          setAgents((prev) => {
            const agent = prev[session]
            if (!agent || !agent.bubble || agent.bubble.id !== bubbleId) return prev
            return {
              ...prev,
              [session]: {
                ...agent,
                bubble: null,
              },
            }
          })
        }, BUBBLE_DURATION)

        timersRef.current.push(fadeTimer, removeTimer)
      } catch {
        // ignore
      }
    }

    eventSourceRef.current = es
  }, [getAgentColor, clearAllTimers])

  useEffect(() => {
    subscribe(topic)
    return () => {
      if (eventSourceRef.current) eventSourceRef.current.close()
      clearAllTimers()
    }
  }, [topic, subscribe, clearAllTimers])

  // Check for inactive agents every 30s
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now()
      setAgents((prev) => {
        let changed = false
        const next = {}
        for (const [id, agent] of Object.entries(prev)) {
          if (now - agent.lastSeen > AGENT_TIMEOUT && agent.visible) {
            next[id] = { ...agent, visible: false }
            changed = true
          } else {
            next[id] = agent
          }
        }
        if (!changed) return prev

        const cleanupTimer = setTimeout(() => {
          setAgents((p) => {
            const cleaned = {}
            for (const [id, agent] of Object.entries(p)) {
              if (agent.visible) {
                cleaned[id] = agent
              } else {
                delete agentColorsRef.current[id]
              }
            }
            return cleaned
          })
        }, 1000)
        timersRef.current.push(cleanupTimer)

        return next
      })
    }, 30_000)
    return () => clearInterval(interval)
  }, [])

  function handleSaveTopic(newTopic) {
    localStorage.setItem('ntfy-topic', newTopic)
    setTopic(newTopic)
    setAgents({})
    agentColorsRef.current = {}
    setShowSettings(false)
  }

  function toggleGroupByOwner() {
    setGroupByOwner((prev) => {
      const next = !prev
      localStorage.setItem('group-by-owner', String(next))
      return next
    })
  }

  const shortId = (id) => id.slice(0, 6)
  const agentEntries = Object.entries(agents)

  const groupedEntries = groupByOwner
    ? Object.entries(
        agentEntries.reduce((groups, [sessionId, agent]) => {
          const owner = agent.ownerName || 'Unknown'
          if (!groups[owner]) groups[owner] = []
          groups[owner].push([sessionId, agent])
          return groups
        }, {})
      )
    : null

  return (
    <div className="container">
      <header className="header">
        <h1>Topic: <span className="topic-name">{topic}</span></h1>
        <span className="agent-count">{agentEntries.length} agent{agentEntries.length !== 1 && 's'}</span>
        <button
          className={`group-btn ${groupByOwner ? 'group-btn-active' : ''}`}
          onClick={toggleGroupByOwner}
          title="Group by owner"
        >
          <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
            <path d="M7 4a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm-4 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm12 0a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm-8 6a5 5 0 0 1 6 0H7zm-4 0a5 5 0 0 1 4-2h0a5 5 0 0 1-4 2zm12 0a5 5 0 0 1-4 2h0a5 5 0 0 1 4-2z"/>
          </svg>
        </button>
        <GearIcon onClick={() => setShowSettings(true)} />
      </header>

      {showSettings && (
        <SettingsModal
          topic={topic}
          onSave={handleSaveTopic}
          onClose={() => setShowSettings(false)}
        />
      )}

      {agentEntries.length === 0 ? (
        <p className="waiting">Waiting for agents...</p>
      ) : groupByOwner && groupedEntries ? (
        <div className="owner-groups">
          {groupedEntries.map(([owner, entries]) => (
            <div key={owner} className="owner-group">
              <div className="owner-group-label">{owner}</div>
              <div className="agents-grid">
                {entries.map(([sessionId, agent]) => (
                  <AgentCard key={sessionId} sessionId={sessionId} agent={agent} shortId={shortId} cycleAvatar={cycleAvatar} getAvatar={getAvatar} />
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="agents-grid">
          {agentEntries.map(([sessionId, agent]) => (
            <AgentCard key={sessionId} sessionId={sessionId} agent={agent} shortId={shortId} cycleAvatar={cycleAvatar} getAvatar={getAvatar} />
          ))}
        </div>
      )}
    </div>
  )
}

export default App
