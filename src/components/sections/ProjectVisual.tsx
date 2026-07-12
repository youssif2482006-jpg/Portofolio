import type { ProjectPattern } from "@/data/projects";

const BAR_HEIGHTS = [38, 62, 45, 80, 55, 70, 40];

export function ProjectVisual({ pattern }: { pattern: ProjectPattern }) {
  if (pattern === "glow") {
    return (
      <div className="relative h-full w-full overflow-hidden bg-surface-2">
        <div className="glow-ambient animate-breathe absolute -left-10 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full opacity-70 transition-[transform,opacity] duration-700 ease-out group-hover:scale-125 group-hover:opacity-90" />
        <div className="absolute inset-x-8 bottom-8 flex flex-col gap-2">
          {[100, 72, 88].map((w, i) => (
            <div
              key={i}
              className="h-2 rounded-full bg-white/10"
              style={{ width: `${w}%` }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (pattern === "grid") {
    return (
      <div
        className="h-full w-full bg-surface-2"
        style={{
          backgroundImage:
            "linear-gradient(color-mix(in srgb, var(--color-accent) 22%, transparent) 1px, transparent 1px), linear-gradient(90deg, color-mix(in srgb, var(--color-accent) 22%, transparent) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          backgroundPosition: "-1px -1px",
        }}
      >
        <div className="flex h-full w-full items-end justify-end p-8">
          <div className="h-16 w-16 rounded-lg border border-accent/40 bg-canvas/60 transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-3" />
        </div>
      </div>
    );
  }

  if (pattern === "bars") {
    return (
      <div className="flex h-full w-full items-end gap-3 bg-surface-2 p-8">
        {BAR_HEIGHTS.map((h, i) => (
          <div
            key={i}
            className="flex-1 origin-bottom rounded-t-md transition-transform duration-500 ease-out group-hover:scale-y-110"
            style={{
              height: `${h}%`,
              transitionDelay: `${i * 40}ms`,
              background:
                i % 3 === 0
                  ? "linear-gradient(180deg, var(--color-accent), var(--color-accent-deep))"
                  : "color-mix(in srgb, var(--color-ink) 10%, transparent)",
            }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className="h-full w-full bg-surface-2 transition-transform duration-700 ease-out group-hover:scale-110"
      style={{
        background:
          "linear-gradient(115deg, var(--color-surface-2) 40%, color-mix(in srgb, var(--color-accent-deep) 45%, var(--color-surface-2)) 65%, color-mix(in srgb, var(--color-accent) 55%, var(--color-surface-2)) 100%)",
      }}
    />
  );
}
