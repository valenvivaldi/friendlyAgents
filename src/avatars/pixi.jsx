export default function Pixi({ color, size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <circle cx="32" cy="30" r="26" fill={color} opacity="0.1" />
      <circle cx="32" cy="30" r="18" fill={color} opacity="0.15" />
      <ellipse cx="18" cy="28" rx="10" ry="6" fill={color} opacity="0.4" transform="rotate(-20 18 28)" />
      <ellipse cx="20" cy="28" rx="7" ry="4" fill={color} opacity="0.3" transform="rotate(-20 20 28)" />
      <ellipse cx="46" cy="28" rx="10" ry="6" fill={color} opacity="0.4" transform="rotate(20 46 28)" />
      <ellipse cx="44" cy="28" rx="7" ry="4" fill={color} opacity="0.3" transform="rotate(20 44 28)" />
      <ellipse cx="32" cy="32" rx="8" ry="10" fill="#fff" opacity="0.9" />
      <ellipse cx="32" cy="32" rx="8" ry="10" fill={color} opacity="0.3" />
      <circle cx="29" cy="29" r="1.5" fill="#333" />
      <circle cx="35" cy="29" r="1.5" fill="#333" />
      <circle cx="29.7" cy="28.3" r="0.6" fill="#fff" opacity="0.8" />
      <circle cx="35.7" cy="28.3" r="0.6" fill="#fff" opacity="0.8" />
      <circle cx="26.5" cy="32" r="1.8" fill="#fca5a5" opacity="0.5" />
      <circle cx="37.5" cy="32" r="1.8" fill="#fca5a5" opacity="0.5" />
      <path d="M30 33 Q32 35.5 34 33" stroke="#555" strokeWidth="1" fill="none" strokeLinecap="round" />
      <circle cx="14" cy="16" r="1" fill="#fff" opacity="0.6" />
      <circle cx="50" cy="20" r="0.8" fill="#fff" opacity="0.5" />
      <circle cx="22" cy="48" r="0.7" fill="#fff" opacity="0.4" />
      <circle cx="44" cy="44" r="0.9" fill="#fff" opacity="0.5" />
    </svg>
  )
}
