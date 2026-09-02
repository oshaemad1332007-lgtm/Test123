import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Award, 
  ExternalLink, 
  Eye, 
  Calendar, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles 
} from 'lucide-react';
import { Language, Theme, Certificate } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { CERTIFICATES_DATA } from '../data/portfolioData';
import { CertificateModal } from './CertificateModal';

interface CertificatesProps {
  lang: Language;
  theme: Theme;
}

export const Certificates: React.FC<CertificatesProps> = ({ lang, theme }) => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);

  const t = UI_TRANSLATIONS.certificates;
  const isDark = theme === 'dark';

  return (
    <section id="certificates" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-500 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Award className="w-3.5 h-3.5" />
            <span>{t.sectionTitle[lang]}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-['Alexandria',sans-serif] tracking-tight text-slate-900 dark:text-slate-100">
            {t.sectionSubtitle[lang]}
          </h2>
        </div>

        {/* Certificate Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATES_DATA.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className={`rounded-3xl border overflow-hidden flex flex-col justify-between shadow-md transition-all backdrop-blur-xl ${
                isDark 
                  ? 'bg-[#0f172a]/80 border-purple-500/20 hover:border-cyan-500/40 hover:shadow-cyan-950/30' 
                  : 'bg-white border-slate-200 hover:border-cyan-500/40 hover:shadow-lg'
              }`}
            >
              {/* Image Frame */}
              <div 
                className="relative aspect-video w-full overflow-hidden bg-[#020617] cursor-pointer group"
                onClick={() => setSelectedCert(cert)}
              >
                <img
                  src={cert.image}
                  alt={cert.title[lang]}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#020617]/50 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-500 text-white text-xs font-bold shadow-lg font-mono">
                    <Eye className="w-4 h-4" />
                    <span>{t.previewButton[lang]}</span>
                  </span>
                </div>

                {/* Verified Ribbon */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#020617]/80 backdrop-blur-md border border-cyan-500/30 text-cyan-300 text-[11px] font-mono">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                  <span>{cert.date}</span>
                </div>
              </div>

              {/* Certificate Content */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <h3 
                    onClick={() => setSelectedCert(cert)}
                    className="font-bold text-sm sm:text-base font-['Alexandria',sans-serif] text-slate-900 dark:text-slate-100 hover:text-cyan-400 transition-colors cursor-pointer"
                  >
                    {cert.title[lang]}
                  </h3>
                  <p className="text-xs text-cyan-400 font-mono font-medium">
                    {cert.issuer[lang]}
                  </p>
                </div>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-1.5">
                  {cert.skills.slice(0, 3).map((skill, index) => (
                    <span
                      key={index}
                      className="sleek-tech-pill"
                    >
                      {skill}
                    </span>
                  ))}
                  {cert.skills.length > 3 && (
                    <span className="sleek-tech-pill-purple">
                      +{cert.skills.length - 3}
                    </span>
                  )}
                </div>

                {/* Bottom Actions */}
                <div className="pt-3 border-t border-slate-200 dark:border-purple-500/20 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedCert(cert)}
                    className="text-xs font-semibold text-slate-400 hover:text-cyan-400 cursor-pointer font-mono"
                  >
                    {t.previewButton[lang]}
                  </button>

                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-bold text-cyan-400 hover:underline font-mono"
                  >
                    <span>{t.verifyButton[lang]}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Certificate Modal */}
      <CertificateModal
        certificate={selectedCert}
        onClose={() => setSelectedCert(null)}
        lang={lang}
        theme={theme}
      />
    </section>
  );
};
