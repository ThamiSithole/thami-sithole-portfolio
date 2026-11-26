# Stitch Prompts — Thami Sithole Portfolio

**Version:** v1.1 · **Date:** 2026-11-24  
**Source:** [`../PRD.md`](../PRD.md) v1.3 and [`../IMPLEMENTATION_PLAN.md`](../IMPLEMENTATION_PLAN.md) v1.2  
**Method:** higgsfield-websites craft rules applied as a refinement lens. The build stack stays Next.js 15 + Vercel as locked in the PRD and plan.

> Local review document — intentionally untracked. Do not stage, commit or push until approved.

## Prompt conventions

- This is a **responsive web portfolio**, not an Android app. For every screen, design two frames: **1440 × 900 desktop** and **375 × 812 mobile**.
- Reuse the Style Guide and shared components exactly. Keep `SiteHeader` and `SiteFooter` identical on every screen.
- Use the exact labels in quotation marks. Do not invent features, buttons, screens or copy.
- List all six states on every prompt: Normal, Empty, Loading, Error, Offline, Success. Mark `N/A` explicitly when the static site has no such state.
- Sample content comes from PRD §7.5 (project names, South Africa, Rustenburg, stokvels, dates). No lorem ipsum, no invented rand amounts.
- T10 is activated: shadcn `badge` and `button` use the mapped brand tokens; one local brand SVG marks each Toolkit stack. `lucide-react` is limited to the selected-filter check in functional controls, never in the Toolkit or external-link icon zone.

### Craft gates (from higgsfield-websites design recipe)

- **No em-dash or en-dash as a separator** in any visible string. Use colon, comma, period or hyphen. The middle dot `·` is allowed.
- **One label per CTA intent page-wide:** `"View projects"` for every browse-projects action, `"Get in touch"` for contact, `"Open GitHub"` for the profile. No synonyms.
- **Eyebrow ration:** at most one eyebrow per three sections. Prefer none. Section headings carry the hierarchy.
- **No three equal feature cards in a row.** Home featured work uses a 2-column asymmetric grid; `"How I work"` uses a vertical rhythm list.
- **One corner-radius scale site-wide:** 12px soft on cards, badges and controls. No mixed radii; stack chips and the fixed SiteHeader nav pill are the only declared pill shapes.
- **One accent color only.** Neutrals carry everything else. No gradient text, no cyan or violet glow, no second accent.
- **Mobile collapse is declared explicitly** for every multi-column section. Do not leave it to the framework.
- **Screenshot-safe motion:** text builds fire on mount, not on viewport entry. Scroll effects animate transform, scale or clip only, never opacity-to-zero. Every animated element has a `prefers-reduced-motion` static fallback.
- **Real generated visuals** occupy every asset slot. Never substitute CSS gradient blobs or div-built fake UI.
- **One signature motion effect** only, with a written purpose. See the `"B2 grade-shift"` hero treatment in S1.

---

## 1. Style Guide

Design a responsive web style guide for the Thami Sithole portfolio. Apply these values exactly; do not add colours, fonts, spacing tokens or icons that are not listed.

### Colour palette (replaces the previous cyan/violet scheme)

| Token | Hex | Usage |
|---|---|---|
| `--color-ink` | `#11131a` | Page background, off-black slate |
| `--color-surface` | `#1a1e28` | Card base layer |
| `--color-surface-2` | `#242a37` | Raised layer, hover nav background |
| `--color-line` | `#2e3545` | Borders, dividers, tag borders |
| `--color-text` | `#eef1f6` | Primary text, warm off-white |
| `--color-muted` | `#a6adbd` | Secondary text |
| `--color-accent` | `#e2655c` | Single accent: links, focus ring, selected filter, active status dot |
| `--color-accent-hover` | `#f07b72` | Accent hover and pressed states only |

One accent, saturation under 80 percent. No second accent, no gradient text, no neon glow, no pure black. Dark theme on every section. Status is conveyed by text plus the single accent dot, not by extra colours.

Background treatment: slate base with a very subtle warm paper grain plate from `public/assets/section-plate-projects.png` on the projects section only. No radial glows.

### Typography

