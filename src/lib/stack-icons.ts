import {
  Braces,
  Network,
  ScanSearch,
  ShieldCheck,
  Store,
  VectorSquare,
  Workflow,
  type LucideIcon,
} from "lucide-react";

export type StackIconDescriptor =
  | { kind: "brand"; src: string }
  | { kind: "glyph"; Icon: LucideIcon };

const brandIcon = (slug: string): StackIconDescriptor => ({
  kind: "brand",
  src: `/assets/icons/stacks/${slug}.svg`,
});

const stackIcons: Record<string, StackIconDescriptor> = {
  React: brandIcon("react"),
  TypeScript: brandIcon("typescript"),
  "Next.js": brandIcon("nextjs"),
  "Tailwind CSS": brandIcon("tailwindcss"),
  PostgreSQL: brandIcon("postgresql"),
  Supabase: brandIcon("supabase"),
  Vitest: brandIcon("vitest"),
  "GitHub Actions": brandIcon("githubactions"),
  Vercel: brandIcon("vercel"),
  JavaScript: brandIcon("javascript"),
  Vite: brandIcon("vite"),
  "Node.js": brandIcon("nodejs"),
  Express: brandIcon("express"),
  "React Router": brandIcon("reactrouter"),
  Expo: brandIcon("expo"),
  FastAPI: brandIcon("fastapi"),
  Celery: brandIcon("celery"),
  Redis: brandIcon("redis"),
  OpenAI: brandIcon("openai"),
  JSON: brandIcon("json"),
  REST: { kind: "glyph", Icon: Network },
  Maestro: { kind: "glyph", Icon: Workflow },
  pgvector: { kind: "glyph", Icon: VectorSquare },
  "Row Level Security": { kind: "glyph", Icon: ShieldCheck },
  "Heuristic audit": { kind: "glyph", Icon: ScanSearch },
  "Context API": { kind: "glyph", Icon: Braces },
  "Marketplace UX": { kind: "glyph", Icon: Store },
};

export function getStackIcon(label: string): StackIconDescriptor | undefined {
  return stackIcons[label];
}
