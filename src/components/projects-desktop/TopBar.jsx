import React from 'react';
import { ArrowLeft, Monitor, ListFilter, Palette, Sparkles, Terminal } from 'lucide-react';

export default function TopBar({
  viewMode,
  setViewMode,
  activeTheme,
  setActiveTheme,
  openWindow
}) {
  return (
    <header className="relative z-40 bg-[#060913]/95 backdrop-blur-md border-b border-cyan-500/20 text-slate-200 px-3 py-2 sm:px-4 sm:py-2.5 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        
        {/* Brand & Back link */}
        <div className="flex items-center gap-3">
          <a
            href="/"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-code font-semibold text-cyan-300 bg-cyan-950/70 hover:bg-cyan-900 border border-cyan-500/30 hover:border-cyan-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 shadow-sm"
            title="Return to main portfolio page"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Portfolio</span>
          </a>

          <div className="h-4 w-px bg-slate-800 hidden sm:block" />

          <div className="flex items-center gap-2">
            <span className="font-code text-xs sm:text-sm font-extrabold tracking-wider text-white">
              SUHAIL.SYS
            </span>
            <span className="text-[10px] font-code px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 hidden md:inline-block">
              Win98 Project OS
            </span>
          </div>
        </div>

        {/* View Mode Switcher (Recruiter Friendly) & Theme Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          
          {/* View Switcher: Desktop vs List */}
          <div
            className="inline-flex items-center p-0.5 rounded-lg bg-[#0e1730] border border-slate-700/80"
            role="group"
            aria-label="View Mode Switcher"
          >
            <button
              type="button"
              onClick={() => setViewMode('desktop')}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-code transition-all ${
                viewMode === 'desktop'
                  ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 border border-transparent'
              }`}
              aria-pressed={viewMode === 'desktop'}
              title="Interactive Windows 98 desktop view"
            >
              <Monitor className="w-3.5 h-3.5" />
              <span className="hidden xs:inline">Desktop</span>
            </button>

            <button
              type="button"
              onClick={() => setViewMode('list')}
              className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-code transition-all ${
                viewMode === 'list'
                  ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 border border-transparent'
              }`}
              aria-pressed={viewMode === 'list'}
              title="Fast recruiter-friendly list view with search & filters"
            >
              <ListFilter className="w-3.5 h-3.5" />
              <span>List View</span>
              <span className="hidden sm:inline-block text-[10px] text-emerald-400 font-mono font-semibold ml-0.5">
                (Recruiter)
              </span>
            </button>
          </div>

          {/* Quick Theme Switcher */}
          <div className="flex items-center gap-1">
            <label htmlFor="theme-select" className="sr-only">
              Select Desktop Theme
            </label>
            <div className="relative inline-flex items-center">
              <Palette className="w-3.5 h-3.5 text-slate-400 absolute left-2 pointer-events-none" />
              <select
                id="theme-select"
                value={activeTheme}
                onChange={(e) => setActiveTheme(e.target.value)}
                className="pl-7 pr-3 py-1 rounded-lg text-xs font-code bg-[#0e1730] text-slate-200 border border-slate-700 hover:border-cyan-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 appearance-none cursor-pointer"
                title="Switch desktop visual theme"
              >
                <option value="classic">Theme: Classic 98</option>
                <option value="neon">Theme: Cyber Neon</option>
                <option value="modern">Theme: Modern Dark</option>
              </select>
            </div>
          </div>

        </div>

      </div>
    </header>
  );
}
