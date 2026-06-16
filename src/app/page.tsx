'use client';

import { HeroSection } from '@/components/home/hero/hero-section'
import { FeatureBento } from '@/components/home/features/bento-grid'
import { roadmaps } from '@/data/roadmaps'

const roadmapFeatures = roadmaps.map(r => ({
  title: r.title,
  description: r.description,
  icon: r.icon,
  size: (r.id === 'frontend' ? 'large' : 'small') as 'small' | 'large',
  href: `/roadmaps/${r.id}`,
  color: 'bg-violet-500'
}))

export default function HomePage() {
  return (
    <div className="bg-black min-h-screen">
      <HeroSection />
      
      <div className="py-20 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Engineered for Excellence
        </h2>
        <p className="text-zinc-500 max-w-xl mx-auto px-4 text-lg">
          Carefully curated paths to mastery, stripped of fluff and focused on production reality.
        </p>
      </div>

      <FeatureBento items={roadmapFeatures} />
    </div>
  )
}
