import { useState } from 'react';
import { ArrowDownRight, ArrowRight, FolderCode, Mail, Sparkles, Terminal } from 'lucide-react';
import { m } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import {
  HERO_HIGHLIGHTS,
  IDENTITY,
  PROFILE_IMAGE_URL,
  PROJECTS,
  UI_STRINGS,
} from '../data/portfolioData';

export function HeroSection() {
  const { t } = useLanguage();
  const [imageError, setImageError] = useState(false);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  // Highlight one completed Python CLI exercise and the current in-progress HTML project
  const featuredPreview = [PROJECTS[0], PROJECTS[4]];
  const showPhoto = Boolean(PROFILE_IMAGE_URL) && !imageError;

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-800/75 bg-neural-grid pt-14 pb-16 sm:pt-20 sm:pb-24 lg:pt-24 lg:pb-24"
    >
      {/* Subtle atmospheric electric-blue / purple radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-36 left-1/2 h-[440px] w-[780px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-600/18 via-indigo-500/10 to-purple-600/16 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Minimal Typographic Hero */}
          <m.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center min-w-0 lg:col-span-7"
          >
            <p className="text-sm font-semibold tracking-wide text-blue-400 break-words">
              {t(IDENTITY.role)}
            </p>

            <h1 className="font-display mt-4 text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl [text-wrap:balance] break-words">
              {t(IDENTITY.name)}
            </h1>

            <p className="font-display mt-4 bg-gradient-to-r from-blue-300 via-indigo-200 to-purple-300 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl [text-wrap:balance] break-words">
              “{t(IDENTITY.tagline)}”
            </p>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {t(IDENTITY.heroIntro)}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3.5 sm:gap-4">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-950/40 transition-colors hover:bg-blue-500 whitespace-nowrap"
              >
                <span>{t(UI_STRINGS.heroPrimaryCta)}</span>
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-lg border border-slate-700 bg-slate-900/80 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-blue-500/60 hover:bg-slate-900 whitespace-nowrap"
              >
                <Mail className="h-4 w-4 text-blue-400" aria-hidden="true" />
                <span>{t(UI_STRINGS.heroSecondaryCta)}</span>
              </button>
            </div>
          </m.div>

          {/* Right Column: Side-by-Side Profile Card + Featured Work Preview */}
          <m.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="min-w-0 lg:col-span-5"
          >
            <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-800/90 bg-[#0B1120]/95 p-5 sm:p-7 shadow-xl">
              <div>
                {/* Visual Portrait Frame */}
                <div className="relative flex aspect-[16/10] w-full items-center justify-center overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-br from-[#0F172A] via-[#0B1120] to-[#131936]">
                  {showPhoto && PROFILE_IMAGE_URL ? (
                    <img
                      src={PROFILE_IMAGE_URL}
                      alt={t(IDENTITY.name)}
                      loading="eager"
                      decoding="async"
                      referrerPolicy="no-referrer"
                      onError={() => setImageError(true)}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <>
                      <svg
                        viewBox="0 0 360 225"
                        aria-hidden="true"
                        className="absolute inset-0 h-full w-full opacity-75"
                      >
                        <defs>
                          <linearGradient id="neuralLine" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.48" />
                            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.38" />
                          </linearGradient>
                        </defs>
                        <g stroke="url(#neuralLine)" strokeWidth="1.2">
                          <line x1="52" y1="54" x2="178" y2="82" />
                          <line x1="52" y1="54" x2="178" y2="148" />
                          <line x1="52" y1="168" x2="178" y2="82" />
                          <line x1="52" y1="168" x2="178" y2="148" />
                          <line x1="178" y1="82" x2="306" y2="54" />
                          <line x1="178" y1="82" x2="306" y2="168" />
                          <line x1="178" y1="148" x2="306" y2="54" />
                          <line x1="178" y1="148" x2="306" y2="168" />
                          <line x1="178" y1="82" x2="178" y2="148" />
                        </g>
                        <g>
                          <circle cx="52" cy="54" r="4.5" fill="#60A5FA" />
                          <circle cx="52" cy="168" r="4.5" fill="#818CF8" />
                          <circle cx="178" cy="82" r="5.5" fill="#3B82F6" />
                          <circle cx="178" cy="148" r="5.5" fill="#8B5CF6" />
                          <circle cx="306" cy="54" r="4.5" fill="#60A5FA" />
                          <circle cx="306" cy="168" r="4.5" fill="#A78BFA" />
                        </g>
                      </svg>

                      <div className="relative z-10 flex flex-col items-center px-5 text-center">
                        <div className="flex h-16 w-16 items-center justify-center rounded-full border border-blue-400/40 bg-[#060913]/90 shadow-lg">
                          <span className="font-display text-xl font-bold tracking-tight text-blue-300">
                            LA
                          </span>
                        </div>
                        <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-slate-200">
                          {t(IDENTITY.profileCardPlaceholderTitle)}
                        </p>
                        <p className="mt-1 max-w-[240px] text-xs leading-relaxed text-slate-400">
                          {t(IDENTITY.profileCardPlaceholderNote)}
                        </p>
                      </div>
                    </>
                  )}
                </div>

                {/* Identity Line */}
                <div className="mt-5 flex items-center justify-between gap-3 border-b border-slate-800/80 pb-4">
                  <div className="min-w-0">
                    <p className="font-display text-base font-semibold text-slate-100 break-words">
                      {t(IDENTITY.name)}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-400">
                      {t(IDENTITY.academicStage)} · {t(IDENTITY.location)}
                    </p>
                  </div>
                  <Sparkles className="h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
                </div>

                {/* Featured Work Preview */}
                <div className="mt-4">
                  <div className="flex items-center justify-between gap-2">
                    <p className="text-xs font-semibold text-slate-300">
                      {t(UI_STRINGS.heroFeaturedLabel)}
                    </p>
                    <button
                      type="button"
                      onClick={() => scrollTo('projects')}
                      className="inline-flex items-center gap-1 text-xs font-medium text-blue-400 hover:text-blue-300"
                    >
                      <span>{t(UI_STRINGS.heroFeaturedLink)}</span>
                      <ArrowRight className="h-3 w-3" aria-hidden="true" />
                    </button>
                  </div>

                  <div className="mt-3 space-y-2.5">
                    {featuredPreview.map((proj) => (
                      <button
                        key={proj.id}
                        type="button"
                        onClick={() => scrollTo('projects')}
                        className="flex w-full items-center justify-between gap-3 rounded-xl border border-slate-800/80 bg-[#060913]/75 px-3.5 py-2.5 text-left transition-colors hover:border-blue-500/40 hover:bg-[#060913]"
                      >
                        <div className="flex min-w-0 items-center gap-2.5">
                          {proj.category === 'python' ? (
                            <Terminal className="h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
                          ) : (
                            <FolderCode className="h-4 w-4 shrink-0 text-purple-400" aria-hidden="true" />
                          )}
                          <div className="min-w-0">
                            <p className="truncate text-xs font-semibold text-slate-100">
                              {t(proj.title)}
                            </p>
                            <p className="truncate text-xs text-slate-400">
                              {proj.technologies.join(' · ')}
                            </p>
                          </div>
                        </div>
                        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-slate-400" aria-hidden="true" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </m.div>
        </div>

        {/* Full-Width 4-Column Factual Highlights Strip */}
        <m.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 grid grid-cols-1 gap-4 border-t border-slate-800/75 pt-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {HERO_HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-slate-800/80 bg-[#0B1120]/75 px-4 py-3.5"
            >
              <p className="text-xs text-slate-400">{t(item.label)}</p>
              <p className="font-mono-tabular mt-1 text-sm font-semibold text-slate-100">
                {t(item.value)}
              </p>
            </div>
          ))}
        </m.div>
      </div>
    </section>
  );
}
