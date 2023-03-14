import { defineCollection, z } from 'astro:content';

const oraciones = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

const prayers = defineCollection({
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { oraciones, prayers };
