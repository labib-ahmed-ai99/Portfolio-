import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Globe, LayoutGrid, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ALL_NAV_SECTIONS, IDENTITY, TOP_NAV_ITEMS, UI_STRINGS } from '../data/portfolioData';
import type { SectionId } from '../types/portfolio';

interface NavbarProps {
  activeSection: SectionId;
}

export function Navbar({ activeSection }: NavbarProps) {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [menuOpen]);

  const handleNavigate = (id: SectionId) => {
    setMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-800/70 bg-[#060913]/85 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:gap-8 lg:px-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavigate('home');
            }}
            className="font-display text-lg font-bold tracking-tight text-slate-100 transition-colors hover:text-blue-400 whitespace-nowrap shrink-0"
          >
            {t(IDENTITY.name)}
          </a>

          {/* Zone 2: 5 Grouped Single-Line Navigation Links (Desktop) */}
          <nav
            aria-label={language === 'en' ? 'Primary navigation' : 'প্রধান নেভিগেশন'}
            className="hidden md:flex items-center gap-6 lg:gap-7"
          >
            {TOP_NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigate(item.id);
                  }}
                  className={`relative py-1 text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-blue-400'
                      : 'text-slate-300 hover:text-slate-100'
                  }`}
                >
                  {t(item.label)}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 -bottom-0.5 h-px bg-blue-400 transition-opacity duration-150 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Language Switcher + Full 9-Section Menu Trigger */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div
              role="group"
              aria-label={language === 'en' ? 'Language selector' : 'ভাষা নির্বাচন'}
              className="inline-flex items-center rounded-lg border border-slate-800 bg-slate-900/90 p-0.5"
            >
              <Globe className="ml-2 mr-1 h-3.5 w-3.5 text-slate-400 hidden sm:block" aria-hidden="true" />
              <button
                type="button"
                onClick={() => setLanguage('en')}
                aria-pressed={language === 'en'}
                className={`rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                  language === 'en'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage('bn')}
                aria-pressed={language === 'bn'}
                className={`rounded-md px-2.5 py-1.5 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                  language === 'bn'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                বাংলা
              </button>
            </div>

            <button
              ref={menuButtonRef}
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="full-section-menu"
              className="inline-flex items-center gap-1.5 rounded-lg border border-slate-700/80 bg-slate-900/80 px-3 py-2 text-xs font-medium text-slate-200 transition-colors hover:border-blue-500/60 hover:text-white whitespace-nowrap shrink-0 min-h-[38px]"
            >
              <LayoutGrid className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
              <span>{t(UI_STRINGS.menuButton)}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Full 9-Section Navigation Drawer (Desktop & Mobile) */}
      {menuOpen && (
        <div
          id="full-section-menu"
          role="dialog"
          aria-modal="true"
          aria-label={t(UI_STRINGS.allSectionsHeading)}
          className="fixed inset-0 z-50 flex justify-end bg-black/70 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setMenuOpen(false);
              menuButtonRef.current?.focus();
            }
          }}
        >
          <div className="flex h-full w-full max-w-md flex-col border-l border-slate-800 bg-[#0A0F1E] p-6 shadow-2xl overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
              <div>
                <p className="font-display text-base font-semibold text-slate-100">
                  {t(UI_STRINGS.allSectionsHeading)}
                </p>
                <p className="mt-0.5 text-xs text-slate-400">
                  {t(IDENTITY.name)} · {t(IDENTITY.location)}
                </p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={() => {
                  setMenuOpen(false);
                  menuButtonRef.current?.focus();
                }}
                aria-label={t(UI_STRINGS.closeMenu)}
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300 transition-colors hover:border-slate-700 hover:text-white"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <nav
              aria-label={t(UI_STRINGS.allSectionsHeading)}
              className="mt-5 flex flex-col gap-1.5"
            >
              {ALL_NAV_SECTIONS.map((section, idx) => {
                const isActive = activeSection === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigate(section.id);
                    }}
                    className={`group flex items-center justify-between rounded-xl border px-4 py-3 transition-colors ${
                      isActive
                        ? 'border-blue-500/40 bg-blue-500/10 text-blue-300'
                        : 'border-transparent bg-slate-900/40 text-slate-200 hover:border-slate-800 hover:bg-slate-900'
                    }`}
                  >
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono-tabular text-xs text-slate-500">
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      <div>
                        <span className="block text-sm font-semibold">
                          {t(section.label)}
                        </span>
                        {section.description && (
                          <span className="block text-xs text-slate-400">
                            {t(section.description)}
                          </span>
                        )}
                      </div>
                    </div>
                    <ArrowUpRight
                      className="h-4 w-4 text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-400"
                      aria-hidden="true"
                    />
                  </a>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
