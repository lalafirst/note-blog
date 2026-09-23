import { getCollection, type CollectionEntry } from 'astro:content';

// How many notes appear on each index/page/N listing page.
export const PAGE_SIZE = 10;

export async function getSortedNotes(): Promise<CollectionEntry<'notes'>[]> {
  const all = await getCollection('notes', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export function formatDate(d: Date) {
  return `${d.getFullYear()}.${d.getMonth() + 1}.${d.getDate()}`;
}

export function excerpt(body: string | undefined, len = 68) {
  if (!body) return '';
  const plain = body
    .replace(/^---[\s\S]*?---/, '')
    .replace(/[#*_`>\[\]]/g, '')
    .replace(/\n+/g, ' ')
    .trim();
  return plain.length > len ? plain.slice(0, len) + '…' : plain;
}
