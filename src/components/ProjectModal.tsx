import { useEffect, useRef } from 'react';
import { Code2, ExternalLink, FolderGit2, ImageOff, X } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { UI_STRINGS } from '../data/portfolioData';
import type { ProjectItem } from '../types/portfolio';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { t } = useLanguage();
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    closeBtnRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const statusText =
    project.status === 'completed'
      ? t(UI_STRINGS.statusCompleted)
      : t(UI_STRINGS.statusInProgress);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div className="relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-slate-800 bg-[#0B1120] p-6 sm:p-8 shadow-2xl">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-medium text-blue-400">
              {project.technologies.join(' · ')} · {statusText}
            </p>
            <h3
              id="project-modal-title"
              className="font-display mt-2 text-2xl font-bold text-slate-100"
            >
              {t(project.title)}
            </h3>
          </div>

          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            aria-label={t(UI_STRINGS.modalClose)}
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300 transition-colors hover:border-slate-700 hover:text-white"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        {/* Visual / Screenshot Area (Honest Placeholder if no imageUrl) */}
        <div className="mt-6 overflow-hidden rounded-xl border border-slate-800 bg-[#060913]">
          {project.imageUrl ? (
            <img
              src={project.imageUrl}
              alt={t(project.title)}
              referrerPolicy="no-referrer"
              className="aspect-video w-full object-cover"
            />
          ) : (
            <div className="flex aspect-video w-full flex-col items-center justify-center px-6 text-center">
              <ImageOff className="h-7 w-7 text-slate-600" aria-hidden="true" />
              <p className="mt-3 max-w-sm text-xs leading-relaxed text-slate-400">
                {t(UI_STRINGS.modalScreenshotPlaceholder)}
              </p>
            </div>
          )}
        </div>

        {/* Project Details */}
        <div className="mt-6 space-y-4">
          <p className="text-base leading-relaxed text-slate-200">
            {t(project.details)}
          </p>

          <div className="rounded-xl border border-slate-800/80 bg-[#0F172A]/70 p-4">
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
              <Code2 className="h-3.5 w-3.5" aria-hidden="true" />
              <span>{t(UI_STRINGS.modalLearningFocus)}</span>
            </p>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-300">
              {t(project.learningFocus)}
            </p>
          </div>
        </div>

        {/* Repository / Live Preview Links or Honest Placeholder Notice */}
        <div className="mt-6 border-t border-slate-800/80 pt-5">
          {project.githubUrl || project.liveUrl ? (
            <div className="flex flex-wrap gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[42px] items-center gap-2 rounded-lg border border-slate-700 bg-slate-900 px-4 py-2 text-sm font-medium text-slate-100 transition-colors hover:border-blue-500/60"
                >
                  <FolderGit2 className="h-4 w-4 text-blue-400" aria-hidden="true" />
                  <span>{t(UI_STRINGS.modalOpenGithub)}</span>
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[42px] items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-500"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  <span>{t(UI_STRINGS.modalOpenLive)}</span>
                </a>
              )}
            </div>
          ) : (
            <div className="flex items-start gap-2.5 text-xs leading-relaxed text-slate-400">
              <FolderGit2 className="mt-0.5 h-4 w-4 shrink-0 text-slate-500" aria-hidden="true" />
              <span>{t(UI_STRINGS.modalRepoPlaceholder)}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
