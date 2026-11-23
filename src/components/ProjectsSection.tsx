import { lazy, Suspense, useState } from 'react';
import { ArrowUpRight, ExternalLink, FolderCode, FolderGit2, Terminal } from 'lucide-react';
import { m } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { PROJECTS, UI_STRINGS } from '../data/portfolioData';
import type { ProjectFilter, ProjectItem } from '../types/portfolio';

const ProjectModal = lazy(() =>
  import('./ProjectModal').then((mod) => ({ default: mod.ProjectModal }))
);

function ProjectCardPreview({ project }: { project: ProjectItem }) {
  const { t } = useLanguage();
  const [imgFailed, setImgFailed] = useState(false);

  if (project.imageUrl && !imgFailed) {
    return (
      <div className="aspect-video w-full overflow-hidden rounded-xl border border-slate-800 bg-[#060913]">
        <img
          src={project.imageUrl}
          alt={t(project.title)}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onError={() => setImgFailed(true)}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
        />
      </div>
    );
  }

  const isPython = project.category === 'python';

  return (
    <div className="relative flex aspect-video w-full flex-col justify-between overflow-hidden rounded-xl border border-slate-800/90 bg-gradient-to-br from-[#060913] via-[#0B1120] to-[#111936] p-4">
      <div className="flex items-center justify-between text-xs text-slate-400">
        <span className="font-mono-tabular">
          {isPython ? 'main.py' : 'index.html'}
        </span>
        {isPython ? (
          <Terminal className="h-4 w-4 text-blue-400" aria-hidden="true" />
        ) : (
          <FolderCode className="h-4 w-4 text-purple-400" aria-hidden="true" />
        )}
      </div>

      {/* Subtle Schematic Wireframe */}
      <div aria-hidden="true" className="my-auto space-y-2 py-2">
        <div className="h-2 w-2/3 rounded bg-slate-800/90" />
        <div className="h-2 w-1/2 rounded bg-blue-500/20" />
        <div className="h-2 w-3/4 rounded bg-slate-800/70" />
      </div>

      <p className="text-xs text-slate-400">
        {isPython
          ? t(UI_STRINGS.cardCliPlaceholderLabel)
          : t(UI_STRINGS.cardHtmlPlaceholderLabel)}
      </p>
    </div>
  );
}

export function ProjectsSection() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<ProjectFilter>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterOptions: { key: ProjectFilter; label: string }[] = [
    { key: 'all', label: t(UI_STRINGS.filterAll) },
    { key: 'completed', label: t(UI_STRINGS.filterCompleted) },
    { key: 'in-progress', label: t(UI_STRINGS.filterInProgress) },
    { key: 'python', label: t(UI_STRINGS.filterPython) },
    { key: 'html', label: t(UI_STRINGS.filterHtml) },
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    if (filter === 'all') return true;
    if (filter === 'completed' || filter === 'in-progress') {
      return project.status === filter;
    }
    return project.category === filter;
  });

  return (
    <section id="projects" className="border-b border-slate-800/75 bg-[#0A0F1E] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <m.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-sm font-medium text-blue-400">
                {t(UI_STRINGS.projectsEyebrow)}
              </p>
              <h2 className="font-display mt-2 text-2xl font-bold tracking-tight text-slate-100 sm:text-3xl">
                {t(UI_STRINGS.projectsHeading)}
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:text-base">
                {t(UI_STRINGS.projectsLead)}
              </p>
            </div>

            {/* Interactive Segmented Filter Controls */}
            <div
              role="group"
              aria-label={t(UI_STRINGS.projectsEyebrow)}
              className="flex flex-wrap items-center gap-1 rounded-xl border border-slate-800 bg-[#060913] p-1 self-start lg:self-auto"
            >
              {filterOptions.map((opt) => {
                const active = filter === opt.key;
                return (
                  <button
                    key={opt.key}
                    type="button"
                    onClick={() => setFilter(opt.key)}
                    aria-pressed={active}
                    className={`min-h-[40px] rounded-lg px-3 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 ${
                      active
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                    }`}
                  >
                    {opt.label}
                  </button>
                );
              })}
            </div>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="mt-10 rounded-2xl border border-slate-800 bg-[#0F172A]/60 p-8 text-center text-sm text-slate-400">
              {t(UI_STRINGS.noProjectsMatch)}
            </div>
          ) : (
            <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProjects.map((project, index) => {
                const isProgress = project.status === 'in-progress';
                return (
                  <article
                    key={project.id}
                    className="group flex flex-col justify-between rounded-2xl border border-slate-800/85 bg-[#0F172A]/85 p-5 sm:p-6 transition-colors hover:border-blue-500/45"
                  >
                    <div>
                      <ProjectCardPreview project={project} />

                      <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                        <span className="font-mono-tabular text-xs text-slate-400">
                          {String(index + 1).padStart(2, '0')} · {project.technologies.join(' · ')}
                        </span>
                        <span
                          className={`text-xs font-semibold ${
                            isProgress ? 'text-purple-300' : 'text-blue-400'
                          }`}
                        >
                          {isProgress
                            ? t(UI_STRINGS.statusInProgress)
                            : t(UI_STRINGS.statusCompleted)}
                        </span>
                      </div>

                      <h3 className="font-display mt-3 text-lg font-semibold text-slate-100 break-words">
                        {t(project.title)}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-slate-300">
                        {t(project.summary)}
                      </p>

                      {/* Honest Learning Outcome */}
                      <div className="mt-4 border-t border-slate-800/70 pt-3">
                        <p className="text-xs font-semibold text-slate-400">
                          {t(UI_STRINGS.cardLearningOutcome)}
                        </p>
                        <p className="mt-1 text-xs leading-relaxed text-slate-300">
                          {t(project.learningFocus)}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 border-t border-slate-800/80 pt-4">
                      {/* Real external links ONLY when defined in portfolioData */}
                      {(project.githubUrl || project.liveUrl) ? (
                        <div className="mb-3 flex flex-wrap gap-2">
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-slate-700 bg-[#060913] px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-blue-500/50 hover:text-white"
                            >
                              <FolderGit2 className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
                              <span>GitHub</span>
                            </a>
                          )}
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-slate-700 bg-[#060913] px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-blue-500/50 hover:text-white"
                            >
                              <ExternalLink className="h-3.5 w-3.5 text-blue-400" aria-hidden="true" />
                              <span>{t(UI_STRINGS.modalOpenLive)}</span>
                            </a>
                          )}
                        </div>
                      ) : (
                        <p className="mb-3 text-xs text-slate-400">
                          {t(UI_STRINGS.cardNoLinksYet)}
                        </p>
                      )}

                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex min-h-[44px] w-full items-center justify-between rounded-lg border border-slate-800 bg-[#060913]/85 px-4 py-2 text-xs font-semibold text-slate-200 transition-colors group-hover:border-blue-500/40 hover:bg-blue-600/15 hover:text-white"
                      >
                        <span>{t(UI_STRINGS.viewProjectDetails)}</span>
                        <ArrowUpRight className="h-4 w-4 text-blue-400" aria-hidden="true" />
                      </button>
                    </div>
                  </article>
                );
              })}
            </div>
          )}
        </m.div>
      </div>

      {selectedProject && (
        <Suspense fallback={null}>
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        </Suspense>
      )}
    </section>
  );
}
