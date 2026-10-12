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


/**
 * A clinician profile — the public record at /<slug>.
 *
 * The schema is deliberately strict about `status` and about whether a check
 * happened. The whole product claim is that a credential on this page was
 * verified against the body that issued it, so there is no way to express
 * "verified" without saying when, by whom, and when it expires.
 */
const credentialStatus = z.enum(["active", "in_progress", "not_started", "outstanding"]);

const clinicians = defineCollection({
	loader: glob({ base: "./src/content/clinicians", pattern: "**/*.{md,mdx}" }),
	schema: z.object({
		name: z.string(),
		profession: z.string(),
		specialism: z.string(),
		location: z.string(),
		availableFrom: z.string(),
		slug: z.string(),

		/** Verification of the record as a whole. */
		record: z.object({
			/** Short public code a third party can look up without an account. */
			reference: z.string(),
			verifiedOn: z.coerce.date(),
			reverifyOn: z.coerce.date(),
			hash: z.string(),
		}),

		/** Per-credential checks. Each one must say what was checked and when. */
		credentials: z.array(
			z.object({
				label: z.string(),
				body: z.string(),
				reference: z.string().optional(),
				status: credentialStatus,
				statusNote: z.string().optional(),
				checkedAgainst: z.string().optional(),
				checkedOn: z.coerce.date().optional(),
			}),
		),

		career: z.array(
			z.object({
				from: z.coerce.date(),
				to: z.coerce.date(),
				role: z.string(),
				org: z.string(),
				location: z.string().optional(),
				current: z.boolean().default(false),
			}),
		),

		scope: z.array(z.object({ specialism: z.string(), years: z.number() })),

		languages: z.array(
			z.object({ language: z.string(), level: z.enum(["native", "fluent", "conversational"]) }),
		),

		/** Destination markets and where this clinician stands in each. */
		markets: z.array(
			z.object({ market: z.string(), status: credentialStatus, statusNote: z.string().optional() }),
		),

		documents: z.array(
			z.object({ document: z.string(), status: z.enum(["held", "outstanding", "pending"]) }),
		),

		/** True for demonstration records. Rendered with a visible warning. */
		sample: z.boolean().default(false),
	}),
});

export const collections = {
	blog,
	services,
	clinicians,
};
