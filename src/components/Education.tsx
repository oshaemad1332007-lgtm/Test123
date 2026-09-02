import React from 'react';
import { motion } from 'motion/react';
import { 
  GraduationCap, 
  Calendar, 
  MapPin, 
  BookOpen, 
  Award, 
  Sparkles, 
  CheckCircle2 
} from 'lucide-react';
import { Language, Theme } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { EDUCATION_DATA } from '../data/portfolioData';

interface EducationProps {
  lang: Language;
  theme: Theme;
}

export const Education: React.FC<EducationProps> = ({ lang, theme }) => {
  const t = UI_TRANSLATIONS.education;
  const isDark = theme === 'dark';

  return (
    <section id="education" className="py-20 relative bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-500 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>{t.sectionTitle[lang]}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-['Alexandria',sans-serif] tracking-tight text-slate-900 dark:text-slate-100">
            {t.sectionSubtitle[lang]}
          </h2>
        </div>

        {/* Education Timeline */}
        <div className="max-w-4xl mx-auto space-y-8">
          {EDUCATION_DATA.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative p-6 sm:p-8 rounded-3xl border shadow-lg overflow-hidden backdrop-blur-xl ${
                isDark 
                  ? 'bg-[#0f172a]/85 border-purple-500/25 shadow-purple-950/20' 
                  : 'bg-white border-slate-200/90 shadow-md'
              }`}
            >
              {/* Glowing Top Edge */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-purple-500 via-cyan-400 to-indigo-500" />

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-purple-500/20">
                <div className="flex items-start gap-4">
                  <div className="p-3.5 rounded-2xl bg-gradient-to-tr from-purple-600 to-cyan-500 text-white shadow-md shrink-0">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h3 className="text-lg sm:text-xl font-bold font-['Alexandria',sans-serif] text-slate-900 dark:text-slate-100">
                        {item.degree[lang]}
                      </h3>
                      <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-mono">
                        {item.status[lang]}
                      </span>
                    </div>

                    <p className="text-sm font-semibold text-cyan-400 mt-1">
                      {item.faculty[lang]}
                    </p>
                    <p className="text-xs text-slate-400">
                      {item.institution[lang]}
                    </p>
                  </div>
                </div>

                <div className="flex md:flex-col items-center md:items-end gap-2 text-xs font-mono text-slate-500 dark:text-slate-400 shrink-0">
                  <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-100 dark:bg-[#020617] border border-slate-200 dark:border-purple-500/30 text-cyan-400">
                    <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.period}</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-400">
                    <MapPin className="w-3.5 h-3.5 text-purple-400" />
                    <span>Cairo, Egypt</span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="py-5 space-y-4">
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {item.description[lang]}
                </p>

                {/* Relevant Coursework */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-1.5 font-mono">
                    <BookOpen className="w-4 h-4 text-purple-400" />
                    <span>{t.coursesLabel[lang]}</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.relevantCourses[lang].map((course, idx) => (
                      <span
                        key={idx}
                        className="sleek-tech-pill"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Academic Highlights */}
                <div className="space-y-2 pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-purple-400 flex items-center gap-1.5 font-mono">
                    <Award className="w-4 h-4 text-cyan-400" />
                    <span>{t.achievementsLabel[lang]}</span>
                  </h4>
                  <ul className="space-y-2">
                    {item.highlights[lang].map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
