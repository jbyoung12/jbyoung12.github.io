// @ts-check
import { defineConfig } from "astro/config";

export default defineConfig({
  site: "https://joshuabyoung.me",
  trailingSlash: "never",
  build: {
    format: "file",
  },
});
