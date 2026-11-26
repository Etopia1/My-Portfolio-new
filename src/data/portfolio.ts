import type {
  CertificationItem,
  EducationItem,
  ExperienceItem,
  GitHubRepoSpotlight,
  ProjectCaseStudy,
  ServiceItem,
  SkillCategory,
  TestimonialItem,
} from "@/types/portfolio";

export const SITE_CONFIG = {
  name: "Andrew Etopia",
  fullName: "Anjolaoluwa Andrew Etopia",
  title: "Full-Stack Developer | Software Engineer",
  secondaryTitle: "AI Evaluation & Testing · Software QA · Workflow Automation",
  location: "Lagos, Nigeria",
  remoteStatus: "Available for Remote Global Opportunities",
  email: "jolaetopia81@gmail.com",
  phone: "+234 907 460 6483",
  phoneRaw: "09074606483",
  cvPath: "/Andrew-Etopia-CV.pdf",
  githubStats: {
    username: "Etopia1",
    publicRepos: 45,
    memberSince: "Nov 2023",
    liveDeployments: 6,
    primaryLanguages: ["TypeScript", "JavaScript", "Python"],
  },
  social: {
    github: "https://github.com/Etopia1",
    linkedin: "https://www.linkedin.com/in/etopia-anjolaoluwa-andrew-430721297/",
    previousPortfolio: "https://github.com/Etopia1/my-portfolio",
    x: null as string | null,
  },
  seo: {
    siteName: "Andrew Etopia — Full-Stack Developer & Software Engineer",
    description:
      "Portfolio of Andrew Etopia — Full-Stack Software Engineer with 4+ years experience and 45+ GitHub repositories across React, Next.js, TypeScript, Node.js, Python/Django, PostgreSQL, MongoDB, Redis, Socket.IO, and AI-integrated products.",
    keywords: [
      "Andrew Etopia",
      "Full-Stack Developer",
      "Software Engineer",
      "Next.js",
      "TypeScript",
      "React",
      "Node.js",
      "Django",
      "Socket.IO",
      "AI Evaluation",
      "Remote Software Engineer",
    ],
  },
} as const;

export const HERO_METRICS = [
  {
    value: "4+",
    label: "Years Experience",
    detail: "Production full-stack engineering, APIs & automation delivery",
  },
  {
    value: "45+",
    label: "GitHub Repositories",
    detail: "Decoupled frontend & backend services across TS, JS & Python",
  },
  {
    value: "6+",
    label: "Live Deployments",
    detail: "Verified Vercel web apps paired with Node.js & Django APIs",
  },
] as const;

