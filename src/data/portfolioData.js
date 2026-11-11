export const PROFILE = {
  name: 'Rohan Kumar',
  initials: 'Rk',
  role: 'Software Developer · Product Builder · Quant & Finance Enthusiast',
  institute: 'IIT Kanpur',
  degree: 'B.Tech — Biological Sciences & Bioengineering (Major) · Industrial & Management Engineering (Minor)',
  batch: '2023 – 2027 (Final Year)',
  cpi: '6.8 / 10.0',
  headlineLead: 'Building fast interfaces, thoughtful products &',
  headlineAccent: 'data-driven systems',
  headlineTail: 'for real-world problems.',
  subTagline:
    'Final-year undergraduate at IIT Kanpur passionate about Software & Frontend Engineering, Product Management, and Quantitative Finance—turning complex user and market workflows into clean, usable products.',
  email: 'rohank23@iitk.ac.in',
  github: 'https://github.com/rohan53532211',
  linkedin: 'https://www.linkedin.com/in/rohan-kumar-572a7027b/',
  codeforces: 'https://codeforces.com/profile/bt_hai',
  resumeUrl: '/Rohan_Kumar_SDE_Resume.pdf',
  location: 'Kanpur / New Delhi, India',
};

export const RESUMES = [
  {
    id: 'sde',
    label: 'SDE & Frontend',
    shortLabel: 'SDE Resume',
    url: '/Rohan_Kumar_SDE_Resume.pdf',
    focus: 'React, Next.js, FastAPI, C++ & Full-Stack Systems',
  },
  {
    id: 'pm',
    label: 'Product Management',
    shortLabel: 'PM Resume',
    url: '/Rohan_Kumar_PM_Resume.pdf',
    focus: 'User Discovery, MVP Scoping, Usability Loops & Club Leadership',
  },
  {
    id: 'finance',
    label: 'Finance & Quant',
    shortLabel: 'Finance Resume',
    url: '/Rohan_Kumar_Finance_Resume.pdf',
    focus: 'Asset Pricing, Risk Engines, IPO Research & Macro Forecasting',
  },
];

