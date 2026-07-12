export type Project = {
  slug: string
  title: string
  summary: string
  role: string
  year: string
  stack: string[]
  href?: string
  metric: string
}

export const projects: Project[] = [
  {
    slug: 'orbit-analytics',
    title: 'Orbit Analytics',
    summary:
      'A real-time analytics dashboard for e-commerce teams, processing millions of events with sub-second query latency.',
    role: 'Full-stack build, solo',
    year: '2026',
    stack: ['React', 'Node.js', 'PostgreSQL', 'WebSockets'],
    metric: '40% faster time-to-insight',
    href: '#',
  },
  {
    slug: 'northwind-commerce',
    title: 'Northwind Commerce',
    summary:
      'Headless storefront rebuild focused on Core Web Vitals — cut load times in half while adding a full design system.',
    role: 'Frontend lead',
    year: '2025',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    metric: '2.1s → 0.9s LCP',
    href: '#',
  },
  {
    slug: 'signal-crm',
    title: 'Signal CRM',
    summary:
      'Custom CRM for a boutique agency: pipeline automation, client portal, and reporting built from a blank slate.',
    role: 'Product engineer',
    year: '2025',
    stack: ['React', 'Prisma', 'PostgreSQL', 'AWS'],
    metric: '~15 hrs/week saved',
    href: '#',
  },
  {
    slug: 'lumen-booking',
    title: 'Lumen Booking',
    summary:
      'Scheduling platform with real-time availability sync across calendars, built for a multi-location service business.',
    role: 'Full-stack build, solo',
    year: '2024',
    stack: ['Next.js', 'Redis', 'Stripe', 'Docker'],
    metric: '99.98% uptime',
    href: '#',
  },
]