export const ABOUT_PROFILE = {
  headline:
    "Engineering scalable full-stack systems with analytical rigor and production quality.",
  biography: [
    "I am Andrew Etopia, a Full-Stack Software Engineer and AI Evaluation / QA specialist based in Lagos, Nigeria, partnering with international teams remotely. Across 4+ years of hands-on engineering and 45+ public GitHub repositories, I have architected decoupled client-server platforms spanning real-time WebSocket communication, webcam-proctored computer-based assessments, housing & geospatial marketplaces, e-commerce payments, and AI-enabled trip planners.",
    "Combining formal academic training in Statistics at the Federal University of Technology Akure (FUTA) with Software Development studies at Brigham Young University–Idaho (BYU-Pathway Worldwide), I build software that pairs clean user interfaces with resilient backend engineering, structured QA verification, and measurable reliability.",
  ],
  pillars: [
    {
      title: "Full-Stack Architecture",
      body: "Clean separation between responsive React/Next.js/Expo clients and modular Express, TypeScript, or Django REST APIs backed by PostgreSQL, MongoDB, and Redis.",
    },
    {
      title: "Quality & Debugging Rigor",
      body: "Trained through international QA work on uTest, Test.io, and Testlio—reproducing edge cases cleanly, validating API contracts, and eliminating silent state bugs.",
    },
    {
      title: "AI & Geospatial Depth",
      body: "Hands-on integration of OpenAI, Google Generative AI, Pinecone vector retrieval, TensorFlow.js BlazeFace proctoring, Mapbox GL JS, and OpenRouteService routing.",
    },
    {
      title: "Remote Delivery Focus",
      body: "Built for asynchronous international engineering teams: clear technical documentation, Git branching discipline, predictable milestones, and ownership from prototype to production.",
    },
  ],
} as const;

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    description:
      "Responsive, accessible user interfaces with predictable state management and smooth motion.",
    items: [
      { name: "React & Next.js", context: "App Router, SSR, Vite SPAs & component systems", focus: "Core" },
      { name: "TypeScript & JavaScript", context: "End-to-end static safety & modern ES6+ async flows", focus: "Core" },
      { name: "Tailwind CSS & DaisyUI", context: "Design systems, dark/light theming & responsive layouts", focus: "Core" },
      { name: "Redux Toolkit & Zustand", context: "Persisted client state for CBT exams & real-time chat", focus: "Core" },
      { name: "HTML5, CSS3 & SCSS", context: "Semantic markup, accessibility & SEO foundations", focus: "Production" },
      { name: "Three.js & Chart.js / Recharts", context: "Interactive 3D visuals & analytics dashboards", focus: "Specialized" },
    ],
  },
  {
    id: "backend",
    label: "Backend",
    description:
      "Decoupled Node.js, Express 5, TypeScript, and Python/Django services with real-time Socket.IO.",
    items: [
      { name: "Node.js & Express.js", context: "RESTful API gateways, middleware, Joi validation & Helmet", focus: "Core" },
      { name: "Python & Django REST", context: "Backend APIs, Pandas data processing & Gunicorn", focus: "Production" },
      { name: "Socket.IO", context: "Live chat rooms, exam session telemetry & GPS ride tracking", focus: "Specialized" },
      { name: "JWT, OAuth & Google Auth", context: "Stateless role-based access & OTP verification", focus: "Core" },
      { name: "Cloudinary & Multer", context: "Secure media pipelines & optimized asset delivery", focus: "Production" },
      { name: "Resend, Nodemailer & PDFKit", context: "Transactional emails, invoices & dynamic PDF reports", focus: "Production" },
    ],
  },
  {
    id: "database",
    label: "Database",
    description:
      "Relational and document data modeling backed by Redis caching and query indexing.",
    items: [
      { name: "PostgreSQL", context: "Relational schemas, transactions & referential integrity", focus: "Core" },
      { name: "MongoDB & Mongoose", context: "Document schemas for chat, housing, rides & commerce", focus: "Core" },
      { name: "Redis", context: "Caching, pub/sub & low-latency session coordination", focus: "Specialized" },
      { name: "MySQL & Supabase", context: "Structured relational persistence & cloud Postgres APIs", focus: "Production" },
      { name: "Data Modeling & Indexing", context: "Latency reduction & query optimization", focus: "Core" },
    ],
  },
  {
    id: "tools",
    label: "Tools & Cloud",
    description:
      "Version control across 45+ repositories, containerized environments, API testing, and cloud deployments.",
    items: [
      { name: "Git & GitHub", context: "45+ public repos, decoupled frontend/backend workflows", focus: "Core" },
      { name: "Docker", context: "Consistent local & containerized deployment builds", focus: "Production" },
      { name: "Vercel & Render", context: "Production CI/CD deployments & runtime troubleshooting", focus: "Core" },
      { name: "Postman & Winston", context: "API endpoint verification & structured backend logging", focus: "Core" },
      { name: "Figma", context: "Design inspection & UI fidelity", focus: "Production" },
    ],
  },
  {
    id: "other",
    label: "AI, Maps, Payments & QA",
    description:
      "Generative AI, browser ML, geospatial mapping, payment rails, automation, and software QA.",
    items: [
      { name: "OpenAI, Gemini & Pinecone", context: "Generative workflows, embeddings & vector retrieval", focus: "Specialized" },
      { name: "TensorFlow.js (BlazeFace)", context: "Client-side webcam face detection for CBT proctoring", focus: "Specialized" },
      { name: "AI Evaluation & Rubrics", context: "Hallucination detection, factual checks & quality scoring", focus: "Specialized" },
      { name: "Mapbox GL, Leaflet & RN Maps", context: "Interactive maps, GeoJSON & OpenRouteService routing", focus: "Specialized" },
      { name: "Stripe, Paystack & Amadeus", context: "Payment checkout verification & travel booking APIs", focus: "Production" },
      { name: "n8n, GoHighLevel & WordPress", context: "Workflow automation, chatbots, Elementor & SEO", focus: "Production" },
      { name: "Software QA & Exploratory Testing", context: "Test cases, regression checks & defect reproduction", focus: "Core" },
    ],
  },
];

