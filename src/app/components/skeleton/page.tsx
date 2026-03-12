import { Skeleton } from "@/components/Skeleton";
import { ComponentPreview } from "@/components/ComponentPreview";
import { CodeBlock } from "@/components/CodeBlock";

export default function SkeletonPage() {
  return (
    <div>
      <h1 className="font-display font-bold text-4xl tracking-tight mb-2">Skeleton</h1>
      <p className="text-ink-secondary text-sm mb-10">
        Placeholder loading states for content.
      </p>

      <ComponentPreview label="Text">
        <div className="w-full space-y-2">
          <Skeleton variant="text" />
          <Skeleton variant="text" className="w-3/4" />
          <Skeleton variant="text" className="w-1/2" />
        </div>
      </ComponentPreview>

      <ComponentPreview label="Circle">
        <Skeleton variant="circle" />
      </ComponentPreview>

      <ComponentPreview label="Card">
        <Skeleton variant="card" className="w-full" />
      </ComponentPreview>

      <ComponentPreview label="Custom Composition">
        <div className="flex items-center gap-4 w-full">
          <Skeleton variant="circle" />
          <div className="flex-1 space-y-2">
            <Skeleton variant="text" className="w-1/3" />
            <Skeleton variant="text" className="w-2/3" />
          </div>
        </div>
      </ComponentPreview>

      <CodeBlock code={`<Skeleton variant="text" />
<Skeleton variant="circle" />
<Skeleton variant="card" />`} />
    </div>
  );
}