export const DOMAIN_PILLARS = [
  {
    id: 'sde',
    badge: '01 · Software & Frontend Engineering',
    title: 'Fast, responsive interfaces backed by clean system architecture',
    enthusiasm:
      'I enjoy obsessing over the details users actually feel—responsive layouts, smooth 60fps canvas/SVG motion, clean state machines, and fast REST APIs that keep frontend interactions snappy.',
    highlights: [
      'Shipped production Next.js + FastAPI document workflows during my internship at RamanIQ.ai.',
      'Deployed interactive React 19 + Recharts / Chart.js analytics dashboards live on Vercel.',
      'Strong CS & algorithmic foundations: CodeChef 3★ (Global Rank 28, Starters 200) & C++17 systems.',
    ],
    stack: ['React 19', 'Next.js', 'JavaScript', 'Tailwind CSS', 'FastAPI', 'Node.js', 'PostgreSQL', 'C++17'],
    resumeUrl: '/Rohan_Kumar_SDE_Resume.pdf',
    resumeLabel: 'Open SDE Resume PDF',
    ctaTarget: '#projects',
    ctaLabel: 'Browse Tech Projects',
  },
  {
    id: 'pm',
    badge: '02 · Product Management',
    title: 'Turning captain & player pain points into a living 7v7 product',
    enthusiasm:
      'Great products start by feeling a problem firsthand. Leading IIT Kanpur’s Ultimate Frisbee Club showed me how hard it was for players to visualize field spacing and timing—so I built a product around their workflow.',
    storySteps: [
      {
        step: '01 · User Pain',
        title: 'Static whiteboards failed real-time sports tactics',
        detail:
          'New recruits and teammates struggled to grasp cut timing, throw-release windows, and defender angles from static arrows drawn on boards.',
      },
      {
        step: '02 · Discovery & MVP',
        title: 'Mapped captain & player workflows before coding',
        detail:
          'Defined core MVP priorities: drag-and-drop 7v7 setup, smooth keyframe playback, timeline scrubbing, and shareable strategy presets.',
      },
      {
        step: '03 · Build & Iterate',
        title: 'Usability testing & real-time collaboration',
        detail:
          'Tested with IITK teammates to refine controls, added concurrent editing + chat, and cut state-machine validation latency by 15%.',
      },
      {
        step: '04 · Outcome',
        title: 'Adopted for training & drove club growth',
        detail:
          'Used across intra-college sessions—helping drive 60%–80% participation growth, 3 tournaments, and Second Runner-Up at Udghosh’25.',
      },
    ],
    stack: ['User Research', 'MVP Prioritization', 'Workflow Mapping', 'Usability Testing', 'Metrics & KPIs'],
    resumeUrl: '/Rohan_Kumar_PM_Resume.pdf',
    resumeLabel: 'Open PM Resume PDF',
    ctaTarget: '#ui-lab',
    ctaLabel: 'Try the 7v7 Simulator',
  },
  {
    id: 'finance',
    badge: '03 · Finance & Quantitative Research',
    title: 'Connecting market intuition, econometrics & pricing code',
    enthusiasm:
      'I love applying mathematical modeling and engineering rigor to financial markets—from empirical IPO research and macro forecasting to portfolio optimization and C++ swap risk engines.',
    highlights: [
      'Studied 1,000+ Indian IPOs under Prof. Abhinava Triphati (IITK), automating DRHP/RHP extraction with Python, OCR & NLP.',
      'Built a Fama-French + Bayesian Black-Litterman portfolio optimizer with NLP news sentiment rebalancing.',
      'Forecasted India’s quarterly GDP growth (ECO723) using Random Forest & XGBoost with 90%+ stable-period accuracy, and cleared SEBI NISM-Series-VIII.',
    ],
    stack: ['Fama-French & Black-Litterman', 'XGBoost / Econometrics', 'C++17 Risk Engine', 'SEBI NISM-VIII', 'Python / SQL'],
    resumeUrl: '/Rohan_Kumar_Finance_Resume.pdf',
    resumeLabel: 'Open Finance Resume PDF',
    ctaTarget: '#projects',
    ctaLabel: 'See Finance Projects',
  },
];

export const SNAPSHOT_STATS = [
  {
    label: 'Internship',
    value: 'RamanIQ.ai',
    detail: 'Software Developer Intern · Next.js & FastAPI',
  },
  {
    label: '3 Focus Areas',
    value: 'SDE · PM · Finance',
    detail: 'Role-tailored resumes & shipped projects across all three',
  },
  {
    label: 'Live Deployments',
    value: '2 Live Apps',
    detail: 'Spring Street & Blackcoffer deployed on Vercel',
  },
  {
    label: 'Rankings & Ops',
    value: 'Rank 28 · Udghosh',
    detail: 'CodeChef Global Rank 28 · Head, Udghosh’26 (85+ team)',
  },
];

