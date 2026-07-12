import { Reveal } from './Reveal'

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string
  title: string
  description?: string
}) {
  return (
    <Reveal className="max-w-2xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.25em] text-[color:var(--color-accent)]">
        {eyebrow}
      </p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {description && (
        <p className="mt-4 text-[color:var(--color-ink-muted)]">{description}</p>
      )}
    </Reveal>
  )
}
