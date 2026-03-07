export default function Kitsune({ color, size = 64 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
      {/* Body */}
      <ellipse cx="32" cy="46" rx="12" ry="10" fill="#f5f0e8" />
      <ellipse cx="32" cy="48" rx="10" ry="7" fill="#fff" />

      {/* Tail 1 - right, big fluffy */}
      <path
        d="M42 44 C50 38, 56 30, 54 22 C52 18, 48 20, 46 26 C44 32, 44 38, 42 44Z"
        fill="#f5f0e8"
      />
      <path
        d="M54 22 C52 18, 48 20, 47 24 C50 20, 53 20, 54 22Z"
        fill={color}
        opacity="0.9"
      />

      {/* Tail 2 - left, smaller fluffy */}
      <path
        d="M22 44 C16 36, 10 30, 10 22 C10 18, 14 18, 16 24 C18 30, 20 36, 22 44Z"
        fill="#f5f0e8"
      />
      <path
        d="M10 22 C10 18, 14 18, 15 22 C12 19, 11 19, 10 22Z"
        fill={color}
        opacity="0.9"
      />

      {/* Head */}
      <circle cx="32" cy="28" r="14" fill="#f5f0e8" />

      {/* Inner face / cheeks */}
      <circle cx="32" cy="30" r="11" fill="#fff" />

      {/* Left ear */}
      <polygon points="20,22 14,6 24,18" fill="#f5f0e8" />
      <polygon points="20,20 16,10 23,18" fill="#e8c4b8" />

      {/* Right ear */}
      <polygon points="44,22 50,6 40,18" fill="#f5f0e8" />
      <polygon points="44,20 48,10 41,18" fill="#e8c4b8" />

      {/* Eyes - sly/cute */}
      <ellipse cx="26" cy="27" rx="2.5" ry="2" fill="#333" />
      <ellipse cx="38" cy="27" rx="2.5" ry="2" fill="#333" />
      <ellipse cx="26.8" cy="26.4" rx="0.8" ry="0.6" fill="#fff" />
      <ellipse cx="38.8" cy="26.4" rx="0.8" ry="0.6" fill="#fff" />

      {/* Eye glow */}
      <ellipse cx="26" cy="27" rx="3" ry="2.5" fill={color} opacity="0.2" />
      <ellipse cx="38" cy="27" rx="3" ry="2.5" fill={color} opacity="0.2" />

      {/* Nose */}
      <ellipse cx="32" cy="31" rx="1.2" ry="0.8" fill="#444" />

      {/* Mouth */}
      <path d="M30 33 Q32 35 34 33" stroke="#444" strokeWidth="0.6" fill="none" />

      {/* Cheek blush */}
      <circle cx="23" cy="31" r="2" fill="#f0b8a8" opacity="0.5" />
      <circle cx="41" cy="31" r="2" fill="#f0b8a8" opacity="0.5" />

      {/* Flame wisp - left */}
      <path
        d="M12 48 C10 44, 8 40, 10 36 C11 38, 12 42, 14 44 C13 42, 12 38, 14 35 C14 39, 15 43, 12 48Z"
        fill={color}
        opacity="0.7"
      />

      {/* Flame wisp - right */}
      <path
        d="M52 48 C54 44, 56 40, 54 36 C53 38, 52 42, 50 44 C51 42, 52 38, 50 35 C50 39, 49 43, 52 48Z"
        fill={color}
        opacity="0.7"
      />

      {/* Small feet */}
      <ellipse cx="27" cy="55" rx="4" ry="2" fill="#f5f0e8" />
      <ellipse cx="37" cy="55" rx="4" ry="2" fill="#f5f0e8" />
    </svg>
  )
}
