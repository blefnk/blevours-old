import { docsSchema, i18nSchema } from "@astrojs/starlight/schema";
import { defineCollection, z } from "astro:content";
import type { ImageFunction } from "astro:content";

const authorsSchema = z.object({
  avatar: z.string(),
  name: z.string(),
  url: z.string().url().optional(),
});

function blogSchema(image: ImageFunction) {
  return z.object({
    authors: z.array(z.string()),
    coverImage: z
      .object({
        alt: z.string(),
        caption: z.string().optional(),
        darkSrc: image(),
        lightSrc: image(),
      })
      .optional(),
    description: z.string(),
    heroImage: z.string().optional(),
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
    socialImage: image(),
    subtitle: z.string().optional(),
    summary: z.string(),
    title: z.string(),
    updatedDate: z.coerce.date().optional(),
  });
}

export const collections = {
  authors: defineCollection({
    schema: authorsSchema,
    type: "data",
  }),
  blog: defineCollection({
    schema: ({ image }) => blogSchema(image),
    type: "content",
  }),
  docs: defineCollection({ schema: docsSchema() }),
  i18n: defineCollection({ schema: i18nSchema(), type: "data" }),
};
