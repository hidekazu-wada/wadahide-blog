import { defineCollection, z } from 'astro:content'
import { CATEGORY_SLUGS } from '../consts'

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		coverImageCredit: z.string().optional(),
		category: z.enum(CATEGORY_SLUGS).optional(),
		ctaTitle: z.string().optional(),
		ctaDescription: z.string().optional(),
		ctaLabel: z.string().optional(),
		ctaHref: z.string().optional(),
	}),
})

export const collections = { blog }
