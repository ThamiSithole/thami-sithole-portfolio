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

      <div className="relative z-20 grid min-h-[34rem] gap-12 px-6 py-16 sm:px-10 sm:py-24 lg:min-h-[38rem] lg:grid-cols-[minmax(0,1fr)_minmax(26rem,28rem)] lg:items-center lg:gap-16 lg:px-16 lg:py-28">
        <div className="max-w-xl">
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

        <aside
          aria-labelledby="profile"
          className="self-start rounded-[var(--radius-card)] border border-line bg-surface/90 p-6 shadow-lg backdrop-blur-sm lg:w-full lg:self-center lg:justify-self-end"
        >
          <div className="flex items-center gap-4">
            <Image
              src="/assets/anime-thami.png"
              alt="Portrait of Thami Sithole"
              width={48}
              height={48}
              sizes="48px"
              className="size-12 shrink-0 rounded-[var(--radius-card)] object-cover"
            />
            <div>
              <div className="flex items-center gap-2">
                <h2 id="profile" className="text-xl font-bold tracking-tight text-text">
                  Thami Sithole
                </h2>
                <Image
                  src="/assets/monogram-mark.png"
                  alt=""
                  aria-hidden="true"
                  width={20}
                  height={20}
                  sizes="20px"
                  className="size-5 shrink-0"
                />
              </div>
              <p className="mt-1 font-mono text-sm text-accent">
                Frontend · Backend · DevOps / Release
              </p>
            </div>
          </div>
          <p className="mt-6 text-sm leading-relaxed text-muted">
            Currently focused on StokvelOS, a capstone that turns trust-based savings groups into
            auditable, permission-aware software.
          </p>
          <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-line pt-5 text-xs sm:text-sm">
            <div>
              <dt className="text-muted">Base</dt>
              <dd className="mt-1 font-semibold text-text">South Africa</dd>
            </div>
            <div>
              <dt className="text-muted">Focus</dt>
              <dd className="mt-1 font-semibold text-text">Web &amp; mobile-first UX</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
