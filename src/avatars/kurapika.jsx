export default function Kurapika({ color, size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Chain dangling from left hand */}
      <circle cx="14" cy="48" r="1.2" stroke={color} strokeWidth="0.8" fill="none" />
      <circle cx="14" cy="51" r="1.2" stroke={color} strokeWidth="0.8" fill="none" />
      <circle cx="14" cy="54" r="1.2" stroke={color} strokeWidth="0.8" fill="none" />
      <line x1="14" y1="46" x2="14" y2="55.2" stroke="#aaa" strokeWidth="0.5" />

      {/* Body / Blue tabard */}
      <rect x="23" y="38" width="18" height="16" rx="3" fill="#1565c0" />
      {/* White undershirt */}
      <rect x="26" y="38" width="12" height="10" rx="2" fill="#f0f0f0" />
      {/* Tabard center line */}
      <line x1="32" y1="38" x2="32" y2="54" stroke="#0d47a1" strokeWidth="0.8" />

      {/* Arms */}
      <rect x="16" y="39" width="8" height="5" rx="2.5" fill="#1565c0" />
      <rect x="40" y="39" width="8" height="5" rx="2.5" fill="#1565c0" />
      {/* Hands */}
      <circle cx="15" cy="42" r="2.5" fill="#fcd9b6" />
      <circle cx="49" cy="42" r="2.5" fill="#fcd9b6" />

      {/* Legs */}
      <rect x="25" y="53" width="5" height="8" rx="2" fill="#333" />
      <rect x="34" y="53" width="5" height="8" rx="2" fill="#333" />
      {/* Shoes */}
      <rect x="24" y="58" width="7" height="3" rx="1.5" fill="#444" />
      <rect x="33" y="58" width="7" height="3" rx="1.5" fill="#444" />

      {/* Head */}
      <circle cx="32" cy="25" r="13" fill="#fcd9b6" />

      {/* Hair - blonde bob cut */}
      <ellipse cx="32" cy="20" rx="14" ry="11" fill="#f0c040" />
      {/* Hair fringe - straight bangs */}
      <rect x="20" y="16" width="24" height="8" rx="2" fill="#f0c040" />
      {/* Side hair left */}
      <rect x="18" y="18" width="5" height="16" rx="2.5" fill="#f0c040" />
      {/* Side hair right */}
      <rect x="41" y="18" width="5" height="16" rx="2.5" fill="#f0c040" />
      {/* Bangs detail line */}
      <line x1="26" y1="16" x2="26" y2="23" stroke="#d4a030" strokeWidth="0.6" />
      <line x1="32" y1="15" x2="32" y2="23" stroke="#d4a030" strokeWidth="0.6" />
      <line x1="38" y1="16" x2="38" y2="23" stroke="#d4a030" strokeWidth="0.6" />

      {/* Eyes - one normal, one scarlet */}
      <ellipse cx="27" cy="26" rx="2.5" ry="2.8" fill="#fff" />
      <ellipse cx="37" cy="26" rx="2.5" ry="2.8" fill="#fff" />
      {/* Left iris - calm brown */}
      <ellipse cx="27.3" cy="26.5" rx="1.5" ry="1.8" fill="#5d4037" />
      {/* Right iris - scarlet (color prop) */}
      <ellipse cx="37.3" cy="26.5" rx="1.5" ry="1.8" fill={color} />
      {/* Scarlet eye glow */}
      <ellipse cx="37.3" cy="26.5" rx="3" ry="3.2" fill={color} opacity="0.15" />
      {/* Pupils */}
      <circle cx="27.5" cy="27" r="0.7" fill="#222" />
      <circle cx="37.5" cy="27" r="0.7" fill="#222" />

      {/* Stern eyebrows */}
      <line x1="24" y1="22.5" x2="29.5" y2="23" stroke="#8a6c20" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="40" y1="22.5" x2="34.5" y2="23" stroke="#8a6c20" strokeWidth="1.2" strokeLinecap="round" />

      {/* Small serious mouth */}
      <line x1="29.5" y1="31" x2="34.5" y2="31" stroke="#a0724a" strokeWidth="1" strokeLinecap="round" />

      {/* Earring on left ear */}
      <circle cx="18.5" cy="28" r="1.2" fill={color} />
    </svg>
  )
}
