"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero() {
  const visualRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = visualRef.current;
    if (!node) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const compact = window.matchMedia("(max-width: 640px)");

    const onPointerMove = (event: PointerEvent) => {
      if (reducedMotion.matches || !finePointer.matches || compact.matches) return;
      const rect = node.getBoundingClientRect();
      const inside =
        event.clientX >= rect.left &&
        event.clientX <= rect.right &&
        event.clientY >= rect.top &&
        event.clientY <= rect.bottom;
      if (!inside) {
        node.style.setProperty("--grade-opacity", "0");
        return;
      }
      node.style.setProperty("--spot-x", `${((event.clientX - rect.left) / rect.width) * 100}%`);
      node.style.setProperty("--spot-y", `${((event.clientY - rect.top) / rect.height) * 100}%`);
      node.style.setProperty("--grade-opacity", "1");
    };

    const onScroll = () => {
      if (reducedMotion.matches || !compact.matches) return;
      const progress = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1);
      node.style.setProperty("--spot-y", `${35 + progress * 30}%`);
      node.style.setProperty("--grade-opacity", `${Math.min(progress * 0.6, 0.6)}`);
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className="relative isolate pb-4 lg:min-h-[34rem]">
      <div className="relative z-20 max-w-xl lg:py-20">
        <p className="eyebrow">Portfolio · Selected work</p>
        <h1 className="mt-6 text-fluid-xl font-extrabold leading-[1.08] tracking-tight text-text">
          <span className="hero-line">I build software that</span>
          <span className="hero-line hero-line-delayed">removes friction.</span>
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-muted">
          I build across frontend, backend and release engineering, with accessible interfaces,
          testable decisions and deployments a team can trust.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Link href="/projects" className="hero-primary-cta tap-target">
            View projects
          </Link>
          <Link href="/contact" className="hero-secondary-cta tap-target">
            Get in touch
          </Link>
        </div>
      </div>

      <div
        ref={visualRef}
        className="hero-visual relative z-10 mt-12 w-full lg:absolute lg:right-0 lg:top-1/2 lg:mt-0 lg:w-[68%] lg:-translate-y-1/2 xl:-right-16"
      >
        <div className="relative aspect-[16/9] overflow-hidden rounded-[var(--radius-card)] border border-line">
          <Image
            src="/assets/hero-live.png"
            alt="Generated brand artwork showing the portfolio's live grade"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 68vw"
            className="object-cover"
          />
          <div aria-hidden="true" className="hero-grade-overlay absolute inset-0">
            <Image
              src="/assets/hero-dormant.png"
              alt=""
              fill
              sizes="(max-width: 1024px) 100vw, 68vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-2/3 bg-gradient-to-r from-ink via-ink/75 to-transparent lg:block"
      />
    </section>
  );
}
