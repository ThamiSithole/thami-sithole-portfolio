import type { Metadata } from "next";
import ProjectsExplorer from "@/components/ProjectsExplorer";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected capstone, team and individual projects by Thami Sithole.",
};

export default function ProjectsPage() {
  return (
    <div className="grid gap-14">
      <section className="max-w-3xl">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Projects</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-text sm:text-5xl">
          Work that solves a named problem.
        </h1>
        <p className="mt-6 text-base leading-relaxed text-muted">
          Each entry records the problem, my role, the tools used and what was delivered. The
          capstone comes first, followed by team and individual builds.
        </p>
      </section>

      <ProjectsExplorer projects={projects} />
    </div>
  );
}
