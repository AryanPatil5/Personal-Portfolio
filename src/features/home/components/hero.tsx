import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-white pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-50/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center py-16 md:py-0">
        {/* Main content */}
        <div className="space-y-6 md:space-y-8">
          {/* Name with accent */}
          <div className="space-y-4">
            <div className="inline-block">
              <span className="text-xs md:text-sm font-semibold text-blue-600 uppercase tracking-widest px-4 py-2 bg-blue-50/80 rounded-full border border-blue-100/50">
                Software Engineer
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-bold text-gray-900 leading-tight tracking-tight">
              Aryan Patil
            </h1>
          </div>

          {/* Headline */}
          <div className="space-y-4">
            <p className="text-xl md:text-4xl font-semibold text-gray-800 leading-tight max-w-3xl mx-auto">
              Building AI, Full-Stack and Real-Time Systems
            </p>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-blue-400 mx-auto rounded-full" />
          </div>

          {/* Supporting text */}
          <div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              B.Tech Computer Science & Engineering student at Pimpri Chinchwad
              University. Building products across AI, developer tooling, and
              real-time applications. Open to internships and engineering roles.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center pt-6 md:pt-8">
            <Link href="/projects" className="inline-block">
              <Button size="lg" variant="primary" className="text-base">
                View Projects
              </Button>
            </Link>
            <Link href="/contact" className="inline-block">
              <Button size="lg" variant="outline" className="text-base">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
