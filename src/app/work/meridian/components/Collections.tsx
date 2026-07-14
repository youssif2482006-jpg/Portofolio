import Image from "next/image";
import { Reveal } from "./Reveal";
import { collections } from "../data/content";

export function Collections() {
  return (
    <section id="collections" className="relative scroll-mt-24 bg-[var(--mr-bg)]">
      <div className="mx-auto max-w-6xl px-6 py-28 sm:px-8 sm:py-36">
        <Reveal>
          <p className="mr-eyebrow text-sm text-[var(--mr-green-bright)]">Explore the Collection</p>
          <h2 className="mr-serif mt-4 max-w-xl text-4xl font-medium tracking-tight sm:text-5xl">
            Three Icons, One Standard.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-3">
          {collections.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.08} y={20} scale={0.98} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-[20px] border border-[var(--mr-border)] bg-[var(--mr-card)] transition-colors duration-500 hover:border-[var(--mr-gold)]/40">
                <div className="relative aspect-[4/3] w-full shrink-0 overflow-hidden bg-[var(--mr-bg-2)]">
                  <Image
                    src={item.image}
                    alt={`${item.name} — ${item.tag}`}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-contain p-6 transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <div className="flex min-h-[3.75rem] items-center justify-between gap-3">
                    <h3 className="mr-serif text-2xl font-medium tracking-tight text-[var(--mr-text)]">
                      {item.name}
                    </h3>
                    <span className="mr-mono shrink-0 rounded-full border border-[var(--mr-green-bright)] px-3 py-1 text-[10px] uppercase tracking-[0.1em] text-[var(--mr-green-bright)]">
                      {item.tag}
                    </span>
                  </div>
                  <p className="mt-3 text-[15px] leading-relaxed text-[var(--mr-mist)]">
                    {item.detail}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
