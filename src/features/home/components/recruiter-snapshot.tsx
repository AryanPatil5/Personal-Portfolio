import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function RecruiterSnapshot() {
  return (
    <section className="w-full bg-gradient-to-b from-white via-gray-50/50 to-gray-50 py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Professional Overview
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Quick insights into my background, expertise, and current focus areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Education Card */}
          <Card variant="elevated" padding="lg">
            <CardContent className="space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100/80 rounded-lg">
                <svg
                  className="w-6 h-6 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C6.248 6.248 2 10.494 2 15.5c0 5.006 4.248 9.252 10 9.252s10-4.246 10-9.252c0-5.006-4.248-9.247-10-9.247z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  Education
                </p>
                <p className="text-lg font-semibold text-gray-900 mb-1">
                  B.Tech CSE
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  Pimpri Chinchwad University
                </p>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  CGPA
                </p>
                <p className="text-4xl font-bold text-blue-600">8.06</p>
              </div>
            </CardContent>
          </Card>

          {/* Experience Card */}
          <Card variant="elevated" padding="lg">
            <CardContent className="space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-100/80 rounded-lg">
                <svg
                  className="w-6 h-6 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                  Experience
                </p>
                <p className="text-lg font-semibold text-gray-900 mb-1">
                  Web Development Intern
                </p>
                <p className="text-sm text-gray-600">
                  Lifeline Villas
                </p>
              </div>
              <div className="border-t border-gray-200 pt-4">
                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-3">
                  Status
                </p>
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-green-700">
                    Open to Opportunities
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Core Areas Card */}
          <Card variant="elevated" padding="lg">
            <CardContent className="space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-100/80 rounded-lg">
                <svg
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5.36 4.64l-.707.707M9 12a3 3 0 11 6 0 3 3 0 11-6 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-600 uppercase tracking-wider mb-4">
                  Core Expertise
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="primary" size="sm">
                    Full Stack
                  </Badge>
                  <Badge variant="secondary" size="sm">
                    AI Systems
                  </Badge>
                  <Badge variant="info" size="sm">
                    Real-Time Apps
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
