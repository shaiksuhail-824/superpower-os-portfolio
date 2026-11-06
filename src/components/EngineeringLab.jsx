import React, { useState } from 'react';
import {
  Terminal,
  Database,
  Activity,
  Box,
  GitBranch,
  Cloud,
  CheckCircle,
  Check,
  Clock,
  Sparkles,
  Info
} from 'lucide-react';
import { ENGINEERING_LAB_TOPICS } from '../data/portfolioData';

export default function EngineeringLab() {
  const [filter, setFilter] = useState('all');

  const filteredTopics = filter === 'all'
    ? ENGINEERING_LAB_TOPICS
    : ENGINEERING_LAB_TOPICS.filter((t) => t.stateType === filter);

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Database':
        return <Database className="w-4 h-4 text-cyan-400" />;
      case 'Activity':
        return <Activity className="w-4 h-4 text-violet-400" />;
      case 'Terminal':
        return <Terminal className="w-4 h-4 text-blue-400" />;
      case 'Box':
        return <Box className="w-4 h-4 text-emerald-400" />;
      case 'GitBranch':
        return <GitBranch className="w-4 h-4 text-cyan-400" />;
      case 'Cloud':
        return <Cloud className="w-4 h-4 text-sky-400" />;
      case 'CheckCircle':
        return <CheckCircle className="w-4 h-4 text-amber-400" />;
      default:
        return <Terminal className="w-4 h-4 text-cyan-400" />;
    }
  };

  const renderStatusBadge = (topic) => {
    switch (topic.stateType) {
      case 'demonstrated':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-code bg-emerald-500/10 text-emerald-300 border border-emerald-500/30">
            <Check className="w-3 h-3 text-emerald-400" />
            <span>{topic.state}</span>
          </span>
        );
      case 'practicing':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-code bg-cyan-500/10 text-cyan-300 border border-cyan-500/30">
            <Sparkles className="w-3 h-3 text-cyan-400" />
            <span>{topic.state}</span>
          </span>
        );
      case 'learning':
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-code bg-amber-500/10 text-amber-300 border border-amber-500/30">
            <Clock className="w-3 h-3 text-amber-400" />
            <span>{topic.state}</span>
          </span>
        );
    }
  };

  return (
    <section id="learning-tools" className="py-20 relative bg-[#060913] bg-grid-cyber">
      {/* Anchor for backward compatibility with #lab */}
      <div id="lab" className="sr-only">Learning and Tools</div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-emerald-500/10 border border-emerald-500/20 text-xs font-code text-emerald-300 uppercase tracking-widest mb-3">
              <Terminal className="w-3.5 h-3.5" />
              <span>MLOps Engineering Lab</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-3">
              Systems & Reproducibility Timeline
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              A structured progression of 7 engineering milestones—from data versioning and experiment tracking to containerization, automated testing, and cloud deployment practice.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 self-start md:self-end bg-[#0b1224] p-1 rounded-lg border border-slate-800 text-xs font-code">
            <button
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded-md transition-colors ${
                filter === 'all'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All ({ENGINEERING_LAB_TOPICS.length})
            </button>
            <button
              onClick={() => setFilter('demonstrated')}
              className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
                filter === 'demonstrated'
                  ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                  : 'text-slate-400 hover:text-emerald-300'
              }`}
            >
              <Check className="w-3 h-3 text-emerald-400" />
              <span>Implemented (4)</span>
            </button>
            <button
              onClick={() => setFilter('practicing')}
              className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
                filter === 'practicing'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                  : 'text-slate-400 hover:text-cyan-300'
              }`}
            >
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>Practicing (2)</span>
            </button>
            <button
              onClick={() => setFilter('learning')}
              className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 ${
                filter === 'learning'
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  : 'text-slate-400 hover:text-amber-300'
              }`}
            >
              <Clock className="w-3 h-3 text-amber-400" />
              <span>Learning (1)</span>
            </button>
          </div>
        </div>

        {/* 7 Engineering Lab Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {filteredTopics.map((topic) => (
            <div
              key={topic.id}
              className="flex flex-col justify-between rounded-xl bg-[#0b1224] border border-slate-800 hover:border-cyan-500/30 p-6 transition-all duration-200"
            >
              <div>
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-[#121c38] border border-slate-700/60">
                      {getIcon(topic.icon)}
                    </div>
                    <span className="font-code text-xs font-bold text-cyan-400">
                      #{topic.step}
                    </span>
                  </div>
                  
                  {renderStatusBadge(topic)}
                </div>

                <h3 className="text-base font-bold text-white mb-2">
                  {topic.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 mb-4 leading-relaxed">
                  {topic.summary}
                </p>

                {/* Details */}
                <div className="space-y-1.5 mb-5">
                  {topic.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-cyan-400 font-mono mt-0.5">•</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tooling Tags */}
              <div className="pt-3.5 border-t border-slate-800/80">
                <div className="text-[10px] font-code uppercase tracking-wider text-slate-400 mb-2">
                  Key Tooling:
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {topic.tooling.map((tool) => (
                    <span
                      key={tool}
                      className="text-xs font-code px-2 py-0.5 rounded bg-[#101b38] text-slate-200 border border-slate-700/60"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Engineering Integrity Scope Banner */}
        <div className="rounded-xl bg-[#080e1e] border border-cyan-500/20 p-4 sm:p-5 flex items-start gap-3.5">
          <div className="p-2 rounded-lg bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 flex-shrink-0 mt-0.5">
            <Info className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs font-code font-bold uppercase tracking-wider text-cyan-300 mb-1">
              Engineering Scope & Rigor
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              These 7 milestones represent a disciplined progression from model experimentation toward reproducible, testable systems. Each tooling set is practiced across targeted modular projects (e.g., DVC and MLflow for tabular pipelines, Docker and Elastic Beanstalk for model serving) rather than claiming all tools operate together in a single monolithic production setup.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
