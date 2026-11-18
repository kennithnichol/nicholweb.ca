import { defineCollection } from 'astro:content';
import { z } from 'astro/zod';
import { glob } from 'astro/loaders';

// Case studies live as Markdown files in src/content/work.
// Every study is anonymized: describe the client by sector and size, never by name.
const work = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    client: z.string(),
    role: z.string(),
    years: z.string(),
    stack: z.array(z.string()),
    order: z.number(),
  }),
});

export const collections = { work };
