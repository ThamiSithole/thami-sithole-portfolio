"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function Hero() {
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const node = cardRef.current;
    if (!node) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const compact = window.matchMedia("(max-width: 640px)");

    const canGradeWithPointer = () =>
      !reducedMotion.matches && finePointer.matches && !compact.matches;

    const updateSpot = (event: PointerEvent) => {
      const rect = node.getBoundingClientRect();
      node.style.setProperty("--spot-x", `${((event.clientX - rect.left) / rect.width) * 100}%`);
      node.style.setProperty("--spot-y", `${((event.clientY - rect.top) / rect.height) * 100}%`);
    };

    const onPointerEnter = (event: PointerEvent) => {
      if (canGradeWithPointer()) updateSpot(event);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (canGradeWithPointer()) updateSpot(event);
    };

    const onScroll = () => {
      if (reducedMotion.matches || !compact.matches) return;
      const progress = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1);
      const opacity = Math.min(progress * 0.6, 0.6);
      node.style.setProperty("--spot-y", `${35 + progress * 30}%`);
      node.style.setProperty("--grade-opacity", `${opacity}`);
    };

    let scrollFrame = 0;
    let lastProgress = -1;
    const tickScroll = () => {
      if (compact.matches && !reducedMotion.matches) {
        const progress = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1);
        if (progress !== lastProgress) {
          lastProgress = progress;
          onScroll();
        }
      }
      scrollFrame = window.requestAnimationFrame(tickScroll);
    };

    node.addEventListener("pointerenter", onPointerEnter);
    node.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    scrollFrame = window.requestAnimationFrame(tickScroll);

    return () => {
      node.removeEventListener("pointerenter", onPointerEnter);
      node.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(scrollFrame);
    };
  }, []);

  return (
    <section
      ref={cardRef}
      aria-labelledby="hero-title"
      className="hero-card relative isolate min-h-[34rem] overflow-hidden rounded-[var(--radius-card)] border border-line lg:min-h-[38rem]"
    >
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <Image
          src="/assets/hero-live.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-left"
        />
        <div className="hero-grade-overlay absolute inset-0">
          <Image
            src="/assets/hero-dormant.png"
            alt=""
            fill
            sizes="100vw"
            className="object-cover object-left"
          />
        </div>
      </div>

      <div aria-hidden="true" className="hero-scrim absolute inset-0 z-10" />

      <div className="relative z-20 max-w-xl px-6 py-16 sm:px-10 sm:py-24 lg:px-16 lg:py-28">
        <p className="eyebrow">Portfolio · Selected work</p>
        <h1
          id="hero-title"
          className="mt-6 text-fluid-xl font-extrabold leading-[1.08] tracking-tight text-text"
        >
          <span className="hero-line">I build software that</span>
          <span className="hero-line hero-line-delayed">removes friction.</span>
        </h1>
        <p className="mt-6 max-w-lg text-base leading-relaxed text-text/90">
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
    </section>
  );
}
