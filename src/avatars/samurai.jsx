export default function Samurai({ color, size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Katana on back - diagonal behind body */}
      <rect x="38" y="6" width="2.5" height="36" rx="1" transform="rotate(15 38 6)" fill="#888" />
      <rect x="37.5" y="5" width="3.5" height="5" rx="1" transform="rotate(15 38 6)" fill={color} />
      <rect x="39.5" y="38" width="3" height="6" rx="1" transform="rotate(15 39 38)" fill="#8B4513" />

      {/* Body / Kimono */}
      <rect x="19" y="38" width="26" height="18" rx="4" fill="#444" />
      {/* Kimono overlap / lapel */}
      <polygon points="26,38 32,50 38,38" fill="#555" />
      {/* Armor accent band */}
      <rect x="19" y="44" width="26" height="3" rx="1" fill={color} opacity="0.85" />
      {/* Belt / obi */}
      <rect x="20" y="48" width="24" height="3" rx="1" fill="#333" />

      {/* Legs */}
      <rect x="23" y="54" width="7" height="10" rx="3" fill="#444" />
      <rect x="34" y="54" width="7" height="10" rx="3" fill="#444" />

      {/* Head */}
      <circle cx="32" cy="24" r="14" fill="#f0d5a8" />

      {/* Hair base */}
      <ellipse cx="32" cy="18" rx="14" ry="10" fill="#222" />
      {/* Hair fringe */}
      <path d="M18 22 Q22 12 32 13 Q42 12 46 22 Q44 16 32 15 Q20 16 18 22Z" fill="#222" />

      {/* Topknot */}
      <ellipse cx="32" cy="7" rx="3" ry="5" fill="#222" />
      <rect x="30" y="10" width="4" height="4" rx="1" fill="#222" />
      {/* Hair tie ribbon */}
      <rect x="29" y="12" width="6" height="2.5" rx="1" fill={color} />

      {/* Eyes - stern but cute */}
      <ellipse cx="26" cy="25" rx="2.5" ry="2" fill="#fff" />
      <ellipse cx="38" cy="25" rx="2.5" ry="2" fill="#fff" />
      <ellipse cx="26.5" cy="25.2" rx="1.5" ry="1.5" fill="#333" />
      <ellipse cx="38.5" cy="25.2" rx="1.5" ry="1.5" fill="#333" />
      {/* Stern eyebrows */}
      <line x1="23" y1="21.5" x2="28.5" y2="22.5" stroke="#222" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="41" y1="21.5" x2="35.5" y2="22.5" stroke="#222" strokeWidth="1.5" strokeLinecap="round" />

      {/* Small determined mouth */}
      <line x1="29.5" y1="30" x2="34.5" y2="30" stroke="#666" strokeWidth="1.2" strokeLinecap="round" />

      {/* Arms */}
      <rect x="13" y="40" width="7" height="12" rx="3.5" fill="#444" />
      <rect x="44" y="40" width="7" height="12" rx="3.5" fill="#444" />
    </svg>
  )
}
