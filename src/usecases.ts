import { getCollection, type CollectionEntry } from 'astro:content';

export type UseCase = CollectionEntry<'usecases'>;

export const catalogue = (n: number) => String(n).padStart(3, '0');
export const pad2 = (n: number) => String(n).padStart(2, '0');

export const href = (uc: UseCase) =>
  `/${uc.data.line === 'household' ? 'apps' : 'services'}/${uc.id}/`;

// Status → indicator class. Shape carries the meaning, color backs it up.
export const statusClass: Record<UseCase['data']['status'], string> = {
  'in daily use': 'st-use',
  productizing: 'st-prz',
  product: 'st-prd',
  retired: 'st-ret',
};

// Grouping for the index: products first, retired last (retired stays listed).
export const groups = [
  { label: 'Becoming products', cls: 'st-prz', statuses: ['productizing', 'product'] },
  { label: 'In daily use', cls: 'st-use', statuses: ['in daily use'] },
  { label: 'Retired', cls: 'st-ret', statuses: ['retired'] },
] as const;

export async function useCases(line?: UseCase['data']['line']) {
  const all = await getCollection('usecases', (uc) => !line || uc.data.line === line);
  return all.sort((a, b) => a.data.number - b.data.number);
}
