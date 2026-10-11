import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
      heroImage: image().optional(),
    }),
});

const services = defineCollection({
  loader: glob({ base: "./src/content/services", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string(),
      heroImage: image().optional(),
      pubDate: z.coerce.date(),
      updatedDate: z.coerce.date().optional(),
    }),
});

const doctors = defineCollection({
  loader: glob({ base: "./src/content/doctors", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      specialty: z.string(),
      description: z.string(),
      experience: z.string().optional(),
      email: z.string().email().optional(),
      phone: z.string().optional(),
      image: image(),
      featured: z.boolean().default(false),
      socials: z
        .object({
          linkedin: z.string().url().optional(),
          twitter: z.string().url().optional(),
          facebook: z.string().url().optional(),
        })
        .optional(),
    }),
});

export const collections = {
  blog,
  services,
  doctors,
};