- Display and body family: **Satoshi**, loaded locally with `next/font/local`. Weights 400, 500, 700.
- Label, eyebrow and stack-chip family: **JetBrains Mono**, loaded from `next/font/google`. Used only for uppercase eyebrows, chips and the numeric result count.
- Inter is not used anywhere in the page. It remains only in the cover-composition tool, which is not page UI.
- Fluid headings using `clamp()` per PRD §7.1. Hero `text-4xl sm:text-6xl`, page title `text-4xl sm:text-5xl`, section title `text-3xl`, card title `text-xl` or `text-2xl` when featured.
- Body: 16px minimum with 1.5 to 1.7 line height, max 65 characters per line. Secondary copy: 14px.
- Headline at most 8 words and 2 lines on desktop. Subtext at most 25 words.
- No em-dashes or en-dashes in any visible string.

### Spacing and shape

- 8pt scale: 8, 16, 24, 32, 48, 64, 80, 96px.
- Container: `max-w-6xl` (~1152px) with `px-4 sm:px-6 lg:px-8`.
- Cards: 24px padding, 32px on featured cards. Grid gap: 24px.
- Section spacing: 80 to 96px on desktop, reduced proportionally on mobile.
- One corner radius: 12px on cards, badges, inputs and controls. The fixed SiteHeader nav pill is the one intentional exception to the no-pills rule, with a pinned 999px pill radius, alongside the declared stack chips. No mixed radii elsewhere.

### Iconography

- Icons come from one generated custom set in `public/assets/icons/`: external-link arrow, three-span menu bars, solid dot bullet, check, branch/commit, live/app mark. One stroke weight, brand palette, shared grid.
- No hand-rolled SVG illustrations, no icon font, no library icons in this pass.
- Decorative icons must be `aria-hidden="true"`. Icons inherit nearby text colour (`accent` for links, `muted` for menu).

### Motion

- Non-animated mode. No scroll-scrub camera journey, no passive autoplay loop.
- One signature effect: `"B2 grade-shift"` on the hero visual, specified in S1. All other motion is motivated micro-interaction only.
- Spring physics over linear easing. Animate transform and opacity only. `prefers-reduced-motion` static fallback on every animated element.
- Use `min-h-dvh`, never `h-screen`.

### Shared components — show each variant side by side with its label

1. **SiteHeader** — variants: `desktop`, `mobile-closed`, `mobile-open`, `active-link`. Fixed at `top-3` with full-width gutters and a horizontally centred glass pill: `ink/70`, blur, one 1px `line/70` outline, pinned 999px pill radius, no filled bar. Generated monogram mark `"TS"`, name `"Thami Sithole"`, subtitle `"Software engineer"`, nav labels `"Home"`, `"About"`, `"Projects"`, `"Contact"`. Active link uses `accent/15` background and `accent` text. Nav is one line at desktop, height at most 80px. Mobile collapse declared explicitly: below 640px the links hide and the toggle shows; `mobile-open` puts a 12px-radius glass dropdown below the pill with the same labels, preserving `aria-expanded`/`aria-controls`, Escape close, route-change close and focus return.
2. **SiteFooter** — variants: `desktop-row`, `mobile-stacked`. Name `"Thami Sithole"`, tagline `"Building software that is useful, testable and clear to use."`, links `"About"`, `"Projects"`, `"Contact"`, `"Open GitHub"`. Mobile collapse: below 640px links stack under the name.
3. **ProjectCard** — variants: `featured`, `compact`, `with-proof-links`, `with-screenshot-slot`. Fields in order: eyebrow, status badge, name, summary, `Problem`, `Role`, highlights (dot bullets), technology badges, link row. Screenshot slot is optional and reserved, not a final asset. Each card is its own component instance, not a shared card utility class.
4. **StatusBadge** — variants: `"Live · team capstone"`, `"Phase 2 complete · preparing for Vercel deployment"`, `"Product specification approved · build in progress"`. Muted text, hairline border, no filled background, one accent dot for the active status.
5. **Tag / stack chip** — variants: `default`, `hover`. Pill border `line`, faint accent tint, 12px semibold JetBrains Mono text.
6. **FilterChip** — variants: `unselected`, `selected` (`aria-pressed`), `focus-visible`. Labels: `"All"`, `"Featured"`, `"Team"`, `"Capstone"`, `"Frontend"`, `"Backend"`, `"Mobile"`, `"AI"`. Selected uses `accent/15` and `accent`. Each chip has an `:active` scale of 0.98.
7. **SkipLink** — variants: `hidden`, `focused`. On focus it slides into view at top-left with `accent` background and `ink` text.
8. **LinkRow** — variants: `live`, `github`, `proof`. Labels `"Live app"`, `"Open GitHub"`, plus proof labels from `proofLinks`. Generated arrow icon, not a text glyph. Each link is its own garment, not one shared button class.

