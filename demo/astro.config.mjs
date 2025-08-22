import sveltiaCms from "../dist/astro-sveltia-cms";
import { defineConfig } from "astro/config";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://astro-sveltia-cms.vercel.app",
  integrations: [sveltiaCms()],
  output: "server",
  adapter: node({ mode: "standalone" }),
});
