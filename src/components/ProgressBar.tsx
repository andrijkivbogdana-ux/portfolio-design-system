import { cn } from "@/lib/utils";

export interface ProgressBarProps {
  value?: number;
  indeterminate?: boolean;
  className?: string;
}

export function ProgressBar({
  value = 0,
  indeterminate = false,
  className,
}: ProgressBarProps) {
  return (
    <div
      role="progressbar"
      aria-valuenow={indeterminate ? undefined : value}
      aria-valuemin={0}
      aria-valuemax={100}
      className={cn("h-2 w-full bg-surface-subtle rounded-full overflow-hidden", className)}
    >
      {indeterminate ? (
        <div className="h-full bg-acid rounded-full animate-progress-slide" />
      ) : (
        <div
          className="h-full bg-acid rounded-full transition-all duration-DEFAULT"
          style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
        />
      )}
    </div>
  );
}