export const PROJECTS = [
  {
    id: 'spring-street',
    title: 'Spring Street — Portfolio Analytics Dashboard',
    subtitle: 'Interactive market insights & multi-asset compounding visualizer',
    category: 'frontend',
    domains: ['frontend', 'finance'],
    isLive: true,
    featured: true,
    period: "Jun '26",
    liveUrl: 'https://spring-street-assignment-six.vercel.app',
    githubUrl: 'https://github.com/rohan53532211/Spring_street_assignment',
    previewType: 'spring-street',
    tech: ['React 19', 'Vite', 'Recharts', 'FastAPI', 'Lucide Icons', 'Glassmorphism CSS'],
    metrics: ['1Y / 3Y / 5Y live slicing', 'ROI, CAGR & Sharpe', 'In-memory API cache'],
    summary:
      'Production-grade FinTech dashboard visualizing a 5-year portfolio across AAPL, MSFT, GOOGL, and AMZN with sub-second chart interactions and deep-dive risk metrics.',
    problem:
      'Retail and analyst dashboards often feel sluggish when comparing multi-year cumulative returns, portfolio drift, and risk ratios across multiple tickers.',
    architecture:
      'Decoupled React 19 + Vite frontend consuming a Python FastAPI service equipped with an in-memory market-data cache to avoid redundant upstream API fetches.',
    highlights: [
      'Built custom Recharts area and multi-line comparators with smooth 1Y, 3Y, and 5Y timeframe switching.',
      'Designed a double-donut allocation ring comparing initial equal weights (25%) against current drifted weights.',
      'Engineered clickable asset rows scrolling smoothly into a per-stock analyst panel displaying ROI, CAGR, Volatility, and Sharpe Ratio.',
      'Crafted a high-contrast dark HSL theme using Outfit & JetBrains Mono typography with glassmorphism cards.',
    ],
  },
  {
    id: 'strategy-simulation',
    title: 'Ultimate Frisbee 7v7 Strategy Platform',
    subtitle: 'Productized tactical play designer with deterministic physics engine',
    category: 'frontend',
    domains: ['frontend', 'product'],
    isLive: false,
    featured: true,
    period: "Dec '25 – Mar '26",
    liveUrl: null,
    githubUrl: 'https://github.com/rohan53532211/Strategy_Simulation',
    previewType: 'frisbee',
    tech: ['React 19', 'Vite', 'Node.js', 'Express', 'LERP & Bézier Math', 'Product Discovery'],
    metrics: ['-15% validation latency', '60% club growth', 'Real-time co-editing'],
    summary:
      'End-to-end product built from IIT Kanpur player research—allowing teams to create, simulate 7v7 plays, scrub keyframes, and collaborate live with integrated chat.',
    problem:
      'Coaching Ultimate Frisbee spacing and throw timing on static whiteboards fails to communicate player velocity, cut windows, and disc trajectory.',
    architecture:
      'React + Vite interactive field canvas (`Field.jsx`, `Player.jsx`, `Disc.jsx`) backed by interpolation & disc physics modules (`interpolation.js`, `discPhysics.js`) and Node.js/Express REST APIs.',
    highlights: [
      'Conducted user discovery with IITK captains/players, defined MVP scope, and ran usability testing loops to refine workflows.',
      'Engineered deterministic playback using keyframes, LERP, Bézier paths, and parabolic disc motion.',
      'Built an event-driven finite state machine for play validation, reducing validation latency by 15%.',
      'Added concurrent strategy editing, integrated chat, undo/redo history, and versioned saves.',
    ],
  },
  {
    id: 'blackcoffer',
    title: 'Blackcoffer — Data Visualization & KPI Explorer',
    subtitle: 'Full-stack MERN analytics workspace with dynamic cross-filtering',
    category: 'frontend',
    domains: ['frontend'],
    isLive: true,
    featured: true,
    period: "Jul '26",
    liveUrl: 'https://black-coffer-assignment-umber.vercel.app',
    githubUrl: 'https://github.com/rohan53532211/BlackCoffer_assignment',
    previewType: 'blackcoffer',
    tech: ['React 19', 'Vite', 'Chart.js', 'Axios', 'Node.js', 'Express', 'MongoDB'],
    metrics: ['Multi-field filters', 'Dark / Light themes', 'REST aggregation'],
    summary:
      'Responsive full-stack analytics dashboard rendering multi-dimensional JSON datasets with interactive Chart.js visualizations, dynamic filter facets, and persistent dark/light theming.',
    problem:
      'Exploring large multi-attribute datasets (intensity, likelihood, relevance, region, sector, PESTLE) becomes overwhelming without instant cross-filtering and clean visual hierarchy.',
    architecture:
      'MERN architecture featuring dedicated Express aggregation endpoints (`/api/charts`, `/api/data`, `/filters`, `/dashboard`) backed by MongoDB Atlas and consumed via Axios.',
    highlights: [
      'Implemented responsive grid layouts, custom loading skeletons, and smooth state transitions in curated CSS.',
      'Wired multi-criteria filter controls with paginated table inspection and synchronized Chart.js canvases.',
      'Added instant Dark/Light mode switching while maintaining legible chart axes, tooltips, and KPI cards.',
    ],
  },
  {
    id: 'portfolio-asset-pricing',
    title: 'Portfolio Management & Asset Pricing Engine',
    subtitle: 'Fama-French factor modeling, Black-Litterman & NLP sentiment signals',
    category: 'finance',
    domains: ['finance'],
    isLive: false,
    featured: true,
    period: "Jun '25 – Jul '25",
    liveUrl: null,
    githubUrl: null,
    badgeNote: 'Quant Finance Research',
    previewType: 'portfolio-opt',
    tech: ['Python', 'Fama-French', 'Black-Litterman', 'NLP Sentiment', 'Web Scraping', 'Pandas'],
    metrics: ['Bayesian return views', 'NLP rebalancing', 'Fundamental scoring'],
    summary:
      'Quantitative portfolio optimization framework combining multi-factor Fama-French regressions and Bayesian Black-Litterman forecasts with automated sentiment-driven rebalancing.',
    problem:
      'Pure mean-variance optimization is hypersensitive to noisy historical return estimates and misses qualitative fundamental or news regime shifts.',
    architecture:
      'Automated financial scraping pipeline computing fundamental health scores + NLP sentiment analysis on news/social feeds to form Black-Litterman active views.',
    highlights: [
      'Integrated Fama-French factor exposures with Bayesian Black-Litterman posterior return blending for stable weights.',
      'Automated fundamental financial-metric extraction via web scraping to score asset health for stock selection.',
      'Applied NLP sentiment scoring to financial news and social signals to trigger adaptive portfolio rebalancing.',
    ],
  },
  {
    id: 'gdp-forecasting',
    title: 'India Quarterly GDP Growth Forecasting',
    subtitle: 'Macroeconomic ML pipeline across 20+ years & 12+ indicators (ECO723)',
    category: 'finance',
    domains: ['finance'],
    isLive: false,
    featured: false,
    period: "May '26 – Jul '26",
    liveUrl: null,
    githubUrl: null,
    badgeNote: 'ECO723 · Prof. Sanjeev Kumar',
    previewType: 'gdp',
    tech: ['Python', 'Random Forest', 'XGBoost', 'Econometrics', 'Feature Engineering', 'Scikit-learn'],
    metrics: ['90%+ stable-period accuracy', '20+ yrs macro data', '12+ indicators'],
    summary:
      'Econometric and machine-learning forecasting pipeline predicting India’s quarterly GDP growth using 20+ years of historical macroeconomic indicators under Prof. Sanjeev Kumar.',
    problem:
      'Macroeconomic indicators suffer from heavy multicollinearity, reporting lags, and structural regime shifts that degrade naive linear regressions.',
    architecture:
      'Correlation-pruned 12+ indicator macro dataset enriched with lag features feeding tuned Random Forest and XGBoost ensemble regressors.',
    highlights: [
      'Engineered a clean 20+ year quarterly macroeconomic dataset across 12+ monetary, fiscal, and output indicators.',
      'Applied correlation diagnostics to reduce multicollinearity before building temporal lag features.',
      'Trained tuned Random Forest and XGBoost models achieving 90%+ predictive accuracy in stable macroeconomic periods.',
    ],
  },
  {
    id: 'quant-swap-engine',
    title: 'Interest Rate Curve & Swap Risk Engine',
    subtitle: 'Modular C++17 pricing & analytical sensitivity architecture',
    category: 'finance',
    domains: ['finance', 'systems'],
    isLive: false,
    featured: false,
    period: "May '26 – Jun '26",
    liveUrl: null,
    githubUrl: 'https://github.com/rohan53532211/Nomua_GM_Quant_Challenge_5.0',
    previewType: 'quant',
    tech: ['C++17', 'Polymorphism', 'Chain-Rule AD', 'CSV Pipeline', 'FX Market Making'],
    metrics: ['Nomura Quant 5.0', 'Zero-curve bootstrap', 'Analytical Greeks'],
    summary:
      'Submission for the Nomura Global Markets Quant Challenge 5.0 featuring an extensible C++17 interest-rate curve & swap pricing engine alongside FX market-making adversity models.',
    problem:
      'Finite-difference bump-and-revalue risk calculations scale poorly across multi-tenor interest rate curves.',
    architecture:
      'Polymorphic C++17 interfaces for instruments, yield curves, and interpolators driven by an automated CSV market-data ingestion pipeline.',
    highlights: [
      'Implemented chain-rule gradient propagation for fast analytical swap risk sensitivities.',
      'Modeled FX client adversity prediction and dynamic inventory-aware spread quoting in Python.',
    ],
  },
  {
    id: 'campus-awaaz',
    title: 'Campus Awaaz — Multilingual Voice Grievance Portal',
    subtitle: 'Hinglish & Hindi voice-first AI complaint portal + staff ops console',
    category: 'frontend',
    domains: ['frontend', 'product'],
    isLive: false,
    featured: false,
    period: "Oct '26",
    liveUrl: null,
    githubUrl: 'https://github.com/rohan53532211/kivi_hackathon',
    previewType: 'campus-awaaz',
    tech: ['React 19', 'Vite', 'Lucide Icons', 'FastAPI', 'SQLite', 'Sarvam AI'],
    metrics: ['Voice + Text Hinglish', 'Editable STT review', 'Staff ops console'],
    summary:
      'AI-powered student grievance portal supporting natural Hindi, English, and Hinglish voice or text input—clarifying missing hostel/room details and routing structured tickets to staff.',
    problem:
      'Campus maintenance forms often force rigid English dropdowns, leading to vague complaints missing hall, wing, or floor details.',
    architecture:
      'React + Vite frontend with browser microphone capture communicating with a FastAPI + SQLite backend powered by Sarvam AI (`saaras:v3` STT and `sarvam-105b` conversational extraction).',
    highlights: [
      'Built an interactive voice-recording workflow with an Editable Transcript Review Box so students can fix regional/phonetic text before sending.',
      'Designed an editable structured ticket preview card plus conversational follow-ups for missing hall/wing/floor metadata.',
      'Created a Staff Operations Dashboard with overview KPIs, category/status filters, search, and one-click lifecycle transitions.',
    ],
  },
  {
    id: 'firefox-cockpit',
    title: 'Developer Cockpit — Browser New Tab Extension',
    subtitle: 'Zero-dependency glassmorphic start page with live theme customizer',
    category: 'frontend',
    domains: ['frontend'],
    isLive: false,
    featured: false,
    period: "Jun '26",
    liveUrl: null,
    githubUrl: 'https://github.com/rohan53532211/Firefox-Homepage',
    previewType: 'firefox',
    tech: ['HTML5', 'CSS3', 'Vanilla JS (IIFE)', 'WebExtension API', 'Open-Meteo API'],
    metrics: ['5 curated themes', '0 build dependencies', 'Live blur & opacity controls'],
    summary:
      'Lightweight, zero-framework Firefox & Chrome New Tab replacement with frosted glassmorphism, live CSS token tuning, keyboard-first search, and local weather telemetry.',
    problem:
      'Default browser new-tab pages are cluttered and slow, while heavy dashboard extensions consume unnecessary RAM.',
    architecture:
      'Modular IIFE Vanilla JavaScript architecture paired with CSS custom properties, WebExtension `manifest.json`, and local persistence.',
    highlights: [
      'Ships 5 built-in developer themes (Midnight, Tokyo Night, Nord, Catppuccin, Dracula) with live accent, blur, and opacity sliders.',
      'Implemented `/` keyboard-shortcut search focus, custom wallpaper upload, daily goal tracker, editable shortcut cards, and subtle cursor glow.',
      'Integrated Open-Meteo geolocation weather detection with zero API key overhead.',
    ],
  },
  {
    id: 'mess-automation',
    title: 'Mess Automation & Facial Recognition Portal',
    subtitle: 'Tri-service campus dining platform with webcam check-in & analytics',
    category: 'frontend',
    domains: ['frontend', 'product'],
    isLive: false,
    featured: false,
    period: "Jan '26 – Apr '26",
    liveUrl: null,
    githubUrl: 'https://github.com/rohan53532211/Mess-Managenemt-System-CS253-complete',
    previewType: 'mess',
    tech: ['React.js', 'Vite', 'React-Webcam', 'Node.js', 'FastAPI', 'OpenCV LBPH', 'PostgreSQL'],
    metrics: ['500+ user workflows', 'Webcam face verification', 'Manager & Student views'],
    summary:
      'CS253 Software Engineering project under Prof. Indranil Saha automating hostel mess attendance, meal bookings, extra-buying, rebates, dues, and operational analytics.',
    problem:
      'Manual hostel mess registers create queues at peak meal hours and introduce reconciliation errors in student dues and rebates.',
    architecture:
      'Tri-service stack pairing React.js + React-Webcam dashboards (Student & Manager portals) with a Node.js/Express API gateway, FastAPI OpenCV LBPH AI service, and PostgreSQL.',
    highlights: [
      'Built separate Student and Mess Manager React dashboards with interactive attendance, extra-buying, and revenue analytics.',
      'Integrated live browser webcam capture with an automated face training and PostgreSQL sync pipeline.',
      'Streamlined dues, rebates, meal bookings, and student feedback across 500+ concurrent user workflows.',
    ],
  },
  {
    id: 'file-indexer',
    title: 'Memory-Efficient Versioned File Indexer',
    subtitle: 'Chunked C++ text indexing engine with fixed-size buffer I/O',
    category: 'systems',
    domains: ['systems'],
    isLive: false,
    featured: false,
    period: "Mar '26 – Apr '26",
    liveUrl: null,
    githubUrl: 'https://github.com/rohan53532211/memory-efficient-versioned-file-indexer',
    previewType: 'indexer',
    tech: ['C++', 'OOP & Templates', 'STL unordered_map', 'Buffered File I/O'],
    metrics: ['256–1024 KB buffers', 'Cross-chunk tokenization', 'Version diff & Top-K'],
    summary:
      'C++ indexing system built for CS253 under Prof. Indranil Saha that processes large text files in bounded memory while supporting multi-version word frequency, diff, and Top-K queries.',
    problem:
      'Loading multi-gigabyte text versions directly into memory causes spikes and OOM failures during comparative text indexing.',
    architecture:
      'Modular OOP pipeline (`filereader`, `tokenizer`, `versionindex`, `indexbuilder`, and polymorphic `query` classes) with generic template `getTopK()` sorting.',
    highlights: [
      'Processes files via fixed-size buffers (256–1024 KB) with chunk-boundary-aware tokenization so split words are never dropped.',
      'Supports O(1) average lookup for word counts, cross-version diffs, and templated Top-K frequency ranking.',
    ],
  },
];

