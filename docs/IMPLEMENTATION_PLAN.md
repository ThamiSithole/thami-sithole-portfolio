# Implementation Plan — Thami Sithole Portfolio (responsive + build + craft)

**Status:** Companion to `docs/PRD.md` v1.3 · **Version:** v1.2 · **Date:** 2026-11-24  
**Source of truth for requirements:** [`docs/PRD.md`](./PRD.md)  
**Target folder:** `/home/kayron1/Work/thami-sithole-portfolio`

> Local review document — intentionally untracked. Do not stage, commit or push until the user approves.  
> **Doc parity rule:** any scope change in this file must be mirrored in `PRD.md` and `docs/designs/stitch-prompts.md`, and vice versa. Section 10 maps every PRD section to a task so there are no uncovered requirements.

---

## 0. Plan details

| Field | Value |
| --- | --- |
| App name | Thami Sithole Portfolio |
| Built from PRD version | v1.3 |
| Screen designs | `docs/designs/stitch-prompts.md` v1.1 (S1–S5). No Stitch project URL yet. |
| Plan version | v1.2 (added v1.3 craft scope; status amended 25 Nov 2026 for CLI auth, trial restriction and MCP-generated brand kit) |
| Repository | https://github.com/ThamiSithole/thami-sithole-portfolio |
| Local path | `/home/kayron1/Work/thami-sithole-portfolio` (no local `.git` directory) |
| Asset tooling | Higgsfield CLI 1.2.3 at `~/.local/bin/higgsfield` (authenticated, workspace selected, CLI generation blocked on trial); Higgsfield MCP connected and used for the full brand kit. |
| Status | Local review draft — untracked; full brand kit generated via MCP and in PR review; code tasks not started |
| Last updated | 25 Nov 2026 |

---

## 1. Start here (instructions for the coding agent)

Before writing any code:

1. Read this whole file from top to bottom.
2. Read `docs/PRD.md` v1.3.
3. Look at the screen designs in `docs/designs/stitch-prompts.md` v1.1 (S1–S5), especially the Style Guide and craft gates.
4. Check Section 10. If a PRD requirement has no task, or this file contradicts the PRD or prompts, stop and ask the human. Do not guess.
5. Check the stack and local constraints in Sections 3–4 (Node 26, npm, browser tooling, no local Git history at start, CLI auth).
6. Start at **T0 only**. When that task's **Verify** step passes, stop and wait for the human to say "continue". Do not batch tasks unless explicitly allowed.
7. Before **T4**, confirm either Higgsfield CLI auth with a selected workspace or the connected Higgsfield MCP. If CLI returns `only_mcp_usage_on_trial_is_available`, use the MCP path; ask the human only if no allowed generation path exists. Do not substitute CSS-only placeholders or spoof an MCP client header to bypass the account restriction.
8. Never start **T10** unless the human asks after launch.

---

## 2. Rules for the coding agent (portfolio edition — binding)

