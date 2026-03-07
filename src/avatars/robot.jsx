export default function Robot({ color, size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <line x1="24" y1="10" x2="24" y2="4" stroke="#888" strokeWidth="2" strokeLinecap="round" />
      <circle cx="24" cy="3" r="2.5" fill={color} />
      <line x1="40" y1="10" x2="40" y2="4" stroke="#888" strokeWidth="2" strokeLinecap="round" />
      <circle cx="40" cy="3" r="2.5" fill={color} />
      <rect x="14" y="10" width="36" height="24" rx="4" fill="#555" />
      <rect x="18" y="14" width="28" height="16" rx="2" fill="#1a1a2e" />
      <circle cx="26" cy="22" r="4" fill={color} opacity="0.9" />
      <circle cx="26" cy="21" r="1.5" fill="#fff" opacity="0.7" />
      <circle cx="38" cy="22" r="4" fill={color} opacity="0.9" />
      <circle cx="38" cy="21" r="1.5" fill="#fff" opacity="0.7" />
      <rect x="25" y="28" width="3" height="2" rx="0.5" fill={color} opacity="0.7" />
      <rect x="30" y="28" width="4" height="2" rx="0.5" fill={color} opacity="0.7" />
      <rect x="36" y="28" width="3" height="2" rx="0.5" fill={color} opacity="0.7" />
      <rect x="28" y="34" width="8" height="4" rx="1" fill="#666" />
      <rect x="18" y="38" width="28" height="20" rx="4" fill="#555" />
      <rect x="22" y="42" width="20" height="12" rx="2" fill="#444" />
      <circle cx="28" cy="46" r="2" fill={color} opacity="0.8" />
      <circle cx="36" cy="46" r="2" fill="#e74c3c" opacity="0.7" />
      <rect x="26" y="50" width="12" height="2" rx="1" fill="#666" />
      <rect x="8" y="40" width="8" height="4" rx="2" fill="#666" />
      <rect x="6" y="44" width="6" height="8" rx="2" fill="#777" />
      <rect x="48" y="40" width="8" height="4" rx="2" fill="#666" />
      <rect x="52" y="44" width="6" height="8" rx="2" fill="#777" />
    </svg>
  )
}
