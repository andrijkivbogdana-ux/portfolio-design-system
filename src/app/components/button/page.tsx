"use client";

import { Button } from "@/components/Button";
import { ComponentPreview } from "@/components/ComponentPreview";
import { CodeBlock } from "@/components/CodeBlock";

export default function ButtonPage() {
  return (
    <div>
      <h1 className="font-display font-bold text-4xl tracking-tight mb-2">Button</h1>
      <p className="text-ink-secondary text-sm mb-10">
        Primary actions, secondary CTAs, and ghost buttons. Three sizes available.
      </p>

      <ComponentPreview label="Primary">
        <Button variant="primary">Get Started</Button>
        <Button variant="primary" size="sm">Small</Button>
        <Button variant="primary" size="lg">Large</Button>
      </ComponentPreview>

      <ComponentPreview label="Secondary">
        <Button variant="secondary">Learn More</Button>
        <Button variant="secondary" size="sm">Small</Button>
        <Button variant="secondary" size="lg">Large</Button>
      </ComponentPreview>

      <ComponentPreview label="Ghost">
        <Button variant="ghost">Cancel</Button>
        <Button variant="ghost" size="sm">Small</Button>
        <Button variant="ghost" size="lg">Large</Button>
      </ComponentPreview>

      <ComponentPreview label="Disabled">
        <Button variant="primary" disabled>Primary</Button>
        <Button variant="secondary" disabled>Secondary</Button>
        <Button variant="ghost" disabled>Ghost</Button>
      </ComponentPreview>

      <CodeBlock code={`<Button variant="primary" size="md">Get Started</Button>
<Button variant="secondary">Learn More</Button>
<Button variant="ghost">Cancel</Button>`} />
    </div>
  );
}
