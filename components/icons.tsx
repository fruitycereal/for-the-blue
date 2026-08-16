type IconProps = { className?: string };

export function MegaphoneIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M3 10.2v3.6a1 1 0 001 1h1.9l7.1 3V6.2l-7.1 3H4a1 1 0 00-1 1z" fill="currentColor" />
      <path d="M15 8.3a4.3 4.3 0 010 7.4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M17.4 6.2a7.6 7.6 0 010 11.6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
}

export function BookOpenIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 6.7c-1.7-1.4-4.1-2.2-6.7-2.2A1.3 1.3 0 004 5.8v11.5a1 1 0 001.4 1c2-1 4.7-1 6.6.6 1.9-1.6 4.6-1.6 6.6-.6a1 1 0 001.4-1V5.8a1.3 1.3 0 00-1.3-1.3c-2.6 0-5 .8-6.7 2.2z"
        stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"
      />
      <path d="M12 6.7v11.9" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function HandshakeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="m11 17 2 2a1 1 0 1 0 3-3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m14 14 2.5 2.5a1 1 0 1 0 3-3l-3.88-3.88a3 3 0 0 0-4.24 0l-.88.88a1 1 0 1 1-3-3l2.81-2.81a5.79 5.79 0 0 1 7.06-.87l.47.28a2 2 0 0 0 1.42.25L21 4"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="m21 3 1 11h-2"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 3 2 14l6.5 6.5a1 1 0 1 0 3-3"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 4h8"
        stroke="currentColor"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GlobeIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="8.3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M3.7 12h16.6" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 3.7c2.3 2.2 3.6 5.2 3.6 8.3s-1.3 6.1-3.6 8.3c-2.3-2.2-3.6-5.2-3.6-8.3S9.7 5.9 12 3.7z" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

// 1. Graduation Cap (Solid style matching Figma)
export function GraduationCapIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 3.5L2 8.5l10 5 10-5-10-5z" />
      <path d="M6.5 11.5v4c0 2.2 2.5 4 5.5 4s5.5-1.8 5.5-4v-4l-5.5 2.7-5.5-2.7z" />
      <path d="M19.5 9.8v5.7a1 1 0 00.5.86l.8.46a.5.5 0 00.7-.44v-6.3l-2-.28z" />
    </svg>
  );
}

// 2. Hand holding plant/sprout (Matching the original environment icon)
export function PlantHandIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      {/* Stem */}
      <path
        d="M12 20V9"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />

      {/* Left leaf */}
      <path
        d="M12 11C7.5 11 4.5 8 4.8 4.2C8.8 4.1 12 6.5 12 11Z"
        fill="currentColor"
      />

      {/* Right leaf */}
      <path
        d="M12 13C16.5 13 19.5 10 19.2 6.2C15.2 6.1 12 8.5 12 13Z"
        fill="currentColor"
      />
    </svg>
  );
}

// 3. Two People / Community (Solid style matching Figma)
export function UsersIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      {/* Left / Main Person */}
      <circle cx="9" cy="8" r="3.5" />
      <path d="M3 18.5c0-3 2.7-5.5 6-5.5s6 2.5 6 5.5v.5H3v-.5z" />
      {/* Right Person */}
      <circle cx="16.5" cy="9.5" r="2.8" />
      <path d="M15.2 14.1c1.2-.4 2.6-.2 3.6.4 1.4.9 2.2 2.3 2.2 3.9v.6h-4.3v-.6c0-1.6-.6-3-1.5-4.3z" />
    </svg>
  );
}

// 4. Sparkle / Four-Point Star (Solid style matching Figma)
export function SparkleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 2C12 7.5 7.5 12 2 12C7.5 12 12 16.5 12 22C12 16.5 16.5 12 22 12C16.5 12 12 7.5 12 2Z" />
    </svg>
  );
}

export function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="3" y="5" width="18" height="14" rx="2.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 6.7l8 6.3 8-6.3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 12h15M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function InstagramIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="4" y="4" width="16" height="16" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.8" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.3" cy="7.7" r="1" fill="currentColor" />
    </svg>
  );
}

export function FacebookIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M14.5 8.3h1.8V5.4h-2.1c-2.1 0-3.5 1.4-3.5 3.6v1.8H8.8v3h1.9V21h3v-7.2h2.1l.4-3h-2.5V9.2c0-.5.3-.9.8-.9z" fill="currentColor" />
    </svg>
  );
}

export function TiktokIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M13.2 3v10.9a2.6 2.6 0 11-1.9-2.5V9.2a4.9 4.9 0 104.9 4.9V9.9a6 6 0 003.3 1V8.7a4 4 0 01-3.3-3.9V3h-3z" fill="currentColor" />
    </svg>
  );
}

export function LinkedinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="8.3" cy="8.4" r="1" fill="currentColor" />
      <path d="M8.3 11.2V17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M11.9 17v-3.4c0-1.4.9-2.3 2.1-2.3s2 .9 2 2.3V17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
      <path d="M11.9 11.2V17" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  );
} 