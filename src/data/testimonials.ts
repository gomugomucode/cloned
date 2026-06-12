export interface Testimonial {
  id: string
  name: string
  role: string
  avatar: string
  quote: string
  rating: number
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Morgan Ellis',
    role: 'Junior Frontend Developer',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=120&h=120&fit=crop&crop=face',
    quote:
      'The interactive quizzes and roadmaps gave me a clear path from zero to my first dev job. Everything is structured and actually fun to use.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Ravi Patel',
    role: 'Computer Science Student',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=face',
    quote:
      'I tried several learning platforms before this one. The cheat sheets and weekly challenges kept me consistent when motivation dipped.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Elena Vasquez',
    role: 'Career Switcher → Backend Dev',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&h=120&fit=crop&crop=face',
    quote:
      'Coming from a non-tech background, the step-by-step roadmaps and beginner-friendly articles made the transition feel achievable.',
    rating: 5,
  },
  {
    id: '4',
    name: 'James Okonkwo',
    role: 'Freelance Web Developer',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=face',
    quote:
      'The resource library alone is worth bookmarking. PDF guides and tools I use daily — all free and well organized.',
    rating: 4,
  },
]
