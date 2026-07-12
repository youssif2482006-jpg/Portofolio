import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

const stats = [
  { value: '5+', label: 'Years building products' },
  { value: '20+', label: 'Projects shipped' },
  { value: '12', label: 'Long-term clients' },
]

export function AboutSection() {
  return (
    <section id="about" className="border-b border-[color:var(--color-border)] px-6 py-28 sm:px-10">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-[1fr_1fr]">
        <SectionHeading
          eyebrow="About"
          title="I build software the way I'd want it built for me."
          description="I'm a freelance developer who partners closely with founders and product teams — from first sketch to production. I care about clean architecture, fast interfaces, and shipping things that hold up under real usage."
        />

        <Reveal delay={0.1}>
          <div className="grid grid-cols-3 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6">
                <p className="text-3xl font-semibold text-[color:var(--color-accent)]">{stat.value}</p>
                <p className="mt-2 text-xs text-[color:var(--color-ink-muted)]">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-[color:var(--color-ink-muted)]">
            My process is simple: understand the problem deeply, prototype quickly, and refine relentlessly.
            Every project gets the same rigor I'd apply to my own product — thoughtful architecture, tested
            code, and clear communication throughout.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
