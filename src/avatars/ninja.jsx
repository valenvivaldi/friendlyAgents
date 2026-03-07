export default function Ninja({ color, size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Hair - spiky top */}
      <path d="M16 22 L22 8 L26 18 L32 4 L38 18 L42 8 L48 22" fill="#222" />
      <path d="M14 22 L20 12 L24 20 L32 6 L40 20 L44 12 L50 22" fill="#333" />

      {/* Head */}
      <ellipse cx="32" cy="28" rx="16" ry="14" fill="#f5d6b8" />

      {/* Headband */}
      <rect x="14" y="20" width="36" height="6" rx="2" fill={color} />
      {/* Headband metal plate */}
      <rect x="25" y="20.5" width="14" height="5" rx="1.5" fill="#aaa" />
      <rect x="27" y="21.5" width="10" height="3" rx="1" fill="#ccc" />
      {/* Plate symbol - leaf/swirl */}
      <circle cx="32" cy="23" r="1.2" fill="#888" />
      <path d="M30.5 23 Q32 20.5 33.5 23" stroke="#888" strokeWidth="0.6" fill="none" />

      {/* Headband tails */}
      <path d="M14 23 L8 28 L10 26 L6 32" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" />
      <path d="M50 23 L56 28 L54 26 L58 32" stroke={color} strokeWidth="2" strokeLinecap="round" fill="none" />

      {/* Eyes - determined look */}
      <ellipse cx="26" cy="30" rx="3" ry="2.5" fill="#fff" />
      <ellipse cx="38" cy="30" rx="3" ry="2.5" fill="#fff" />
      <ellipse cx="27" cy="30.2" rx="1.8" ry="1.8" fill="#222" />
      <ellipse cx="39" cy="30.2" rx="1.8" ry="1.8" fill="#222" />
      {/* Eye shine */}
      <circle cx="27.8" cy="29.5" r="0.6" fill="#fff" />
      <circle cx="39.8" cy="29.5" r="0.6" fill="#fff" />
      {/* Determined eyebrows */}
      <path d="M23 27 L29 26" stroke="#333" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M41 27 L35 26" stroke="#333" strokeWidth="1.2" strokeLinecap="round" />

      {/* Mouth - small determined smile */}
      <path d="M30 34 Q32 35.5 34 34" stroke="#a0735a" strokeWidth="0.8" strokeLinecap="round" fill="none" />

      {/* Body / ninja outfit */}
      <path d="M22 42 L20 58 L44 58 L42 42 Z" fill="#444" />
      <path d="M24 42 Q32 38 40 42" fill="#444" />

      {/* Collar / outfit accent */}
      <path d="M26 42 L32 46 L38 42" fill={color} opacity="0.9" />

      {/* Arms */}
      <path d="M22 44 L12 50 L14 52 L22 48" fill="#444" />
      <path d="M42 44 L52 50 L50 52 L42 48" fill="#444" />
      {/* Hands */}
      <circle cx="12" cy="51" r="2" fill="#f5d6b8" />
      <circle cx="52" cy="51" r="2" fill="#f5d6b8" />

      {/* Belt */}
      <rect x="20" y="50" width="24" height="2.5" rx="1" fill="#666" />
      {/* Belt buckle */}
      <rect x="29" y="49.5" width="6" height="3.5" rx="1" fill="#888" />

      {/* Legs */}
      <rect x="23" y="58" width="7" height="4" rx="1" fill="#333" />
      <rect x="34" y="58" width="7" height="4" rx="1" fill="#333" />
    </svg>
  )
}
