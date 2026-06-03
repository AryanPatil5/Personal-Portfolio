import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const inputVariants = cva(
  "flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base transition-all duration-200 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-0 focus-visible:border-blue-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-100",
  {
    variants: {
      variant: {
        default: "",
        error: "border-red-500 focus-visible:ring-red-500 focus-visible:border-red-500",
        success:
          "border-green-500 focus-visible:ring-green-500 focus-visible:border-green-500",
        warning:
          "border-amber-500 focus-visible:ring-amber-500 focus-visible:border-amber-500",
      },
      size: {
        sm: "py-1.5 px-2 text-sm",
        base: "py-2 px-3 text-base",
        lg: "py-3 px-4 text-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "base",
    },
  }
);

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof inputVariants> {
  error?: boolean;
  success?: boolean;
  warning?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, error, success, warning, ...props }, ref) => {
    let resolvedVariant = variant;
    if (error) resolvedVariant = "error";
    else if (success) resolvedVariant = "success";
    else if (warning) resolvedVariant = "warning";

    return (
      <input
        ref={ref}
        className={cn(
          inputVariants({ variant: resolvedVariant, size }),
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";

export { Input, inputVariants };
