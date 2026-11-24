"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link
          href="/"
          className="group flex items-center gap-3 rounded-lg"
          onClick={() => setOpen(false)}
          aria-label="Thami Sithole — home"
        >
          <span className="grid size-10 place-items-center rounded-xl border border-accent/40 bg-accent/10 text-sm font-extrabold tracking-tight text-accent">
            TS
          </span>
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-bold tracking-wide text-text">Thami Sithole</span>
            <span className="text-xs text-muted">Software engineer</span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 md:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? "bg-accent/15 text-accent"
                    : "text-muted hover:bg-surface-2 hover:text-text"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-lg border border-line text-muted md:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => setOpen((current) => !current)}
        >
          <span className="flex flex-col gap-1.5" aria-hidden="true">
            <span className="h-0.5 w-5 rounded bg-current" />
            <span className="h-0.5 w-5 rounded bg-current" />
            <span className="h-0.5 w-5 rounded bg-current" />
          </span>
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`${open ? "block" : "hidden"} border-t border-line bg-ink px-5 py-3 md:hidden`}
      >
        <ul className="grid gap-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`block rounded-lg px-3 py-2.5 text-sm font-semibold ${
                    active ? "bg-accent/15 text-accent" : "text-muted hover:bg-surface-2 hover:text-text"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
