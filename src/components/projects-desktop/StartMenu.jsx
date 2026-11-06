import React, { useRef, useEffect } from 'react';
import {
  BrainCircuit,
  ShieldAlert,
  Home,
  FolderGit2,
  Terminal,
  Palette,
  FileText,
  Cpu,
  Power,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export default function StartMenu({
  isOpen,
  onClose,
  onOpenWindow,
  onSwitchToList,
  activeTheme
}) {
  const menuRef = useRef(null);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        // Check if the click was on the Start button itself
        if (e.target.closest('#start-button')) return;
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isClassic = activeTheme === 'classic';

  return (
    <div
      ref={menuRef}
      className={`fixed bottom-[38px] left-1 z-50 flex shadow-2xl overflow-hidden font-code select-none ${
        isClassic
          ? 'bg-[#c0c0c0] text-black border-2 border-t-white border-l-white border-r-black border-b-black shadow-[3px_3px_10px_rgba(0,0,0,0.5)]'
          : activeTheme === 'neon'
          ? 'bg-[#0a1128]/95 backdrop-blur-xl text-slate-100 border border-cyan-400 shadow-[0_0_25px_rgba(0,242,254,0.3)] rounded-t-lg'
          : 'bg-slate-900/95 backdrop-blur-xl text-slate-100 border border-slate-700 shadow-2xl rounded-t-lg'
      }`}
      style={{ width: '280px' }}
      role="menu"
      aria-label="Windows 98 Start Menu"
    >
      {/* Side Banner */}
      <div className={`w-8 sm:w-10 flex-shrink-0 flex items-end justify-center pb-4 ${
        isClassic
          ? 'bg-gradient-to-t from-[#000080] via-[#083b99] to-[#1084d0] text-white'
          : activeTheme === 'neon'
          ? 'bg-gradient-to-t from-cyan-950 via-blue-950 to-indigo-950 text-cyan-300 border-r border-cyan-500/20'
          : 'bg-gradient-to-t from-slate-950 via-slate-900 to-slate-800 text-slate-300 border-r border-slate-700'
      }`}>
        <span
          className="text-xs sm:text-sm font-bold tracking-widest uppercase opacity-90 select-none whitespace-nowrap"
          style={{ transform: 'rotate(-90deg)', transformOrigin: 'center center' }}
        >
          SUHAIL.SYS 98
        </span>
      </div>

      {/* Menu items */}
      <div className="flex-1 py-1 text-xs">
        {/* Project 1 */}
        <button
          type="button"
          onClick={() => {
            onOpenWindow('paimana');
            onClose();
          }}
          className="w-full px-3 py-2 flex items-center gap-2.5 hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors text-left"
          role="menuitem"
        >
          <BrainCircuit className="w-4 h-4 text-cyan-400" />
          <div className="flex-1 min-w-0">
            <div className="font-bold truncate">PAIMANA AI</div>
            <div className="text-[10px] opacity-70">Infrastructure Risk</div>
          </div>
        </button>

        {/* Project 2 */}
        <button
          type="button"
          onClick={() => {
            onOpenWindow('internship');
            onClose();
          }}
          className="w-full px-3 py-2 flex items-center gap-2.5 hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors text-left"
          role="menuitem"
        >
          <ShieldAlert className="w-4 h-4 text-violet-400" />
          <div className="flex-1 min-w-0">
            <div className="font-bold truncate">Internship Intelligence</div>
            <div className="text-[10px] opacity-70">Scam Detection Platform</div>
          </div>
        </button>

        {/* Project 3 */}
        <button
          type="button"
          onClick={() => {
            onOpenWindow('house-price');
            onClose();
          }}
          className="w-full px-3 py-2 flex items-center gap-2.5 hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors text-left"
          role="menuitem"
        >
          <Home className="w-4 h-4 text-emerald-400" />
          <div className="flex-1 min-w-0">
            <div className="font-bold truncate">House Price Predictor</div>
            <div className="text-[10px] opacity-70">AWS Cloud Serving</div>
          </div>
        </button>

        <div className="my-1 border-t border-gray-400 dark:border-slate-800" />

        {/* Recruiter List View */}
        <button
          type="button"
          onClick={() => {
            onSwitchToList();
            onClose();
          }}
          className="w-full px-3 py-1.5 flex items-center gap-2.5 hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors text-left"
          role="menuitem"
        >
          <FolderGit2 className="w-4 h-4 text-amber-400" />
          <span className="font-semibold">Project Explorer (List)</span>
        </button>

        {/* Terminal */}
        <button
          type="button"
          onClick={() => {
            onOpenWindow('terminal');
            onClose();
          }}
          className="w-full px-3 py-1.5 flex items-center gap-2.5 hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors text-left"
          role="menuitem"
        >
          <Terminal className="w-4 h-4 text-sky-400" />
          <span>MS-DOS Prompt</span>
        </button>

        {/* Themes */}
        <button
          type="button"
          onClick={() => {
            onOpenWindow('themes');
            onClose();
          }}
          className="w-full px-3 py-1.5 flex items-center gap-2.5 hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors text-left"
          role="menuitem"
        >
          <Palette className="w-4 h-4 text-pink-400" />
          <span>Display Themes</span>
        </button>

        {/* Resume */}
        <a
          href="resume.html"
          className="w-full px-3 py-1.5 flex items-center gap-2.5 hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors text-left"
          role="menuitem"
        >
          <FileText className="w-4 h-4 text-slate-400" />
          <span>Resume (HTML & PDF)</span>
        </a>

        {/* About */}
        <button
          type="button"
          onClick={() => {
            onOpenWindow('about');
            onClose();
          }}
          className="w-full px-3 py-1.5 flex items-center gap-2.5 hover:bg-cyan-500/20 hover:text-cyan-300 transition-colors text-left"
          role="menuitem"
        >
          <Cpu className="w-4 h-4 text-blue-400" />
          <span>About SUHAIL.SYS</span>
        </button>

        <div className="my-1 border-t border-gray-400 dark:border-slate-800" />

        {/* Return to Portfolio OS */}
        <a
          href="/"
          className="w-full px-3 py-2 flex items-center gap-2.5 text-rose-500 dark:text-rose-400 hover:bg-rose-500/20 transition-colors text-left font-bold"
          role="menuitem"
        >
          <Power className="w-4 h-4" />
          <span>Exit to Portfolio OS...</span>
        </a>
      </div>
    </div>
  );
}
