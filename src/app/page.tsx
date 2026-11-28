import Link from "next/link";
import Hero from "@/components/Hero";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/content/projects";

const principles = [
  {
    title: "Start with the real constraint",
    body: "Taxi fares and stokvel trust are not edge cases. I design for the person who has to use the result.",
  },
  {
    title: "Make the decision visible",
    body: "Tests, database rules and CI carry the reasoning, so a reviewer can see why a choice holds.",
  },
  {
    title: "Keep the work legible",
    body: "Small branches, reviewed pull requests and squash merges leave a history I can explain.",
  },
];

export default function HomePage() {
  const featured = projects.filter((project) => project.featured);

  return (
    <div className="grid gap-24">
      <Hero />

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
