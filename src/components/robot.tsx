import { cn } from "cn";

export function Robot({
  className,
  waving = false,
  celebrating = false,
}: {
  className?: string;
  waving?: boolean;
  celebrating?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 140 150"
      className={cn("overflow-visible select-none", className)}
      aria-hidden="true"
      role="img"
    >
      <defs>
        <radialGradient id="botCoreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
          <stop offset="60%" stopColor="#0284c7" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#0369a1" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="botChassis" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="50%" stopColor="#1e293b" />
          <stop offset="100%" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id="botPlate" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#475569" />
          <stop offset="100%" stopColor="#1e293b" />
        </linearGradient>
        <linearGradient id="botAccent" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#818cf8" />
        </linearGradient>
      </defs>

      {/* Ground hover glow / shadow */}
      <ellipse
        cx="70"
        cy="143"
        rx="36"
        ry="7"
        fill="#38bdf8"
        opacity="0.25"
        className="motion-safe:animate-pulse"
      />

      {/* Antenna */}
      <line
        x1="70"
        y1="28"
        x2="70"
        y2="12"
        stroke="#64748b"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="70" cy="10" r="7" fill="#38bdf8" className="motion-safe:animate-pulse" />
      <circle cx="70" cy="10" r="4" fill="#e0f2fe" />
      <circle
        cx="70"
        cy="10"
        r="11"
        fill="none"
        stroke="#38bdf8"
        strokeWidth="1.5"
        opacity="0.4"
        className="motion-safe:animate-ping"
      />

      {/* Side Audio Sensors / Ear Bolts */}
      <rect x="22" y="44" width="8" height="16" rx="4" fill="#475569" />
      <rect x="110" y="44" width="8" height="16" rx="4" fill="#475569" />
      <circle cx="26" cy="52" r="2.5" fill="#38bdf8" />
      <circle cx="114" cy="52" r="2.5" fill="#38bdf8" />

      {/* Head Chassis */}
      <rect
        x="28"
        y="26"
        width="84"
        height="56"
        rx="18"
        fill="url(#botChassis)"
        stroke="#475569"
        strokeWidth="3"
      />

      {/* Visor Screen */}
      <rect
        x="36"
        y="35"
        width="68"
        height="38"
        rx="12"
        fill="#090d16"
        stroke="#1e293b"
        strokeWidth="2"
      />

      {/* Visor scanlines / subtle grid highlight */}
      <line x1="38" y1="42" x2="102" y2="42" stroke="#38bdf8" strokeWidth="0.5" opacity="0.15" />
      <line x1="38" y1="50" x2="102" y2="50" stroke="#38bdf8" strokeWidth="0.5" opacity="0.15" />
      <line x1="38" y1="58" x2="102" y2="58" stroke="#38bdf8" strokeWidth="0.5" opacity="0.15" />

      {/* Expressive Glowing Eyes */}
      <g>
        <ellipse cx="53" cy="51" rx="8" ry="9" fill="#38bdf8" />
        <ellipse cx="87" cy="51" rx="8" ry="9" fill="#38bdf8" />
        {/* Eye pupils / highlights */}
        <circle cx="55" cy="48" r="3" fill="#ffffff" />
        <circle cx="89" cy="48" r="3" fill="#ffffff" />
        <circle cx="51" cy="54" r="1.5" fill="#e0f2fe" />
        <circle cx="85" cy="54" r="1.5" fill="#e0f2fe" />
      </g>

      {/* Friendly smiling LED digital mouth */}
      <path
        d="M62 64 Q70 69 78 64"
        fill="none"
        stroke="#38bdf8"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Cute rosy cheeks (warm LED status) */}
      <circle cx="43" cy="62" r="3" fill="#f43f5e" opacity="0.6" />
      <circle cx="97" cy="62" r="3" fill="#f43f5e" opacity="0.6" />

      {/* Neck Joint */}
      <rect x="62" y="82" width="16" height="7" rx="3" fill="#475569" />

      {/* Torso Body Chassis */}
      <rect
        x="36"
        y="88"
        width="68"
        height="44"
        rx="14"
        fill="url(#botPlate)"
        stroke="#334155"
        strokeWidth="3"
      />

      {/* Chest Accent Band */}
      <rect x="42" y="93" width="56" height="4" rx="2" fill="url(#botAccent)" opacity="0.8" />

      {/* Glowing Arc Reactor / Power Core */}
      <circle cx="70" cy="110" r="13" fill="#0f172a" stroke="#334155" strokeWidth="2" />
      <circle cx="70" cy="110" r="11" fill="url(#botCoreGlow)" />
      <circle cx="70" cy="110" r="6" fill="#38bdf8" />
      <circle cx="70" cy="110" r="3" fill="#ffffff" />

      {/* Status LEDs on chest */}
      <circle cx="48" cy="118" r="2.2" fill="#10b981" />
      <circle cx="55" cy="118" r="2.2" fill="#38bdf8" />
      <circle cx="85" cy="118" r="2.2" fill="#f59e0b" />
      <circle cx="92" cy="118" r="2.2" fill="#ec4899" />

      {/* Left Arm (holding steady or resting) */}
      <g>
        <circle cx="31" cy="98" r="6" fill="#475569" />
        <path
          d="M31 100 L24 114 L20 125"
          fill="none"
          stroke="#334155"
          strokeWidth="6"
          strokeLinecap="round"
        />
        {/* Gripper Hand */}
        <circle cx="18" cy="126" r="4.5" fill="#64748b" />
        <path
          d="M14 123 Q18 126 14 130"
          fill="none"
          stroke="#38bdf8"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>

      {/* Right Arm - Waving or Celebrating or Resting */}
      {waving || celebrating ? (
        <g className="origin-[109px_98px] motion-safe:animate-[wave_1.4s_ease-in-out_infinite]">
          <circle cx="109" cy="98" r="6" fill="#475569" />
          <path
            d="M109 98 L122 84 L128 70"
            fill="none"
            stroke="#334155"
            strokeWidth="6"
            strokeLinecap="round"
          />
          {/* Gripper Hand Waving */}
          <circle cx="129" cy="68" r="5" fill="#64748b" />
          <path
            d="M125 64 Q131 66 128 72"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="3"
            strokeLinecap="round"
          />
          {/* Sparkles / greeting waves */}
          <circle cx="137" cy="62" r="2" fill="#38bdf8" className="motion-safe:animate-ping" />
        </g>
      ) : (
        <g>
          <circle cx="109" cy="98" r="6" fill="#475569" />
          <path
            d="M109 100 L116 114 L120 125"
            fill="none"
            stroke="#334155"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <circle cx="122" cy="126" r="4.5" fill="#64748b" />
          <path
            d="M126 123 Q122 126 126 130"
            fill="none"
            stroke="#38bdf8"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </g>
      )}

      {/* Lower Base: Dual High-Tech Rover Tracks / Hover Repulsor */}
      <rect
        x="44"
        y="131"
        width="52"
        height="10"
        rx="5"
        fill="#1e293b"
        stroke="#475569"
        strokeWidth="2"
      />
      {/* Track Rollers / Wheels */}
      <circle cx="52" cy="136" r="3" fill="#64748b" />
      <circle cx="64" cy="136" r="3" fill="#64748b" />
      <circle cx="76" cy="136" r="3" fill="#64748b" />
      <circle cx="88" cy="136" r="3" fill="#64748b" />
      <circle cx="52" cy="136" r="1.2" fill="#38bdf8" />
      <circle cx="64" cy="136" r="1.2" fill="#38bdf8" />
      <circle cx="76" cy="136" r="1.2" fill="#38bdf8" />
      <circle cx="88" cy="136" r="1.2" fill="#38bdf8" />
    </svg>
  );
}

