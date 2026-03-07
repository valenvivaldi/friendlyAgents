export default function Hisoka({ color, size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Hair - slicked back magenta spikes */}
      <path d="M20 22 L32 2 L36 18 Z" fill="#c2185b" />
      <path d="M28 20 L38 1 L40 17 Z" fill="#ad1457" />
      <path d="M35 19 L44 4 L43 18 Z" fill="#c2185b" />
      <path d="M16 24 L24 6 L26 22 Z" fill="#ad1457" />
      <path d="M40 20 L48 8 L45 21 Z" fill="#ad1457" />

      {/* Head */}
      <ellipse cx="32" cy="28" rx="14" ry="13" fill="#fde0c8" />

      {/* Hair front band */}
      <path d="M18 24 Q25 18 32 20 Q39 18 46 24 Q42 17 32 16 Q22 17 18 24Z" fill="#c2185b" />

      {/* Eyes - narrow sly */}
      <path d="M24 27 Q26 25 28 27 Q26 28 24 27Z" fill="#333" />
      <path d="M36 27 Q38 25 40 27 Q38 28 36 27Z" fill="#333" />
      {/* Eye glints */}
      <circle cx="26.5" cy="26.5" r="0.6" fill="#fff" />
      <circle cx="38.5" cy="26.5" r="0.6" fill="#fff" />

      {/* Eyebrows - arched mischievous */}
      <path d="M23 24 Q26 22 29 23.5" stroke="#8e1050" strokeWidth="0.8" strokeLinecap="round" fill="none" />
      <path d="M35 23.5 Q38 22 41 24" stroke="#8e1050" strokeWidth="0.8" strokeLinecap="round" fill="none" />

      {/* Smirk */}
      <path d="M28 32 Q32 35 36 32" stroke="#b5564e" strokeWidth="0.9" strokeLinecap="round" fill="none" />
      <path d="M35 32 L37 31" stroke="#b5564e" strokeWidth="0.7" strokeLinecap="round" fill="none" />

      {/* Nose */}
      <path d="M31.5 29.5 L32.5 29.5" stroke="#d4a08a" strokeWidth="0.7" strokeLinecap="round" />

      {/* Star on right cheek (face paint) */}
      <path
        d="M39 30 L40 32.2 L42.4 32.2 L40.5 33.6 L41.2 36 L39 34.4 L36.8 36 L37.5 33.6 L35.6 32.2 L38 32.2 Z"
        fill={color}
      />

      {/* Teardrop on left cheek (face paint) */}
      <path
        d="M25 31 Q25 29 23.5 31 Q22 33.5 25 34.5 Q28 33.5 26.5 31 Q25 29 25 31Z"
        fill={color}
      />

      {/* Neck */}
      <rect x="29" y="40" width="6" height="3" rx="1" fill="#fde0c8" />

      {/* Body - crop top */}
      <path d="M22 43 Q27 41 32 42 Q37 41 42 43 L44 56 L20 56 Z" fill="#444" />
      {/* Crop top trim / V detail */}
      <path d="M26 43 L32 47 L38 43" stroke="#c2185b" strokeWidth="0.8" fill="none" />

      {/* Arms */}
      <path d="M22 44 L16 52 L18 53 L24 46Z" fill="#fde0c8" />
      <path d="M42 44 L48 50 L46 52 L40 46Z" fill="#fde0c8" />

      {/* Playing card in right hand */}
      <rect x="46" y="47" width="6" height="9" rx="0.8" fill="#fff" stroke="#333" strokeWidth="0.5" transform="rotate(-15 49 51.5)" />
      <path d="M48.5 51 L49.5 52.5 L50.5 51 L49.5 53 Z" fill={color} transform="rotate(-15 49 51.5)" />

      {/* Legs */}
      <rect x="24" y="56" width="5" height="6" rx="1" fill="#333" />
      <rect x="35" y="56" width="5" height="6" rx="1" fill="#333" />

      {/* Shoes */}
      <rect x="23" y="61" width="7" height="3" rx="1.5" fill="#222" />
      <rect x="34" y="61" width="7" height="3" rx="1.5" fill="#222" />

      {/* Aura glow */}
      <ellipse cx="32" cy="40" rx="20" ry="24" fill="none" stroke={color} strokeWidth="0.5" opacity="0.3" />
    </svg>
  )
}
