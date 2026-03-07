export default function Pilot({ color, size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Helmet outer shell */}
      <path d="M32,2 C18,2 12,12 12,22 L12,30 C12,34 14,36 18,36 L46,36 C50,36 52,34 52,30 L52,22 C52,12 46,2 32,2Z" fill="#444" />
      {/* Helmet inner frame */}
      <path d="M32,5 C20,5 15,14 15,22 L15,28 C15,31 17,33 19,33 L45,33 C47,33 49,31 49,28 L49,22 C49,14 44,5 32,5Z" fill="#333" />
      {/* Visor */}
      <path d="M18,18 C18,14 24,9 32,9 C40,9 46,14 46,18 L46,26 C46,29 44,31 42,31 L22,31 C20,31 18,29 18,26Z" fill={color} opacity="0.85" />
      {/* Visor shine */}
      <path d="M22,14 C22,12 26,10 32,10 C36,10 40,11 42,13 L40,18 L22,18Z" fill="#fff" opacity="0.25" />
      {/* Eyes visible through visor */}
      <ellipse cx="26" cy="23" rx="3" ry="2.5" fill="#1a1a2e" />
      <ellipse cx="38" cy="23" rx="3" ry="2.5" fill="#1a1a2e" />
      <ellipse cx="27" cy="22.5" rx="1.2" ry="1" fill="#fff" opacity="0.9" />
      <ellipse cx="39" cy="22.5" rx="1.2" ry="1" fill="#fff" opacity="0.9" />
      {/* Determined brow line */}
      <line x1="23" y1="19" x2="29" y2="20" stroke="#222" strokeWidth="0.8" />
      <line x1="41" y1="19" x2="35" y2="20" stroke="#222" strokeWidth="0.8" />
      {/* Helmet center stripe */}
      <rect x="30" y="2" width="4" height="12" rx="1" fill={color} opacity="0.7" />
      {/* Helmet ear modules */}
      <rect x="10" y="20" width="5" height="8" rx="2" fill="#555" />
      <rect x="49" y="20" width="5" height="8" rx="2" fill="#555" />
      {/* Neck / collar */}
      <rect x="26" y="36" width="12" height="5" rx="2" fill="#666" />
      {/* Plugsuit torso */}
      <path d="M20,41 L26,39 L38,39 L44,41 L46,54 L18,54Z" fill="#444" />
      {/* Suit chest accent */}
      <path d="M28,41 L36,41 L35,50 L29,50Z" fill={color} opacity="0.6" />
      {/* Suit chest detail lines */}
      <line x1="26" y1="43" x2="28" y2="43" stroke="#888" strokeWidth="0.7" />
      <line x1="36" y1="43" x2="38" y2="43" stroke="#888" strokeWidth="0.7" />
      {/* Arms */}
      <rect x="12" y="41" width="8" height="12" rx="3" fill="#555" />
      <rect x="44" y="41" width="8" height="12" rx="3" fill="#555" />
      {/* Arm accent bands */}
      <rect x="13" y="46" width="6" height="2" rx="0.5" fill={color} opacity="0.5" />
      <rect x="45" y="46" width="6" height="2" rx="0.5" fill={color} opacity="0.5" />
      {/* Legs */}
      <rect x="22" y="54" width="8" height="8" rx="2" fill="#555" />
      <rect x="34" y="54" width="8" height="8" rx="2" fill="#555" />
      {/* Boots */}
      <rect x="21" y="60" width="10" height="4" rx="2" fill="#333" />
      <rect x="33" y="60" width="10" height="4" rx="2" fill="#333" />
    </svg>
  )
}
