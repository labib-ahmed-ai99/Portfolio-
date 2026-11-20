import { Award } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { ACHIEVEMENTS, UI_STRINGS } from '../data/portfolioData';

export function AchievementsSection() {
  const { t } = useLanguage();

  return (
    <section id="achievements" className="border-b border-slate-800/70 bg-[#060913] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-sm font-medium text-blue-400">
            {t(UI_STRINGS.achievementsEyebrow)}
          </p>
          <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl [text-wrap:balance]">
            {t(UI_STRINGS.achievementsHeading)}
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {ACHIEVEMENTS.map((item, idx) => (
              <article
                key={item.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-[#0B1120] p-6 sm:p-7 transition-colors hover:border-slate-700"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-mono-tabular text-xs font-medium text-blue-400">
                      {String(idx + 1).padStart(2, '0')} · {t(item.year)}
                    </span>
                    <Award className="h-5 w-5 text-purple-400 shrink-0" aria-hidden="true" />
                  </div>

                  <h3 className="font-display mt-3 text-lg font-semibold text-slate-100 sm:text-xl">
                    {t(item.title)}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-slate-400">
                    {t(item.context)}
                  </p>
                </div>

                <p className="mt-4 border-t border-slate-800/70 pt-4 text-sm leading-relaxed text-slate-300">
                  {t(item.summary)}
                </p>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