### Generated asset slots

| Slot | File | Used by |
|---|---|---|
| Hero, dormant grade | `public/assets/hero-dormant.png` | S1 hero, B2 crossfade source |
| Hero, live grade | `public/assets/hero-live.png` | S1 hero, B2 crossfade target and reduced-motion fallback |
| Section plate | `public/assets/section-plate-projects.png` | S2 background texture |
| Profile mark | `public/assets/profile-mark.png` | S1 profile card |
| Icon set | `public/assets/icons/` | All screens |
| Monogram and favicon set | `public/assets/logo-ts.*`, `public/assets/icon-*.png`, `public/assets/site.webmanifest` | Header, browser kit |
| OG card and cover | `public/assets/og-thami-sithole.png`, `public/assets/cover-thami-sithole.png` | Metadata, feed card |
| 404 artwork | `public/assets/404-art.png` | S5 |

All asset slots are generated and slotted in from Higgsfield MCP. The hero pair is 2688 x 1520; the remaining grades and derived favicon/OG/cover files use the sizes listed above. No slot uses a CSS approximation.

---

## 2. S1 — Home (`/`)

Design screen "S1" for my responsive web portfolio at **1440 × 900 desktop** and **375 × 812 mobile**. Reuse the style guide and shared components exactly. Keep the header and footer identical to my other screens. Include every element in the order listed. Use the exact labels in quotation marks. Fill with the sample content given. Design the Normal state first, then one extra frame for each other state in the spec. Do not invent features, buttons, screens or text.

**Spec (PRD §6):** Intro, featured projects (first three), working principles, clear browse-projects link. Primary action: `"View projects"`.

**Layout (Normal):**

- `SiteHeader` with active `"Home"`.
- One eyebrow only, `"Portfolio · Selected work"`.
- Hero: headline `"I build software that removes friction."` on two desktop lines, and a subtext of at most 25 words about frontend, backend and release engineering. A generated hero visual occupies `public/assets/hero-live.png` across the full card with a left-aligned focal point. No fake dashboard or terminal. The primary column contains exactly four text elements: eyebrow, headline, subtext, CTA row. The profile card sits in the right column of the same card on desktop, wide enough for the role line on one line and vertically centered against the primary copy, and stacks inside the hero below the CTA row on smaller screens.
- CTA row: `"View projects"` as the primary garment, `"Get in touch"` as the secondary garment. Each is its own component with its own interaction identity. No shared button class.
- Signature motion: `"B2 grade-shift"` hero pair. A cursor spotlight crossfades `hero-dormant.png` to `hero-live.png` on desktop; on mobile a gentle scroll-linked grade change replaces the cursor. Purpose: the work lights up when the visitor engages. Initial paint shows `hero-live.png` in full. Reduced motion shows the same static image with no crossfade. Headline build fires on mount, not on viewport entry.
- Profile card, placed at the right edge inside the hero: brand monogram `"TS"`, `"Thami Sithole"`, `"Frontend · Backend · DevOps / Release"`, short StokvelOS note, two-column facts `"Base"` / `"South Africa"` and `"Focus"` / `"Web & mobile-first UX"`.
- Section `"Selected work"` with heading `"Projects with a point."` and link `"View projects"`. Show the three featured cards in order `"Straina"`, `"StokvelOS"`, `"Riverside Community Hub"` in a 2-column asymmetric grid with the first card spanning both columns on desktop. Same `ProjectCard` component as the projects page, never a copied variant.
- Section `"How I work"` with heading `"Small, clear slices."` and three principle rows in a vertical rhythm, separated by hairline rules, not a three-card row: `"Build for the real constraint"`, `"Prove it with tests"`, `"Ship in small reviews"`. Each row is a bold label on the left and a one-line note on the right.
- `SiteFooter`.

