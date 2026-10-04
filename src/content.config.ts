import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The colophon is the publication's signature: structured per-piece provenance,
// rendered as the closing block and queryable across the archive over time.
const colophonSchema = z.object({
  stack: z.array(z.string()),
  agents: z.array(z.object({ name: z.string(), role: z.string() })),
  human: z.object({ name: z.string(), role: z.string() }),
});

const pieceSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  description: z.string(),
  colophon: colophonSchema,
});

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: pieceSchema,
});

// Letters: the hand-first lane. Same shape as notes, but where a piece starts
// as Tom's own draft — the colophon's human role runs heavier here by design.
const letters = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/letters' }),
  schema: pieceSchema,
});

// Use cases: every project gets one, in whichever section it belongs to
// (`line`). Depth varies; the core fields are the same for all of them.
const usecases = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/usecases' }),
  schema: z.object({
    // Catalogue number: stable once assigned, shown as 001, UC-001.
    number: z.number().int().positive(),
    title: z.string(),
    summary: z.string(),
    line: z.enum(['household', 'service']),
    for: z.string(),
    status: z.enum(['in daily use', 'productizing', 'product', 'retired']),
    started: z.coerce.date().optional(),
    stack: z.array(z.string()),
    published: z.coerce.date(),
  }),
});

export const collections = { notes, letters, usecases };
