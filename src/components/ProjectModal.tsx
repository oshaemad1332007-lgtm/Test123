import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, Sparkles, CheckCircle2, Layers } from 'lucide-react';
import { Project, Language, Theme } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  lang: Language;
  theme: Theme;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  lang,
  theme
}) => {
  if (!project) return null;

  const t = UI_TRANSLATIONS;
  const isDark = theme === 'dark';

  return (
    <AnimatePresence>
      <div
        id="project-modal-backdrop"
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          id="project-modal-container"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.25 }}
          className={`relative w-full max-w-3xl rounded-3xl shadow-2xl overflow-hidden border my-auto backdrop-blur-2xl ${
            isDark
              ? 'bg-[#0f172a]/95 border-purple-500/30 text-slate-100 shadow-purple-950/50'
              : 'bg-white border-slate-200 text-slate-900 shadow-2xl'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-purple-500/20">
            <div className="flex items-center gap-2">
              <span className="sleek-tech-pill">
                {project.category}
              </span>
              {project.metrics && (
                <span className="hidden sm:inline-flex items-center gap-1 text-xs text-cyan-400 font-mono font-medium">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{project.metrics[lang]}</span>
                </span>
              )}
            </div>

            <button
              id="close-project-modal-btn"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Project Banner Image */}
          <div className="relative aspect-video w-full overflow-hidden bg-[#020617]">
            <img
              src={project.image}
              alt={project.title[lang]}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent" />
            
            <div className="absolute bottom-4 left-6 right-6">
              <h2 className="text-xl sm:text-2xl font-bold font-['Alexandria',sans-serif] text-white drop-shadow-md">
                {project.title[lang]}
              </h2>
            </div>
          </div>

          {/* Modal Body Content */}
          <div className="p-6 space-y-5">
            {/* Description */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono mb-2">
                {lang === 'ar' ? 'نبذة عن المشروع والهندسة المعمارية' : 'About & Architecture'}
              </h4>
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {project.fullDesc[lang]}
              </p>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono mb-2 flex items-center gap-1.5">
                <Layers className="w-4 h-4" />
                <span>{lang === 'ar' ? 'التقنيات والمكتبات المستخدمة' : 'Technologies & Libraries'}</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="sleek-tech-pill"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Highlights */}
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 font-mono mb-2">
                {t.projects.keyHighlights[lang]}
              </h4>
              <ul className="space-y-2">
                {project.highlights[lang].map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Actions Bar */}
            <div className="pt-3 border-t border-slate-200 dark:border-purple-500/20 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 font-mono"
                >
                  <span>{t.projects.liveDemo[lang]}</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-100 dark:bg-[#020617] hover:bg-slate-200 dark:hover:bg-[#1e293b] text-slate-800 dark:text-slate-200 font-bold text-xs sm:text-sm border border-slate-200 dark:border-purple-500/30 transition-all active:scale-95 font-mono"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>{t.projects.sourceCode[lang]}</span>
                </a>
              </div>

              <button
                onClick={onClose}
                className="px-4 py-2 text-xs sm:text-sm text-slate-400 hover:text-cyan-400 transition-colors font-mono cursor-pointer"
              >
                {t.projects.modalClose[lang]}
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