1. **One task at a time.** Only work on the task the human asked for. When its Definition of Done/Verify step is complete, stop and wait for the next instruction.
2. **Thin slices.** Implement → verify → continue. Never stack untested changes.
3. **Never weaken a check.** Do not skip lint, typecheck or build, and do not add suppressions or disable rules just to get green. If a check fails, fix the cause.
4. **Build only what is planned.** Build only what is in this file, `docs/PRD.md` and `docs/designs/stitch-prompts.md`. Never build deferred cleanup. T10 stayed out of T0 to T9 and was activated later by explicit request.
5. **Ask, don't guess.** If anything is missing, unclear or contradictory, stop and ask the human. Never invent labels, links, project data or screenshots.
6. **Match the designs.** Every screen must match its Stitch prompt: layout, order, labels, text, colours, spacing and generated assets. Use the refreshed tokens in `src/app/globals.css`; never hard-code colours, font sizes or spacing.
7. **Every state, every screen.** Each screen must handle all six states listed in its prompt (Normal, Empty, Loading, Error, Offline, Success), with `N/A` where the static site has no such state.
8. **Exact wording.** Use the exact labels and messages from the PRD, current code and Stitch prompts. Never invent wording.
9. **One content source.** Every card renders from `src/content/projects.ts`. Do not duplicate project data in components.
10. **Client components only where needed.** Only the mobile menu, project filter and the hero grade-shift interaction may use `"use client"`.
11. **Secret hygiene.** Never put keys, tokens or credentials in app code, logs, tests, docs or Git. No `.env` in the repo.
12. **No surprise libraries.** Do not add, remove or upgrade any library or tool not listed in Section 3 without asking. shadcn/ui and `lucide-react` are T10-only and post-launch.
13. **Full check before "done".** Run `npm run check` on Node 26, then report the exact result before claiming a task is complete.
14. **Stuck rule.** If the same problem is still failing after 3 attempts, stop and report what you tried, the exact error, and what you need from the human.
15. **Doc parity.** If scope changes, update `PRD.md`, this file and the Stitch prompts in the same session. Do not leave the docs out of sync.
16. **Craft gates.** No em/en-dashes in visible strings; one label per CTA intent; eyebrow ration; no three equal feature cards; one 12px radius; one accent; declared mobile collapse; real generated assets; one signature motion effect with reduced-motion fallback.
17. **Asset honesty.** A `TODO` slot is acceptable only while generation is blocked. Never ship a CSS gradient blob or fake UI as a final visual.

---

## 3. Stack (verified, not assumed)

| Layer | Installed version / choice |
| --- | --- |
| Framework | Next.js **15.5.29**, App Router |
| Language | TypeScript (strict) |
| UI runtime | React **19.3.0** + react-dom 19.3.0 |
| Styling | Tailwind CSS **4.3.3** via `@tailwindcss/postcss`; refreshed tokens in `src/app/globals.css` |
| Fonts | Satoshi via `next/font/local`; JetBrains Mono via `next/font/google`; no Inter in page UI |
| Lint | ESLint 8 + `eslint-config-next` 15.5.29 |
| Scripts | `dev`, `build`, `start`, `lint`, `typecheck`, `check` |
| CI/CD | GitHub Actions, Node **26**, Vercel deploy workflow with GitHub-only secrets |
| Asset tool | Higgsfield MCP (connected), generation only; CLI 1.2.3 installed but blocked on trial; not an app dependency or runtime service |
| Not installed | Test runner, backend, CMS, auth. T10 later added shadcn `badge`, `button` and `lucide-react` after launch. |

**React note:** React is already the foundation — Next.js is a React framework. Do not add it again as a dependency. It belongs in the skills list, not in an install step.

**shadcn/ui note:** shadcn/ui is a copy-in component source system (Radix primitives + Tailwind), not a normal npm UI package, and its icons come from `lucide-react`. It stayed outside T0 to T9; see activated slice **T10** in section 7. Brand SVG icons remain the default, and library icons are confined to dense functional controls in their own visual zone.

---

## 4. Current-state findings (read-only audit)

- Routes `/`, `/about`, `/projects`, `/contact` exist. Shared `SiteHeader`, `SiteFooter`, skip link and `main` wrapper live in `layout.tsx`. No `not-found.tsx`.
- Design tokens and `prefers-reduced-motion` rules already exist in `globals.css`; global `:focus-visible` outline is present. Tokens will be refreshed, not preserved, under v1.3.
- Header has a mobile toggle with `aria-expanded`/`aria-controls`, but no Escape handler, no route-change close except link clicks, and no focus return.
- `/projects` is a static 2-column grid, no filtering. Home shows only the first 2 projects.
- `Project` type has 10 fields; no category/featured/proof/screenshot support. Data has 3 projects, including a known-broken Indlela URL.
- `.github/workflows/` contains only `vercel-deploy.yml` (Node 26). There is no PR CI workflow for lint/typecheck/build.
- Local folder has no `.git` directory — do not assume local commits are possible; use the GitHub remote when available.
- Higgsfield CLI installed at `~/.local/bin/higgsfield`, version 1.2.3. Login and workspace selection are complete, but CLI generation returns `only_mcp_usage_on_trial_is_available`. The Higgsfield MCP is connected and working: the full brand kit was generated through it into `public/assets/` (hero pair 2688 x 1520; other slots at their target sizes).

