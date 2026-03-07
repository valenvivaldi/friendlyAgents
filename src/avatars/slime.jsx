export default function Slime({ color, size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <path d="M12 40 Q12 20 32 14 Q52 20 52 40 Q52 56 32 58 Q12 56 12 40Z" fill={color} opacity="0.85" />
      <ellipse cx="24" cy="22" rx="6" ry="4" fill="#fff" opacity="0.45" />
      <circle cx="22" cy="20" r="2.5" fill="#fff" opacity="0.6" />
      <ellipse cx="24" cy="34" rx="3.5" ry="4" fill="#222" />
      <ellipse cx="25" cy="32.5" rx="1.8" ry="1.8" fill="#fff" opacity="0.85" />
      <ellipse cx="40" cy="34" rx="3.5" ry="4" fill="#222" />
      <ellipse cx="41" cy="32.5" rx="1.8" ry="1.8" fill="#fff" opacity="0.85" />
      <path d="M28 42 Q32 46 36 42" stroke="#222" strokeWidth="1.5" fill="none" strokeLinecap="round" />
      <circle cx="18" cy="40" r="3" fill="#e88ca5" opacity="0.4" />
      <circle cx="46" cy="40" r="3" fill="#e88ca5" opacity="0.4" />
      <ellipse cx="36" cy="50" rx="4" ry="2" fill={color} opacity="0.5" />
    </svg>
  )
}
