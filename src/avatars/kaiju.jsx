export default function Kaiju({ color, size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <path d="M48 48 Q56 44 58 36 Q59 32 56 30" stroke={color} strokeWidth="6" strokeLinecap="round" fill="none" />
      <ellipse cx="32" cy="44" rx="18" ry="16" fill={color} />
      <ellipse cx="32" cy="48" rx="11" ry="10" fill="#fff" opacity="0.25" />
      <rect x="18" y="54" width="8" height="8" rx="3" fill={color} />
      <rect x="38" y="54" width="8" height="8" rx="3" fill={color} />
      <circle cx="20" cy="62" r="1" fill="#fff" opacity="0.5" />
      <circle cx="24" cy="62" r="1" fill="#fff" opacity="0.5" />
      <circle cx="40" cy="62" r="1" fill="#fff" opacity="0.5" />
      <circle cx="44" cy="62" r="1" fill="#fff" opacity="0.5" />
      <ellipse cx="14" cy="42" rx="4" ry="3" fill={color} />
      <ellipse cx="50" cy="42" rx="4" ry="3" fill={color} />
      <ellipse cx="32" cy="24" rx="14" ry="12" fill={color} />
      <polygon points="22,14 24,4 26,14" fill={color} />
      <polygon points="29,12 32,2 35,12" fill={color} />
      <polygon points="38,14 40,4 42,14" fill={color} />
      <polygon points="28,32 30,26 32,32" fill={color} />
      <polygon points="34,34 36,28 38,34" fill={color} />
      <ellipse cx="32" cy="32" rx="10" ry="4" fill="#444" />
      <polygon points="24,28 25.5,31 27,28" fill="#fff" />
      <polygon points="29,28 30.5,31 32,28" fill="#fff" />
      <polygon points="32,28 33.5,31 35,28" fill="#fff" />
      <polygon points="37,28 38.5,31 40,28" fill="#fff" />
      <polygon points="26,33 27.5,30 29,33" fill="#fff" />
      <polygon points="31,33 32.5,30 34,33" fill="#fff" />
      <polygon points="35,33 36.5,30 38,33" fill="#fff" />
      <ellipse cx="26" cy="22" rx="3.5" ry="3" fill="#fff" />
      <ellipse cx="38" cy="22" rx="3.5" ry="3" fill="#fff" />
      <ellipse cx="27" cy="22" rx="2" ry="2.2" fill="#222" />
      <ellipse cx="39" cy="22" rx="2" ry="2.2" fill="#222" />
      <circle cx="27.5" cy="21" r="0.8" fill="#fff" opacity="0.8" />
      <circle cx="39.5" cy="21" r="0.8" fill="#fff" opacity="0.8" />
      <line x1="23" y1="18" x2="28" y2="19" stroke="#222" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="41" y1="18" x2="36" y2="19" stroke="#222" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="30" cy="26" r="1" fill="#222" opacity="0.4" />
      <circle cx="34" cy="26" r="1" fill="#222" opacity="0.4" />
    </svg>
  )
}
