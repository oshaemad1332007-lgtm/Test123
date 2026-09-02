import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Wrench, 
  Search, 
  Code2, 
  Layers, 
  Cpu, 
  Sparkles, 
  Terminal, 
  Database, 
  GitBranch, 
  Palette, 
  Workflow, 
  Boxes 
} from 'lucide-react';
import { Language, Theme, SkillCategory } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { SKILLS_DATA } from '../data/portfolioData';

interface SkillsProps {
  lang: Language;
  theme: Theme;
}

export const Skills: React.FC<SkillsProps> = ({ lang, theme }) => {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const t = UI_TRANSLATIONS.skills;
  const isDark = theme === 'dark';

  const tabs: { id: SkillCategory; label: string }[] = [
    { id: 'all', label: t.tabs.all[lang] },
    { id: 'frontend', label: t.tabs.frontend[lang] },
    { id: 'languages', label: t.tabs.languages[lang] },
    { id: 'tools', label: t.tabs.tools[lang] },
    { id: 'core', label: t.tabs.core[lang] }
  ];

  const filteredSkills = SKILLS_DATA.filter((skill) => {
    const matchesCategory = activeCategory === 'all' || skill.category === activeCategory;
    const matchesSearch = skill.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-500 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Wrench className="w-3.5 h-3.5" />
            <span>{t.sectionTitle[lang]}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-['Alexandria',sans-serif] tracking-tight text-slate-900 dark:text-slate-100">
            {t.sectionSubtitle[lang]}
          </h2>
        </div>

        {/* Filter Controls & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-slate-100 dark:bg-[#0f172a] border border-slate-200 dark:border-purple-500/25 backdrop-blur-md">
            {tabs.map((tab) => {
              const isActive = activeCategory === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveCategory(tab.id)}
                  className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer font-mono ${
                    isActive
                      ? 'bg-gradient-to-r from-purple-600 to-cyan-500 text-white shadow-lg shadow-purple-950/40'
                      : 'text-slate-600 dark:text-slate-400 hover:text-cyan-400 hover:bg-slate-200/60 dark:hover:bg-[#1e293b]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 rtl:left-auto rtl:right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-cyan-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.searchPlaceholder[lang]}
              className={`w-full py-2.5 px-10 rounded-xl text-xs sm:text-sm border focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all font-mono ${
                isDark 
                  ? 'bg-[#0f172a] border-purple-500/25 text-slate-100 placeholder-slate-500 focus:border-cyan-500/50' 
                  : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
              }`}
            />
          </div>

        </div>

        {/* Skills Grid with Animated Progress */}
        <motion.div 
          layout 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          <AnimatePresence>
            {filteredSkills.map((skill) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className={`p-5 rounded-2xl border shadow-sm transition-all hover:shadow-md ${
                  isDark 
                    ? 'bg-[#0f172a]/70 border-purple-500/20 hover:border-cyan-500/40 backdrop-blur-xl' 
                    : 'bg-white border-slate-200 hover:border-cyan-500/40'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-sm shadow-inner border border-purple-500/20"
                      style={{ 
                        backgroundColor: `${skill.color}15`,
                        color: skill.color 
                      }}
                    >
                      <Code2 className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="font-bold text-sm text-slate-900 dark:text-slate-100 font-['Alexandria',sans-serif]">
                        {skill.name}
                      </h3>
                      <span className="text-[10px] text-slate-500 dark:text-slate-400 uppercase tracking-wide font-mono">
                        {skill.category}
                      </span>
                    </div>
                  </div>

                  {skill.badge && (
                    <span className="sleek-tech-pill">
                      {skill.badge}
                    </span>
                  )}
                </div>

                {/* Progress Level Bar */}
                <div className="space-y-1.5 pt-1">
                  <div className="flex justify-between text-xs font-mono">
                    <span className="text-slate-500 dark:text-slate-400">{t.proficiencyLevel[lang]}</span>
                    <span className="font-bold text-cyan-400 glow-text">{skill.level}%</span>
                  </div>

                  <div className="h-2 w-full rounded-full bg-slate-200 dark:bg-[#020617] overflow-hidden p-[1px] border border-slate-300 dark:border-purple-500/20">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                      className="h-full rounded-full bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredSkills.length === 0 && (
          <div className="text-center py-12 text-slate-500">
            <p className="text-sm">{lang === 'ar' ? 'لم يتم العثور على مهارات مطابقة للبحث' : 'No skills matching your search query'}</p>
          </div>
        )}

      </div>
    </section>
  );
};
