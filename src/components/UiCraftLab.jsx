import { useEffect, useMemo, useState } from 'react';
import {
  Play,
  Pause,
  RotateCcw,
  Sliders,
  Activity,
  Copy,
  Check,
  MousePointerClick,
  TrendingUp,
  ArrowUpRight,
  Github,
} from 'lucide-react';
import Reveal from './Reveal';

function cubicBezier(p0, p1, p2, p3, t) {
  const u = 1 - t;
  const tt = t * t;
  const uu = u * u;
  const uuu = uu * u;
  const ttt = tt * t;
  return {
    x: uuu * p0.x + 3 * uu * t * p1.x + 3 * u * tt * p2.x + ttt * p3.x,
    y: uuu * p0.y + 3 * uu * t * p1.y + 3 * u * tt * p2.y + ttt * p3.y,
  };
}

function clamp(val, min, max) {
  return Math.max(min, Math.min(max, val));
}

const ACCENT_PRESETS = [
  { id: 'amber', name: 'Amber Gold', hex: '#f59e0b', glow: 'rgba(245, 158, 11, 0.35)' },
  { id: 'emerald', name: 'Emerald', hex: '#10b981', glow: 'rgba(16, 185, 129, 0.35)' },
  { id: 'cobalt', name: 'Cobalt', hex: '#3b82f6', glow: 'rgba(59, 130, 246, 0.35)' },
  { id: 'rose', name: 'Rose', hex: '#f43f5e', glow: 'rgba(244, 63, 94, 0.35)' },
];

const SPRING_STREET_ASSETS = {
  BASKET: {
    name: 'Equal-Weighted Basket',
    color: '#10b981',
    horizons: {
      '1Y': { value: '$12,480', roi: '+24.8%', cagr: '24.8%', vol: '16.2%', sharpe: '1.31', curve: [20, 28, 34, 30, 42, 48, 56, 62, 58, 70, 78, 86] },
      '3Y': { value: '$18,920', roi: '+89.2%', cagr: '23.7%', vol: '18.4%', sharpe: '1.18', curve: [18, 22, 19, 32, 38, 46, 52, 49, 64, 72, 82, 92] },
      '5Y': { value: '$26,410', roi: '+164.1%', cagr: '21.4%', vol: '19.8%', sharpe: '1.08', curve: [14, 24, 29, 21, 36, 48, 44, 58, 69, 76, 86, 96] },
    },
  },
  AAPL: {
    name: 'Apple Inc. (AAPL)',
    color: '#38bdf8',
    horizons: {
      '1Y': { value: '$12,150', roi: '+21.5%', cagr: '21.5%', vol: '17.9%', sharpe: '1.14', curve: [24, 26, 31, 36, 33, 45, 51, 58, 61, 68, 74, 80] },
      '3Y': { value: '$17,640', roi: '+76.4%', cagr: '20.8%', vol: '20.1%', sharpe: '1.03', curve: [20, 25, 28, 24, 35, 42, 47, 54, 60, 68, 75, 84] },
      '5Y': { value: '$25,180', roi: '+151.8%', cagr: '20.3%', vol: '22.4%', sharpe: '0.94', curve: [16, 28, 32, 26, 40, 50, 46, 60, 66, 74, 83, 91] },
    },
  },
  MSFT: {
    name: 'Microsoft (MSFT)',
    color: '#a78bfa',
    horizons: {
      '1Y': { value: '$12,690', roi: '+26.9%', cagr: '26.9%', vol: '16.8%', sharpe: '1.38', curve: [22, 30, 35, 38, 44, 53, 59, 64, 69, 76, 83, 90] },
      '3Y': { value: '$19,540', roi: '+95.4%', cagr: '25.0%', vol: '19.2%', sharpe: '1.22', curve: [18, 23, 27, 34, 41, 49, 55, 62, 68, 76, 85, 93] },
      '5Y': { value: '$28,340', roi: '+183.4%', cagr: '23.2%', vol: '20.6%', sharpe: '1.12', curve: [14, 22, 30, 25, 39, 51, 57, 65, 72, 81, 89, 98] },
    },
  },
  GOOGL: {
    name: 'Alphabet (GOOGL)',
    color: '#fbbf24',
    horizons: {
      '1Y': { value: '$12,310', roi: '+23.1%', cagr: '23.1%', vol: '20.4%', sharpe: '1.09', curve: [20, 24, 29, 27, 39, 46, 52, 57, 63, 67, 76, 83] },
      '3Y': { value: '$18,120', roi: '+81.2%', cagr: '21.9%', vol: '22.8%', sharpe: '0.98', curve: [19, 21, 17, 29, 36, 45, 50, 56, 61, 70, 79, 87] },
      '5Y': { value: '$24,950', roi: '+149.5%', cagr: '20.1%', vol: '24.1%', sharpe: '0.89', curve: [15, 25, 28, 19, 34, 46, 42, 55, 63, 71, 80, 89] },
    },
  },
  AMZN: {
    name: 'Amazon (AMZN)',
    color: '#fb7185',
    horizons: {
      '1Y': { value: '$12,780', roi: '+27.8%', cagr: '27.8%', vol: '21.5%', sharpe: '1.24', curve: [18, 27, 33, 31, 43, 50, 58, 63, 67, 74, 84, 92] },
      '3Y': { value: '$20,380', roi: '+103.8%', cagr: '26.8%', vol: '24.5%', sharpe: '1.12', curve: [16, 19, 15, 28, 39, 47, 56, 61, 70, 78, 88, 95] },
      '5Y': { value: '$27,160', roi: '+171.6%', cagr: '22.1%', vol: '26.2%', sharpe: '0.92', curve: [13, 26, 31, 18, 30, 42, 48, 59, 68, 77, 86, 94] },
    },
  },
};

