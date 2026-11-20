import { ArrowDownRight, Mail, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { IDENTITY, PROFILE_IMAGE_URL, UI_STRINGS } from '../data/portfolioData';

export function HeroSection() {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-slate-800/70 bg-neural-grid py-16 sm:py-24 lg:py-28"
    >
      {/* Subtle atmospheric electric-blue / purple radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-blue-600/15 via-indigo-500/10 to-purple-600/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Minimal Typographic Hero */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center lg:col-span-7"
          >
            <p className="text-sm font-medium tracking-wide text-blue-400">
              {t(IDENTITY.role)}
            </p>

            <h1 className="font-display mt-4 text-4xl font-bold tracking-tight text-slate-50 sm:text-5xl lg:text-6xl [text-wrap:balance]">
              {t(IDENTITY.name)}
            </h1>

            <p className="font-display mt-4 bg-gradient-to-r from-blue-300 via-indigo-200 to-purple-300 bg-clip-text text-xl font-semibold text-transparent sm:text-2xl [text-wrap:balance]">
              “{t(IDENTITY.tagline)}”
            </p>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
              {t(IDENTITY.heroIntro)}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-500 whitespace-nowrap"
              >
                <span>{t(UI_STRINGS.heroPrimaryCta)}</span>
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border border-slate-700 bg-slate-900/75 px-6 py-3 text-sm font-semibold text-slate-100 transition-colors hover:border-blue-500/60 hover:bg-slate-900 whitespace-nowrap"
              >
                <Mail className="h-4 w-4 text-blue-400" aria-hidden="true" />
                <span>{t(UI_STRINGS.heroSecondaryCta)}</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: Side-by-Side Profile Card (Optional Image Placeholder + Abstract AI Graphic) */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-800/90 bg-[#0B1120]/90 p-6 sm:p-8 shadow-xl">
              {/* Visual Frame: Renders real photo if PROFILE_IMAGE_URL is set, otherwise clean neural lattice placeholder */}
              <div className="relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-br from-[#0F172A] via-[#0B1120] to-[#131936]">
                {PROFILE_IMAGE_URL ? (
                  <img
                    src={PROFILE_IMAGE_URL}
                    alt={t(IDENTITY.name)}
                    referrerPolicy="no-referrer"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <>
                    {/* Abstract Neural Network SVG Motif */}
                    <svg
                      viewBox="0 0 360 260"
                      aria-hidden="true"
                      className="absolute inset-0 h-full w-full opacity-75"
                    >
                      <defs>
                        <linearGradient id="neuralLine" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.45" />
                          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.35" />
                        </linearGradient>
                      </defs>
                      <g stroke="url(#neuralLine)" strokeWidth="1.2">
                        <line x1="56" y1="68" x2="178" y2="95" />
                        <line x1="56" y1="68" x2="178" y2="168" />
                        <line x1="56" y1="190" x2="178" y2="95" />
                        <line x1="56" y1="190" x2="178" y2="168" />
                        <line x1="178" y1="95" x2="302" y2="68" />
                        <line x1="178" y1="95" x2="302" y2="190" />
                        <line x1="178" y1="168" x2="302" y2="68" />
                        <line x1="178" y1="168" x2="302" y2="190" />
                        <line x1="178" y1="95" x2="178" y2="168" />
                      </g>
                      <g>
                        <circle cx="56" cy="68" r="5" fill="#60A5FA" />
                        <circle cx="56" cy="190" r="5" fill="#818CF8" />
                        <circle cx="178" cy="95" r="6" fill="#3B82F6" />
                        <circle cx="178" cy="168" r="6" fill="#8B5CF6" />
                        <circle cx="302" cy="68" r="5" fill="#60A5FA" />
                        <circle cx="302" cy="190" r="5" fill="#A78BFA" />
                      </g>
                    </svg>

                    <div className="relative z-10 flex flex-col items-center px-6 text-center">
                      <div className="flex h-20 w-20 items-center justify-center rounded-full border border-blue-400/40 bg-[#060913]/85 shadow-lg">
                        <span className="font-display text-2xl font-bold tracking-tight text-blue-300">
                          LA
                        </span>
                      </div>
                      <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-slate-300">
                        {t(IDENTITY.profileCardPlaceholderTitle)}
                      </p>
                      <p className="mt-1.5 max-w-[240px] text-xs leading-relaxed text-slate-400">
                        {t(IDENTITY.profileCardPlaceholderNote)}
                      </p>
                    </div>
                  </>
                )}
              </div>

              {/* Clean unboxed metadata summary below portrait frame */}
              <div className="mt-6 border-t border-slate-800/80 pt-5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="font-display text-base font-semibold text-slate-100">
                      {t(IDENTITY.name)}
                    </p>
                    <p className="mt-0.5 text-xs text-slate-400">
                      {t(IDENTITY.academicStage)} · {t(IDENTITY.location)}
                    </p>
                  </div>
                  <Sparkles className="h-4 w-4 text-blue-400" aria-hidden="true" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
