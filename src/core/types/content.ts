export type ContentLevel = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';

export interface ContentBase {
  id: string;
  title: string;
  description: string;
  category: string;
  level: ContentLevel;
  thumbnail: string;
  tags: string[];
  lastUpdated: string;
  duration?: string;
}

export interface Tutorial extends ContentBase {
  type: 'tutorial';
  steps: number;
  difficulty: ContentLevel;
}

export interface RoadmapNode {
  id: string;
  title: string;
  description: string;
  status: 'locked' | 'current' | 'completed';
  links: string[];
  dependencies: string[];
}

export interface Roadmap extends ContentBase {
  type: 'roadmap';
  nodes: RoadmapNode[];
}

export interface CheatsheetItem {
  id: string;
  title: string;
  code: string;
  description: string;
  category: string;
}

export interface Cheatsheet extends ContentBase {
  type: 'cheatsheet';
  items: CheatsheetItem[];
}

export interface InterviewQuestion {
  id: string;
  question: string;
  answer: string;
  category: string;
  difficulty: ContentLevel;
}

export interface InterviewPrep extends ContentBase {
  type: 'interview-prep';
  questions: InterviewQuestion[];
}

export interface Project extends ContentBase {
  type: 'project';
  githubUrl: string;
  demoUrl: string;
  techStack: string[];
}

export type ContentItem = Tutorial | Roadmap | Cheatsheet | InterviewPrep | Project;
