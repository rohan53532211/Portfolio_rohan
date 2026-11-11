import { ArrowUpRight, Check, Copy, FileText, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { useState } from 'react';
import { PROFILE, RESUMES, SKILL_GROUPS } from '../data/portfolioData';
import Reveal from './Reveal';

export default function SkillsAndContact() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <>
      <section id="skills" className="border-b border-[var(--border-hairline)] py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="max-w-2xl">
              <p className="font-mono-code text-xs font-semibold uppercase tracking-wider text-[var(--accent-primary)]">
                Technical &amp; Domain Toolkit
              </p>
              <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
                Stacks across Engineering, Product &amp; Quant Finance
              </h2>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {SKILL_GROUPS.map((group, idx) => (
              <Reveal key={group.title} delay={idx * 65}>
                <div className="surface-card h-full rounded-2xl p-5 shadow-xs transition-colors hover:border-[var(--text-muted)]">
                  <h3 className="font-mono-code text-xs font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                    {group.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-subtle)]/75 px-2.5 py-1 text-xs font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent-primary)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <footer id="contact" className="py-14 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <Reveal>
            <div className="surface-card rounded-3xl p-6 shadow-sm sm:p-10">
              <div className="grid items-center gap-8 lg:grid-cols-12">
                <div className="lg:col-span-6">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--accent-soft)] px-3 py-1 font-mono-code text-xs font-semibold text-[var(--accent-primary)]">
                    Open to SDE / Frontend · Product · Finance Roles
                  </span>
                  <h2 className="mt-3 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
                    Let&apos;s build fast, customer-loved products together.
                  </h2>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-[var(--text-secondary)]">
                    All live Vercel demos, public GitHub repos, and role-specific resumes below are publicly accessible
                    with no login walls. Reach out at{' '}
                    <a href={`mailto:${PROFILE.email}`} className="font-semibold text-[var(--text-primary)] underline">
                      {PROFILE.email}
                    </a>
                    .
                  </p>
                </div>

                <div className="space-y-3 lg:col-span-6">
                  {/* All 3 Role Resumes */}
                  <div className="flex flex-wrap gap-2 lg:justify-end">
                    {RESUMES.map((res) => (
                      <a
                        key={res.id}
                        href={res.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)] px-3.5 py-2 text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--accent-primary)]"
                      >
                        <FileText className="h-3.5 w-3.5 text-[var(--accent-primary)]" />
                        <span>{res.shortLabel}</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </a>
                    ))}
                  </div>

                  {/* Direct Socials */}
                  <div className="flex flex-wrap gap-2.5 lg:justify-end">
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-[var(--text-primary)] px-4 py-2.5 text-xs font-semibold text-[var(--bg-page)] hover:opacity-90"
                    >
                      {copiedEmail ? <Check className="h-3.5 w-3.5" /> : <Mail className="h-3.5 w-3.5" />}
                      <span>{copiedEmail ? 'Email Copied!' : 'Copy Email'}</span>
                      {!copiedEmail && <Copy className="h-3 w-3 opacity-75" />}
                    </button>

                    <a
                      href={PROFILE.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-4 py-2.5 text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--text-muted)]"
                    >
                      <Github className="h-3.5 w-3.5" />
                      <span>GitHub</span>
                    </a>

                    <a
                      href={PROFILE.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-4 py-2.5 text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--text-muted)]"
                    >
                      <Linkedin className="h-3.5 w-3.5" />
                      <span>LinkedIn</span>
                    </a>

                    <a
                      href={PROFILE.codeforces}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-4 py-2.5 text-xs font-semibold text-[var(--text-primary)] hover:border-[var(--text-muted)]"
                    >
                      <Terminal className="h-3.5 w-3.5" />
                      <span>Codeforces</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="mt-8 flex flex-col items-center justify-between gap-2 text-xs text-[var(--text-muted)] sm:flex-row">
            <p>© 2026 {PROFILE.name} · IIT Kanpur</p>
            <p className="font-mono-code">Press / or ⌘K for Quick Jump · React 19, Vite &amp; Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </>
  );
}
