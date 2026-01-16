import type { MetadataRoute } from "next";

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return [
    { url: `${baseUrl}/`, lastModified },
    { url: `${baseUrl}/services`, lastModified },
    { url: `${baseUrl}/process`, lastModified },
    { url: `${baseUrl}/portfolio`, lastModified },
    { url: `${baseUrl}/pricing`, lastModified },
    { url: `${baseUrl}/contact`, lastModified },
  ];
}
