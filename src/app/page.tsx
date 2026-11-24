import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";

const principles = [
  {
    title: "Build for the real constraint",
    body: "Whether it is taxi fares or stokvel trust, I start with the thing that actually blocks people, then design around it.",
  },
  {
    title: "Prove it with tests",
    body: "Permissions belong in the database. UI states match real copy. CI should tell the truth before a reviewer has to guess.",
  },
  {
    title: "Ship in small reviews",
    body: "Issues first, narrow branches, reviewed pull requests and squash merges keep the work legible for the whole team.",
  },
];

export default function HomePage() {
  return (
    <div className="grid gap-24">
      <section className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent">
            Portfolio · Selected work
          </p>
          <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-text sm:text-6xl">
            I build software that
            <span className="block bg-gradient-to-r from-accent to-accent-2 bg-clip-text text-transparent">
              removes friction.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            I am Thami Sithole, a software engineer working across frontend, backend and release
            engineering. I care about products that are accessible, testable and honest about what
            they do.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-accent px-6 py-3 text-sm font-bold text-ink transition-transform hover:-translate-y-0.5"
            >
              View projects
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-line px-6 py-3 text-sm font-bold text-text transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </Link>
          </div>
        </div>

        <div className="card relative overflow-hidden p-8">
          <div
            aria-hidden="true"
            className="absolute -right-16 -top-16 size-56 rounded-full bg-accent/10 blur-3xl"
          />
          <div
            aria-hidden="true"
            className="absolute -bottom-20 -left-10 size-52 rounded-full bg-accent-2/10 blur-3xl"
          />
          <div className="relative">
            <div className="grid size-16 place-items-center rounded-2xl border border-accent/40 bg-accent/10 text-xl font-extrabold text-accent">
              TS
            </div>
            <h2 className="mt-7 text-2xl font-bold tracking-tight text-text">Thami Sithole</h2>
            <p className="mt-2 text-sm font-semibold text-accent">
              Frontend · Backend · DevOps / Release
            </p>
            <p className="mt-5 text-sm leading-relaxed text-muted">
              Currently focused on StokvelOS, a capstone that turns trust-based savings groups into
              auditable, permission-aware software.
            </p>
            <dl className="mt-7 grid grid-cols-2 gap-4 border-t border-line pt-6 text-sm">
              <div>
                <dt className="text-muted">Base</dt>
                <dd className="mt-1 font-semibold text-text">South Africa</dd>
              </div>
              <div>
                <dt className="text-muted">Focus</dt>
                <dd className="mt-1 font-semibold text-text">Web &amp; mobile-first UX</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      <section aria-labelledby="selected-work">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">
              Selected work
            </p>
            <h2 id="selected-work" className="mt-3 text-3xl font-bold tracking-tight text-text">
              Projects with a point.
            </h2>
          </div>
          <Link href="/projects" className="text-sm font-semibold text-muted hover:text-accent">
            See all projects →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {projects.slice(0, 2).map((project) => (
            <ProjectCard key={project.name} project={project} featured />
          ))}
        </div>
      </section>

      <section aria-labelledby="how-i-work">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">How I work</p>
        <h2 id="how-i-work" className="mt-3 text-3xl font-bold tracking-tight text-text">
          Small, clear slices.
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {principles.map((principle) => (
            <div key={principle.title} className="card p-6">
              <h3 className="text-lg font-bold text-text">{principle.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted">{principle.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