export const PROJECTS: ProjectCaseStudy[] = [
  {
    slug: "pulsechat-realtime-engine",
    title: "PulseChat Real-Time Engine",
    tagline:
      "Low-latency persistent messaging platform combining React, Zustand, Socket.IO, Redis, and MongoDB.",
    category: ["Full-Stack", "Real-Time"],
    year: "2025",
    role: "Full-Stack Developer & System Architect",
    problemSolved:
      "Polling-based chat apps waste bandwidth and lag under concurrent traffic, while pure in-memory sockets lose message history across reconnects.",
    description:
      "A decoupled real-time chat system (`PurlseChatFront` + `purslsechatback`) engineered with React, Zustand state management, Socket.IO bi-directional events, JWT cookie authentication, Cloudinary media uploads, Winston logging, Redis coordination, and MongoDB persistence.",
    technologies: ["React", "Zustand", "Node.js", "Express", "Socket.IO", "MongoDB", "Redis", "Cloudinary"],
    keyFeatures: [
      "Bi-directional Socket.IO messaging, online presence indicators, and room event orchestration",
      "Lightweight Zustand client store synced with REST + WebSocket updates",
      "JWT authentication with bcryptjs password hashing and Cloudinary media attachments",
      "Structured server logging with Winston and persistent MongoDB message history",
    ],
    architectureHighlights: [
      "Decoupled Vite/React frontend (`PurlseChatFront`) from the ES-module Node.js/Express backend (`purslsechatback`).",
      "Separated transient real-time socket broadcasts from durable MongoDB writes so message UX remains instantaneous.",
      "Applied Redis caching patterns alongside cookie-parsed JWT auth middleware.",
    ],
    engineeringChallenges: [
      {
        challenge:
          "Keeping message delivery instantaneous while guaranteeing durable history and media attachments across reconnects.",
        solution:
          "Paired Socket.IO event broadcasts with asynchronous MongoDB persistence and Cloudinary URL references.",
      },
      {
        challenge:
          "Preventing redundant re-renders in active chat threads during rapid bursts of incoming events.",
        solution:
          "Managed active conversations and socket subscriptions cleanly inside Zustand selectors.",
      },
    ],
    dataFlow: [
      "React + Zustand client connects via authenticated Socket.IO handshake",
      "Express + Socket.IO server validates payload & broadcasts to target user/room",
      "Cloudinary handles uploaded chat media assets asynchronously",
      "MongoDB persists durable conversation records while Redis coordinates active state",
    ],
    visualTheme: "pulse",
    liveUrl: "https://purlse-chat-front.vercel.app",
    repoUrl: "https://github.com/Etopia1/PurlseChatFront",
    backendRepoUrl: "https://github.com/Etopia1/purslsechatback",
  },
  {
    slug: "kicc-cbt-platform",
    title: "KICC CBT & Proctored Assessment Platform",
    tagline:
      "Computer-based testing platform featuring Redux Toolkit persistence, TensorFlow.js webcam monitoring, and Socket.IO telemetry.",
    category: ["Full-Stack", "Real-Time"],
    year: "2026",
    role: "Full-Stack Engineer & QA Lead",
    problemSolved:
      "Online assessments struggle with accidental state loss on refresh, limited anti-cheating visibility, and slow manual result exports.",
    description:
      "An end-to-end assessment platform (`KiICC-cbt-frontend` + `EduCBT-Pro-Backend-`) uniting deterministic Redux Toolkit + Redux Persist exam state, TensorFlow.js BlazeFace webcam monitoring, Socket.IO live supervision, Recharts/Chart.js analytics, and automated jsPDF/XLSX reporting.",
    technologies: ["React", "Redux Toolkit", "TensorFlow.js", "PostgreSQL", "MongoDB", "Socket.IO", "jsPDF"],
    keyFeatures: [
      "Deterministic timed exam flows protected by Redux Persist to survive accidental refreshes",
      "Client-side AI proctoring signals via TensorFlow.js BlazeFace & react-webcam",
      "Live proctor monitoring dashboard streamed over Socket.IO",
      "Automated result analytics with Chart.js / Recharts and instant PDF/Excel exports",
    ],
    architectureHighlights: [
      "Engineered client-side BlazeFace inference to flag missing or multiple faces without flooding backend bandwidth.",
      "Built bulk question/result ingestion and export pipelines supporting CSV, XLSX, and PDFKit/jsPDF.",
      "Applied structured QA regression testing across timer expiry, network drops, and concurrent submissions.",
    ],
    engineeringChallenges: [
      {
        challenge:
          "Running live webcam face detection without degrading exam UI responsiveness for candidates.",
        solution:
          "Throttled TensorFlow.js BlazeFace checks on isolated intervals while keeping Redux question-switching synchronous.",
      },
      {
        challenge:
          "Preventing candidate progress loss during unstable browser or network conditions.",
        solution:
          "Backed local response slices with redux-persist and idempotent server-side submission verification.",
      },
    ],
    dataFlow: [
      "Candidate authenticates & loads timed assessment into persisted Redux store",
      "TensorFlow.js BlazeFace monitors webcam stream locally for proctor signals",
      "Socket.IO streams live candidate session status to admin dashboard",
      "Backend validates submission, computes scores & generates PDF/XLSX reports",
    ],
    visualTheme: "assessment",
    liveUrl: "https://ki-icc-cbt-frontend.vercel.app",
    repoUrl: "https://github.com/Etopia1/KiICC-cbt-frontend",
    backendRepoUrl: "https://github.com/Etopia1/EduCBT-Pro-Backend-",
  },
  {
    slug: "futa-housing-platform",
    title: "FUTA Housing Marketplace",
    tagline:
      "End-to-end TypeScript Next.js & Express housing platform with Mapbox geospatial discovery and real-time chat.",
    category: ["Full-Stack", "Real-Time", "Mobile & Maps"],
    year: "2026",
    role: "Full-Stack TypeScript Engineer",
    problemSolved:
      "Students and local renters lack verified, map-indexed housing listings with direct agent communication and reliable booking receipts.",
    description:
      "A full-stack TypeScript platform (`FutaHousing-Frontend-` + `FutaHousing-Backend-`) built with Next.js, Redux Toolkit, Mapbox GL JS geospatial listings, Socket.IO real-time agent messaging, Recharts dashboards, Cloudinary media hosting, and jsPDF receipt generation.",
    technologies: ["Next.js", "TypeScript", "Redux Toolkit", "Express", "MongoDB", "Mapbox GL", "Socket.IO"],
    keyFeatures: [
      "Interactive Mapbox GL JS property discovery mapped around university campus zones",
      "TypeScript across both the Next.js frontend and Express/MongoDB backend API",
      "Real-time Socket.IO student-to-agent messaging and Cloudinary property galleries",
      "Admin verification tools, Recharts analytics, and downloadable jsPDF booking summaries",
    ],
    architectureHighlights: [
      "Maintained strict TypeScript interfaces across both frontend and backend repositories.",
      "Combined Redux Persist with JWT decoding for seamless session recovery.",
      "Integrated Multer + Cloudinary image pipelines with Nodemailer email notifications.",
    ],
    engineeringChallenges: [
      {
        challenge:
          "Synchronizing interactive Mapbox markers smoothly with multi-criteria property filters.",
        solution:
          "Normalized GeoJSON listing coordinates inside Redux slices so map bounds and cards stay in lockstep.",
      },
      {
        challenge:
          "Validating landlord/agent media uploads without slowing down mobile connections.",
        solution:
          "Handled multipart upload validation via Multer and offloaded responsive image delivery to Cloudinary.",
      },
    ],
    dataFlow: [
      "User explores campus listings on Next.js + Mapbox GL interactive map",
      "TypeScript Express API queries indexed MongoDB property & agent records",
      "Socket.IO enables real-time student-agent inquiry threads",
      "Confirmed bookings trigger Nodemailer alerts & downloadable jsPDF documents",
    ],
    visualTheme: "housing",
    liveUrl: "https://futa-housing.vercel.app",
    repoUrl: "https://github.com/Etopia1/FutaHousing-Frontend-",
    backendRepoUrl: "https://github.com/Etopia1/FutaHousing-Backend-",
  },
  {
    slug: "intelligent-itinerary-generator",
    title: "Intelligent Itinerary & Trip Planner",
    tagline:
      "AI-assisted travel planner uniting React, Mapbox/Leaflet routing, QR sharing, and a Python Django REST backend.",
    category: ["Full-Stack", "AI & Vector", "Mobile & Maps"],
    year: "2026",
    role: "Full-Stack AI & Geospatial Developer",
    problemSolved:
      "Generic AI travel prompts lack spatial awareness, interactive map routing, and exportable schedules travelers can actually use on the move.",
    description:
      "An intelligent trip planning system (`TripPlannerFront` + `TripPytonBackend`) combining React 19, Mapbox GL JS & Leaflet visualization, jsPDF itinerary export, QR code sharing, and a Python Django REST Framework backend paired with OpenAI/Pinecone contextual recommendation concepts.",
    technologies: ["React", "TypeScript", "Next.js", "Python", "Django REST", "Mapbox GL", "OpenAI", "Pinecone"],
    keyFeatures: [
      "Personalized contextual itinerary synthesis grounded with vector-search & preference inputs",
      "Interactive Mapbox GL JS & Leaflet route visualization for multi-stop itineraries",
      "One-click jsPDF travel packet export and shareable QR code generation",
      "Python Django 5 + Django REST Framework API deployed with Gunicorn & WhiteNoise",
    ],
    architectureHighlights: [
      "Paired a modern React 19 mapping frontend with a dedicated Python Django REST API backend.",
      "Applied structured AI response evaluation criteria to keep generated schedules coherent and geographically logical.",
      "Built client-side PDF table generation (`jspdf-autotable`) for offline trip access.",
    ],
    engineeringChallenges: [
      {
        challenge:
          "Preventing disconnected or geographically implausible daily travel stops from AI suggestions.",
        solution:
          "Grounded itinerary generation with preference context and plotted stops directly onto Mapbox/Leaflet layers.",
      },
      {
        challenge:
          "Bridging cross-origin requests reliably between Vercel frontend and Python backend deployments.",
        solution:
          "Configured `django-cors-headers` and strict serialized DRF endpoints.",
      },
    ],
    dataFlow: [
      "Traveler inputs destinations, pace, and constraints in React UI",
      "Django REST API orchestrates preference matching & AI itinerary generation",
      "Mapbox GL & Leaflet plot stops and daily routes interactively",
      "User exports printable jsPDF schedule or scans QR summary",
    ],
    visualTheme: "itinerary",
    liveUrl: "https://trip-planner-front.vercel.app",
    repoUrl: "https://github.com/Etopia1/TripPlannerFront",
    backendRepoUrl: "https://github.com/Etopia1/TripPytonBackend",
  },
  {
    slug: "ecommerce-platform",
    title: "Sydney Collection E-Commerce Platform",
    tagline:
      "Full-stack buyer & merchant commerce system with AI search assist, Google OAuth, Cloudinary, and Paystack/payment verification.",
    category: ["Full-Stack", "Commerce"],
    year: "2025",
    role: "Full-Stack Developer",
    problemSolved:
      "Independent merchants need integrated buyer discovery, OTP-verified onboarding, optimized product media, flash sales, and reliable payment confirmation.",
    description:
      "A production buyer/merchant commerce platform (`AndrewEcomerce` + `AndrewEcomerceBack`) featuring Google OAuth & OTP validation, Joi schema security, Cloudinary media uploads, AI product assistance via Google Generative AI, wishlist & flash-sale workflows, and delivery tracking.",
    technologies: ["React", "Next.js", "Node.js", "Express", "MongoDB", "Cloudinary", "Paystack", "Mapbox GL"],
    keyFeatures: [
      "Buyer & merchant workflows with Google Auth, JWT sessions, and OTP verification",
      "Cloudinary product media pipeline with responsive catalog delivery",
      "Wishlist, flash-sale promotions, payment verification, and order delivery tracking",
      "Backend validation hardened with Joi, express-validator, and Google Generative AI integration",
    ],
    architectureHighlights: [
      "Offloaded media transformations to Cloudinary while storing normalized catalog documents in MongoDB.",
      "Enforced strict Joi & express-validator payload validation on auth and checkout routes.",
      "Built geospatial delivery visualization hooks alongside Mapbox/Leaflet.",
    ],
    engineeringChallenges: [
      {
        challenge:
          "Securing account signup and checkout against malformed payloads and incomplete payment callbacks.",
        solution:
          "Added Joi validation schemas, OTP checks, and server-side transaction verification before marking orders paid.",
      },
      {
        challenge:
          "Keeping storefront browsing fast with rich multi-image merchant catalogs.",
        solution:
          "Optimized image delivery through Cloudinary and lazy-loaded catalog components.",
      },
    ],
    dataFlow: [
      "Merchant uploads product catalog via Cloudinary pipeline",
      "Buyer authenticates (JWT / Google Auth) and shops flash-sale & wishlist items",
      "Express backend validates order & verifies payment transaction",
      "MongoDB updates fulfillment state for real-time delivery tracking",
    ],
    visualTheme: "commerce",
    liveUrl: "https://sydney-collection.vercel.app",
    repoUrl: "https://github.com/Etopia1/AndrewEcomerce",
    backendRepoUrl: "https://github.com/Etopia1/AndrewEcomerceBack",
  },
  {
    slug: "driven-ride-travel-platform",
    title: "Driven Ride & Travel Platform",
    tagline:
      "Cross-platform Expo React Native & Express 5 ride/travel app with live Mapbox GPS tracking, Amadeus travel APIs, and Stripe.",
    category: ["Full-Stack", "Real-Time", "Mobile & Maps"],
    year: "2026",
    role: "Mobile & Backend Engineer",
    problemSolved:
      "Ride-hailing and travel booking workflows demand synchronized mobile GPS telemetry, push alerts, external travel inventory, and secure payment settlement.",
    description:
      "A cross-platform ride and travel application (`UberAppRactNative` + `UberAppBackend`) built with React Native, Expo, Redux Toolkit, and `@rnmapbox/maps` connected to an Express 5 backend integrating Socket.IO live tracking, Amadeus travel APIs, Stripe payments, Google Generative AI, and Expo Push Notifications.",
    technologies: ["React Native", "Expo", "Node.js", "Express 5", "MongoDB", "Socket.IO", "Mapbox", "Stripe"],
    keyFeatures: [
      "Cross-platform Expo mobile & web client (`driven-nu.vercel.app`) with React Navigation",
      "Live driver/rider GPS telemetry over Socket.IO rendered on Mapbox maps",
      "Amadeus travel API integration, Google Auth, OTP flows, and Stripe checkout",
      "Automated Expo push notifications (`expo-server-sdk`) and Resend transactional emails",
    ],
    architectureHighlights: [
      "Hardened the Express 5 API with Helmet security headers, Morgan request logging, and JWT guards.",
      "Combined ride-hailing telemetry with travel booking capabilities via Amadeus SDK.",
      "Managed cross-screen booking and trip state cleanly with Redux Toolkit.",
    ],
    engineeringChallenges: [
      {
        challenge:
          "Streaming live location updates on mobile networks without causing heavy UI re-renders.",
        solution:
          "Throttled coordinate emissions and isolated Socket.IO listeners from static booking screens.",
      },
      {
        challenge:
          "Coordinating multi-provider integrations (Stripe, Amadeus, Expo Push, Resend) cleanly in one trip lifecycle.",
        solution:
          "Centralized trip state transitions on the Express 5 backend prior to dispatching notifications.",
      },
    ],
    dataFlow: [
      "Expo client captures route via Mapbox & initiates booking/travel request",
      "Express 5 backend validates trip, coordinates Amadeus/Stripe & opens Socket.IO channel",
      "Live GPS coordinates stream across active rider/driver views",
      "Completed trip settles Stripe payment and triggers Expo push + Resend receipt",
    ],
    visualTheme: "mobility",
    liveUrl: "https://driven-nu.vercel.app",
    repoUrl: "https://github.com/Etopia1/UberAppRactNative",
    backendRepoUrl: "https://github.com/Etopia1/UberAppBackend",
  },
];

