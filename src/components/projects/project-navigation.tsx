import Link from "next/link";
import { Project } from "@/config/projects";

interface ProjectNavigationProps {
  currentProject: Project;
  allProjects: Project[];
}

export function ProjectNavigation({
  currentProject,
  allProjects,
}: ProjectNavigationProps) {
  const currentIndex = allProjects.findIndex((p) => p.id === currentProject.id);
  const previousProject =
    currentIndex > 0 ? allProjects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < allProjects.length - 1 ? allProjects[currentIndex + 1] : null;

  return (
    <div className="w-full bg-gray-50 border-t border-gray-200 py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {previousProject ? (
            <Link
              href={`/projects/${previousProject.slug}`}
              className="group p-6 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all"
            >
              <div className="text-sm text-gray-600 font-medium mb-2">
                ← Previous Project
              </div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {previousProject.title}
              </h3>
            </Link>
          ) : (
            <div />
          )}

          {nextProject ? (
            <Link
              href={`/projects/${nextProject.slug}`}
              className="group p-6 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-md transition-all md:text-right"
            >
              <div className="text-sm text-gray-600 font-medium mb-2">
                Next Project →
              </div>
              <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                {nextProject.title}
              </h3>
            </Link>
          ) : (
            <div />
          )}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to All Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
