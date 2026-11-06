import React, { useState, useEffect, useCallback } from 'react';
import {
  BrainCircuit,
  ShieldAlert,
  Home,
  Terminal,
  Palette,
  Cpu
} from 'lucide-react';
import TopBar from './TopBar';
import DesktopSurface from './DesktopSurface';
import WindowFrame from './WindowFrame';
import ProjectDetailsContent from './ProjectDetailsContent';
import ProjectListView from './ProjectListView';
import TerminalWindow from './TerminalWindow';
import ThemeSettingsContent from './ThemeSettingsContent';
import AboutSystemContent from './AboutSystemContent';
import StartMenu from './StartMenu';
import Taskbar from './Taskbar';
import { WINDOWS_PROJECTS } from '../../data/windowsProjectsData';

const INITIAL_WINDOWS = {
  paimana: {
    id: 'paimana',
    title: 'PAIMANA AI — Infrastructure Risk Analytics',
    iconName: 'BrainCircuit',
    isOpen: true,
    isMinimized: false,
    isMaximized: false,
    position: { x: 130, y: 60 },
    size: { w: 720, h: 540 },
    zIndex: 10
  },
  internship: {
    id: 'internship',
    title: 'Internship Intelligence — Scam Detection',
    iconName: 'ShieldAlert',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    position: { x: 170, y: 90 },
    size: { w: 720, h: 540 },
    zIndex: 11
  },
  'house-price': {
    id: 'house-price',
    title: 'House Price Predictor on AWS',
    iconName: 'Home',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    position: { x: 210, y: 120 },
    size: { w: 720, h: 540 },
    zIndex: 12
  },
  terminal: {
    id: 'terminal',
    title: 'MS-DOS Prompt (C:\\SUHAIL\\PROJECTS)',
    iconName: 'Terminal',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    position: { x: 250, y: 140 },
    size: { w: 620, h: 420 },
    zIndex: 13
  },
  themes: {
    id: 'themes',
    title: 'Display Properties — Themes',
    iconName: 'Palette',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    position: { x: 280, y: 110 },
    size: { w: 500, h: 460 },
    zIndex: 14
  },
  about: {
    id: 'about',
    title: 'System Properties — SUHAIL.SYS',
    iconName: 'Cpu',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    position: { x: 230, y: 80 },
    size: { w: 540, h: 420 },
    zIndex: 15
  }
};

