"use client";

import { useState } from "react";
import { Drawer } from "@/components/Drawer";
import { Button } from "@/components/Button";
import { ComponentPreview } from "@/components/ComponentPreview";
import { CodeBlock } from "@/components/CodeBlock";

export default function DrawerPage() {
  const [right, setRight] = useState(false);
  const [left, setLeft] = useState(false);

  return (
    <div>
      <h1 className="font-display font-bold text-4xl tracking-tight mb-2">Drawer</h1>
      <p className="text-ink-secondary text-sm mb-10">
        Slide-in panel from left or right with GSAP animation.
      </p>

      <ComponentPreview label="Sides">
        <Button variant="primary" size="sm" onClick={() => setRight(true)}>Open Right</Button>
        <Button variant="secondary" size="sm" onClick={() => setLeft(true)}>Open Left</Button>
      </ComponentPreview>

      <Drawer open={right} onClose={() => setRight(false)} side="right" title="Right Drawer">
        <p className="text-sm text-ink-secondary">This drawer slides in from the right.</p>
      </Drawer>

      <Drawer open={left} onClose={() => setLeft(false)} side="left" title="Left Drawer">
        <p className="text-sm text-ink-secondary">This drawer slides in from the left.</p>
      </Drawer>

      <CodeBlock code={`<Drawer open={isOpen} onClose={close} side="right" title="Settings">
  <p>Drawer content</p>
</Drawer>`} />
    </div>
  );
}
