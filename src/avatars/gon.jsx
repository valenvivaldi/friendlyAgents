export default function Gon({ color, size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Hair - tall spiky black hair standing straight up */}
      <path d="M22 22 L24 4 L27 18 L29 2 L32 16 L34 1 L37 17 L39 3 L42 22" fill="#222" />
      <path d="M20 24 L22 10 L25 22" fill="#222" />
      <path d="M39 22 L42 10 L44 24" fill="#222" />

      {/* Head shape */}
      <ellipse cx="32" cy="28" rx="13" ry="12" fill="#fcd9b6" />

      {/* Hair bangs over forehead */}
      <path d="M19 26 Q22 18 28 20 L24 26 Z" fill="#222" />
      <path d="M28 20 Q32 16 36 20 L32 24 Z" fill="#333" />
      <path d="M36 20 Q42 18 45 26 L40 26 Z" fill="#222" />

      {/* Eyes - big cheerful round eyes */}
      <ellipse cx="26" cy="28" rx="3.5" ry="4" fill="white" />
      <ellipse cx="38" cy="28" rx="3.5" ry="4" fill="white" />
      <ellipse cx="27" cy="28" rx="2" ry="2.5" fill="#4a2800" />
      <ellipse cx="39" cy="28" rx="2" ry="2.5" fill="#4a2800" />
      <circle cx="26" cy="27" r="1" fill="white" />
      <circle cx="38" cy="27" r="1" fill="white" />

      {/* Wide cheerful smile */}
      <path d="M27 33 Q32 38 37 33" stroke="#c47a5a" strokeWidth="1.5" strokeLinecap="round" fill="none" />

      {/* Body - green jacket */}
      <rect x="24" y="39" width="16" height="12" rx="3" fill="#2e7d32" />

      {/* Jacket trim accent using color prop */}
      <line x1="32" y1="39" x2="32" y2="51" stroke={color} strokeWidth="1.5" />
      <rect x="24" y="39" width="16" height="2.5" rx="1" fill={color} opacity="0.7" />

      {/* Arms */}
      <rect x="18" y="40" width="6" height="9" rx="3" fill="#2e7d32" />
      <rect x="40" y="40" width="6" height="9" rx="3" fill="#2e7d32" />

      {/* Hands */}
      <ellipse cx="21" cy="50" rx="3" ry="2" fill="#fcd9b6" />
      <ellipse cx="43" cy="50" rx="3" ry="2" fill="#fcd9b6" />

      {/* Green shorts */}
      <rect x="25" y="50" width="6" height="5" rx="1" fill="#1b5e20" />
      <rect x="33" y="50" width="6" height="5" rx="1" fill="#1b5e20" />

      {/* Boots */}
      <rect x="25" y="55" width="6" height="5" rx="2" fill="#444" />
      <rect x="33" y="55" width="6" height="5" rx="2" fill="#444" />

      {/* Boot accents using color prop */}
      <line x1="25" y1="57" x2="31" y2="57" stroke={color} strokeWidth="1" />
      <line x1="33" y1="57" x2="39" y2="57" stroke={color} strokeWidth="1" />
    </svg>
  )
}
