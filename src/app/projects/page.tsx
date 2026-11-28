import type { Metadata } from "next";
import Image from "next/image";
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

      <section aria-labelledby="evidence-heading" className="grid gap-6 border-t border-line pt-12">
        <div className="max-w-3xl">
          <h2
            id="evidence-heading"
            className="text-2xl font-bold tracking-tight text-text sm:text-3xl"
          >
            Evidence
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-muted">
            Screens from work I can show publicly. Each caption says what the screen proves.
          </p>
        </div>
        <figure className="card max-w-3xl overflow-hidden">
          <Image
            src="/assets/screenshots/stokvelos-ledger.webp"
            alt="StokvelOS contributions ledger showing the current cycle, pool target, next recipient and a member deposit form."
            width={1200}
            height={887}
            sizes="(max-width: 768px) 100vw, 768px"
            className="h-auto w-full object-cover"
          />
          <figcaption className="grid gap-2 p-6">
            <span className="font-mono text-xs font-bold uppercase tracking-[0.18em] text-accent">
              StokvelOS
            </span>
            <span className="text-sm leading-relaxed text-muted">
              The ledger keeps the current cycle, monthly pool target and next recipient visible,
              with a clear entry point for logging cash, EFT or bank-slip deposits.
            </span>
          </figcaption>
        </figure>
      </section>
    </div>
  );
}
