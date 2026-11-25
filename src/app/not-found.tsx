import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page not found",
  description: "The page you were looking for is not part of this portfolio.",
};

export default function NotFound() {
  return (
    <section className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
      <div>
        <h1 className="text-fluid-lg font-extrabold tracking-tight text-text">
          This page took a different route.
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-muted">
          The address may have moved or never existed. Head back to the start or look through the
          work instead.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-6">
          <Link href="/projects" className="hero-primary-cta tap-target">
            View projects
          </Link>
          <Link href="/" className="text-sm font-semibold text-accent underline underline-offset-4">
            Home
          </Link>
        </div>
      </div>
      <div className="overflow-hidden rounded-[var(--radius-card)] border border-line">
        <Image
          src="/assets/404-art.png"
          alt="Generated artwork for the not found page"
          width={1344}
          height={752}
          sizes="(max-width: 1024px) 100vw, 45vw"
          className="h-auto w-full object-cover"
        />
      </div>
    </section>
  );
}
