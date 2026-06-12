import { stats } from '../../data/stats'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import { useCounter } from '../../hooks/useCounter'

function StatItem({ value, suffix, label, start }: { value: number; suffix: string; label: string; start: boolean }) {
  const count = useCounter(value, 2000, start)

  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl lg:text-5xl font-bold font-mono gradient-text mb-2">
        {count.toLocaleString()}
        {suffix}
      </div>
      <div className="text-text-secondary text-sm md:text-base">{label}</div>
    </div>
  )
}

export function StatsSection() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section ref={ref} className="py-16 md:py-20 border-y border-surface-700/50 bg-surface-850/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} start={isVisible} />
          ))}
        </div>
      </div>
    </section>
  )
}
