import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ProjectHeader } from "@/components/projects/project-header";
import { ProjectTechStack } from "@/components/projects/project-tech-stack";
import { ProjectNavigation } from "@/components/projects/project-navigation";
import { getProjectBySlug, projects } from "@/config/projects";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateMetadata(props: ProjectDetailPageProps) {
  const params = await props.params;
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Aryan Patil`,
    description: project.summary,
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectDetailPage(props: ProjectDetailPageProps) {
  const params = await props.params;
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header */}
        <ProjectHeader
          title={project.title}
          summary={project.summary}
          technologies={project.technologies}
          year={project.year}
          status={project.status}
        />

        {/* Content Sections */}
        <div className="w-full bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
            <div className="space-y-16">
              {project.sections.map((section, index) => (
                <div key={index} className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
                    {section.title}
                  </h2>
                  <p className="text-base md:text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack */}
        <div className="w-full bg-gray-50 py-16 md:py-24">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <ProjectTechStack technologies={project.technologies} />
          </div>
        </div>

        {/* Navigation */}
        <ProjectNavigation currentProject={project} allProjects={projects} />
      </main>
      <Footer />
    </div>
  );
}
