import { MetadataRoute } from 'next';
import { getAllBlogs } from './lib/blogs'; // Ensure this path matches your file structure

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.clattribe.com';

  // 1. Fetch all your blogs using the library function
  const blogs = await getAllBlogs();

  // 2. Create sitemap entries for your blog posts
  const blogUrls = blogs.map((post) => ({
    url: `${baseUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.lastModified || post.date),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // 3. Define and return all sitemap entries
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/clat-2027-starter-kit`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/clat-gk-vault`,
      // Set to current date since it updates daily with news
      lastModified: new Date(), 
      changeFrequency: 'daily' as const, // Crawlers will check this every day
      priority: 0.9,
    },
    ...blogUrls,
  ];
}