type SpecPattern = "radial" | "gear" | "grid" | "wave";

export function SpecVisual({ pattern }: { pattern: SpecPattern }) {
  if (pattern === "radial") {
    return (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[var(--bt-card)]">
        {[1, 0.75, 0.5, 0.25].map((s) => (
          <div
            key={s}
            className="absolute rounded-full border transition-transform duration-700 ease-out group-hover:scale-105"
            style={{
              width: `${s * 220}px`,
              height: `${s * 220}px`,
              borderColor: `color-mix(in srgb, var(--bt-sapphire) ${40 + s * 30}%, transparent)`,
            }}
          />
        ))}
        <div className="absolute h-3 w-3 rounded-full" style={{ background: "var(--bt-platinum)" }} />
      </div>
    );
  }

  if (pattern === "gear") {
    return (
      <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[var(--bt-card)]">
        <div className="relative h-40 w-40 transition-transform duration-700 ease-out group-hover:rotate-45">
          {Array.from({ length: 10 }).map((_, i) => (
            <span
              key={i}
              className="absolute left-1/2 top-1/2 h-4 w-9 -translate-x-1/2 -translate-y-1/2 rounded-sm"
              style={{
                background: "color-mix(in srgb, var(--bt-platinum) 55%, transparent)",
                transform: `translate(-50%, -50%) rotate(${i * 36}deg) translateY(-64px)`,
              }}
            />
          ))}
          <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full border" style={{ borderColor: "var(--bt-sapphire)" }} />
        </div>
      </div>
    );
  }

  if (pattern === "grid") {
    return (
      <div
        className="h-full w-full bg-[var(--bt-card)]"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in srgb, var(--bt-platinum) 18%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--bt-platinum) 18%, transparent) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      >
        <div className="flex h-full items-center justify-center">
          <div className="grid grid-cols-2 gap-3">
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className="h-6 w-6 rounded-sm transition-transform duration-500 ease-out group-hover:scale-110"
                style={{ background: i % 2 === 0 ? "var(--bt-sapphire)" : "color-mix(in srgb, var(--bt-platinum) 60%, transparent)" }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-[var(--bt-card)]">
      <svg viewBox="0 0 200 100" className="h-24 w-4/5 transition-transform duration-700 ease-out group-hover:scale-105">
        <path
          d="M0 50 Q 25 10, 50 50 T 100 50 T 150 50 T 200 50"
          fill="none"
          stroke="var(--bt-sapphire)"
          strokeWidth="2"
        />
        <path
          d="M0 60 Q 25 30, 50 60 T 100 60 T 150 60 T 200 60"
          fill="none"
          stroke="color-mix(in srgb, var(--bt-platinum) 55%, transparent)"
          strokeWidth="1.5"
        />
      </svg>
    </div>
  );
}