export const GITHUB_SPOTLIGHTS: GitHubRepoSpotlight[] = [
  {
    name: "FutaHousing-Frontend-",
    pairName: "FutaHousing-Backend-",
    domain: "TypeScript Full-Stack Marketplace",
    language: "TypeScript",
    summary:
      "Decoupled Next.js + Express TypeScript campus housing platform with Mapbox GL discovery, Redux Toolkit persistence, and Socket.IO chat.",
    highlights: ["Next.js 14 & TypeScript", "Express + MongoDB + Socket.IO", "Mapbox GL & Cloudinary"],
    repoUrl: "https://github.com/Etopia1/FutaHousing-Frontend-",
    backendUrl: "https://github.com/Etopia1/FutaHousing-Backend-",
    liveUrl: "https://futa-housing.vercel.app",
  },
  {
    name: "KiICC-cbt-frontend",
    pairName: "EduCBT-Pro-Backend-",
    domain: "AI-Proctored Assessment Suite",
    language: "JavaScript / Express 5",
    summary:
      "Online CBT exam engine with TensorFlow.js BlazeFace webcam proctoring, Redux Persist state recovery, Socket.IO monitoring, and Stripe/PDFKit.",
    highlights: ["TensorFlow.js BlazeFace", "Redux Toolkit + Persist", "CSV/XLSX & jsPDF Export"],
    repoUrl: "https://github.com/Etopia1/KiICC-cbt-frontend",
    backendUrl: "https://github.com/Etopia1/EduCBT-Pro-Backend-",
    liveUrl: "https://ki-icc-cbt-frontend.vercel.app",
  },
  {
    name: "UberAppRactNative",
    pairName: "UberAppBackend",
    domain: "Cross-Platform Mobility & Travel",
    language: "React Native / Expo 54",
    summary:
      "Ride-sharing and travel app combining Expo, Mapbox maps, Socket.IO live tracking, Amadeus travel SDK, Stripe payments, and Expo push alerts.",
    highlights: ["Expo 54 & React Navigation", "Express 5 + Helmet + Socket.IO", "Amadeus API & Stripe"],
    repoUrl: "https://github.com/Etopia1/UberAppRactNative",
    backendUrl: "https://github.com/Etopia1/UberAppBackend",
    liveUrl: "https://driven-nu.vercel.app",
  },
  {
    name: "TripPlannerFront",
    pairName: "TripPytonBackend",
    domain: "Polyglot AI & Geospatial Planner",
    language: "React 19 / Python Django",
    summary:
      "React 19 + Mapbox/Leaflet frontend paired with a Python Django 5 REST Framework backend for smart route planning and PDF/QR trip exports.",
    highlights: ["Django 5 + DRF + Gunicorn", "Mapbox GL & Leaflet", "QR Code & jsPDF Packets"],
    repoUrl: "https://github.com/Etopia1/TripPlannerFront",
    backendUrl: "https://github.com/Etopia1/TripPytonBackend",
    liveUrl: "https://trip-planner-front.vercel.app",
  },
  {
    name: "PurlseChatFront",
    pairName: "purslsechatback",
    domain: "Real-Time WebSocket Messaging",
    language: "React 18 / Node.js",
    summary:
      "Real-time chat engine built with Zustand, Socket.IO, Express, MongoDB, Cloudinary media uploads, and structured Winston logging.",
    highlights: ["Zustand + Socket.IO Client", "JWT Cookie Auth & Cloudinary", "Winston Logging"],
    repoUrl: "https://github.com/Etopia1/PurlseChatFront",
    backendUrl: "https://github.com/Etopia1/purslsechatback",
    liveUrl: "https://purlse-chat-front.vercel.app",
  },
  {
    name: "AndrewEcomerce",
    pairName: "AndrewEcomerceBack",
    domain: "Commerce, Auth & AI Assistant",
    language: "React / Node.js",
    summary:
      "E-commerce storefront and hardened Express API featuring Google OAuth, OTP verification, Joi schemas, Cloudinary, and Gemini AI support.",
    highlights: ["Google Auth & OTP Flows", "Joi & Express Validator", "Cloudinary & Generative AI"],
    repoUrl: "https://github.com/Etopia1/AndrewEcomerce",
    backendUrl: "https://github.com/Etopia1/AndrewEcomerceBack",
    liveUrl: "https://sydney-collection.vercel.app",
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    id: "independent-swe",
    role: "Independent Software Engineer / Full-Stack Developer",
    organization: "Freelance & Production Client Systems",
    location: "Remote",
    period: "2019 – Present",
    type: "Engineering",
    summary:
      "Architecting, building, and deploying full-stack web & mobile applications, decoupled REST/WebSocket backends, AI integrations, and business automations.",
    highlights: [
      "Engineered 25+ web applications and 45+ public GitHub repositories across React, Next.js, TypeScript, Node.js/Express, React Native/Expo, and Python/Django.",
      "Built decoupled frontend/backend systems using PostgreSQL, MongoDB, and Redis for authentication, messaging, caching, and persistent transactional records.",
      "Implemented real-time WebSocket engines (Socket.IO), client-side AI webcam proctoring (TensorFlow.js BlazeFace), geospatial mapping (Mapbox GL, Leaflet, OpenRouteService), and payment flows (Stripe, Paystack).",
      "Developed AI-enabled products and business automations integrating OpenAI APIs, Google Generative AI, Pinecone concepts, Python/Pandas, n8n, GoHighLevel, and WordPress/SEO.",
      "Improved application speed and reliability through database indexing, caching, lazy loading, code splitting, and structured API error handling.",
    ],
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "Node.js",
      "Python / Django",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "Mapbox GL",
    ],
  },
  {
    id: "qa-tester",
    role: "Freelance Software QA Tester",
    organization: "uTest / Test.io / Testlio",
    location: "Remote",
    period: "2024 – Present",
    type: "Quality Assurance",
    summary:
      "Executing structured functional, exploratory, and regression testing across international web and mobile software products.",
    highlights: [
      "Executed structured test cases and exploratory QA cycles across production web and mobile interfaces.",
      "Identified functional, UI/UX, and API defects and documented clear reproduction steps, logs, and visual evidence.",
      "Collaborated asynchronously with distributed engineering teams under strict acceptance criteria and release deadlines.",
    ],
    stack: ["Test Case Execution", "Exploratory QA", "Regression Checks", "UI/API Validation", "Defect Reporting"],
  },
  {
    id: "ai-data-contributor",
    role: "AI Evaluation & Data Contributor",
    organization: "OneForma / Outlier",
    location: "Remote",
    period: "2024 – Present",
    type: "AI & Data",
    summary:
      "Evaluating LLM outputs for factual accuracy, hallucination detection, and rubric alignment while supporting dataset quality assurance.",
    highlights: [
      "Evaluated AI-generated responses across reasoning, coding, and instruction-following tasks for accuracy, hallucinations, and logical consistency.",
      "Performed high-precision data annotation, labeling, transcription, and voice/data quality audits against detailed client rubrics.",
      "Adapted rapidly across changing evaluation frameworks while maintaining strict consistency and throughput targets.",
    ],
    stack: ["LLM Evaluation", "Hallucination Detection", "Rubric Scoring", "Data Annotation", "Quality Review"],
  },
];

