export default function Knight({ color, size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <path d="M20 30 L14 56 Q32 52 50 56 L44 30" fill={color} opacity="0.8" />
      <path d="M20 30 L16 52 Q32 49 48 52 L44 30" fill={color} opacity="0.5" />
      <rect x="20" y="30" width="24" height="18" rx="4" fill="#888" />
      <rect x="24" y="34" width="16" height="10" rx="2" fill="#777" />
      <line x1="32" y1="34" x2="32" y2="44" stroke="#999" strokeWidth="1" />
      <rect x="14" y="32" width="6" height="12" rx="3" fill="#888" />
      <rect x="44" y="32" width="6" height="12" rx="3" fill="#888" />
      <rect x="52" y="20" width="2" height="22" rx="1" fill="#bbb" />
      <rect x="49" y="40" width="8" height="2.5" rx="1" fill="#d4a843" />
      <rect x="52" y="42" width="2" height="6" rx="1" fill="#8B4513" />
      <path d="M6 30 L6 42 Q10 50 14 42 L14 30 Z" fill="#777" />
      <path d="M7.5 32 L7.5 41 Q10 47 12.5 41 L12.5 32 Z" fill="#666" />
      <circle cx="10" cy="37" r="3" fill={color} opacity="0.9" />
      <circle cx="10" cy="37" r="1.5" fill="#fff" opacity="0.4" />
      <rect x="22" y="48" width="8" height="10" rx="3" fill="#777" />
      <rect x="34" y="48" width="8" height="10" rx="3" fill="#777" />
      <rect x="21" y="55" width="10" height="5" rx="2.5" fill="#666" />
      <rect x="33" y="55" width="10" height="5" rx="2.5" fill="#666" />
      <rect x="18" y="6" width="28" height="24" rx="6" fill="#999" />
      <rect x="20" y="16" width="24" height="8" rx="2" fill="#666" />
      <rect x="22" y="18" width="20" height="4" rx="1" fill="#1a1a2e" />
      <circle cx="28" cy="20" r="2" fill={color} opacity="0.9" />
      <circle cx="28" cy="19.5" r="0.8" fill="#fff" opacity="0.6" />
      <circle cx="36" cy="20" r="2" fill={color} opacity="0.9" />
      <circle cx="36" cy="19.5" r="0.8" fill="#fff" opacity="0.6" />
      <path d="M32 2 L30 8 L34 8 Z" fill="#bbb" />
      <rect x="30" y="6" width="4" height="4" rx="1" fill="#aaa" />
    </svg>
  )
}
