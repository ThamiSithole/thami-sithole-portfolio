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
};

export const projects: Project[] = [
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
    githubHref: "https://github.com/ThamiSithole/stokvelos",
  },
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
      "Interactive map with time exploration and pathogen/antibiotic filters",
      "Role-based admin screens for users, roles and data sources",
      "80 tests across 17 files with CI on every pull request",
    ],
    status: "Live · team capstone",
    liveHref: "https://straina-eight.vercel.app/",
    githubHref: "https://github.com/analystmodikwe/Straina",
  },
  {
    name: "Indlela",
    eyebrow: "Individual project · Access to opportunity",
    summary:
      "A mobile-first job finder that treats transport affordability as a first-class filter for young job seekers in Rustenburg.",
    problem:
      "Job boards show distance, not fare cost. A first-time job seeker can spend money on an interview they cannot afford to reach.",
    role: "Product definition and app design: affordability-first feed, Dynamic Fare Index, fare reports and offline fare access.",
    stack: ["Product design", "Mobile-first UX", "Supabase", "PostgreSQL"],
    highlights: [
      "Net Gain ranking: estimated wage minus estimated transport cost",
      "Crowdsourced fare reports per rank and route",
      "'Jobs I can afford this week' filter for low-data Android use",
    ],
    status: "Product specification approved · build in progress",
    githubHref: "https://github.com/ThamiRoneo/indlela-app",
  },
];
