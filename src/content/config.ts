import { z, defineCollection } from "astro:content";

const authorsCollection = defineCollection({
  schema: ({image}) => z.object({
    name: z.string(),
    image: image(),
  }),
});

const postsColleciton = defineCollection({
  schema: ({image}) => z.object({
    author: z.string(),
    categories: z.array(z.string()),
    date: z.date(),
    image: image(),
    title: z.string(),
  }),
});

export const collections = {
  authors: authorsCollection,
  posts: postsColleciton,
};
