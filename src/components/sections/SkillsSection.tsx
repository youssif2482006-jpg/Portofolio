import { skillGroups } from '../../data/skills'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

export function SkillsSection() {
  return (
    <section id="skills" className="border-b border-[color:var(--color-border)] px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="Skills" title="The stack I build with." />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.08}>
              <div className="h-full rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 transition hover:border-[color:var(--color-accent)]/50">
                <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-[color:var(--color-accent)]">
                  {group.category}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="text-sm text-[color:var(--color-ink-muted)]">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
