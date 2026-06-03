import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textareaVariants = cva(
  "flex w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base transition-all duration-200 placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-0 focus-visible:border-blue-500 disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-gray-100 resize-vertical",
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
        sm: "py-1.5 px-2 text-sm min-h-[5rem]",
        base: "py-2 px-3 text-base min-h-[6rem]",
        lg: "py-3 px-4 text-lg min-h-[8rem]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "base",
    },
  }
);

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement>,
    VariantProps<typeof textareaVariants> {
  error?: boolean;
  success?: boolean;
  warning?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, variant, size, error, success, warning, ...props }, ref) => {
    let resolvedVariant = variant;
    if (error) resolvedVariant = "error";
    else if (success) resolvedVariant = "success";
    else if (warning) resolvedVariant = "warning";

    return (
      <textarea
        ref={ref}
        className={cn(
          textareaVariants({ variant: resolvedVariant, size }),
          className
        )}
        {...props}
      />
    );
  }
);

Textarea.displayName = "Textarea";

export { Textarea, textareaVariants };
