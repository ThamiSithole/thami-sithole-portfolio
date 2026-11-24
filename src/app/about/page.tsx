import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description: "Background, focus areas and working style of Thami Sithole.",
};

const focusAreas = [
  {
    title: "Frontend",
    body: "Accessible, mobile-first interfaces in React and Next.js with states that match the product spec exactly.",
  },
  {
    title: "Backend & data",
    body: "PostgreSQL and Supabase with Row Level Security, so permissions survive beyond the screen layer.",
  },
  {
    title: "Release engineering",
    body: "GitHub Actions, protected main branches, reviewed pull requests and deployments that stay repeatable.",
  },
];

const toolkit = [
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "PostgreSQL",
  "Supabase",
  "Vitest",
  "GitHub Actions",
  "Vercel",
];

export default function AboutPage() {
  return (
    <div className="grid gap-20">
      <section className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">About</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-text sm:text-5xl">
          I am an AI-engineering student building products end to end.
        </h1>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
          <p>
            My work spans coursework, individual projects and team builds. On Straina I handled CI,
            deployment and release work alongside frontend and backend features: hotspot alerts,
            user and role management, source management and an offline hook.
          </p>
          <p>
            On StokvelOS I focused on the Phase 2 foundations — authentication, groups, invitations,
            member settings and database-enforced permissions. The goal is always the same: make the
            system understandable to a user and provable to a reviewer.
          </p>
          <p>
            I am most useful where product thinking and engineering meet: turning a real constraint
            into a clear interface, then backing it with tests and a deployment other people can
            trust.
          </p>
        </div>
      </section>

      <section aria-labelledby="focus">
        <h2 id="focus" className="text-3xl font-bold tracking-tight text-text">
          Where I focus
        </h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {focusAreas.map((area) => (
            <div key={area.title} className="card p-6">
              <h3 className="text-lg font-bold text-text">{area.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{area.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="toolkit" className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 id="toolkit" className="text-3xl font-bold tracking-tight text-text">
            Toolkit
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            The tools I reach for most often, chosen for clarity and deployability rather than novelty.
          </p>
        </div>
        <ul className="flex flex-wrap gap-3 self-start">
          {toolkit.map((tool) => (
            <li key={tool} className="tag px-4 py-2 text-sm">
              {tool}
            </li>
          ))}
        </ul>
      </section>

      <section className="card flex flex-col gap-5 p-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold text-text">Want to see the code?</h2>
          <p className="mt-2 text-sm text-muted">
            My public repositories and contribution history are on GitHub.
          </p>
        </div>
        <a
          href="https://github.com/ThamiSithole"
          target="_blank"
          rel="noreferrer"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-bold text-ink"
        >
          Open GitHub ↗
        </a>
      </section>

      <p className="text-sm text-muted">
        Looking for project detail instead? <Link href="/projects" className="text-accent underline underline-offset-4">Browse projects</Link>.
      </p>
    </div>
  );
}