**Mobile collapse:** the hero card keeps its full width, the primary copy stays above the profile card, and the profile facts remain in a two-column row. Featured grid becomes one column; principle rows stack label above note. No horizontal scroll at 320px.

**States (PRD §7 / §10):**

- Normal: desktop full-width hero card with primary copy left and profile card right; mobile stacks primary copy, profile card, featured cards and principle rows inside the one-column page.
- Empty: N/A — content is authored in `src/content/projects.ts`; no dynamic data source in this pass.
- Loading: N/A — server-rendered static content, no client fetch.
- Error: N/A — no runtime data request on this route.
- Offline: N/A — no offline mode in this pass.
- Success: N/A — view-only page; no submit state.

**Sample content:** `"Thami Sithole"`, `"South Africa"`, `"2026-11-24"`, `"Straina"`, `"StokvelOS"`, `"Riverside Community Hub"`.

**TODOs:** none.

---

## 3. S2 — Projects (`/projects`)

Design screen "S2" for my responsive web portfolio at **1440 × 900 desktop** and **375 × 812 mobile**. Reuse the style guide and shared components exactly. Keep the header and footer identical to my other screens. Include every element in the order listed. Use the exact labels in quotation marks. Fill with the sample content given. Design the Normal state first, then one extra frame for each other state. Do not invent features, buttons, screens or text.

**Spec (PRD §6, §7.2, §9 step 4):** Full project grid with category filter and status badges. Primary action: choose a filter chip.

**Layout (Normal):**

- `SiteHeader` with active `"Projects"`.
- One eyebrow only, `"Projects"`.
- Page heading `"Work that solves a named problem."`.
- Intro paragraph of at most 25 words explaining problem, role, tools and delivery, with the capstone first.
- Filter row with chips `"All"`, `"Featured"`, `"Team"`, `"Capstone"`, `"Frontend"`, `"Backend"`, `"Mobile"`, `"AI"`. `"All"` selected on load.
- Result count in a live region, e.g. `"11 projects"`, in JetBrains Mono.
- Background uses the subtle paper-grain plate `public/assets/section-plate-projects.png` at low opacity.
- Grid of `ProjectCard`s: 1 column mobile, 2 columns tablet, 3 columns desktop, 24px gap. Featured order `"Straina"`, `"StokvelOS"`, `"Riverside Community Hub"`. The 3-column grid is a project grid, not an equal feature-card row, and is required by the PRD.
- Each chip and card has an `:active` scale of 0.98. Filter change is a transform-only transition, never opacity-to-zero.
- `SiteFooter`.

**States (PRD §7 / §10):**

- Normal: 11 cards, `"All"` selected, count `"11 projects"`.
- Empty: `"No projects match this filter."` with the filter row still visible and composed spacing, not a bare line of text.
- Loading: N/A — filtering is local component state, no fetch. If a skeleton is ever needed, shape it like the final card grid, never a generic spinner.
- Error: N/A — no runtime data request.
- Offline: N/A — static content.
- Success: selecting a chip updates the grid without reload; count changes, selected chip uses `accent/15` and `accent`, focus ring stays visible.

**Sample content:** `"Straina"`, `"StokvelOS"`, `"Riverside Community Hub"`, `"Indlela MVP"`, `"TaskForge API"`, `"EdTech Assistant"`, `"Toro Coffee Redesign"`, `"TaskFlow Dashboard"`, `"NearbyTool"`, `"E-commerce Order Processor"`, `"Portfolio site"`, `"South Africa"`, `"Rustenburg"`, `"stokvels"`, `"2026-11-24"`.

**TODOs:** none.

---

## 4. S3 — About (`/about`)

