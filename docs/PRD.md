# PRD — Thami Sithole Portfolio (v1.3 draft)

**Status:** Draft · **Owner:** Thami Sithole · **Date:** 2026-11-24 · **Supersedes:** v1.2  
**Companion:** [`docs/IMPLEMENTATION_PLAN.md`](./IMPLEMENTATION_PLAN.md) v1.2

> **Scope reset:** this pass is about a fully responsive, functional, reliably building portfolio. All strong projects are in scope as content. Per-project accuracy fixes are a later backlog item, not a blocker.  
> **Craft refresh (v1.3):** the higgsfield-websites design recipe now applies to the Stitch prompts. This changes the palette, type pairing, icon set, motion and CTA copy, and adds generated visual assets. These are in scope and mirrored in the plan.  
> Local review draft — intentionally untracked. Do not stage, commit or push to GitHub until the user approves.  
> **Doc parity rule:** any scope change here must be mirrored in the implementation plan, and vice versa.

## 1. Vision

A responsive, fast, static portfolio that works cleanly on any device and builds reliably from a single content source. It presents the full body of strong work while staying easy to maintain. Its visual language is a single-accent, asset-led design that reads as crafted rather than templated.

## 2. Problem (scoped to this pass)

- Layout and navigation are not yet verified across small phones, tablets and wide desktop widths.
- Project cards need consistent responsive behaviour, accessible interaction and working links.
- Build, CI and deployment must be green and repeatable on the same Node version Vercel uses.
- The current content file is a starting point; it needs to represent the full set of strong projects. Accuracy corrections to individual projects will be handled later by the user.
- The existing cyan and violet palette, Inter display type and CSS-only marks read as generic and conflict with the craft standard adopted in v1.3.

## 3. Audience

- **Primary:** junior-dev recruiters/hiring managers scanning on phones and laptops.
- **Secondary:** capstone assessors, peers and collaborators.
- **Job to be done:** "Show me what they built, let me browse it comfortably on my device, and let me verify it with one click."

## 4. Goals & success metrics

- Fully responsive from **320px to 1440px+** with no horizontal overflow at any tested width.
- Working route navigation, mobile menu, project links and category filtering.
- `npm run check` (lint → typecheck → build) green on **Node 26**; CI and Vercel deploy repeatable.
- All strong projects representable in `src/content/projects.ts`, with the top three surfaced first.
- Performance targets: LCP < 2.5s, CLS < 0.1, optimised images, minimal client-side JS.
- Accessibility: semantic landmarks, visible focus, ≥44px touch targets, reduced-motion support.
- Craft: one accent, generated icon and visual assets, one signature motion effect, no em-dashes in visible copy, one label per CTA intent.

## 5. Non-goals and deferred work

**Not in this pass:** backend, CMS, auth, analytics, blog, comments, secrets in the repo.

