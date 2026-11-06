import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal, Workflow } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Main navigation structure: About, Projects, Skills, Learning & Tools (Mission Control highlighted separately as the final item)
  const standardNavLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '/projects.html' },
    { name: 'Skills', href: '#skills' },
    { name: 'Learning & Tools', href: '#learning-tools' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#060913]/92 backdrop-blur-md border-b border-cyan-500/20 shadow-lg shadow-black/40 py-3'
          : 'bg-transparent border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand / Logo */}
          <a
            href="#"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-md px-1 py-0.5"
            aria-label="Suhail Shaik home"
          >
            <div className="w-8 h-8 rounded-lg bg-cyan-950/70 border border-cyan-500/40 flex items-center justify-center text-cyan-300 group-hover:border-cyan-400 transition-colors shadow-sm shadow-cyan-950">
              <Terminal className="w-4 h-4" />
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-code text-sm font-bold tracking-wider text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {PERSONAL_INFO.brand}
                </span>
                <span className="hidden sm:inline-block text-[10px] font-code px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                  ML & MLOps
                </span>
              </div>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5" aria-label="Main Navigation">
            {standardNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3 py-1.5 text-xs uppercase tracking-wider font-code text-slate-300 hover:text-cyan-300 hover:bg-cyan-500/5 rounded-md transition-all border border-transparent hover:border-cyan-500/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                {link.name}
              </a>
            ))}

            {/* Mission Control — Final & Most Visually Prominent Navigation Item */}
            <a
              href="#mission-control"
              className="ml-1 inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-code font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/50 hover:bg-cyan-900/70 border border-cyan-500/40 hover:border-cyan-400 rounded-lg shadow-sm shadow-cyan-950/60 hover:shadow-cyan-500/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <Workflow className="w-3.5 h-3.5 text-cyan-400" />
              <span>Mission Control</span>
            </a>
          </nav>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-300 hover:text-cyan-300 bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0f20]/95 backdrop-blur-xl border-b border-cyan-500/20 px-4 pt-3 pb-5 mt-2 transition-all shadow-2xl">
          <div className="flex flex-col space-y-2">
            <div className="px-3 py-1.5 mb-1 rounded bg-cyan-950/40 border border-cyan-500/20 text-xs font-code text-cyan-300 flex items-center justify-between">
              <span>{PERSONAL_INFO.brand}</span>
              <span className="text-[11px] text-slate-400">ML & MLOps OS</span>
            </div>

            {standardNavLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2 text-sm font-code uppercase tracking-wider text-slate-200 hover:text-cyan-300 hover:bg-cyan-500/10 rounded-md transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* Mission Control in Mobile Menu with distinctive highlight */}
            <a
              href="#mission-control"
              onClick={handleLinkClick}
              className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-sm font-code font-bold uppercase tracking-wider text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 hover:bg-cyan-900/80 transition-all mt-1"
            >
              <div className="flex items-center gap-2">
                <Workflow className="w-4 h-4 text-cyan-400" />
                <span>Mission Control</span>
              </div>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                Interactive
              </span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