export const EXPERIENCE = [
  {
    role: 'Software Developer Intern',
    org: 'RamanIQ.ai',
    period: "May '26 – Jul '26",
    location: 'Remote',
    summary:
      'Built a full-stack structured document platform powered by Next.js and FastAPI, bridging intuitive frontend search/asset workflows with a modular relational backend.',
    bullets: [
      'Built the full-stack document platform using Next.js & FastAPI, delivering responsive search, asset browsing, and management views.',
      'Designed a modular service architecture cleanly separating frontend UI, REST APIs, document ingestion, and persistence layers.',
      'Modeled hierarchical document schemas in PostgreSQL & SQLAlchemy with indexed queries and automated multi-format chunking/metadata extraction.',
    ],
    tags: ['Next.js', 'FastAPI', 'PostgreSQL', 'SQLAlchemy', 'REST APIs'],
  },
  {
    role: 'Undergraduate Researcher — IPO Price Dynamics',
    org: 'Dept. of Management Sciences, IIT Kanpur (Prof. Abhinava Triphati)',
    period: "May '26 – Aug '26",
    location: 'IIT Kanpur',
    summary:
      'Studied 1,000+ Indian IPOs to analyze underpricing, information asymmetry, and price discovery using automated regulatory filing extraction.',
    bullets: [
      'Constructed a structured IPO-level database integrating price bands, QIB/NII/RII demand, anchor allocations, promoter stakes, and listing performance.',
      'Automated DRHP/RHP disclosure extraction via Python, OCR, NLP, PyMuPDF, and pdfplumber.',
      'Engineered data-cleaning and feature-engineering workflows to test empirical investor-demand hypotheses.',
    ],
    tags: ['Python', 'OCR & NLP', 'PyMuPDF', 'pdfplumber', 'Empirical Finance'],
  },
];

