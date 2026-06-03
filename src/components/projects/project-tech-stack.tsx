import { Badge } from "@/components/ui/badge";

interface ProjectTechStackProps {
  technologies: string[];
}

export function ProjectTechStack({ technologies }: ProjectTechStackProps) {
  const categorize = (tech: string) => {
    const categories: { [key: string]: string[] } = {
      Frontend: ["React", "TypeScript"],
      Backend: ["Node.js", "Python", "Express"],
      Database: ["Firebase", "SQLite"],
      AI: ["Claude AI", "Vapi AI"],
      Tools: ["Jest", "GitHub Actions", "WebSockets", "Binance API", "pandas"],
    };

    for (const [category, items] of Object.entries(categories)) {
      if (items.includes(tech)) return category;
    }
    return "Other";
  };

  const grouped = technologies.reduce(
    (acc, tech) => {
      const category = categorize(tech);
      if (!acc[category]) acc[category] = [];
      acc[category].push(tech);
      return acc;
    },
    {} as { [key: string]: string[] }
  );

  return (
    <div className="bg-gray-50 rounded-lg p-8 md:p-12">
      <h3 className="text-2xl font-bold text-gray-900 mb-8">Technology Stack</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {Object.entries(grouped).map(([category, techs]) => (
          <div key={category}>
            <h4 className="text-sm font-semibold text-gray-600 uppercase tracking-wider mb-4">
              {category}
            </h4>
            <div className="flex flex-wrap gap-2">
              {techs.map((tech) => (
                <Badge key={tech} variant="primary" size="sm">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
