'use client';
import React, { createContext, useContext, useState, useEffect } from 'react';

interface ProgressContextType {
  completedNodes: Set<string>;
  toggleNode: (nodeId: string) => void;
  getProgress: (roadmapId: string, nodes: string[]) => number;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

export function ProgressProvider({ children }: { children: React.ReactNode }) {
  const [completedNodes, setCompletedNodes] = useState<Set<string>>(new Set());

  useEffect(() => {
    const saved = localStorage.getItem('stackforge-progress');
    if (saved) {
      requestAnimationFrame(() => {
        setCompletedNodes(new Set(JSON.parse(saved)));
      });
    }
  }, []);

  const toggleNode = (nodeId: string) => {
    setCompletedNodes(prev => {
      const next = new Set(prev);
      if (next.has(nodeId)) {
        next.delete(nodeId);
      } else {
        next.add(nodeId);
      }
      localStorage.setItem('stackforge-progress', JSON.stringify(Array.from(next)));
      return next;
    });
  };

  const getProgress = (roadmapId: string, nodes: string[]) => {
    const completedInRoadmap = nodes.filter(id => completedNodes.includes(id));
    return Math.round((completedInRoadmap.length / nodes.length) * 100);
  };

  return (
    <ProgressContext.Provider value={{ completedNodes, toggleNode, getProgress }}>
      {children}
    </ProgressContext.Provider>
  );
}

export function useProgress() {
  const context = useContext(ProgressContext);
  if (!context) throw new Error('useProgress must be used within ProgressProvider');
  return context;
}
