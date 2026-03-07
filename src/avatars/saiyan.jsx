export default function Saiyan({ color, size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Aura glow */}
      <ellipse cx="32" cy="34" rx="22" ry="26" fill={color} opacity="0.12" />
      <ellipse cx="32" cy="34" rx="17" ry="21" fill={color} opacity="0.08" />

      {/* Body / Gi top */}
      <rect x="24" y="38" width="16" height="14" rx="3" fill="#f97316" />
      {/* Gi undershirt */}
      <rect x="27" y="38" width="10" height="8" rx="2" fill="#1e3a5f" />
      {/* Belt */}
      <rect x="23" y="48" width="18" height="3" rx="1" fill={color} />

      {/* Arms */}
      <rect x="17" y="39" width="7" height="4" rx="2" fill="#f97316" />
      <rect x="40" y="39" width="7" height="4" rx="2" fill="#f97316" />
      {/* Hands */}
      <circle cx="17" cy="41" r="2.5" fill="#fcd9b6" />
      <circle cx="47" cy="41" r="2.5" fill="#fcd9b6" />

      {/* Wristbands */}
      <rect x="14" y="39.5" width="4" height="3" rx="1" fill={color} />
      <rect x="46" y="39.5" width="4" height="3" rx="1" fill={color} />

      {/* Legs */}
      <rect x="25" y="51" width="5" height="8" rx="2" fill="#f97316" />
      <rect x="34" y="51" width="5" height="8" rx="2" fill="#f97316" />
      {/* Boots */}
      <rect x="24" y="56" width="7" height="4" rx="2" fill="#1e3a5f" />
      <rect x="33" y="56" width="7" height="4" rx="2" fill="#1e3a5f" />

      {/* Head */}
      <circle cx="32" cy="28" r="12" fill="#fcd9b6" />

      {/* Spiky hair - multiple spikes standing upward */}
      <polygon points="22,26 18,8 26,22" fill="#f5c542" />
      <polygon points="26,22 22,4 30,18" fill="#f5c542" />
      <polygon points="30,18 28,2 34,16" fill="#f5c542" />
      <polygon points="34,16 34,1 38,16" fill="#f5c542" />
      <polygon points="38,18 40,4 42,22" fill="#f5c542" />
      <polygon points="42,22 46,8 44,26" fill="#f5c542" />
      {/* Side hair */}
      <polygon points="20,28 16,20 22,26" fill="#f5c542" />
      <polygon points="44,28 48,20 42,26" fill="#f5c542" />

      {/* Eyes */}
      <ellipse cx="28" cy="28" rx="2.5" ry="3" fill="#fff" />
      <ellipse cx="36" cy="28" rx="2.5" ry="3" fill="#fff" />
      <ellipse cx="28.5" cy="28.5" rx="1.5" ry="2" fill="#0ea5e9" />
      <ellipse cx="36.5" cy="28.5" rx="1.5" ry="2" fill="#0ea5e9" />
      {/* Pupils */}
      <circle cx="29" cy="29" r="0.7" fill="#222" />
      <circle cx="37" cy="29" r="0.7" fill="#222" />

      {/* Eyebrows - intense */}
      <line x1="25" y1="24" x2="30" y2="25" stroke="#333" strokeWidth="1.2" strokeLinecap="round" />
      <line x1="39" y1="24" x2="34" y2="25" stroke="#333" strokeWidth="1.2" strokeLinecap="round" />

      {/* Mouth */}
      <path d="M29 33 Q32 35 35 33" stroke="#333" strokeWidth="0.8" fill="none" strokeLinecap="round" />

      {/* Energy ball in right hand */}
      <circle cx="47" cy="41" r="4" fill={color} opacity="0.5" />
      <circle cx="47" cy="41" r="2.5" fill="#fff" opacity="0.7" />
    </svg>
  )
}
