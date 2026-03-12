import { cn } from "@/lib/utils";

type SkeletonVariant = "text" | "circle" | "card" | "custom";

export interface SkeletonProps {
  variant?: SkeletonVariant;
  className?: string;
}

const variantStyles: Record<SkeletonVariant, string> = {
  text: "h-4 w-full rounded",
  circle: "w-10 h-10 rounded-full",
  card: "h-48 w-full rounded-xl",
  custom: "",
};

export function Skeleton({ variant = "text", className }: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "bg-surface-subtle animate-pulse",
        variantStyles[variant],
        className
      )}
    />
  );
}
