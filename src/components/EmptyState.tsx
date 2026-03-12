import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface EmptyStateProps {
  icon?: LucideIcon;
  heading: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
}

export function EmptyState({
  icon: Icon,
  heading,
  description,
  children,
  className,
}: EmptyStateProps) {
  return (
    <div className={cn("text-center py-16", className)}>
      {Icon && (
        <Icon className="w-10 h-10 text-ink-muted mx-auto mb-4" />
      )}
      <h3 className="font-display font-semibold text-lg tracking-tight text-ink-primary mb-2">
        {heading}
      </h3>
      {description && (
        <p className="text-sm text-ink-secondary mb-6 max-w-sm mx-auto">
          {description}
        </p>
      )}
      {children}
    </div>
  );
}
