import { MetadataRoute } from 'next';
import { ALL_CALCULATORS } from '@/lib/calculators';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://financecalc.pro';

  // Base pages
  const staticPages = [
    '',
    '/calculators',
    '/investments',
    '/loans',
    '/tax',
    '/blog',
    '/about',
    '/contact',
    '/privacy',
    '/terms',
    '/disclaimer',
    '/tools/ocr',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Individual calculator pages
  const calculatorPages = ALL_CALCULATORS.map((calc) => ({
    url: `${baseUrl}${calc.href}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  // Investment sub-pages
  const investmentPages = [
    '/investments/mutual-funds',
    '/investments/fixed-deposits',
    '/investments/stock-market',
    '/investments/retirement-planning',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...staticPages, ...calculatorPages, ...investmentPages];
}
