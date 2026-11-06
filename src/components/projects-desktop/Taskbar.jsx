import React, { useState, useEffect } from 'react';
import {
  Terminal,
  Volume2,
  FolderGit2,
  BrainCircuit,
  ShieldAlert,
  Home,
  Palette,
  Cpu
} from 'lucide-react';

export default function Taskbar({
  startMenuOpen,
  setStartMenuOpen,
  openWindows,
  activeWindowId,
  onTaskbarClick,
  onSwitchToList,
  activeTheme
}) {
  const [timeStr, setTimeStr] = useState('');

  // Live Digital Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      );
    };
    updateTime();
    const timer = setInterval(updateTime, 10000);
    return () => clearInterval(timer);
  }, []);

  const isClassic = activeTheme === 'classic';

  const getWindowIcon = (id) => {
    switch (id) {
      case 'paimana':
        return <BrainCircuit className="w-3.5 h-3.5 text-cyan-400" />;
      case 'internship':
        return <ShieldAlert className="w-3.5 h-3.5 text-violet-400" />;
      case 'house-price':
        return <Home className="w-3.5 h-3.5 text-emerald-400" />;
      case 'terminal':
        return <Terminal className="w-3.5 h-3.5 text-sky-400" />;
      case 'themes':
        return <Palette className="w-3.5 h-3.5 text-pink-400" />;
      case 'about':
        return <Cpu className="w-3.5 h-3.5 text-blue-400" />;
      default:
        return <FolderGit2 className="w-3.5 h-3.5 text-amber-400" />;
    }
  };

  return (
    <footer
      className={`fixed bottom-0 left-0 right-0 h-[38px] z-50 flex items-center justify-between px-1 select-none font-code text-xs ${
        isClassic
          ? 'bg-[#c0c0c0] text-black border-t-2 border-white shadow-[0_-1px_0_#dfdfdf]'
          : activeTheme === 'neon'
          ? 'bg-[#070c1a]/95 backdrop-blur-md text-slate-100 border-t border-cyan-500/30'
          : 'bg-slate-900 text-slate-100 border-t border-slate-800'
      }`}
    >
      {/* Left: Start Button & Active Window Buttons */}
      <div className="flex items-center gap-1.5 overflow-x-auto py-0.5 flex-1 min-w-0 pr-2">
        
        {/* Windows 98 Start Button */}
        <button
          type="button"
          id="start-button"
          onClick={() => setStartMenuOpen(!startMenuOpen)}
          className={`flex items-center gap-1.5 px-2.5 py-1 font-bold text-xs flex-shrink-0 transition-transform ${
            isClassic
              ? startMenuOpen
                ? 'bg-[#dfdfdf] text-black border border-t-black border-l-black border-r-white border-b-white font-bold'
                : 'bg-[#c0c0c0] text-black border-2 border-t-white border-l-white border-r-black border-b-black active:border-t-black active:border-l-black active:border-r-white active:border-b-white'
              : activeTheme === 'neon'
              ? startMenuOpen
                ? 'bg-cyan-500/30 text-cyan-200 border border-cyan-400 shadow-[0_0_10px_rgba(0,242,254,0.4)] rounded'
                : 'bg-cyan-950/70 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-900/80 rounded'
              : startMenuOpen
              ? 'bg-slate-800 text-white border border-slate-600 rounded'
              : 'bg-slate-800/80 text-slate-300 hover:bg-slate-700 border border-slate-700 rounded'
          }`}
          aria-expanded={startMenuOpen}
          aria-label="Start Menu"
        >
          {/* Retro Start Icon */}
          <div className="w-4 h-4 rounded-sm flex items-center justify-center bg-cyan-950 border border-cyan-400/50">
            <span className="text-[10px] text-cyan-300 font-extrabold">⊞</span>
          </div>
          <span className="font-extrabold tracking-wide">Start</span>
        </button>

        {/* Separator */}
        <div className="w-px h-5 bg-gray-400 dark:bg-slate-700 flex-shrink-0 mx-0.5" />

        {/* Window Task Tabs */}
        {Object.entries(openWindows).map(([wId, win]) => {
          if (!win.isOpen) return null;
          const isActive = activeWindowId === wId && !win.isMinimized;

          return (
            <button
              key={wId}
              type="button"
              onClick={() => onTaskbarClick(wId)}
              className={`flex items-center gap-1.5 px-2.5 py-1 max-w-[150px] sm:max-w-[180px] truncate transition-colors flex-shrink-0 ${
                isClassic
                  ? isActive
                    ? 'bg-[#dfdfdf] text-black border border-t-black border-l-black border-r-white border-b-white font-bold'
                    : 'bg-[#c0c0c0] text-black border border-t-white border-l-white border-r-black border-b-black'
                  : activeTheme === 'neon'
                  ? isActive
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400 shadow-[0_0_8px_rgba(0,242,254,0.3)] rounded font-bold'
                    : 'bg-[#0e1730] text-slate-400 hover:text-slate-200 border border-slate-800 rounded'
                  : isActive
                  ? 'bg-slate-800 text-white border border-slate-600 rounded font-bold'
                  : 'bg-slate-800/60 text-slate-400 hover:text-slate-200 border border-slate-800 rounded'
              }`}
              title={win.title}
            >
              <span className="flex-shrink-0">{getWindowIcon(wId)}</span>
              <span className="truncate text-[11px]">{win.title}</span>
            </button>
          );
        })}
      </div>

      {/* Right: Recruiter List View shortcut & System Tray */}
      <div className="flex items-center gap-1.5 flex-shrink-0 pl-1">
        
        {/* Quick Explorer button */}
        <button
          type="button"
          onClick={onSwitchToList}
          className={`hidden md:inline-flex items-center gap-1 px-2 py-0.5 text-[11px] rounded transition-colors ${
            isClassic
              ? 'bg-[#c0c0c0] border border-t-white border-l-white border-r-black border-b-black hover:bg-[#d0d0d0]'
              : 'bg-cyan-950/40 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-900/50'
          }`}
          title="Switch to recruiter-friendly list view"
        >
          <FolderGit2 className="w-3 h-3 text-amber-400" />
          <span>Explorer</span>
        </button>

        {/* System Tray with Clock */}
        <div
          className={`flex items-center gap-2 px-2.5 py-0.5 font-mono text-[11px] ${
            isClassic
              ? 'bg-[#c0c0c0] border border-t-[#808080] border-l-[#808080] border-r-white border-b-white shadow-[inset_1px_1px_0_#404040]'
              : activeTheme === 'neon'
              ? 'bg-[#060a18] text-cyan-300 border border-cyan-500/30 rounded'
              : 'bg-slate-950 text-slate-300 border border-slate-800 rounded'
          }`}
        >
          <Volume2 className="w-3 h-3 text-slate-400 hidden xs:inline" />
          <span className="font-bold">{timeStr || '12:00 PM'}</span>
        </div>

      </div>
    </footer>
  );
}