export const LEADERSHIP_AND_ACHIEVEMENTS = [
  {
    title: "Head, Security & Operations — Udghosh'26",
    subtitle: 'Annual Sports Fest, IIT Kanpur',
    period: "May '26 – Present",
    description:
      'Spearheaded an 85+ member, 4-tier team overseeing campus-wide crowd flow, access control across 50+ events and 3 concert nights, PR/media kits, and coordination with Gymkhana & district authorities.',
  },
  {
    title: 'Coordinator & Captain — Ultimate Frisbee Club',
    subtitle: 'Games & Sports Council, IIT Kanpur',
    period: "May '25 – May '26",
    description:
      'Elevated the society into an official Club managing an INR 80K budget, grew participation by 60%–80% across 3 intra-college tournaments, initiated IITK Invitationals (SBI sponsor), built the Club’s official website & tactical simulator, and captained teams to Udghosh’25 Second Runner-Up and Inferno’26 Bronze.',
  },
  {
    title: 'Competitive Programming, Strategy & Finance',
    subtitle: 'CodeChef 3-Star · Strategy Storm Top-10 · SEBI NISM-VIII',
    period: '2024 – 2026',
    description:
      'Secured Global Rank 28 in CodeChef Starters 200, Codeforces Pupil (bt_hai), Top-10 among 2,000+ participants at Strategy Storm (IIT Guwahati), and cleared SEBI’s NISM-Series-VIII Equity Derivatives certification.',
  },
];

