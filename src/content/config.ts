import { defineCollection, z } from 'astro:content';

const jobs = defineCollection({
	schema: z.object({
		title: z.string(),
		salary: z.string(),
		location: z.string(),
		pubDate: z.string(),
		summary: z.string(),
		department: z.enum(['engineering', 'sales', 'marketing'])
	})
});

export const collections = { jobs };
