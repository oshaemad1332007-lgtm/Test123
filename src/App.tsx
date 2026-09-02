import React, { useState, useEffect } from 'react';
import { Language, Theme } from './types';
import { ParticleBackground } from './components/ParticleBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Education } from './components/Education';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Certificates } from './components/Certificates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CVModal } from './components/CVModal';

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [theme, setTheme] = useState<Theme>('dark');
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);

  // Sync RTL/LTR and document title
  useEffect(() => {
    document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');
    document.documentElement.setAttribute('lang', lang);

    if (lang === 'ar') {
      document.title = 'عبدالحميد عماد | مطور واجهات أمامية ومهندس برمجيات';
    } else {
      document.title = 'Abdelhamed Emad | Frontend Developer & Software Engineer';
    }
  }, [lang]);

  // Sync dark class on root html
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'ar' ? 'en' : 'ar'));
  };

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className={`min-h-screen relative font-sans transition-colors duration-300 ${
      theme === 'dark' 
        ? 'bg-[#020617] text-[#f8fafc] selection:bg-cyan-500/30 selection:text-cyan-200' 
        : 'bg-[#fafafa] text-slate-900 selection:bg-blue-500/30 selection:text-blue-900'
    }`}>
      
      {/* Sleek Background Radial Accents */}
      {theme === 'dark' && (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute -top-40 left-1/4 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[140px]" />
          <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px]" />
          <div className="absolute -bottom-40 left-1/3 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[140px]" />
        </div>
      )}

      {/* Interactive Particle Canvas */}
      <ParticleBackground theme={theme} />

      {/* Sticky Glassmorphism Navbar */}
      <Navbar
        lang={lang}
        theme={theme}
        onToggleLang={toggleLanguage}
        onToggleTheme={toggleTheme}
        onOpenCVModal={() => setIsCVModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero
          lang={lang}
          theme={theme}
          onOpenCVModal={() => setIsCVModalOpen(true)}
        />

        <About
          lang={lang}
          theme={theme}
        />

        <Education
          lang={lang}
          theme={theme}
        />

        <Skills
          lang={lang}
          theme={theme}
        />

        <Projects
          lang={lang}
          theme={theme}
        />

        <Certificates
          lang={lang}
          theme={theme}
        />

        <Contact
          lang={lang}
          theme={theme}
        />
      </main>

      {/* Footer */}
      <Footer
        lang={lang}
        theme={theme}
      />

      {/* CV Preview & Direct PDF Download Modal */}
      <CVModal
        isOpen={isCVModalOpen}
        onClose={() => setIsCVModalOpen(false)}
        lang={lang}
        theme={theme}
      />

    </div>
  );
}
