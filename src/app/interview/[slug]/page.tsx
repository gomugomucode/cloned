"use client"

import { interviewCategories } from '@/data/interviews'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { notFound } from 'next/navigation'
import { useState } from 'react'
import { CheckCircle2, Circle, Bookmark, Search, Filter, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { motion } from 'framer-motion'
import { useBookmarks } from '@/context/BookmarkContext'
import React from 'react'

export default function InterviewCategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const resolvedParams = React.use(params)
  const category = interviewCategories.find(c => c.slug === resolvedParams.slug)

  if (!category) {
    notFound()
  }

  const [searchQuery, setSearchQuery] = useState('')
  const { bookmarkedIds, toggleBookmark } = useBookmarks()
  const [expandedId, setExpandedId] = useState<string | null>(null)

  const toggleB = (id: string) => {
    toggleBookmark(id, category.category || 'interview')
  }

  const filteredQuestions = category.questions.filter(q => 
    q.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
    q.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  return (
    <div className="container mx-auto px-4 py-20">
      <SectionHeader 
        title={category.title} 
        subtitle={category.description}
      />

      <div className="flex flex-col md:flex-row gap-4 mb-12 items-center justify-between">
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input 
            type="text" 
            placeholder="Search questions or keywords..." 
            className="w-full pl-10 pr-4 py-2 rounded-xl border border-border bg-card focus:ring-2 focus:ring-primary outline-none transition-all"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div >
        <Button variant="outline" className="gap-2">
          <Filter className="w-4 h-4" /> Filter Difficulty
        </Button>
      </div>

      <div className="space-y-4">
        {filteredQuestions.map((q, idx) => (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05 }}
            key={q.id} 
            className="group rounded-3xl border border-border bg-card overflow-hidden"
          >
            <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                    q.difficulty === 'Easy' ? 'bg-green-500/10 text-green-500' : 
                    q.difficulty === 'Medium' ? 'bg-blue-500/10 text-blue-500' : 
                    'bg-red-500/10 text-red-500'
                  }`}>
                    {q.difficulty}
                  </span>
                  <span className="text-xs text-muted-foreground">• {q.category}</span>
                </div>
                <h3 className="text-lg font-bold group-hover:text-primary transition-colors cursor-pointer">
                  {q.question}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={`h-9 w-9 p-0 ${bookmarkedIds.has(q.id) ? 'text-yellow-500' : ''}`}
                  onClick={() => toggleB(q.id)}
                >
                  <Bookmark className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  View Answer <ChevronRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="px-6 py-3 bg-secondary/30 border-t border-border flex flex-wrap gap-2">
              {q.tags.map(tag => (
                <span key={tag} className="text-[10px] font-medium text-muted-foreground hover:text-foreground cursor-pointer">
                  #{tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
