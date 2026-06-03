import { Project } from "@/config/projects";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface FeaturedProjectProps {
  project: Project;
}

export function FeaturedProject({ project }: FeaturedProjectProps) {
  return (
    <section className="w-full bg-gradient-to-r from-blue-50 to-gray-50 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Card variant="elevated" padding="xl">
          <CardContent className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Badge variant="primary">Featured Project</Badge>
                {project.year && (
                  <span className="text-sm text-gray-600">{project.year}</span>
                )}
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                {project.title}
              </h2>
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
                {project.summary}
              </p>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
                Technologies
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" size="sm">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <a
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Read Case Study
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
                  d="M9 5l7 7m0 0l-7 7m7-7H5"
                />
              </svg>
            </a>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
