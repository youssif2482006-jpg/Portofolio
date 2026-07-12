import { projects } from '../../data/projects'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

export function ProjectsSection() {
  return (
    <section id="projects" className="border-b border-[color:var(--color-border)] px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Selected work"
          title="A few projects I'm proud of."
          description="Placeholder case studies — swap these for your real projects, screenshots, and links."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 2) * 0.1}>
              <a
                href={project.href}
                className="group block h-full rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8 transition hover:-translate-y-1 hover:border-[color:var(--color-accent)]/60 hover:shadow-[0_0_40px_-12px_var(--color-accent)]"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-semibold tracking-tight group-hover:text-[color:var(--color-accent)]">
                    {project.title}
                  </h3>
                  <span className="font-mono text-xs text-[color:var(--color-ink-faint)]">{project.year}</span>
                </div>

                <p className="mt-3 text-sm text-[color:var(--color-ink-muted)]">{project.summary}</p>

                <p className="mt-4 font-mono text-xs uppercase tracking-[0.15em] text-[color:var(--color-accent)]">
                  {project.metric}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-[color:var(--color-border)] px-3 py-1 text-xs text-[color:var(--color-ink-muted)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="mt-6 text-xs text-[color:var(--color-ink-faint)]">{project.role}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
