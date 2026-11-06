import React, { useState } from 'react';
import {
  BrainCircuit,
  ShieldAlert,
  Home,
  FolderGit2,
  Terminal,
  Palette,
  FileText,
  Cpu
} from 'lucide-react';
import { DESKTOP_ICONS } from '../../data/windowsProjectsData';

export default function DesktopSurface({
  activeTheme,
  onOpenWindow,
  onSwitchToList,
  isMobile,
  children
}) {
  const [selectedIconId, setSelectedIconId] = useState(null);

  const getDesktopIconGraphic = (iconType, color) => {
    switch (iconType) {
      case 'BrainCircuit':
        return <BrainCircuit className="w-8 h-8 sm:w-9 sm:h-9" style={{ color }} />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-8 h-8 sm:w-9 sm:h-9" style={{ color }} />;
      case 'Home':
        return <Home className="w-8 h-8 sm:w-9 sm:h-9" style={{ color }} />;
      case 'FolderGit2':
        return <FolderGit2 className="w-8 h-8 sm:w-9 sm:h-9" style={{ color }} />;
      case 'Terminal':
        return <Terminal className="w-8 h-8 sm:w-9 sm:h-9" style={{ color }} />;
      case 'Palette':
        return <Palette className="w-8 h-8 sm:w-9 sm:h-9" style={{ color }} />;
      case 'FileText':
        return <FileText className="w-8 h-8 sm:w-9 sm:h-9" style={{ color }} />;
      case 'Cpu':
        return <Cpu className="w-8 h-8 sm:w-9 sm:h-9" style={{ color }} />;
      default:
        return <FolderGit2 className="w-8 h-8 sm:w-9 sm:h-9" style={{ color }} />;
    }
  };

  const handleIconClick = (e, icon) => {
    e.stopPropagation();
    setSelectedIconId(icon.id);

    // On mobile or on double-click/enter: open immediately
    // For single click on desktop: open directly as well to make it intuitive and frictionless for users/evaluators
    if (icon.appType === 'link') {
      window.location.href = icon.url;
    } else if (icon.appType === 'explorer') {
      onSwitchToList();
    } else {
      onOpenWindow(icon.id);
    }
  };

  const getDesktopBgClass = () => {
    if (activeTheme === 'classic') {
      return 'bg-[#008080]';
    }
    if (activeTheme === 'neon') {
      return 'bg-[#060913] bg-grid-cyber';
    }
    return 'bg-[#0f172a]';
  };

  return (
    <div
      onClick={() => setSelectedIconId(null)}
      className={`relative w-full h-[calc(100vh-38px-45px)] overflow-hidden transition-colors ${getDesktopBgClass()}`}
    >
      {/* Subtle watermark in bottom right corner */}
      <div className="absolute right-4 bottom-4 pointer-events-none select-none text-right opacity-30">
        <div className="font-code text-sm font-extrabold tracking-widest text-white">
          SUHAIL.SYS 98
        </div>
        <div className="font-code text-[10px] text-white">
          AWS Student Builder Edition
        </div>
      </div>

      {/* Desktop Icons Grid */}
      <div
        className="p-3 sm:p-4 grid grid-cols-3 sm:grid-cols-4 md:grid-flow-col md:auto-cols-max md:grid-rows-6 gap-3 sm:gap-4 relative z-10 w-fit"
        role="region"
        aria-label="Desktop application shortcuts"
      >
        {DESKTOP_ICONS.map((icon) => {
          const isSelected = selectedIconId === icon.id;

          return (
            <button
              key={icon.id}
              type="button"
              onClick={(e) => handleIconClick(e, icon)}
              className={`group flex flex-col items-center justify-center p-2 rounded w-20 sm:w-24 text-center cursor-pointer transition-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 ${
                isSelected
                  ? 'bg-blue-600/40 border border-blue-400/80 shadow-md'
                  : 'hover:bg-white/10 border border-transparent'
              }`}
              title={`Open ${icon.title}`}
            >
              {/* Icon Container with retro drop-shadow */}
              <div className="relative mb-1 p-1 rounded transition-transform group-hover:scale-105">
                {getDesktopIconGraphic(icon.icon, icon.color)}
              </div>

              {/* Icon Label */}
              <span
                className={`text-[11px] sm:text-xs font-code font-semibold leading-tight px-1 rounded truncate max-w-full ${
                  isSelected
                    ? 'bg-blue-600 text-white'
                    : 'text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]'
                }`}
              >
                {icon.title}
              </span>

              {/* Subtext */}
              <span className="text-[9px] font-code opacity-75 text-cyan-200 truncate max-w-full hidden sm:block">
                {icon.subtext}
              </span>
            </button>
          );
        })}
      </div>

      {/* Render Application Windows */}
      {children}
    </div>
  );
}