export const SKILL_GROUPS = [
  {
    title: 'Frontend & UI Engineering',
    items: [
      'React 19',
      'Next.js',
      'JavaScript (ES6+)',
      'HTML5 & CSS3',
      'Tailwind CSS',
      'Recharts & Chart.js',
      'Responsive Design',
      'Canvas / SVG Motion',
    ],
  },
  {
    title: 'Product & Analytics',
    items: [
      'User Discovery',
      'MVP Scoping',
      'Workflow Mapping',
      'Usability Testing',
      'SQL & Data Modeling',
      'KPI Dashboards',
      'A/B & Metric Thinking',
    ],
  },
  {
    title: 'Finance & Quant Modeling',
    items: [
      'Fama-French Models',
      'Black-Litterman',
      'Swap Curve Pricing',
      'Chain-Rule Risk',
      'XGBoost & Random Forest',
      'NLP Sentiment Signals',
      'SEBI NISM-VIII',
    ],
  },
  {
    title: 'Backend, Systems & Tooling',
    items: [
      'C++17 (OOP / STL)',
      'Python',
      'Node.js & Express',
      'FastAPI & REST',
      'PostgreSQL & MongoDB',
      'Git, GitHub & Vercel',
      'OpenCV & Scikit-learn',
    ],
  },
];
