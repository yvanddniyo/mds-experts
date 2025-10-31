export interface ProgramDetailsSection {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
}

export interface Program {
  slug: string;
  title: string;
  summary: string;
  sections: ProgramDetailsSection[];
  applyUrl?: string;
  listOnly?: boolean;
}

// Load from external JSON for content source of truth
// Using `as const` style typing via runtime parse + TS interface for safety
import rawPrograms from "@/constants/programs.json" assert { type: "json" };

export const PROGRAMS: Program[] = rawPrograms as unknown as Program[];

export function getProgramBySlug(slug: string): Program | undefined {
  return PROGRAMS.find((p) => p.slug === slug);
}
