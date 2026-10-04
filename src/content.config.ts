import { defineCollection } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';
import { z } from 'astro/zod';

/**
 * Frontmatter beyond Starlight's own schema. Only fields the site actually
 * consumes — the contextual-help resolver in `KinetiqDev/system-cloie` reads
 * `appRoutes`, Pagefind reads `keywords`, and `lastVerified` keeps review
 * honest. Nothing here builds a CMS.
 */
export const ROLES = [
  'secretary',
  'dean',
  'gen-ed-coordinator',
  'program-head',
  'faculty',
  'student',
  'alumni',
  'industry-partner',
] as const;

export const collections = {
  docs: defineCollection({
    loader: docsLoader(),
    schema: docsSchema({
      extend: () =>
        z.object({
          /** Roles this article is written for; `[]` means every role. */
          role: z.array(z.enum(ROLES)).default([]),
          /** Application routes this article answers. `:param` marks a segment. */
          appRoutes: z.array(z.string()).optional(),
          contentStatus: z.enum(['draft', 'verified', 'published', 'retired']).default('published'),
          productStatus: z.enum(['implemented', 'partial', 'deferred']).default('implemented'),
          lastVerified: z.coerce.date().optional(),
          videoUrl: z.string().optional(),
          videoDuration: z.string().optional(),
          related: z.array(z.string()).optional(),
          keywords: z.array(z.string()).optional(),
          prerequisite: z.string().optional(),
        }) as never,
    }),
  }),
};