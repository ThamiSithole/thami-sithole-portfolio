import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-bold text-text">Thami Sithole</p>
          <p className="mt-1 text-sm text-muted">
            Building software that is useful, testable and clear to use.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-1 text-sm">
          <Link href="/about" className="tap-target inline-flex items-center text-muted hover:text-accent">
            About
          </Link>
          <Link href="/projects" className="tap-target inline-flex items-center text-muted hover:text-accent">
            Projects
          </Link>
          <Link href="/contact" className="tap-target inline-flex items-center text-muted hover:text-accent">
            Contact
          </Link>
          <a
            href="https://github.com/ThamiRoneo"
            target="_blank"
            rel="noreferrer"
            className="tap-target inline-flex items-center gap-2 text-muted hover:text-accent"
          >
            Open GitHub
            <Image
              src="/assets/icons/external-link.svg"
              alt=""
              aria-hidden="true"
              width={16}
              height={16}
              unoptimized
              className="size-4"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}
