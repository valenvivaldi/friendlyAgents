export default function Cat({ color, size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <path d="M48 50 Q58 42 54 32 Q52 28 50 30" stroke={color} strokeWidth="4" strokeLinecap="round" fill="none" />
      <ellipse cx="32" cy="50" rx="16" ry="12" fill={color} />
      <ellipse cx="22" cy="58" rx="4" ry="3" fill={color} />
      <ellipse cx="42" cy="58" rx="4" ry="3" fill={color} />
      <ellipse cx="22" cy="59" rx="2.5" ry="1.5" fill="#fce4d6" />
      <ellipse cx="42" cy="59" rx="2.5" ry="1.5" fill="#fce4d6" />
      <circle cx="32" cy="26" r="16" fill={color} />
      <polygon points="14,16 18,2 26,14" fill={color} />
      <polygon points="16,15 19,6 24,14" fill="#fce4d6" />
      <polygon points="50,16 46,2 38,14" fill={color} />
      <polygon points="48,15 45,6 40,14" fill="#fce4d6" />
      <ellipse cx="32" cy="30" rx="10" ry="8" fill="#fce4d6" opacity="0.6" />
      <ellipse cx="25" cy="24" rx="4" ry="4.5" fill="#222" />
      <ellipse cx="26" cy="22.5" rx="2" ry="2" fill="#fff" opacity="0.85" />
      <circle cx="24" cy="25" r="0.8" fill="#fff" opacity="0.5" />
      <ellipse cx="39" cy="24" rx="4" ry="4.5" fill="#222" />
      <ellipse cx="40" cy="22.5" rx="2" ry="2" fill="#fff" opacity="0.85" />
      <circle cx="38" cy="25" r="0.8" fill="#fff" opacity="0.5" />
      <polygon points="32,29 30,31 34,31" fill="#e88ca5" />
      <path d="M30 31 Q32 34 34 31" stroke="#555" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <line x1="8" y1="26" x2="22" y2="28" stroke="#888" strokeWidth="1" strokeLinecap="round" />
      <line x1="8" y1="30" x2="22" y2="30" stroke="#888" strokeWidth="1" strokeLinecap="round" />
      <line x1="8" y1="34" x2="22" y2="32" stroke="#888" strokeWidth="1" strokeLinecap="round" />
      <line x1="56" y1="26" x2="42" y2="28" stroke="#888" strokeWidth="1" strokeLinecap="round" />
      <line x1="56" y1="30" x2="42" y2="30" stroke="#888" strokeWidth="1" strokeLinecap="round" />
      <line x1="56" y1="34" x2="42" y2="32" stroke="#888" strokeWidth="1" strokeLinecap="round" />
    </svg>
  )
}
