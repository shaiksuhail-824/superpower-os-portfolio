import React from 'react';
import { Cpu, GitBranch, Database, Cloud, CheckCircle, Code, Shield } from 'lucide-react';
import { SUPERPOWERS } from '../data/portfolioData';

export default function Superpowers() {
  const getIcon = (id) => {
    switch (id) {
      case 'ml':
        return <Database className="w-5 h-5 text-cyan-400" />;
      case 'tracking':
        return <GitBranch className="w-5 h-5 text-violet-400" />;
      case 'deployment':
        return <Code className="w-5 h-5 text-blue-400" />;
      case 'cloud':
        return <Cloud className="w-5 h-5 text-sky-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="superpowers" className="py-24 relative bg-[#060913] bg-grid-cyber">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-violet-500/10 border border-violet-500/20 text-xs font-code text-violet-300 uppercase tracking-widest mb-3">
            <Cpu className="w-3.5 h-3.5" />
            <span>02 // Core Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            Tech Superpowers
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Practical skills explored and applied through hands-on model development, pipeline building, and cloud deployments. Structured around reproducibility and maintainability.
          </p>
        </div>

        {/* 4 Superpower Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {SUPERPOWERS.map((power) => (
            <div
              key={power.id}
              className="group rounded-xl bg-[#0b1224] border border-slate-800 hover:border-cyan-500/40 p-6 sm:p-7 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/30 flex flex-col justify-between"
            >
              <div>
                {/* Header info */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#121c38] border border-slate-700/60">
                      {getIcon(power.id)}
                    </div>
                    <div>
                      <span className="text-xs font-code uppercase tracking-wider text-slate-400 block">
                        {power.category}
                      </span>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-200 transition-colors">
                        {power.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Scope Note */}
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#070e20] border border-cyan-500/20 text-[11px] font-code text-cyan-300 mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  <span>{power.statusBadge}</span>
                </div>

                <p className="text-sm text-slate-300 mb-6 leading-relaxed">
                  {power.description}
                </p>

                {/* Sub-skills breakdown */}
                <div className="space-y-3 pt-2">
                  {power.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="p-3 rounded-lg bg-[#0e172e] border border-slate-800/80 group-hover:border-slate-700/80 transition-colors"
                    >
                      <div className="flex items-center justify-between text-xs font-code font-semibold text-slate-100 mb-1">
                        <span className="text-cyan-300 flex items-center gap-1.5">
                          <CheckCircle className="w-3.5 h-3.5 text-cyan-400" />
                          {skill.name}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 pl-5 leading-normal">
                        {skill.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-code text-slate-400">
                <span>Practiced & Explored</span>
                <span className="text-slate-400 font-mono">AWS Student Builder Stack</span>
              </div>

            </div>
          ))}
        </div>

        {/* Disclaimer / Transparency Note */}
        <div className="rounded-lg bg-[#0d1428] border border-slate-800/90 p-4 flex items-center gap-3 text-xs text-slate-400 max-w-3xl">
          <Shield className="w-4 h-4 text-violet-400 flex-shrink-0" />
          <span>
            <strong className="text-slate-200">Competency Statement:</strong> Skills listed above represent technologies actively practiced in university coursework, hackathon prototypes, and self-directed engineering labs—not an assertion of senior production tenure.
          </span>
        </div>

      </div>
    </section>
  );
}
