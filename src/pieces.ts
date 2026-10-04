import { getCollection } from 'astro:content';

export async function pieces(lanes: ('notes' | 'letters')[] = ['notes', 'letters']) {
  const out = [];
  for (const lane of lanes) {
    for (const p of await getCollection(lane)) {
      out.push({
        href: `/${lane}/${p.id}/`,
        title: p.data.title,
        description: p.data.description,
        date: p.data.date,
        lane: lane === 'notes' ? 'Note' : 'Letter',
      });
    }
  }
  return out.sort((a, b) => b.date.valueOf() - a.date.valueOf());
}
