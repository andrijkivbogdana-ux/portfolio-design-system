import { cn } from "@/lib/utils";

export interface DividerProps {
  orientation?: "horizontal" | "vertical";
  label?: string;
  className?: string;
}

export function Divider({
  orientation = "horizontal",
  label,
  className,
}: DividerProps) {
  if (label) {
    return (
      <div className={cn("flex items-center gap-3", className)}>
        <div className="h-px bg-border flex-1" />
        <span className="text-xs font-body text-ink-muted">{label}</span>
        <div className="h-px bg-border flex-1" />
      </div>
    );
  }

  if (orientation === "vertical") {
    return <div className={cn("w-px bg-border h-full", className)} />;
  }

  return <div className={cn("h-px bg-border w-full", className)} />;
}
