import { site, projects } from "@/lib/data";

export default function sitemap() {
  const routes = ["", ...projects.map((p) => `/projects/${p.slug}`)];

  return routes.map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
