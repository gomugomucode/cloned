import type { RoadmapData, NoteChapter, CheatsheetCommand, InterviewQuestion, ProjectDetails } from './types'
import type { TechResourceData } from './resources/types'

import { javascriptRoadmap } from './roadmaps/javascript'
import { pythonRoadmap } from './roadmaps/python'
import { reactRoadmap } from './roadmaps/react'
import { nodejsRoadmap } from './roadmaps/nodejs'
import { typescriptRoadmap } from './roadmaps/typescript'
import { gitRoadmap } from './roadmaps/git'
import { dockerRoadmap } from './roadmaps/docker'
import { awsRoadmap } from './roadmaps/aws'

import { javascriptNotes } from './notes/javascript'
import { pythonNotes } from './notes/python'
import { reactNotes } from './notes/react'
import { nodejsNotes } from './notes/nodejs'
import { typescriptNotes } from './notes/typescript'
import { gitNotes } from './notes/git'
import { dockerNotes } from './notes/docker'
import { awsNotes } from './notes/aws'

import { javascriptCheatsheet } from './cheatsheets/javascript'
import { pythonCheatsheet } from './cheatsheets/python'
import { reactCheatsheet } from './cheatsheets/react'
import { nodejsCheatsheet } from './cheatsheets/nodejs'
import { typescriptCheatsheet } from './cheatsheets/typescript'
import { gitCheatsheet } from './cheatsheets/git'
import { dockerCheatsheet } from './cheatsheets/docker'
import { awsCheatsheet } from './cheatsheets/aws'

import { javascriptInterviews } from './interviews/javascript'
import { pythonInterviews } from './interviews/python'
import { reactInterviews } from './interviews/react'
import { nodejsInterviews } from './interviews/nodejs'
import { typescriptInterviews } from './interviews/typescript'
import { gitInterviews } from './interviews/git'
import { dockerInterviews } from './interviews/docker'
import { awsInterviews } from './interviews/aws'

import { javascriptProjects } from './projects/javascript'
import { pythonProjects } from './projects/python'
import { reactProjects } from './projects/react'
import { nodejsProjects } from './projects/nodejs'
import { typescriptProjects } from './projects/typescript'
import { gitProjects } from './projects/git'
import { dockerProjects } from './projects/docker'
import { awsProjects } from './projects/aws'

import { javascriptResourceData } from './resources/javascript'
import { pythonResourceData } from './resources/python'
import { reactResourceData } from './resources/react'
import { nodejsResourceData } from './resources/nodejs'
import { typescriptResourceData } from './resources/typescript'
import { gitResourceData } from './resources/git'
import { dockerResourceData } from './resources/docker'
import { awsResourceData } from './resources/aws'

export interface FullTechData {
  id: string
  roadmap: RoadmapData
  notes: NoteChapter[]
  cheatsheet: CheatsheetCommand[]
  interviews: InterviewQuestion[]
  projects: ProjectDetails[]
  resources: TechResourceData
}

const db: Record<string, FullTechData> = {
  javascript: {
    id: 'javascript',
    roadmap: javascriptRoadmap,
    notes: javascriptNotes,
    cheatsheet: javascriptCheatsheet,
    interviews: javascriptInterviews,
    projects: javascriptProjects,
    resources: javascriptResourceData,
  },
  python: {
    id: 'python',
    roadmap: pythonRoadmap,
    notes: pythonNotes,
    cheatsheet: pythonCheatsheet,
    interviews: pythonInterviews,
    projects: pythonProjects,
    resources: pythonResourceData,
  },
  react: {
    id: 'react',
    roadmap: reactRoadmap,
    notes: reactNotes,
    cheatsheet: reactCheatsheet,
    interviews: reactInterviews,
    projects: reactProjects,
    resources: reactResourceData,
  },
  nodejs: {
    id: 'nodejs',
    roadmap: nodejsRoadmap,
    notes: nodejsNotes,
    cheatsheet: nodejsCheatsheet,
    interviews: nodejsInterviews,
    projects: nodejsProjects,
    resources: nodejsResourceData,
  },
  typescript: {
    id: 'typescript',
    roadmap: typescriptRoadmap,
    notes: typescriptNotes,
    cheatsheet: typescriptCheatsheet,
    interviews: typescriptInterviews,
    projects: typescriptProjects,
    resources: typescriptResourceData,
  },
  git: {
    id: 'git',
    roadmap: gitRoadmap,
    notes: gitNotes,
    cheatsheet: gitCheatsheet,
    interviews: gitInterviews,
    projects: gitProjects,
    resources: gitResourceData,
  },
  docker: {
    id: 'docker',
    roadmap: dockerRoadmap,
    notes: dockerNotes,
    cheatsheet: dockerCheatsheet,
    interviews: dockerInterviews,
    projects: dockerProjects,
    resources: dockerResourceData,
  },
  aws: {
    id: 'aws',
    roadmap: awsRoadmap,
    notes: awsNotes,
    cheatsheet: awsCheatsheet,
    interviews: awsInterviews,
    projects: awsProjects,
    resources: awsResourceData,
  },
}

export function getAllTechnologies(): string[] {
  return Object.keys(db)
}

export function getTechData(slug: string): FullTechData | undefined {
  return db[slug.toLowerCase()]
}
