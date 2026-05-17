import { projectCategories, projects, tagLabels } from "@/data";

export function getProjectSlug(project) {
  if (project.slug) return project.slug;
  return project.title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export function getProjectBySlug(slug) {
  return projects.find((project) => getProjectSlug(project) === slug);
}

export function getCategoryLabel(project) {
  const key = project.primaryCategory || project.category;
  if (key && tagLabels[key]) return tagLabels[key];
  if (key) return key;
  const firstTag = project.tags?.[0];
  if (firstTag && tagLabels[firstTag]) return tagLabels[firstTag];
  return firstTag || "Project";
}

export function filterProjectsByCategory(projectsList, filterKey) {
  if (filterKey === "all") return projectsList;
  return projectsList.filter((project) => {
    const primary = project.primaryCategory || project.category;
    return primary === filterKey;
  });
}

export function getActiveProjectCategories(projectsList = projects) {
  return projectCategories.filter((cat) => {
    if (cat.key === "all") return true;
    return filterProjectsByCategory(projectsList, cat.key).length > 0;
  });
}

export function formatTagLabel(tag) {
  return tagLabels[tag] ?? tag;
}

export function getProjectFeatures(project) {
  if (project.features?.length) return project.features;
  return [
    "Discovery and positioning aligned to business goals",
    "Visual design system applied across key touchpoints",
    "Responsive build tested on modern browsers and devices",
    "Launch support with handoff documentation",
  ];
}

export function getProjectStack(project) {
  if (project.stack?.length) return project.stack;
  const isBrandDeliverable =
    project.liveUrl?.endsWith(".pdf") || project.category === "branding";
  if (isBrandDeliverable) {
    return ["Figma", "Adobe Illustrator", "Brand guidelines", "Print-ready assets"];
  }
  return ["Next.js", "React", "Tailwind CSS", "Vercel"];
}

export function getAdjacentProjects(slug) {
  const index = projects.findIndex((p) => getProjectSlug(p) === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}

export function isExternalUrl(url) {
  return url?.startsWith("http");
}

export function isBrandIdentityProject(project) {
  const key = project.primaryCategory || project.category;
  return key === "branding";
}
