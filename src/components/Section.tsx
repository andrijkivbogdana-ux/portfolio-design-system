import { cn } from "@/lib/utils";

export interface SectionProps {
  id?: string;
  eyebrow?: string;
  heading?: string;
  narrow?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function Section({
  id,
  eyebrow,
  heading,
  narrow = false,
  className,
  children,
}: SectionProps) {
  return (
    <section id={id} className={cn("py-24", className)}>
      <div className="max-w-full px-6 md:px-10 lg:px-16">
        <div className={cn(narrow ? "max-w-content mx-auto" : "max-w-wide mx-auto")}>
          {eyebrow && (
            <p className="text-xs font-body font-medium tracking-widest uppercase text-acid mb-4">
              {eyebrow}
            </p>
          )}
          {heading && (
            <h2 className="font-display font-bold text-5xl tracking-tight text-ink-primary mb-10">
              {heading}
            </h2>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
