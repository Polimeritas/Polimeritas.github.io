import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://www.polimeritas.com';

  return {
    rules: {
      userAgent: '*',
      
      // HALAMAN YANG BOLEH DI-CRAWL
      allow: [
        '/', 
        '/about', 
        '/education', 
        '/project', 
        '/partner-room'
      ],

      // HALAMAN YANG DILARANG
      disallow: [
        '/private/', 
        '/admin/',   
      ],
    },
    
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}