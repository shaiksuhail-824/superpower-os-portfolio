import React from 'react';
import { Terminal, ArrowUp, FileText, Cloud } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#04060d] border-t border-slate-900 py-10 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-slate-900">
          
          {/* Brand & Brief Context */}
          <div className="md:col-span-6 space-y-2.5">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-cyan-950/80 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                <Terminal className="w-3.5 h-3.5" />
              </div>
              <span className="font-code font-bold text-sm tracking-wider text-white">
                {PERSONAL_INFO.brand}
              </span>
              <span className="text-[10px] font-code px-1.5 py-0.5 rounded bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                Suhail Shaik
              </span>
            </div>
            
            <p className="text-xs text-slate-400 max-w-md leading-relaxed">
              Computer Science undergraduate at RGUKT Ongole exploring machine learning, reproducible MLOps pipelines, and cloud deployment.
            </p>

            <div className="flex items-center gap-2 text-[11px] font-code text-slate-400 pt-1">
              <Cloud className="w-3.5 h-3.5 text-cyan-400" />
              <span>Configured for static hosting on AWS Amplify</span>
            </div>
          </div>

          {/* Quick Nav Links */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-xs font-code uppercase tracking-wider text-slate-300 mb-2">
              Navigation
            </div>
            <ul className="space-y-1.5 text-xs font-code">
              <li>
                <a href="#about" className="hover:text-cyan-300 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-cyan-300 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-cyan-300 transition-colors">
                  Skills
                </a>
              </li>
              <li>
                <a href="#learning-tools" className="hover:text-cyan-300 transition-colors">
                  Learning & Tools
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-cyan-300 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a
                  href={PERSONAL_INFO.resumeUrl}
                  className="hover:text-cyan-300 transition-colors inline-flex items-center gap-1 text-cyan-400/90"
                >
                  <FileText className="w-3 h-3" />
                  <span>Resume</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column: Back to top */}
          <div className="md:col-span-3 flex flex-col justify-between items-start md:items-end">
            <div className="text-xs font-code text-slate-400 space-y-1">
              <div>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-slate-300 hover:text-cyan-300">{PERSONAL_INFO.email}</a></div>
              <div>Stack: React 18 · Tailwind CSS · Vite</div>
            </div>

            <button
              onClick={scrollToTop}
              className="mt-4 md:mt-0 inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-code text-slate-300 hover:text-white bg-slate-900 border border-slate-800 hover:border-cyan-500/40 transition-colors"
              aria-label="Scroll to top of page"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

        {/* Bottom Credits */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs font-code text-slate-400 gap-3">
          <div>
            © {new Date().getFullYear()} Suhail Shaik. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>SUHAIL.SYS</span>
            <span>•</span>
            <span>RGUKT Ongole</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
