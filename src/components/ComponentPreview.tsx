import { cn } from "@/lib/utils";

export interface ComponentPreviewProps {
  label: string;
  children: React.ReactNode;
  className?: string;
}

export function ComponentPreview({ label, children, className }: ComponentPreviewProps) {
  return (
    <div className={cn("mb-10", className)}>
      <p className="text-xs font-body font-medium tracking-widest uppercase text-acid mb-3">
        {label}
      </p>
      <div className="bg-surface-raised border border-border rounded-xl p-8 flex items-center gap-4 flex-wrap">
        {children}
      </div>
    </div>
  );
}
