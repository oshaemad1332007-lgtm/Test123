import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Sun, 
  Moon, 
  Languages, 
  Download, 
  Menu, 
  X, 
  Code2, 
  User, 
  GraduationCap, 
  Wrench, 
  FolderGit2, 
  Award, 
  Send 
} from 'lucide-react';
import { Language, Theme } from '../types';
import { UI_TRANSLATIONS } from '../data/translations';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  lang: Language;
  theme: Theme;
  onToggleLang: () => void;
  onToggleTheme: () => void;
  onOpenCVModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  lang,
  theme,
  onToggleLang,
  onToggleTheme,
  onOpenCVModal
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const t = UI_TRANSLATIONS.nav;
  const isDark = theme === 'dark';

  const navItems = [
    { id: 'home', label: t.home[lang], href: '#home', icon: Code2 },
    { id: 'about', label: t.about[lang], href: '#about', icon: User },
    { id: 'education', label: t.education[lang], href: '#education', icon: GraduationCap },
    { id: 'skills', label: t.skills[lang], href: '#skills', icon: Wrench },
    { id: 'projects', label: t.projects[lang], href: '#projects', icon: FolderGit2 },
    { id: 'certificates', label: t.certificates[lang], href: '#certificates', icon: Award },
    { id: 'contact', label: t.contact[lang], href: '#contact', icon: Send },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Scrollspy active section
      const sections = ['home', 'about', 'education', 'skills', 'projects', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? isDark
            ? 'bg-[#020617]/80 backdrop-blur-xl border-b border-purple-500/20 shadow-lg shadow-cyan-950/20 py-2.5'
            : 'bg-white/85 backdrop-blur-xl border-b border-slate-200/80 shadow-sm py-2.5'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group"
            id="brand-logo-link"
          >
            <div className="relative w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-purple-600 p-[1.5px] shadow-md group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-[10px] bg-[#0f172a] flex items-center justify-center">
                <span className="font-black font-['Alexandria',sans-serif] text-sm text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  AE.DEV
                </span>
              </div>
              <div className="absolute -inset-0.5 rounded-xl bg-cyan-500/30 blur opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="flex flex-col">
              <span className="font-extrabold text-sm sm:text-base tracking-tight text-slate-900 dark:text-slate-100 font-['Alexandria',sans-serif] group-hover:text-cyan-400 transition-colors">
                {PERSONAL_INFO.name[lang]}
              </span>
              <span className="text-[10px] text-cyan-500 dark:text-cyan-400 font-mono -mt-0.5 tracking-wider uppercase">
                &lt;Software Engineer /&gt;
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-slate-100/80 dark:bg-[#0f172a]/80 border border-slate-200/60 dark:border-purple-500/20 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  id={`nav-link-${item.id}`}
                  className={`relative px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                    isActive
                      ? 'text-cyan-400 dark:text-cyan-300 bg-white dark:bg-purple-950/50 shadow-sm border border-cyan-500/30'
                      : 'text-slate-600 dark:text-slate-400 hover:text-cyan-500 dark:hover:text-cyan-300'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full border border-cyan-500/40 pointer-events-none"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Actions (Lang, Theme, CV Button) */}
          <div className="flex items-center gap-2 sm:gap-3">
            
            {/* Language Switcher */}
            <button
              id="lang-switch-btn"
              onClick={onToggleLang}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-100 dark:bg-[#0f172a] text-slate-700 dark:text-cyan-400 hover:text-cyan-500 dark:hover:text-cyan-300 border border-slate-200 dark:border-purple-500/25 hover:border-cyan-500/40 transition-all active:scale-95 cursor-pointer font-mono"
              title="Change Language"
              aria-label="Change Language"
            >
              <Languages className="w-3.5 h-3.5 text-cyan-500" />
              <span>{lang === 'ar' ? 'EN' : 'العربية'}</span>
            </button>

            {/* Theme Toggle Button */}
            <button
              id="theme-toggle-btn"
              onClick={onToggleTheme}
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-[#0f172a] border border-slate-200 dark:border-purple-500/25 hover:border-cyan-500/40 hover:text-cyan-500 dark:hover:text-cyan-400 transition-all active:scale-95 cursor-pointer"
              title={isDark ? t.themeLight[lang] : t.themeDark[lang]}
              aria-label="Toggle Theme"
            >
              {isDark ? (
                <Sun className="w-4 h-4 text-amber-400 animate-spin-slow" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-500" />
              )}
            </button>

            {/* Download CV CTA Button */}
            <button
              id="header-cv-btn"
              onClick={onOpenCVModal}
              className="hidden sm:flex items-center gap-2 px-4 py-1.5 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-cyan-500 hover:from-purple-500 hover:to-cyan-400 text-white font-semibold text-xs shadow-md shadow-purple-900/30 hover:shadow-cyan-500/20 transition-all active:scale-95 cursor-pointer font-mono"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume.pdf</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              id="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-[#0f172a] border border-slate-200 dark:border-purple-500/25"
              aria-label="Open mobile menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            id="mobile-drawer-nav"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden border-b px-4 py-4 space-y-2 ${
              isDark
                ? 'bg-slate-950/95 border-slate-800 backdrop-blur-xl'
                : 'bg-white/95 border-slate-200 backdrop-blur-xl'
            }`}
          >
            <div className="grid grid-cols-2 gap-2 pb-3">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold ${
                      isActive
                        ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30'
                        : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-900'
                    }`}
                  >
                    <Icon className="w-4 h-4 text-cyan-500" />
                    <span>{item.label}</span>
                  </a>
                );
              })}
            </div>

            <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCVModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold shadow-md"
              >
                <Download className="w-4 h-4" />
                <span>{t.downloadCV[lang]}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