---

## 5. Execution principles

1. **Thin slices** — implement → verify → continue. Never stack untested changes.
2. **One content source** — every card renders from `src/content/projects.ts`.
3. **Server-first** — client components only for the header toggle, project filter and hero grade-shift.
4. **Verify in a real browser** — Chrome DevTools MCP if configured; otherwise an ephemeral Upstash browser box. No paid/keep-alive resources.
5. **Accuracy deferred** — the user will correct project copy, links and attribution later; the content model must already support those corrections.
6. **Doc parity** — `PRD.md` defines *what*, the Stitch prompts define *how it looks*, and this file defines *how it is built and verified*. None may silently change scope.
7. **Craft before code** — refresh tokens/fonts and generate assets before wiring screens, so components are built against the final visual language.

---

## 6. Dependency order

```text
T0 → T1
     ↓
T2 → T3 → T4 → T5 → T6 → T7 → T8 → T9
                                       ↓
                                    T10 (optional, post-launch only)
```

T1 can run in parallel with T2–T8. T4 depends on Higgsfield auth or the connected MCP path. T5 depends on generated assets from T4. T9 must be last before launch. T10 is never a launch blocker.

---

## 7. Task breakdown

### T0 — Baseline and guardrails
**Files:** none (read-only + local run).  
**Actions:** confirm `node -v`; run `npm ci` and `npm run check`; record baseline; list every outbound URL in `projects.ts`.  
**Acceptance:** baseline documented, Node matches CI/Vercel (26), no pre-existing failure is ignored. The generated `next-env.d.ts` is excluded from ESLint via `.eslintignore`; authored `.ts`/`.tsx` files are still fully linted.  
**Verify:** `npm ci && npm run check`.

### T1 — CI workflow for pull requests
**Files:** `.github/workflows/ci.yml` (new).  
**Actions:** on `pull_request` and push to `main`: checkout, `setup-node@v4` with `node-version: 26` and npm cache, then `npm ci`, `npm run lint`, `npm run typecheck`, `npm run build`. Leave `vercel-deploy.yml` unchanged.  
**Acceptance:** CI runs on PRs, Node 26, no secrets in CI; `main` requires the CI check in GitHub branch protection (manual remote setting, verified once remote access is available).  
**Verify:** open a test PR and confirm all steps green; confirm the required status check in repository settings.

### T2 — Refresh tokens, fonts and responsive foundation
**Files:** `src/app/globals.css`, `src/app/layout.tsx`, font assets.  
**Actions:** replace cyan/violet tokens with the v1.3 slate/coral palette (`#11131a`, `#1a1e28`, `#242a37`, `#2e3545`, `#eef1f6`, `#a6adbd`, `#e2655c`, `#f07b72`); load Satoshi locally and JetBrains Mono from Google; add fluid heading scale with `clamp()`; one 12px radius scale; standardise gutters (`px-4 sm:px-6 lg:px-8`) and section spacing; body text ≥16px with 1.5–1.7 line height; add `.status-badge` utility; preserve skip link and reduced-motion rules.  
**Acceptance:** one accent, no Inter in page UI, no horizontal overflow at 320/375/414/768/1024/1440px; ≥44px touch targets; reduced motion still respected.  
**Verify:** browser screenshots at all six widths.

### T3 — Harden header and footer navigation
**Files:** `src/components/SiteHeader.tsx`, `src/components/SiteFooter.tsx`.  
**Actions:** close mobile menu on route change and Escape; return focus to the toggle; keep `aria-expanded`/`aria-controls`; visible focus states; footer wraps cleanly at 320px; use the generated monogram and icon set; declared mobile collapse. Do **not** add both GitHub identities here — that is deferred PRD cleanup.  
**Acceptance:** mouse, touch and keyboard paths open/close reliably; no focus trap; `aria-current="page"` on active link.  
**Verify:** keyboard-only pass (Tab, Enter, Escape) in browser.

