import { ArrowDownRight, ArrowUpRight, Code2, Compass, TrendingUp, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { DOMAIN_PILLARS } from '../data/portfolioData';
import Reveal from './Reveal';

const ICONS = {
  sde: Code2,
  pm: Compass,
  finance: TrendingUp,
};

export default function DomainPillars() {
  const [activeId, setActiveId] = useState('pm');
  const active = DOMAIN_PILLARS.find((d) => d.id === activeId) || DOMAIN_PILLARS[0];

  return (
    <section id="domains" className="border-b border-[var(--border-hairline)] py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <p className="font-mono-code text-xs font-semibold uppercase tracking-wider text-[var(--accent-primary)]">
                Three Domains · One Problem-Solver
              </p>
              <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
                Enthusiastic across Software, Product &amp; Finance
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-[var(--text-secondary)]">
                I enjoy bridging engineering execution, product thinking, and quantitative finance—switch between the
                three roles below to see how my work, mindset, and tailored resumes align with each.
              </p>
            </div>

            <div className="grid w-full grid-cols-1 gap-1.5 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-1 sm:inline-flex sm:w-auto sm:flex-wrap">
              {DOMAIN_PILLARS.map((pillar) => {
                const Icon = ICONS[pillar.id];
                const isSelected = pillar.id === activeId;
                return (
                  <button
                    key={pillar.id}
                    type="button"
                    onClick={() => setActiveId(pillar.id)}
                    className={`inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-lg px-3.5 py-2.5 text-xs font-semibold transition-all sm:py-2 ${
                      isSelected
                        ? 'bg-[var(--text-primary)] text-[var(--bg-page)] shadow-xs'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span>
                      {pillar.id === 'sde'
                        ? 'SDE & Frontend'
                        : pillar.id === 'pm'
                          ? 'Product Management'
                          : 'Finance & Quant'}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        <div className="surface-card animate-modal-pop mt-6 rounded-2xl p-4 shadow-xs sm:p-7" key={active.id}>
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="flex min-w-0 flex-col justify-between lg:col-span-5">
              <div>
                <span className="inline-block rounded-full bg-[var(--accent-soft)] px-3 py-1 font-mono-code text-[11px] font-semibold text-[var(--accent-primary)]">
                  {active.badge}
                </span>
                <h3 className="mt-3 text-xl font-bold tracking-tight text-[var(--text-primary)] sm:text-2xl">
                  {active.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{active.enthusiasm}</p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {active.stack.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-[var(--border-hairline)] bg-[var(--bg-subtle)] px-2.5 py-1 font-mono-code text-[11px] text-[var(--text-primary)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2.5 border-t border-[var(--border-hairline)] pt-4">
                <a
                  href={active.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-xl bg-[var(--text-primary)] px-4 py-2 text-xs font-semibold text-[var(--bg-page)] hover:opacity-90"
                >
                  <span>{active.resumeLabel}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href={active.ctaTarget}
                  className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)] px-4 py-2 text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--text-muted)]"
                >
                  <span>{active.ctaLabel}</span>
                  <ArrowDownRight className="h-3.5 w-3.5 text-[var(--accent-primary)]" />
                </a>
              </div>
            </div>

            <div className="min-w-0 lg:col-span-7">
              {active.storySteps ? (
                <div>
                  <div className="mb-3 flex items-center justify-between">
                    <span className="font-mono-code text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                      Product Case Story · Ultimate Frisbee Strategy Platform
                    </span>
                    <span className="rounded bg-emerald-500/15 px-2 py-0.5 font-mono-code text-[11px] font-semibold text-emerald-700 dark:text-emerald-300">
                      0 → 1 Product Build
                    </span>
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {active.storySteps.map((st) => (
                      <div
                        key={st.step}
                        className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)]/65 p-4 transition-colors hover:border-[var(--accent-primary)]"
                      >
                        <span className="font-mono-code text-[11px] font-semibold text-[var(--accent-primary)]">
                          {st.step}
                        </span>
                        <h4 className="mt-1 text-sm font-bold text-[var(--text-primary)]">{st.title}</h4>
                        <p className="mt-1.5 text-xs leading-relaxed text-[var(--text-secondary)]">{st.detail}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="flex h-full flex-col justify-center space-y-3 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)]/55 p-5">
                  <span className="font-mono-code text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                    Key Proof Points
                  </span>
                  {active.highlights.map((pt, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-[var(--text-secondary)]">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[var(--emerald-status)]" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
