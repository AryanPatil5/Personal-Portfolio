import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Section } from "@/components/layout/section";
import { ProjectGrid } from "@/components/projects/project-grid";
import { FeaturedProject } from "@/components/projects/featured-project";
import { projects, getFeaturedProjects } from "@/config/projects";

export const metadata = {
  title: "Projects | Aryan Patil",
  description: "Explore my portfolio of AI, full-stack, and real-time projects.",
};

export default function ProjectsPage() {
  const featured = getFeaturedProjects();
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Header Section */}
        <Section spacing="lg" variant="default">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900">
              Projects
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              A selection of projects I've built, ranging from AI-powered platforms
              to automated tools and trading systems. Each project represents
              solving real problems with innovative solutions.
            </p>
          </div>
        </Section>

        {/* Featured Project */}
        {featured.length > 0 && <FeaturedProject project={featured[0]} />}

        {/* All Projects */}
        <Section spacing="lg" variant="alt">
          <div className="space-y-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                All Projects
              </h2>
              <p className="text-lg text-gray-600">
                Explore the complete collection of my work.
              </p>
            </div>
            <ProjectGrid projects={otherProjects} />
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