export default function WindowsDesktopApp() {
  const [viewMode, setViewMode] = useState('desktop'); // 'desktop' | 'list'
  const [activeTheme, setActiveTheme] = useState('classic'); // 'classic' | 'neon' | 'modern'
  const [openWindows, setOpenWindows] = useState(INITIAL_WINDOWS);
  const [activeWindowId, setActiveWindowId] = useState('paimana');
  const [highestZIndex, setHighestZIndex] = useState(20);
  const [startMenuOpen, setStartMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive mobile screen check
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Bring window to focus & front
  const focusWindow = useCallback(
    (wId) => {
      setHighestZIndex((prev) => {
        const nextZ = prev + 1;
        setOpenWindows((w) => ({
          ...w,
          [wId]: {
            ...w[wId],
            zIndex: nextZ,
            isMinimized: false
          }
        }));
        return nextZ;
      });
      setActiveWindowId(wId);
      setStartMenuOpen(false);
    },
    []
  );

  // Open window from desktop icon, menu, or list view
  const openWindow = useCallback(
    (wId) => {
      setViewMode('desktop'); // Switch to desktop to see the window
      setHighestZIndex((prev) => {
        const nextZ = prev + 1;
        setOpenWindows((w) => ({
          ...w,
          [wId]: {
            ...w[wId],
            isOpen: true,
            isMinimized: false,
            zIndex: nextZ
          }
        }));
        return nextZ;
      });
      setActiveWindowId(wId);
      setStartMenuOpen(false);
    },
    []
  );

  const minimizeWindow = useCallback(
    (wId) => {
      setOpenWindows((w) => ({
        ...w,
        [wId]: {
          ...w[wId],
          isMinimized: true
        }
      }));
      if (activeWindowId === wId) {
        setActiveWindowId(null);
      }
    },
    [activeWindowId]
  );

  const maximizeWindow = useCallback((wId) => {
    setOpenWindows((w) => ({
      ...w,
      [wId]: {
        ...w[wId],
        isMaximized: !w[wId].isMaximized
      }
    }));
  }, []);

  const closeWindow = useCallback(
    (wId) => {
      setOpenWindows((w) => ({
        ...w,
        [wId]: {
          ...w[wId],
          isOpen: false,
          isMinimized: false,
          isMaximized: false
        }
      }));
      if (activeWindowId === wId) {
        setActiveWindowId(null);
      }
    },
    [activeWindowId]
  );

  const updatePosition = useCallback((wId, newPos) => {
    setOpenWindows((w) => ({
      ...w,
      [wId]: {
        ...w[wId],
        position: newPos
      }
    }));
  }, []);

  const handleTaskbarClick = useCallback(
    (wId) => {
      const win = openWindows[wId];
      if (!win) return;

      if (win.isMinimized) {
        // Un-minimize and focus
        focusWindow(wId);
      } else if (activeWindowId === wId) {
        // Already active -> minimize
        minimizeWindow(wId);
      } else {
        // Inactive -> bring to front
        focusWindow(wId);
      }
    },
    [openWindows, activeWindowId, focusWindow, minimizeWindow]
  );

  const getWindowIconComponent = (wId) => {
    switch (wId) {
      case 'paimana':
        return <BrainCircuit className="w-4 h-4 text-cyan-400" />;
      case 'internship':
        return <ShieldAlert className="w-4 h-4 text-violet-400" />;
      case 'house-price':
        return <Home className="w-4 h-4 text-emerald-400" />;
      case 'terminal':
        return <Terminal className="w-4 h-4 text-sky-400" />;
      case 'themes':
        return <Palette className="w-4 h-4 text-pink-400" />;
      case 'about':
        return <Cpu className="w-4 h-4 text-blue-400" />;
      default:
        return null;
    }
  };

  const getProjectData = (appId) => {
    return WINDOWS_PROJECTS.find((p) => p.appId === appId);
  };

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100 flex flex-col font-sans select-none overflow-x-hidden">
      {/* Top Header Bar */}
      <TopBar
        viewMode={viewMode}
        setViewMode={setViewMode}
        activeTheme={activeTheme}
        setActiveTheme={setActiveTheme}
        openWindow={openWindow}
      />

      {/* Main Workspace Area */}
      <main className="flex-1 relative">
        {viewMode === 'list' ? (
          /* Recruiter-friendly Project Explorer */
          <div className="min-h-[calc(100vh-38px-45px)] pb-14 bg-[#060913]">
            <ProjectListView
              onOpenProjectInDesktop={openWindow}
              activeTheme={activeTheme}
            />
          </div>
        ) : (
          /* Windows 98 Desktop Surface */
          <DesktopSurface
            activeTheme={activeTheme}
            onOpenWindow={openWindow}
            onSwitchToList={() => setViewMode('list')}
            isMobile={isMobile}
          >
            {/* Project 1 Window: PAIMANA AI */}
            <WindowFrame
              id="paimana"
              title={openWindows.paimana.title}
              icon={getWindowIconComponent('paimana')}
              isOpen={openWindows.paimana.isOpen}
              isMinimized={openWindows.paimana.isMinimized}
              isMaximized={openWindows.paimana.isMaximized}
              zIndex={openWindows.paimana.zIndex}
              isActive={activeWindowId === 'paimana'}
              position={openWindows.paimana.position}
              size={openWindows.paimana.size}
              activeTheme={activeTheme}
              isMobile={isMobile}
              onFocus={() => focusWindow('paimana')}
              onMinimize={() => minimizeWindow('paimana')}
              onMaximize={() => maximizeWindow('paimana')}
              onClose={() => closeWindow('paimana')}
              onPositionChange={(pos) => updatePosition('paimana', pos)}
            >
              <ProjectDetailsContent
                project={getProjectData('paimana')}
                activeTheme={activeTheme}
              />
            </WindowFrame>

            {/* Project 2 Window: Internship Intelligence */}
            <WindowFrame
              id="internship"
              title={openWindows.internship.title}
              icon={getWindowIconComponent('internship')}
              isOpen={openWindows.internship.isOpen}
              isMinimized={openWindows.internship.isMinimized}
              isMaximized={openWindows.internship.isMaximized}
              zIndex={openWindows.internship.zIndex}
              isActive={activeWindowId === 'internship'}
              position={openWindows.internship.position}
              size={openWindows.internship.size}
              activeTheme={activeTheme}
              isMobile={isMobile}
              onFocus={() => focusWindow('internship')}
              onMinimize={() => minimizeWindow('internship')}
              onMaximize={() => maximizeWindow('internship')}
              onClose={() => closeWindow('internship')}
              onPositionChange={(pos) => updatePosition('internship', pos)}
            >
              <ProjectDetailsContent
                project={getProjectData('internship')}
                activeTheme={activeTheme}
              />
            </WindowFrame>

            {/* Project 3 Window: House Price Predictor */}
            <WindowFrame
              id="house-price"
              title={openWindows['house-price'].title}
              icon={getWindowIconComponent('house-price')}
              isOpen={openWindows['house-price'].isOpen}
              isMinimized={openWindows['house-price'].isMinimized}
              isMaximized={openWindows['house-price'].isMaximized}
              zIndex={openWindows['house-price'].zIndex}
              isActive={activeWindowId === 'house-price'}
              position={openWindows['house-price'].position}
              size={openWindows['house-price'].size}
              activeTheme={activeTheme}
              isMobile={isMobile}
              onFocus={() => focusWindow('house-price')}
              onMinimize={() => minimizeWindow('house-price')}
              onMaximize={() => maximizeWindow('house-price')}
              onClose={() => closeWindow('house-price')}
              onPositionChange={(pos) => updatePosition('house-price', pos)}
            >
              <ProjectDetailsContent
                project={getProjectData('house-price')}
                activeTheme={activeTheme}
              />
            </WindowFrame>

            {/* Terminal Window */}
            <WindowFrame
              id="terminal"
              title={openWindows.terminal.title}
              icon={getWindowIconComponent('terminal')}
              isOpen={openWindows.terminal.isOpen}
              isMinimized={openWindows.terminal.isMinimized}
              isMaximized={openWindows.terminal.isMaximized}
              zIndex={openWindows.terminal.zIndex}
              isActive={activeWindowId === 'terminal'}
              position={openWindows.terminal.position}
              size={openWindows.terminal.size}
              activeTheme={activeTheme}
              isMobile={isMobile}
              onFocus={() => focusWindow('terminal')}
              onMinimize={() => minimizeWindow('terminal')}
              onMaximize={() => maximizeWindow('terminal')}
              onClose={() => closeWindow('terminal')}
              onPositionChange={(pos) => updatePosition('terminal', pos)}
            >
              <TerminalWindow onOpenProject={openWindow} />
            </WindowFrame>

            {/* Theme Settings Window */}
            <WindowFrame
              id="themes"
              title={openWindows.themes.title}
              icon={getWindowIconComponent('themes')}
              isOpen={openWindows.themes.isOpen}
              isMinimized={openWindows.themes.isMinimized}
              isMaximized={openWindows.themes.isMaximized}
              zIndex={openWindows.themes.zIndex}
              isActive={activeWindowId === 'themes'}
              position={openWindows.themes.position}
              size={openWindows.themes.size}
              activeTheme={activeTheme}
              isMobile={isMobile}
              onFocus={() => focusWindow('themes')}
              onMinimize={() => minimizeWindow('themes')}
              onMaximize={() => maximizeWindow('themes')}
              onClose={() => closeWindow('themes')}
              onPositionChange={(pos) => updatePosition('themes', pos)}
            >
              <ThemeSettingsContent
                activeTheme={activeTheme}
                setActiveTheme={setActiveTheme}
              />
            </WindowFrame>

            {/* About System Window */}
            <WindowFrame
              id="about"
              title={openWindows.about.title}
              icon={getWindowIconComponent('about')}
              isOpen={openWindows.about.isOpen}
              isMinimized={openWindows.about.isMinimized}
              isMaximized={openWindows.about.isMaximized}
              zIndex={openWindows.about.zIndex}
              isActive={activeWindowId === 'about'}
              position={openWindows.about.position}
              size={openWindows.about.size}
              activeTheme={activeTheme}
              isMobile={isMobile}
              onFocus={() => focusWindow('about')}
              onMinimize={() => minimizeWindow('about')}
              onMaximize={() => maximizeWindow('about')}
              onClose={() => closeWindow('about')}
              onPositionChange={(pos) => updatePosition('about', pos)}
            >
              <AboutSystemContent activeTheme={activeTheme} />
            </WindowFrame>
          </DesktopSurface>
        )}
      </main>

      {/* Start Menu */}
      <StartMenu
        isOpen={startMenuOpen}
        onClose={() => setStartMenuOpen(false)}
        onOpenWindow={openWindow}
        onSwitchToList={() => setViewMode('list')}
        activeTheme={activeTheme}
      />

      {/* Taskbar */}
      <Taskbar
        startMenuOpen={startMenuOpen}
        setStartMenuOpen={setStartMenuOpen}
        openWindows={openWindows}
        activeWindowId={activeWindowId}
        onTaskbarClick={handleTaskbarClick}
        onSwitchToList={() => setViewMode('list')}
        activeTheme={activeTheme}
      />
    </div>
  );
}
