import React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  summary: string;
  technologies: string[];
  slug: string;
  year?: string;
  featured?: boolean;
}

export function ProjectCard({
  title,
  summary,
  technologies,
  slug,
  year,
  featured,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`}>
      <Card
        variant={featured ? "interactive" : "default"}
        padding="lg"
        className="h-full cursor-pointer group"
      >
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                {title}
              </h3>
              {featured && (
                <Badge variant="primary" size="xs">
                  Featured
                </Badge>
              )}
            </div>
            {year && (
              <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">
                {year}
              </p>
            )}
          </div>

          <p className="text-base text-gray-600 leading-relaxed line-clamp-3">
            {summary}
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            {technologies.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="secondary" size="xs">
                {tech}
              </Badge>
            ))}
            {technologies.length > 3 && (
              <Badge variant="outline" size="xs">
                +{technologies.length - 3}
              </Badge>
            )}
          </div>

          <div className="flex items-center gap-2 text-blue-600 font-medium text-sm group-hover:gap-3 transition-all">
            <span>View Project</span>
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
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
