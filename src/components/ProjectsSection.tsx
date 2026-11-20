import { useRef, useState } from 'react';
import { ArrowUpRight, FolderCode, Terminal } from 'lucide-react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';
import { PROJECTS, UI_STRINGS } from '../data/portfolioData';
import type { ProjectFilter, ProjectItem } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

export function ProjectsSection() {
  const { t } = useLanguage();
  const [filter, setFilter] = useState<ProjectFilter>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const triggerRef = useRef<HTMLButtonElement | null>(null);

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

  const handleOpenProject = (project: ProjectItem, btn: HTMLButtonElement) => {
    triggerRef.current = btn;
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
    triggerRef.current?.focus();
  };

  return (
    <section id="projects" className="border-b border-slate-800/70 bg-[#0A0F1E] py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
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
                    className={`rounded-lg px-3 py-2 text-xs font-semibold transition-colors whitespace-nowrap shrink-0 min-h-[36px] ${
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
                    className="group flex flex-col justify-between rounded-2xl border border-slate-800/85 bg-[#0F172A]/85 p-6 transition-colors hover:border-blue-500/45"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-3">
                        <span className="font-mono-tabular text-xs text-slate-500">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span
                          className={`text-xs font-medium ${
                            isProgress ? 'text-purple-300' : 'text-blue-400'
                          }`}
                        >
                          {isProgress
                            ? t(UI_STRINGS.statusInProgress)
                            : t(UI_STRINGS.statusCompleted)}
                        </span>
                      </div>

                      <div className="mt-4 flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-[#060913] text-blue-400">
                          {project.category === 'python' ? (
                            <Terminal className="h-4 w-4" aria-hidden="true" />
                          ) : (
                            <FolderCode className="h-4 w-4 text-purple-400" aria-hidden="true" />
                          )}
                        </div>
                        <h3 className="font-display text-lg font-semibold text-slate-100">
                          {t(project.title)}
                        </h3>
                      </div>

                      <p className="mt-4 text-sm leading-relaxed text-slate-300">
                        {t(project.summary)}
                      </p>
                    </div>

                    <div className="mt-6 border-t border-slate-800/80 pt-4">
                      <p className="text-xs text-slate-400">
                        {project.technologies.join(' · ')}
                      </p>

                      <button
                        type="button"
                        onClick={(e) => handleOpenProject(project, e.currentTarget)}
                        className="mt-4 inline-flex min-h-[40px] w-full items-center justify-between rounded-lg border border-slate-800 bg-[#060913]/80 px-4 py-2 text-xs font-semibold text-slate-200 transition-colors group-hover:border-blue-500/40 hover:bg-blue-600/15 hover:text-white"
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
        </motion.div>
      </div>

      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </section>
  );
}
