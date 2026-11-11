import { Briefcase, Award, GraduationCap } from 'lucide-react';
import { EXPERIENCE, LEADERSHIP_AND_ACHIEVEMENTS, PROFILE } from '../data/portfolioData';
import Reveal from './Reveal';

export default function ExperienceAndAchievements() {
  return (
    <section id="experience" className="border-b border-[var(--border-hairline)] bg-[var(--bg-subtle)]/35 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Left: Experience & Education */}
          <div className="min-w-0 space-y-6 lg:col-span-7">
            <Reveal>
              <div>
                <p className="font-mono-code text-xs font-semibold uppercase tracking-wider text-[var(--accent-primary)]">
                  Experience &amp; Research
                </p>
                <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
                  Production engineering &amp; analytical rigor
                </h2>
              </div>
            </Reveal>

            <div className="space-y-5">
              {EXPERIENCE.map((item, idx) => (
                <Reveal key={item.org} delay={idx * 80}>
                  <div className="surface-card rounded-2xl p-5 shadow-xs transition-colors hover:border-[var(--text-muted)] sm:p-6">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent-primary)]">
                          <Briefcase className="h-4 w-4" />
                        </span>
                        <div>
                          <h3 className="text-base font-bold text-[var(--text-primary)] sm:text-lg">{item.role}</h3>
                          <p className="text-sm font-medium text-[var(--text-secondary)]">{item.org}</p>
                        </div>
                      </div>
                      <span className="rounded-full border border-[var(--border-hairline)] bg-[var(--bg-subtle)] px-3 py-1 font-mono-code text-[11px] font-medium text-[var(--text-secondary)]">
                        {item.period}
                      </span>
                    </div>

                    <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">{item.summary}</p>

                    <ul className="mt-3.5 space-y-2">
                      {item.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-[var(--text-secondary)]">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-primary)]" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md border border-[var(--border-hairline)] bg-[var(--bg-subtle)] px-2.5 py-0.5 font-mono-code text-[11px] text-[var(--text-primary)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={140}>
              <div className="surface-card rounded-2xl p-5 shadow-xs transition-colors hover:border-[var(--text-muted)] sm:p-6">
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[var(--accent-soft)] text-[var(--accent-primary)]">
                    <GraduationCap className="h-4 w-4" />
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-base font-bold text-[var(--text-primary)]">
                        Indian Institute of Technology Kanpur (IIT Kanpur)
                      </h3>
                      <span className="font-mono-code text-xs text-[var(--text-muted)]">2023 – Present</span>
                    </div>
                    <p className="mt-1 text-sm text-[var(--text-secondary)]">{PROFILE.degree}</p>
                    <div className="mt-3 flex flex-wrap gap-2 font-mono-code text-[11px] text-[var(--text-secondary)]">
                      <span className="rounded-md bg-[var(--bg-subtle)] px-2.5 py-1">CPI: {PROFILE.cpi}</span>
                      <span className="rounded-md bg-[var(--bg-subtle)] px-2.5 py-1">CBSE XII: 93.4% (2023)</span>
                      <span className="rounded-md bg-[var(--bg-subtle)] px-2.5 py-1">CBSE X: 80.6% (2021)</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right: Leadership & Recognition */}
          <div className="min-w-0 space-y-6 lg:col-span-5">
            <Reveal>
              <div>
                <p className="font-mono-code text-xs font-semibold uppercase tracking-wider text-[var(--accent-primary)]">
                  Leadership &amp; Recognition
                </p>
                <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
                  Ownership beyond the screen
                </h2>
              </div>
            </Reveal>

            <div className="space-y-4">
              {LEADERSHIP_AND_ACHIEVEMENTS.map((item, idx) => (
                <Reveal key={item.title} delay={idx * 80}>
                  <div className="surface-card rounded-2xl p-5 shadow-xs transition-colors hover:border-[var(--text-muted)]">
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-2.5">
                        <Award className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-primary)]" />
                        <div>
                          <h3 className="text-sm font-bold text-[var(--text-primary)] sm:text-base">{item.title}</h3>
                          <p className="text-xs font-medium text-[var(--text-muted)]">{item.subtitle}</p>
                        </div>
                      </div>
                      <span className="shrink-0 font-mono-code text-[11px] text-[var(--text-muted)]">{item.period}</span>
                    </div>
                    <p className="mt-2.5 text-sm leading-relaxed text-[var(--text-secondary)]">{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
