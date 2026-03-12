import { cn } from "@/lib/utils";

type CardVariant = "default" | "interactive" | "featured";

export interface CardProps {
  variant?: CardVariant;
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<CardVariant, string> = {
  default: "",
  interactive:
    "hover:border-border-strong hover:shadow-md transition-all duration-DEFAULT cursor-pointer",
  featured: "border-border-accent shadow-glow",
};

export function Card({
  variant = "default",
  className,
  children,
}: CardProps) {
  return (
    <div
      className={cn(
        "bg-surface-raised rounded-xl border border-border p-6",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </div>
  );
}
