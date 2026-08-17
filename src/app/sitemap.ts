import type { MetadataRoute } from "next";
import { practiceAreas } from "@/data/practice-areas";
import { team } from "@/data/team";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://rpklawoffice.com";
  const lastModified = new Date();

  // Static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tentang-kami`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/area-praktik`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/tim`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kontak`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/kebijakan-privasi`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/disclaimer`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Dynamic practice areas
  const practiceRoutes: MetadataRoute.Sitemap = practiceAreas.map((item) => ({
    url: `${baseUrl}/area-praktik/${item.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Dynamic team member pages
  const teamRoutes: MetadataRoute.Sitemap = team.map((member) => ({
    url: `${baseUrl}/tim/${member.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...practiceRoutes, ...teamRoutes];
}
