import { m } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { ABOUT_CONTENT } from '../data/portfolioData';

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="border-b border-slate-800/70 bg-[#060913] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-sm font-medium text-blue-400">
            {t(ABOUT_CONTENT.eyebrow)}
          </p>
          <h2 className="font-display mt-2 max-w-3xl text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl [text-wrap:balance]">
            {t(ABOUT_CONTENT.heading)}
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
            {/* Introduction Prose */}
            <div className="space-y-5 lg:col-span-7">
              {ABOUT_CONTENT.paragraphs.map((para, index) => (
                <p
                  key={index}
                  className="text-base leading-relaxed text-slate-300"
                >
                  {t(para)}
                </p>
              ))}
            </div>

            {/* Personal Qualities Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl border border-slate-800/80 bg-[#0B1120] p-6 sm:p-7">
                <h3 className="font-display text-lg font-semibold text-slate-100">
                  {t(ABOUT_CONTENT.qualitiesHeading)}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-slate-400">
                  {t(ABOUT_CONTENT.qualitiesDisclaimer)}
                </p>

                <ul className="mt-5 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {ABOUT_CONTENT.qualities.map((quality, index) => (
                    <li
                      key={index}
                      className="flex items-baseline gap-2.5 border-b border-slate-800/60 pb-2 text-sm text-slate-200 last:border-b-0 sm:last:border-b"
                    >
                      <span className="font-mono-tabular text-xs text-blue-400">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span>{t(quality)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
