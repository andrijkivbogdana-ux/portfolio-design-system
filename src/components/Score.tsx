import { cn } from "@/lib/utils";

type ScoreVariant = "ring" | "bar";

export interface ScoreProps {
  value: number;
  max?: number;
  variant?: ScoreVariant;
  label?: string;
  className?: string;
}

function getScoreColor(score: number, max: number) {
  const normalized = (score / max) * 10;
  if (normalized >= 7) return "text-acid";
  if (normalized >= 4) return "text-warning";
  return "text-error";
}

function getBarColor(score: number, max: number) {
  const normalized = (score / max) * 10;
  if (normalized >= 7) return "bg-acid";
  if (normalized >= 4) return "bg-warning";
  return "bg-error";
}

export function Score({
  value,
  max = 10,
  variant = "ring",
  label,
  className,
}: ScoreProps) {
  const percent = (value / max) * 100;

  if (variant === "bar") {
    return (
      <div className={cn("space-y-1.5", className)}>
        {label && (
          <div className="flex justify-between items-center">
            <span className="text-xs font-body text-ink-muted">{label}</span>
            <span className={cn("text-xs font-body font-medium", getScoreColor(value, max))}>
              {value}/{max}
            </span>
          </div>
        )}
        <div className="h-2 w-full bg-surface-subtle rounded-full overflow-hidden">
          <div
            className={cn("h-full rounded-full transition-all duration-DEFAULT", getBarColor(value, max))}
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    );
  }

  const radius = 24;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percent / 100) * circumference;

  return (
    <div className={cn("flex flex-col items-center gap-1", className)}>
      <div className="relative w-16 h-16">
        <svg className="w-16 h-16 -rotate-90" viewBox="0 0 56 56">
          <circle
            cx="28"
            cy="28"
            r={radius}
            fill="none"
            stroke="rgb(var(--color-border))"
            strokeWidth="4"
          />
          <circle
            cx="28"
            cy="28"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className={getScoreColor(value, max)}
          />
        </svg>
        <span className="absolute inset-0 flex items-center justify-center font-display font-bold text-lg text-ink-primary">
          {value}
        </span>
      </div>
      {label && (
        <span className="text-xs font-body text-ink-muted">{label}</span>
      )}
    </div>
  );
}
