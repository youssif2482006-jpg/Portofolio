export type ExperienceItem = {
  period: string
  title: string
  org: string
  description: string
  kind: 'work' | 'education'
}

export const experience: ExperienceItem[] = [
  {
    period: '2023 — Present',
    title: 'Freelance Software Developer',
    org: 'Independent',
    description:
      'Partnering with startups and small teams to design, build, and ship production web applications end-to-end.',
    kind: 'work',
  },
  {
    period: '2021 — 2023',
    title: 'Software Engineer',
    org: 'Company Name',
    description: 'Built and maintained core product features for a B2B SaaS platform serving thousands of users.',
    kind: 'work',
  },
  {
    period: '2019 — 2021',
    title: 'Junior Developer',
    org: 'Company Name',
    description: 'Started as an intern, grew into a full-time role owning the internal tooling team.',
    kind: 'work',
  },
  {
    period: '2015 — 2019',
    title: 'B.Sc. Computer Science',
    org: 'University Name',
    description: 'Focused on distributed systems and human-computer interaction.',
    kind: 'education',
  },
]
