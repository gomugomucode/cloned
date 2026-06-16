"use client"

import React, { useState, useEffect } from 'react'
import { CheckCircle2, Circle, Lock, BookOpen, ArrowRight, ArrowLeft } from 'lucide-react'
import { Roadmap, RoadmapNode } from '@/data/roadmaps'
import { useProgress } from '@/context/ProgressContext'
import { Button } from '@/components/ui/Button'
import { motion, AnimatePresence } from 'framer-motion'

interface RoadmapViewProps {
  roadmap: Roadmap
}

export function RoadmapView({ roadmap }: RoadmapViewProps) {
  const { completedNodes, toggleNode } = useProgress()
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null)

  const nodes = [...roadmap.nodes].sort((a, b) => a.order - b.order)
  
  useEffect(() => {
    if (nodes.length > 0) {
      const firstUncompleted = nodes.find(n => !completedNodes.has(n.id))
      setActiveNodeId(firstUncompleted?.id || nodes[nodes.length - 1].id)
    }
  }, [completedNodes, nodes])

  const isNodeLocked = (node: RoadmapNode, index: number) => {
    if (index === 0) return false
    const prevNode = nodes[index - 1]
    return !completedNodes.has(prevNode.id)
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 h-full">
      {/* Visual Roadmap Column */}
      <div className="flex-1 relative p-6 bg-card rounded-3xl border border-border overflow-y-auto max-h-[80vh] lg:max-h-screen">
        <div className="relative flex flex-col items-center gap-12">
          {nodes.map((node, index) => (
            <React.Fragment key={node.id}>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => !isNodeLocked(node, index) && setActiveNodeId(node.id)}
                className={`relative z-10 w-full max-w-sm p-4 rounded-2xl border-2 transition-all cursor-pointer group
                  ${activeNodeId === node.id ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10' : 
                    isNodeLocked(node, index) ? 'border-muted bg-muted/30 opacity-60' : 'border-border bg-background hover:border-primary/50'}
                `}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                    completedNodes.has(node.id) ? 'bg-primary text-white' : 
                    isNodeLocked(node, index) ? 'bg-muted text-muted-foreground' : 'bg-secondary text-foreground'
                  }`}>
                    {completedNodes.has(node.id) ? <CheckCircle2 className="w-6 h-6" /> : 
                     isNodeLocked(node, index) ? <Lock className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm">{node.title}</h4>
                    <p className="text-xs text-muted-foreground line-clamp-1">{node.description}</p>
                  </div>
                  {activeNodeId === node.id && (
                    <div className="bg-primary text-white text-[10px] font-bold px-2 py-1 rounded uppercase">
                      Active
                    </div>
                  )}
                </div>
              </motion.div>
              
              {index < nodes.length - 1 && (
                <div className="w-1 h-12 bg-border relative">
                  <div 
                    className="absolute top-0 left-0 w-full bg-primary transition-all duration-500" 
                    style={{ height: completedNodes.has(nodes[index].id) ? '100%' : '0%' }}
                  />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Content Panel */}
      <div className="lg:w-[450px] p-8 bg-background rounded-3xl border border-border sticky top-24 h-fit">
        <AnimatePresence mode="wait">
          {activeNodeId ? (
            <motion.div 
              key={activeNodeId}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg bg-primary/10 text-primary">
                  <BookOpen className="w-5 h-5" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Learning Module</span>
              </div>
              
              <h2 className="text-2xl font-bold">
                {nodes.find(n => n.id === activeNodeId)?.title}
              </h2>
              
              <div className="p-4 rounded-2xl bg-secondary text-muted-foreground text-sm leading-relaxed">
                {nodes.find(n => n.id === activeNodeId)?.content}
              </div>

              <div className="flex items-center justify-between pt-6 border-t border-border">
                <Button 
                  variant="outline" 
                  disabled={!completedNodes.has(nodes.find(n => n.id === activeNodeId)?.id)}
                  onClick={() => {
                    // Logic to go to previous node
                  }}
                >
                  <ArrowLeft className="w-4 h-4 mr-2" /> Previous
                </Button>
                
                <Button 
                  variant="primary" 
                  onClick={() => toggleNode(activeNodeId)}
                  className="gap-2"
                >
                  {completedNodes.has(activeNodeId) ? (
                    <>Undo <CheckCircle2 className="w-4 h-4" /></>
                  ) : (
                    <>Mark Completed <ArrowRight className="w-4 h-4" /></>
                  )}
                </Button>
              </div>
            </motion.div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground">Select a node to start learning</p>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
