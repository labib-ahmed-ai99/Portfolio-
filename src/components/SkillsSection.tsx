import { BookOpen, Code2 } from 'lucide-react';
import { m } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { LEARNING_GOALS, TECHNICAL_SKILLS, UI_STRINGS } from '../data/portfolioData';

export function SkillsSection() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="border-b border-slate-800/75 bg-[#060913] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-sm font-medium text-blue-400">
            {t(UI_STRINGS.skillsEyebrow)}
          </p>
          <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl [text-wrap:balance]">
            {t(UI_STRINGS.skillsHeading)}
          </h2>

          {/* Part 1: Current Technical Skills (Beginner Level) */}
          <div className="mt-10 rounded-2xl border border-blue-500/25 bg-[#0B1120]/90 p-6 sm:p-8">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-display flex items-center gap-2 text-lg font-semibold text-slate-100">
                <Code2 className="h-4 w-4 shrink-0 text-blue-400" aria-hidden="true" />
                <span>{t(UI_STRINGS.currentSkillsSubheading)}</span>
              </h3>
              <p className="max-w-md text-xs leading-relaxed text-slate-400">
                {t(UI_STRINGS.currentSkillsNote)}
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
              {TECHNICAL_SKILLS.map((skill) => (
                <article
                  key={skill.id}
                  className="rounded-xl border border-slate-800 bg-[#060913]/85 p-5 sm:p-6"
                >
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4 className="font-display text-lg font-semibold text-slate-100">
                      {t(skill.name)}
                    </h4>
                    <span className="text-xs font-semibold text-blue-400">
                      {t(skill.level)}
                    </span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-slate-300">
                    {t(skill.summary)}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {/* Part 2: Currently Learning & Exploring (Distinct from Current Skills, Zero Fake Percentages) */}
          <div className="mt-12">
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="font-display flex items-center gap-2 text-lg font-semibold text-slate-100">
                <BookOpen className="h-4 w-4 shrink-0 text-purple-400" aria-hidden="true" />
                <span>{t(UI_STRINGS.learningSubheading)}</span>
              </h3>
              <p className="max-w-md text-xs leading-relaxed text-slate-400">
                {t(UI_STRINGS.learningNote)}
              </p>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {LEARNING_GOALS.map((goal, idx) => (
                <article
                  key={goal.id}
                  className="flex flex-col justify-between rounded-xl border border-slate-800/85 bg-[#0B1120]/75 p-5 transition-colors hover:border-purple-500/35"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 text-xs">
                      <span className="font-mono-tabular text-slate-400">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="text-right font-medium text-purple-300">
                        {t(goal.status)}
                      </span>
                    </div>
                    <h4 className="font-display mt-3 text-base font-semibold leading-snug text-slate-100 break-words">
                      {t(goal.topic)}
                    </h4>
                  </div>
                  <p className="mt-3 border-t border-slate-800/60 pt-3 text-xs leading-relaxed text-slate-400">
                    {t(goal.focusArea)}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
