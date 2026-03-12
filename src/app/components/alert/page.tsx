"use client";

import { Alert } from "@/components/Alert";
import { ComponentPreview } from "@/components/ComponentPreview";
import { CodeBlock } from "@/components/CodeBlock";

export default function AlertPage() {
  return (
    <div>
      <h1 className="font-display font-bold text-4xl tracking-tight mb-2">Alert</h1>
      <p className="text-ink-secondary text-sm mb-10">
        Inline feedback messages with status variants.
      </p>

      <ComponentPreview label="Info">
        <Alert variant="info" title="Information" className="w-full">
          Your portfolio review is in progress.
        </Alert>
      </ComponentPreview>

      <ComponentPreview label="Success">
        <Alert variant="success" title="Success" className="w-full">
          Portfolio uploaded successfully.
        </Alert>
      </ComponentPreview>

      <ComponentPreview label="Warning">
        <Alert variant="warning" title="Warning" className="w-full">
          Some images may be low resolution.
        </Alert>
      </ComponentPreview>

      <ComponentPreview label="Error">
        <Alert variant="error" title="Error" className="w-full">
          Failed to process portfolio. Please try again.
        </Alert>
      </ComponentPreview>

      <ComponentPreview label="Dismissible">
        <Alert variant="info" title="Dismissible" dismissible className="w-full">
          Click the X to dismiss this alert.
        </Alert>
      </ComponentPreview>

      <CodeBlock code={`<Alert variant="success" title="Success">
  Portfolio uploaded successfully.
</Alert>
<Alert variant="error" title="Error" dismissible>
  Something went wrong.
</Alert>`} />
    </div>
  );
}