/** Gear / Sprocket Badge Icon for Robotics checkpoints & stamps */
export function GearMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      className={cn("size-7 shrink-0 sm:size-8", className)}
      aria-hidden="true"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5 3h5l.8 3.2a12.1 12.1 0 0 1 2.9 1.2l2.9-1.6 3.5 3.5-1.6 2.9c.5.9.9 1.9 1.2 2.9l3.2.8v5l-3.2.8a12.1 12.1 0 0 1-1.2 2.9l1.6 2.9-3.5 3.5-2.9-1.6a12.1 12.1 0 0 1-2.9 1.2l-.8 3.2h-5l-.8-3.2a12.1 12.1 0 0 1-2.9-1.2l-2.9 1.6-3.5-3.5 1.6-2.9a12.1 12.1 0 0 1-1.2-2.9l-3.2-.8v-5l3.2-.8c.3-1 .7-2 1.2-2.9L5.3 9.3 8.8 5.8l2.9 1.6a12.1 12.1 0 0 1 2.9-1.2L15.5 3zm2.5 9a6 6 0 1 0 0 12 6 6 0 0 0 0-12z"
      />
    </svg>
  );
}

/** Robotics Circuit Track / Checkpoint node */
export function CircuitMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 36 36"
      className={cn("size-7 shrink-0 sm:size-8", className)}
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.2"
    >
      <circle cx="18" cy="18" r="8" fill="currentColor" fillOpacity="0.2" />
      <circle cx="18" cy="18" r="4" fill="currentColor" />
      <line x1="18" y1="2" x2="18" y2="10" strokeLinecap="round" />
      <line x1="18" y1="26" x2="18" y2="34" strokeLinecap="round" />
      <line x1="2" y1="18" x2="10" y2="18" strokeLinecap="round" />
      <line x1="26" y1="18" x2="34" y2="18" strokeLinecap="round" />
      <circle cx="18" cy="4" r="2" fill="currentColor" />
      <circle cx="18" cy="32" r="2" fill="currentColor" />
      <circle cx="4" cy="18" r="2" fill="currentColor" />
      <circle cx="32" cy="18" r="2" fill="currentColor" />
    </svg>
  );
}

/** Cloud or Tech Aura */
export function TechAura({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 80" className={className} aria-hidden="true">
      <ellipse cx="54" cy="50" rx="36" ry="20" fill="#e0f2fe" opacity="0.6" />
      <ellipse cx="92" cy="40" rx="40" ry="26" fill="#bae6fd" opacity="0.5" />
      <ellipse cx="132" cy="50" rx="32" ry="18" fill="#e0f2fe" opacity="0.6" />
    </svg>
  );
}

// Aliases for seamless compatibility
export const Bear = Robot;
export const Cloud = TechAura;
export const PawMark = GearMark;
