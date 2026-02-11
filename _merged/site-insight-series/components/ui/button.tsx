"use client";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { forwardRef } from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-all duration-200 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 tracking-wider",
  {
    variants: {
      variant: {
        primary:
          "bg-[var(--gray-900)] text-white hover:bg-[var(--gray-700)]",
        accent:
          "bg-[var(--accent)] text-white hover:bg-[var(--accent-light)]",
        secondary:
          "bg-[var(--gray-100)] text-[var(--gray-900)] hover:bg-[var(--gray-200)]",
        outline:
          "border border-[var(--gray-900)] bg-transparent text-[var(--gray-900)] hover:bg-[var(--gray-900)] hover:text-white",
        "outline-light":
          "border border-white bg-transparent text-white hover:bg-white hover:text-[var(--gray-900)]",
        ghost:
          "text-[var(--gray-600)] hover:bg-[var(--gray-100)] hover:text-[var(--gray-900)]",
        link: "text-[var(--accent)] underline-offset-4 hover:underline",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-sm",
        lg: "h-12 px-8 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  href?: string;
  external?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, href, external, children, ...props }, ref) => {
    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant, size, className }))}
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          href={href}
          className={cn(buttonVariants({ variant, size, className }))}
        >
          {children}
        </Link>
      );
    }

    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