export const EDUCATION: EducationItem[] = [
  {
    id: "byu-idaho",
    institution: "Brigham Young University–Idaho (BYU-Idaho)",
    location: "Online · via BYU-Pathway Worldwide",
    program: "Bachelor's Degree in Software Development — In Progress",
    status: "In Progress",
    focus: [
      "Web & Computer Programming",
      "Software Engineering & Testing",
      "Databases & Backend Systems",
      "Web Services & Full-Stack Architecture",
    ],
  },
  {
    id: "futa",
    institution: "Federal University of Technology Akure (FUTA)",
    location: "Ondo State, Nigeria",
    program: "B.Sc. Statistics — Expected Graduation: 2029",
    status: "Expected 2029",
    focus: [
      "Probability & Statistics",
      "Quantitative Reasoning",
      "Data Analysis",
      "Analytical Problem Solving",
    ],
  },
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Software Development Certificate",
    issuer: "BYU-Idaho / BYU-Pathway Worldwide",
    mode: "Online",
  },
  {
    title: "AI & Machine Learning Certificate",
    issuer: "Great Learning",
    mode: "Online",
  },
  {
    title: "Data Science / Artificial Intelligence Certificate",
    issuer: "Skill-Lync",
    mode: "Online",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "fullstack",
    title: "Full-Stack Web Development",
    summary:
      "End-to-end web applications from responsive Next.js & TypeScript interfaces to production Node.js or Django backends.",
    deliverables: ["React / Next.js Apps", "Auth & Role Flows", "Vercel & Render Deployment"],
    iconName: "Layers",
  },
  {
    id: "frontend",
    title: "Frontend Development",
    summary:
      "Accessible, responsive, high-performance UI architecture with Redux Toolkit / Zustand state management and polished motion.",
    deliverables: ["Design-to-Code UI", "Redux & Zustand State", "Core Web Vitals Focus"],
    iconName: "Layout",
  },
  {
    id: "backend",
    title: "Backend Engineering",
    summary:
      "Reliable Node.js, Express 5, Django, and real-time Socket.IO services built for concurrency, uploads, and clean error handling.",
    deliverables: ["Express & Django APIs", "Socket.IO Real-Time Events", "JWT / OAuth Security"],
    iconName: "Server",
  },
  {
    id: "api",
    title: "API & Third-Party Integration",
    summary:
      "REST API contracts plus Stripe, Paystack, Amadeus travel, Mapbox GL, Cloudinary, Resend, and OpenRouteService integrations.",
    deliverables: ["RESTful API Contracts", "Stripe & Paystack Webhooks", "Maps & Routing APIs"],
    iconName: "Webhook",
  },
  {
    id: "database",
    title: "Database Architecture",
    summary:
      "Structured relational and document schemas across PostgreSQL, MongoDB, MySQL, Supabase, and Redis with indexing and caching.",
    deliverables: ["Schema Modeling", "Query Indexing & Caching", "Redis Session/PubSub"],
    iconName: "Database",
  },
  {
    id: "ai-apps",
    title: "AI-Powered Applications",
    summary:
      "Integrating OpenAI, Google Generative AI, Pinecone vector retrieval, and TensorFlow.js browser ML into reliable products.",
    deliverables: ["OpenAI & Vector Search", "Browser ML (BlazeFace)", "Hallucination & Quality QA"],
    iconName: "Sparkles",
  },
  {
    id: "automation",
    title: "Business Automation & Web Ops",
    summary:
      "Automating repetitive operational workflows with n8n, Python, GoHighLevel, chatbots, and SEO-ready WordPress/Elementor sites.",
    deliverables: ["n8n & Chatbot Workflows", "GoHighLevel Integrations", "WordPress + SEO Builds"],
    iconName: "Workflow",
  },
  {
    id: "qa",
    title: "Software QA & AI Evaluation",
    summary:
      "Manual & exploratory testing, reproducible defect reporting, API validation, and structured evaluation of AI model outputs.",
    deliverables: ["Test Case Execution", "Bug Repro & Evidence", "Rubric-Based AI Review"],
    iconName: "ShieldCheck",
  },
];

/**
 * [EDITABLE PLACEHOLDER]:
 * Add verified client or team lead testimonials below when ready to publish them.
 */
export const TESTIMONIALS: TestimonialItem[] = [];
