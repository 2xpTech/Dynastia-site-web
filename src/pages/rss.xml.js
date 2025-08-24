import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  // Get all non-draft blog posts
  const blogPosts = await getCollection('blog', ({ data }) => !data.draft);
  
  // Sort posts by date (newest first)
  const sortedPosts = blogPosts.sort((a, b) => 
    b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    // Channel metadata
    title: 'Dynastia Blog',
    description: "Actualités, conseils et insights sur l'entrepreneuriat, l'innovation et les stratégies de croissance pour startups au Québec.",
    
    // Use the site URL from astro.config.mjs
    // Falls back to TODO if not set (though it is set in this case)
    site: context.site || 'TODO: Set site URL in astro.config.mjs',
    
    // RSS feed items from blog posts
    items: sortedPosts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      // Generate the link to the blog post
      link: `/blog/${post.slug}/`,
      // Optional: add categories from tags
      categories: post.data.tags || [],
      // Optional: add author (using Dynastia as org author)
      author: 'contact@dynast-ia.org (Dynastia)',
    })),
    
    // Optional: Custom data for the channel
    customData: `
      <language>fr-CA</language>
      <copyright>© ${new Date().getFullYear()} Dynastia. Tous droits réservés.</copyright>
      <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
      <generator>Astro v${context.generator}</generator>
      <docs>https://www.rssboard.org/rss-specification</docs>
      <ttl>60</ttl>
      <image>
        <url>${new URL('/Dynastia-side.svg', context.site).href}</url>
        <title>Dynastia Blog</title>
        <link>${context.site}</link>
        <width>144</width>
        <height>144</height>
      </image>
    `.trim(),
    
    // Optional: stylesheet for RSS readers that support it
    stylesheet: '/rss/styles.xsl',
    
    // Trailing slashes for consistency
    trailingSlash: true,
  });
}