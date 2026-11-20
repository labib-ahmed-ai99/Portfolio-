import { Github, Instagram } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import {
  ALL_NAV_SECTIONS,
  IDENTITY,
  SOCIAL_LINKS,
  UI_STRINGS,
} from '../data/portfolioData';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-slate-800/80 bg-[#060913] py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12">
          {/* Identity & Tagline */}
          <div className="md:col-span-5">
            <p className="font-display text-lg font-bold text-slate-100">
              {t(IDENTITY.name)}
            </p>
            <p className="mt-2 text-sm text-blue-400">
              “{t(IDENTITY.tagline)}”
            </p>
            <p className="mt-3 max-w-sm text-xs leading-relaxed text-slate-400">
              {t(IDENTITY.role)}
            </p>
          </div>

          {/* All 9 Section Shortcuts */}
          <div className="md:col-span-4">
            <h2 className="font-display text-xs font-semibold uppercase tracking-wider text-slate-400">
              {t(UI_STRINGS.footerQuickLinks)}
            </h2>
            <ul className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2">
              {ALL_NAV_SECTIONS.map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-xs text-slate-300 transition-colors hover:text-blue-400"
                  >
                    {t(section.label)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* External Links */}
          <div className="md:col-span-3">
            <h2 className="font-display text-xs font-semibold uppercase tracking-wider text-slate-400">
              {t(UI_STRINGS.footerConnect)}
            </h2>
            <div className="mt-3 flex flex-col gap-2.5">
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-slate-300 transition-colors hover:text-blue-400"
              >
                <Github className="h-4 w-4" aria-hidden="true" />
                <span>GitHub</span>
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-slate-300 transition-colors hover:text-purple-400"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-800/70 pt-6 text-xs text-slate-500">
          <p>{t(UI_STRINGS.footerCopyright)}</p>
        </div>
      </div>
    </footer>
  );
}
