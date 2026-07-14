import Image from "next/image";
import { Reveal } from "./Reveal";
import { SpecVisual } from "./SpecVisual";
import { withBasePath } from "@/lib/basePath";
import { specSheet } from "../data/content";

export function Specifications() {
  return (
    <section id="specs" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-28 sm:px-8 sm:py-36">
      <Reveal>
        <p className="font-body text-xs uppercase tracking-[0.3em] text-[var(--bt-mist)]">
          Under the Skin
        </p>
        <h2 className="bt-serif mt-4 max-w-xl text-4xl font-medium tracking-tight sm:text-5xl">
          Engineered without compromise.
        </h2>
      </Reveal>

      <div className="mt-16 grid gap-6 sm:grid-cols-2">
        {specSheet.map((spec, i) => (
          <Reveal key={spec.title} delay={i * 0.08} y={20} scale={0.98}>
            <article className="group overflow-hidden rounded-[20px] border border-[var(--bt-border)] bg-[var(--bt-card)] transition-colors duration-500 hover:border-[var(--bt-platinum)]/40">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={withBasePath(spec.image)}
                  alt={`${spec.title} — ${spec.value}`}
                  fill
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--bt-card)] via-[var(--bt-card)]/10 to-transparent" />
                <div className="absolute inset-0 opacity-40 mix-blend-screen">
                  <SpecVisual pattern={spec.pattern} />
                </div>
              </div>
              <div className="p-7">
                <p className="font-body text-[11px] uppercase tracking-[0.15em] text-[var(--bt-mist)]">
                  {spec.title}
                </p>
                <h3 className="bt-serif bt-gradient-text mt-2 text-2xl font-medium tracking-tight sm:text-3xl">
                  {spec.value}
                </h3>
                <p className="mt-3 max-w-md text-[15px] leading-relaxed text-[var(--bt-mist)]">
                  {spec.detail}
                </p>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
