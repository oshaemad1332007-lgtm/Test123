import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, 
  Download, 
  Printer, 
  CheckCircle2, 
  Sparkles, 
  Briefcase, 
  GraduationCap, 
  Code2, 
  Award, 
  Mail, 
  Phone, 
  MapPin, 
  FileText 
} from 'lucide-react';
import { Language, Theme } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { PERSONAL_INFO, EDUCATION_DATA, SKILLS_DATA, PROJECTS_DATA, CERTIFICATES_DATA } from '../data/portfolioData';
import { generateResumePDF } from '../utils/pdfGenerator';
import confetti from 'canvas-confetti';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  theme: Theme;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose, lang, theme }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  const t = UI_TRANSLATIONS;
  const isDark = theme === 'dark';
  const isAr = lang === 'ar';

  const handleDownload = (pdfLang: Language) => {
    setIsDownloading(true);
    setDownloadSuccess(null);
    
    try {
      generateResumePDF(pdfLang);
      setDownloadSuccess(pdfLang === 'ar' ? 'تم تحميل النسخة العربية بنجاح!' : 'English CV downloaded successfully!');
      
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 }
      });

      setTimeout(() => {
        setIsDownloading(false);
      }, 800);
    } catch (error) {
      console.error('Failed to generate PDF:', error);
      setIsDownloading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        id="cv-modal-backdrop" 
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto"
        onClick={onClose}
      >
        <motion.div
          id="cv-modal-container"
          initial={{ opacity: 0, scale: 0.92, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.92, y: 20 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className={`relative w-full max-w-4xl max-h-[90vh] flex flex-col rounded-3xl shadow-2xl overflow-hidden border backdrop-blur-2xl ${
            isDark 
              ? 'bg-[#0f172a]/95 border-purple-500/30 text-slate-100 shadow-purple-950/50' 
              : 'bg-white border-slate-200 text-slate-900 shadow-xl'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Modal Header */}
          <div className={`flex items-center justify-between px-6 py-4 border-b ${
            isDark ? 'border-purple-500/20 bg-[#020617]/80' : 'border-slate-100 bg-slate-50/80'
          }`}>
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-tr from-purple-600 to-cyan-500 text-white shadow-md">
                <FileText className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold font-['Alexandria',sans-serif]">
                  {t.cvModal.title[lang]}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-mono">
                  {t.cvModal.subtitle[lang]}
                </p>
              </div>
            </div>

            <button
              id="close-cv-modal-btn"
              onClick={onClose}
              className="p-2 rounded-xl text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Action Toolbar */}
          <div className={`px-6 py-3 border-b flex flex-wrap items-center justify-between gap-3 ${
            isDark ? 'bg-[#0f172a] border-purple-500/20' : 'bg-slate-100/70 border-slate-200'
          }`}>
            <div className="flex items-center gap-2">
              <button
                id="download-en-cv-btn"
                onClick={() => handleDownload('en')}
                disabled={isDownloading}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 disabled:opacity-50 cursor-pointer font-mono"
              >
                <Download className="w-4 h-4" />
                <span>{t.cvModal.downloadPdfEn[lang]}</span>
              </button>

              <button
                id="download-ar-cv-btn"
                onClick={() => handleDownload('ar')}
                disabled={isDownloading}
                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 dark:bg-[#020617] dark:hover:bg-[#1e293b] text-cyan-300 font-bold text-xs sm:text-sm border border-cyan-500/30 transition-all active:scale-95 disabled:opacity-50 cursor-pointer font-mono"
              >
                <Download className="w-4 h-4" />
                <span>{t.cvModal.downloadPdfAr[lang]}</span>
              </button>
            </div>

            <button
              id="print-cv-btn"
              onClick={handlePrint}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 text-xs sm:text-sm transition-colors cursor-pointer font-mono"
            >
              <Printer className="w-4 h-4" />
              <span>{t.cvModal.printCv[lang]}</span>
            </button>
          </div>

          {/* Download Success Notice */}
          {downloadSuccess && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              className="px-6 py-2.5 bg-emerald-500/10 border-b border-emerald-500/30 text-emerald-400 text-xs sm:text-sm flex items-center gap-2 font-mono"
            >
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>{downloadSuccess}</span>
            </motion.div>
          )}

          {/* Interactive Resume Sheet View */}
          <div className="flex-1 overflow-y-auto p-4 sm:p-8 space-y-6">
            <div className={`p-6 sm:p-8 rounded-2xl border ${
              isDark ? 'bg-[#020617]/90 border-purple-500/20 shadow-inner' : 'bg-white border-slate-200 shadow-sm'
            }`}>
              
              {/* CV Top Bio */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-200 dark:border-purple-500/20 gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 font-['Alexandria',sans-serif]">
                      {PERSONAL_INFO.name[lang]}
                    </h1>
                    <span className="sleek-tech-pill">
                      FCAI Helwan
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-slate-700 dark:text-slate-300 mt-1 font-mono">
                    {PERSONAL_INFO.title[lang]}
                  </p>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5">
                    {PERSONAL_INFO.university[lang]}
                  </p>
                </div>

                <div className="flex flex-col gap-1.5 text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-mono">
                  <div className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{PERSONAL_INFO.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-purple-400" />
                    <span dir="ltr">{PERSONAL_INFO.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{PERSONAL_INFO.location[lang]}</span>
                  </div>
                </div>
              </div>

              {/* Summary Section */}
              <div className="py-5 border-b border-slate-200 dark:border-purple-500/20">
                <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4" />
                  <span>{isAr ? 'الملخص المهني' : 'Professional Summary'}</span>
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                  {t.hero.bio[lang]}
                </p>
              </div>

              {/* Education Section */}
              <div className="py-5 border-b border-slate-200 dark:border-purple-500/20">
                <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono flex items-center gap-2 mb-3">
                  <GraduationCap className="w-4 h-4" />
                  <span>{t.education.sectionTitle[lang]}</span>
                </h4>
                {EDUCATION_DATA.map(edu => (
                  <div key={edu.id} className="space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-1">
                      <h5 className="font-bold text-sm text-slate-900 dark:text-slate-100 font-['Alexandria',sans-serif]">{edu.degree[lang]}</h5>
                      <span className="text-xs text-purple-400 font-mono">{edu.period}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-cyan-400 font-medium font-mono">
                      {edu.faculty[lang]} — {edu.institution[lang]}
                    </p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">
                      {edu.description[lang]}
                    </p>
                    <div className="mt-2">
                      <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 font-mono">
                        {t.education.coursesLabel[lang]}{' '}
                      </span>
                      <span className="text-xs text-slate-600 dark:text-slate-400 font-mono">
                        {edu.relevantCourses[lang].join(' • ')}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Technical Skills */}
              <div className="py-5 border-b border-slate-200 dark:border-purple-500/20">
                <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono flex items-center gap-2 mb-3">
                  <Code2 className="w-4 h-4" />
                  <span>{t.skills.sectionTitle[lang]}</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-purple-500/20">
                    <span className="text-xs font-bold text-cyan-400 font-mono block mb-1">Frontend Stack</span>
                    <p className="text-xs text-slate-700 dark:text-slate-300">
                      React.js, TypeScript, Next.js, Tailwind CSS, JavaScript (ES6+), HTML5/CSS3, Motion, Zustand, Redux Toolkit
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-purple-500/20">
                    <span className="text-xs font-bold text-purple-400 font-mono block mb-1">Languages & Database</span>
                    <p className="text-xs text-slate-700 dark:text-slate-300">
                      TypeScript, JavaScript, C++, Python, SQL, PostgreSQL, RESTful APIs
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-purple-500/20">
                    <span className="text-xs font-bold text-cyan-400 font-mono block mb-1">Tools & Ecosystem</span>
                    <p className="text-xs text-slate-700 dark:text-slate-300">
                      Git, GitHub, Vite, Webpack, Postman, Figma to Code, Vercel, Netlify
                    </p>
                  </div>
                  <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-[#0f172a] border border-slate-200 dark:border-purple-500/20">
                    <span className="text-xs font-bold text-purple-400 font-mono block mb-1">Computer Science & Practices</span>
                    <p className="text-xs text-slate-700 dark:text-slate-300">
                      Data Structures & Algorithms, OOP, Clean Code Architecture, Responsive UI, Accessibility (a11y), SEO
                    </p>
                  </div>
                </div>
              </div>

              {/* Projects List */}
              <div className="py-5 border-b border-slate-200 dark:border-purple-500/20">
                <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono flex items-center gap-2 mb-3">
                  <Briefcase className="w-4 h-4" />
                  <span>{t.projects.sectionTitle[lang]}</span>
                </h4>
                <div className="space-y-4">
                  {PROJECTS_DATA.slice(0, 3).map(proj => (
                    <div key={proj.id} className="space-y-1">
                      <div className="flex flex-wrap items-center justify-between gap-1">
                        <h5 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100 font-['Alexandria',sans-serif]">
                          {proj.title[lang]}
                        </h5>
                        <div className="flex gap-1.5">
                          {proj.tags.map(tag => (
                            <span key={tag} className="sleek-tech-pill">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-slate-600 dark:text-slate-400">
                        {proj.shortDesc[lang]}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Certifications List */}
              <div className="pt-5">
                <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 font-mono flex items-center gap-2 mb-3">
                  <Award className="w-4 h-4" />
                  <span>{t.certificates.sectionTitle[lang]}</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
                  {CERTIFICATES_DATA.slice(0, 4).map(cert => (
                    <li key={cert.id} className="flex items-start gap-2">
                      <span className="text-cyan-400 mt-0.5">•</span>
                      <div>
                        <strong className="text-slate-800 dark:text-slate-200 font-['Alexandria',sans-serif]">{cert.title[lang]}</strong>
                        <span className="text-slate-500 font-mono"> — {cert.issuer[lang]} ({cert.date})</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
