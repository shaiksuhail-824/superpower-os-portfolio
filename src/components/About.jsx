import React from 'react';
import { Compass, ArrowRight } from 'lucide-react';
import { ABOUT_TEXT, ABOUT_STAGES } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 relative bg-[#070b18] border-t border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-xs font-code text-cyan-300 uppercase tracking-widest mb-3">
            <Compass className="w-3.5 h-3.5" />
            <span>Engineering Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4">
            {ABOUT_TEXT.heading}
          </h2>
          <div className="space-y-3 text-base text-slate-300 leading-relaxed">
            {ABOUT_TEXT.paragraphs.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </div>

        {/* 3 Journey Cards: BUILD -> REPRODUCE -> SHIP */}
        <div className="relative mb-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
            {ABOUT_STAGES.map((stage) => (
              <div
                key={stage.phase}
                className="flex flex-col justify-between rounded-xl bg-[#0c1328] border border-slate-800 hover:border-cyan-500/30 p-6 transition-all duration-200"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-code text-xl font-black text-cyan-400">
                      {stage.step}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-code font-semibold uppercase bg-cyan-950/60 text-cyan-300 border border-cyan-500/30">
                      {stage.phase}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">
                    {stage.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {stage.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-800/80">
                  <div className="text-[11px] font-code uppercase tracking-wider text-slate-400 mb-2">
                    Core Focus:
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {stage.keyTools.map((tool) => (
                      <span
                        key={tool}
                        className="text-xs font-code px-2 py-0.5 rounded bg-[#101b38] text-slate-200 border border-slate-700/60"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
