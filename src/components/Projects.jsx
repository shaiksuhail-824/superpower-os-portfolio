import React from 'react';
import { Github, ExternalLink, ArrowUpRight, FolderGit2, Monitor, ArrowRight } from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative bg-[#070b18] border-t border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-xs font-code text-cyan-300 uppercase tracking-widest mb-3">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Projects</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Applied Engineering & Machine Learning
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Projects focused on predictive modeling, reproducible pipelines, and cloud-deployed applications. Each project links directly to its source repository with verifiable code and reproduction instructions.
          </p>
        </div>

        {/* 3 Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-8">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="flex flex-col justify-between rounded-xl bg-[#0c1328] border border-slate-800 hover:border-cyan-500/40 p-6 transition-all duration-200 hover:shadow-xl hover:shadow-cyan-950/30 group"
            >
              <div>
                {/* Status Badge */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-code text-slate-400">
                    {project.subtitle}
                  </span>
                  <span
                    className={`text-[11px] font-code px-2.5 py-0.5 rounded-full border font-medium ${project.statusColor}`}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-200 transition-colors leading-snug">
                  {project.name}
                </h3>

                {/* Problem Statement */}
                <div className="mb-4">
                  <div className="text-[11px] font-code uppercase tracking-wider text-slate-400 mb-1">
                    Problem
                  </div>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                {/* Actual Contribution */}
                <div className="mb-5 p-3 rounded-lg bg-[#080d1c] border border-slate-800/80">
                  <div className="text-[11px] font-code uppercase tracking-wider text-cyan-400 mb-1">
                    My Contribution
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {project.contribution}
                  </p>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="text-[11px] font-code uppercase tracking-wider text-slate-400 mb-2">
                    Technologies
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-code px-2 py-0.5 rounded bg-[#101b38] text-slate-200 border border-slate-700/60"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Links */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center gap-3">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg text-xs font-code font-semibold text-slate-100 bg-[#121c38] hover:bg-[#1a2850] hover:text-cyan-300 border border-slate-700 hover:border-cyan-500/50 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  <Github className="w-4 h-4" />
                  <span>View on GitHub</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-cyan-300 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg text-xs font-code font-semibold text-cyan-300 bg-cyan-950/50 hover:bg-cyan-900/60 border border-cyan-500/40 hover:border-cyan-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </a>
                )}
              </div>

            </div>
          ))}
        </div>

        {/* Windows 98 Desktop Callout Banner */}
        <div className="rounded-xl bg-gradient-to-r from-cyan-950/60 via-[#0e1730] to-[#0c1328] border border-cyan-500/30 p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg shadow-cyan-950/20">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[10px] font-code font-bold uppercase tracking-wider">
              <span>Interactive Desktop</span>
            </div>
            <h3 className="text-base sm:text-lg font-bold font-code text-white">
              Windows 98-Style Project Desktop (SUHAIL.SYS)
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl">
              Explore these projects in an authentic retro desktop environment with draggable windows, MS-DOS prompt, theme switcher, and recruiter explorer view.
            </p>
          </div>
          <a
            href="/projects.html"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-code font-bold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-md shadow-cyan-500/20 flex-shrink-0 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
          >
            <Monitor className="w-4 h-4" />
            <span>Launch Project Desktop</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
