export default function Human({ color, size = 64 }) {
  const skinTone = `hsl(30, 50%, 75%)`
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <rect x="16" y="34" width="32" height="24" rx="8" fill={color} />
      <circle cx="32" cy="22" r="14" fill={skinTone} />
      <circle cx="26" cy="20" r="2.5" fill="#222" />
      <circle cx="38" cy="20" r="2.5" fill="#222" />
      <path d="M27 28 Q32 33 37 28" stroke="#222" strokeWidth="2" fill="none" strokeLinecap="round" />
      <rect x="18" y="10" width="28" height="6" rx="3" fill={color} />
    </svg>
  )
}
