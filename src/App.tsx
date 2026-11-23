import { useEffect, useState } from 'react';
import { domAnimation, LazyMotion, MotionConfig } from 'motion/react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/SkillsSection';
import { ProjectsSection } from './components/ProjectsSection';
import { AchievementsSection } from './components/AchievementsSection';
import { InterestsGoalsSection } from './components/InterestsGoalsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ALL_NAV_SECTIONS, UI_STRINGS } from './data/portfolioData';
import type { SectionId } from './types/portfolio';

function PortfolioShell() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState<SectionId>('home');

  useEffect(() => {
    const ids = ALL_NAV_SECTIONS.map((s) => s.id);
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id as SectionId);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#060913] text-slate-100">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-blue-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        {t(UI_STRINGS.skipToContent)}
      </a>

      <Navbar activeSection={activeSection} />

      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <AchievementsSection />
        <InterestsGoalsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation}>
        <LanguageProvider>
          <PortfolioShell />
        </LanguageProvider>
      </LazyMotion>
    </MotionConfig>
  );
}
