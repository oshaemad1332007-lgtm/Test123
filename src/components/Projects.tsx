import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FolderGit2, 
  ExternalLink, 
  Github, 
  Sparkles, 
  Eye, 
  Layers 
} from 'lucide-react';
import { Language, Theme, Project, ProjectCategory } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { PROJECTS_DATA } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  lang: Language;
  theme: Theme;
}

export const Projects: React.FC<ProjectsProps> = ({ lang, theme }) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const t = UI_TRANSLATIONS.projects;
  const isDark = theme === 'dark';

  const categories: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: t.tabs.all[lang] },
    { id: 'react', label: t.tabs.react[lang] },
    { id: 'fullstack', label: t.tabs.fullstack[lang] },
    { id: 'ui-tools', label: t.tabs.uiTools[lang] },
  ];

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (selectedCategory === 'all') return true;
    return project.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-20 relative bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-500 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>{t.sectionTitle[lang]}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-['Alexandria',sans-serif] tracking-tight text-slate-900 dark:text-slate-100">
            {t.sectionSubtitle[lang]}
          </h2>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-slate-100 dark:bg-[#0f172a] border border-slate-200 dark:border-purple-500/25 backdrop-blur-md">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer font-mono ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-950/40'
                      : 'text-slate-600 dark:text-slate-400 hover:text-cyan-400 hover:bg-slate-200/60 dark:hover:bg-[#1e293b]'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className={`group rounded-3xl border overflow-hidden flex flex-col justify-between shadow-md hover:shadow-2xl transition-all duration-300 ${
                  isDark 
                    ? 'bg-[#0f172a]/80 border-purple-500/20 hover:border-cyan-500/50 hover:shadow-cyan-950/40 backdrop-blur-xl' 
                    : 'bg-white border-slate-200/90 hover:border-cyan-500/40'
                }`}
              >
                {/* Image Container with Hover Overlay */}
                <div className="relative aspect-video w-full overflow-hidden bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title[lang]}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="sleek-tech-pill">
                      {project.category}
                    </span>

                    {project.featured && (
                      <span className="flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-bold bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-sm font-mono">
                        <Sparkles className="w-3 h-3" />
                        <span>Featured</span>
                      </span>
                    )}
                  </div>

                  {/* Quick View Button Hover Overlay */}
                  <div className="absolute inset-0 bg-[#020617]/70 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-xs font-bold shadow-lg hover:from-purple-500 hover:to-cyan-400 transition-all cursor-pointer font-mono"
                    >
                      <Eye className="w-4 h-4" />
                      <span>{t.viewDetails[lang]}</span>
                    </button>
                  </div>
                </div>

                {/* Project Info Body */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 
                      onClick={() => setSelectedProject(project)}
                      className="font-bold text-base sm:text-lg font-['Alexandria',sans-serif] text-slate-900 dark:text-slate-100 group-hover:text-cyan-400 transition-colors cursor-pointer"
                    >
                      {project.title[lang]}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-2 leading-relaxed">
                      {project.shortDesc[lang]}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="sleek-tech-pill"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Card Bottom Links */}
                  <div className="pt-4 border-t border-slate-200 dark:border-purple-500/20 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-semibold text-cyan-400 hover:underline cursor-pointer font-mono flex items-center gap-1"
                    >
                      <span>{t.viewDetails[lang]}</span>
                      <span>&rarr;</span>
                    </button>

                    <div className="flex items-center gap-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-xl text-slate-400 hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-[#020617] border border-transparent dark:hover:border-purple-500/30 transition-colors"
                        title={t.sourceCode[lang]}
                      >
                        <Github className="w-4 h-4" />
                      </a>

                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs font-bold transition-colors font-mono"
                      >
                        <span>{t.liveDemo[lang]}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        lang={lang}
        theme={theme}
      />
    </section>
  );
};
