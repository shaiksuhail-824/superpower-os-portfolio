import React from 'react';
import { ArrowRight, FileText, Database, Activity, Box, Mail, Cpu } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="home" className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-grid-cyber">
      {/* Subtle single ambient depth glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[280px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Identity & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Student & Focus Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-xs font-code text-cyan-300 mb-5">
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              <span>{PERSONAL_INFO.substatus}</span>
            </div>

            {/* Introduction: Portrait & Identity in Two-Column Desktop / Stacked Mobile Layout */}
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-7 mb-6 w-full">
              
              {/* Profile Photograph (180-220px desktop, circular crop with subtle cyan border) */}
              <div className="flex-shrink-0">
                <div className="relative w-40 h-40 sm:w-44 sm:h-44 lg:w-52 lg:h-52 rounded-full p-1 bg-cyan-950/50 border border-cyan-500/40 shadow-xl shadow-cyan-950/60 ring-2 ring-cyan-500/20">
                  <div className="w-full h-full rounded-full overflow-hidden bg-[#090f22]">
                    <img
                      src="/assets/Gemini_Generated_Image_g3cz9tg3cz9tg3cz.png"
                      alt="Portrait of Suhail Shaik"
                      className="w-full h-full object-cover scale-110 object-top"
                      width="208"
                      height="208"
                      loading="eager"
                    />
                  </div>
                </div>
              </div>

              {/* Name & Headline */}
              <div className="flex flex-col items-center sm:items-start text-center sm:text-left flex-1 min-w-0">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-2">
                  {PERSONAL_INFO.name}
                </h1>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-sky-100 to-violet-300 leading-tight">
                  {PERSONAL_INFO.headline}
                </h2>
              </div>
            </div>

            {/* Bio */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8 text-center sm:text-left">
              {PERSONAL_INFO.bio}
            </p>

            {/* Calls to Action */}
            <div className="flex flex-wrap items-center gap-3.5 mb-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-code text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-all shadow-md shadow-cyan-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#mission-control"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-code text-xs sm:text-sm font-semibold text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/80 border border-cyan-500/40 hover:border-cyan-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span>Explore Mission Control</span>
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-lg font-code text-xs sm:text-sm font-semibold text-slate-200 hover:text-white bg-[#0e162d] hover:bg-[#152042] border border-cyan-500/30 hover:border-cyan-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>View Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-4 py-3 rounded-lg font-code text-xs sm:text-sm text-slate-400 hover:text-cyan-300 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <Mail className="w-4 h-4" />
                <span>Contact Me</span>
              </a>
            </div>

          </div>

          {/* Right Column: Simplified Capabilities Card */}
          <div className="lg:col-span-5">
            <div className="rounded-xl bg-[#090f22] border border-slate-800 p-6 shadow-xl backdrop-blur-sm">
              
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-slate-800">
                <span className="text-xs font-code font-semibold uppercase tracking-wider text-slate-300">
                  Engineering Capabilities
                </span>
                <span className="text-[11px] font-code text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/20">
                  MLOps Workflow
                </span>
              </div>

              {/* 3 Meaningful Capabilities */}
              <div className="space-y-4">
                
                {/* 1. Data Versioning — DVC */}
                <div className="p-4 rounded-lg bg-[#0d1630] border border-slate-800/80 hover:border-cyan-500/30 transition-colors">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2.5">
                      <Database className="w-4 h-4 text-cyan-400" />
                      <span className="text-sm font-bold text-white">Data Versioning</span>
                    </div>
                    <span className="text-xs font-code font-semibold text-cyan-300 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-500/30">
                      DVC
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pl-6.5">
                    Tracking raw and processed datasets, artifact hashes, and reproducible pipeline stages without storing large files in Git.
                  </p>
                </div>

                {/* 2. Experiment Tracking — MLflow */}
                <div className="p-4 rounded-lg bg-[#0d1630] border border-slate-800/80 hover:border-violet-500/30 transition-colors">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2.5">
                      <Activity className="w-4 h-4 text-violet-400" />
                      <span className="text-sm font-bold text-white">Experiment Tracking</span>
                    </div>
                    <span className="text-xs font-code font-semibold text-violet-300 bg-violet-950/80 px-2 py-0.5 rounded border border-violet-500/30">
                      MLflow
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pl-6.5">
                    Systematically logging hyperparameters, evaluation metrics (RMSE, F1), and model artifacts to compare runs objectively.
                  </p>
                </div>

                {/* 3. Model Deployment — Docker & FastAPI */}
                <div className="p-4 rounded-lg bg-[#0d1630] border border-slate-800/80 hover:border-blue-500/30 transition-colors">
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2.5">
                      <Box className="w-4 h-4 text-blue-400" />
                      <span className="text-sm font-bold text-white">Model Deployment</span>
                    </div>
                    <span className="text-xs font-code font-semibold text-blue-300 bg-blue-950/80 px-2 py-0.5 rounded border border-blue-500/30">
                      Docker & FastAPI
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed pl-6.5">
                    Containerizing inference environments and creating clean, schema-validated REST APIs deployed to cloud targets.
                  </p>
                </div>

              </div>

              {/* Card Footer */}
              <div className="mt-5 pt-3.5 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-code text-slate-400">
                <span>Practiced in Projects</span>
                <a href="#projects" className="text-cyan-400 hover:underline">
                  Explore Work →
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
