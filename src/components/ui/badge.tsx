import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1 rounded-full font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary: "bg-blue-100 text-blue-700 hover:bg-blue-200 focus-visible:ring-blue-500",
        secondary:
          "bg-gray-200 text-gray-800 hover:bg-gray-300 focus-visible:ring-gray-500",
        success:
          "bg-green-100 text-green-700 hover:bg-green-200 focus-visible:ring-green-500",
        warning:
          "bg-amber-100 text-amber-700 hover:bg-amber-200 focus-visible:ring-amber-500",
        danger: "bg-red-100 text-red-700 hover:bg-red-200 focus-visible:ring-red-500",
        info: "bg-blue-50 text-blue-600 hover:bg-blue-100 focus-visible:ring-blue-500",
        outline:
          "border border-gray-300 text-gray-700 hover:bg-gray-50 focus-visible:ring-gray-500",
        ghost:
          "text-gray-700 hover:bg-gray-100 focus-visible:ring-gray-500",
      },
      size: {
        xs: "px-2 py-1 text-xs",
        sm: "px-2.5 py-1.5 text-xs",
        base: "px-3 py-1.5 text-sm",
        lg: "px-4 py-2 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "base",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, variant, size, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  )
);

Badge.displayName = "Badge";

export { Badge, badgeVariants };
