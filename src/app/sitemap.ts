import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

const routes = ["/", "/about", "/services", "/contact", "/partnership", "/privacy", "/terms"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route === "/" ? "" : route}`,
    lastModified: new Date("2026-04-22T00:00:00.000Z"),
    changeFrequency: route === "/" ? "monthly" : "yearly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
