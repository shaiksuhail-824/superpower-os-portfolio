import React from 'react';
import {
  Github,
  ExternalLink,
  CheckCircle,
  AlertCircle,
  Layers,
  Cpu,
  Database,
  Cloud,
  Code2,
  Terminal,
  ShieldAlert,
  GitBranch,
  Activity
} from 'lucide-react';

export default function ProjectDetailsContent({ project, activeTheme }) {
  if (!project) return null;

  const isClassic = activeTheme === 'classic';

  return (
    <div className="space-y-4 text-xs sm:text-sm font-sans">
      {/* Top Banner: Title, Subtitle, Status Badge & GitHub Button */}
      <div className={`p-3 sm:p-4 rounded border ${
        isClassic
          ? 'bg-[#e0e0e0] border-[#808080] text-black'
          : 'bg-[#0a1126] border-cyan-500/30 text-white'
      }`}>
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className={`text-[10px] font-code px-2 py-0.5 rounded font-bold uppercase tracking-wider ${
                project.statusType === 'hackathon'
                  ? 'bg-amber-500/20 text-amber-600 dark:text-amber-300 border border-amber-500/40'
                  : project.statusType === 'planning'
                  ? 'bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-500/40'
                  : 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-500/40'
              }`}>
                {project.statusBadge}
              </span>
              <span className="text-[11px] font-code opacity-75">
                Category: {project.categories.join(' · ')}
              </span>
            </div>

            <h3 className="text-base sm:text-lg font-bold font-code leading-snug">
              {project.fullName}
            </h3>
            <p className="text-xs opacity-85 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* GitHub Repository Action Button */}
          <div className="flex-shrink-0 pt-1 sm:pt-0">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 px-3 py-2 rounded text-xs font-code font-bold transition-all ${
                isClassic
                  ? 'bg-[#c0c0c0] text-black border-2 border-t-white border-l-white border-b-black border-r-black hover:bg-[#d0d0d0] active:border-t-black active:border-l-black active:border-b-white active:border-r-white'
                  : 'bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/50 hover:border-cyan-400 shadow-sm'
              }`}
              title="Open GitHub source repository"
            >
              <Github className="w-4 h-4" />
              <span>View GitHub Repo</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>
          </div>
        </div>
      </div>

      {/* Problem Statement Section */}
      <div className={`p-3 rounded border ${
        isClassic
          ? 'bg-[#f4f4f4] border-[#a0a0a0] text-black'
          : 'bg-[#070e20] border-slate-800 text-slate-200'
      }`}>
        <div className="flex items-center gap-1.5 font-code font-bold text-xs uppercase tracking-wider text-rose-500 dark:text-rose-400 mb-1.5">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>Problem Statement</span>
        </div>
        <p className="leading-relaxed">
          {project.problemStatement}
        </p>
      </div>

      {/* Specific Section 1: Overview & Objectives */}
      {project.projectOverview && (
        <div className={`p-3 rounded border ${
          isClassic
            ? 'bg-[#f4f4f4] border-[#a0a0a0] text-black'
            : 'bg-[#070e20] border-slate-800 text-slate-200'
        }`}>
          <div className="flex items-center gap-1.5 font-code font-bold text-xs uppercase tracking-wider text-cyan-600 dark:text-cyan-400 mb-1.5">
            <Activity className="w-3.5 h-3.5" />
            <span>Project Overview & Concept</span>
          </div>
          <p className="leading-relaxed mb-2">
            {project.projectOverview}
          </p>

          {project.projectObjective && (
            <div className="mt-2 pt-2 border-t border-slate-700/40 text-xs">
              <strong className="font-code text-cyan-700 dark:text-cyan-300">Objective: </strong>
              <span>{project.projectObjective}</span>
            </div>
          )}

          {project.suspiciousOpportunityConcept && (
            <div className="mt-2 pt-2 border-t border-slate-700/40 text-xs">
              <strong className="font-code text-violet-700 dark:text-violet-300">Suspicious Opportunity Analysis Concept: </strong>
              <span>{project.suspiciousOpportunityConcept}</span>
            </div>
          )}

          {project.regressionProblemDetails && (
            <div className="mt-2 pt-2 border-t border-slate-700/40 text-xs">
              <strong className="font-code text-emerald-700 dark:text-emerald-300">Regression Formulation: </strong>
              <span>{project.regressionProblemDetails}</span>
            </div>
          )}
        </div>
      )}

      {/* Specific Section 2: Contributions */}
      {project.contributions && (
        <div className={`p-3 rounded border ${
          isClassic
            ? 'bg-[#f4f4f4] border-[#a0a0a0] text-black'
            : 'bg-[#070e20] border-slate-800 text-slate-200'
        }`}>
          <div className="flex items-center gap-1.5 font-code font-bold text-xs uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-2">
            <CheckCircle className="w-3.5 h-3.5" />
            <span>Suhail&apos;s Engineering Contributions</span>
          </div>
          <ul className="space-y-1.5 pl-1">
            {project.contributions.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2 leading-relaxed">
                <span className="font-mono text-cyan-600 dark:text-cyan-400 font-bold">•</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Specific Section 3: Machine Learning Workflow & Evaluation or Planned Architecture */}
      {project.plannedArchitecture && (
        <div className={`p-3 rounded border ${
          isClassic
            ? 'bg-[#f4f4f4] border-[#a0a0a0] text-black'
            : 'bg-[#070e20] border-slate-800 text-slate-200'
        }`}>
          <div className="flex items-center gap-1.5 font-code font-bold text-xs uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Planned Architecture & System Design</span>
          </div>
          <div className="space-y-1.5 pl-1 text-xs">
            {project.plannedArchitecture.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 leading-relaxed">
                <span className="font-mono text-indigo-500 font-bold">[{idx + 1}]</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {project.mlWorkflow && (
        <div className={`p-3 rounded border ${
          isClassic
            ? 'bg-[#f4f4f4] border-[#a0a0a0] text-black'
            : 'bg-[#070e20] border-slate-800 text-slate-200'
        }`}>
          <div className="flex items-center gap-1.5 font-code font-bold text-xs uppercase tracking-wider text-sky-600 dark:text-sky-400 mb-2">
            <GitBranch className="w-3.5 h-3.5" />
            <span>Machine Learning & Regression Workflow</span>
          </div>
          <div className="space-y-1.5 pl-1 text-xs">
            {project.mlWorkflow.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 leading-relaxed">
                <span className="font-mono text-sky-500 font-bold">[{idx + 1}]</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {project.awsDeploymentExperience && (
        <div className={`p-3 rounded border ${
          isClassic
            ? 'bg-[#f4f4f4] border-[#a0a0a0] text-black'
            : 'bg-[#070e20] border-slate-800 text-slate-200'
        }`}>
          <div className="flex items-center gap-1.5 font-code font-bold text-xs uppercase tracking-wider text-amber-600 dark:text-amber-400 mb-2">
            <Cloud className="w-3.5 h-3.5" />
            <span>AWS Cloud Deployment Experience</span>
          </div>
          <div className="space-y-1.5 pl-1 text-xs">
            {project.awsDeploymentExperience.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2 leading-relaxed">
                <span className="font-mono text-amber-500 font-bold">•</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Model & Evaluation Information */}
      {project.modelEvaluation && (
        <div className={`p-3 rounded border ${
          isClassic
            ? 'bg-[#f4f4f4] border-[#a0a0a0] text-black'
            : 'bg-[#070e20] border-slate-800 text-slate-200'
        }`}>
          <div className="flex items-center gap-1.5 font-code font-bold text-xs uppercase tracking-wider text-violet-600 dark:text-violet-400 mb-2">
            <Cpu className="w-3.5 h-3.5" />
            <span>Model Architectures, Cross-Validation & Metrics</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
            <div className={`p-2 rounded border ${isClassic ? 'bg-white border-gray-300' : 'bg-[#0c142e] border-slate-800'}`}>
              <div className="font-code font-semibold opacity-70 mb-0.5">Model Architecture:</div>
              <div>{project.modelEvaluation.architectures}</div>
            </div>
            <div className={`p-2 rounded border ${isClassic ? 'bg-white border-gray-300' : 'bg-[#0c142e] border-slate-800'}`}>
              <div className="font-code font-semibold opacity-70 mb-0.5">Evaluation Strategy:</div>
              <div>{project.modelEvaluation.evaluationStrategy}</div>
            </div>
            <div className={`p-2 rounded border ${isClassic ? 'bg-white border-gray-300' : 'bg-[#0c142e] border-slate-800'}`}>
              <div className="font-code font-semibold opacity-70 mb-0.5">Evaluation Metrics:</div>
              <div>{project.modelEvaluation.metrics}</div>
            </div>
            <div className={`p-2 rounded border ${isClassic ? 'bg-white border-gray-300' : 'bg-[#0c142e] border-slate-800'}`}>
              <div className="font-code font-semibold opacity-70 mb-0.5">Model Explainability:</div>
              <div>{project.modelEvaluation.interpretability}</div>
            </div>
          </div>
        </div>
      )}

      {/* Applied Technologies */}
      <div className={`p-3 rounded border ${
        isClassic
          ? 'bg-[#f4f4f4] border-[#a0a0a0] text-black'
          : 'bg-[#070e20] border-slate-800 text-slate-200'
      }`}>
        <div className="flex items-center gap-1.5 font-code font-bold text-xs uppercase tracking-wider opacity-75 mb-2">
          <Code2 className="w-3.5 h-3.5" />
          <span>Technologies & Frameworks</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className={`text-xs font-code px-2 py-0.5 rounded border ${
                isClassic
                  ? 'bg-white text-black border-[#808080]'
                  : 'bg-[#0f1733] text-cyan-200 border-cyan-500/30'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Honest Verification & Integrity Note */}
      <div className={`p-2.5 rounded border text-[11px] leading-relaxed flex items-start gap-2 ${
        isClassic
          ? 'bg-[#e8e8e8] border-[#a0a0a0] text-gray-800'
          : 'bg-[#0a1126] border-slate-800 text-slate-400'
      }`}>
        <Terminal className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 opacity-70" />
        <div>
          <strong className="font-code opacity-90">Verification Note: </strong>
          <span>{project.verificationNotes}</span>
        </div>
      </div>
    </div>
  );
}
