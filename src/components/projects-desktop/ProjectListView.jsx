import React, { useState, useMemo } from 'react';
import {
  Search,
  X,
  Github,
  ExternalLink,
  SlidersHorizontal,
  Monitor,
  FolderGit2,
  CheckCircle,
  AlertCircle
} from 'lucide-react';
import { WINDOWS_PROJECTS } from '../../data/windowsProjectsData';

export default function ProjectListView({ onOpenProjectInDesktop, activeTheme }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('All');

  const filters = ['All', 'Machine Learning', 'MLOps', 'Cloud'];

  // Filter projects by search query and category
  const filteredProjects = useMemo(() => {
    return WINDOWS_PROJECTS.filter((proj) => {
      // Category match
      const matchesCategory =
        selectedFilter === 'All' || proj.categories.includes(selectedFilter);

      if (!matchesCategory) return false;

      // Search match
      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const matchName = proj.name.toLowerCase().includes(q);
      const matchFullName = proj.fullName.toLowerCase().includes(q);
      const matchSummary = proj.summary.toLowerCase().includes(q);
      const matchProblem = proj.problemStatement.toLowerCase().includes(q);
      const matchTech = proj.technologies.some((t) => t.toLowerCase().includes(q));

      return matchName || matchFullName || matchSummary || matchProblem || matchTech;
    });
  }, [searchQuery, selectedFilter]);

  const isClassic = activeTheme === 'classic';

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 select-text">
      {/* Recruiter Header */}
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-xs font-code text-cyan-400 uppercase tracking-widest mb-2">
          <FolderGit2 className="w-3.5 h-3.5" />
          <span>Recruiter-Friendly Project Explorer</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
          Featured Engineering & Machine Learning Projects
        </h1>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          Direct overview of reproducible machine learning pipelines, early-warning intelligence systems, and cloud deployments. Filter by domain or search for specific tools and frameworks.
        </p>
      </div>

      {/* Search and Filters Bar */}
      <div className="p-4 rounded-xl bg-[#0a1126] border border-cyan-500/20 mb-8 shadow-lg">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
          
          {/* Search Box */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by title, technology (e.g. DVC, Docker, AWS), or keyword..."
              className="w-full pl-9 pr-9 py-2 rounded-lg text-xs sm:text-sm font-code bg-[#060a18] text-slate-100 placeholder-slate-500 border border-slate-700 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-colors"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 p-1 text-slate-400 hover:text-white"
                title="Clear search"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-xs font-code text-slate-400 mr-1 flex items-center gap-1">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Filter:</span>
            </span>
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setSelectedFilter(filter)}
                className={`px-3 py-1.5 rounded-lg text-xs font-code transition-all ${
                  selectedFilter === filter
                    ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/40 shadow-sm'
                    : 'bg-[#0d1630] text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

        </div>

        {/* Counter */}
        <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-code text-slate-400">
          <span>
            Showing <strong className="text-cyan-300">{filteredProjects.length}</strong> of{' '}
            {WINDOWS_PROJECTS.length} projects
          </span>
          {searchQuery && (
            <span>
              Search query: <span className="text-slate-200">&quot;{searchQuery}&quot;</span>
            </span>
          )}
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-12 px-4 rounded-xl bg-[#0a1126] border border-slate-800">
          <p className="text-slate-300 font-code text-sm mb-3">
            No projects matched your search criteria.
          </p>
          <button
            type="button"
            onClick={() => {
              setSearchQuery('');
              setSelectedFilter('All');
            }}
            className="px-4 py-2 rounded-lg text-xs font-code font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition-colors"
          >
            Reset Filters & Search
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="p-5 sm:p-6 rounded-xl bg-[#0a1126] border border-slate-800 hover:border-cyan-500/40 transition-all shadow-md hover:shadow-cyan-950/30 group"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                
                {/* Title & Badge */}
                <div className="space-y-1.5 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-[10px] font-code px-2 py-0.5 rounded font-bold uppercase tracking-wider ${
                      proj.statusType === 'hackathon'
                        ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                        : proj.statusType === 'planning'
                        ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                        : 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                    }`}>
                      {proj.statusBadge}
                    </span>

                    <span className="text-[11px] font-code text-slate-400">
                      {proj.subtitle}
                    </span>
                  </div>

                  <h2 className="text-lg sm:text-xl font-bold text-white group-hover:text-cyan-200 transition-colors font-code">
                    {proj.fullName}
                  </h2>

                  <p className="text-sm text-slate-300 leading-relaxed pt-1">
                    {proj.summary}
                  </p>
                </div>

                {/* Actions: GitHub & Open in Desktop */}
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-2 flex-shrink-0 pt-1 lg:pt-0">
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-code font-bold bg-[#101b38] hover:bg-[#182852] text-slate-100 hover:text-cyan-300 border border-slate-700 hover:border-cyan-500/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 shadow-sm"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Repository</span>
                    <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                  </a>

                  <button
                    type="button"
                    onClick={() => onOpenProjectInDesktop(proj.appId)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-code font-bold bg-cyan-950/60 hover:bg-cyan-900 text-cyan-300 border border-cyan-500/40 hover:border-cyan-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 shadow-sm"
                    title="Inspect this project in the retro Windows 98 desktop window"
                  >
                    <Monitor className="w-4 h-4" />
                    <span>Open in Desktop</span>
                  </button>
                </div>

              </div>

              {/* Problem & Contribution Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4 text-xs">
                <div className="p-3 rounded-lg bg-[#060a18] border border-slate-800/80">
                  <div className="text-[11px] font-code uppercase tracking-wider text-rose-400 mb-1 flex items-center gap-1 font-semibold">
                    <AlertCircle className="w-3 h-3" />
                    <span>Problem Solved</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {proj.problemStatement}
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-[#060a18] border border-slate-800/80">
                  <div className="text-[11px] font-code uppercase tracking-wider text-emerald-400 mb-1 flex items-center gap-1 font-semibold">
                    <CheckCircle className="w-3 h-3" />
                    <span>Key Engineering Contribution</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    {proj.contributions[0]}
                  </p>
                </div>
              </div>

              {/* Technologies */}
              <div>
                <div className="text-[11px] font-code uppercase tracking-wider text-slate-400 mb-1.5">
                  Technologies
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {proj.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-code px-2.5 py-0.5 rounded bg-[#0d1630] text-slate-200 border border-slate-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}
