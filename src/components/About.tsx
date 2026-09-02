import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Code, 
  Zap, 
  Users, 
  CheckCircle2, 
  Sparkles, 
  Layers, 
  Cpu 
} from 'lucide-react';
import { Language, Theme } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { PERSONAL_INFO } from '../data/portfolioData';

interface AboutProps {
  lang: Language;
  theme: Theme;
}

export const About: React.FC<AboutProps> = ({ lang, theme }) => {
  const t = UI_TRANSLATIONS.about;
  const isDark = theme === 'dark';

  const keyCards = [
    {
      icon: GraduationCap,
      title: t.keyPoints.university.title[lang],
      desc: t.keyPoints.university.desc[lang],
      color: 'from-cyan-500 to-blue-600',
      border: 'border-cyan-500/30'
    },
    {
      icon: Code,
      title: t.keyPoints.cleanCode.title[lang],
      desc: t.keyPoints.cleanCode.desc[lang],
      color: 'from-purple-500 to-indigo-600',
      border: 'border-purple-500/30'
    },
    {
      icon: Zap,
      title: t.keyPoints.performance.title[lang],
      desc: t.keyPoints.performance.desc[lang],
      color: 'from-amber-500 to-orange-600',
      border: 'border-amber-500/30'
    },
    {
      icon: Users,
      title: t.keyPoints.collaboration.title[lang],
      desc: t.keyPoints.collaboration.desc[lang],
      color: 'from-emerald-500 to-teal-600',
      border: 'border-emerald-500/30'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-500 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.sectionTitle[lang]}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-['Alexandria',sans-serif] tracking-tight text-slate-900 dark:text-slate-100">
            {t.heading[lang]}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
            {t.sectionSubtitle[lang]}
          </p>
        </div>

        {/* Main Grid: Story & Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Detailed Story (6 cols) */}
          <div className="lg:col-span-6 space-y-6">
            <div className={`p-6 sm:p-8 rounded-2xl border shadow-md space-y-4 ${
              isDark 
                ? 'bg-[#0f172a]/80 border-purple-500/20 backdrop-blur-xl' 
                : 'bg-white border-slate-200/80'
            }`}>
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 border border-purple-500/30">
                  <Cpu className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h3 className="font-bold text-lg font-['Alexandria',sans-serif] text-slate-900 dark:text-slate-100">
                    {PERSONAL_INFO.name[lang]}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">
                    &lt;{PERSONAL_INFO.title[lang]} /&gt;
                  </p>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {t.paragraph1[lang]}
              </p>

              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {t.paragraph2[lang]}
              </p>

              {/* Opportunity Callout Banner */}
              <div className="p-4 rounded-xl border border-dashed border-cyan-500/40 bg-cyan-500/5 flex items-center justify-between gap-3">
                <div>
                  <h4 className="text-xs font-bold font-mono text-cyan-400">
                    {lang === 'ar' ? 'متاح للفرص والمشاريع' : 'Open for Opportunities'}
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {lang === 'ar' ? 'مستعد للعمل عن بُعد أو الانضمام لفرق تقنية طموحة' : 'Seeking remote frontend or software engineering roles.'}
                  </p>
                </div>
                <span className="w-3 h-3 rounded-full bg-cyan-400 animate-ping shrink-0" />
              </div>

              {/* Quick Checklist */}
              <div className="pt-4 border-t border-slate-200 dark:border-purple-500/20 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {[
                  lang === 'ar' ? 'تصميم واجهات متجاوبة 100%' : '100% Responsive Design',
                  lang === 'ar' ? 'معايير إتاحة الويب WCAG' : 'Web Accessibility (a11y)',
                  lang === 'ar' ? 'إدارة الحالة المتقدمة' : 'Advanced State Management',
                  lang === 'ar' ? 'هندسة الكود النظيف' : 'Modular Clean Architecture'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Key Pillars Cards (6 cols) */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {keyCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={idx}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                  className={`p-6 rounded-2xl border shadow-sm flex flex-col justify-between space-y-3 ${
                    isDark 
                      ? 'bg-[#0f172a]/60 border-purple-500/20 hover:border-cyan-500/40 backdrop-blur-xl' 
                      : 'bg-white border-slate-200/80 hover:border-cyan-500/40 hover:shadow-md'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-tr ${card.color} text-white flex items-center justify-center shadow-md`}>
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-bold text-sm sm:text-base font-['Alexandria',sans-serif] text-slate-900 dark:text-slate-100">
                      {card.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
