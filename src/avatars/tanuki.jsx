export default function Tanuki({ color, size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <path d="M48 46 Q58 40 56 30 Q55 26 52 28" stroke="#8B7355" strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M55 33 Q54 31 53 29" stroke="#5a4a3a" strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M56 38 Q56 36 55.5 34" stroke="#5a4a3a" strokeWidth="5" strokeLinecap="round" fill="none" />
      <ellipse cx="32" cy="52" rx="16" ry="11" fill="#8B7355" />
      <ellipse cx="32" cy="54" rx="10" ry="7" fill="#d4c4a8" />
      <circle cx="32" cy="26" r="16" fill="#8B7355" />
      <circle cx="17" cy="14" r="5" fill="#8B7355" />
      <circle cx="17" cy="14" r="3" fill="#d4c4a8" />
      <circle cx="47" cy="14" r="5" fill="#8B7355" />
      <circle cx="47" cy="14" r="3" fill="#d4c4a8" />
      <ellipse cx="24" cy="24" rx="7" ry="6" fill="#3d2b1f" />
      <ellipse cx="40" cy="24" rx="7" ry="6" fill="#3d2b1f" />
      <rect x="28" y="20" width="8" height="6" fill="#3d2b1f" rx="2" />
      <ellipse cx="24" cy="24" rx="3" ry="3.5" fill="#222" />
      <ellipse cx="25" cy="22.5" rx="1.5" ry="1.5" fill="#fff" opacity="0.85" />
      <circle cx="23" cy="25" r="0.7" fill="#fff" opacity="0.5" />
      <ellipse cx="40" cy="24" rx="3" ry="3.5" fill="#222" />
      <ellipse cx="41" cy="22.5" rx="1.5" ry="1.5" fill="#fff" opacity="0.85" />
      <circle cx="39" cy="25" r="0.7" fill="#fff" opacity="0.5" />
      <path d="M30 18 L32 14 L34 18" fill="#d4c4a8" />
      <circle cx="32" cy="30" r="2.5" fill="#222" />
      <path d="M29 33 Q32 36 35 33" stroke="#555" strokeWidth="1.2" fill="none" strokeLinecap="round" />
      <circle cx="19" cy="32" r="3" fill="#e88ca5" opacity="0.35" />
      <circle cx="45" cy="32" r="3" fill="#e88ca5" opacity="0.35" />
      <path d="M32 8 Q38 6 36 12 Q34 10 32 8Z" fill={color} />
      <line x1="32" y1="8" x2="35" y2="11" stroke={color} strokeWidth="0.8" opacity="0.7" />
      <ellipse cx="22" cy="60" rx="5" ry="3" fill="#8B7355" />
      <ellipse cx="42" cy="60" rx="5" ry="3" fill="#8B7355" />
      <path d="M18 38 Q32 44 46 38" stroke={color} strokeWidth="3" strokeLinecap="round" fill="none" />
      <polygon points="32,44 29,50 35,50" fill={color} />
    </svg>
  )
}
