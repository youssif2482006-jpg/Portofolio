import { experience } from '../../data/experience'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

export function ExperienceSection() {
  return (
    <section id="experience" className="border-b border-[color:var(--color-border)] px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Experience" title="Where I've worked and studied." />

        <div className="relative mt-14 space-y-10 border-l border-[color:var(--color-border)] pl-8">
          {experience.map((item, i) => (
            <Reveal key={item.title + item.period} delay={i * 0.06}>
              <div className="relative">
                <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-[color:var(--color-accent)] shadow-[0_0_10px_var(--color-accent)]" />
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-ink-faint)]">
                  {item.period}
                </p>
                <h3 className="mt-2 text-lg font-semibold">
                  {item.title} <span className="text-[color:var(--color-ink-muted)]">· {item.org}</span>
                </h3>
                <p className="mt-2 text-sm text-[color:var(--color-ink-muted)]">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
