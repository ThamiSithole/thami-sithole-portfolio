"use client";

import Image from "next/image";
import { Check } from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Project, ProjectCategory } from "@/content/projects";
import ProjectCard from "@/components/ProjectCard";
import { Button } from "@/components/ui/button";

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

const FILTER_PENDING_MS = 180;

type Props = {
  projects: Project[];
};

function SkeletonCard() {
  return (
    <div
      aria-hidden="true"
      className="card skeleton-card pointer-events-none flex h-full min-h-[36rem] flex-col p-6"
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="h-3 w-24 rounded-full bg-surface-2" />
        <div className="h-6 w-20 rounded-[var(--radius-card)] bg-surface-2" />
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        <div className="h-6 w-16 rounded-[var(--radius-card)] bg-surface-2" />
        <div className="h-6 w-16 rounded-[var(--radius-card)] bg-surface-2" />
      </div>
      <div className="mt-5 h-6 w-2/3 rounded-full bg-surface-2" />
      <div className="mt-3 h-3 w-full rounded-full bg-surface-2" />
      <div className="mt-2 h-3 w-5/6 rounded-full bg-surface-2" />
      <div className="mt-6 grid gap-4">
        <div className="h-3 w-20 rounded-full bg-surface-2" />
        <div className="h-3 w-full rounded-full bg-surface-2" />
        <div className="h-3 w-20 rounded-full bg-surface-2" />
        <div className="h-3 w-5/6 rounded-full bg-surface-2" />
      </div>
      <div className="mt-6 grid gap-2">
        <div className="h-3 w-3/4 rounded-full bg-surface-2" />
        <div className="h-3 w-2/3 rounded-full bg-surface-2" />
        <div className="h-3 w-4/5 rounded-full bg-surface-2" />
      </div>
      <div className="mt-auto pt-7">
        <div className="flex flex-wrap gap-2">
          <div className="h-6 w-16 rounded-[var(--radius-card)] bg-surface-2" />
          <div className="h-6 w-16 rounded-[var(--radius-card)] bg-surface-2" />
          <div className="h-6 w-14 rounded-[var(--radius-card)] bg-surface-2" />
        </div>
        <div className="mt-6 flex gap-6">
          <div className="h-3 w-16 rounded-full bg-surface-2" />
          <div className="h-3 w-16 rounded-full bg-surface-2" />
        </div>
      </div>
    </div>
  );
}

export default function ProjectsExplorer({ projects }: Props) {
  const [selected, setSelected] = useState<Filter>("All");
  const [committed, setCommitted] = useState<Filter>("All");
  const [pending, setPending] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const projectsFor = useCallback(
    (value: Filter) => {
      if (value === "All") {
        return projects;
      }
      if (value === "Featured") {
        return projects.filter((project) => project.featured);
      }
      const category = categoryByFilter[value];
      return projects.filter((project) => category && project.categories?.includes(category));
    },
    [projects],
  );

  const visible = useMemo(() => projectsFor(committed), [projectsFor, committed]);
  const skeletonCount = pending ? projectsFor(selected).length : 0;

  const chooseFilter = (option: Filter) => {
    if (option === selected) {
      return;
    }

    setSelected(option);
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      timerRef.current = null;
    }

    if (option === committed || projectsFor(option).length === 0) {
      setCommitted(option);
      setPending(false);
      return;
    }

    setPending(true);
    timerRef.current = setTimeout(() => {
      setCommitted(option);
      setPending(false);
      timerRef.current = null;
    }, FILTER_PENDING_MS);
  };

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
          const active = option === selected;
          return (
            <Button
              key={option}
              type="button"
              aria-pressed={active}
              variant={active ? "filter-active" : "filter"}
              className="px-4"
              onClick={() => chooseFilter(option)}
            >
              {option}
              {active ? <Check aria-hidden="true" className="size-3.5" /> : null}
            </Button>
          );
        })}
      </div>

      <p className="mt-6 font-mono text-sm text-muted" aria-live="polite">
        {visible.length} {visible.length === 1 ? "project" : "projects"}
      </p>
      <span className="sr-only" role="status">
        {pending ? "Loading projects" : ""}
      </span>

      {pending || visible.length ? (
        <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3" aria-busy={pending}>
          {pending
            ? Array.from({ length: skeletonCount }, (_, index) => <SkeletonCard key={index} />)
            : visible.map((project) => <ProjectCard key={project.name} project={project} />)}
        </div>
      ) : (
        <div className="card mt-6 flex flex-col items-start gap-3 p-8">
          <p className="text-lg font-bold text-text">No projects match this filter.</p>
          <p className="text-sm text-muted">Choose another category to see more work.</p>
          <button
            type="button"
            onClick={() => chooseFilter("All")}
            className="tap-target rounded-[var(--radius-card)] border border-line px-4 text-sm font-semibold text-accent transition-transform duration-150 active:scale-[0.98]"
          >
            Show all projects
          </button>
        </div>
      )}
    </div>
  );
}
