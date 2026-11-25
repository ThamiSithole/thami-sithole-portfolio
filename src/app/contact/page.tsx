import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact",
  description: "How to reach Thami Sithole for collaboration, reviews and opportunities.",
};

export default function ContactPage() {
  return (
    <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
      <section>
        <h1 className="text-fluid-lg font-extrabold tracking-tight text-text">
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
              <span className="block text-sm font-bold text-text">Open GitHub</span>
              <span className="mt-1 block text-sm text-muted">github.com/ThamiSithole</span>
            </span>
            <Image
              src="/assets/icons/external-link.svg"
              alt=""
              aria-hidden="true"
              width={18}
              height={18}
              unoptimized
              className="size-5 shrink-0 text-accent"
            />
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
                StokvelOS capstone: auth, groups and permissions
              </span>
            </span>
            <Image
              src="/assets/icons/external-link.svg"
              alt=""
              aria-hidden="true"
              width={18}
              height={18}
              unoptimized
              className="size-5 shrink-0 text-accent"
            />
          </a>
        </div>
      </section>

      <aside className="card h-fit p-8">
        <h2 className="text-fluid-sm font-bold text-text">What I bring to a team</h2>
        <ul className="mt-6 grid gap-5 text-sm text-muted">
          <li className="flex gap-3">
            <Image
              src="/assets/icons/bullet.svg"
              alt=""
              aria-hidden="true"
              width={8}
              height={8}
              unoptimized
              className="mt-2 size-2 shrink-0"
            />
            <span>Small, reviewable changes with tests and a clear reason for each PR.</span>
          </li>
          <li className="flex gap-3">
            <Image
              src="/assets/icons/bullet.svg"
              alt=""
              aria-hidden="true"
              width={8}
              height={8}
              unoptimized
              className="mt-2 size-2 shrink-0"
            />
            <span>Frontend and backend work that respects the same product rules.</span>
          </li>
          <li className="flex gap-3">
            <Image
              src="/assets/icons/bullet.svg"
              alt=""
              aria-hidden="true"
              width={8}
              height={8}
              unoptimized
              className="mt-2 size-2 shrink-0"
            />
            <span>Release discipline: CI, protected main and repeatable deployments.</span>
          </li>
        </ul>
        <p className="mt-8 border-t border-line pt-6 text-sm leading-relaxed text-muted">
          If you are reviewing this portfolio for a role or cohort, the project pages include the
          problem, my contribution and the links to verify the work.
        </p>
        <Link href="/projects" className="mt-6 inline-block text-sm font-semibold text-accent hover:text-accent-strong">
          View projects
        </Link>
      </aside>
    </div>
  );
}