Design screen "S3" for my responsive web portfolio at **1440 × 900 desktop** and **375 × 812 mobile**. Reuse the style guide and shared components exactly. Keep the header and footer identical to my other screens. Include every element in the order listed. Use the exact labels in quotation marks. Fill with the sample content given. Design the Normal state first, then one extra frame for each other state. Do not invent features, buttons, screens or text.

**Spec (PRD §6):** Background, focus areas, toolkit, GitHub links. Primary action: `"Open GitHub"`. Profile links open `ThamiRoneo`; repository links stay on their existing accounts and are not redesigned here.

**Layout (Normal):**

- `SiteHeader` with active `"About"`.
- No eyebrow. Page heading `"I am an AI-engineering student building products end to end."`.
- Three paragraphs of at most 25 words each: Straina CI, deployment and release work plus features; StokvelOS Phase 2 foundations; a product-plus-engineering closing note.
- Section `"Where I focus"` with three staggered rows, not three equal cards: `"Frontend"`, `"Backend & data"`, `"Release engineering"`. Alternate the alignment of the note column.
- Section `"Toolkit"` with nine icon-and-label items, one local brand SVG per stack, decorative and hidden from screen readers: `"TypeScript"`, `"React"`, `"Next.js"`, `"Tailwind CSS"`, `"PostgreSQL"`, `"Supabase"`, `"Vitest"`, `"GitHub Actions"`, `"Vercel"`.
- CTA card `"Want to see the code?"` with a single framed block CTA `"Open GitHub"`, its own garment. No text arrow glyph.
- Closing line `"Looking for project detail instead?"` with inline underlined link `"View projects"`.
- `SiteFooter`.

**Mobile collapse:** focus rows stack note under label; toolkit icon-and-label items wrap; CTA card spans full width. No horizontal scroll at 320px.

**States (PRD §7 / §10):**

- Normal: desktop focus rows alternate alignment; mobile stacks description above wrapped chips.
- Empty: N/A — static content.
- Loading: N/A — static content.
- Error: N/A — no runtime data request.
- Offline: N/A — no offline mode in this pass.
- Success: N/A — view-only page.

**Sample content:** `"Thami Sithole"`, `"Straina"`, `"StokvelOS"`, `"South Africa"`, `"2026-11-24"`.

**TODOs:** none.

---

## 5. S4 — Contact (`/contact`)

Design screen "S4" for my responsive web portfolio at **1440 × 900 desktop** and **375 × 812 mobile**. Reuse the style guide and shared components exactly. Keep the header and footer identical to my other screens. Include every element in the order listed. Use the exact labels in quotation marks. Fill with the sample content given. Design the Normal state first, then one extra frame for each other state. Do not invent features, buttons, screens or text.

**Spec (PRD §6):** GitHub and current work links. Primary action: open the GitHub profile card.

**Layout (Normal):**

- `SiteHeader` with active `"Contact"`.
- No eyebrow. Heading `"Let's build something useful."`.
- Intro paragraph of at most 25 words about collaboration, code review and roles.
- Link card `"GitHub"` with `"github.com/ThamiRoneo"` and the generated external-link icon.
- Link card `"Current focus"` with `"StokvelOS capstone: auth, groups and permissions"` and the generated external-link icon.
- Aside card `"What I bring to a team"` with three dot bullets: small reviewable changes; frontend and backend respecting the same product rules; release discipline with CI and repeatable deployments.
- Closing note that project pages contain problem, contribution and verification links.
- `SiteFooter`.

**Mobile collapse:** desktop uses a 60/40 asymmetric two-column layout; below 640px the aside stacks under the link cards at full width.

**States (PRD §7 / §10):**

- Normal: desktop two-column asymmetric; mobile stacked.
- Empty: N/A — static content.
- Loading: N/A — static content.
- Error: N/A — no runtime data request.
- Offline: N/A — no offline mode in this pass.
- Success: N/A — view-only page; link cards open external targets.

**Sample content:** `"Thami Sithole"`, `"South Africa"`, `"2026-11-24"`.

**TODOs:** none.

---

## 6. S5 — Not found (`/not-found`)

