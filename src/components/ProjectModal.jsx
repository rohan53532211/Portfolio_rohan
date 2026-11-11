import { X, ArrowUpRight, Github, Layers, Sparkles, CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';
import ProjectVisual from './ProjectVisual';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="surface-card animate-modal-pop relative max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl p-5 shadow-2xl sm:p-7"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-mono-code text-xs font-medium text-[var(--accent-primary)]">
                {project.period}
              </span>
              {project.isLive && (
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2.5 py-0.5 font-mono-code text-[11px] font-semibold text-emerald-600 dark:text-emerald-300">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Live on Vercel
                </span>
              )}
              {project.badgeNote && (
                <span className="rounded-full bg-[var(--bg-subtle)] px-2.5 py-0.5 font-mono-code text-[11px] font-medium text-[var(--text-secondary)]">
                  {project.badgeNote}
                </span>
              )}
            </div>
            <h3 id="project-modal-title" className="mt-1.5 text-xl font-bold text-[var(--text-primary)] sm:text-2xl">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">{project.subtitle}</p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close case study"
            className="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-subtle)] text-[var(--text-primary)] hover:border-[var(--text-muted)]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-5">
          <ProjectVisual type={project.previewType} />
        </div>

        {(project.liveUrl || project.githubUrl) && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--text-primary)] px-4 py-2 text-xs font-semibold text-[var(--bg-page)] hover:opacity-90"
              >
                <span>Open Live App</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)] px-4 py-2 text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--text-muted)]"
              >
                <Github className="h-3.5 w-3.5" />
                <span>View Source on GitHub</span>
              </a>
            )}
          </div>
        )}

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)]/60 p-4">
            <div className="flex items-center gap-1.5 font-mono-code text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
              <Sparkles className="h-3.5 w-3.5 text-[var(--accent-primary)]" />
              <span>Problem</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
              {project.problem}
            </p>
          </div>

          <div className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)]/60 p-4">
            <div className="flex items-center gap-1.5 font-mono-code text-xs font-semibold uppercase tracking-wide text-[var(--text-muted)]">
              <Layers className="h-3.5 w-3.5 text-[var(--accent-primary)]" />
              <span>Architecture</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)] sm:text-sm">
              {project.architecture}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="font-mono-code text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
            Key Engineering Highlights
          </h4>
          <ul className="mt-3 space-y-2.5">
            {project.highlights.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--text-secondary)]">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--emerald-status)]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 border-t border-[var(--border-hairline)] pt-4">
          <h4 className="font-mono-code text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
            Tech Stack
          </h4>
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-md border border-[var(--border-hairline)] bg-[var(--bg-subtle)] px-2.5 py-1 font-mono-code text-[11px] font-medium text-[var(--text-primary)]"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
