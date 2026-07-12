export type SkillGroup = {
  category: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    category: 'Frontend',
    items: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Framer Motion', 'Three.js'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'PostgreSQL', 'REST / GraphQL APIs', 'Prisma', 'Redis'],
  },
  {
    category: 'Infrastructure',
    items: ['Docker', 'AWS', 'CI/CD', 'Vercel', 'GitHub Actions'],
  },
  {
    category: 'Practice',
    items: ['Design Systems', 'Performance Tuning', 'Accessibility', 'Testing', 'Technical Writing'],
  },
]
