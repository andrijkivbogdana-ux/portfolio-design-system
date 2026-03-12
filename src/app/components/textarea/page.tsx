import { Textarea } from "@/components/Textarea";
import { ComponentPreview } from "@/components/ComponentPreview";
import { CodeBlock } from "@/components/CodeBlock";

export default function TextareaPage() {
  return (
    <div>
      <h1 className="font-display font-bold text-4xl tracking-tight mb-2">Textarea</h1>
      <p className="text-ink-secondary text-sm mb-10">
        Multi-line text input with the same form pattern as Input.
      </p>

      <ComponentPreview label="Default">
        <Textarea label="Description" placeholder="Tell us about your project..." helperText="Max 500 characters." className="w-full max-w-md" />
      </ComponentPreview>

      <ComponentPreview label="Error">
        <Textarea label="Description" placeholder="Tell us about your project..." error="Description is required." className="w-full max-w-md" />
      </ComponentPreview>

      <ComponentPreview label="Disabled">
        <Textarea label="Description" placeholder="Tell us about your project..." disabled className="w-full max-w-md" />
      </ComponentPreview>

      <CodeBlock code={`<Textarea label="Description" placeholder="..." helperText="Helper" />
<Textarea label="Description" error="Required field" />`} />
    </div>
  );
}
