"use client";

import { useState } from "react";
import { Toggle } from "@/components/Toggle";
import { ComponentPreview } from "@/components/ComponentPreview";
import { CodeBlock } from "@/components/CodeBlock";

export default function TogglePage() {
  const [on, setOn] = useState(false);
  const [labeled, setLabeled] = useState(true);

  return (
    <div>
      <h1 className="font-display font-bold text-4xl tracking-tight mb-2">Toggle</h1>
      <p className="text-ink-secondary text-sm mb-10">
        Boolean switch for on/off states.
      </p>

      <ComponentPreview label="Default">
        <Toggle checked={on} onChange={setOn} />
      </ComponentPreview>

      <ComponentPreview label="With Label">
        <Toggle checked={labeled} onChange={setLabeled} label="Enable notifications" />
      </ComponentPreview>

      <ComponentPreview label="Disabled">
        <Toggle checked={false} onChange={() => {}} disabled label="Disabled off" />
        <Toggle checked={true} onChange={() => {}} disabled label="Disabled on" />
      </ComponentPreview>

      <CodeBlock code={`<Toggle checked={value} onChange={setValue} label="Notifications" />`} />
    </div>
  );
}
