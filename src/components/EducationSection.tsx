import { GraduationCap } from 'lucide-react';
import { m } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { EDUCATION_ITEMS, UI_STRINGS } from '../data/portfolioData';

export function EducationSection() {
  const { t } = useLanguage();

  return (
    <section id="education" className="border-b border-slate-800/75 bg-[#0A0F1E] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <m.div
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

          {/* Clean Timeline Layout */}
          <div className="relative mt-10 space-y-6 pl-6 before:absolute before:bottom-3 before:left-2 before:top-3 before:w-px before:bg-slate-800 md:grid md:grid-cols-2 md:gap-6 md:space-y-0 md:pl-0 md:before:hidden">
            {EDUCATION_ITEMS.map((item, idx) => {
              const isCurrent = idx === 0;
              return (
                <article
                  key={item.id}
                  className={`relative flex flex-col justify-between rounded-2xl border p-6 sm:p-7 transition-colors ${
                    isCurrent
                      ? 'border-blue-500/35 bg-[#0F172A]/95'
                      : 'border-slate-800/85 bg-[#0F172A]/75 hover:border-slate-700'
                  }`}
                >
                  {/* Mobile timeline marker */}
                  <span
                    aria-hidden="true"
                    className={`absolute -left-[21px] top-8 h-2.5 w-2.5 rounded-full border md:hidden ${
                      isCurrent
                        ? 'border-blue-400 bg-blue-500'
                        : 'border-slate-600 bg-slate-800'
                    }`}
                  />

                  <div>
                    <div className="flex items-center justify-between gap-4">
                      <p className="font-mono-tabular text-xs font-semibold text-blue-400">
                        {t(item.periodLabel)}
                      </p>
                      <GraduationCap
                        className={`h-5 w-5 shrink-0 ${
                          isCurrent ? 'text-blue-400' : 'text-slate-400'
                        }`}
                        aria-hidden="true"
                      />
                    </div>

                    <h3 className="font-display mt-3 text-xl font-semibold text-slate-100 break-words">
                      {t(item.institution)}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-slate-300">
                      {t(item.status)}
                    </p>
                  </div>

                  <ul className="mt-6 space-y-2 border-t border-slate-800/80 pt-4">
                    {item.details.map((detail, detailIdx) => (
                      <li
                        key={detailIdx}
                        className="font-mono-tabular text-sm text-slate-300"
                      >
                        {t(detail)}
                      </li>
                    ))}
                  </ul>
                </article>
              );
            })}
          </div>
        </m.div>
      </div>
    </section>
  );
}
