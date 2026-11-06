import React, { useState, useEffect, useRef } from 'react';
import {
  Cpu,
  Database,
  Layers,
  Activity,
  Cloud,
  Play,
  RotateCcw,
  Square,
  Check,
  ChevronRight,
  ChevronLeft,
  Terminal,
  Workflow,
  Info,
  CheckCircle2
} from 'lucide-react';
import { MISSION_CONTROL_STAGES } from '../data/portfolioData';

export default function MissionControl() {
  // A. Selected Stage (for inspection in the details panel, defaults to Stage 01 DATA)
  const [selectedStageIndex, setSelectedStageIndex] = useState(0);

  // B. Execution Status (IDLE | RUNNING | STOPPED | COMPLETED)
  const [executionStatus, setExecutionStatus] = useState('IDLE');

  // Currently executing stage index during simulation (null when not RUNNING)
  const [executingStageIndex, setExecutingStageIndex] = useState(null);

  // C. Completion Progress (array of completed stage indices)
  const [completedStages, setCompletedStages] = useState([]);

  // Active stage within-step progress percentage (0 - 100)
  const [stageProgress, setStageProgress] = useState(0);

  const stepTimerRef = useRef(null);
  const progressTimerRef = useRef(null);
  const stageButtonRefs = useRef([]);

  const totalStages = MISSION_CONTROL_STAGES.length;
  const currentSelectedStage = MISSION_CONTROL_STAGES[selectedStageIndex];

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      clearTimers();
    };
  }, []);

  const clearTimers = () => {
    if (stepTimerRef.current) clearTimeout(stepTimerRef.current);
    if (progressTimerRef.current) clearInterval(progressTimerRef.current);
    stepTimerRef.current = null;
    progressTimerRef.current = null;
  };

  // Helper for stage icon
  const getStageIcon = (id, className = "w-4 h-4") => {
    switch (id) {
      case 'DATA':
        return <Database className={className} />;
      case 'FEATURES':
        return <Layers className={className} />;
      case 'TRAIN':
        return <Cpu className={className} />;
      case 'TRACK':
        return <Activity className={className} />;
      case 'DEPLOY':
        return <Cloud className={className} />;
      default:
        return <Terminal className={className} />;
    }
  };

  // Run Mission Simulation Handler
  const handleRunMission = () => {
    if (executionStatus === 'RUNNING') return; // Prevent accidental duplicate executions

    // Check prefers-reduced-motion
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    clearTimers();

    if (prefersReducedMotion) {
      // Instant execution for reduced motion preference
      setCompletedStages([0, 1, 2, 3, 4]);
      setSelectedStageIndex(4);
      setExecutingStageIndex(null);
      setExecutionStatus('COMPLETED');
      setStageProgress(100);
      return;
    }

    let startStage = 0;
    let initialCompleted = [];

    // If restarting after full completion, start fresh from stage 0
    if (executionStatus === 'COMPLETED' || completedStages.length === totalStages) {
      setCompletedStages([]);
      initialCompleted = [];
      startStage = 0;
    } else if (executionStatus === 'STOPPED') {
      // If resuming after a stop, resume from the next uncompleted stage
      startStage = completedStages.length;
      initialCompleted = [...completedStages];
    } else {
      setCompletedStages([]);
      initialCompleted = [];
      startStage = 0;
    }

    setExecutionStatus('RUNNING');
    runStage(startStage, initialCompleted);
  };

  // Execute sequence step-by-step
  const runStage = (stageIdx, currentCompleted) => {
    setExecutingStageIndex(stageIdx);
    setSelectedStageIndex(stageIdx); // Synchronize inspected details with execution
    setStageProgress(0);

    const stageDuration = 2200;
    const progressInterval = 50;
    const increment = (progressInterval / stageDuration) * 100;

    let currentProgress = 0;
    progressTimerRef.current = setInterval(() => {
      currentProgress += increment;
      if (currentProgress >= 100) {
        clearInterval(progressTimerRef.current);
        setStageProgress(100);
      } else {
        setStageProgress(currentProgress);
      }
    }, progressInterval);

    stepTimerRef.current = setTimeout(() => {
      clearInterval(progressTimerRef.current);

      // Increment progress ONLY after stage completes successfully
      const nextCompleted = currentCompleted.includes(stageIdx)
        ? currentCompleted
        : [...currentCompleted, stageIdx];
      setCompletedStages(nextCompleted);

      const nextStage = stageIdx + 1;
      if (nextStage < totalStages) {
        runStage(nextStage, nextCompleted);
      } else {
        // All five stages finished
        setExecutionStatus('COMPLETED');
        setExecutingStageIndex(null);
        setStageProgress(100);
      }
    }, stageDuration);
  };

  // Stop Simulation predictably without marking unfinished stage as DONE
  const handleStopMission = () => {
    clearTimers();
    setExecutionStatus('STOPPED');
    setExecutingStageIndex(null);
    setStageProgress(0);
  };

  // Reset Simulation to initial clean state
  const handleResetMission = () => {
    clearTimers();
    setExecutionStatus('IDLE');
    setExecutingStageIndex(null);
    setCompletedStages([]);
    setSelectedStageIndex(0);
    setStageProgress(0);
  };

  // Manual Stage Selection (updates details panel without altering progress or marking ACTIVE)
  const handleSelectStage = (idx) => {
    if (executionStatus === 'RUNNING') {
      clearTimers();
      setExecutionStatus('STOPPED');
      setExecutingStageIndex(null);
      setStageProgress(0);
    }
    setSelectedStageIndex(idx);
  };

  // Keyboard navigation for tablist accessibility
  const handleKeyDown = (e, currentIndex) => {
    let targetIndex = null;
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
      e.preventDefault();
      targetIndex = (currentIndex + 1) % totalStages;
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
      e.preventDefault();
      targetIndex = (currentIndex - 1 + totalStages) % totalStages;
    } else if (e.key === 'Home') {
      e.preventDefault();
      targetIndex = 0;
    } else if (e.key === 'End') {
      e.preventDefault();
      targetIndex = totalStages - 1;
    }

    if (targetIndex !== null) {
      handleSelectStage(targetIndex);
      if (stageButtonRefs.current[targetIndex]) {
        stageButtonRefs.current[targetIndex].focus();
      }
    }
  };

  // Calculate synchronized overall progress percentage
  const overallProgressPercent =
    executionStatus === 'COMPLETED'
      ? 100
      : executionStatus === 'RUNNING' && executingStageIndex !== null
      ? ((completedStages.length + stageProgress / 100) / totalStages) * 100
      : (completedStages.length / totalStages) * 100;

  return (
    <section id="mission-control" className="py-10 md:py-14 relative bg-[#070b18] border-t border-b border-cyan-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Section Introduction & 2. Visible Interaction Hint */}
        <div className="max-w-3xl mb-5">
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-xs font-code text-cyan-300 uppercase tracking-widest mb-2">
            <Workflow className="w-3.5 h-3.5 text-cyan-400" />
            <span>Mission Control · Interactive Pipeline Explorer</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-1.5">
            Mission Control
          </h2>
          <p className="text-base sm:text-lg font-semibold text-cyan-300/90 mb-1.5 font-code">
            From raw data to deployable machine-learning applications.
          </p>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-3">
            Explore the engineering stages behind reproducible ML workflows—from preparing data and evaluating models to tracking experiments and packaging applications.
          </p>

          {/* 2. Small Visible Interaction Hint */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-cyan-950/50 border border-cyan-500/30 text-xs font-code text-cyan-200"
            role="note"
            aria-label="Interactive guide hint"
          >
            <span className="font-bold text-cyan-400 bg-cyan-500/20 px-1.5 py-0.5 rounded text-[10px] tracking-wider uppercase">
              TRY IT
            </span>
            <span>Select a stage or run the workflow.</span>
          </div>
        </div>

        {/* 3. Compact Mission Status & Progress Panel */}
        <div className="rounded-xl bg-[#0a1024] border border-cyan-500/20 p-3.5 sm:p-4 mb-3 shadow-lg">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            
            {/* Status, Selected Stage, and Progress Indicators */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-code">
              {/* Execution Status */}
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-cyan-950/80 text-cyan-300 border border-cyan-500/30 font-bold">
                <span
                  className={`w-2 h-2 rounded-full ${
                    executionStatus === 'RUNNING'
                      ? 'bg-cyan-400 animate-ping'
                      : executionStatus === 'COMPLETED'
                      ? 'bg-emerald-400'
                      : executionStatus === 'STOPPED'
                      ? 'bg-amber-400'
                      : 'bg-slate-400'
                  }`}
                />
                <span>STATUS: {executionStatus}</span>
              </span>

              {/* Selected Stage */}
              <span className="px-2.5 py-1 rounded bg-slate-900/90 text-slate-200 border border-slate-800">
                <span className="text-slate-400">SELECTED: </span>
                <strong className="text-cyan-300">{currentSelectedStage.short}</strong>
              </span>

              {/* Completion Progress Counter */}
              <span className="px-2.5 py-1 rounded bg-slate-900/90 text-slate-200 border border-slate-800 font-mono">
                <span className="text-slate-400">PROGRESS: </span>
                <strong className={completedStages.length === 5 ? 'text-emerald-400 font-bold' : 'text-slate-100'}>
                  {completedStages.length}/5
                </strong>
              </span>

              {/* Pipeline Flow (Desktop) */}
              <span className="hidden xl:inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-900/60 text-slate-400 border border-slate-800/80 text-[11px]">
                <span>FLOW:</span>
                <span className="text-slate-300 font-medium">DATA → FEATURES → TRAIN → TRACK → DEPLOY</span>
              </span>
            </div>

            {/* Run / Stop / Reset Action Controls */}
            <div className="flex items-center gap-2 flex-shrink-0">
              {executionStatus !== 'RUNNING' ? (
                <button
                  type="button"
                  onClick={handleRunMission}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg font-code text-xs sm:text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 shadow-md shadow-cyan-500/20 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
                  aria-label="Run automated ML workflow simulation"
                >
                  <Play className="w-3.5 h-3.5 fill-slate-950" />
                  <span>{executionStatus === 'COMPLETED' ? 'Run Again' : 'Run Mission'}</span>
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleStopMission}
                  className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg font-code text-xs sm:text-sm font-semibold text-amber-200 bg-amber-950/80 hover:bg-amber-900 border border-amber-500/40 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  aria-label="Stop running simulation"
                >
                  <Square className="w-3.5 h-3.5 fill-amber-300" />
                  <span>Stop</span>
                </button>
              )}

              {(executionStatus === 'STOPPED' || executionStatus === 'COMPLETED' || completedStages.length > 0) && (
                <button
                  type="button"
                  onClick={handleResetMission}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg font-code text-xs text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  aria-label="Reset simulation to initial state"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset</span>
                </button>
              )}
            </div>
          </div>

          {/* Progress Bar & Status Messaging */}
          <div className="mt-3 pt-2.5 border-t border-slate-800/80">
            <div className="flex items-center justify-between text-[11px] font-code text-slate-400 mb-1.5">
              <div aria-live="polite">
                {executionStatus === 'RUNNING' && executingStageIndex !== null ? (
                  <span className="text-cyan-300 flex items-center gap-1.5 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    Simulating Stage 0{executingStageIndex + 1}: {MISSION_CONTROL_STAGES[executingStageIndex].short} ({MISSION_CONTROL_STAGES[executingStageIndex].title})...
                  </span>
                ) : executionStatus === 'COMPLETED' ? (
                  <span className="text-emerald-300 flex items-center gap-1.5 font-semibold">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    Workflow walkthrough complete. All 5 stages finished (5/5 Done).
                  </span>
                ) : executionStatus === 'STOPPED' ? (
                  <span className="text-amber-300 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                    Simulation stopped at {completedStages.length}/5 stages completed. Select any stage to inspect or click &quot;Run Mission&quot;.
                  </span>
                ) : (
                  <span className="text-slate-400">
                    Interactive simulation · Select any stage to inspect, or click &quot;Run Mission&quot; to execute the pipeline.
                  </span>
                )}
              </div>
              <span className="font-mono text-slate-400 flex-shrink-0 ml-2">
                {completedStages.length}/5 Done
              </span>
            </div>

            {/* Workflow Progress Track */}
            <div className="w-full h-1.5 rounded-full bg-slate-900 border border-slate-800 overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-violet-500 transition-all duration-300 ease-out"
                style={{ width: `${overallProgressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* 4. Five Connected Stage Selectors */}
        <div className="mb-3" role="region" aria-label="Workflow Stage Selector">
          <div
            role="tablist"
            aria-label="5 Connected Stages of the ML Workflow"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5 relative"
          >
            {MISSION_CONTROL_STAGES.map((stage, idx) => {
              const isSelected = idx === selectedStageIndex;
              const isExecuting = executionStatus === 'RUNNING' && executingStageIndex === idx;
              const isFinished = completedStages.includes(idx);

              // Explicit Stage Indicators: READY, ACTIVE, or DONE
              let stateIndicatorText = 'READY';
              let stateBadgeClass = 'text-slate-400 bg-slate-900/60 border-slate-800';

              if (isExecuting) {
                stateIndicatorText = 'ACTIVE';
                stateBadgeClass = 'text-cyan-300 bg-cyan-950/90 border-cyan-500/50 font-bold animate-pulse';
              } else if (isFinished) {
                stateIndicatorText = 'DONE';
                stateBadgeClass = 'text-emerald-400 bg-emerald-950/70 border-emerald-500/40 font-bold';
              } else {
                stateIndicatorText = 'READY';
                stateBadgeClass = 'text-slate-400 bg-slate-900/60 border-slate-800';
              }

              return (
                <div key={stage.id} className="relative flex flex-col">
                  <button
                    ref={(el) => (stageButtonRefs.current[idx] = el)}
                    role="tab"
                    id={`tab-${stage.id}`}
                    aria-controls={`panel-${stage.id}`}
                    aria-selected={isSelected}
                    tabIndex={isSelected ? 0 : -1}
                    onClick={() => handleSelectStage(idx)}
                    onKeyDown={(e) => handleKeyDown(e, idx)}
                    className={`flex flex-col items-start p-3 sm:p-3.5 rounded-xl text-left border transition-all duration-150 w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                      isSelected
                        ? 'bg-cyan-950/70 border-cyan-400 text-white shadow-md shadow-cyan-950/60 ring-1 ring-cyan-400/50'
                        : isFinished
                        ? 'bg-[#091124] border-emerald-500/30 text-slate-200 hover:border-slate-700'
                        : 'bg-[#090f22] border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                    }`}
                  >
                    {/* Stage Header Line: Stage Number & State Indicator */}
                    <div className="flex items-center justify-between w-full mb-1.5">
                      <span className="text-[11px] font-code font-bold text-cyan-400">
                        STAGE {stage.number}
                      </span>
                      
                      <span className={`inline-flex items-center gap-1 text-[10px] font-code px-1.5 py-0.5 rounded border ${stateBadgeClass}`}>
                        {isFinished && <Check className="w-2.5 h-2.5 text-emerald-400" />}
                        <span>{stateIndicatorText}</span>
                      </span>
                    </div>

                    {/* Stage Name & Icon */}
                    <div className="text-sm font-code font-extrabold text-white mb-1.5 flex items-center justify-between w-full">
                      <span>{stage.short}</span>
                      <span className={isSelected ? 'text-cyan-400' : 'text-slate-400'}>
                        {getStageIcon(stage.id, "w-3.5 h-3.5")}
                      </span>
                    </div>

                    {/* Short Description (wraps naturally without awkward truncation) */}
                    <div className="text-xs text-slate-300 leading-snug">
                      {stage.shortDescription}
                    </div>

                    {/* Active Simulation Step Mini Progress */}
                    {isExecuting && (
                      <div className="w-full h-1 bg-slate-800 rounded-full mt-2.5 overflow-hidden">
                        <div
                          className="h-full bg-cyan-400 transition-all duration-75"
                          style={{ width: `${stageProgress}%` }}
                        />
                      </div>
                    )}
                  </button>

                  {/* Directional Connector Arrow (Desktop Only) */}
                  {idx < totalStages - 1 && (
                    <div
                      className="hidden lg:flex absolute -right-2 top-1/2 -translate-y-1/2 z-10 w-4 h-4 rounded-full bg-[#070b18] border border-cyan-500/30 items-center justify-center text-cyan-400 pointer-events-none"
                      aria-hidden="true"
                    >
                      <ChevronRight className="w-3 h-3" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* 5. One Details Panel Immediately Below the Stage Selectors */}
        <div
          role="tabpanel"
          id={`panel-${currentSelectedStage.id}`}
          aria-labelledby={`tab-${currentSelectedStage.id}`}
          className="rounded-xl bg-[#0a1126] border border-slate-800 p-4 sm:p-5 shadow-xl relative overflow-hidden"
        >
          {/* Subtle Ambient Glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-[70px] pointer-events-none" />

          {/* Panel Header: Stage number, Title, Subtitle, and Prev/Next Controls */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-3.5 mb-3.5 border-b border-slate-800 gap-3 relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-code font-bold uppercase tracking-widest text-cyan-400">
                  STAGE {currentSelectedStage.number} OF 05
                </span>
                <span className="text-slate-500">•</span>
                <span className="text-xs font-code text-slate-400">
                  {currentSelectedStage.subtitle}
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
                <span>{currentSelectedStage.short} — {currentSelectedStage.title}</span>
              </h3>
            </div>

            {/* Previous and Next Controls */}
            <div className="flex items-center gap-2 self-start sm:self-center">
              <button
                type="button"
                disabled={selectedStageIndex === 0}
                onClick={() => handleSelectStage(Math.max(0, selectedStageIndex - 1))}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-700 text-xs font-code text-slate-300 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-label="Go to previous workflow stage"
              >
                <ChevronLeft className="w-3.5 h-3.5" />
                <span>Prev</span>
              </button>

              <button
                type="button"
                disabled={selectedStageIndex === totalStages - 1}
                onClick={() => handleSelectStage(Math.min(totalStages - 1, selectedStageIndex + 1))}
                className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-cyan-500/40 bg-cyan-950/40 text-xs font-code text-cyan-300 hover:bg-cyan-900/60 disabled:opacity-30 disabled:cursor-not-allowed transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                aria-label="Go to next workflow stage"
              >
                <span>Next</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Compact Two-Column Details Layout on Desktop, Stacked on Mobile */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 relative z-10 mb-3.5">
            
            {/* Column 1: Core Purpose & Key Learning Outcome */}
            <div className="p-3.5 sm:p-4 rounded-lg bg-[#0e1730] border border-slate-800/90 flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-code uppercase tracking-wider text-cyan-400 mb-1 font-bold">
                  Core Purpose
                </div>
                <p className="text-sm text-slate-100 font-medium mb-3 leading-relaxed">
                  {currentSelectedStage.purpose}
                </p>

                <div className="text-[11px] font-code uppercase tracking-wider text-emerald-400 mb-1 font-bold">
                  Key Learning Outcome
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {currentSelectedStage.learningOutcome}
                </p>
              </div>
            </div>

            {/* Column 2: Practical Project Example & Applied Tools */}
            <div className="p-3.5 sm:p-4 rounded-lg bg-[#0e1730] border border-slate-800/90 flex flex-col justify-between">
              <div>
                <div className="text-[11px] font-code uppercase tracking-wider text-violet-400 mb-1 font-bold">
                  Practical Project Example
                </div>
                <p className="text-xs sm:text-sm text-slate-200 mb-3 leading-relaxed">
                  {currentSelectedStage.example}
                </p>

                <div className="text-[11px] font-code uppercase tracking-wider text-slate-400 mb-1.5 font-bold">
                  Tools & Technologies
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {currentSelectedStage.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2.5 py-0.5 rounded text-xs font-code bg-[#142044] text-cyan-300 border border-cyan-500/30 font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>

          {/* Simulated Terminal Command & Honest Simulation Disclaimer */}
          <div className="rounded-lg bg-[#070c1a] border border-slate-800/90 p-2.5 sm:p-3 font-code text-xs relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-2.5">
            <div className="flex items-center gap-2 overflow-x-auto">
              <span className="text-cyan-400 font-bold">$</span>
              <span className="text-slate-200 font-mono whitespace-nowrap">
                {currentSelectedStage.commandSimulation}
              </span>
            </div>

            <div className="text-[11px] text-slate-400 flex items-center gap-1.5 flex-shrink-0">
              <Info className="w-3.5 h-3.5 text-slate-400" />
              <span>SIMULATION: Browser-side demonstration · No model training or cloud deployment executed</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
