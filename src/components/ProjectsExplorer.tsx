"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import type { Project, ProjectCategory } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";

type Filter =
  | "All"
  | "Featured"
  | "Team"
  | "Capstone"
  | "Frontend"
  | "Backend"
  | "Mobile"
  | "AI";

const filters: Filter[] = ["All", "Featured", "Team", "Capstone", "Frontend", "Backend", "Mobile", "AI"];

const categoryByFilter: Partial<Record<Filter, ProjectCategory>> = {
  Team: "team",
  Capstone: "capstone",
  Frontend: "frontend",
  Backend: "backend",
  Mobile: "mobile",
  AI: "ai",
};

type Props = {
  projects: Project[];
};

export default function ProjectsExplorer({ projects }: Props) {
  const [filter, setFilter] = useState<Filter>("All");

  const visible = useMemo(() => {
    if (filter === "All") {
      return projects;
    }
    if (filter === "Featured") {
      return projects.filter((project) => project.featured);
    }
    const category = categoryByFilter[filter];
    return projects.filter((project) => category && project.categories?.includes(category));
  }, [filter, projects]);

  return (
    <div className="relative">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="/assets/section-plate-projects.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-10"
        />
      </div>

      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
        {filters.map((option) => {
          const selected = option === filter;
          return (
            <button
              key={option}
              type="button"
              aria-pressed={selected}
              onClick={() => setFilter(option)}
              className={`tap-target rounded-[var(--radius-card)] px-4 font-mono text-xs font-semibold transition-transform duration-150 active:scale-[0.98] ${
                selected
                  ? "bg-accent/15 text-accent"
                  : "border border-line text-muted hover:border-accent hover:text-text"
              }`}
            >
              {option}
            </button>
          );
        })}
      </div>

      <p className="mt-6 font-mono text-sm text-muted" aria-live="polite">
        {visible.length} {visible.length === 1 ? "project" : "projects"}
      </p>

      {visible.length ? (
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      ) : (
        <div className="card mt-6 flex flex-col items-start gap-3 p-8">
          <p className="text-lg font-bold text-text">No projects match this filter.</p>
          <p className="text-sm text-muted">Choose another category to see more work.</p>
          <button
            type="button"
            onClick={() => setFilter("All")}
            className="tap-target rounded-[var(--radius-card)] border border-line px-4 text-sm font-semibold text-accent transition-transform duration-150 active:scale-[0.98]"
          >
            Show all projects
          </button>
        </div>
      )}
    </div>
  );
}
