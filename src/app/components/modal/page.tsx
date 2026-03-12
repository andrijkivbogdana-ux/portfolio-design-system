"use client";

import { useState } from "react";
import { Modal } from "@/components/Modal";
import { Button } from "@/components/Button";
import { ComponentPreview } from "@/components/ComponentPreview";
import { CodeBlock } from "@/components/CodeBlock";

export default function ModalPage() {
  const [sm, setSm] = useState(false);
  const [md, setMd] = useState(false);
  const [lg, setLg] = useState(false);

  return (
    <div>
      <h1 className="font-display font-bold text-4xl tracking-tight mb-2">Modal</h1>
      <p className="text-ink-secondary text-sm mb-10">
        Overlay dialog with focus trap, backdrop close, and GSAP animation.
      </p>

      <ComponentPreview label="Sizes">
        <Button variant="ghost" size="sm" onClick={() => setSm(true)}>Small</Button>
        <Button variant="primary" size="sm" onClick={() => setMd(true)}>Medium</Button>
        <Button variant="secondary" size="sm" onClick={() => setLg(true)}>Large</Button>
      </ComponentPreview>

      <Modal open={sm} onClose={() => setSm(false)} size="sm" title="Small Modal">
        <p className="text-sm text-ink-secondary">This is a small modal dialog.</p>
      </Modal>

      <Modal open={md} onClose={() => setMd(false)} size="md" title="Medium Modal">
        <p className="text-sm text-ink-secondary mb-4">This is the default medium modal with more content space.</p>
        <div className="flex justify-end gap-3">
          <Button variant="ghost" size="sm" onClick={() => setMd(false)}>Cancel</Button>
          <Button variant="primary" size="sm" onClick={() => setMd(false)}>Confirm</Button>
        </div>
      </Modal>

      <Modal open={lg} onClose={() => setLg(false)} size="lg" title="Large Modal">
        <p className="text-sm text-ink-secondary">This is a large modal for complex content or forms.</p>
      </Modal>

      <CodeBlock code={`<Modal open={isOpen} onClose={() => setOpen(false)} size="md" title="Confirm">
  <p>Modal content</p>
</Modal>`} />
    </div>
  );
}
