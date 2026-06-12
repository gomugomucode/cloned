import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { 
  Bookmark, 
  Trash2, 
  ExternalLink, 
  BookOpen, 
  Zap, 
  HelpCircle, 
  Search, 
  Compass,
  FolderOpen
} from 'lucide-react'
import { getBookmarks, removeBookmark, type BookmarkItem } from '../hooks/useProgress'
import { SEOHead } from '../components/ui/SEOHead'

export function BookmarksPage() {
  const [bookmarks, setBookmarks] = useState<BookmarkItem[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState<'all' | 'note' | 'cheatsheet' | 'interview' | 'resource'>('all')

  // Load bookmarks
  useEffect(() => {
    setBookmarks(getBookmarks())
  }, [])

  const handleRemove = (id: string) => {
    removeBookmark(id)
    setBookmarks(prev => prev.filter(b => b.id !== id))
  }

  // Filter bookmarks
  const filteredBookmarks = bookmarks.filter(b => {
    const matchesTab = activeTab === 'all' || b.type === activeTab
    const matchesSearch = searchQuery === '' || 
      b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (b.subtitle && b.subtitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
      b.techId.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesTab && matchesSearch
  })

  // Format type icons
  const getTypeIcon = (type: string) => {
    switch(type) {
      case 'note': return <BookOpen className="w-4 h-4 text-accent-purple" />
      case 'cheatsheet': return <Zap className="w-4 h-4 text-accent-cyan" />
      case 'interview': return <HelpCircle className="w-4 h-4 text-orange-400" />
      default: return <FolderOpen className="w-4 h-4 text-accent-emerald" />
    }
  }

  // Resolve target tab in TechHub
  const getTabParam = (type: string) => {
    switch(type) {
      case 'note': return 'notes'
      case 'cheatsheet': return 'cheatsheets'
      case 'interview': return 'interviews'
      default: return 'resources'
    }
  }

  return (
    <div className="space-y-6 py-6 select-text">
      <SEOHead 
        title="My Study Bookmarks — StackForge"
        description="Access all your bookmarked notes, cheat sheets, interview questions, and tech resources in one place."
      />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 glass rounded-2xl">
        <div>
          <h2 className="text-xl font-bold text-text-primary flex items-center gap-2">
            <Bookmark className="w-6 h-6 text-accent-purple fill-accent-purple/15" /> My Bookmarks
          </h2>
          <p className="text-sm text-text-secondary">Your saved study notes, cheat sheets, interview prep questions, and resources.</p>
        </div>
        <div className="relative w-full md:w-72">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-secondary" />
          <input
            type="text"
            placeholder="Search bookmarks..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-background-card/50 border border-border/40 rounded-xl text-xs focus:outline-none focus:border-accent-purple/50 text-text-primary"
          />
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 pb-2 border-b border-border/10">
        {(['all', 'note', 'cheatsheet', 'interview', 'resource'] as const).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all capitalize border ${
              activeTab === tab 
                ? 'bg-accent-purple text-white border-accent-purple shadow-md shadow-accent-purple/10'
                : 'bg-background-card/30 text-text-secondary border-border/10 hover:text-text-primary hover:border-border/30'
            }`}
          >
            {tab === 'all' ? 'All Saved' : `${tab}s`}
          </button>
        ))}
      </div>

      {/* Bookmarks List Grid */}
      {filteredBookmarks.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredBookmarks.map((bookmark) => (
            <div
              key={bookmark.id}
              className="glass-card p-5 rounded-2xl border border-border/15 hover:border-accent-purple/30 transition-all flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-border/20 flex items-center justify-center">
                    {getTypeIcon(bookmark.type)}
                  </div>
                  <div>
                    <span className="text-[10px] font-bold text-accent-purple uppercase tracking-wider capitalize">
                      {bookmark.techId} • {bookmark.type}
                    </span>
                    <span className="text-[9px] text-text-secondary block">
                      Saved on {new Date(bookmark.savedAt).toLocaleDateString()}
                    </span>
                  </div>
                </div>

                <div className="space-y-1">
                  <h3 className="font-bold text-sm text-text-primary leading-snug">
                    {bookmark.title}
                  </h3>
                  {bookmark.subtitle && (
                    <p className="text-xs text-text-secondary leading-normal">
                      {bookmark.subtitle}
                    </p>
                  )}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-5 pt-3 border-t border-border/10 flex items-center justify-between">
                <Link
                  to={`/roadmap/${bookmark.techId}?tab=${getTabParam(bookmark.type)}`}
                  className="text-xs font-bold text-accent-purple hover:underline flex items-center gap-1"
                >
                  Go to Source <ExternalLink className="w-3.5 h-3.5" />
                </Link>

                <button
                  onClick={() => handleRemove(bookmark.id)}
                  className="p-2 text-text-secondary hover:text-red-400 hover:bg-red-500/5 rounded-xl border border-transparent hover:border-red-500/10 transition-all"
                  title="Remove Bookmark"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>

            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 glass rounded-2xl">
          <Compass className="w-12 h-12 text-text-secondary mx-auto mb-3" />
          <h3 className="font-bold text-text-primary">No Bookmarks Found</h3>
          <p className="text-sm text-text-secondary mt-1">
            {bookmarks.length === 0 
              ? "You haven't bookmarked any items yet." 
              : "No bookmarks match your search or filter."}
          </p>
          {bookmarks.length === 0 && (
            <Link
              to="/roadmaps"
              className="inline-block mt-4 px-6 py-2.5 bg-accent-purple hover:bg-accent-purple/95 text-white rounded-xl text-xs font-bold transition-all shadow-md"
            >
              Browse Roadmaps
            </Link>
          )}
        </div>
      )}
    </div>
  )
}
