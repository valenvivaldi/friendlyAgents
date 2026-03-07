export default function Octo({ color, size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      <ellipse cx="32" cy="24" rx="20" ry="18" fill={color} />
      <circle cx="22" cy="16" r="3" fill="#fff" opacity="0.2" />
      <circle cx="40" cy="14" r="2" fill="#fff" opacity="0.15" />
      <circle cx="26" cy="30" r="2.5" fill="#fff" opacity="0.12" />
      <ellipse cx="25" cy="22" rx="5" ry="5.5" fill="#fff" />
      <ellipse cx="26" cy="22" rx="3" ry="3.5" fill="#222" />
      <ellipse cx="27" cy="20.5" rx="1.5" ry="1.5" fill="#fff" opacity="0.9" />
      <circle cx="25" cy="23" r="0.7" fill="#fff" opacity="0.5" />
      <ellipse cx="39" cy="22" rx="5" ry="5.5" fill="#fff" />
      <ellipse cx="40" cy="22" rx="3" ry="3.5" fill="#222" />
      <ellipse cx="41" cy="20.5" rx="1.5" ry="1.5" fill="#fff" opacity="0.9" />
      <circle cx="39" cy="23" r="0.7" fill="#fff" opacity="0.5" />
      <ellipse cx="32" cy="30" rx="2" ry="1.2" fill="#222" opacity="0.5" />
      <path d="M14 36 Q10 46 14 54" stroke={color} strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M22 38 Q18 48 22 56" stroke={color} strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M29 40 Q27 50 30 58" stroke={color} strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M35 40 Q37 50 34 58" stroke={color} strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M42 38 Q46 48 42 56" stroke={color} strokeWidth="5" strokeLinecap="round" fill="none" />
      <path d="M50 36 Q54 46 50 54" stroke={color} strokeWidth="5" strokeLinecap="round" fill="none" />
      <circle cx="13" cy="46" r="1.2" fill="#fff" opacity="0.3" />
      <circle cx="21" cy="48" r="1.2" fill="#fff" opacity="0.3" />
      <circle cx="43" cy="48" r="1.2" fill="#fff" opacity="0.3" />
      <circle cx="51" cy="46" r="1.2" fill="#fff" opacity="0.3" />
    </svg>
  )
}
