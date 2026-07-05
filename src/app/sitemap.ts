import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site";

const routes = [
  "",
  "/about-prostate-health",
  "/prostate-cancer-awareness",
  "/risk-and-screening",
  "/risk-check",
  "/psa-and-visit-prep",
  "/for-families",
  "/mission",
  "/resources",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${siteConfig.url}${route}`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
