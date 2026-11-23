import { BrainCircuit, Compass, Cpu, Globe, Languages } from 'lucide-react';
import { m } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import {
  GOALS_CONTENT,
  INTERESTS,
  SPOKEN_LANGUAGES,
  UI_STRINGS,
} from '../data/portfolioData';

export function InterestsGoalsSection() {
  const { t } = useLanguage();

  const renderInterestIcon = (iconName: 'brain' | 'cpu' | 'globe') => {
    switch (iconName) {
      case 'brain':
        return <BrainCircuit className="h-5 w-5 text-blue-400" aria-hidden="true" />;
      case 'cpu':
        return <Cpu className="h-5 w-5 text-purple-400" aria-hidden="true" />;
      case 'globe':
        return <Globe className="h-5 w-5 text-blue-400" aria-hidden="true" />;
    }
  };

  return (
    <>
      {/* Interests & Languages Section */}
      <section
        id="interests"
        className="border-b border-slate-800/70 bg-[#0A0F1E] py-16 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <m.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm font-medium text-blue-400">
              {t(UI_STRINGS.interestsEyebrow)}
            </p>
            <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
              {t(UI_STRINGS.interestsHeading)}
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
              {INTERESTS.map((interest) => (
                <article
                  key={interest.id}
                  className="rounded-2xl border border-slate-800/80 bg-[#0F172A]/85 p-6 transition-colors hover:border-slate-700"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 bg-[#060913]">
                    {renderInterestIcon(interest.iconName)}
                  </div>
                  <h3 className="font-display mt-4 text-lg font-semibold text-slate-100">
                    {t(interest.title)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-300">
                    {t(interest.description)}
                  </p>
                </article>
              ))}
            </div>

            {/* Spoken & Planned Languages */}
            <div className="mt-14 border-t border-slate-800/70 pt-10">
              <div className="flex items-center gap-2.5">
                <Languages className="h-5 w-5 text-blue-400" aria-hidden="true" />
                <div>
                  <p className="text-xs font-medium text-blue-400">
                    {t(UI_STRINGS.languagesEyebrow)}
                  </p>
                  <h3 className="font-display text-xl font-bold text-slate-100">
                    {t(UI_STRINGS.languagesHeading)}
                  </h3>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {SPOKEN_LANGUAGES.map((langItem) => (
                  <article
                    key={langItem.id}
                    className="rounded-xl border border-slate-800/80 bg-[#060913]/80 p-5"
                  >
                    <h4 className="font-display text-base font-semibold text-slate-100">
                      {t(langItem.name)}
                    </h4>
                    <p className="mt-1 text-xs font-medium text-blue-400">
                      {t(langItem.proficiency)}
                    </p>
                    <p className="mt-2.5 text-xs leading-relaxed text-slate-400">
                      {t(langItem.note)}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </m.div>
        </div>
      </section>

      {/* Goals & Future Vision Section */}
      <section
        id="goals"
        className="border-b border-slate-800/70 bg-[#060913] py-16 sm:py-24"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <m.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-medium text-blue-400">
                  {t(GOALS_CONTENT.eyebrow)}
                </p>
                <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
                  {t(GOALS_CONTENT.heading)}
                </h2>
              </div>
              <p className="max-w-md text-xs leading-relaxed text-slate-400">
                {t(GOALS_CONTENT.disclaimer)}
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
              {GOALS_CONTENT.items.map((goal, idx) => (
                <article
                  key={goal.id}
                  className="flex flex-col justify-between rounded-2xl border border-slate-800/85 bg-gradient-to-b from-[#0F172A]/80 to-[#0B1120] p-6 sm:p-7"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono-tabular text-xs font-medium text-purple-300">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <Compass className="h-4 w-4 text-blue-400" aria-hidden="true" />
                    </div>
                    <h3 className="font-display mt-4 text-lg font-semibold text-slate-100 [text-wrap:balance]">
                      {t(goal.title)}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-slate-300">
                      {t(goal.description)}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </m.div>
        </div>
      </section>
    </>
  );
}
