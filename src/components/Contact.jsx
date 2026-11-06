import React, { useState } from 'react';
import { Mail, Github, Linkedin, ExternalLink, Copy, Check, FileText, Download } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Contact() {
  const [copiedKey, setCopiedKey] = useState(null);

  const handleCopy = (text, key) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2000);
  };

  return (
    <section id="contact" className="py-20 relative bg-[#060913] bg-grid-cyber">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-violet-500/10 border border-violet-500/20 text-xs font-code text-violet-300 uppercase tracking-widest mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Contact & Collaboration</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
            Get in Touch
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            Interested in discussing machine learning projects, reproducible MLOps pipelines, or potential collaborations? Feel free to reach out directly.
          </p>
        </div>

        {/* 3 Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          
          {/* Email Card (Prominent) */}
          <div className="rounded-xl bg-[#0b1224] border border-slate-800 hover:border-cyan-500/40 p-6 transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-[#121c38] border border-slate-700/60 text-cyan-400">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-code text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-500/30">
                  Direct Email
                </span>
              </div>

              <h3 className="text-base font-bold text-white mb-1.5">
                Email Address
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Direct inbox for project inquiries and collaboration.
              </p>

              <div className="p-2.5 rounded-lg bg-[#070e20] border border-slate-800 font-code text-xs text-slate-200 mb-5 flex items-center justify-between">
                <span className="truncate mr-2 font-mono">{PERSONAL_INFO.email}</span>
                <button
                  type="button"
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors flex-shrink-0"
                  aria-label="Copy email address"
                  title="Copy email"
                >
                  {copiedKey === 'email' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg font-code text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Send an Email</span>
            </a>
          </div>

          {/* GitHub Card */}
          <div className="rounded-xl bg-[#0b1224] border border-slate-800 hover:border-cyan-500/40 p-6 transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-[#121c38] border border-slate-700/60 text-cyan-400">
                  <Github className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-code text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-800">
                  Code & Commits
                </span>
              </div>

              <h3 className="text-base font-bold text-white mb-1.5">
                GitHub Profile
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Explore repositories, notebooks, and MLOps pipelines.
              </p>

              <div className="p-2.5 rounded-lg bg-[#070e20] border border-slate-800 font-code text-xs text-slate-200 mb-5 flex items-center justify-between">
                <span className="truncate mr-2 font-mono">github.com/shaiksuhail-824</span>
                <button
                  type="button"
                  onClick={() => handleCopy(PERSONAL_INFO.socials.github, 'github')}
                  className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors flex-shrink-0"
                  aria-label="Copy GitHub URL"
                  title="Copy URL"
                >
                  {copiedKey === 'github' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            <a
              href={PERSONAL_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg font-code text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-cyan-400 transition-colors"
            >
              <span>Open GitHub</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

          {/* LinkedIn Card */}
          <div className="rounded-xl bg-[#0b1224] border border-slate-800 hover:border-violet-500/40 p-6 transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="p-2.5 rounded-lg bg-[#121c38] border border-slate-700/60 text-violet-400">
                  <Linkedin className="w-5 h-5" />
                </div>
                <span className="text-[11px] font-code text-violet-300 bg-violet-950/60 px-2 py-0.5 rounded border border-violet-500/20">
                  Network
                </span>
              </div>

              <h3 className="text-base font-bold text-white mb-1.5">
                LinkedIn Profile
              </h3>
              <p className="text-xs text-slate-400 mb-4">
                Connect for professional networking and community updates.
              </p>

              <div className="p-2.5 rounded-lg bg-[#070e20] border border-slate-800 font-code text-xs text-slate-200 mb-5 flex items-center justify-between">
                <span className="truncate mr-2 font-mono">linkedin.com/in/shaiksuhail824</span>
                <button
                  type="button"
                  onClick={() => handleCopy(PERSONAL_INFO.socials.linkedin, 'linkedin')}
                  className="p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors flex-shrink-0"
                  aria-label="Copy LinkedIn URL"
                  title="Copy URL"
                >
                  {copiedKey === 'linkedin' ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
            </div>

            <a
              href={PERSONAL_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-lg font-code text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-violet-400 transition-colors"
            >
              <span>Connect on LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
            </a>
          </div>

        </div>

        {/* Quick Resume Card */}
        <div className="rounded-xl bg-[#0c1328] border border-slate-800 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-cyan-950/60 text-cyan-400 border border-cyan-500/30">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-white">
                Looking for a formal summary of skills and education?
              </div>
              <div className="text-xs text-slate-400">
                View or download my verified resume in PDF format.
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <a
              href={PERSONAL_INFO.resumeUrl}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-code text-xs font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors whitespace-nowrap shadow-sm"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>View Resume</span>
            </a>
            <a
              href={PERSONAL_INFO.resumePdfUrl}
              download="Shaik_Suhail_Resume.pdf"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-code text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700 hover:border-slate-600 transition-colors whitespace-nowrap"
            >
              <Download className="w-3.5 h-3.5 text-slate-400" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
