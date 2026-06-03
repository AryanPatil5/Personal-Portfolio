import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

export function RecruiterSnapshot() {
  return (
    <section className="w-full bg-gray-50 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          Quick Snapshot
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left column - Education & Experience */}
          <div className="space-y-6">
            {/* Education */}
            <Card variant="flat" padding="lg">
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-1">
                      Education
                    </p>
                    <p className="text-lg font-semibold text-gray-900">
                      B.Tech CSE
                    </p>
                    <p className="text-sm text-gray-600">
                      Pimpri Chinchwad University
                    </p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-1">
                      CGPA
                    </p>
                    <p className="text-3xl font-bold text-blue-600">8.06</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Experience */}
            <Card variant="flat" padding="lg">
              <CardContent>
                <div>
                  <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-1">
                    Experience
                  </p>
                  <p className="text-lg font-semibold text-gray-900">
                    Web Development Intern
                  </p>
                  <p className="text-sm text-gray-600">Lifeline Villas</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right column - Core Areas & Availability */}
          <div className="space-y-6">
            {/* Core Areas */}
            <Card variant="flat" padding="lg">
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide mb-4">
                      Core Areas
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="primary" size="sm">
                        Full Stack Development
                      </Badge>
                      <Badge variant="secondary" size="sm">
                        AI Systems
                      </Badge>
                      <Badge variant="info" size="sm">
                        Real-Time Applications
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Availability */}
            <Card variant="outline" padding="lg">
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center justify-center w-2 h-2 bg-green-500 rounded-full" />
                    <span className="text-sm font-semibold text-gray-900">
                      Open to Opportunities
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Open to internships and software engineering opportunities
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