### T4 — Generate brand asset kit
**Files:** `public/assets/**` (new), `docs/designs/stitch-prompts.md` slot table updated with real filenames.  
**Actions:** confirm an allowed Higgsfield path; generate hero dormant/live grades, section plate, profile mark, one icon set, monogram and favicon set, OG card, cover and 404 artwork via MCP; download into `public/assets/`; keep rejects out of `public/`; reference every file from a route or component.  
**Acceptance:** all slots filled and no final deploy; one coherent grade; no watermark or model-rendered text; hero art ≥1500px wide.  
**Verify:** batch coherence check, then `ls public/assets` against the prompt slot table.  
**Guard:** if `higgsfield auth login` is required and MCP is unavailable, or no allowed generation path exists, stop and ask the human. A `only_mcp_usage_on_trial_is_available` CLI error means use MCP, not a stop. Never substitute CSS-only visuals and never spoof an MCP client header to bypass the trial restriction.

### T5 — Extend content model and upgrade ProjectCard
**Files:** `src/content/projects.ts`, `src/components/ProjectCard.tsx`.  
**Actions:** apply the exact `Project` type from PRD §7.4 — `categories?: ProjectCategory[]`, `featured?: boolean`, `proofLinks?`, `screenshots?` — so current entries still compile. Add all 11 strong projects from PRD §7.5 with verified URLs only. Mark the first three `featured: true` in order **Straina → StokvelOS → Riverside Community Hub**. Render status badge, category labels, technology badges using shadcn `Badge`, optional `proofLinks` and optional screenshot slot via `next/image` with `sizes` and meaningful alt text. Keep `h-full` and `mt-auto` link row for aligned grids. Generated icons hidden with `aria-hidden="true"`. Each card is its own component instance, not a shared utility class.
**Acceptance:** all 11 records typecheck; featured order correct; no fabricated links; readable from 320px up; external links use `target="_blank" rel="noreferrer"`.  
**Verify:** `npm run typecheck` and browser screenshots at mobile and desktop.

### T6 — Projects page with filtering
**Files:** `src/components/ProjectsExplorer.tsx` (new, `"use client"`), `src/app/projects/page.tsx`.  
**Actions:** move the grid into the explorer; filter chips: All, Featured, Team, Capstone, Frontend, Backend, Mobile, AI; `useState` + `useMemo`; `aria-pressed` on chips; result count in `aria-live="polite"`; composed empty state; 1/2/3-column grid; `:active` scale and transform-only filter transition; apply the low-opacity section plate. URL query sync only if it stays simple.  
**Acceptance:** filtering works by mouse and keyboard, count updates, no page reload, featured order preserved in "All".  
**Verify:** keyboard pass + `npm run check`.

### T7 — Home featured section and signature motion
**Files:** `src/app/page.tsx`, hero component (new if needed).  
**Actions:** show the three `featured` projects from T5 (not a hard-coded slice of 2) in a 2-column asymmetric grid with the first spanning both columns; build the hero with exactly four text elements, the generated grade pair and `"B2 grade-shift"` (cursor spotlight on desktop, scroll-linked grade on mobile); headline build fires on mount; `prefers-reduced-motion` shows the static live grade; CTA buttons wrap at 320px with one label per intent; keep the "How I work" section as a vertical rhythm list, not three equal cards; keep the single eyebrow.  
**Acceptance:** three featured cards first, one signature effect, no opacity-to-zero reveals, no overflow, `"View projects"` reaches `/projects`.  
**Verify:** screenshots at 320/414/768/1440px with and without reduced motion.

### T8 — About, Contact, 404 and metadata
**Files:** `src/app/about/page.tsx`, `src/app/contact/page.tsx`, `src/app/not-found.tsx` (new), `src/app/layout.tsx` metadata, `public/assets/site.webmanifest`.  
**Actions:** responsive stacking for focus rows/toolkit/links; keep current 9-chip toolkit (expansion deferred); add on-brand 404 with generated artwork and link home; unify CTA labels to `"View projects"`, `"Get in touch"`, `"Open GitHub"`; wire OG card, cover, favicon set, `theme-color` and full social block; confirm one `<h1>` and correct metadata per route.  
**Acceptance:** every route clean at all six widths; 404 styled and reachable; no em/en-dashes in visible copy; one radius scale; real absolute image URLs.  
**Verify:** visit all routes in browser and inspect `<head>`.

