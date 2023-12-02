import { z, defineCollection } from "astro:content";

const postsColleciton = defineCollection({
  schema: ({image}) => z.object({
    author: z.string(),
    date: z.string(),
    image: image(),
    title: z.string(),
  }),
});

export const collections = {
  posts: postsColleciton,
};
