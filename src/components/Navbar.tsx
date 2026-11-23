import { useCallback, useRef, useState } from 'react';
import { ArrowUpRight, Globe, LayoutGrid, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { ALL_NAV_SECTIONS, IDENTITY, TOP_NAV_ITEMS, UI_STRINGS } from '../data/portfolioData';
import { useDialogA11y } from '../hooks/useDialogA11y';
import type { SectionId } from '../types/portfolio';

interface NavbarProps {
  activeSection: SectionId;
}

export function Navbar({ activeSection }: NavbarProps) {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleCloseMenu = useCallback(() => {
    setMenuOpen(false);
  }, []);

  useDialogA11y({
    isOpen: menuOpen,
    containerRef: drawerRef,
    initialFocusRef: closeButtonRef,
    onClose: handleCloseMenu,
  });

  const handleNavigate = (id: SectionId) => {
    setMenuOpen(false);
    requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  };

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-slate-800/75 bg-[#060913]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-3 py-3 sm:px-6 lg:gap-8 lg:px-8">
          {/* Zone 1: Single-line Brand Wordmark */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNavigate('home');
            }}
            className="font-display text-base font-bold tracking-tight text-slate-100 transition-colors hover:text-blue-400 sm:text-lg whitespace-nowrap shrink-0 min-h-[40px] inline-flex items-center"
          >
            {t(IDENTITY.name)}
          </a>

          {/* Zone 2: 5 Grouped Single-Line Navigation Links (Desktop) */}
          <nav
            aria-label={language === 'en' ? 'Primary navigation' : 'প্রধান নেভিগেশন'}
            className="hidden md:flex items-center gap-5 lg:gap-7"
          >
            {TOP_NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavigate(item.id);
                  }}
                  className={`relative py-2 text-sm font-medium transition-colors whitespace-nowrap shrink-0 ${
                    isActive
                      ? 'text-blue-400'
                      : 'text-slate-300 hover:text-slate-100'
                  }`}
                >
                  {t(item.label)}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-0 bottom-0.5 h-px bg-blue-400 transition-opacity duration-150 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Zone 3: Language Switcher + Full 9-Section Menu Trigger */}
          <div className="flex items-center gap-2 shrink-0">
            <div
              role="group"
              aria-label={language === 'en' ? 'Language selector' : 'ভাষা নির্বাচন'}
              className="inline-flex items-center rounded-lg border border-slate-800 bg-slate-900/90 p-0.5"
            >
              <Globe
                className="ml-2 mr-1 hidden h-3.5 w-3.5 text-slate-400 sm:block"
                aria-hidden="true"
              />
              <button
                type="button"
                onClick={() => setLanguage('en')}
                aria-pressed={language === 'en'}
                className={`min-h-[36px] rounded-md px-2.5 py-1 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
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
                className={`min-h-[36px] rounded-md px-2.5 py-1 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                  language === 'bn'
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                বাংলা
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-expanded={menuOpen}
              aria-controls="full-section-menu"
              aria-label={t(UI_STRINGS.allSectionsHeading)}
              className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-slate-700/80 bg-slate-900/85 px-3 py-2 text-xs font-semibold text-slate-200 transition-colors hover:border-blue-500/60 hover:text-white whitespace-nowrap shrink-0"
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
          aria-labelledby="drawer-heading"
          className="fixed inset-0 z-50 flex justify-end bg-black/75 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              handleCloseMenu();
            }
          }}
        >
          <div
            ref={drawerRef}
            className="flex h-full w-full max-w-md flex-col overflow-y-auto border-l border-slate-800 bg-[#0A0F1E] p-5 sm:p-6 shadow-2xl"
          >
            <div className="flex items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
              <div className="min-w-0">
                <p
                  id="drawer-heading"
                  className="font-display text-base font-semibold text-slate-100 break-words"
                >
                  {t(UI_STRINGS.allSectionsHeading)}
                </p>
                <p className="mt-0.5 text-xs text-slate-400">
                  {t(IDENTITY.name)} · {t(IDENTITY.location)}
                </p>
              </div>
              <button
                ref={closeButtonRef}
                type="button"
                onClick={handleCloseMenu}
                aria-label={t(UI_STRINGS.closeMenu)}
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300 transition-colors hover:border-slate-700 hover:text-white"
              >
                <X className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>

            <nav
              aria-label={t(UI_STRINGS.allSectionsHeading)}
              className="mt-5 flex flex-col gap-2"
            >
              {ALL_NAV_SECTIONS.map((section, idx) => {
                const isActive = activeSection === section.id;
                return (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    aria-current={isActive ? 'location' : undefined}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavigate(section.id);
                    }}
                    className={`group flex min-h-[52px] items-center justify-between gap-3 rounded-xl border px-4 py-3 transition-colors ${
                      isActive
                        ? 'border-blue-500/50 bg-blue-500/12 text-blue-300'
                        : 'border-transparent bg-slate-900/50 text-slate-200 hover:border-slate-800 hover:bg-slate-900'
                    }`}
                  >
                    <div className="flex min-w-0 items-baseline gap-3">
                      <span className="font-mono-tabular shrink-0 text-xs text-slate-400">
                        {String(idx + 1).padStart(2, '0')}.
                      </span>
                      <div className="min-w-0">
                        <span className="block text-sm font-semibold break-words">
                          {t(section.label)}
                        </span>
                        {section.description && (
                          <span className="mt-0.5 block text-xs text-slate-400 break-words">
                            {t(section.description)}
                          </span>
                        )}
                      </div>
                    </div>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-slate-400 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-400"
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
