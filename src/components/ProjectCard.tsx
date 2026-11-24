import type { Project } from "@/content/projects";

type Props = {
  project: Project;
  featured?: boolean;
};

export default function ProjectCard({ project, featured = false }: Props) {
  return (
    <article className={`card flex h-full flex-col p-6 ${featured ? "md:p-8" : ""}`}>
      <div className="flex flex-wrap items-center justify-between gap-3">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-accent">
          {project.eyebrow}
        </p>
        <span className="text-xs font-semibold text-muted">{project.status}</span>
      </div>

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
            <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
            <span>{highlight}</span>
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-7">
        <ul aria-label="Technologies" className="flex flex-wrap gap-2">
          {project.stack.map((item) => (
            <li key={item} className="tag">
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap gap-4 text-sm font-semibold">
          {project.liveHref ? (
            <a
              href={project.liveHref}
              target="_blank"
              rel="noreferrer"
              className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
            >
              Live app ↗
            </a>
          ) : null}
          {project.githubHref ? (
            <a
              href={project.githubHref}
              target="_blank"
              rel="noreferrer"
              className="text-text underline decoration-line underline-offset-4 hover:decoration-accent"
            >
              GitHub ↗
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
