import { Spinner } from "@/components/Spinner";
import { ComponentPreview } from "@/components/ComponentPreview";
import { CodeBlock } from "@/components/CodeBlock";

export default function SpinnerPage() {
  return (
    <div>
      <h1 className="font-display font-bold text-4xl tracking-tight mb-2">Spinner</h1>
      <p className="text-ink-secondary text-sm mb-10">
        Loading indicator with three sizes.
      </p>

      <ComponentPreview label="Sizes">
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
      </ComponentPreview>

      <CodeBlock code={`<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />`} />
    </div>
  );
}
