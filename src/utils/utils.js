export const formatBlogPosts = (
  posts,
  {
    filter_out_drafts = true,
    filter_out_future_posts = true,
    sort_by_date = true,
    limit = undefined,
  } = {}
) => {
  const filtered_posts = posts;
  if (sort_by_date) {
    filtered_posts?.sort((a, b) => {
      new Date(a.data.date) - new Date(b.data.date);
    });
  } else {
    filtered_posts?.sort(() => Math.random() - 0.5);
  }

  if (typeof limit === "number") {
    return filtered_posts.slice(0, limit);
  }
  return filtered_posts;
};

export const slugify = (text)=>{
  return text
  .toString()
  .toLowerCase()
  .replace(/\s+/g, '-')
  .replace(/[^\w-]+/g, '')
  .replace(/--+/g, '-')
  .replace(/^-+/, '')
  .replace(/-+$/, '');
}
