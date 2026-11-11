import { ArrowDownRight, ArrowUpRight, Copy, Check, Github, Linkedin, Terminal, Sparkles, FileText } from 'lucide-react';
import { useRef, useState } from 'react';
import { PROFILE, RESUMES, SNAPSHOT_STATS } from '../data/portfolioData';

const SNAPSHOT_MODES = {
  overview: SNAPSHOT_STATS,
  frontend: [
    {
      label: 'UI Architecture',
      value: 'React 19 & Next.js',
      detail: 'Component systems, Recharts/Chart.js dashboards & glassmorphic CSS',
    },
    {
      label: 'Motion & State',
      value: '7v7 SVG & FSM',
      detail: 'Cubic Bézier interpolation, LERP keyframing & -15% validation latency',
    },
    {
      label: 'Product Thinking',
      value: 'Discovery → Launch',
      detail: 'User research, MVP scoping & usability testing on Frisbee & Campus Awaaz',
    },
    {
      label: 'Quant & Finance',
      value: 'Pricing & ML Models',
      detail: 'Fama-French, Black-Litterman, XGBoost GDP & C++17 Swap Risk Engine',
    },
  ],
  credentials: [
    {
      label: 'Degree',
      value: 'IIT Kanpur (B.Tech)',
      detail: 'Biological Sciences & Bioengineering + IME Minor (2023–2027)',
    },
    {
      label: 'Competitive',
      value: 'Rank 28 · 3★',
      detail: 'CodeChef Starters 200 Global Rank 28 · Codeforces Pupil',
    },
    {
      label: 'Strategy & Finance',
      value: 'Top-10 · NISM-VIII',
      detail: 'Strategy Storm IITG (2,000+) · SEBI Equity Derivatives Certified',
    },
    {
      label: 'Campus Ops',
      value: "Udghosh'26 Head",
      detail: '85+ security team across 50+ events · Frisbee Club Coordinator',
    },
  ],
};

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [snapTab, setSnapTab] = useState('overview');
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const heroRef = useRef(null);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  const handleHeroMove = (e) => {
    const el = heroRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty('--mx', `${e.clientX - rect.left}px`);
    el.style.setProperty('--my', `${e.clientY - rect.top}px`);
  };

  const handleCardMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: (-py * 5).toFixed(2), ry: (px * 6).toFixed(2) });
  };

  return (
    <section
      id="top"
      ref={heroRef}
      onMouseMove={handleHeroMove}
      className="relative overflow-hidden border-b border-[var(--border-hairline)] bg-dot-grid"
    >
      <div className="hero-spotlight pointer-events-none absolute inset-0 transition-opacity duration-300" />

      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:py-22">
        <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <div className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-3.5 py-1.5 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--emerald-status)] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--emerald-status)]" />
              </span>
              <span className="font-mono-code text-xs font-medium text-[var(--text-secondary)]">
                IIT Kanpur &apos;27 · Open to SDE / Frontend · Product · Finance Roles
              </span>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl lg:text-[3.3rem] lg:leading-[1.08]">
              {PROFILE.headlineLead}{' '}
              <span className="font-serif-display font-normal italic text-[var(--accent-primary)]">
                {PROFILE.headlineAccent}
              </span>{' '}
              {PROFILE.headlineTail}
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[var(--text-secondary)] sm:text-lg">
              {PROFILE.subTagline}
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-[var(--text-primary)] px-5 py-3 text-sm font-semibold text-[var(--bg-page)] shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:shadow-md"
              >
                <span>Explore Selected Work</span>
                <ArrowDownRight className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </a>

              <a
                href="#domains"
                className="inline-flex items-center gap-2 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-5 py-3 text-sm font-semibold text-[var(--text-primary)] transition-all duration-150 hover:-translate-y-0.5 hover:border-[var(--text-muted)]"
              >
                <span>SDE · PM · Finance</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex cursor-pointer items-center gap-2 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)] px-4 py-3 font-mono-code text-xs font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--text-muted)] hover:text-[var(--text-primary)]"
              >
                {copiedEmail ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-[var(--emerald-status)]" />
                    <span>Copied {PROFILE.email}</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" />
                    <span>{PROFILE.email}</span>
                  </>
                )}
              </button>
            </div>

            {/* All 3 Role-Specific Resumes */}
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="font-mono-code text-[11px] font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                Resumes:
              </span>
              {RESUMES.map((res) => (
                <a
                  key={res.id}
                  href={res.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-3 py-1.5 text-xs font-semibold text-[var(--text-primary)] transition-colors hover:border-[var(--accent-primary)]"
                >
                  <FileText className="h-3.5 w-3.5 text-[var(--accent-primary)]" />
                  <span>{res.shortLabel}</span>
                  <ArrowUpRight className="h-3 w-3 text-[var(--text-muted)]" />
                </a>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-[var(--text-secondary)]">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-[var(--text-primary)]"
              >
                <Github className="h-4 w-4" />
                <span>github.com/rohan53532211</span>
              </a>
              <span className="text-[var(--border-hairline)]">/</span>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-[var(--text-primary)]"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
              <span className="text-[var(--border-hairline)]">/</span>
              <a
                href={PROFILE.codeforces}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-[var(--text-primary)]"
              >
                <Terminal className="h-4 w-4" />
                <span>Codeforces (bt_hai)</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div
              onMouseMove={handleCardMove}
              onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
              style={{
                transform: `perspective(950px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
              }}
              className="surface-card rounded-2xl p-5 shadow-sm transition-transform duration-200 ease-out sm:p-6"
            >
              <div className="flex items-center justify-between border-b border-[var(--border-hairline)] pb-3.5">
                <div>
                  <p className="flex items-center gap-1 font-mono-code text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                    <Sparkles className="h-3 w-3 text-[var(--accent-primary)]" />
                    <span>Interactive Snapshot</span>
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-[var(--text-primary)]">
                    {PROFILE.name} · {PROFILE.institute}
                  </p>
                </div>
                <span className="rounded-md bg-[var(--accent-soft)] px-2.5 py-1 font-mono-code text-xs font-semibold text-[var(--accent-primary)]">
                  B.Tech &apos;27
                </span>
              </div>

              <div className="mt-3.5 grid grid-cols-3 gap-1 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)] p-1">
                {[
                  { id: 'overview', label: 'Overview' },
                  { id: 'frontend', label: '3 Roles' },
                  { id: 'credentials', label: 'Credentials' },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => setSnapTab(tab.id)}
                    className={`cursor-pointer rounded-lg py-1.5 font-mono-code text-[11px] font-semibold transition-all ${
                      snapTab === tab.id
                        ? 'bg-[var(--bg-surface)] text-[var(--text-primary)] shadow-xs'
                        : 'text-[var(--text-muted)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="mt-3.5 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-1">
                {SNAPSHOT_MODES[snapTab].map((item) => (
                  <div
                    key={item.label}
                    className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)]/65 px-3.5 py-2.5 transition-colors hover:border-[var(--text-muted)]"
                  >
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-mono-code text-[11px] uppercase tracking-wide text-[var(--text-muted)]">
                        {item.label}
                      </span>
                      <span className="text-sm font-bold text-[var(--text-primary)]">{item.value}</span>
                    </div>
                    <p className="mt-0.5 text-xs text-[var(--text-secondary)]">{item.detail}</p>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-[var(--border-hairline)] pt-3.5">
                <span className="font-mono-code text-[11px] text-[var(--text-muted)]">Live production demos:</span>
                <div className="flex items-center gap-2">
                  <a
                    href="https://spring-street-assignment-six.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-md border border-[var(--border-hairline)] bg-[var(--bg-page)] px-2.5 py-1 font-mono-code text-[11px] font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent-primary)]"
                  >
                    <span>Spring Street</span>
                    <ArrowUpRight className="h-3 w-3 text-[var(--accent-primary)]" />
                  </a>
                  <a
                    href="https://black-coffer-assignment-umber.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 rounded-md border border-[var(--border-hairline)] bg-[var(--bg-page)] px-2.5 py-1 font-mono-code text-[11px] font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent-primary)]"
                  >
                    <span>Blackcoffer</span>
                    <ArrowUpRight className="h-3 w-3 text-[var(--accent-primary)]" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
