import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const badgeVariants = cva(
  "inline-flex items-center px-3 py-1 text-xs font-medium tracking-wider",
  {
    variants: {
      variant: {
        default: "bg-[var(--gray-100)] text-[var(--gray-600)] border border-[var(--border)]",
        primary: "bg-[var(--accent-bg)] text-[var(--accent)] border border-[var(--accent)]/20",
        success: "bg-green-50 text-green-700 border border-green-200",
        warning: "bg-amber-50 text-amber-700 border border-amber-200",
        danger: "bg-red-50 text-red-700 border border-red-200",
        dark: "bg-[var(--gray-900)] text-white",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
