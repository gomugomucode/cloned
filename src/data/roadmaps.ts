import { Roadmap } from '../core/types/content';

export const roadmaps: Roadmap[] = [
  {
    id: 'frontend',
    title: 'Frontend Developer',
    description: 'Master the art of building stunning, responsive, and performant user interfaces using the modern web stack.',
    category: 'Web Development',
    level: 'Beginner',
    thumbnail: 'https://images.unsplash.com/photo-1547658714-1857171e4d6f?w=800&q=80',
    tags: ['React', 'Tailwind', 'TypeScript', 'Next.js'],
    lastUpdated: 'Oct 2023',
    duration: '6 Months',
    type: 'roadmap',
    nodes: [
      { id: 'html', title: 'HTML5 Basics', description: 'Learn the structure of the web.', status: 'completed', links: ['/tutorials/html-basics'], dependencies: [] },
      { id: 'css', title: 'CSS3 & Layouts', description: 'Master Flexbox and Grid.', status: 'completed', links: ['/tutorials/css-layouts'], dependencies: ['html'] },
      { id: 'js', title: 'JavaScript Modern', description: 'ES6+, Async/Await, and DOM.', status: 'current', links: ['/tutorials/js-modern'], dependencies: ['css'] },
      { id: 'react', title: 'React Ecosystem', description: 'Hooks, State Management, and Routing.', status: 'locked', links: ['/tutorials/react-core'], dependencies: ['js'] },
    ]
  },
  {
    id: 'backend',
    title: 'Backend Engineer',
    description: 'Build scalable and secure server-side applications with robust APIs and efficient database management.',
    category: 'Web Development',
    level: 'Intermediate',
    thumbnail: 'https://images.unsplash.com/photo-1558494949-ef010cefB2ce?w=800&q=80',
    tags: ['Node.js', 'PostgreSQL', 'Redis', 'Docker'],
    lastUpdated: 'Nov 2023',
    duration: '5 Months',
    type: 'roadmap',
    nodes: [
      { id: 'node', title: 'Node.js Runtime', description: 'Understanding event loops and async.', status: 'completed', links: ['/tutorials/node-basics'], dependencies: [] },
      { id: 'express', title: 'API Design', description: 'REST, GraphQL, and Middleware.', status: 'current', links: ['/tutorials/express-api'], dependencies: ['node'] },
      { id: 'db', title: 'Database Design', description: 'SQL vs NoSQL and ACID properties.', status: 'locked', links: ['/tutorials/databases'], dependencies: ['express'] },
    ]
  },
  {
    id: 'devops',
    title: 'DevOps & Cloud',
    description: 'Bridge the gap between development and operations with CI/CD pipelines and cloud infrastructure.',
    category: 'Infrastructure',
    level: 'Advanced',
    thumbnail: 'https://images.unsplash.com/photo-1667372393159-7776f277c876?w=800&q=80',
    tags: ['AWS', 'Kubernetes', 'Terraform', 'GitHub Actions'],
    lastUpdated: 'Dec 2023',
    duration: '4 Months',
    type: 'roadmap',
    nodes: [
      { id: 'linux', title: 'Linux Fundamentals', description: 'Bash, SSH and Permissions.', status: 'completed', links: ['/tutorials/linux'], dependencies: [] },
      { id: 'docker', title: 'Containerization', description: 'Docker and Docker Compose.', status: 'current', links: ['/tutorials/docker'], dependencies: ['linux'] },
      { id: 'k8s', title: 'Orchestration', description: 'Kubernetes clusters and pods.', status: 'locked', links: ['/tutorials/k8s'], dependencies: ['docker'] },
    ]
  },
];
