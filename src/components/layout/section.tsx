import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  spacing?: "xs" | "sm" | "base" | "lg" | "xl" | "2xl";
  variant?: "default" | "alt";
}

const spacingMap = {
  xs: "py-8 md:py-12",
  sm: "py-12 md:py-16",
  base: "py-16 md:py-24",
  lg: "py-20 md:py-32",
  xl: "py-24 md:py-40",
  "2xl": "py-32 md:py-48",
};

const variantStyles = {
  default: "bg-white",
  alt: "bg-gray-50",
};

export function Section({
  className,
  title,
  subtitle,
  spacing = "base",
  variant = "default",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        spacingMap[spacing],
        variantStyles[variant],
        "w-full transition-colors",
        className
      )}
      {...props}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        {(title || subtitle) && (
          <div className="mb-12 md:mb-16">
            {title && (
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>
        )}

        {/* Content */}
        {children}
      </div>
    </section>
  );
}
