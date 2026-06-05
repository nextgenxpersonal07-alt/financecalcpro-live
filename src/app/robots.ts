import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/dashboard'], // Keep private or deprecated routes disallowed
    },
    sitemap: 'https://financecalc.pro/sitemap.xml',
  };
}
