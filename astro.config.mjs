// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://arabiatraduce.com",
  trailingSlash: "always",
  integrations: [
    starlight({
      title: "Welcome Arabia Traduce",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/MohamedRafea37/ArabiaTraduce",
        },
      ],
      sidebar: [
        {
          label: "Guides",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Example Guide",
              slug: "guides/Learn Spanish Lesson 1.md",
            },
            { label: "sentence guide", slug: "guides/sentence" },
          ],
        },
        {
          label: "Reference",
          items: [{ autogenerate: { directory: "reference" } }],
        },
      ],
    }),
  ],
});
