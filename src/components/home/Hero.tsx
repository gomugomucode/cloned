import { ArrowRight, Sparkles, Play } from 'lucide-react'
import { Button } from '../ui/Button'
import { brandTagline } from '../../data/navigation'

export function Hero() {
  return (
    <section className="relative overflow-hidden hero-grid">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-cyan/8 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-36 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-800 border border-surface-600 text-sm text-text-secondary mb-8">
            <Sparkles className="w-4 h-4 text-accent-purple" />
            <span>Free programming education for everyone</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-text-primary mb-6 leading-[1.1]">
            {brandTagline}
            <br />
            <span className="gradient-text">Build Real Skills</span>
          </h1>

          <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
            Master programming with hands-on courses, 500+ quizzes, interactive games, visual roadmaps, and free resources — all in one place.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button to="/#weekly-challenge" size="lg">
              Start This Week&apos;s Quiz
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button to="/resources" variant="secondary" size="lg">
              <Play className="w-5 h-5" />
              Explore Resources
            </Button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-4 max-w-lg mx-auto">
            {['No login required', '100% free forever', '500+ questions'].map((item) => (
              <div key={item} className="text-xs sm:text-sm text-text-muted">
                <span className="text-accent-emerald mr-1">✓</span>
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 max-w-5xl mx-auto">
          <div className="gradient-border rounded-2xl overflow-hidden glow-purple">
            <div className="bg-surface-850 p-1">
              <div className="bg-surface-900 rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-surface-800 border-b border-surface-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="text-xs text-text-muted font-mono ml-2">main.py</span>
                </div>
                <pre className="p-6 text-left text-sm font-mono overflow-x-auto">
                  <code>
                    <span className="text-accent-purple">def</span>{' '}
                    <span className="text-accent-cyan">learn_to_code</span>
                    <span className="text-text-primary">():</span>
                    {'\n'}
                    <span className="text-text-muted">    </span>
                    <span className="text-text-secondary">&quot;&quot;&quot;Your journey starts here.&quot;&quot;&quot;</span>
                    {'\n'}
                    <span className="text-text-muted">    </span>
                    <span className="text-text-primary">skills</span>
                    <span className="text-text-muted"> = [</span>
                    <span className="text-accent-emerald">&quot;Python&quot;</span>
                    <span className="text-text-muted">, </span>
                    <span className="text-accent-emerald">&quot;JavaScript&quot;</span>
                    <span className="text-text-muted">, </span>
                    <span className="text-accent-emerald">&quot;DSA&quot;</span>
                    <span className="text-text-muted">]</span>
                    {'\n'}
                    <span className="text-text-muted">    </span>
                    <span className="text-accent-purple">for</span>
                    <span className="text-text-primary"> skill </span>
                    <span className="text-accent-purple">in</span>
                    <span className="text-text-primary"> skills</span>
                    <span className="text-text-muted">:</span>
                    {'\n'}
                    <span className="text-text-muted">        </span>
                    <span className="text-accent-cyan">practice</span>
                    <span className="text-text-muted">(skill)</span>
                    {'\n'}
                    <span className="text-text-muted">    </span>
                    <span className="text-accent-purple">return</span>
                    <span className="text-text-muted"> </span>
                    <span className="text-accent-amber">&quot;Ready to build!&quot;</span>
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
