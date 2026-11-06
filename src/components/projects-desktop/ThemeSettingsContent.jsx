import React from 'react';
import { Palette, Check, Sparkles, Monitor, SunMedium } from 'lucide-react';

export default function ThemeSettingsContent({ activeTheme, setActiveTheme }) {
  const themes = [
    {
      id: 'classic',
      name: 'Windows Classic 98',
      description: 'Authentic 1998 nostalgic desktop with teal backdrop, 3D raised/sunken bevels, and navy gradient titlebars.',
      previewBg: '#008080',
      previewWindow: '#c0c0c0',
      previewAccent: '#000080'
    },
    {
      id: 'neon',
      name: 'Cyber Neon (Superpower OS)',
      description: 'Futuristic glowing cyan and violet palette aligned with the core Superpower OS interface.',
      previewBg: '#060913',
      previewWindow: '#0c1328',
      previewAccent: '#00f2fe'
    },
    {
      id: 'modern',
      name: 'Modern Dark Slate',
      description: 'Clean, elegant slate and sky theme designed for contemporary developer environments.',
      previewBg: '#0f172a',
      previewWindow: '#1e293b',
      previewAccent: '#38bdf8'
    }
  ];

  return (
    <div className="space-y-4 text-xs sm:text-sm">
      <div className="flex items-center gap-2 pb-2 border-b border-gray-400 dark:border-slate-800">
        <Palette className="w-4 h-4 text-pink-500" />
        <h3 className="font-code font-bold">Display Properties — Theme Appearance</h3>
      </div>

      <p className="text-xs opacity-80 leading-relaxed">
        Select a visual theme for the SUHAIL.SYS project desktop. Changes apply immediately across all application windows, desktop surfaces, and taskbar controls.
      </p>

      <div className="grid grid-cols-1 gap-3">
        {themes.map((t) => {
          const isSelected = activeTheme === t.id;
          return (
            <button
              key={t.id}
              type="button"
              onClick={() => setActiveTheme(t.id)}
              className={`p-3 rounded-lg border text-left transition-all flex items-start gap-3 ${
                isSelected
                  ? 'border-cyan-400 bg-cyan-950/40 ring-1 ring-cyan-400'
                  : 'border-gray-300 dark:border-slate-800 hover:border-gray-400 dark:hover:border-slate-700 bg-white/5'
              }`}
            >
              {/* Preview swatch */}
              <div
                className="w-12 h-12 rounded border border-gray-600 flex-shrink-0 flex flex-col overflow-hidden shadow-inner"
                style={{ backgroundColor: t.previewBg }}
              >
                <div
                  className="h-3 w-full"
                  style={{ backgroundColor: t.previewAccent }}
                />
                <div
                  className="flex-1 m-1 rounded-sm"
                  style={{ backgroundColor: t.previewWindow }}
                />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-code font-bold text-sm">
                    {t.name}
                  </span>
                  {isSelected && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-code px-1.5 py-0.5 rounded bg-cyan-500/20 text-cyan-400 border border-cyan-500/30">
                      <Check className="w-3 h-3" />
                      <span>Active</span>
                    </span>
                  )}
                </div>
                <p className="text-xs opacity-75 leading-relaxed">
                  {t.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      <div className="pt-2 border-t border-gray-400 dark:border-slate-800 text-[11px] opacity-75 font-code">
        Accessibility Note: All three themes preserve color contrast standards and respect prefers-reduced-motion settings.
      </div>
    </div>
  );
}
