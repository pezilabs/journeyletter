import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const letters = (await getCollection('letters')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  return rss({
    title: 'Journeyletter — Letters',
    description: "Hand-first pieces — Tom's own drafts, structured and edited, not generated from exhaust.",
    site: context.site,
    items: letters.map((letter) => ({
      title: letter.data.title,
      description: letter.data.description,
      pubDate: letter.data.date,
      link: `/letters/${letter.id}/`,
    })),
  });
}
