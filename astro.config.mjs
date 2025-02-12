// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
// import sitemap from "@astrojs/sitemap";

export const basePath = "rcbz2";

// https://astro.build/config
export default defineConfig({
  vite: { plugins: [tailwindcss()] },
  site: "https://nobilelucifero.github.io",
  base: "rcbz2",
  integrations: [mdx()],
  // integrations: [mdx(), sitemap()],
});
