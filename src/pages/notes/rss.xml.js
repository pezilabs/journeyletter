import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const notes = (await getCollection('notes')).sort(
    (a, b) => b.data.date.valueOf() - a.data.date.valueOf()
  );
  return rss({
    title: 'Journeyletter',
    description:
      'Field notes on operating AI agents for real work — from a publication that is itself run as an agent operation.',
    site: context.site,
    items: notes.map((note) => ({
      title: note.data.title,
      description: note.data.description,
      pubDate: note.data.date,
      link: `/notes/${note.id}/`,
    })),
  });
}
