import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import SiteFooter from "@/components/SiteFooter";
import SiteHeader from "@/components/SiteHeader";

const satoshi = localFont({
  src: [
    { path: "./fonts/Satoshi-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Satoshi-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Satoshi-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/Satoshi-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-satoshi",
  display: "swap",
  fallback: ["ui-sans-serif", "system-ui", "sans-serif"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

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
    <html lang="en" className={`${satoshi.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <a href="#main" className="skip-link tap-target">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
