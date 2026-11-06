import React, { useRef, useState, useEffect } from 'react';
import { Minus, Square, Copy, X } from 'lucide-react';

export default function WindowFrame({
  id,
  title,
  icon,
  isOpen,
  isMinimized,
  isMaximized,
  zIndex,
  isActive,
  position,
  size,
  activeTheme,
  isMobile,
  onFocus,
  onMinimize,
  onMaximize,
  onClose,
  onPositionChange,
  children
}) {
  const windowRef = useRef(null);
  const dragHandleRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragOffsetRef = useRef({ x: 0, y: 0 });

  // Handle pointer down on title bar for dragging (desktop only)
  const handlePointerDown = (e) => {
    // Bring window to focus
    onFocus();

    // Do not initiate drag on mobile, when maximized, or if clicking buttons
    if (isMobile || isMaximized) return;
    if (e.target.closest('button')) return;

    setIsDragging(true);
    const rect = windowRef.current.getBoundingClientRect();
    dragOffsetRef.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  // Window-level event listener for smooth dragging across entire viewport
  useEffect(() => {
    if (!isDragging) return;

    const handleWindowPointerMove = (e) => {
      if (isMaximized || isMobile) return;

      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      
      // Bounds clamping so window titlebar never disappears
      const minX = 0;
      const maxX = Math.max(0, viewportWidth - 120);
      const minY = 50; // below top bar
      const maxY = Math.max(50, viewportHeight - 80);

      let newX = e.clientX - dragOffsetRef.current.x;
      let newY = e.clientY - dragOffsetRef.current.y;

      newX = Math.max(minX, Math.min(newX, maxX));
      newY = Math.max(minY, Math.min(newY, maxY));

      onPositionChange({ x: newX, y: newY });
    };

    const handleWindowPointerUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('pointermove', handleWindowPointerMove);
    window.addEventListener('pointerup', handleWindowPointerUp);
    return () => {
      window.removeEventListener('pointermove', handleWindowPointerMove);
      window.removeEventListener('pointerup', handleWindowPointerUp);
    };
  }, [isDragging, isMaximized, isMobile, onPositionChange]);

  if (!isOpen) return null;

  // Window styling based on theme
  const getThemeStyles = () => {
    if (activeTheme === 'classic') {
      return {
        container: `bg-[#c0c0c0] text-black border-2 border-t-[#ffffff] border-l-[#ffffff] border-r-[#000000] border-b-[#000000] shadow-[inset_1px_1px_0_#dfdfdf,inset_-1px_-1px_0_#808080,4px_4px_10px_rgba(0,0,0,0.5)]`,
        titleBar: isActive
          ? 'bg-gradient-to-r from-[#000080] via-[#083b99] to-[#1084d0] text-white font-bold'
          : 'bg-gradient-to-r from-[#808080] to-[#a0a0a0] text-[#d4d0c8]',
        btn: 'w-4 h-4 bg-[#c0c0c0] text-black font-mono text-xs flex items-center justify-center border-t-[#ffffff] border-l-[#ffffff] border-r-[#000000] border-b-[#000000] border active:border-t-[#000000] active:border-l-[#000000] active:border-r-[#ffffff] active:border-b-[#ffffff]',
        body: 'bg-white text-black border border-t-[#808080] border-l-[#808080] border-r-[#ffffff] border-b-[#ffffff]',
        statusBar: 'bg-[#c0c0c0] text-black text-[11px] font-mono border-t border-[#808080] px-2 py-0.5 mt-1 flex items-center justify-between'
      };
    }

    if (activeTheme === 'neon') {
      return {
        container: `bg-[#0a1128]/95 backdrop-blur-xl text-slate-100 border ${
          isActive ? 'border-cyan-400 shadow-[0_0_25px_rgba(0,242,254,0.25)]' : 'border-cyan-500/30 shadow-lg'
        } rounded-lg`,
        titleBar: isActive
          ? 'bg-gradient-to-r from-[#0d1d4a] via-[#122866] to-[#1a3880] text-cyan-200 border-b border-cyan-500/30'
          : 'bg-[#0b1228] text-slate-400 border-b border-slate-800',
        btn: 'w-5 h-5 rounded bg-[#101c3d] hover:bg-[#182959] text-cyan-300 border border-cyan-500/40 flex items-center justify-center text-xs transition-colors',
        body: 'bg-[#060a19] text-slate-100 border border-cyan-500/20 rounded',
        statusBar: 'bg-[#080d22] text-slate-400 text-[11px] font-code border-t border-cyan-500/20 px-3 py-1 mt-1 flex items-center justify-between'
      };
    }

    // Default 'modern'
    return {
      container: `bg-slate-900/95 backdrop-blur-md text-slate-100 border ${
        isActive ? 'border-sky-500/70 shadow-2xl ring-1 ring-sky-500/30' : 'border-slate-700 shadow-xl'
      } rounded-lg`,
      titleBar: isActive
        ? 'bg-gradient-to-r from-slate-800 to-slate-700 text-white border-b border-slate-600'
        : 'bg-slate-800/80 text-slate-400 border-b border-slate-700',
      btn: 'w-5 h-5 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-600 flex items-center justify-center text-xs transition-colors',
      body: 'bg-slate-950 text-slate-100 border border-slate-800 rounded',
      statusBar: 'bg-slate-900 text-slate-400 text-[11px] font-code border-t border-slate-800 px-3 py-1 mt-1 flex items-center justify-between'
    };
  };

  const themeStyle = getThemeStyles();

  // Positioning calculations
  let style = { zIndex };

  if (isMobile) {
    // Mobile: Fullscreen modal overlay style below wrapped topbar
    style = {
      ...style,
      top: '88px',
      left: '0px',
      right: '0px',
      bottom: '38px',
      width: '100%',
      height: 'calc(100vh - 126px)'
    };
  } else if (isMaximized) {
    // Desktop Maximized: Fills workspace above taskbar
    style = {
      ...style,
      top: '50px',
      left: '0px',
      right: '0px',
      bottom: '38px',
      width: '100vw',
      height: 'calc(100vh - 88px)'
    };
  } else {
    // Normal floating window
    style = {
      ...style,
      top: `${position.y}px`,
      left: `${position.x}px`,
      width: `${size.w}px`,
      maxWidth: 'calc(100vw - 20px)',
      height: `${size.h}px`,
      maxHeight: 'calc(100vh - 100px)'
    };
  }

  return (
    <div
      ref={windowRef}
      onMouseDown={onFocus}
      onTouchStart={onFocus}
      style={style}
      className={`fixed flex flex-col p-1 transition-transform select-none ${
        isMinimized ? 'hidden' : 'flex'
      } ${themeStyle.container}`}
      role="dialog"
      aria-labelledby={`window-title-${id}`}
      aria-modal="false"
    >
      {/* Title Bar */}
      <div
        ref={dragHandleRef}
        onPointerDown={handlePointerDown}
        className={`px-2 py-1 flex items-center justify-between gap-2 cursor-move ${themeStyle.titleBar} ${
          isDragging ? 'opacity-90' : ''
        }`}
      >
        <div className="flex items-center gap-1.5 min-w-0">
          <span className="flex-shrink-0 text-cyan-300">{icon}</span>
          <span
            id={`window-title-${id}`}
            className="text-xs sm:text-sm font-code font-bold truncate tracking-wide"
          >
            {title}
          </span>
        </div>

        {/* Window Controls */}
        <div className="flex items-center gap-1 flex-shrink-0">
          {/* Minimize Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onMinimize();
            }}
            className={themeStyle.btn}
            aria-label={`Minimize ${title} window`}
            title="Minimize"
          >
            <Minus className="w-2.5 h-2.5" />
          </button>

          {/* Maximize / Restore Button */}
          {!isMobile && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onMaximize();
              }}
              className={themeStyle.btn}
              aria-label={isMaximized ? `Restore ${title} window` : `Maximize ${title} window`}
              title={isMaximized ? "Restore" : "Maximize"}
            >
              {isMaximized ? (
                <Copy className="w-2.5 h-2.5" />
              ) : (
                <Square className="w-2.5 h-2.5" />
              )}
            </button>
          )}

          {/* Close Button */}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className={`${themeStyle.btn} hover:bg-red-600 hover:text-white`}
            aria-label={`Close ${title} window`}
            title="Close"
          >
            <X className="w-2.5 h-2.5" />
          </button>
        </div>
      </div>

      {/* Window Body Area */}
      <div className={`flex-1 overflow-y-auto p-3 sm:p-4 select-text ${themeStyle.body}`}>
        {children}
      </div>

      {/* Retro Status Bar */}
      <div className={themeStyle.statusBar}>
        <span className="truncate">Ready · SUHAIL.SYS 98</span>
        <span className="font-mono text-[10px] hidden sm:inline">1 object(s)</span>
      </div>
    </div>
  );
}