### T9 — Functional, craft and build verification
**Files:** none (plus small fixes from T2–T8).  
**Actions:** `npm run check`; `npm run dev` then browser-test every route at all six widths; test nav, filter, keyboard focus, hero motion and all links; `npm run build && npm run start` smoke test; deploy and confirm production URL HTTP 200. Record LCP/CLS observations if browser tooling exposes them. Run the craft gate checklist from the Stitch prompts: dash ban, CTA labels, eyebrow ration, no equal-card row, radius, one accent, Satoshi/JetBrains Mono, assets, motion, declared mobile collapse. Screenshots here are **verification artefacts**, not final portfolio image assets.  
**Acceptance:** every PRD §10 criterion passes, including recorded LCP/CLS observations where browser tooling supports them; craft checklist green; no console errors.  
**Result (2026-11-25):** all functional, craft, accessibility, build and deployment checks passed. CLS measured 0.0000. LCP exceeded 2.5s in this headless environment and remains unverified against the target; see the PRD §10 verification record before treating that criterion as complete.  
**Verify:** screenshots + `curl -I` on live URL.

### T10 — Activated post-launch slice: shadcn/ui + lucide-react
**Files:** `components.json`, `src/components/ui/*`, `src/app/globals.css`, `package.json` (only after T9 passes and the user asks).  
**Decision:** React needs no addition, it is already present. shadcn/ui stayed optional through T9 because the existing cards, buttons and badges were simple and already Tailwind-styled. After explicit approval, activation verified the v4 registry style in `components.json`, mapped shadcn CSS variables to existing `@theme` tokens and copied only `button` and `badge`. Decorative `lucide-react` icons use `aria-hidden="true"`, brand SVGs stay the default and the two icon sets never share a visual zone. Rerun `npm run check` on Node 26 and all breakpoints after activation.
**Acceptance:** no token conflict, no layout regression, CI still green, bundle impact reviewed.  
**Verify:** full T9 pass again after the slice.  
**Guard:** this slice is never required for launch and must be recorded in all three docs if activated.
**Result (2026-11-25):** activated after explicit user approval. `components.json` uses the Tailwind v4 registry style with an empty config path. Only `badge` and `button` were copied into `src/components/ui/*`; shadcn variables map to the existing `@theme` tokens. The Toolkit uses nine local brand SVGs with visible labels and `aria-hidden`; `lucide-react` appears only as the selected-filter `Check` in the functional project-filter zone and is never mixed into the Toolkit or external-link icons. Full verification was rerun after activation. Bundle review: `/projects` moved from 2.24 kB and 110 kB First Load JS to 14.6 kB and 123 kB because the filter uses the shadcn button and Lucide; `/about` stayed at 178 B and 112 kB; shared JS stayed at 103 kB. Later hero polish (2026-11-26): the desktop profile card was widened so the role line stays on one line and vertically centered against the primary copy.

---

## 8. Risks and mitigations

- **Broken/stale links** — accuracy is deferred; use verified URLs only, never invent them.
- **No local Git repo** — keep work as file edits; use the GitHub remote for PRs.
- **Higgsfield CLI trial restriction** — CLI is authenticated with a workspace selected, but trial jobs are MCP-only; use the connected MCP path, which already produced the full brand kit. Ask the human only if neither path is available. No CSS-only substitutes and no header spoofing.
- **Tailwind v4** — verify utilities against v4, not v3 habits.
- **Hydration/focus** — header, filter and hero grade-shift are the only client islands; test all with keyboard.
- **Paid browser resources** — ephemeral boxes only; no keep-alive/paid add-ons.
- **Scope creep** — no backend, CMS, auth, analytics, blog, per-project truth fixes, scroll-scrub journey, or shadcn/ui in T0–T9.

