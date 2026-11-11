export default function ProjectVisual({ type }) {
  switch (type) {
    case 'spring-street':
      return (
        <div className="relative h-40 w-full overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-br from-slate-950 via-[#0f172a] to-[#064e3b] p-4 text-white">
          <div className="flex items-center justify-between font-mono-code text-[11px]">
            <span className="text-emerald-300">AAPL · MSFT · GOOGL · AMZN</span>
            <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-emerald-300">5Y CAGR</span>
          </div>
          <svg
            viewBox="0 0 280 85"
            className="mt-3 h-20 w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          >
            <defs>
              <linearGradient id="ssGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.45" />
                <stop offset="100%" stopColor="#10b981" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0,72 Q35,68 65,54 T135,44 T205,24 T280,10 L280,85 L0,85 Z" fill="url(#ssGrad)" />
            <path d="M0,72 Q35,68 65,54 T135,44 T205,24 T280,10" fill="none" stroke="#34d399" strokeWidth="2.5" />
            <circle cx="205" cy="24" r="3.5" fill="#fff" stroke="#10b981" strokeWidth="2" />
          </svg>
        </div>
      );

    case 'blackcoffer':
      return (
        <div className="relative h-40 w-full overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-br from-[#11131a] via-[#1a1f2e] to-[#272038] p-4 text-white">
          <div className="flex items-center justify-between font-mono-code text-[11px]">
            <span className="text-amber-300">MERN · Chart.js Analytics</span>
            <span className="rounded bg-white/10 px-2 py-0.5 text-slate-200">Dark / Light</span>
          </div>
          <div className="mt-5 flex h-20 items-end gap-2.5 px-1">
            {[42, 68, 54, 86, 62, 95, 74, 58].map((h, i) => (
              <div
                key={i}
                className="flex-1 origin-bottom rounded-t-md bg-gradient-to-t from-amber-500/80 to-amber-300/90 transition-transform duration-300 group-hover:scale-y-110"
                style={{ height: `${h}%`, transitionDelay: `${i * 25}ms` }}
              />
            ))}
          </div>
        </div>
      );

    case 'frisbee':
      return (
        <div className="relative h-40 w-full overflow-hidden rounded-xl border border-emerald-900/40 bg-gradient-to-br from-[#0c3629] to-[#081d17] p-4 text-white">
          <div className="flex items-center justify-between font-mono-code text-[11px]">
            <span className="text-amber-300">7v7 LERP + Bézier Engine</span>
            <span className="rounded bg-white/10 px-2 py-0.5 text-emerald-200">-15% Latency</span>
          </div>
          <svg viewBox="0 0 280 90" className="mt-2 h-24 w-full transition-transform duration-500 group-hover:scale-[1.03]">
            <rect x="6" y="6" width="268" height="78" rx="4" fill="none" stroke="rgba(255,255,255,0.2)" />
            <path d="M40,66 C95,22 155,18 220,34" fill="none" stroke="#fbbf24" strokeWidth="2" strokeDasharray="4 4" />
            <path d="M85,22 C135,54 175,68 232,58" fill="none" stroke="#34d399" strokeWidth="2" strokeDasharray="4 4" />
            <circle cx="40" cy="66" r="4.5" fill="#fbbf24" />
            <circle cx="64" cy="48" r="4" fill="#38bdf8" />
            <circle cx="104" cy="46" r="4" fill="#38bdf8" />
            <circle cx="142" cy="46" r="4" fill="#38bdf8" />
            <circle cx="220" cy="34" r="4.5" fill="#34d399" />
            <circle cx="122" cy="58" r="3.6" fill="#fb7185" />
            <circle cx="204" cy="44" r="3.6" fill="#fb7185" />
            <circle
              cx="152"
              cy="24"
              r="3.8"
              fill="#fff"
              stroke="#f59e0b"
              strokeWidth="1.5"
              className="transition-transform duration-500 group-hover:translate-x-5"
            />
          </svg>
        </div>
      );

    case 'portfolio-opt':
      return (
        <div className="relative h-40 w-full overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-br from-[#0f172a] via-[#131d33] to-[#1f1636] p-4 text-white">
          <div className="flex items-center justify-between font-mono-code text-[11px]">
            <span className="text-violet-300">Fama-French · Black-Litterman</span>
            <span className="rounded bg-violet-500/20 px-2 py-0.5 text-violet-200">NLP Alpha</span>
          </div>
          <svg viewBox="0 0 280 86" className="mt-3 h-20 w-full transition-transform duration-500 group-hover:scale-[1.03]">
            <path d="M25,72 Q90,18 255,14" fill="none" stroke="#a78bfa" strokeWidth="2.5" />
            <circle cx="72" cy="45" r="3.5" fill="#34d399" />
            <circle cx="128" cy="28" r="4.2" fill="#fbbf24" stroke="#fff" strokeWidth="1.5" />
            <circle cx="195" cy="18" r="3.5" fill="#38bdf8" />
            <circle cx="105" cy="55" r="2.8" fill="rgba(255,255,255,0.4)" />
            <circle cx="155" cy="44" r="2.8" fill="rgba(255,255,255,0.4)" />
            <text x="136" y="42" fontSize="8" fill="#fbbf24" fontFamily="monospace">
              Max Sharpe
            </text>
          </svg>
        </div>
      );

    case 'gdp':
      return (
        <div className="relative h-40 w-full overflow-hidden rounded-xl border border-slate-800 bg-gradient-to-br from-[#101923] via-[#142430] to-[#0f172a] p-4 text-white">
          <div className="flex items-center justify-between font-mono-code text-[11px]">
            <span className="text-sky-300">Random Forest &amp; XGBoost</span>
            <span className="rounded bg-sky-500/20 px-2 py-0.5 text-sky-200">90%+ Accuracy</span>
          </div>
          <svg viewBox="0 0 280 86" className="mt-3 h-20 w-full transition-transform duration-500 group-hover:scale-[1.03]">
            <polyline
              points="10,60 48,46 86,52 124,34 162,40 200,26 238,22 270,16"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.4"
            />
            <polyline
              points="10,63 48,48 86,50 124,37 162,38 200,29 238,24 270,19"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="2"
              strokeDasharray="4 3"
            />
            <text x="12" y="18" fontSize="8" fill="rgba(255,255,255,0.65)" fontFamily="monospace">
              20+ Years · 12+ Macro Indicators
            </text>
          </svg>
        </div>
      );

    case 'campus-awaaz':
      return (
        <div className="relative h-40 w-full overflow-hidden rounded-xl border border-orange-900/30 bg-gradient-to-br from-[#1f1712] via-[#281b14] to-[#171821] p-4 text-white">
          <div className="flex items-center justify-between font-mono-code text-[11px]">
            <span className="text-orange-300">Sarvam AI · Hinglish Voice</span>
            <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-emerald-300">CA-1001</span>
          </div>
          <div className="mt-4 space-y-2.5">
            <div className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-xs text-orange-100 transition-colors group-hover:border-orange-300/35">
              &ldquo;Hall 5 ke washroom mein kal se paani nahi aa raha&rdquo;
            </div>
            <div className="flex items-center gap-1.5 px-1">
              {[24, 52, 76, 38, 86, 48, 66, 30, 72, 44, 58, 28].map((h, i) => (
                <span
                  key={i}
                  className="w-1.5 rounded-full bg-orange-400/80 transition-transform duration-300 group-hover:scale-y-125"
                  style={{ height: `${Math.round(h / 3)}px`, transitionDelay: `${i * 20}ms` }}
                />
              ))}
              <span className="ml-auto font-mono-code text-[10px] text-white/70">saaras:v3 STT</span>
            </div>
          </div>
        </div>
      );

    case 'firefox':
      return (
        <div className="relative h-40 w-full overflow-hidden rounded-xl border border-indigo-900/30 bg-gradient-to-br from-[#131126] via-[#1c1a3a] to-[#0f172a] p-4 text-white">
          <div className="flex items-center justify-between font-mono-code text-[11px]">
            <span className="text-violet-300">Vanilla JS · 5 Themes</span>
            <span className="flex gap-1">
              <span className="h-2.5 w-2.5 rounded-full bg-violet-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
            </span>
          </div>
          <div className="mt-4 rounded-xl border border-white/20 bg-white/10 p-3 backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-0.5">
            <div className="flex items-center justify-between font-mono-code text-sm font-bold">
              <span>16:25</span>
              <span className="text-[11px] font-normal text-white/75">24°C Clear</span>
            </div>
            <div className="mt-2 rounded-md border border-white/15 bg-black/25 px-2.5 py-1 font-mono-code text-[11px] text-white/70">
              Press / to search or jump...
            </div>
          </div>
        </div>
      );

    case 'mess':
      return (
        <div className="relative h-40 w-full overflow-hidden rounded-xl border border-teal-900/30 bg-gradient-to-br from-[#0e1f24] via-[#122a30] to-[#0f172a] p-4 text-white">
          <div className="flex items-center justify-between font-mono-code text-[11px]">
            <span className="text-teal-300">React · Node · FastAPI</span>
            <span className="rounded bg-teal-500/20 px-2 py-0.5 text-teal-200">OpenCV LBPH</span>
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center font-mono-code text-[10px]">
            <div className="rounded-lg border border-teal-400/30 bg-teal-500/10 p-2 transition-transform duration-300 group-hover:-translate-y-0.5">
              <div className="text-sm font-bold text-teal-300">500+</div>
              <div className="mt-0.5 text-white/70">Users</div>
            </div>
            <div className="rounded-lg border border-white/15 bg-white/5 p-2 transition-transform duration-300 delay-75 group-hover:-translate-y-0.5">
              <div className="text-sm font-bold text-white">Face ID</div>
              <div className="mt-0.5 text-white/70">Webcam</div>
            </div>
            <div className="rounded-lg border border-white/15 bg-white/5 p-2 transition-transform duration-300 delay-150 group-hover:-translate-y-0.5">
              <div className="text-sm font-bold text-amber-300">KPIs</div>
              <div className="mt-0.5 text-white/70">Postgres</div>
            </div>
          </div>
        </div>
      );

    case 'indexer':
      return (
        <div className="relative h-40 w-full overflow-hidden rounded-xl border border-slate-700 bg-gradient-to-br from-[#141519] to-[#1e222b] p-4 text-white">
          <div className="flex items-center justify-between font-mono-code text-[11px]">
            <span className="text-sky-300">C++ · Buffered File I/O</span>
            <span className="rounded bg-white/10 px-2 py-0.5 text-slate-300">256–1024 KB</span>
          </div>
          <div className="mt-4 space-y-2 font-mono-code text-[11px]">
            <div className="flex items-center gap-2 transition-transform duration-300 group-hover:translate-x-1">
              <span className="rounded border border-sky-400/40 bg-sky-500/15 px-2 py-1 text-sky-200">Chunk[0]</span>
              <span className="text-white/40">→</span>
              <span className="rounded border border-amber-400/40 bg-amber-500/15 px-2 py-1 text-amber-200">Tokenizer</span>
              <span className="text-white/40">→</span>
              <span className="rounded border border-emerald-400/40 bg-emerald-500/15 px-2 py-1 text-emerald-200">Top-K</span>
            </div>
            <p className="text-[10px] text-white/60">unordered_map · version_diff · O(1) lookup</p>
          </div>
        </div>
      );

    default:
      return (
        <div className="relative h-40 w-full overflow-hidden rounded-xl border border-slate-700 bg-gradient-to-br from-[#161822] to-[#0f172a] p-4 text-white">
          <div className="flex items-center justify-between font-mono-code text-[11px]">
            <span className="text-amber-300">C++17 · Chain-Rule AD</span>
            <span className="rounded bg-white/10 px-2 py-0.5 text-slate-300">Nomura Quant</span>
          </div>
          <svg viewBox="0 0 280 80" className="mt-3 h-20 w-full transition-transform duration-500 group-hover:scale-[1.03]">
            <path d="M10,65 C80,55 150,25 270,18" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
            <circle cx="85" cy="48" r="3" fill="#fff" />
            <circle cx="170" cy="28" r="3" fill="#fff" />
            <circle cx="245" cy="20" r="3" fill="#fff" />
          </svg>
        </div>
      );
  }
}