**Deferred to user-led cleanup later (does not block responsive/build work):**
- Fix broken Indlela repo link (`indlela-app` → `indlela-mvp`).
- Update stale StokvelOS status and merge [PR #43](https://github.com/ThamiSithole/stokvelos/pull/43).
- Correct team-vs-personal attribution on Straina highlights.
- Expand the `/about` toolkit beyond 9 chips. Final screenshot assets for individual projects remain deferred; the generated brand assets in v1.3 are not per-project screenshots.
- Link both GitHub accounts (`ThamiSithole` and `ThamiRoneo`) and the Straina PR.
- Add a dedicated `/skills` route if needed later; skills stay in `/about` for this pass.

**In scope from v1.3 (higgsfield-websites craft lens, applied to Stitch prompts and implementation):**
- Replace the near-black plus cyan/violet two-accent scheme with one slate base and one coral accent.
- Replace Inter display with Satoshi for display/body and JetBrains Mono for labels, loaded locally where possible.
- Replace CSS arrow/menu marks with one generated icon set in the brand palette.
- Generate a hero grade pair, section plate, profile mark, monogram/favicon kit, OG card, cover and 404 artwork via an allowed Higgsfield path (MCP on this account). These are brand assets, not per-project screenshots.
- Add one signature `"B2 grade-shift"` hero interaction in non-animated mode, with a `prefers-reduced-motion` static fallback. No scroll-scrub journey.
- Rewrite visible copy to remove em/en-dashes and unify CTA labels: `"View projects"`, `"Get in touch"`, `"Open GitHub"`.
- Apply eyebrow ration, a single 12px radius scale, declared mobile collapse and bespoke CTA garments.

**Optional post-launch design-system slice (see plan T10):** shadcn/ui + `lucide-react` icons may be added only after launch criteria are met and the user explicitly asks. React is already a dependency through Next.js 15 + React 19 and is **not** a new addition. shadcn/ui is a copy-in component system built on Radix primitives and Tailwind, not a conventional UI package; its icons come from `lucide-react`. Current shadcn supports Tailwind v4 + React 19, but it adds config, dependencies and CSS-variable mapping for widgets this static portfolio does not currently need. If activated, add only 2–4 primitives, verify the v4 registry style in `components.json`, map tokens to the existing `@theme` variables, hide decorative icons from screen readers, and re-run the full verification pass. The generated icon set from v1.3 stays the default; library icons are only a fallback for dense functional UI and must never be mixed in one visual zone.

The content model must be able to hold all deferred corrections when they arrive, without a redesign.

## 6. Information architecture & navigation

Keep the four existing routes: `/`, `/about`, `/projects`, `/contact`.

- **Header:** name/logo, desktop nav links, mobile toggle button with `aria-expanded`, closes on route change and Escape, returns focus to the toggle.
- **Home:** intro, featured projects (first three), working principles, clear "View projects" link. Hero uses the generated grade pair and one signature motion effect, with the profile card docked to its right edge on desktop and stacked inside the card below the primary copy on smaller screens.
- **Projects:** full project grid with category filter and status badges.
- **About:** background, focus areas, toolkit, GitHub links.
- **Contact:** GitHub and current work links.
- **Footer:** repeat key links and both GitHub identities when available (dual-account links remain deferred cleanup).
- **404:** simple, on-brand not-found page with generated artwork and a link home.

## 7. Responsive & functional requirements

### 7.1 Breakpoints and layout

| Range | Layout |
|---|---|
| 320–639px (mobile) | Single column, stacked cards, full-width touch-friendly controls |
| 640–1023px (tablet) | Two-column project grid, wider container gutters |
| 1024–1439px (desktop) | Three-column grid, max container ~1200px |
| 1440px+ (wide) | Centered container, no stretched text or cards |

- Fluid type with `clamp()` for headings; body text ≥16px with 1.5–1.7 line height and max 65 characters per line.
- Satoshi for display and body; JetBrains Mono for uppercase eyebrows, chips and numeric counts. Inter is not used in page UI.
- One corner radius: 12px on cards, inputs and panels. Stack chips are the only pill shape.
- 8pt spacing scale; consistent card padding and gaps at every breakpoint.
- Every multi-column section declares its below-640px collapse behaviour explicitly.
- Headline at most 8 words and two desktop lines; subtext at most 25 words.
- No horizontal scroll at 320, 375, 414, 768, 1024 or 1440px.

### 7.2 Project cards and filtering

- One `Project` record renders identically on home and `/projects` using the same `ProjectCard` component.
- Card contents: eyebrow, name, summary, problem, role, stack chips, highlights, status badge, live/repo/PR links.
- Desktop project grid is 1/2/3 columns at mobile/tablet/desktop. Home arranges the three featured cards in a 2-column asymmetric grid with the first spanning both columns. No three equal feature cards in a row.
- Filter categories: **All, Featured, Team, Capstone, Frontend, Backend, Mobile, AI**. Filtering is client-side, keyboard accessible and updates results without a page reload. Chip selection is a transform-only transition with an `:active` scale of 0.98.
- Featured order: **Straina → StokvelOS → Riverside Community Hub**, expressed with `featured: true` on those three records and their array order — not a hard-coded slice.

### 7.3 Accessibility

- Semantic `<header>`, `<nav>`, `<main>`, `<footer>` and one `<h1>` per page.
- Visible focus rings; no keyboard traps; skip-to-content link preserved from the existing layout.
- Alt text for screenshots and generated art; decorative generated icons hidden from screen readers with `aria-hidden="true"`.
- Respect `prefers-reduced-motion`; no layout shift from images or font loading.
- One signature motion effect only. Text builds fire on mount, not on viewport entry; scroll effects animate transform/scale/clip only, never opacity-to-zero. Reduced motion shows the composed static state.

### 7.4 Content model

Extend the existing `Project` type with optional fields so current data keeps compiling. A project can belong to more than one category, so categories are an array:

```ts
type ProjectCategory =
  | "featured" | "team" | "capstone" | "frontend"
  | "backend" | "mobile" | "ai";

type Project = {
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
```

### 7.5 Project inventory (all strong projects in scope)

| Tier | Project | Category | Planned stack / proof | Links to verify in cleanup |
|---|---|---|---|---|
| 1 | **Straina** | featured, team | React 19, TS, Vite, Tailwind, Supabase; PR #66, live app | [Live](https://straina-eight.vercel.app/) · [Repo](https://github.com/analystmodikwe/Straina) · [PR #66](https://github.com/analystmodikwe/Straina/pull/66) |
| 1 | **StokvelOS** | featured, capstone | Next.js 15, TS, Supabase, RLS; 59 unit + 72 DB tests | [Live](https://stokvelos-mu.vercel.app) · [Repo](https://github.com/ThamiSithole/stokvelos) |
| 1 | **Riverside Community Hub** | featured, frontend, backend | React, TS, Node/Express, Supabase Auth/RLS | [Repo](https://github.com/ThamiRoneo/riverside-community-hub-platform) |
| 1 | **Indlela MVP** | mobile | Expo, TS, Supabase migrations/RLS/Storage, Maestro | [Repo](https://github.com/ThamiRoneo/indlela-mvp) |
| 1 | **TaskForge API** | backend | Node, Express, REST CRUD, centralized errors | [Repo](https://github.com/ThamiRoneo/taskforge-api) |
| 2 | **EdTech Assistant** | ai, backend | Next.js, FastAPI, pgvector, Celery/Redis, OpenAI | [Repo](https://github.com/ThamiRoneo/edtech-assistant) |
| 2 | **Toro Coffee Redesign** | frontend | React, Tailwind, heuristic audit | [Live](https://torocoffee.vercel.app/) · [Repo](https://github.com/ThamiRoneo/company-project1-toro) |
| 2 | **TaskFlow Dashboard** | frontend | React, TS, Tailwind, Context API, Router | [Repo](https://github.com/ThamiRoneo/company-project2-project-management-dashboard) |
| 2 | **NearbyTool** | capstone | React, TS, marketplace | [Live](https://founder-captone-nearbytool-app.vercel.app) · [Repo](https://github.com/ThamiRoneo/founder-captone-nearbytool-app) |
| 2 | **E-commerce Order Processor** | frontend | Vanilla JS, Tailwind, JSON import/export | [Live](https://ecommerce-order-processor.vercel.app) · [Repo](https://github.com/ThamiRoneo/ecommerce-order-processor) |
| 2 | **Portfolio site** | frontend | Next.js App Router, TS, Tailwind | [Live](https://thami-sithole-portfolio.vercel.app) · [Repo](https://github.com/ThamiSithole/thami-sithole-portfolio) |

Accuracy of copy, status and attribution for these entries will be corrected in the later cleanup backlog. Use only verified URLs during implementation; omit unavailable links rather than inventing them.

## 8. Engineering & build requirements

- Next.js App Router, TypeScript (strict), Tailwind CSS. The v1.3 palette **refreshes** the existing token values; earlier token names/values are not preserved. Utilities are extended, not replaced.
- Installed stack: Next.js 15.5.29, React 19.3.0, Tailwind 4.3.3, ESLint 8 + `eslint-config-next` 15.5.29. React is **not** a new dependency.
- Fonts: Satoshi loaded via `next/font/local`, JetBrains Mono via `next/font/google`. No Inter in page UI.
- Generated brand assets live in `public/assets/` and are referenced same-origin with `next/image` and explicit `sizes`. Higgsfield is an asset-generation tool only, not an app dependency or runtime service.
- Content stays in `src/content/projects.ts`; no backend or CMS.
- Client components only where interactivity is required (mobile menu, filter, hero grade-shift if needed).
- `npm ci` → `npm run lint` → `npm run typecheck` → `npm run build` on Node 26.
- GitHub Actions CI on pull requests and pushes to `main`; Vercel deploy workflow with secrets in GitHub only.
- Protected `main`, named branches, PR review, squash merge. Branch protection is a GitHub repository setting, not a code change; the implementation plan verifies the required CI status check manually when remote access is available.
- No `.env`, credentials or tokens in the repo.

## 9. Rollout plan

1. Audit responsive layout at 320/375/414/768/1024/1440px and fix overflow, spacing and typography.
2. Refresh design tokens, fonts and radius; harden header/nav (mobile toggle, Escape, route-change close, focus states) and footer links.
3. Extend `Project` type with optional fields and add the full inventory above; mark the first three `featured: true`.
4. Generate the brand asset kit (hero grades, section plate, profile mark, icons, monogram/favicon, OG/cover, 404 art) and slot into the designs.
5. Add category filtering with keyboard support, composed empty state and tactile feedback.
6. Restructure home hero and featured grid to the craft rules; polish About, Contact and 404.
7. Run `npm run check`, verify CI green, deploy to Vercel and confirm production URL returns 200.
8. Stop. Project content corrections remain in the backlog for the user to action later.
9. **Optional, post-launch only:** shadcn/ui + `lucide-react` slice (plan T10) after explicit user approval. It is not a launch requirement and must be mirrored back into this PRD if activated.

## 10. Acceptance criteria

- [x] No horizontal overflow at 320, 375, 414, 768, 1024 and 1440px.
- [x] Mobile nav opens/closes via click, Escape and route change; focus remains visible.
- [x] All project cards render from `src/content/projects.ts`; links open correct targets.
- [x] Category filter works by mouse and keyboard, with a composed empty state and tactile feedback.
- [x] Featured three appear first on home and in the full grid; home uses the asymmetric featured layout.
- [x] `npm run lint`, `npm run typecheck` and `npm run build` pass on Node 26.
- [x] CI green on PR; Vercel production deployment returns HTTP 200.
- [x] Contrast ≥4.5:1 for text, touch targets ≥44px, reduced-motion respected.
- [ ] LCP < 2.5s and CLS < 0.1 recorded where browser tooling supports measurement; no unexpected regression.
- [x] One accent, generated icons and visuals, one signature motion effect, no em/en-dashes in visible copy, one label per CTA intent, one radius scale, declared mobile collapse.
- [x] No secrets or credentials committed.
- [x] `docs/PRD.md`, `docs/IMPLEMENTATION_PLAN.md` and `docs/designs/stitch-prompts.md` cross-reference each other with no conflicting scope.

### T9 verification record (2026-11-25)

- Browser checks passed on five routes at six widths: nav, keyboard filtering, links, CTA labels, craft tokens and zero horizontal overflow.
- Contrast measured 4.96:1 at the lowest text/background pair; visible tap targets measured at least 44px. Reduced motion keeps the hero static.
- Production CLS measured 0.0000 on repeated 320px and 1440px loads.
- LCP remains **unverified against the 2.5s target** in this headless environment: local loads were 3.1s to 4.2s and production loads were 5.0s to 17.7s, while HTML took about 4.7s and a 380K static asset about 25s to fetch. The hero source assets were compressed from 4.1M/4.9M to 380K/340K at 1920px wide; no application-level LCP regression was observed. Confirm the target with field data or a network-independent lab run before checking this item.

## 11. Open decisions

- Whether to add a dedicated `/skills` route or keep skills in `/about` (default: keep in `/about`).
- Final filter category labels (currently fixed as All, Featured, Team, Capstone, Frontend, Backend, Mobile, AI).
- Whether this PRD is public or internal.
- Whether to activate optional T10 (shadcn/ui + `lucide-react`) after launch.
- **Closed in v1.3:** CTA label unification. Use `"View projects"`, `"Get in touch"` and `"Open GitHub"` site-wide.

## 12. Cross-document coverage

The implementation plan’s section 10 contains the full PRD → task coverage map and the reverse task → PRD check. This PRD defines requirements and scope; the plan defines tasks, files, verification and risks. The Stitch prompts define screen-level design detail. None may add scope without updating the others.

---
Related: [`docs/IMPLEMENTATION_PLAN.md`](./IMPLEMENTATION_PLAN.md) · [`docs/designs/stitch-prompts.md`](./designs/stitch-prompts.md) · [[Home]]
