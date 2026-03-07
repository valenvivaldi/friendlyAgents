export default function Killua({ color, size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Lightning sparks */}
      <path d="M10 14 L13 10 L12 13 L15 11" stroke={color} strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M50 12 L53 8 L52 12 L55 10" stroke={color} strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <path d="M8 36 L11 33 L10 36 L13 34" stroke={color} strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.7" />

      {/* Body / purple long-sleeve shirt */}
      <rect x="23" y="38" width="18" height="14" rx="3" fill="#5c35a0" />
      {/* Shirt collar */}
      <path d="M27 38 L32 42 L37 38" fill="#4a2a88" />

      {/* Arms - long sleeves */}
      <rect x="15" y="39" width="9" height="4" rx="2" fill="#5c35a0" />
      <rect x="40" y="39" width="9" height="4" rx="2" fill="#5c35a0" />
      {/* Hands */}
      <circle cx="15" cy="41" r="2.5" fill="#fcd9b6" />
      <circle cx="49" cy="41" r="2.5" fill="#fcd9b6" />

      {/* Shorts */}
      <rect x="24" y="51" width="7" height="5" rx="2" fill="#3a3a5c" />
      <rect x="33" y="51" width="7" height="5" rx="2" fill="#3a3a5c" />

      {/* Sneakers */}
      <rect x="23" y="55" width="8" height="4" rx="2" fill="#e0e0e8" />
      <rect x="33" y="55" width="8" height="4" rx="2" fill="#e0e0e8" />
      {/* Sneaker accents */}
      <rect x="24" y="57" width="6" height="1.5" rx="0.5" fill={color} />
      <rect x="34" y="57" width="6" height="1.5" rx="0.5" fill={color} />

      {/* Head */}
      <circle cx="32" cy="26" r="13" fill="#fcd9b6" />

      {/* Fluffy spiky silver hair */}
      <ellipse cx="32" cy="18" rx="15" ry="10" fill="#d0d0e0" />
      <polygon points="18,22 12,10 24,18" fill="#e8e8f0" />
      <polygon points="24,16 20,4 30,14" fill="#d0d0e0" />
      <polygon points="30,12 30,2 36,12" fill="#e8e8f0" />
      <polygon points="36,14 40,3 40,16" fill="#d0d0e0" />
      <polygon points="40,18 48,8 46,22" fill="#e8e8f0" />
      {/* Side fluff */}
      <ellipse cx="18" cy="24" rx="4" ry="5" fill="#d0d0e0" />
      <ellipse cx="46" cy="24" rx="4" ry="5" fill="#d0d0e0" />

      {/* Eyes - cat-like blue */}
      <ellipse cx="27" cy="27" rx="3" ry="3.5" fill="#fff" />
      <ellipse cx="37" cy="27" rx="3" ry="3.5" fill="#fff" />
      <ellipse cx="27.5" cy="27.5" rx="2" ry="2.5" fill="#4fc3f7" />
      <ellipse cx="37.5" cy="27.5" rx="2" ry="2.5" fill="#4fc3f7" />
      {/* Pupils - cat slit style */}
      <ellipse cx="28" cy="28" rx="0.7" ry="1.5" fill="#1a237e" />
      <ellipse cx="38" cy="28" rx="0.7" ry="1.5" fill="#1a237e" />
      {/* Eye shine */}
      <circle cx="26.5" cy="26.5" r="0.8" fill="#fff" />
      <circle cx="36.5" cy="26.5" r="0.8" fill="#fff" />

      {/* Mischievous eyebrows */}
      <path d="M24 23 L30 23.5" stroke="#555" strokeWidth="1" strokeLinecap="round" />
      <path d="M40 23 L34 23.5" stroke="#555" strokeWidth="1" strokeLinecap="round" />

      {/* Mischievous smirk */}
      <path d="M28 32 Q32 35 36 32" stroke="#a0735a" strokeWidth="0.9" strokeLinecap="round" fill="none" />
      <path d="M35 32 L36.5 31" stroke="#a0735a" strokeWidth="0.8" strokeLinecap="round" fill="none" />
    </svg>
  )
}
