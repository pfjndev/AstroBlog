import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://moonlit-seahorse-aa17d2.netlify.app",
  integrations: [preact()]
});