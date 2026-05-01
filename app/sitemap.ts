// app/sitemap.ts
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mycvbuilder.info'; // change to your actual domain
  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/builder`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
    { url: `${baseUrl}/about`, lastModified: new Date() },
    { url: `${baseUrl}/contact`, lastModified: new Date() },
  ];
}