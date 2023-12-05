import siteData from "../data/siteData.json"
import { slugify } from "./utils";


export default function jsonLDGenerator({ type, post, url }) {
  if (type === 'post') {
    return `<script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": "${url}"
        },
        "headline": "${post.data.title}",
        "description": "${post.data.body}",
        "image": "${post.data.image}",
        "author": {
          "@type": "Person",
          "name": "${post.data.author}",
          "url": "/author/${slugify(post.data.author)}"
        },
        "datePublished": "${post.data.date}"
      }
    </script>`;
  }
  return `<script type="application/ld+json">
      {
      "@context": "https://schema.org/",
      "@type": "WebSite",
      "name": "${siteData.title}",
      "url": "${import.meta.env.SITE}"
      }
    </script>`;
}