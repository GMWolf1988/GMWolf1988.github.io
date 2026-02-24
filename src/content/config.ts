import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

export enum ProjectStatus {
	Complete = 'Complete',
	Active = 'Active',
	Archived = 'Archived',
}

export const projectStatuses: string[] = Object.values(ProjectStatus)

const projects = defineCollection({
	loader: glob({ pattern: "**/*.mdx", base: "./src/content/projects" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		summary: z.string(),
		url: z.string(),
		status: z.enum((projectStatuses as [string, ...string[]])),
		type: z.string(),
		tags: z.array(z.string()),
		weight: z.number(),
	}),
});

export const collections = { projects };

