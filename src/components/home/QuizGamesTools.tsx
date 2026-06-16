'use client';

/* eslint-disable react-hooks/static-components */
import { ArrowRight } from 'lucide-react'
import type { QuizGameTool } from '../../data/quizGamesTools'
import { quizGamesTools } from '../../data/quizGamesTools'
import { getIcon } from '../../utils/icons'
import { SectionHeader } from '../ui/SectionHeader'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

const typeColors = {
  quiz: 'bg-violet-500/10 text-violet-400 border-violet-500/20',
  game: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
  tool: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
}

function DynamicIcon({ name, className }: { name: string; className?: string }) {
  const Icon = getIcon(name)
  return <Icon className={className} />
}

interface ActivityCardProps {
  item: QuizGameTool
}

export function ActivityCard({ item }: ActivityCardProps) {
  return (
    <a
      href={item.href}
      className="group block p-6 rounded-2xl bg-surface-800/80 border border-surface-600/50 hover:border-accent-purple/40 transition-all duration-300 hover:-translate-y-1"
    >
      <div className="flex items-start justify-between mb-4">
        <div className="w-11 h-11 rounded-xl bg-surface-700 flex items-center justify-center group-hover:bg-accent-purple/10 transition-colors">
          <DynamicIcon name={item.icon} className="w-5 h-5 text-accent-purple" />
        </div>
        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border capitalize ${typeColors[item.type]}`}>
          {item.type}
        </span>
      </div>
      <h3 className="font-bold text-text-primary mb-2 group-hover:text-accent-purple transition-colors">
        {item.title}
      </h3>
      <p className="text-text-secondary text-sm leading-relaxed mb-4">{item.description}</p>
      <div className="flex items-center justify-between">
        {item.questions && (
          <span className="text-xs text-text-muted font-mono">{item.questions} questions</span>
        )}
        <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent-purple ml-auto">
          Open
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </span>
      </div>
    </a>
  )
}

export function QuizGamesTools() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-20 md:py-28 bg-surface-850/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          badge="Interactive"
          title="Quizzes, Games"
          highlight="& Tools"
          description="Practice what you learn with interactive quizzes, coding games, and handy developer tools."
        />

        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {quizGamesTools.map((item) => (
            <ActivityCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
