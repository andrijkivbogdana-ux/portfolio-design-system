import { Input } from "@/components/Input";
import { ComponentPreview } from "@/components/ComponentPreview";
import { CodeBlock } from "@/components/CodeBlock";

export default function InputPage() {
  return (
    <div>
      <h1 className="font-display font-bold text-4xl tracking-tight mb-2">Input</h1>
      <p className="text-ink-secondary text-sm mb-10">
        Text input with label, helper text, and error states.
      </p>

      <ComponentPreview label="Default">
        <Input label="Email" placeholder="you@example.com" helperText="We'll never share your email." className="w-full max-w-sm" />
      </ComponentPreview>

      <ComponentPreview label="Error">
        <Input label="Email" placeholder="you@example.com" error="Please enter a valid email address." className="w-full max-w-sm" />
      </ComponentPreview>

      <ComponentPreview label="Disabled">
        <Input label="Email" placeholder="you@example.com" disabled className="w-full max-w-sm" />
      </ComponentPreview>

      <CodeBlock code={`<Input label="Email" placeholder="you@example.com" helperText="Helper text" />
<Input label="Email" error="Invalid email" />`} />
    </div>
  );
}