const SOURCE_META = {
  frisbee: {
    project: 'Ultimate Frisbee Strategy Platform',
    stack: 'React 19 · Bézier & LERP Physics · 7v7 Tactical Engine',
    repoUrl: 'https://github.com/rohan53532211/Strategy_Simulation',
  },
  spring: {
    project: 'Spring Street — Portfolio Analytics Dashboard',
    stack: 'React 19 · Recharts · FastAPI · Quantitative Risk Metrics',
    liveUrl: 'https://spring-street-assignment-six.vercel.app',
    repoUrl: 'https://github.com/rohan53532211/Spring_street_assignment',
  },
  firefox: {
    project: 'Firefox Homepage — Developer Cockpit',
    stack: 'HTML5 · CSS3 Design Tokens · Vanilla JS WebExtension',
    repoUrl: 'https://github.com/rohan53532211/Firefox-Homepage',
  },
};

export default function UiCraftLab() {
  const [activeTab, setActiveTab] = useState('frisbee');

  // Tab 1: 7v7 Frisbee Simulation state
  const [formation, setFormation] = useState('vertical');
  const [progress, setProgress] = useState(0.38);
  const [playing, setPlaying] = useState(true);
  const [speed, setSpeed] = useState(1);
  const [targetCatch, setTargetCatch] = useState({ x: 350, y: 58 });

  useEffect(() => {
    if (!playing || activeTab !== 'frisbee') return;
    let frameId;
    let last = performance.now();

    const tick = (now) => {
      const dt = (now - last) / 1000;
      last = now;
      setProgress((prev) => {
        const next = prev + dt * 0.22 * speed;
        return next > 1 ? 0 : next;
      });
      frameId = requestAnimationFrame(tick);
    };

    frameId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frameId);
  }, [playing, speed, activeTab]);

  const handleFieldClick = (e) => {
    const svg = e.currentTarget;
    const rect = svg.getBoundingClientRect();
    const x = clamp(((e.clientX - rect.left) / rect.width) * 420, 145, 396);
    const y = clamp(((e.clientY - rect.top) / rect.height) * 210, 22, 188);
    setTargetCatch({ x: Math.round(x), y: Math.round(y) });
  };

  const sim7v7 = useMemo(() => {
    const t = progress;
    const isVert = formation === 'vertical';

    // Define 7 offensive routes (cubic Bezier 4 control points) + 7 defender assignments
    const offenseRoutes = isVert
      ? [
          { id: 'O1', role: 'Handler', pts: [{ x: 74, y: 118 }, { x: 80, y: 115 }, { x: 86, y: 113 }, { x: 92, y: 112 }] },
          { id: 'O2', role: 'Reset', pts: [{ x: 56, y: 162 }, { x: 68, y: 170 }, { x: 82, y: 168 }, { x: 96, y: 158 }] },
          { id: 'O3', role: 'Stack', pts: [{ x: 142, y: 105 }, { x: 135, y: 86 }, { x: 128, y: 74 }, { x: 122, y: 62 }] },
          { id: 'O4', role: 'Stack', pts: [{ x: 176, y: 105 }, { x: 168, y: 128 }, { x: 154, y: 148 }, { x: 138, y: 156 }] },
          { id: 'O5', role: 'Stack', pts: [{ x: 210, y: 105 }, { x: 216, y: 84 }, { x: 224, y: 70 }, { x: 232, y: 60 }] },
          {
            id: 'O6',
            role: 'Primary Cut',
            primary: true,
            pts: [
              { x: 244, y: 105 },
              { x: 264, y: (105 + targetCatch.y) * 0.48 },
              { x: (264 + targetCatch.x) * 0.56, y: targetCatch.y - 16 },
              targetCatch,
            ],
          },
          { id: 'O7', role: 'Deep Stack', pts: [{ x: 278, y: 105 }, { x: 290, y: 130 }, { x: 304, y: 148 }, { x: 318, y: 158 }] },
        ]
      : [
          { id: 'O1', role: 'Handler', pts: [{ x: 74, y: 108 }, { x: 82, y: 106 }, { x: 88, y: 104 }, { x: 96, y: 104 }] },
          { id: 'O2', role: 'Wing H', pts: [{ x: 64, y: 52 }, { x: 82, y: 46 }, { x: 98, y: 44 }, { x: 112, y: 50 }] },
          { id: 'O3', role: 'Wing H', pts: [{ x: 64, y: 162 }, { x: 84, y: 168 }, { x: 100, y: 164 }, { x: 114, y: 154 }] },
          {
            id: 'O4',
            role: 'Primary Cut',
            primary: true,
            pts: [
              { x: 186, y: 46 },
              { x: 224, y: clamp(targetCatch.y - 24, 18, 188) },
              { x: (224 + targetCatch.x) * 0.58, y: targetCatch.y - 10 },
              targetCatch,
            ],
          },
          { id: 'O5', role: 'Popper', pts: [{ x: 194, y: 88 }, { x: 176, y: 102 }, { x: 160, y: 114 }, { x: 146, y: 122 }] },
          { id: 'O6', role: 'Popper', pts: [{ x: 194, y: 128 }, { x: 224, y: 118 }, { x: 248, y: 106 }, { x: 272, y: 98 }] },
          { id: 'O7', role: 'Far Wing', pts: [{ x: 186, y: 172 }, { x: 228, y: 174 }, { x: 266, y: 166 }, { x: 304, y: 158 }] },
        ];

    const offense = offenseRoutes.map((r) => ({
      ...r,
      pos: cubicBezier(r.pts[0], r.pts[1], r.pts[2], r.pts[3], t),
    }));

    // 7 Defenders with slight reaction lag & spacing offset
    const defense = offenseRoutes.map((r, idx) => {
      const defT = clamp(t * 0.92, 0, 1);
      const base = cubicBezier(r.pts[0], r.pts[1], r.pts[2], r.pts[3], defT);
      const dx = idx === 0 ? 15 : r.primary ? -16 : 11;
      const dy = idx === 0 ? -9 : idx % 2 === 0 ? 11 : -11;
      return {
        id: `D${idx + 1}`,
        pos: { x: clamp(base.x + dx, 18, 400), y: clamp(base.y + dy, 18, 192) },
      };
    });

    const handler = offense[0].pos;
    const primaryReceiverRoute = offenseRoutes.find((r) => r.primary);
    const primaryReceiver = offense.find((r) => r.primary);
    const catchPoint = cubicBezier(
      primaryReceiverRoute.pts[0],
      primaryReceiverRoute.pts[1],
      primaryReceiverRoute.pts[2],
      primaryReceiverRoute.pts[3],
      0.86,
    );

    const flightT = clamp((t - 0.18) / 0.68, 0, 1);
    const arcLift = Math.min(handler.y, catchPoint.y) - 48;
    const discCtrl1 = { x: handler.x + (catchPoint.x - handler.x) * 0.34, y: clamp(arcLift, 14, 180) };
    const discCtrl2 = { x: handler.x + (catchPoint.x - handler.x) * 0.72, y: clamp(arcLift - 6, 14, 180) };
    const disc =
      t < 0.18
        ? { x: handler.x + 11, y: handler.y - 4 }
        : t > 0.86
          ? { x: primaryReceiver.pos.x + 8, y: primaryReceiver.pos.y - 6 }
          : cubicBezier(handler, discCtrl1, discCtrl2, catchPoint, flightT);

    const pathToSvg = (pts) =>
      `M ${pts[0].x} ${pts[0].y} C ${pts[1].x} ${pts[1].y}, ${pts[2].x} ${pts[2].y}, ${pts[3].x} ${pts[3].y}`;

    const phase =
      t < 0.18
        ? '01 · 7v7 Stack Set'
        : t < 0.52
          ? '02 · H1 Releases Huck (Bézier)'
          : t < 0.86
            ? '03 · Receiver Break Cut'
            : '04 · Endzone Score / Catch';

    return {
      offense,
      defense,
      disc,
      phase,
      primaryPath: pathToSvg(primaryReceiverRoute.pts),
      discPath: pathToSvg([handler, discCtrl1, discCtrl2, catchPoint]),
      metersX: ((disc.x / 420) * 100).toFixed(1),
      metersY: ((disc.y / 210) * 37).toFixed(1),
    };
  }, [progress, targetCatch, formation]);

  // Tab 2: Spring Street Portfolio Explorer state
  const [assetKey, setAssetKey] = useState('BASKET');
  const [horizon, setHorizon] = useState('5Y');
  const activeAsset = SPRING_STREET_ASSETS[assetKey];
  const activeStats = activeAsset.horizons[horizon];

  const springSvgPath = useMemo(() => {
    const pts = activeStats.curve;
    const stepX = 360 / (pts.length - 1);
    const coords = pts.map((v, i) => ({ x: 10 + i * stepX, y: 125 - v * 1.1 }));
    const line = coords.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`).join(' ');
    const area = `${line} L ${coords[coords.length - 1].x.toFixed(1)} 135 L 10 135 Z`;
    return { line, area, last: coords[coords.length - 1] };
  }, [activeStats]);

  // Tab 3: Firefox Glassmorphism Token Studio state
  const [blurPx, setBlurPx] = useState(14);
  const [surfaceAlpha, setSurfaceAlpha] = useState(28);
  const [radiusPx, setRadiusPx] = useState(18);
  const [accent, setAccent] = useState(ACCENT_PRESETS[0]);
  const [copiedCss, setCopiedCss] = useState(false);
  const [cardTilt, setCardTilt] = useState({ rx: 0, ry: 0 });

  const cssOutput = `backdrop-filter: blur(${blurPx}px);\nbackground: rgba(255, 255, 255, ${(surfaceAlpha / 100).toFixed(2)});\nborder-radius: ${radiusPx}px;\n--accent: ${accent.hex};`;

  const handleCopyCss = async () => {
    try {
      await navigator.clipboard.writeText(cssOutput);
      setCopiedCss(true);
      setTimeout(() => setCopiedCss(false), 1800);
    } catch {
      // Ignore restricted clipboard
    }
  };

  const currentSource = SOURCE_META[activeTab];

  return (
    <section id="ui-lab" className="border-b border-[var(--border-hairline)] bg-[var(--bg-subtle)]/40 py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
            <div>
              <p className="font-mono-code text-xs font-semibold uppercase tracking-wider text-[var(--accent-primary)]">
                Interactive Project Lab
              </p>
              <h2 className="mt-1.5 text-2xl font-bold tracking-tight text-[var(--text-primary)] sm:text-3xl">
                Live sandboxes extracted directly from my projects
              </h2>
              <p className="mt-2 max-w-2xl text-sm text-[var(--text-secondary)]">
                Every interactive widget below is tagged with the exact GitHub project it powers—try the{' '}
                <span className="font-medium text-[var(--text-primary)]">7v7 Ultimate Frisbee Simulator</span>, slice
                returns in the <span className="font-medium text-[var(--text-primary)]">Spring Street FinTech Preview</span>,
                or tune live CSS tokens from <span className="font-medium text-[var(--text-primary)]">Developer Cockpit</span>.
              </p>
            </div>

            <div
              role="tablist"
              aria-label="Interactive lab modes"
              className="grid w-full grid-cols-1 gap-1 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] p-1 sm:inline-flex sm:w-auto sm:flex-wrap"
            >
              {[
                { id: 'frisbee', label: '7v7 Frisbee Sim', icon: Activity },
                { id: 'spring', label: 'FinTech Explorer', icon: TrendingUp },
                { id: 'firefox', label: 'Glass Token Studio', icon: Sliders },
              ].map((tab) => {
                const Icon = tab.icon;
                const active = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    onClick={() => setActiveTab(tab.id)}
                    className={`inline-flex cursor-pointer items-center justify-center gap-1.5 rounded-lg px-3.5 py-2.5 text-xs font-semibold transition-all sm:py-2 ${
                      active
                        ? 'bg-[var(--text-primary)] text-[var(--bg-page)] shadow-xs'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Clear Project Attribution Strip */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-surface)] px-4 py-2.5">
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="rounded-md bg-[var(--accent-soft)] px-2 py-0.5 font-mono-code text-[11px] font-semibold text-[var(--accent-primary)]">
              Source Project
            </span>
            <span className="font-bold text-[var(--text-primary)]">{currentSource.project}</span>
            <span className="hidden text-[var(--text-muted)] sm:inline">· {currentSource.stack}</span>
          </div>

          <div className="flex items-center gap-2">
            {currentSource.liveUrl && (
              <a
                href={currentSource.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-lg bg-[var(--text-primary)] px-2.5 py-1 text-[11px] font-semibold text-[var(--bg-page)]"
              >
                <span>Open Full Live App</span>
                <ArrowUpRight className="h-3 w-3" />
              </a>
            )}
            <a
              href={currentSource.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-subtle)] px-2.5 py-1 text-[11px] font-semibold text-[var(--text-primary)] hover:border-[var(--text-muted)]"
            >
              <Github className="h-3 w-3" />
              <span>Source Repo</span>
            </a>
          </div>
        </div>

        {/* TAB 1: 7v7 Ultimate Frisbee Game Simulator */}
        {activeTab === 'frisbee' && (
          <div className="surface-card animate-modal-pop mt-4 grid gap-6 rounded-2xl p-3.5 shadow-xs sm:p-6 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-8">
              <div className="relative overflow-hidden rounded-xl border border-emerald-900/30 bg-gradient-to-br from-[#0d3b2e] via-[#0b2e24] to-[#081f19] p-2.5 sm:p-3">
                <div className="mb-2 flex flex-wrap items-center justify-between gap-2 px-1 font-mono-code text-[10px] text-emerald-200/90 sm:text-[11px]">
                  <span className="inline-flex items-center gap-1.5">
                    <MousePointerClick className="h-3.5 w-3.5 shrink-0 text-amber-300" />
                    <span>7v7 · Tap or click pitch to set throw target</span>
                  </span>
                  <span className="rounded bg-white/10 px-2 py-0.5 text-[10px]">
                    O1–O7 vs D1–D7
                  </span>
                </div>

                <svg
                  viewBox="0 0 420 210"
                  onClick={handleFieldClick}
                  className="h-auto w-full touch-manipulation cursor-crosshair select-none"
                  role="img"
                  aria-label="7v7 Ultimate Frisbee tactical simulation pitch"
                >
                  {/* Field boundary & endzones */}
                  <rect x="10" y="10" width="400" height="190" rx="6" fill="none" stroke="rgba(255,255,255,0.22)" strokeWidth="1.5" />
                  <line x1="78" y1="10" x2="78" y2="200" stroke="rgba(255,255,255,0.2)" strokeDasharray="4 4" />
                  <line x1="342" y1="10" x2="342" y2="200" stroke="rgba(255,255,255,0.2)" strokeDasharray="4 4" />
                  <line x1="210" y1="10" x2="210" y2="200" stroke="rgba(255,255,255,0.08)" />
                  <text x="380" y="24" textAnchor="middle" fontSize="8" fill="rgba(255,255,255,0.32)">
                    ENDZONE
                  </text>

                  {/* Primary cut & disc flight curve */}
                  <path d={sim7v7.primaryPath} fill="none" stroke="rgba(52, 211, 153, 0.55)" strokeWidth="2" strokeDasharray="5 4" />
                  <path d={sim7v7.discPath} fill="none" stroke="rgba(255, 255, 255, 0.6)" strokeWidth="1.8" strokeDasharray="3 3" />

                  <circle cx={targetCatch.x} cy={targetCatch.y} r="10" fill="none" stroke="rgba(251, 191, 36, 0.6)" strokeDasharray="2 2" />

                  {/* 7 Defenders */}
                  {sim7v7.defense.map((def) => (
                    <g key={def.id}>
                      <circle cx={def.pos.x} cy={def.pos.y} r="6.4" fill="#fb7185" stroke="#081f19" strokeWidth="1.6" />
                      <text x={def.pos.x} y={def.pos.y + 2.6} textAnchor="middle" fontSize="6.5" fontWeight="700" fill="#081f19">
                        {def.id}
                      </text>
                    </g>
                  ))}

                  {/* 7 Offense Players */}
                  {sim7v7.offense.map((off, idx) => {
                    const fill = idx === 0 ? '#fbbf24' : off.primary ? '#34d399' : '#38bdf8';
                    return (
                      <g key={off.id}>
                        <circle cx={off.pos.x} cy={off.pos.y} r="7.2" fill={fill} stroke="#081f19" strokeWidth="1.8" />
                        <text x={off.pos.x} y={off.pos.y + 2.8} textAnchor="middle" fontSize="7" fontWeight="700" fill="#081f19">
                          {off.id}
                        </text>
                      </g>
                    );
                  })}

                  {/* Flying Disc */}
                  <circle cx={sim7v7.disc.x} cy={sim7v7.disc.y} r="6.8" fill="rgba(255,255,255,0.24)" />
                  <circle cx={sim7v7.disc.x} cy={sim7v7.disc.y} r="4.1" fill="#ffffff" stroke="#f59e0b" strokeWidth="1.5" />
                </svg>
              </div>
            </div>

            <div className="flex min-w-0 flex-col justify-between gap-4 lg:col-span-4">
              <div className="space-y-3">
                <div>
                  <span className="mb-1.5 block font-mono-code text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                    7v7 Playbook Formation
                  </span>
                  <div className="grid grid-cols-2 gap-1.5">
                    {[
                      { id: 'vertical', label: 'Vertical Stack' },
                      { id: 'horizontal', label: 'Horizontal Stack' },
                    ].map((f) => (
                      <button
                        key={f.id}
                        type="button"
                        onClick={() => setFormation(f.id)}
                        className={`cursor-pointer rounded-lg border px-2.5 py-1.5 text-xs font-semibold transition-colors ${
                          formation === f.id
                            ? 'border-[var(--accent-primary)] bg-[var(--accent-soft)] text-[var(--accent-primary)]'
                            : 'border-[var(--border-hairline)] text-[var(--text-secondary)]'
                        }`}
                      >
                        {f.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setPlaying((p) => !p)}
                    className="inline-flex flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-lg bg-[var(--text-primary)] px-3 py-2 text-xs font-semibold text-[var(--bg-page)] transition-opacity hover:opacity-90"
                  >
                    {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                    <span>{playing ? 'Pause' : 'Play'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setPlaying(false);
                      setProgress(0);
                      setTargetCatch({ x: 350, y: 58 });
                    }}
                    aria-label="Reset 7v7 simulation"
                    className="inline-flex cursor-pointer items-center justify-center rounded-lg border border-[var(--border-hairline)] bg-[var(--bg-subtle)] p-2 text-[var(--text-primary)] hover:border-[var(--text-muted)]"
                  >
                    <RotateCcw className="h-3.5 w-3.5" />
                  </button>
                </div>

                <div>
                  <label htmlFor="sim-scrub" className="mb-1 flex justify-between font-mono-code text-[11px] text-[var(--text-secondary)]">
                    <span>Play Timeline</span>
                    <span>{Math.round(progress * 100)}%</span>
                  </label>
                  <input
                    id="sim-scrub"
                    type="range"
                    min="0"
                    max="100"
                    value={Math.round(progress * 100)}
                    onChange={(e) => {
                      setPlaying(false);
                      setProgress(Number(e.target.value) / 100);
                    }}
                    className="w-full cursor-pointer accent-[var(--accent-primary)]"
                  />
                </div>

                <div className="flex items-center justify-between gap-2">
                  <span className="font-mono-code text-[11px] text-[var(--text-secondary)]">Speed</span>
                  <div className="flex gap-1.5">
                    {[0.5, 1, 1.75].map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSpeed(s)}
                        className={`cursor-pointer rounded-md border px-2.5 py-1 font-mono-code text-[11px] font-medium ${
                          speed === s
                            ? 'border-[var(--accent-primary)] bg-[var(--accent-soft)] text-[var(--accent-primary)]'
                            : 'border-[var(--border-hairline)] text-[var(--text-secondary)]'
                        }`}
                      >
                        {s}x
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)]/70 p-3.5 font-mono-code text-xs">
                <p className="text-[11px] uppercase tracking-wide text-[var(--text-muted)]">Live State Machine</p>
                <p className="mt-1 font-semibold text-[var(--text-primary)]">{sim7v7.phase}</p>
                <div className="mt-2.5 grid grid-cols-2 gap-2 border-t border-[var(--border-hairline)] pt-2.5 text-[11px] text-[var(--text-secondary)]">
                  <span>Disc X: {sim7v7.metersX}m</span>
                  <span>Disc Y: {sim7v7.metersY}m</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: Spring Street FinTech Explorer */}
        {activeTab === 'spring' && (
          <div className="surface-card animate-modal-pop mt-4 grid gap-6 rounded-2xl p-4 shadow-xs sm:p-6 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-8">
              <div className="rounded-xl border border-slate-800 bg-gradient-to-br from-slate-950 via-[#0f172a] to-[#062e24] p-4 text-white">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div>
                    <p className="font-mono-code text-[11px] text-slate-400">
                      $10,000 Hypothetical Growth · Interactive Model Preview
                    </p>
                    <p className="mt-0.5 text-xl font-bold tracking-tight">
                      {activeAsset.name}{' '}
                      <span className="ml-2 font-mono-code text-base text-emerald-400">{activeStats.roi}</span>
                    </p>
                  </div>

                  <div className="inline-flex rounded-lg border border-white/15 bg-white/5 p-0.5 font-mono-code text-xs">
                    {['1Y', '3Y', '5Y'].map((h) => (
                      <button
                        key={h}
                        type="button"
                        onClick={() => setHorizon(h)}
                        className={`cursor-pointer rounded-md px-2.5 py-1 font-semibold transition-colors ${
                          horizon === h ? 'bg-white text-slate-950' : 'text-slate-300 hover:text-white'
                        }`}
                      >
                        {h}
                      </button>
                    ))}
                  </div>
                </div>

                <svg viewBox="0 0 380 140" className="mt-4 h-40 w-full" role="img" aria-label="Portfolio compounding curve">
                  <defs>
                    <linearGradient id="springArea" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor={activeAsset.color} stopOpacity="0.45" />
                      <stop offset="100%" stopColor={activeAsset.color} stopOpacity="0.02" />
                    </linearGradient>
                  </defs>
                  <line x1="10" y1="35" x2="370" y2="35" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
                  <line x1="10" y1="80" x2="370" y2="80" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
                  <path d={springSvgPath.area} fill="url(#springArea)" />
                  <path d={springSvgPath.line} fill="none" stroke={activeAsset.color} strokeWidth="3" strokeLinecap="round" />
                  <circle cx={springSvgPath.last.x} cy={springSvgPath.last.y} r="4.5" fill="#fff" stroke={activeAsset.color} strokeWidth="2.5" />
                </svg>
              </div>
            </div>

            <div className="flex min-w-0 flex-col justify-between gap-4 lg:col-span-4">
              <div>
                <span className="mb-2 block font-mono-code text-[11px] uppercase tracking-wider text-[var(--text-muted)]">
                  Select Asset / Basket
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {Object.keys(SPRING_STREET_ASSETS).map((key) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setAssetKey(key)}
                      className={`cursor-pointer rounded-lg border px-2.5 py-1.5 font-mono-code text-xs font-semibold transition-colors ${
                        assetKey === key
                          ? 'border-[var(--accent-primary)] bg-[var(--accent-soft)] text-[var(--accent-primary)]'
                          : 'border-[var(--border-hairline)] text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                      }`}
                    >
                      {key}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                <div className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)]/70 p-3">
                  <span className="font-mono-code text-[10px] uppercase text-[var(--text-muted)]">End Value</span>
                  <p className="mt-0.5 text-base font-bold text-[var(--text-primary)]">{activeStats.value}</p>
                </div>
                <div className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)]/70 p-3">
                  <span className="font-mono-code text-[10px] uppercase text-[var(--text-muted)]">CAGR</span>
                  <p className="mt-0.5 text-base font-bold text-[var(--emerald-status)]">{activeStats.cagr}</p>
                </div>
                <div className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)]/70 p-3">
                  <span className="font-mono-code text-[10px] uppercase text-[var(--text-muted)]">Volatility</span>
                  <p className="mt-0.5 text-base font-bold text-[var(--text-primary)]">{activeStats.vol}</p>
                </div>
                <div className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)]/70 p-3">
                  <span className="font-mono-code text-[10px] uppercase text-[var(--text-muted)]">Sharpe Ratio</span>
                  <p className="mt-0.5 text-base font-bold text-[var(--accent-primary)]">{activeStats.sharpe}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: Firefox Homepage Glass Token Studio */}
        {activeTab === 'firefox' && (
          <div className="surface-card animate-modal-pop mt-4 grid gap-6 rounded-2xl p-4 shadow-xs sm:p-6 lg:grid-cols-12">
            <div className="min-w-0 lg:col-span-7">
              <div
                className="relative flex min-h-[240px] items-center justify-center overflow-hidden rounded-xl p-4 sm:min-h-[260px] sm:p-6"
                style={{
                  background: `radial-gradient(circle at 20% 20%, ${accent.glow}, transparent 55%), linear-gradient(135deg, #111827 0%, #1e293b 50%, #0f172a 100%)`,
                }}
              >
                <div
                  onMouseMove={(e) => {
                    if (window.matchMedia?.('(hover: none)').matches) return;
                    const rect = e.currentTarget.getBoundingClientRect();
                    const px = (e.clientX - rect.left) / rect.width - 0.5;
                    const py = (e.clientY - rect.top) / rect.height - 0.5;
                    setCardTilt({ rx: (-py * 10).toFixed(2), ry: (px * 12).toFixed(2) });
                  }}
                  onMouseLeave={() => setCardTilt({ rx: 0, ry: 0 })}
                  className="w-full max-w-sm border border-white/25 p-5 text-white shadow-2xl transition-all duration-150"
                  style={{
                    backdropFilter: `blur(${blurPx}px)`,
                    WebkitBackdropFilter: `blur(${blurPx}px)`,
                    backgroundColor: `rgba(255, 255, 255, ${surfaceAlpha / 100})`,
                    borderRadius: `${radiusPx}px`,
                    transform: `perspective(700px) rotateX(${cardTilt.rx}deg) rotateY(${cardTilt.ry}deg)`,
                  }}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="rounded-full px-2.5 py-0.5 font-mono-code text-[11px] font-semibold text-slate-950"
                      style={{ backgroundColor: accent.hex }}
                    >
                      FIREFOX COCKPIT
                    </span>
                    <span className="font-mono-code text-xs text-white/80">Hover to tilt</span>
                  </div>
                  <h3 className="mt-4 text-lg font-bold tracking-tight">Glassmorphism Token Engine</h3>
                  <p className="mt-1 text-xs leading-relaxed text-white/80">
                    Real-time surface customizer built for my zero-dependency browser New Tab extension.
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="inline-block h-2 w-12 rounded-full" style={{ backgroundColor: accent.hex }} />
                    <span className="font-mono-code text-[11px] text-white/75">
                      blur({blurPx}px) · radius {radiusPx}px
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex min-w-0 flex-col justify-between gap-4 lg:col-span-5">
              <div className="space-y-3.5">
                <div>
                  <label htmlFor="blur-range" className="mb-1 flex justify-between font-mono-code text-xs text-[var(--text-secondary)]">
                    <span>Backdrop Blur</span>
                    <span>{blurPx}px</span>
                  </label>
                  <input
                    id="blur-range"
                    type="range"
                    min="0"
                    max="24"
                    value={blurPx}
                    onChange={(e) => setBlurPx(Number(e.target.value))}
                    className="w-full cursor-pointer accent-[var(--accent-primary)]"
                  />
                </div>

                <div>
                  <label htmlFor="alpha-range" className="mb-1 flex justify-between font-mono-code text-xs text-[var(--text-secondary)]">
                    <span>Surface Opacity</span>
                    <span>{surfaceAlpha}%</span>
                  </label>
                  <input
                    id="alpha-range"
                    type="range"
                    min="8"
                    max="60"
                    value={surfaceAlpha}
                    onChange={(e) => setSurfaceAlpha(Number(e.target.value))}
                    className="w-full cursor-pointer accent-[var(--accent-primary)]"
                  />
                </div>

                <div>
                  <label htmlFor="radius-range" className="mb-1 flex justify-between font-mono-code text-xs text-[var(--text-secondary)]">
                    <span>Border Radius</span>
                    <span>{radiusPx}px</span>
                  </label>
                  <input
                    id="radius-range"
                    type="range"
                    min="8"
                    max="28"
                    value={radiusPx}
                    onChange={(e) => setRadiusPx(Number(e.target.value))}
                    className="w-full cursor-pointer accent-[var(--accent-primary)]"
                  />
                </div>

                <div>
                  <span className="mb-1.5 block font-mono-code text-xs text-[var(--text-secondary)]">Accent Swatch</span>
                  <div className="flex flex-wrap gap-2">
                    {ACCENT_PRESETS.map((preset) => (
                      <button
                        key={preset.id}
                        type="button"
                        onClick={() => setAccent(preset)}
                        className={`inline-flex cursor-pointer items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-medium ${
                          accent.id === preset.id
                            ? 'border-[var(--text-primary)] bg-[var(--bg-subtle)] text-[var(--text-primary)]'
                            : 'border-[var(--border-hairline)] text-[var(--text-secondary)]'
                        }`}
                      >
                        <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: preset.hex }} />
                        <span>{preset.name}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-[var(--border-hairline)] bg-[var(--bg-subtle)] p-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono-code text-[11px] text-[var(--text-muted)]">Generated CSS Tokens</span>
                  <button
                    type="button"
                    onClick={handleCopyCss}
                    className="inline-flex cursor-pointer items-center gap-1 font-mono-code text-[11px] font-semibold text-[var(--accent-primary)]"
                  >
                    {copiedCss ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                    <span>{copiedCss ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
                <pre className="mt-2 overflow-x-auto whitespace-pre-wrap break-words font-mono-code text-[11px] leading-relaxed text-[var(--text-primary)]">
                  {cssOutput}
                </pre>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
