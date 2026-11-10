export function Meadow() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      {/* Subtle tech ambient glows */}
      <div className="absolute -left-20 top-6 size-80 animate-drift rounded-full bg-cyan-200/50 blur-3xl" />
      <div className="absolute right-0 top-0 size-96 animate-drift rounded-full bg-amber-200/40 blur-3xl" />
      <div className="absolute bottom-20 left-1/3 size-80 rounded-full bg-emerald-200/40 blur-3xl" />
      
      {/* Subtle futuristic matrix grid lines */}
      <div 
        className="absolute inset-0 opacity-[0.035] pointer-events-none" 
        style={{
          backgroundImage: `radial-gradient(#0284c7 1px, transparent 1px)`,
          backgroundSize: "28px 28px",
        }}
      />
    </div>
  );
}

export const TechMeadow = Meadow;
