export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  tag: string
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'shipping-fast-without-breaking-things',
    title: 'Shipping fast without breaking things',
    excerpt: 'A practical playbook for moving quickly on client projects while keeping quality bars high.',
    date: 'Jun 2026',
    readTime: '6 min',
    tag: 'Process',
  },
  {
    slug: 'notes-on-react-three-fiber',
    title: 'Notes on building interactive 3D scenes with React Three Fiber',
    excerpt: 'What I learned wiring up WebGL hero animations that stay smooth on low-end devices.',
    date: 'Apr 2026',
    readTime: '8 min',
    tag: 'Engineering',
  },
  {
    slug: 'pricing-freelance-web-projects',
    title: 'How I price freelance web projects',
    excerpt: 'Moving from hourly billing to value-based pricing, and what changed for my clients and me.',
    date: 'Feb 2026',
    readTime: '5 min',
    tag: 'Business',
  },
]
