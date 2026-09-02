import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Award, ExternalLink, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';
import { Certificate, Language, Theme } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
  lang: Language;
  theme: Theme;
}

export const CertificateModal: React.FC<CertificateModalProps> = ({ 
  certificate, 
  onClose, 
  lang, 
  theme 
}) => {
  if (!certificate) return null;

  const t = UI_TRANSLATIONS;
  const isDark = theme === 'dark';

  return (
    <AnimatePresence>
      <div 
        id="certificate-modal-backdrop" 
        className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md"
        onClick={onClose}
      >
        <motion.div
          id="certificate-modal-card"
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          transition={{ duration: 0.2 }}
          className={`relative w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden border backdrop-blur-2xl ${
            isDark 
              ? 'bg-[#0f172a]/95 border-purple-500/30 text-slate-100 shadow-purple-950/50' 
              : 'bg-white border-slate-200 text-slate-900 shadow-2xl'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-purple-500/20">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <span className="text-xs sm:text-sm font-bold font-mono text-cyan-400 uppercase tracking-wider">
                {t.certificates.verifiedBadge[lang]}
              </span>
            </div>
            <button
              id="close-cert-modal-btn"
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-800/60 transition-colors cursor-pointer"
              aria-label="Close"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Certificate Image Frame */}
          <div className="relative aspect-video w-full bg-[#020617] overflow-hidden group">
            <img 
              src={certificate.image} 
              alt={certificate.title[lang]}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/90 via-transparent to-black/20" />
            
            {/* Overlay badge */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#020617]/80 backdrop-blur-md border border-cyan-500/40 text-cyan-300 text-xs font-mono">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                <span>{certificate.credentialId}</span>
              </div>
            </div>
          </div>

          {/* Certificate Info Body */}
          <div className="p-6 space-y-4">
            <div>
              <h3 className="text-lg sm:text-xl font-bold font-['Alexandria',sans-serif] text-slate-900 dark:text-slate-100">
                {certificate.title[lang]}
              </h3>
              <p className="text-sm font-semibold font-mono text-cyan-400 mt-1">
                {certificate.issuer[lang]}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 py-2 border-y border-slate-200 dark:border-purple-500/20 font-mono">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4 text-purple-400" />
                <span>{t.certificates.dateLabel[lang]} {certificate.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-cyan-400" />
                <span>{t.certificates.credentialIdLabel[lang]} {certificate.credentialId}</span>
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-2 font-mono">
                {lang === 'ar' ? 'المهارات المعتمدة في هذه الشهادة:' : 'Skills Validated in this Credential:'}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {certificate.skills.map((skill, index) => (
                  <span
                    key={index}
                    className="sleek-tech-pill"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex items-center justify-end gap-3">
              <a
                href={certificate.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95 font-mono"
              >
                <span>{t.certificates.verifyButton[lang]}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
