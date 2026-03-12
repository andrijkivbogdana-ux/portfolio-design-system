"use client";

import { Tooltip } from "@/components/Tooltip";
import { Button } from "@/components/Button";
import { ComponentPreview } from "@/components/ComponentPreview";
import { CodeBlock } from "@/components/CodeBlock";

export default function TooltipPage() {
  return (
    <div>
      <h1 className="font-display font-bold text-4xl tracking-tight mb-2">Tooltip</h1>
      <p className="text-ink-secondary text-sm mb-10">
        Contextual information on hover/focus with GSAP animation.
      </p>

      <ComponentPreview label="Placements">
        <Tooltip content="Top tooltip" placement="top">
          <Button variant="ghost" size="sm">Top</Button>
        </Tooltip>
        <Tooltip content="Bottom tooltip" placement="bottom">
          <Button variant="ghost" size="sm">Bottom</Button>
        </Tooltip>
        <Tooltip content="Left tooltip" placement="left">
          <Button variant="ghost" size="sm">Left</Button>
        </Tooltip>
        <Tooltip content="Right tooltip" placement="right">
          <Button variant="ghost" size="sm">Right</Button>
        </Tooltip>
      </ComponentPreview>

      <CodeBlock code={`<Tooltip content="Helpful text" placement="top">
  <Button>Hover me</Button>
</Tooltip>`} />
    </div>
  );
}
