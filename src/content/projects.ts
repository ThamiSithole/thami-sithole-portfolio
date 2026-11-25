export type ProjectCategory =
  | "featured"
  | "team"
  | "capstone"
  | "frontend"
  | "backend"
  | "mobile"
  | "ai";

export type Project = {
  name: string;
  eyebrow: string;
  summary: string;
  problem: string;
  role: string;
  stack: string[];
  highlights: string[];
  status: string;
  liveHref?: string;
  githubHref?: string;
  featured?: boolean;
  categories?: ProjectCategory[];
  proofLinks?: { label: string; href: string }[];
  screenshots?: string[];
};

export const projects: Project[] = [
  {
    name: "Straina",
    eyebrow: "Team project · Public health",
    summary:
      "An antimicrobial-resistance mapping platform that shows where resistant organisms emerge and which areas may become hotspots.",
    problem:
      "AMR information is spread across disconnected reports and dashboards. Health teams need one readable, time-aware view to act earlier.",
    role: "DevOps and release, frontend and backend: hotspot alerts, user management, source management and the offline hook.",
    stack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Supabase", "Vercel"],
    highlights: [
      "Interactive map with time exploration and pathogen and antibiotic filters",
      "Role-based admin screens for users, roles and data sources",
      "80 tests across 17 files with CI on every pull request",
    ],
    status: "Live · team capstone",
    liveHref: "https://straina-eight.vercel.app/",
    githubHref: "https://github.com/analystmodikwe/Straina",
    featured: true,
    categories: ["featured", "team"],
    proofLinks: [
      { label: "View PR #66", href: "https://github.com/analystmodikwe/Straina/pull/66" },
    ],
  },
  {
    name: "StokvelOS",
    eyebrow: "Capstone · Financial inclusion",
    summary:
      "A mobile-first savings-group platform that gives South African stokvels a transparent ledger and a fair payout scheduler.",
    problem:
      "Stokvels often run on trust, cash books and spreadsheets. Members need a shared record of contributions, payouts and who is allowed to change what.",
    role: "Auth, groups, invitations, member management, settings and RLS-backed data access.",
    stack: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Row Level Security"],
    highlights: [
      "Organiser and member permissions enforced in the database, not just in the UI",
      "Exact-copy validation, offline and empty states from the product design",
      "72 database tests plus auth, stokvel and invite integration coverage",
    ],
    status: "Phase 2 complete · preparing for Vercel deployment",
    liveHref: "https://stokvelos-mu.vercel.app",
    githubHref: "https://github.com/ThamiSithole/stokvelos",
    featured: true,
    categories: ["featured", "capstone"],
  },
  {
    name: "Riverside Community Hub",
    eyebrow: "Team project · Community services",
    summary:
      "A community hub that brings local services, information and coordination into one accessible web experience.",
    problem:
      "Community information is scattered across notices and word of mouth, so residents miss services they qualify for.",
    role: "Frontend and backend delivery with React, Node and Express, plus Supabase Auth and row level security.",
    stack: ["React", "TypeScript", "Node.js", "Express", "Supabase", "Row Level Security"],
    highlights: [
      "React and TypeScript frontend",
      "Node and Express API",
      "Supabase Auth and row level security",
    ],
    status: "Code available",
    githubHref: "https://github.com/ThamiRoneo/riverside-community-hub-platform",
    featured: true,
    categories: ["featured", "frontend", "backend"],
  },
  {
    name: "Indlela MVP",
    eyebrow: "Individual project · Access to opportunity",
    summary:
      "A mobile-first job finder that treats transport affordability as a first-class filter for young job seekers in Rustenburg.",
    problem:
      "Job boards show distance, not fare cost. A first-time job seeker can spend money on an interview they cannot afford to reach.",
    role: "Product definition and app design: affordability-first feed, Dynamic Fare Index, fare reports and offline fare access.",
    stack: ["Expo", "TypeScript", "Supabase", "PostgreSQL", "Maestro"],
    highlights: [
      "Net Gain ranking: estimated wage minus estimated transport cost",
      "Crowdsourced fare reports per rank and route",
      "Jobs I can afford this week filter for low-data Android use",
    ],
    status: "Product specification approved · build in progress",
    githubHref: "https://github.com/ThamiRoneo/indlela-mvp",
    categories: ["mobile"],
  },
  {
    name: "TaskForge API",
    eyebrow: "Individual project · Backend",
    summary:
      "A REST API for task workflows with predictable CRUD endpoints and centralised error handling.",
    problem:
      "Small tools repeat the same task plumbing and invent different error shapes, which makes clients brittle.",
    role: "API design, implementation and error-handling strategy.",
    stack: ["Node.js", "Express", "REST", "JavaScript"],
    highlights: [
      "Consistent REST CRUD routes",
      "Centralised error responses",
      "Node and Express implementation",
    ],
    status: "Code available",
    githubHref: "https://github.com/ThamiRoneo/taskforge-api",
    categories: ["backend"],
  },
  {
    name: "EdTech Assistant",
    eyebrow: "Individual project · AI",
    summary:
      "An education assistant that combines retrieval over course material with a conversational interface.",
    problem:
      "Students need answers grounded in their own course material rather than generic responses.",
    role: "Full-stack delivery across Next.js, FastAPI, pgvector, Celery and Redis.",
    stack: ["Next.js", "FastAPI", "PostgreSQL", "pgvector", "Celery", "Redis", "OpenAI"],
    highlights: [
      "Vector search over course content",
      "Background jobs with Celery and Redis",
      "Next.js frontend",
    ],
    status: "Code available",
    githubHref: "https://github.com/ThamiRoneo/edtech-assistant",
    categories: ["ai", "backend"],
  },
  {
    name: "Toro Coffee Redesign",
    eyebrow: "Individual project · Frontend",
    summary:
      "A redesign of a coffee storefront with a clearer visual hierarchy and a mobile-first layout.",
    problem:
      "The original storefront made browsing and finding products harder on small screens.",
    role: "Frontend redesign and heuristic audit.",
    stack: ["React", "Tailwind CSS", "Heuristic audit"],
    highlights: [
      "Updated responsive layout",
      "Heuristic usability review",
      "React and Tailwind implementation",
    ],
    status: "Live app",
    liveHref: "https://torocoffee.vercel.app/",
    githubHref: "https://github.com/ThamiRoneo/company-project1-toro",
    categories: ["frontend"],
  },
  {
    name: "TaskFlow Dashboard",
    eyebrow: "Individual project · Frontend",
    summary:
      "A project management dashboard for tracking work across boards and tasks.",
    problem:
      "Task context is scattered across tools, so teams lose track of ownership and progress.",
    role: "Frontend implementation with React, TypeScript, Tailwind, Context API and Router.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Context API", "React Router"],
    highlights: [
      "Board and task navigation",
      "Shared state with Context API",
      "Client-side routing",
    ],
    status: "Code available",
    githubHref: "https://github.com/ThamiRoneo/company-project2-project-management-dashboard",
    categories: ["frontend"],
  },
  {
    name: "NearbyTool",
    eyebrow: "Capstone · Marketplace",
    summary:
      "A local marketplace that connects people with nearby tools and services.",
    problem:
      "Finding a tool nearby means scrolling through national classifieds with no location signal.",
    role: "Frontend delivery with React and TypeScript.",
    stack: ["React", "TypeScript", "Marketplace UX"],
    highlights: [
      "Location-led browsing",
      "Supplier listings",
      "Responsive React interface",
    ],
    status: "Live app",
    liveHref: "https://founder-captone-nearbytool-app.vercel.app",
    githubHref: "https://github.com/ThamiRoneo/founder-captone-nearbytool-app",
    categories: ["capstone"],
  },
  {
    name: "E-commerce Order Processor",
    eyebrow: "Individual project · Frontend",
    summary:
      "A browser-based order processor that imports and exports order data without a backend.",
    problem:
      "Small teams need to move order data between spreadsheets and shop exports without manual cleanup.",
    role: "Frontend implementation with vanilla JavaScript and Tailwind CSS.",
    stack: ["JavaScript", "Tailwind CSS", "JSON"],
    highlights: [
      "JSON import and export",
      "Client-side processing",
      "Tailwind CSS interface",
    ],
    status: "Live app",
    liveHref: "https://ecommerce-order-processor.vercel.app",
    githubHref: "https://github.com/ThamiRoneo/ecommerce-order-processor",
    categories: ["frontend"],
  },
  {
    name: "Portfolio site",
    eyebrow: "Individual project · Portfolio",
    summary:
      "This portfolio: a responsive Next.js site with typed project content and a reviewed delivery workflow.",
    problem:
      "A portfolio should show the work clearly on any screen without hiding the engineering decisions behind it.",
    role: "Design system, implementation and release workflow.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "GitHub Actions", "Vercel"],
    highlights: [
      "Typed project content model",
      "Category filtering and responsive layouts",
      "CI and production deployment",
    ],
    status: "Live app",
    liveHref: "https://thami-sithole-portfolio.vercel.app",
    githubHref: "https://github.com/ThamiSithole/thami-sithole-portfolio",
    categories: ["frontend"],
  },
];
