import { Project } from "@/config/projects";
import { ProjectCard } from "./project-card";

interface ProjectGridProps {
  projects: Project[];
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          summary={project.summary}
          technologies={project.technologies}
          slug={project.slug}
          year={project.year}
          featured={project.featured}
        />
      ))}
    </div>
  );
}
