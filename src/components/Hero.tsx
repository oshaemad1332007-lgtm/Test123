import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, 
  ArrowLeft, 
  Download, 
  Send, 
  Sparkles, 
  Terminal, 
  CheckCircle2, 
  Code2, 
  Layers, 
  Flame 
} from 'lucide-react';
import { Language, Theme } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  lang: Language;
  theme: Theme;
  onOpenCVModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ lang, theme, onOpenCVModal }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const t = UI_TRANSLATIONS.hero;
  const isDark = theme === 'dark';
  const isAr = lang === 'ar';

  const roles = t.roles[lang];

  // Typing effect loop
  useEffect(() => {
    const fullText = roles[roleIndex % roles.length];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        setTypingSpeed(75);

        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1800);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        setTypingSpeed(40);

        if (currentText === '') {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, roleIndex, roles, typingSpeed]);

  const ArrowIcon = isAr ? ArrowLeft : ArrowRight;

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-24 pb-16 flex items-center justify-center overflow-hidden"
    >
      {/* Background ambient lighting orbs */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-cyan-500/15 blur-[120px] pointer-events-none -z-10 animate-pulse-glow"
        aria-hidden="true"
      />
      <div 
        className="absolute top-1/3 right-10 w-[350px] h-[350px] rounded-full bg-purple-600/15 blur-[100px] pointer-events-none -z-10"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & CTAs (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-start">
            
            {/* Availability Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold shadow-sm backdrop-blur-sm"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <span className="font-mono">{t.badge[lang]}</span>
            </motion.div>

            {/* Main Greeting & Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-2"
            >
              <p className="text-sm sm:text-base font-semibold text-cyan-400 tracking-wide font-['Alexandria',sans-serif]">
                {t.greeting[lang]}
              </p>
              
              <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black font-['Alexandria',sans-serif] tracking-tight leading-[1.15]">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-cyan-600 to-purple-600 dark:from-white dark:via-cyan-300 dark:to-purple-400">
                  {PERSONAL_INFO.name[lang]}
                </span>
              </h1>
            </motion.div>

            {/* Dynamic Typing Title */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center lg:justify-start gap-2 h-10 sm:h-12"
            >
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-slate-100 dark:bg-[#0f172a]/90 border border-slate-200 dark:border-purple-500/30 text-slate-800 dark:text-slate-200 text-sm sm:text-lg font-bold font-mono shadow-inner">
                <Terminal className="w-4 h-4 text-cyan-400 shrink-0" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  {currentText}
                </span>
                <span className="inline-block w-2 h-4 bg-cyan-400 animate-pulse ml-0.5" />
              </div>
            </motion.div>

            {/* Bio Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm sm:text-base text-slate-600 dark:text-slate-300 max-w-2xl leading-relaxed mx-auto lg:mx-0"
            >
              {t.bio[lang]}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3.5 pt-2"
            >
              <a
                href="#contact"
                id="hero-contact-btn"
                className="flex items-center gap-2.5 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-xs sm:text-sm shadow-lg shadow-purple-950/40 hover:shadow-cyan-500/30 transition-all active:scale-95 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>{t.ctaContact[lang]}</span>
              </a>

              <button
                id="hero-download-cv-btn"
                onClick={onOpenCVModal}
                className="flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-100 dark:bg-[#0f172a] hover:bg-slate-200 dark:hover:bg-[#1e293b] text-slate-800 dark:text-slate-200 font-bold text-xs sm:text-sm border border-slate-300 dark:border-purple-500/30 hover:border-cyan-500/40 shadow-sm transition-all active:scale-95 cursor-pointer font-mono"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>{t.ctaCV[lang]}</span>
              </button>

              <a
                href="#projects"
                id="hero-explore-projects-btn"
                className="flex items-center gap-1.5 px-4 py-3 rounded-xl text-slate-600 dark:text-slate-400 hover:text-cyan-400 dark:hover:text-cyan-300 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                <span>{t.ctaProjects[lang]}</span>
                <ArrowIcon className="w-4 h-4" />
              </a>
            </motion.div>

            {/* Quick Metrics Bar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="grid grid-cols-3 gap-3 pt-6 border-t border-slate-200 dark:border-purple-500/20 max-w-lg mx-auto lg:mx-0"
            >
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0f172a]/70 border border-slate-200/70 dark:border-purple-500/20 text-center">
                <span className="text-xl sm:text-2xl font-black font-mono text-cyan-400 glow-text">
                  {PERSONAL_INFO.stats.experienceYears}+
                </span>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  {t.statsExperience[lang]}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0f172a]/70 border border-slate-200/70 dark:border-purple-500/20 text-center">
                <span className="text-xl sm:text-2xl font-black font-mono text-purple-400 glow-text-purple">
                  {PERSONAL_INFO.stats.completedProjects}+
                </span>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  {t.statsProjects[lang]}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-[#0f172a]/70 border border-slate-200/70 dark:border-purple-500/20 text-center">
                <span className="text-xl sm:text-2xl font-black font-mono text-emerald-400">
                  100%
                </span>
                <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium mt-0.5">
                  {t.statsSatisfaction[lang]}
                </p>
              </div>
            </motion.div>

          </div>

          {/* Right Column: 3D-Tilt Avatar Card & Floating Tech Badges (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full max-w-[340px] sm:max-w-[380px]"
            >
              {/* Outer Neon Glow Halo */}
              <div 
                className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-500 opacity-40 blur-xl group-hover:opacity-80 transition duration-1000 group-hover:duration-200 animate-pulse-glow" 
              />

              {/* Main Avatar Card */}
              <div className={`relative rounded-3xl p-6 border shadow-2xl backdrop-blur-xl ${
                isDark 
                  ? 'bg-[#0f172a]/90 border-purple-500/30 shadow-cyan-950/60' 
                  : 'bg-white/90 border-slate-200 shadow-xl'
              }`}>
                
                {/* Visual Avatar Frame with dashed ring */}
                <div className="relative aspect-square w-full rounded-2xl overflow-hidden bg-gradient-to-tr from-[#020617] via-[#0f172a] to-cyan-950/50 p-1 flex items-center justify-center">
                  
                  {/* Avatar Illustration with Modern Tech Code Graphic */}
                  <div className="relative w-full h-full rounded-xl overflow-hidden bg-[#020617] flex flex-col items-center justify-center p-6 text-center">
                    
                    {/* Glowing Core Background */}
                    <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 via-purple-600/10 to-transparent" />
                    
                    {/* Modern Abstract Avatar Graphic with dashed accent ring */}
                    <div className="relative z-10 w-28 h-28 rounded-full bg-gradient-to-tr from-cyan-500 to-purple-600 p-[2px] shadow-lg shadow-cyan-500/30 mb-4 animate-float dashed-accent-ring">
                      <div className="w-full h-full rounded-full bg-[#0f172a] flex items-center justify-center border-2 border-cyan-400">
                        <Code2 className="w-12 h-12 text-cyan-400 glow-text" />
                      </div>
                    </div>

                    <div className="relative z-10 space-y-1">
                      <h3 className="text-xl font-bold font-['Alexandria',sans-serif] text-white">
                        {PERSONAL_INFO.name[lang]}
                      </h3>
                      <p className="text-xs font-mono text-cyan-400 glow-text">
                        &lt;Software Engineer /&gt;
                      </p>
                      <p className="text-[11px] text-slate-400">
                        Helwan University (FCAI)
                      </p>
                    </div>

                    {/* Verified Student Badge */}
                    <div className="relative z-10 mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-[11px] font-mono">
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Software Engineering Student</span>
                    </div>
                  </div>
                </div>

                {/* Floating Tech Pill 1: React 19 */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className={`absolute -top-4 -right-4 px-3.5 py-1.5 rounded-xl shadow-lg border backdrop-blur-md flex items-center gap-2 ${
                    isDark 
                      ? 'bg-[#0f172a]/95 border-cyan-500/40 text-cyan-300' 
                      : 'bg-white border-slate-200 text-slate-800'
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_#06b6d4]" />
                  <span className="text-xs font-bold font-mono">React 19</span>
                </motion.div>

                {/* Floating Tech Pill 2: TypeScript */}
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                  className={`absolute -bottom-4 -left-4 px-3.5 py-1.5 rounded-xl shadow-lg border backdrop-blur-md flex items-center gap-2 ${
                    isDark 
                      ? 'bg-[#0f172a]/95 border-purple-500/40 text-purple-300' 
                      : 'bg-white border-slate-200 text-slate-800'
                  }`}
                >
                  <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_8px_#8b5cf6]" />
                  <span className="text-xs font-bold font-mono">TypeScript</span>
                </motion.div>

                {/* Floating Tech Pill 3: Tailwind */}
                <motion.div
                  animate={{ x: [0, 6, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                  className={`hidden sm:flex absolute top-1/2 -left-8 px-3 py-1.5 rounded-xl shadow-lg border backdrop-blur-md items-center gap-2 ${
                    isDark 
                      ? 'bg-[#0f172a]/95 border-indigo-500/40 text-cyan-300' 
                      : 'bg-white border-slate-200 text-slate-800'
                  }`}
                >
                  <Flame className="w-3.5 h-3.5 text-cyan-400" />
                  <span className="text-xs font-bold font-mono">Tailwind CSS</span>
                </motion.div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};
