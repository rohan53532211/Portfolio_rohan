import {
  ArrowUpRight,
  BookOpen,
  Compass,
  Copy,
  FileText,
  Moon,
  Search,
  Sun,
  X,
} from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';
import { PROFILE, PROJECTS, RESUMES } from '../data/portfolioData';

export default function CommandPalette({ open, onClose, darkMode, onToggleTheme, onOpenProject }) {
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef(null);

  const actions = useMemo(() => {
    const base = [
      {
        id: 'nav-domains',
        group: 'Navigate',
        label: 'Jump to SDE · Product · Finance Pillars',
        hint: '#domains',
        icon: Compass,
        run: () => document.getElementById('domains')?.scrollIntoView({ behavior: 'smooth' }),
      },
      {
        id: 'nav-lab',
        group: 'Navigate',
        label: 'Jump to 7v7 Frisbee & Interactive Project Lab',
        hint: '#ui-lab',
        icon: Compass,
        run: () => document.getElementById('ui-lab')?.scrollIntoView({ behavior: 'smooth' }),
      },
      {
        id: 'nav-projects',
        group: 'Navigate',
        label: 'Jump to Projects & Case Studies',
        hint: '#projects',
        icon: Compass,
        run: () => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }),
      },
      {
        id: 'nav-experience',
        group: 'Navigate',
        label: 'Jump to Experience & Leadership',
        hint: '#experience',
        icon: Compass,
        run: () => document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' }),
      },
      ...RESUMES.map((res) => ({
        id: `resume-${res.id}`,
        group: 'Resumes',
        label: `Open ${res.label} Resume PDF`,
        hint: 'PDF',
        icon: FileText,
        run: () => window.open(res.url, '_blank', 'noopener,noreferrer'),
      })),
      {
        id: 'action-theme',
        group: 'Actions',
        label: darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode',
        hint: 'Theme',
        icon: darkMode ? Sun : Moon,
        run: () => onToggleTheme(),
      },
      {
        id: 'action-email',
        group: 'Actions',
        label: `Copy Email (${PROFILE.email})`,
        hint: 'Clipboard',
        icon: Copy,
        run: () => navigator.clipboard?.writeText(PROFILE.email),
      },
    ];

    const projectItems = PROJECTS.map((p) => ({
      id: `proj-${p.id}`,
      group: 'Case Studies',
      label: p.title,
      hint: p.isLive ? 'Live + Case Study' : 'Case Study',
      keywords: p.tech.join(' '),
      icon: BookOpen,
      run: () => onOpenProject(p),
    }));

    const liveItems = PROJECTS.filter((p) => p.liveUrl).map((p) => ({
      id: `live-${p.id}`,
      group: 'Live Demos',
      label: `Open Live App: ${p.title}`,
      hint: 'Vercel',
      icon: ArrowUpRight,
      run: () => window.open(p.liveUrl, '_blank', 'noopener,noreferrer'),
    }));

    return [...base, ...liveItems, ...projectItems];
  }, [darkMode, onToggleTheme, onOpenProject]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter((item) =>
      `${item.label} ${item.group} ${item.keywords || ''}`.toLowerCase().includes(q),
    );
  }, [actions, query]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query, open]);

  useEffect(() => {
    if (!open) {
      setQuery('');
      return;
    }
    const timer = setTimeout(() => inputRef.current?.focus(), 20);
    return () => clearTimeout(timer);
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setActiveIndex((i) => (filtered.length ? (i + 1) % filtered.length : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setActiveIndex((i) => (filtered.length ? (i - 1 + filtered.length) % filtered.length : 0));
      } else if (e.key === 'Enter' && filtered[activeIndex]) {
        e.preventDefault();
        filtered[activeIndex].run();
        onClose();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, filtered, activeIndex, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/55 px-3 pt-14 backdrop-blur-xs sm:px-4 sm:pt-20"
      role="dialog"
      aria-modal="true"
      aria-label="Quick command palette"
      onClick={onClose}
    >
      <div
        className="surface-card animate-modal-pop w-full max-w-xl overflow-hidden rounded-2xl shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2.5 border-b border-[var(--border-hairline)] px-4 py-3">
          <Search className="h-4 w-4 text-[var(--text-muted)]" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search projects, SDE/PM/Finance resumes, or actions..."
            className="w-full bg-transparent text-base text-[var(--text-primary)] placeholder:text-[var(--text-muted)] focus:outline-none sm:text-sm"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label="Close command palette"
            className="rounded-md p-1 text-[var(--text-muted)] hover:bg-[var(--bg-subtle)] hover:text-[var(--text-primary)]"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="max-h-80 overflow-y-auto p-2">
          {filtered.length === 0 ? (
            <p className="px-3 py-8 text-center text-xs text-[var(--text-muted)]">
              No matching sections, projects, or resumes found.
            </p>
          ) : (
            filtered.map((item, idx) => {
              const Icon = item.icon;
              const selected = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  type="button"
                  onMouseEnter={() => setActiveIndex(idx)}
                  onClick={() => {
                    item.run();
                    onClose();
                  }}
                  className={`flex w-full cursor-pointer items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition-colors ${
                    selected
                      ? 'bg-[var(--accent-soft)] text-[var(--text-primary)]'
                      : 'text-[var(--text-secondary)] hover:bg-[var(--bg-subtle)]'
                  }`}
                >
                  <span className="flex items-center gap-2.5 truncate">
                    <Icon
                      className={`h-4 w-4 shrink-0 ${
                        selected ? 'text-[var(--accent-primary)]' : 'text-[var(--text-muted)]'
                      }`}
                    />
                    <span className="truncate font-medium">{item.label}</span>
                  </span>
                  <span className="ml-3 shrink-0 rounded-md border border-[var(--border-hairline)] bg-[var(--bg-page)] px-2 py-0.5 font-mono-code text-[10px] text-[var(--text-muted)]">
                    {item.hint}
                  </span>
                </button>
              );
            })
          )}
        </div>

        <div className="flex items-center justify-between border-t border-[var(--border-hairline)] bg-[var(--bg-subtle)]/60 px-4 py-2 font-mono-code text-[10px] text-[var(--text-muted)]">
          <span>↑↓ navigate · ↵ open</span>
          <span>ESC to close</span>
        </div>
      </div>
    </div>
  );
}
