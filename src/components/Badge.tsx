import { cn } from "@/lib/utils";

type BadgeVariant = "muted" | "acid" | "mist" | "success" | "warning" | "error";

export interface BadgeProps {
  variant?: BadgeVariant;
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  muted: "bg-surface-subtle text-ink-secondary",
  acid: "bg-acid/10 text-acid",
  mist: "bg-mist/10 text-mist",
  success: "bg-success/10 text-success",
  warning: "bg-warning/10 text-warning",
  error: "bg-error/10 text-error",
};

export function Badge({ variant = "muted", className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-body font-medium",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
