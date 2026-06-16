'use client';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Code2 } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-600/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full" />
      </div>

      <div className="container relative z-10 px-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-violet-400 mb-8"
        >
          <Code2 className="w-3 h-3" />
          <span>The Ultimate Forge for Modern Developers</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-6"
        >
          Build your legacy <br /> 
          <span className="gradient-text">
            with precision.
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg text-zinc-400 mb-10 leading-relaxed"
        >
          StackForge provides the architectural blueprints, distilled cheat sheets, 
          and production-grade projects required to transition from a coder to an engineer.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button size="sm" className="rounded-full px-8 bg-white text-black hover:bg-zinc-200 group">
            Explore Roadmaps
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="sm" variant="outline" className="rounded-full px-8 border-white/10 text-white hover:bg-white/5">
            View Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
