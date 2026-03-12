"use client";

import { useToast } from "@/hooks/useToast";
import { Button } from "@/components/Button";
import { ComponentPreview } from "@/components/ComponentPreview";
import { CodeBlock } from "@/components/CodeBlock";

export default function ToastPage() {
  const toast = useToast();

  return (
    <div>
      <h1 className="font-display font-bold text-4xl tracking-tight mb-2">Toast</h1>
      <p className="text-ink-secondary text-sm mb-10">
        Temporary notification messages with auto-dismiss and GSAP animation.
      </p>

      <ComponentPreview label="Variants">
        <Button variant="ghost" size="sm" onClick={() => toast.info("This is an info toast.")}>
          Info
        </Button>
        <Button variant="ghost" size="sm" onClick={() => toast.success("Portfolio uploaded successfully!")}>
          Success
        </Button>
        <Button variant="ghost" size="sm" onClick={() => toast.warning("Low resolution images detected.")}>
          Warning
        </Button>
        <Button variant="ghost" size="sm" onClick={() => toast.error("Upload failed. Please try again.")}>
          Error
        </Button>
      </ComponentPreview>

      <CodeBlock code={`const toast = useToast();

toast.info("Info message");
toast.success("Success!");
toast.warning("Warning...");
toast.error("Something failed.");`} />
    </div>
  );
}
