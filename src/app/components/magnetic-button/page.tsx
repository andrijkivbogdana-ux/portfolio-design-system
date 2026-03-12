"use client";

import { MagneticButton } from "@/components/MagneticButton";
import { ComponentPreview } from "@/components/ComponentPreview";
import { CodeBlock } from "@/components/CodeBlock";

export default function MagneticButtonPage() {
  return (
    <div>
      <h1 className="font-display font-bold text-4xl tracking-tight mb-2">MagneticButton</h1>
      <p className="text-ink-secondary text-sm mb-10">
        Button with magnetic cursor-follow effect. Move your cursor near it.
      </p>

      <ComponentPreview label="Default Strength (0.4)">
        <MagneticButton variant="primary">Hover Me</MagneticButton>
      </ComponentPreview>

      <ComponentPreview label="Strong (0.6)">
        <MagneticButton variant="secondary" strength={0.6}>Strong Pull</MagneticButton>
      </ComponentPreview>

      <ComponentPreview label="Subtle (0.2)">
        <MagneticButton variant="ghost" strength={0.2}>Subtle Effect</MagneticButton>
      </ComponentPreview>

      <CodeBlock code={`<MagneticButton variant="primary" strength={0.4}>
  Hover Me
</MagneticButton>`} />
    </div>
  );
}
