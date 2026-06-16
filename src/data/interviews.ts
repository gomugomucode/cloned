export interface InterviewQuestion {
  id: string;
  question: string;
  answer: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  category: string;
  tags: string[];
}

export interface InterviewCategory {
  id: string;
  slug: string;
  title: string;
  description: string;
  icon: string;
  questions: InterviewQuestion[];
}

export const interviewCategories: InterviewCategory[] = [
  {
    id: 'js-1',
    slug: 'javascript',
    title: 'JavaScript Deep Dive',
    description: 'From prototypes to event loops. Master the language of the web.',
    icon: 'Code',
    questions: [
      { id: 'q1', question: 'Explain the Event Loop in JavaScript.', answer: 'The event loop is a mechanism that allows JavaScript to perform non-blocking I/O operations by offloading operations to the system kernel whenever possible. It constantly checks the call stack to see if there is any work to do. If the stack is empty, it takes the first event from the queue and pushes it onto the stack.', difficulty: 'Medium', category: 'Runtime', tags: ['Event Loop', 'Async'] },
      { id: 'q2', question: 'What is a closure and why is it useful?', answer: 'A closure is the combination of a function bundled together with references to its surrounding state (the lexical environment). Closures are useful for data encapsulation, creating private variables, and maintaining state in asynchronous callbacks.', difficulty: 'Easy', category: 'Fundamentals', tags: ['Scope', 'Closures'] },
      { id: 'q3', question: 'Explain the difference between == and ===.', answer: 'The == operator performs type coercion before comparing, while === checks for both value and type equality without coercion.', difficulty: 'Easy', category: 'Fundamentals', tags: ['Types'] },
    ]
  },
  {
    id: 'react-1',
    slug: 'react',
    title: 'React & Ecosystem',
    description: 'Everything from Virtual DOM to Server Components.',
    icon: 'Atom',
    questions: [
      { id: 'rq1', question: 'How does the Virtual DOM work?', answer: 'The Virtual DOM is a lightweight representation of the real DOM. When state changes, React creates a new virtual tree and compares it with the previous one (diffing). It then updates only the changed parts in the real DOM (reconciliation), which is much faster than re-rendering the entire page.', difficulty: 'Medium', category: 'Core', tags: ['VDOM', 'Performance'] },
      { id: 'rq2', question: 'What is the purpose of useEffect?', answer: 'useEffect allows you to perform side effects in functional components, such as data fetching, subscriptions, or manually changing the DOM. It replaces lifecycle methods like componentDidMount and componentDidUpdate.', difficulty: 'Easy', category: 'Hooks', tags: ['Lifecycle'] },
    ]
  },
  {
    id: 'sys-1',
    slug: 'system-design',
    title: 'System Design',
    description: 'Architecture patterns for scaling to millions of users.',
    icon: 'Database',
    questions: [
      { id: 'sq1', question: 'How would you design a URL Shortener like Bitly?', answer: 'A URL shortener requires a unique ID generation strategy (like Base62 encoding of a sequence), a fast read-store (Redis) for mapping IDs to URLs, and a relational DB (Postgres) for persistence. Key considerations: hashing collisions, expiration, and read-heavy traffic.', difficulty: 'Hard', category: 'Architecture', tags: ['Scaling', 'Hashing'] },
      { id: 'sq2', question: 'Explain the CAP Theorem.', answer: 'The CAP theorem states that a distributed system can only provide two of three guarantees: Consistency, Availability, and Partition Tolerance. In the event of a network partition, you must choose between consistency (everyone sees the same data) or availability (the system remains responsive).', difficulty: 'Medium', category: 'Theory', tags: ['Distributed Systems'] },
    ]
  }
]
