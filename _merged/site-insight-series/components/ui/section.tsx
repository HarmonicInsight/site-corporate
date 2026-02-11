import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "default" | "gray" | "dark";
}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variantStyles = {
      default: "bg-white",
      gray: "bg-[var(--gray-100)]",
      dark: "bg-[var(--gray-900)] text-white",
    };

    return (
      <section
        ref={ref}
        className={cn("py-16 md:py-24", variantStyles[variant], className)}
        {...props}
      />
    );
  }
);
Section.displayName = "Section";

const SectionHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mx-auto max-w-3xl text-center", className)}
    {...props}
  />
));
SectionHeader.displayName = "SectionHeader";

const SectionLabel = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-xs tracking-widest text-[var(--gray-500)] mb-4", className)}
    {...props}
  />
));
SectionLabel.displayName = "SectionLabel";

const SectionTitle = forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn("font-mincho text-2xl md:text-3xl text-[var(--gray-900)] tracking-wide", className)}
    {...props}
  />
));
SectionTitle.displayName = "SectionTitle";

const SectionDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("mt-4 text-[var(--gray-600)] leading-relaxed", className)}
    {...props}
  />
));
SectionDescription.displayName = "SectionDescription";

export { Section, SectionHeader, SectionLabel, SectionTitle, SectionDescription };
