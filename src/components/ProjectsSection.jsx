import { ArrowUpRight, Github, BookOpen, Search, X } from 'lucide-react';
import { useMemo, useState } from 'react';
import { PROJECTS } from '../data/portfolioData';
import ProjectVisual from './ProjectVisual';
import ProjectModal from './ProjectModal';
import Reveal from './Reveal';

const FILTERS = [
  { id: 'all', label: 'All Projects' },
  { id: 'live', label: 'Live Deployed' },
  { id: 'frontend', label: 'Frontend & Full-Stack' },
  { id: 'product', label: 'Product Builds' },
  { id: 'finance', label: 'Finance & Quant' },
  { id: 'systems', label: 'Systems & C++' },
];

export default function ProjectsSection({ selectedProject, onSelectProject }) {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const counts = useMemo(
    () => ({
      all: PROJECTS.length,
      live: PROJECTS.filter((p) => p.isLive).length,
      frontend: PROJECTS.filter((p) => p.domains.includes('frontend')).length,
      product: PROJECTS.filter((p) => p.domains.includes('product')).length,
      finance: PROJECTS.filter((p) => p.domains.includes('finance')).length,
      systems: PROJECTS.filter((p) => p.domains.includes('systems')).length,
    }),
    [],
  );

  const filteredProjects = useMemo(() => {
    const byCategory =
      filter === 'all'
        ? PROJECTS
        : filter === 'live'
          ? PROJECTS.filter((p) => p.isLive)
          : PROJECTS.filter((p) => p.domains.includes(filter));

    const q = searchQuery.trim().toLowerCase();
    if (!q) return byCategory;
    return byCategory.filter((p) =>
      `${p.title} ${p.subtitle} ${p.summary} ${p.tech.join(' ')}`.toLowerCase().includes(q),
    );
  }, [filter, searchQuery]);

  return (
    <section id="projects" className="border-b border-[var(--border-hairline)] py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-end">
            <div>
              <p className="font-mono-code text-xs font-semibold uppercase tracking-wider text-[var(--accent-primary)]">
                Selected Engineering, Product &amp; Finance Work
              </p>
              <h2 className="mt-1.5 text-3xl font-bold tracking-tight text-[var(--text-primary)] sm:text-4xl">
                Shipped interfaces, products &amp; quant models
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-[var(--text-secondary)]">
                Filter by domain or stack below. Click <span className="font-medium text-[var(--text-primary)]">Case Study</span>{' '}
                on any card to inspect problem framing, architecture, and execution highlights.
              </p>
            </div>

            <div className="w-full lg:max-w-xs">
              <div className="flex items-center gap-2 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-3 py-2 focus-within:border-[var(--accent-primary)]">
                <Search className="h-4 w-4 shrink-0 text-[var(--text-muted)]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Filter by stack (React, XGBoost, C++)..."
                  aria-label="Filter projects by keyword"
                  className="w-full bg-transparent text-base text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none sm:text-sm"
                />
                {searchQuery && (
                  <button
                    type="button"
                    onClick={() => setSearchQuery('')}
                    aria-label="Clear search"
                    className="cursor-pointer rounded p-0.5 text-[var(--text-muted)] hover:text-[var(--text-primary)]"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="mt-5 flex flex-wrap gap-1.5" role="group" aria-label="Project category filters">
            {FILTERS.map((tab) => {
              const active = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setFilter(tab.id)}
                  className={`inline-flex cursor-pointer items-center gap-1.5 rounded-xl border px-3.5 py-2 text-xs font-semibold transition-all ${
                    active
                      ? 'border-[var(--text-primary)] bg-[var(--text-primary)] text-[var(--bg-page)] shadow-xs'
                      : 'border-[var(--border-hairline)] bg-[var(--bg-surface)] text-[var(--text-secondary)] hover:border-[var(--text-muted)] hover:text-[var(--text-primary)]'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`rounded-full px-1.5 py-0.2 font-mono-code text-[10px] ${
                      active ? 'bg-white/20 text-current' : 'bg-[var(--bg-subtle)] text-[var(--text-muted)]'
                    }`}
                  >
                    {counts[tab.id]}
                  </span>
                </button>
              );
            })}
          </div>
        </Reveal>

        {filteredProjects.length === 0 ? (
          <div className="surface-card mt-9 rounded-2xl p-10 text-center">
            <p className="text-sm font-medium text-[var(--text-primary)]">
              No projects match &ldquo;{searchQuery}&rdquo; in this category.
            </p>
            <button
              type="button"
              onClick={() => {
                setFilter('all');
                setSearchQuery('');
              }}
              className="mt-3 cursor-pointer rounded-lg bg-[var(--text-primary)] px-4 py-2 text-xs font-semibold text-[var(--bg-page)]"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="mt-9 grid gap-6 md:grid-cols-2">
            {filteredProjects.map((project, idx) => (
              <Reveal key={project.id} delay={(idx % 2) * 80} className="min-w-0">
                <article className="surface-card group flex h-full min-w-0 flex-col justify-between rounded-2xl p-4 shadow-xs transition-all duration-200 hover:-translate-y-1 hover:border-[var(--text-muted)] hover:shadow-md sm:p-5">
                  <div>
                    <ProjectVisual type={project.previewType} />

                    <div className="mt-4 flex items-center justify-between gap-2">
                      <span className="font-mono-code text-[11px] font-medium text-[var(--text-muted)]">
                        {project.period}
                      </span>
                      {project.isLive ? (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/12 px-2.5 py-0.5 font-mono-code text-[11px] font-semibold text-emerald-700 dark:text-emerald-300">
                          <span className="relative flex h-1.5 w-1.5">
                            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
                            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-500" />
                          </span>
                          Live Demo
                        </span>
                      ) : (
                        <span className="rounded-full bg-[var(--bg-subtle)] px-2.5 py-0.5 font-mono-code text-[11px] font-medium text-[var(--text-secondary)]">
                          {project.badgeNote || 'Open Source'}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-2 text-lg font-bold tracking-tight text-[var(--text-primary)] transition-colors group-hover:text-[var(--accent-primary)] sm:text-xl">
                      {project.title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[var(--text-secondary)]">{project.summary}</p>

                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {project.metrics.map((metric) => (
                        <span
                          key={metric}
                          className="rounded-md bg-[var(--accent-soft)] px-2 py-0.5 font-mono-code text-[11px] font-medium text-[var(--accent-primary)]"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>

                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="rounded-md border border-[var(--border-hairline)] bg-[var(--bg-subtle)]/70 px-2 py-0.5 font-mono-code text-[11px] text-[var(--text-secondary)]"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border-hairline)] pt-4">
                    <div className="flex flex-wrap items-center gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 rounded-lg bg-[var(--text-primary)] px-3 py-1.5 text-xs font-semibold text-[var(--bg-page)] transition-opacity hover:opacity-90"
                        >
                          <span>Live Demo</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-subtle)] px-3 py-1.5 text-xs font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--text-muted)]"
                        >
                          <Github className="h-3.5 w-3.5" />
                          <span>GitHub</span>
                        </a>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => onSelectProject(project)}
                      className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-semibold text-[var(--accent-primary)] transition-colors hover:bg-[var(--accent-soft)]"
                    >
                      <BookOpen className="h-3.5 w-3.5" />
                      <span>Case Study</span>
                    </button>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        )}
      </div>

      <ProjectModal project={selectedProject} onClose={() => onSelectProject(null)} />
    </section>
  );
}
