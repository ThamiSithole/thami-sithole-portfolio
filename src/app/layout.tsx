import type { Metadata, Viewport } from "next";
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

const description =
  "Portfolio of Thami Sithole, a software engineer building accessible, testable web products with Next.js, React and Supabase.";

export const metadata: Metadata = {
  metadataBase: new URL("https://thami-sithole-portfolio.vercel.app"),
  title: {
    default: "Thami Sithole | Software Engineer",
    template: "%s | Thami Sithole",
  },
  description,
  keywords: ["Thami Sithole", "software engineer", "portfolio", "Next.js", "Supabase"],
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  manifest: "/assets/site.webmanifest",
  icons: {
    icon: [
      { url: "/assets/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/assets/icon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: { url: "/assets/icon-180.png", sizes: "180x180", type: "image/png" },
  },
  openGraph: {
    title: "Thami Sithole | Software Engineer",
    description,
    url: "/",
    siteName: "Thami Sithole",
    type: "website",
    images: [
      {
        url: "/assets/og-thami-sithole.png",
        width: 1200,
        height: 630,
        alt: "Thami Sithole portfolio social card",
      },
      {
        url: "/assets/cover-thami-sithole.png",
        width: 1600,
        height: 900,
        alt: "Thami Sithole portfolio cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thami Sithole | Software Engineer",
    description,
    images: ["/assets/og-thami-sithole.png"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#11131a",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${satoshi.variable} ${jetbrainsMono.variable}`}>
      <body className="antialiased">
        <a href="#main" className="skip-link tap-target">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="mx-auto max-w-6xl px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
