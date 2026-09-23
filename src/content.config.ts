import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const notes = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notes' }),
  schema: z.object({
    // Title is optional on purpose — some notes are just a date and a
    // stray thought, with no headline (see 8-2.life for the reference).
    title: z.string().optional(),
    date: z.coerce.date(),
    draft: z.boolean().optional().default(false),
  }),
});

export const collections = { notes };
