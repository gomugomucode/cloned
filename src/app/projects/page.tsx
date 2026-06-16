import { projects } from '@/data/projects'
import { SectionHeader } from '@/components/ui/SectionHeader'
import Link from 'next/link'
import { ChevronRight, Layout, Gauge } from 'lucide-react'
import { useState } from 'react'
import { Button } from '@/components/ui/Button'

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredProjects = projects.filter(p => 
    p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    p.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="container mx-auto px-4 py-20">
      <SectionHeader 
        title="Project Learning System" 
        subtitle="Stop following tutorials. Start building real-world systems from requirements to solution."
      />

      <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-between">
        <div className="relative w-full md:w-96">
          <input 
            type="text" 
            placeholder="Search projects, tags..." 
            className="w-full pl-4 pr-4 py-2 rounded-xl border border-border bg-card focus:ring-2 focus:ring-primary outline-none transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div >
        <div className="flex gap-2 overflow-x-auto w-full md:w-auto">
          {['Beginner', 'Intermediate', 'Advanced'].map(level => (
            <Button 
              key={level} 
              variant="outline" 
              size="sm"
              onClick={() => setSearchQuery(level)}
            >
              {level}
            </Button>
          ))}
        </div >
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <Link 
            key={project.id} 
            href={`/projects/${project.slug}`} 
            className="group relative p-8 rounded-3xl border border-border bg-card hover:border-primary/50 transition-all hover:-translate-y-1"
          >
            <div className="flex items-center justify-between mb-6">
              <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                project.difficulty === 'Beginner' ? 'bg-green-500/10 text-green-500' : 
                project.difficulty === 'Intermediate' ? 'bg-blue-500/10 text-blue-500' : 
                'bg-red-500/10 text-red-500'
              }`}>
                {project.difficulty}
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                <Gauge className="w-3 h-3" /> {project.estimatedTime}
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map(tag => (
                <span key={tag} className="px-2 py-1 rounded-md bg-secondary text-secondary-foreground text-[10px] font-bold uppercase">
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center text-sm font-bold text-primary gap-1 group-hover:gap-2 transition-all">
              Start Building <ChevronRight className="w-4 h-4" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
