import { Moon, Sun, FileText, Menu, X, Command, ChevronDown, ArrowUpRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { PROFILE, RESUMES } from '../data/portfolioData';

const NAV_ITEMS = [
  { label: 'Domains', href: '#domains' },
  { label: 'UI Lab', href: '#ui-lab' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ darkMode, onToggleTheme, onOpenPalette }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [resumeMenuOpen, setResumeMenuOpen] = useState(false);
  const [scrollPct, setScrollPct] = useState(0);
  const menuRef = useRef(null);

  useEffect(() => {
    const updateProgress = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) {
        setScrollPct(0);
        return;
      }
      setScrollPct(Math.min(100, Math.max(0, (window.scrollY / docHeight) * 100)));
    };
    updateProgress();
    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setResumeMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border-hairline)] bg-[var(--bg-page)]/85 backdrop-blur-md">
      <div className="h-[2px] w-full bg-transparent">
        <div
          className="h-full bg-[var(--accent-primary)] transition-[width] duration-75"
          style={{ width: `${scrollPct}%` }}
        />
      </div>

      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight text-[var(--text-primary)]"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--text-primary)] font-serif-display text-lg italic text-[var(--bg-page)] transition-transform duration-200 group-hover:scale-105 group-hover:-rotate-3">
            {PROFILE.initials}
          </span>
          <span className="hidden sm:inline">{PROFILE.name}</span>
          <span className="hidden rounded-full border border-[var(--border-hairline)] px-2 py-0.5 font-mono-code text-[11px] font-medium text-[var(--text-secondary)] md:inline-block">
            IIT Kanpur
          </span>
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Primary navigation">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--text-secondary)] transition-colors hover:text-[var(--text-primary)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onOpenPalette}
            aria-label="Open command palette"
            className="hidden cursor-pointer items-center gap-1.5 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-2.5 py-1.5 font-mono-code text-[11px] font-medium text-[var(--text-secondary)] transition-colors hover:border-[var(--text-muted)] hover:text-[var(--text-primary)] sm:inline-flex"
          >
            <Command className="h-3 w-3" />
            <span>Quick Jump</span>
            <kbd className="rounded bg-[var(--bg-subtle)] px-1.5 py-0.5 text-[10px]">/</kbd>
          </button>

          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-surface)] text-[var(--text-secondary)] transition-all hover:scale-105 hover:border-[var(--text-muted)] hover:text-[var(--text-primary)]"
          >
            {darkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          {/* 3-Resume Dropdown */}
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={() => setResumeMenuOpen((o) => !o)}
              aria-expanded={resumeMenuOpen}
              className="inline-flex cursor-pointer items-center gap-1.5 rounded-lg bg-[var(--text-primary)] px-3.5 py-2 text-xs font-semibold text-[var(--bg-page)] transition-opacity hover:opacity-90 sm:text-sm"
            >
              <FileText className="h-3.5 w-3.5" />
              <span>Resumes (3)</span>
              <ChevronDown className={`h-3.5 w-3.5 transition-transform ${resumeMenuOpen ? 'rotate-180' : ''}`} />
            </button>

            {resumeMenuOpen && (
              <div className="surface-card animate-modal-pop absolute right-0 mt-2 w-64 rounded-xl p-1.5 shadow-xl">
                <p className="px-2.5 py-1 font-mono-code text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                  Role-Tailored PDFs
                </p>
                {RESUMES.map((res) => (
                  <a
                    key={res.id}
                    href={res.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setResumeMenuOpen(false)}
                    className="flex items-start justify-between gap-2 rounded-lg px-2.5 py-2 transition-colors hover:bg-[var(--bg-subtle)]"
                  >
                    <div>
                      <p className="text-xs font-semibold text-[var(--text-primary)]">{res.label}</p>
                      <p className="text-[11px] text-[var(--text-muted)]">{res.focus}</p>
                    </div>
                    <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--accent-primary)]" />
                  </a>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileOpen}
            className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-surface)] text-[var(--text-primary)] md:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-[var(--border-hairline)] bg-[var(--bg-surface)] px-4 py-3 md:hidden">
          <div className="flex flex-col gap-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-md px-2 py-1.5 text-sm font-medium text-[var(--text-secondary)] hover:bg-[var(--bg-subtle)] hover:text-[var(--text-primary)]"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
