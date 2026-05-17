import { notFound } from "next/navigation";
import ProjectDetail from "@/components/projects/ProjectDetail";
import { projects } from "@/data";
import { getProjectBySlug, getProjectSlug } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: getProjectSlug(project),
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    return { title: "Project not found" };
  }

  return {
    title: project.title,
    description: project.desc,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetail project={project} />;
}
