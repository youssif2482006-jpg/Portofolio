import { Reveal } from "./Reveal";
import { Counter } from "./Counter";
import { performanceStats } from "../data/content";

export function Performance() {
  return (
    <section className="relative overflow-hidden bg-[var(--mr-ivory)] text-[var(--mr-ivory-ink)]">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(55% 80% at 85% 0%, color-mix(in srgb, var(--mr-green) 14%, transparent), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:px-8 sm:py-32">
        <Reveal>
          <p className="mr-eyebrow text-sm text-[var(--mr-green)]">Built to Excel</p>
          <h2 className="mr-serif mt-4 max-w-xl text-4xl font-medium tracking-tight sm:text-5xl">
            Precision, Measured.
          </h2>
        </Reveal>

        <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 sm:grid-cols-4">
          {performanceStats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.08}>
              <div className="border-l border-[rgba(34,29,21,0.15)] pl-5">
                <p className="mr-mono text-4xl font-medium tracking-tight text-[var(--mr-ivory-ink)] sm:text-5xl">
                  <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </p>
                <p className="mr-sans mt-3 text-[11px] uppercase tracking-[0.15em] text-[var(--mr-ivory-mist)]">
                  {stat.caption ?? stat.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
