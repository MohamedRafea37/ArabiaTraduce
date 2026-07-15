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
            { label: "Spanish Comida", slug: "guides/spanishcomida" },
            { label: "Spanish Playa", slug: "guides/spanishplaya" },
          ],
        },
        {
          label: "Lessons/Lecciones",
          items: [
            // Each item here is one entry in the navigation menu.
            {
              label: "Lesson One/Lección Uno",
              slug: "lessons/lesson-01",
            },
            {
              label: "Lesson Two/Lección Dos",
              slug: "lessons/lesson-02",
            },
            {
              label: "Lesson Three/Lección Tres",
              slug: "lessons/lesson-03",
            },
            {
              label: "Lesson Four/Lección Cuatro",
              slug: "lessons/lesson-04",
            },
            {
              label: "Lesson Five/Lección Cinco",
              slug: "lessons/lesson-05",
            }
          ],
        },
        
      ],
    }),
  ],
});
