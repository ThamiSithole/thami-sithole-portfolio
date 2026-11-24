# Thami Sithole — Portfolio

A responsive personal portfolio built with Next.js App Router, TypeScript and Tailwind CSS. It presents selected work, background, skills and a clear way to verify the code on GitHub.

## Pages

- `/` — introduction, featured projects and working principles
- `/about` — background, focus areas and toolkit
- `/projects` — capstone, team and individual projects with problem, role, stack and links
- `/contact` — GitHub and current work links

Project content lives in `src/content/projects.ts`. Update that file to add or revise a project; the home and projects pages read from the same source.

## Run locally

Prerequisites: Node.js 20 or newer and npm.

```bash
npm install
npm run dev
```

Open the URL printed by Next.js, usually `http://localhost:3000`.

No environment variables are required. The site is static-friendly and does not call a backend.

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

`npm run check` runs all three in order.

## Project structure

```text
src/
  app/
    about/       Background page
    contact/     Contact page
    projects/    Full project list
    globals.css  Design tokens and base styles
    layout.tsx   Shared metadata, header and footer
    page.tsx     Home page
  components/    Header, footer and project card
  content/       Structured project data
```

## Deployment

The project uses the standard Next.js build and needs no `vercel.json`. Import `ThamiSithole/thami-sithole-portfolio` into Vercel and keep the default framework settings:

- Build command: `npm run build`
- Output directory: Next.js default
- Node.js: 20.x or newer

Every merge to `main` should trigger a production deployment.

## GitHub workflow

`main` is protected. Work happens on named branches, goes through a pull request and is squash-merged after checks pass. Do not commit secrets, `.env` files or credentials.
