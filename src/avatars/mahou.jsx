export default function Mahou({ color, size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Hair flowing silhouette */}
      <path d="M12 22 Q10 40 14 54 Q18 58 22 54 L20 30 Z" fill="#444" />
      <path d="M52 22 Q54 40 50 54 Q46 58 42 54 L44 30 Z" fill="#444" />
      <path d="M16 14 Q14 26 16 34 L22 28 Z" fill="#333" />
      <path d="M48 14 Q50 26 48 34 L42 28 Z" fill="#333" />
      {/* Head */}
      <ellipse cx="32" cy="22" rx="16" ry="15" fill="#fce4ec" />
      {/* Hair bangs */}
      <path d="M16 18 Q20 8 32 7 Q44 8 48 18 Q44 14 38 13 Q34 16 32 12 Q30 16 26 13 Q20 14 16 18Z" fill="#444" />
      {/* Tiara (color accent) */}
      <path d="M24 13 L26 9 L28 12 L30 7 L32 12 L34 7 L36 12 L38 9 L40 13" stroke={color} strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="32" cy="8" r="1.5" fill={color} />
      {/* Eyes */}
      <ellipse cx="26" cy="23" rx="3" ry="3.5" fill="#fff" />
      <ellipse cx="38" cy="23" rx="3" ry="3.5" fill="#fff" />
      <ellipse cx="26.5" cy="23.5" rx="2" ry="2.5" fill="#2c1654" />
      <ellipse cx="38.5" cy="23.5" rx="2" ry="2.5" fill="#2c1654" />
      <circle cx="25.5" cy="22" r="1" fill="#fff" opacity="0.9" />
      <circle cx="37.5" cy="22" r="1" fill="#fff" opacity="0.9" />
      {/* Blush */}
      <circle cx="22" cy="27" r="2" fill="#fca5a5" opacity="0.5" />
      <circle cx="42" cy="27" r="2" fill="#fca5a5" opacity="0.5" />
      {/* Mouth */}
      <path d="M30 29 Q32 31 34 29" stroke="#c06" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      {/* Body / outfit */}
      <path d="M26 36 L22 38 L20 50 Q32 54 44 50 L42 38 L38 36 Z" fill="#fff" />
      {/* Skirt (color accent) */}
      <path d="M20 44 Q18 54 16 58 Q32 62 48 58 Q46 54 44 44 Z" fill={color} opacity="0.85" />
      <path d="M22 44 Q20 52 19 56 Q32 59 45 56 Q44 52 42 44 Z" fill={color} opacity="0.5" />
      {/* Bow on chest (color accent) */}
      <path d="M28 38 Q32 36 32 39 Q32 36 36 38 Z" fill={color} />
      <circle cx="32" cy="38" r="1.2" fill={color} />
      {/* Arms */}
      <rect x="17" y="38" width="5" height="10" rx="2.5" fill="#fce4ec" />
      <rect x="42" y="38" width="5" height="10" rx="2.5" fill="#fce4ec" />
      {/* Wand */}
      <line x1="46" y1="40" x2="54" y2="28" stroke="#d4a843" strokeWidth="1.5" strokeLinecap="round" />
      {/* Wand star tip (color accent) */}
      <polygon points="54,23 55.5,27 59,27 56.5,29.5 57.5,33 54,30.5 50.5,33 51.5,29.5 49,27 52.5,27" fill={color} />
      <circle cx="54" cy="28" r="1.5" fill="#fff" opacity="0.7" />
      {/* Sparkles */}
      <circle cx="10" cy="12" r="0.8" fill={color} opacity="0.6" />
      <circle cx="56" cy="10" r="0.6" fill={color} opacity="0.5" />
    </svg>
  )
}
