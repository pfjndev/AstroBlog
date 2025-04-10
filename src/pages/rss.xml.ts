import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: context.site ?? "https://moonlit-seahorse-aa17d2.netlify.app",
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}