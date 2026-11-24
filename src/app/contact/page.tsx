import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description: "How to reach Thami Sithole for collaboration, reviews and opportunities.",
};

export default function ContactPage() {
  return (
    <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
      <section>
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-accent">Contact</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-text sm:text-5xl">
          Let&apos;s build something useful.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
          I am open to collaboration, code review and roles where careful engineering and clear
          product thinking matter. The quickest way to reach me is through GitHub, where my public
          work and contribution history are visible.
        </p>

        <div className="mt-10 grid gap-4">
          <a
            href="https://github.com/ThamiSithole"
            target="_blank"
            rel="noreferrer"
            className="card flex items-center justify-between gap-4 p-6 hover:border-accent/50"
          >
            <span>
              <span className="block text-sm font-bold text-text">GitHub</span>
              <span className="mt-1 block text-sm text-muted">github.com/ThamiSithole</span>
            </span>
            <span aria-hidden="true" className="text-accent">
              ↗
            </span>
          </a>

          <a
            href="https://github.com/ThamiSithole/stokvelos"
            target="_blank"
            rel="noreferrer"
            className="card flex items-center justify-between gap-4 p-6 hover:border-accent/50"
          >
            <span>
              <span className="block text-sm font-bold text-text">Current focus</span>
              <span className="mt-1 block text-sm text-muted">
                StokvelOS capstone — auth, groups and permissions
              </span>
            </span>
            <span aria-hidden="true" className="text-accent">
              ↗
            </span>
          </a>
        </div>
      </section>

      <aside className="card h-fit p-8">
        <h2 className="text-xl font-bold text-text">What I bring to a team</h2>
        <ul className="mt-6 grid gap-5 text-sm text-muted">
          <li className="flex gap-3">
            <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
            <span>Small, reviewable changes with tests and a clear reason for each PR.</span>
          </li>
          <li className="flex gap-3">
            <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
            <span>Frontend and backend work that respects the same product rules.</span>
          </li>
          <li className="flex gap-3">
            <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
            <span>Release discipline: CI, protected main and repeatable deployments.</span>
          </li>
        </ul>
        <p className="mt-8 border-t border-line pt-6 text-sm leading-relaxed text-muted">
          If you are reviewing this portfolio for a role or cohort, the project pages include the
          problem, my contribution and the links to verify the work.
        </p>
      </aside>
    </div>
  );
}
