export default function Mech({ color, size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <polygon points="32,4 18,16 18,28 46,28 46,16" fill="#555" />
      <polygon points="22,18 42,18 40,26 24,26" fill={color} opacity="0.9" />
      <polygon points="24,19 34,19 33,22 25,22" fill="#fff" opacity="0.3" />
      <polygon points="30,4 32,0 34,4" fill={color} />
      <rect x="28" y="28" width="8" height="4" rx="1" fill="#666" />
      <polygon points="10,32 22,30 22,40 10,38" fill="#555" />
      <rect x="10" y="33" width="12" height="2" rx="1" fill={color} opacity="0.8" />
      <polygon points="54,32 42,30 42,40 54,38" fill="#555" />
      <rect x="42" y="33" width="12" height="2" rx="1" fill={color} opacity="0.8" />
      <rect x="22" y="32" width="20" height="20" rx="3" fill="#555" />
      <circle cx="32" cy="42" r="5" fill="#1a1a2e" />
      <circle cx="32" cy="42" r="3.5" fill={color} opacity="0.85" />
      <circle cx="31" cy="41" r="1.2" fill="#fff" opacity="0.5" />
      <rect x="25" y="34" width="4" height="2" rx="0.5" fill="#777" />
      <rect x="35" y="34" width="4" height="2" rx="0.5" fill="#777" />
      <rect x="12" y="40" width="8" height="10" rx="2" fill="#666" />
      <rect x="44" y="40" width="8" height="10" rx="2" fill="#666" />
      <rect x="24" y="52" width="7" height="8" rx="2" fill="#666" />
      <rect x="33" y="52" width="7" height="8" rx="2" fill="#666" />
      <rect x="22" y="58" width="9" height="4" rx="2" fill="#555" />
      <rect x="33" y="58" width="9" height="4" rx="2" fill="#555" />
    </svg>
  )
}
