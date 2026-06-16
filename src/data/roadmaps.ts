export interface Roadmap {
  id: string
  title: string
  description: string
  steps: number
  duration: string
  level: string
  color: string
}

export const roadmaps: Roadmap[] = [
  {
    id: 'frontend',
    title: 'Frontend Developer',
    description: 'HTML, CSS, JavaScript, React, and modern UI frameworks.',
    steps: 12,
    duration: '6 months',
    level: 'Beginner',
    color: 'from-violet-500/20 to-purple-600/10',
  },
  {
    id: 'backend',
    title: 'Backend Engineer',
    description: 'APIs, databases, authentication, and server-side architecture.',
    steps: 10,
    duration: '5 months',
    level: 'Intermediate',
    color: 'from-cyan-500/20 to-blue-600/10',
  },
  {
    id: 'fullstack',
    title: 'Full-Stack Developer',
    description: 'End-to-end web development from database to deployment.',
    steps: 16,
    duration: '8 months',
    level: 'Intermediate',
    color: 'from-emerald-500/20 to-teal-600/10',
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    description: 'Docker, CI/CD, AWS, and infrastructure as code.',
    steps: 9,
    duration: '4 months',
    level: 'Advanced',
    color: 'from-amber-500/20 to-orange-600/10',
  },
]
