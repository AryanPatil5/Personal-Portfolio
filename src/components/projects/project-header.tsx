import { Badge } from "@/components/ui/badge";

interface ProjectHeaderProps {
  title: string;
  summary: string;
  technologies: string[];
  year?: string;
  status?: "completed" | "in-progress" | "planned";
}

export function ProjectHeader({
  title,
  summary,
  technologies,
  year,
  status,
}: ProjectHeaderProps) {
  const statusColors = {
    completed: "success",
    "in-progress": "warning",
    planned: "info",
  } as const;

  return (
    <div className="bg-white border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="space-y-6">
          {/* Badges */}
          <div className="flex flex-wrap items-center gap-3">
            {status && (
              <Badge variant={statusColors[status]} size="sm">
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </Badge>
            )}
            {year && (
              <span className="text-sm text-gray-600 font-medium">
                {year}
              </span>
            )}
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900">
            {title}
          </h1>

          {/* Summary */}
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl">
            {summary}
          </p>

          {/* Technologies */}
          <div className="pt-4">
            <p className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
              Built With
            </p>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <Badge key={tech} variant="secondary" size="base">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
