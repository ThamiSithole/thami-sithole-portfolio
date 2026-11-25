"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback((returnFocus: boolean) => {
    setOpen(false);
    if (returnFocus) {
      toggleRef.current?.focus();
    }
  }, []);

  useEffect(() => {
    closeMenu(false);
  }, [pathname, closeMenu]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu(true);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open, closeMenu]);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-ink/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3 rounded-[var(--radius-card)]"
          onClick={() => closeMenu(false)}
          aria-label="Thami Sithole, home"
        >
          <Image
            src="/assets/logo-ts.svg"
            alt=""
            aria-hidden="true"
            width={40}
            height={40}
            unoptimized
            className="size-10"
            priority
          />
          <span className="flex flex-col leading-tight">
            <span className="text-sm font-bold tracking-wide text-text">Thami Sithole</span>
            <span className="text-xs text-muted">Software engineer</span>
          </span>
        </Link>

        <nav aria-label="Primary navigation" className="hidden items-center gap-1 sm:flex">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`tap-target inline-flex items-center rounded-[var(--radius-card)] px-3 text-sm font-semibold transition-colors sm:px-4 ${
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
          ref={toggleRef}
          type="button"
          className="tap-target inline-flex size-11 items-center justify-center rounded-[var(--radius-card)] border border-line text-muted sm:hidden"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          aria-label={open ? "Close navigation" : "Open navigation"}
          onClick={() => {
            if (open) {
              closeMenu(true);
            } else {
              setOpen(true);
            }
          }}
        >
          <Image
            src="/assets/icons/menu.svg"
            alt=""
            aria-hidden="true"
            width={20}
            height={20}
            unoptimized
            className="size-5"
          />
        </button>
      </div>

      <nav
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={`${open ? "block" : "hidden"} border-t border-line bg-ink px-4 py-3 sm:hidden lg:px-8`}
      >
        <ul className="grid gap-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => closeMenu(false)}
                  className={`tap-target flex items-center rounded-[var(--radius-card)] px-3 text-sm font-semibold ${
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
