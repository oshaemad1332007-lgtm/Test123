import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Language, Theme } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  lang: Language;
  theme: Theme;
}

export const Footer: React.FC<FooterProps> = ({ lang, theme }) => {
  const t = UI_TRANSLATIONS.footer;
  const isDark = theme === 'dark';

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className={`relative border-t transition-colors ${
      isDark ? 'bg-[#020617] border-purple-500/20 text-slate-400' : 'bg-white border-slate-200 text-slate-600'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Bio */}
          <div className="flex flex-col items-center md:items-start text-center md:text-start space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-base font-['Alexandria',sans-serif] text-slate-900 dark:text-slate-100">
                {PERSONAL_INFO.name[lang]}
              </span>
              <span className="text-xs text-cyan-400 font-mono">• &lt;{PERSONAL_INFO.title[lang]} /&gt;</span>
            </div>
            <p className="text-xs text-slate-500">
              {PERSONAL_INFO.university[lang]}
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#0f172a] text-slate-700 dark:text-slate-300 hover:text-cyan-400 border border-slate-200 dark:border-purple-500/20 hover:border-cyan-500/40 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#0f172a] text-slate-700 dark:text-slate-300 hover:text-purple-400 border border-slate-200 dark:border-purple-500/20 hover:border-purple-500/40 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-[#0f172a] text-slate-700 dark:text-slate-300 hover:text-cyan-400 border border-slate-200 dark:border-purple-500/20 hover:border-cyan-500/40 transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 dark:bg-[#0f172a] hover:bg-gradient-to-r hover:from-purple-600 hover:to-cyan-500 hover:text-white text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-purple-500/25 hover:border-transparent text-xs font-bold font-mono transition-all shadow-sm cursor-pointer"
          >
            <span>{t.backToTop[lang]}</span>
            <ArrowUp className="w-4 h-4" />
          </button>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 mt-8 border-t border-slate-200/60 dark:border-purple-500/10 text-center text-xs flex flex-col sm:flex-row items-center justify-center gap-1.5 text-slate-500 font-mono">
          <span>{t.rights[lang]} {new Date().getFullYear()} {PERSONAL_INFO.name[lang]}.</span>
          <span className="hidden sm:inline">•</span>
          <span className="flex items-center gap-1">
            {t.madeWith[lang]} <span className="font-semibold text-cyan-400">React, TypeScript & Tailwind CSS</span>
          </span>
        </div>
      </div>
    </footer>
  );
};
