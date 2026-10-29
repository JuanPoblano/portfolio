import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://juanpoblano.github.io",
  base: "/portfolio/",
  build: {
    assetsPrefix: "/portfolio/",
  },
  output: "static",
});