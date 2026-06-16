'use client';

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Code2 } from 'lucide-react'
import { navLinks, brandName } from '../../data/navigation'
import { Button } from '../ui/Button'

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 border-b border-surface-700/50 bg-surface-900/80 backdrop-blur-xl">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2.5 group" aria-label={`${brandName} home`}>
            <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-accent-purple to-accent-cyan flex items-center justify-center group-hover:scale-105 transition-transform">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-text-primary">
              {brandName}
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                      ? 'text-accent-purple bg-accent-purple/10'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface-750'
                  }`
                }
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <Button to="/blog" variant="ghost" size="sm">
              Articles
            </Button>
            <Button to="/#weekly-challenge" variant="primary" size="sm">
              Start Learning
            </Button>
          </div>

          <button
            type="button"
            className="md:hidden p-2 rounded-lg text-text-secondary hover:text-text-primary hover:bg-surface-750 transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden pb-4 border-t border-surface-700/50 pt-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    pathname === link.href
                        ? 'text-accent-purple bg-accent-purple/10'
                        : 'text-text-secondary hover:text-text-primary hover:bg-surface-750'
                    }`
                  }
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-3 px-4 flex flex-col gap-2">
                <Button to="/#weekly-challenge" variant="primary" size="md" className="w-full">
                  Start Learning
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
