import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon } from 'lucide-react';
import { WINDOWS_PROJECTS, SYSTEM_SPECS } from '../../data/windowsProjectsData';

export default function TerminalWindow({ onOpenProject }) {
  const [history, setHistory] = useState([
    {
      type: 'system',
      text: 'SUHAIL.SYS MS-DOS Prompt [Version 98.2.2026]\n(C) Copyright Suhail Shaik. All rights reserved.\n\nType "help" to display available commands.'
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (rawCmd) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) {
      setHistory((prev) => [...prev, { type: 'input', text: '' }]);
      return;
    }

    // Save to command history
    setCommandHistory((prev) => [...prev, trimmed]);
    setHistoryIndex(-1);

    const lower = trimmed.toLowerCase();

    // Clear command
    if (lower === 'clear' || lower === 'cls') {
      setHistory([]);
      return;
    }

    let response = '';

    if (lower === 'help') {
      response = `AVAILABLE COMMANDS:
  help               - Display list of supported commands
  projects           - List all three featured ML and engineering projects
  skills             - Display core technical capabilities and tools
  about              - Display profile and education info for Suhail Shaik
  open paimana       - Open PAIMANA AI infrastructure risk application window
  open internship    - Open Internship Intelligence scam detection window
  open house-price   - Open House Price Predictor AWS cloud window
  clear / cls        - Clear the terminal screen`;
    } else if (lower === 'projects') {
      response = WINDOWS_PROJECTS.map(
        (p, idx) =>
          `[${idx + 1}] ${p.name} (${p.status})\n    ${p.summary}\n    Repo: ${p.githubUrl}`
      ).join('\n\n');
    } else if (lower === 'skills') {
      response = `CORE COMPETENCIES & APPLIED TOOLS:
• Machine Learning: Scikit-learn, Feature Engineering, EDA, Cross-Validation, LightGBM, XGBoost, SHAP
• Experiment & Data MLOps: DVC (Data Version Control), MLflow (Metrics & Artifacts), Git/GitHub
• Backend & API: FastAPI, Flask, Pydantic v2, RESTful APIs
• Cloud & Containers: Docker, AWS Elastic Beanstalk, GitHub Actions CI/CD, AWS IAM
• Languages: Python, C, Java, SQL`;
    } else if (lower === 'about') {
      response = `ABOUT SUHAIL SHAIK:
• Name: Shaik Suhail
• Education: Computer Science Undergraduate at RGUKT Ongole
• Focus: Machine Learning, reproducible MLOps pipelines, containerization, and cloud deployment.
• Goal: Turning exploratory models into reproducible, containerized systems that can be tested and shipped.
• Profile: ${SYSTEM_SPECS.githubUrl}`;
    } else if (lower === 'open paimana') {
      onOpenProject('paimana');
      response = 'Launching PAIMANA AI window on desktop... [SUCCESS]';
    } else if (lower === 'open internship') {
      onOpenProject('internship');
      response = 'Launching Internship Intelligence window on desktop... [SUCCESS]';
    } else if (lower === 'open house-price' || lower === 'open houseprice') {
      onOpenProject('house-price');
      response = 'Launching House Price Predictor AWS window on desktop... [SUCCESS]';
    } else {
      response = `Bad command or file name: "${trimmed}". Type "help" to view valid commands.`;
    }

    setHistory((prev) => [
      ...prev,
      { type: 'input', text: trimmed },
      { type: 'output', text: response }
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
      setInputVal('');
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;
      const nextIdx = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
      setHistoryIndex(nextIdx);
      setInputVal(commandHistory[nextIdx]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;
      const nextIdx = historyIndex + 1;
      if (nextIdx >= commandHistory.length) {
        setHistoryIndex(-1);
        setInputVal('');
      } else {
        setHistoryIndex(nextIdx);
        setInputVal(commandHistory[nextIdx]);
      }
    }
  };

  return (
    <div
      className="h-full bg-black text-[#33ff33] font-mono text-xs sm:text-sm p-3 overflow-y-auto flex flex-col justify-between"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="space-y-2">
        {history.map((item, idx) => (
          <div key={idx} className="whitespace-pre-wrap leading-relaxed">
            {item.type === 'input' && (
              <div className="text-white flex items-center gap-1.5">
                <span className="text-[#33ff33]">C:\SUHAIL\PROJECTS&gt;</span>
                <span>{item.text}</span>
              </div>
            )}
            {item.type === 'output' && (
              <div className="text-[#33ff33] pl-2">{item.text}</div>
            )}
            {item.type === 'system' && (
              <div className="text-[#00ffff]">{item.text}</div>
            )}
          </div>
        ))}

        {/* Input prompt line */}
        <div className="flex items-center gap-1.5 text-white">
          <span className="text-[#33ff33] flex-shrink-0">C:\SUHAIL\PROJECTS&gt;</span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent text-white border-none outline-none font-mono text-xs sm:text-sm focus:ring-0 p-0"
            autoFocus
            spellCheck={false}
            autoCapitalize="off"
            autoComplete="off"
            aria-label="Terminal command prompt input"
          />
        </div>
        <div ref={bottomRef} />
      </div>

      <div className="mt-4 pt-2 border-t border-gray-800 text-[10px] text-gray-500 flex items-center justify-between">
        <span>Use &apos;help&apos; for commands · Arrow keys for history</span>
        <span>MS-DOS 98</span>
      </div>
    </div>
  );
}
