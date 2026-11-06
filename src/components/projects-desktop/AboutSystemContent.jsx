import React from 'react';
import { Cpu, GraduationCap, Github, Linkedin, FileText, CheckCircle, ArrowUpRight } from 'lucide-react';
import { SYSTEM_SPECS } from '../../data/windowsProjectsData';

export default function AboutSystemContent({ activeTheme }) {
  const isClassic = activeTheme === 'classic';

  return (
    <div className="space-y-4 text-xs sm:text-sm font-sans">
      <div className={`p-4 rounded border flex items-center gap-4 ${
        isClassic ? 'bg-[#e0e0e0] border-[#808080] text-black' : 'bg-[#0b1328] border-cyan-500/30 text-white'
      }`}>
        <div className="w-14 h-14 rounded-lg bg-cyan-950/70 border border-cyan-400/40 flex items-center justify-center text-cyan-300 flex-shrink-0">
          <Cpu className="w-8 h-8" />
        </div>
        <div>
          <h2 className="font-code font-bold text-base sm:text-lg">
            SUHAIL.SYS Version 98
          </h2>
          <p className="text-xs opacity-80 font-code">
            Shaik Suhail · Computer Science Student
          </p>
          <p className="text-xs text-cyan-600 dark:text-cyan-400 font-code font-semibold">
            RGUKT Ongole · ML & MLOps Focus
          </p>
        </div>
      </div>

      {/* System Specifications */}
      <div className={`p-3 rounded border space-y-2 ${
        isClassic ? 'bg-[#f4f4f4] border-[#a0a0a0] text-black' : 'bg-[#070e20] border-slate-800 text-slate-200'
      }`}>
        <div className="font-code font-bold text-xs uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-1">
          System Specifications & Focus
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
          <div>
            <span className="font-code opacity-70 block">Primary Architecture:</span>
            <span className="font-semibold">{SYSTEM_SPECS.focus}</span>
          </div>
          <div>
            <span className="font-code opacity-70 block">Institution:</span>
            <span className="font-semibold">RGUKT Ongole</span>
          </div>
          <div className="sm:col-span-2">
            <span className="font-code opacity-70 block">Core Technical Stack:</span>
            <span className="font-mono text-cyan-700 dark:text-cyan-300 font-semibold">{SYSTEM_SPECS.coreStack}</span>
          </div>
        </div>
      </div>

      {/* Quick Action Links */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
        <a
          href={SYSTEM_SPECS.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 px-3 py-2 rounded text-xs font-code font-bold border transition-colors ${
            isClassic
              ? 'bg-[#c0c0c0] text-black border-2 border-t-white border-l-white border-b-black border-r-black hover:bg-[#d0d0d0]'
              : 'bg-[#101c38] text-slate-100 hover:text-cyan-300 border-slate-700 hover:border-cyan-500/50'
          }`}
        >
          <Github className="w-3.5 h-3.5" />
          <span>GitHub</span>
          <ArrowUpRight className="w-3 h-3 opacity-60" />
        </a>

        <a
          href={SYSTEM_SPECS.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          className={`flex items-center justify-center gap-2 px-3 py-2 rounded text-xs font-code font-bold border transition-colors ${
            isClassic
              ? 'bg-[#c0c0c0] text-black border-2 border-t-white border-l-white border-b-black border-r-black hover:bg-[#d0d0d0]'
              : 'bg-[#101c38] text-slate-100 hover:text-cyan-300 border-slate-700 hover:border-cyan-500/50'
          }`}
        >
          <Linkedin className="w-3.5 h-3.5" />
          <span>LinkedIn</span>
          <ArrowUpRight className="w-3 h-3 opacity-60" />
        </a>

        <a
          href={SYSTEM_SPECS.resumeUrl}
          className={`flex items-center justify-center gap-2 px-3 py-2 rounded text-xs font-code font-bold border transition-colors ${
            isClassic
              ? 'bg-[#c0c0c0] text-black border-2 border-t-white border-l-white border-b-black border-r-black hover:bg-[#d0d0d0]'
              : 'bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500/30 border-cyan-500/40'
          }`}
        >
          <FileText className="w-3.5 h-3.5" />
          <span>View Resume</span>
        </a>
      </div>
    </div>
  );
}
