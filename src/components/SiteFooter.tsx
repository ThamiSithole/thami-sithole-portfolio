import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-5 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold text-text">Thami Sithole</p>
          <p className="mt-1 text-sm text-muted">
            Building software that is useful, testable and clear to use.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
          <Link href="/about" className="text-muted hover:text-accent">
            About
          </Link>
          <Link href="/projects" className="text-muted hover:text-accent">
            Projects
          </Link>
          <Link href="/contact" className="text-muted hover:text-accent">
            Contact
          </Link>
          <a
            href="https://github.com/ThamiSithole"
            target="_blank"
            rel="noreferrer"
            className="text-muted hover:text-accent"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
