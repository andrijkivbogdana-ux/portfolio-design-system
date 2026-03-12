import { Divider } from "@/components/Divider";
import { ComponentPreview } from "@/components/ComponentPreview";
import { CodeBlock } from "@/components/CodeBlock";

export default function DividerPage() {
  return (
    <div>
      <h1 className="font-display font-bold text-4xl tracking-tight mb-2">Divider</h1>
      <p className="text-ink-secondary text-sm mb-10">
        Visual separator for content sections. Horizontal, vertical, and labeled.
      </p>

      <ComponentPreview label="Horizontal">
        <div className="w-full space-y-4">
          <p className="text-sm text-ink-secondary">Content above</p>
          <Divider />
          <p className="text-sm text-ink-secondary">Content below</p>
        </div>
      </ComponentPreview>

      <ComponentPreview label="With Label">
        <div className="w-full">
          <Divider label="OR" />
        </div>
      </ComponentPreview>

      <ComponentPreview label="Vertical">
        <div className="flex items-center gap-4 h-10">
          <span className="text-sm text-ink-secondary">Left</span>
          <Divider orientation="vertical" />
          <span className="text-sm text-ink-secondary">Right</span>
        </div>
      </ComponentPreview>

      <CodeBlock code={`<Divider />
<Divider label="OR" />
<Divider orientation="vertical" />`} />
    </div>
  );
}