Design screen "S5" for my responsive web portfolio at **1440 × 900 desktop** and **375 × 812 mobile**. Reuse the style guide and shared components exactly. Keep the header and footer identical to my other screens. Include every element in the order listed. Use the exact labels in quotation marks. Design the Normal state first, then one extra frame for each other state. Do not invent features, buttons, screens or text.

**Spec (PRD §6):** Simple, on-brand not-found page with a link home. Primary action: return home. Keep only the heading and the Home link plus shared header, generated 404 artwork and footer.

**Layout (Normal):**

- `SiteHeader` unchanged, with no active nav item.
- Generated state artwork `public/assets/404-art.png`, a single quiet composition in the brand palette.
- Centred heading `"404"` with an inline underlined link `"Home"` to `/`.
- `SiteFooter`.

**States (PRD §7 / §10):**

- Normal: centred content in the shared container and card styling.
- Empty: N/A — no content collection.
- Loading: N/A — static route.
- Error: N/A — this is the not-found route itself.
- Offline: N/A — static content.
- Success: N/A — view-only page.

**Sample content:** `"Thami Sithole"`, `"South Africa"`.

**TODOs:** none.

---

## 7. Modals

No modals are specified in PRD §6 or §7. None are designed in this pass. Do not add a dialog, menu or overlay. Activated T10 added only `badge` and `button`; no Radix dialog, menu or overlay was introduced.

---

## 8. Craft gate checklist

| Gate | Pass condition |
|---|---|
| Dash ban | No em-dash or en-dash in any quoted visible string. Middle dot allowed. |
| CTA labels | One label per intent: `"View projects"`, `"Get in touch"`, `"Open GitHub"`. |
| Eyebrow ration | At most one eyebrow per three sections. |
| Equal-card ban | No three equal feature cards. Home uses a 2-column asymmetric grid and a vertical rhythm list. |
| Radius | 12px on cards, badges and controls; stack chips and the fixed SiteHeader nav pill are the only pill exceptions. |
| Accent | One accent `#e2655c`. No cyan, violet, gradient text or glow. |
| Type | Satoshi display and body, JetBrains Mono labels. No Inter in page UI. |
| Assets | Every slot uses a generated file or an explicit TODO. No CSS-only placeholder. |
| Motion | One signature effect, mount-safe text builds, reduced-motion fallback on every animated element. |
| Mobile collapse | Every multi-column section declares its below-640px behaviour. |

---

## 9. Review and consistency check

| PRD area | Prompt coverage |
|---|---|
| §5 deferred cleanup / dual GitHub identities | Excluded from S3 and S4 by explicit note |
| §5 activated T10 shadcn/lucide | Style Guide notes brand-token mapping; badge and button only, with Lucide confined to filter controls |
| §6 IA — four routes + 404 | S1–S5 |
| §6 header behaviour | Style Guide SiteHeader; repeated in every screen prompt |
| §7.1 breakpoints, typography, radius | Style Guide; desktop + mobile frames in every prompt |
| §7.2 cards, badges, filters, featured order | Style Guide components; S2, S1 |
| §7.3 accessibility, alt text, reduced motion | Style Guide SkipLink, focus ring, aria-hidden icons, motion fallback |
| §7.4 content model | S2 card fields and proof links; S1 featured flag order |
| §7.5 project inventory | S2 sample content and card count |
| §8 tokens refreshed, assets generated | Style Guide palette and generated asset slots |
| §10 acceptance criteria | Six states on every screen prompt |

**TODO scan:** all asset slots are filled. No PRD data is missing; no PRD update is required for these slots.

**Change log:** v1.1 — higgsfield-websites craft lens applied: single-accent slate palette, Satoshi + JetBrains Mono, generated icon and asset kit, bespoke CTA garments, eyebrow ration, no em/en-dashes, mount-safe B2 hero motion, explicit mobile collapse, craft gate checklist, and mirrored PRD v1.3 / plan v1.2. Asset status amended 25 Nov 2026: full generated kit slotted in through Higgsfield MCP.

---
Related: [`../PRD.md`](../PRD.md) · [`../IMPLEMENTATION_PLAN.md`](../IMPLEMENTATION_PLAN.md) · [[Home]]
