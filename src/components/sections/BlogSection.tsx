import { blogPosts } from '../../data/blog'
import { SectionHeading } from '../ui/SectionHeading'
import { Reveal } from '../ui/Reveal'

export function BlogSection() {
  return (
    <section id="blog" className="border-b border-[color:var(--color-border)] px-6 py-28 sm:px-10">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Writing"
          title="Notes on building and freelancing."
          description="Placeholder posts — replace with your own writing when it's ready."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {blogPosts.map((post, i) => (
            <Reveal key={post.slug} delay={i * 0.08}>
              <article className="group h-full rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-6 transition hover:border-[color:var(--color-accent)]/50">
                <div className="flex items-center justify-between font-mono text-xs text-[color:var(--color-ink-faint)]">
                  <span className="text-[color:var(--color-accent)]">{post.tag}</span>
                  <span>{post.readTime} read</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-snug group-hover:text-[color:var(--color-accent)]">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm text-[color:var(--color-ink-muted)]">{post.excerpt}</p>
                <p className="mt-6 font-mono text-xs text-[color:var(--color-ink-faint)]">{post.date}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
