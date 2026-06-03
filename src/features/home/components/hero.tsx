import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] flex items-center justify-center pt-12 md:pt-0">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-white to-white pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Main content */}
        <div className="space-y-8">
          {/* Name */}
          <div>
            <p className="text-sm md:text-base font-semibold text-blue-600 uppercase tracking-wide mb-4">
              Welcome
            </p>
            <h1 className="text-4xl md:text-7xl font-bold text-gray-900 leading-tight tracking-tight">
              Aryan Patil
            </h1>
          </div>

          {/* Headline */}
          <div>
            <p className="text-xl md:text-3xl font-semibold text-gray-800 leading-relaxed">
              Software Engineer building AI, Full-Stack and Real-Time Systems.
            </p>
          </div>

          {/* Supporting text */}
          <div>
            <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              B.Tech Computer Science & Engineering student at Pimpri Chinchwad
              University. Building products across AI, developer tooling, and
              real-time applications.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link href="/projects">
              <Button size="lg" variant="primary">
                View Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline">
                Contact Me
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
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
