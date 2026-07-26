import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// The colophon is the publication's signature: structured per-piece provenance,
// rendered as the closing block and queryable across the archive over time.
const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    description: z.string(),
    colophon: z.object({
      stack: z.array(z.string()),
      agents: z.array(z.object({ name: z.string(), role: z.string() })),
      human: z.object({ name: z.string(), role: z.string() }),
    }),
  }),
});

export const collections = { notes };
