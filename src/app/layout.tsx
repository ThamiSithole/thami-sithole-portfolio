import type { Metadata } from "next";
import "./globals.css";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: {
    default: "Thami Sithole — Software Engineer",
    template: "%s — Thami Sithole",
  },
  description:
    "Portfolio of Thami Sithole, a software engineer building accessible, testable web products with Next.js, React and Supabase.",
  keywords: ["Thami Sithole", "software engineer", "portfolio", "Next.js", "Supabase"],
  openGraph: {
    title: "Thami Sithole — Software Engineer",
    description:
      "Selected projects, skills and contact details for Thami Sithole, a software engineer focused on practical, testable products.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="mx-auto max-w-6xl px-5 py-16 sm:py-20">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
