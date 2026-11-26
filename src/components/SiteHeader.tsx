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
    <header className="fixed inset-x-0 top-3 z-50 px-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-full border border-line/70 bg-ink/70 px-3 py-2 shadow-lg backdrop-blur-xl">
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
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className={`${open ? "block" : "hidden"} absolute left-0 right-0 top-full mt-2 rounded-[var(--radius-card)] border border-line/70 bg-ink/80 p-3 shadow-lg backdrop-blur-xl sm:hidden`}
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
      </div>
    </header>
  );
}
