import { ProgressBar } from "@/components/ProgressBar";
import { ComponentPreview } from "@/components/ComponentPreview";
import { CodeBlock } from "@/components/CodeBlock";

export default function ProgressBarPage() {
  return (
    <div>
      <h1 className="font-display font-bold text-4xl tracking-tight mb-2">ProgressBar</h1>
      <p className="text-ink-secondary text-sm mb-10">
        Determinate and indeterminate progress indicators.
      </p>

      <ComponentPreview label="Determinate">
        <div className="w-full space-y-4">
          <ProgressBar value={25} />
          <ProgressBar value={50} />
          <ProgressBar value={75} />
          <ProgressBar value={100} />
        </div>
      </ComponentPreview>

      <ComponentPreview label="Indeterminate">
        <ProgressBar indeterminate className="w-full" />
      </ComponentPreview>

      <CodeBlock code={`<ProgressBar value={75} />
<ProgressBar indeterminate />`} />
    </div>
  );
}
