import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import astroMetaTags from "astro-meta-tags";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://destructo.dev',
  integrations: [tailwind(), mdx(), react(), sitemap(), astroMetaTags()]
});