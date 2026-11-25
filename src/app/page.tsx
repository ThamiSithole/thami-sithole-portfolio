import Image from "next/image";
import Link from "next/link";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";

const principles = [
  {
    title: "Build for the real constraint",
    body: "Whether it is taxi fares or stokvel trust, I start with what actually blocks people.",
  },
  {
    title: "Prove it with tests",
    body: "Permissions belong in the database and CI should tell the truth before a reviewer guesses.",
  },
  {
    title: "Ship in small reviews",
    body: "Narrow branches, reviewed pull requests and squash merges keep the work legible.",
  },
];

export default function HomePage() {
  const featured = projects.filter((project) => project.featured);

  return (
    <div className="grid gap-24">
      <Hero />

      <section aria-labelledby="profile" className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
        <div className="flex items-center gap-5 lg:flex-col lg:items-start">
          <Image
            src="/assets/logo-ts.svg"
            alt=""
            aria-hidden="true"
            width={1024}
            height={1024}
            unoptimized
            className="size-20 shrink-0 lg:size-28"
          />
          <div>
            <h2 id="profile" className="text-2xl font-bold tracking-tight text-text">
              Thami Sithole
            </h2>
            <p className="mt-1 font-mono text-sm text-accent">
              Frontend · Backend · DevOps / Release
            </p>
          </div>
        </div>
        <div>
          <p className="text-base leading-relaxed text-muted">
            Currently focused on StokvelOS, a capstone that turns trust-based savings groups into
            auditable, permission-aware software.
          </p>
          <dl className="mt-8 grid gap-6 border-t border-line pt-6 text-sm sm:grid-cols-2">
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
      </section>

      <section aria-labelledby="selected-work">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <h2 id="selected-work" className="text-fluid-lg font-bold tracking-tight text-text">
            Projects with a point.
          </h2>
          <Link href="/projects" className="text-sm font-semibold text-accent hover:text-accent-strong">
            View projects
          </Link>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {featured.map((project, index) => (
            <div key={project.name} className={index === 0 ? "lg:col-span-2" : undefined}>
              <ProjectCard project={project} featured />
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="how-i-work">
        <h2 id="how-i-work" className="text-fluid-lg font-bold tracking-tight text-text">
          Small, clear slices.
        </h2>
        <div className="mt-10 divide-y divide-line border-y border-line">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="grid gap-2 py-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] md:gap-8"
            >
              <h3 className="text-lg font-bold text-text">{principle.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{principle.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
