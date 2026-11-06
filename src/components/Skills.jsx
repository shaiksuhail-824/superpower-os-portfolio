import React from 'react';
import { Database, GitBranch, Server, Cloud, Check, BookOpen, Layers, Brain, Code } from 'lucide-react';
import { SKILLS_CATEGORIES } from '../data/portfolioData';

export default function Skills() {
  const getCategoryIcon = (id) => {
    switch (id) {
      case 'ml-analysis':
        return <Brain className="w-5 h-5 text-cyan-400" />;
      case 'data-experiments':
        return <Database className="w-5 h-5 text-violet-400" />;
      case 'backend-app':
        return <Server className="w-5 h-5 text-blue-400" />;
      case 'devops-cloud':
        return <Cloud className="w-5 h-5 text-sky-400" />;
      case 'languages':
        return <Code className="w-5 h-5 text-emerald-400" />;
      default:
        return <Layers className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="skills" className="py-20 relative bg-[#060913] bg-grid-cyber">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-violet-500/10 border border-violet-500/20 text-xs font-code text-violet-300 uppercase tracking-widest mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Technical Skills</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Skills & Competencies
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Technologies and workflows applied in machine learning experiments, data versioning, containerized APIs, and cloud deployments—with active learning areas clearly distinguished.
          </p>
        </div>

        {/* 5 Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {SKILLS_CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="rounded-xl bg-[#0b1224] border border-slate-800 hover:border-cyan-500/30 p-6 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-[#121c38] border border-slate-700/60">
                    {getCategoryIcon(cat.id)}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">
                      {cat.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-400 mb-5 leading-relaxed">
                  {cat.description}
                </p>

                {/* Applied in Projects */}
                <div className="mb-4">
                  <div className="text-[11px] font-code uppercase tracking-wider text-cyan-400 mb-2 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5" />
                    <span>Applied in Projects</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.applied.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-code px-2.5 py-1 rounded bg-[#0e1730] text-slate-200 border border-slate-700/70"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Currently Learning */}
                <div>
                  <div className="text-[11px] font-code uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-violet-400" />
                    <span>Currently Learning</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.learning.map((skill) => (
                      <span
                        key={skill}
                        className="text-xs font-code px-2.5 py-1 rounded bg-[#0b1122] text-slate-400 border border-slate-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-5 pt-3.5 border-t border-slate-800/80 text-[11px] font-code text-slate-400 flex items-center justify-between">
                <span>Hands-on Focus</span>
                <span className="text-slate-400">Reproducible ML</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
