import Image from "next/image";
import type { Project, ProjectCategory } from "@/content/projects";
import StackIcon from "@/components/StackIcon";
import { Badge } from "@/components/ui/badge";

type Props = {
  project: Project;
  featured?: boolean;
};

const categoryLabels: Record<ProjectCategory, string> = {
  featured: "Featured",
  team: "Team",
  capstone: "Capstone",
  frontend: "Frontend",
  backend: "Backend",
  mobile: "Mobile",
  ai: "AI",
};

export default function ProjectCard({ project, featured = false }: Props) {
  const screenshot = project.screenshots?.[0];

  return (
    <article className={`card flex h-full flex-col p-6 ${featured ? "md:p-8" : ""}`}>
      <div className="flex flex-wrap items-start justify-between gap-3">
        <p className="eyebrow">{project.eyebrow}</p>
        <span className="status-badge">{project.status}</span>
      </div>

      {project.categories?.length ? (
        <ul aria-label="Categories" className="mt-4 flex flex-wrap gap-2">
          {project.categories.map((category) => (
            <li key={category} className="tag font-mono">
              {categoryLabels[category]}
            </li>
          ))}
        </ul>
      ) : null}

      {screenshot ? (
        <div className="mt-6 overflow-hidden rounded-[var(--radius-card)] border border-line">
          <Image
            src={screenshot}
            alt={project.screenshotAlt ?? `${project.name} interface preview`}
            width={1200}
            height={887}
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="h-auto w-full object-cover"
          />
        </div>
      ) : null}

      <h3 className={`mt-5 font-bold tracking-tight text-text ${featured ? "text-2xl" : "text-xl"}`}>
        {project.name}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">{project.summary}</p>

      <dl className="mt-6 grid gap-4 text-sm">
        <div>
          <dt className="font-semibold text-text">Problem</dt>
          <dd className="mt-1 leading-relaxed text-muted">{project.problem}</dd>
        </div>
        <div>
          <dt className="font-semibold text-text">Role</dt>
          <dd className="mt-1 leading-relaxed text-muted">{project.role}</dd>
        </div>
      </dl>

      <ul className="mt-6 grid gap-2 text-sm text-muted">
        {project.highlights.map((highlight) => (
          <li key={highlight} className="flex gap-2">
            <Image
              src="/assets/icons/check.svg"
              alt=""
              aria-hidden="true"
              width={16}
              height={16}
              unoptimized
              className="mt-0.5 size-4 shrink-0"
            />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-7">
        <ul aria-label="Technologies" className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <li key={item}>
              <Badge variant="stack" className="px-2.5 py-1">
                <StackIcon label={item} />
                {item}
              </Badge>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold">
          {project.liveHref ? (
            <a
              href={project.liveHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-strong"
            >
              <Image
                src="/assets/icons/live.svg"
                alt=""
                aria-hidden="true"
                width={16}
                height={16}
                unoptimized
                className="size-4"
              />
              Live app
            </a>
          ) : null}
          {project.githubHref ? (
            <a
              href={project.githubHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-text hover:text-accent"
            >
              <Image
                src="/assets/icons/branch.svg"
                alt=""
                aria-hidden="true"
                width={16}
                height={16}
                unoptimized
                className="size-4"
              />
              Open GitHub
            </a>
          ) : null}
          {project.proofLinks?.map((proof) => (
            <a
              key={proof.href}
              href={proof.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-muted hover:text-accent"
            >
              <Image
                src="/assets/icons/external-link.svg"
                alt=""
                aria-hidden="true"
                width={16}
                height={16}
                unoptimized
                className="size-4"
              />
              {proof.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}