---

## 9. Definition of done

- `npm run lint`, `npm run typecheck`, `npm run build` green on Node 26.
- CI green on a PR; Vercel production deploy returns HTTP 200.
- No horizontal overflow at 320/375/414/768/1024/1440px on any route.
- Mobile nav and project filter work with mouse, touch and keyboard.
- All 11 strong projects render from one content file; the featured three appear first.
- Craft gates pass: one accent, generated assets and icons, one signature motion effect with reduced-motion fallback, no em/en-dashes, one CTA label per intent, one radius scale, declared mobile collapse.
- No secrets/`.env` in the repo; all three docs remain local untracked review files until approved.

---

## 10. Cross-document coverage map (PRD ↔ plan ↔ prompts)

| PRD section / requirement | Covered by | Notes |
|---|---|---|
| §1 Vision — responsive, fast, single source, crafted visual language | T2, T4, T5, T7, T9 | Performance targets measured in T9; craft in Style Guide and T4/T7/T9 |
| §2 Problem — layout, cards, build, generic visual language | T2, T5, T9; T4 for asset refresh | Accuracy fixes stay deferred |
| §3 Audience — mobile/laptop scanning | T2, T6, T7, T9 | Breakpoint screenshots at both sizes |
| §4 Goals — responsive, navigation, filtering, check green, 11 projects, a11y, craft | T2, T3, T4, T6, T7, T9 | Every goal has a task and a verification |
| §5 Non-goals / deferred cleanup | T4/T8 (explicitly excluded) | Deferred items listed in PRD are not silently implemented |
| §5 in-scope craft refresh | T2, T4, T5, T7, T8, T9 | Palette, fonts, icons, assets, motion, CTA copy |
| §5 optional design-system decision | T10 | Optional, post-launch, mirrored in PRD §5, prompts Style Guide and Modals |
| §6 IA — four routes, header behaviour, home, projects, about, contact, footer, 404 | T3, T6, T7, T8 | Footer dual-GitHub links remain deferred |
| §7.1 Breakpoints, typography, radius, mobile collapse | T2, T3, T7, T9 | Six tested widths; Satoshi + JetBrains Mono; 12px radius |
| §7.2 Cards, filter categories, featured order, asymmetric featured grid | T4, T5, T6, T7 | Categories arrays; `featured` boolean; no equal-card row |
| §7.3 Accessibility, alt text, reduced motion, mount-safe motion | T2, T3, T5, T6, T7, T8, T9 | Skip link preserved in T2; B2 fallback in T7 |
| §7.4 Content model | T5 | Exact PRD type; no extra required fields |
| §7.5 Project inventory | T5 | All 11 entries, verified URLs only |
| §8 Engineering/build/CI/secrets, fonts, generated assets | T0, T1, T2, T4, T9 | Tokens refreshed; Higgsfield MCP is an asset tool only; branch protection verified manually |
| §9 Rollout steps 1–9 | T2, T3, T5, T4, T6, T7, T9 | Step 4 asset generation is T4; step 9 is T10 |
| §10 Acceptance criteria | T9 | Checklist owned by T9 |
| §11 Open decisions — `/skills`, labels, PRD visibility, T10 | Section 9 + PRD §11 | CTA labels closed in v1.3; others left open intentionally |

**Gap check:** every PRD requirement maps to at least one task with an acceptance criterion. Every task maps back to a PRD section. T10 exists in all three documents with identical scope.

---

## 11. Maintenance rule

If any of the three documents changes, update the others in the same edit session:

1. New requirement → add to PRD section, then add/mark a task here and in the coverage map, and reflect it in the Stitch prompts.
2. Task scope removed → remove or mark it in PRD too, and remove the corresponding design detail from the prompts.
3. Optional slice activated → remove the "optional/post-launch" guard in all three documents and add it to the definition of done.
4. Generated asset added, changed or removed → update the prompt slot table and T4.

---
Related: [`docs/PRD.md`](./PRD.md) · [`docs/designs/stitch-prompts.md`](./designs/stitch-prompts.md) · [[Home]]
