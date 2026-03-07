export default function Ghost({ color, size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <path d="M12,36 Q12,8 32,8 Q52,8 52,36 L52,54 L46,48 L40,54 L34,48 L28,54 L22,48 L16,54 L12,48 Z" fill={color} opacity="0.75" />
      <path d="M16,36 Q16,14 32,14 Q48,14 48,36 L48,48 L44,44 L40,48 L36,44 L32,48 L28,44 L24,48 L20,44 L16,48 Z" fill={color} opacity="0.45" />
      <ellipse cx="24" cy="30" rx="6" ry="7" fill="#fff" />
      <ellipse cx="26" cy="31" rx="3" ry="3.5" fill="#222" />
      <circle cx="25" cy="29.5" r="1.2" fill="#fff" opacity="0.8" />
      <ellipse cx="40" cy="30" rx="6" ry="7" fill="#fff" />
      <ellipse cx="42" cy="31" rx="3" ry="3.5" fill="#222" />
      <circle cx="41" cy="29.5" r="1.2" fill="#fff" opacity="0.8" />
      <path d="M27 40 Q32 46 37 40" stroke="#fff" strokeWidth="2" fill="none" strokeLinecap="round" />
    </svg>
  )
}
