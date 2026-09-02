import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Copy, 
  ExternalLink, 
  Github, 
  Linkedin, 
  MessageSquare, 
  Sparkles, 
  Clock, 
  AlertCircle 
} from 'lucide-react';
import { Language, Theme, ContactFormData } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { PERSONAL_INFO } from '../data/portfolioData';
import confetti from 'canvas-confetti';

interface ContactProps {
  lang: Language;
  theme: Theme;
}

export const Contact: React.FC<ContactProps> = ({ lang, theme }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const t = UI_TRANSLATIONS.contact;
  const isDark = theme === 'dark';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errorMessage) setErrorMessage(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage(t.errorMessage[lang]);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage(null);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.6 }
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 900);
  };

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(label);
    setTimeout(() => {
      setCopiedField(null);
    }, 2000);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-50/50 dark:bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-500 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider">
            <Send className="w-3.5 h-3.5" />
            <span>{t.sectionTitle[lang]}</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold font-['Alexandria',sans-serif] tracking-tight text-slate-900 dark:text-slate-100">
            {t.sectionSubtitle[lang]}
          </h2>
        </div>

        {/* Contact Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-6xl mx-auto">
          
          {/* Left Column: Direct Contact & Info Cards (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Quick WhatsApp Chat Banner */}
            <a
              href={PERSONAL_INFO.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between p-5 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md hover:shadow-emerald-500/20 hover:scale-[1.01] transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-white/20">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm font-['Alexandria',sans-serif]">
                    {t.quickChat[lang]}
                  </h4>
                  <p className="text-xs text-emerald-100">WhatsApp: +20 101 234 5678</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-emerald-100" />
            </a>

            {/* Direct Details Card */}
            <div className={`p-6 rounded-3xl border shadow-sm space-y-5 backdrop-blur-xl ${
              isDark ? 'bg-[#0f172a]/80 border-purple-500/20' : 'bg-white border-slate-200'
            }`}>
              <h4 className="font-bold text-base font-['Alexandria',sans-serif] text-slate-900 dark:text-slate-100">
                {t.contactDirect[lang]}
              </h4>

              {/* Email item */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-[#020617]/80 border border-slate-200/80 dark:border-purple-500/20">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/25 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="truncate">
                    <span className="text-[11px] text-slate-400 block font-mono">Email</span>
                    <a 
                      href={`mailto:${PERSONAL_INFO.email}`} 
                      className="text-xs font-semibold font-mono text-slate-800 dark:text-slate-200 hover:text-cyan-400 truncate block"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PERSONAL_INFO.email, 'email')}
                  className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-200 dark:hover:bg-[#1e293b] transition-colors shrink-0"
                  title="Copy email"
                >
                  {copiedField === 'email' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Phone item */}
              <div className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 dark:bg-[#020617]/80 border border-slate-200/80 dark:border-purple-500/20">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/25 shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] text-slate-400 block font-mono">Phone</span>
                    <a 
                      href={`tel:${PERSONAL_INFO.phone}`} 
                      className="text-xs font-semibold font-mono text-slate-800 dark:text-slate-200 hover:text-cyan-400"
                      dir="ltr"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(PERSONAL_INFO.phone, 'phone')}
                  className="p-2 rounded-lg text-slate-400 hover:text-cyan-400 hover:bg-slate-200 dark:hover:bg-[#1e293b] transition-colors shrink-0"
                  title="Copy phone"
                >
                  {copiedField === 'phone' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Location & Availability */}
              <div className="space-y-3 pt-2 text-xs text-slate-600 dark:text-slate-400">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 dark:text-slate-200 block font-mono">{t.locationTitle[lang]}:</strong>
                    <span>{t.locationValue[lang]}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Clock className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-800 dark:text-slate-200 block font-mono">{t.availabilityTitle[lang]}:</strong>
                    <span>{t.availabilityValue[lang]}</span>
                  </div>
                </div>
              </div>

              {/* Social links grid */}
              <div className="pt-4 border-t border-slate-200 dark:border-purple-500/20 flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 dark:bg-[#020617] text-slate-700 dark:text-slate-300 hover:text-cyan-400 border border-slate-200 dark:border-purple-500/25 hover:border-cyan-500/40 text-xs font-semibold font-mono transition-colors"
                >
                  <Github className="w-4 h-4 text-cyan-400" />
                  <span>GitHub</span>
                </a>

                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-100 dark:bg-[#020617] text-slate-700 dark:text-slate-300 hover:text-purple-400 border border-slate-200 dark:border-purple-500/25 hover:border-purple-500/40 text-xs font-semibold font-mono transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-purple-400" />
                  <span>LinkedIn</span>
                </a>
              </div>

            </div>

          </div>

          {/* Right Column: Contact Message Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className={`p-6 sm:p-8 rounded-3xl border shadow-xl backdrop-blur-xl ${
              isDark ? 'bg-[#0f172a]/80 border-purple-500/20' : 'bg-white border-slate-200'
            }`}>
              <h3 className="text-lg font-bold font-['Alexandria',sans-serif] text-slate-900 dark:text-slate-100 mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-cyan-400" />
                <span>{t.formTitle[lang]}</span>
              </h3>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3"
                >
                  <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold text-base text-emerald-400">
                    {lang === 'ar' ? 'شكراً لتواصلك!' : 'Thank you for reaching out!'}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-md mx-auto">
                    {t.successMessage[lang]}
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-4 py-2 rounded-xl bg-slate-800 text-white text-xs font-semibold mt-2 hover:bg-slate-700 transition-colors font-mono"
                  >
                    {lang === 'ar' ? 'إرسال رسالة أخرى' : 'Send Another Message'}
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  
                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        {t.nameLabel[lang]} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t.namePlaceholder[lang]}
                        className={`w-full p-3 rounded-xl text-xs sm:text-sm border focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all font-mono ${
                          isDark 
                            ? 'bg-[#020617] border-purple-500/25 text-slate-100 placeholder-slate-500 focus:border-cyan-500/60' 
                            : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                        }`}
                        required
                      />
                    </div>

                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                        {t.emailLabel[lang]} <span className="text-rose-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t.emailPlaceholder[lang]}
                        className={`w-full p-3 rounded-xl text-xs sm:text-sm border focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all font-mono ${
                          isDark 
                            ? 'bg-[#020617] border-purple-500/25 text-slate-100 placeholder-slate-500 focus:border-cyan-500/60' 
                            : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                        }`}
                        required
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {t.subjectLabel[lang]}
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={t.subjectPlaceholder[lang]}
                      className={`w-full p-3 rounded-xl text-xs sm:text-sm border focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all font-mono ${
                        isDark 
                          ? 'bg-[#020617] border-purple-500/25 text-slate-100 placeholder-slate-500 focus:border-cyan-500/60' 
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                      {t.messageLabel[lang]} <span className="text-rose-500">*</span>
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.messagePlaceholder[lang]}
                      className={`w-full p-3 rounded-xl text-xs sm:text-sm border focus:outline-none focus:ring-2 focus:ring-cyan-500/50 transition-all resize-none font-mono ${
                        isDark 
                          ? 'bg-[#020617] border-purple-500/25 text-slate-100 placeholder-slate-500 focus:border-cyan-500/60' 
                          : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                      required
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-bold text-xs sm:text-sm shadow-lg shadow-purple-950/40 hover:shadow-cyan-500/30 transition-all active:scale-[0.99] disabled:opacity-50 cursor-pointer flex items-center justify-center gap-2 font-mono"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? t.sendingButton[lang] : t.submitButton[lang]}</span>
                  </button>

                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
