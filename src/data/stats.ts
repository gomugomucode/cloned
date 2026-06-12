export interface Stat {
  value: number
  suffix: string
  label: string
}

export const stats: Stat[] = [
  { value: 4800, suffix: '+', label: 'Active Learners' },
  { value: 95, suffix: '+', label: 'Learning Modules' },
  { value: 92, suffix: '%', label: 'Completion Rate' },
  { value: 180, suffix: '+', label: 'Free Resources' },
]
