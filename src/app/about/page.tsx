import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";

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
  { label: "TypeScript", icon: "typescript" },
  { label: "React", icon: "react" },
  { label: "Next.js", icon: "nextjs" },
  { label: "Tailwind CSS", icon: "tailwindcss" },
  { label: "PostgreSQL", icon: "postgresql" },
  { label: "Supabase", icon: "supabase" },
  { label: "Vitest", icon: "vitest" },
  { label: "GitHub Actions", icon: "githubactions" },
  { label: "Vercel", icon: "vercel" },
];

export default function AboutPage() {
  return (
    <div className="grid gap-20">
      <section className="max-w-3xl">
        <h1 className="text-fluid-lg font-extrabold tracking-tight text-text">
          I am an AI-engineering student building products end to end.
        </h1>
        <div className="mt-8 space-y-5 text-base leading-relaxed text-muted">
          <p>
            My work spans coursework, individual projects and team builds. On Straina I handled CI,
            deployment and release work alongside frontend and backend features: hotspot alerts,
            user and role management, source management and an offline hook.
          </p>
          <p>
            On StokvelOS I focused on the Phase 2 foundations: authentication, groups, invitations,
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
        <h2 id="focus" className="text-fluid-md font-bold tracking-tight text-text">
          Where I focus
        </h2>
        <div className="mt-8 divide-y divide-line border-y border-line">
          {focusAreas.map((area) => (
            <div
              key={area.title}
              className="grid gap-2 py-6 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:gap-8"
            >
              <h3 className="text-lg font-bold text-text">{area.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{area.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="toolkit" className="grid gap-8 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 id="toolkit" className="text-fluid-md font-bold tracking-tight text-text">
            Toolkit
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-muted">
            The tools I reach for most often, chosen for clarity and deployability rather than
            novelty.
          </p>
        </div>
        <ul className="flex flex-wrap gap-3 self-start">
          {toolkit.map((tool) => (
            <li key={tool.label}>
              <Badge variant="stack" className="px-4 py-2 text-sm">
                <Image
                  src={`/assets/icons/stacks/${tool.icon}.svg`}
                  alt=""
                  aria-hidden="true"
                  width={18}
                  height={18}
                  unoptimized
                  className="size-[18px] shrink-0"
                />
                {tool.label}
              </Badge>
            </li>
          ))}
        </ul>
      </section>

      <section className="card flex flex-col gap-6 p-8 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-fluid-sm font-bold text-text">Want to see the code?</h2>
          <p className="mt-2 text-sm text-muted">
            My public repositories and contribution history are on GitHub.
          </p>
        </div>
        <a
          href="https://github.com/ThamiRoneo"
          target="_blank"
          rel="noreferrer"
          className="hero-secondary-cta tap-target inline-flex shrink-0 items-center gap-2"
        >
          Open GitHub
          <Image
            src="/assets/icons/external-link.svg"
            alt=""
            aria-hidden="true"
            width={16}
            height={16}
            unoptimized
            className="size-4"
          />
        </a>
      </section>

      <p className="text-sm text-muted">
        Looking for project detail instead?{" "}
        <Link href="/projects" className="text-accent underline underline-offset-4">
          View projects
        </Link>
        .
      </p>
    </div>
  );
}
