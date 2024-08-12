import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import compress from "astro-compress";
import expressiveCode from "astro-expressive-code";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  image: {
    domains: ["avatars.githubusercontent.com"],
  },
  integrations: [
    expressiveCode(),
    mdx(),
    starlight({
      defaultLocale: "root",
      locales: {
        pl: {
          label: "Polish",
          lang: "pl",
        },
        root: {
          label: "English",
          lang: "en",
        },
        uk: {
          label: "Ukrainian",
          lang: "uk",
        },
      },
      sidebar: [
        {
          autogenerate: {
            directory: "guides",
          },
          label: "Guides",
        },
        {
          autogenerate: {
            directory: "reference",
          },
          label: "Reference",
        },
        {
          autogenerate: {
            directory: "reliverse",
          },
          label: "Reliverse",
        },
      ],
      social: {
        github: "https://github.com/blefnk/blevours",
      },
      title: "Blevours",
    }),
    react(),
    sitemap(),
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  site: "https://docs.bleverse.com",
});
