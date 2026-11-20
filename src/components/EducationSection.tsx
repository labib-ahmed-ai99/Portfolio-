import { GraduationCap } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { EDUCATION_ITEMS, UI_STRINGS } from '../data/portfolioData';

export function EducationSection() {
  const { t } = useLanguage();

  return (
    <section id="education" className="border-b border-slate-800/70 bg-[#0A0F1E] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-sm font-medium text-blue-400">
            {t(UI_STRINGS.educationEyebrow)}
          </p>
          <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
            {t(UI_STRINGS.educationHeading)}
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {EDUCATION_ITEMS.map((item) => (
              <article
                key={item.id}
                className="flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-[#0F172A]/85 p-6 sm:p-7 transition-colors hover:border-slate-700"
              >
                <div>
                  <div className="flex items-center justify-between gap-4">
                    <p className="font-mono-tabular text-xs font-medium text-blue-400">
                      {t(item.periodLabel)}
                    </p>
                    <GraduationCap className="h-5 w-5 text-slate-400 shrink-0" aria-hidden="true" />
                  </div>

                  <h3 className="font-display mt-3 text-xl font-semibold text-slate-100">
                    {t(item.institution)}
                  </h3>
                  <p className="mt-1 text-sm text-slate-300">
                    {t(item.status)}
                  </p>
                </div>

                <ul className="mt-6 space-y-2 border-t border-slate-800/80 pt-4">
                  {item.details.map((detail, idx) => (
                    <li key={idx} className="text-sm text-slate-300">
                      {t(detail)}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
