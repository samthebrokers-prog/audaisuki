import type { MetadataRoute } from 'next';
import { regions } from './locations/data';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://audaisuki.com';
  const now = new Date();

  const staticPages = [
    '',
    '/about',
    '/locations',
    '/official-news',
    '/contact',
    '/privacy',
    '/terms',
    '/accessibility',
  ];

  return [
    ...staticPages.map((path, index) => ({
      url: `${base}${path}`,
      lastModified: now,
      changeFrequency: (path === '' || path === '/official-news' ? 'daily' : 'weekly') as 'daily' | 'weekly',
      priority: index === 0 ? 1 : 0.8,
    })),
    ...regions.map((region) => ({
      url: `${base}/locations/${region.slug}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    })),
  ];
}
