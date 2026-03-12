"use client";

import { Tabs } from "@/components/Tabs";
import { ComponentPreview } from "@/components/ComponentPreview";
import { CodeBlock } from "@/components/CodeBlock";

const TAB_ITEMS = [
  { id: "overview", label: "Overview", content: <p className="text-sm text-ink-secondary">Overview content for the portfolio review. Includes summary scores and key insights.</p> },
  { id: "details", label: "Details", content: <p className="text-sm text-ink-secondary">Detailed analysis of each portfolio piece including layout, typography, and color usage.</p> },
  { id: "suggestions", label: "Suggestions", content: <p className="text-sm text-ink-secondary">Actionable suggestions for improving your portfolio based on industry standards.</p> },
];

export default function TabsPage() {
  return (
    <div>
      <h1 className="font-display font-bold text-4xl tracking-tight mb-2">Tabs</h1>
      <p className="text-ink-secondary text-sm mb-10">
        Tabbed content navigation with CSS transitions.
      </p>

      <ComponentPreview label="Default">
        <div className="w-full">
          <Tabs items={TAB_ITEMS} />
        </div>
      </ComponentPreview>

      <CodeBlock code={`<Tabs items={[
  { id: "overview", label: "Overview", content: <p>...</p> },
  { id: "details", label: "Details", content: <p>...</p> },
]} />`} />
    </div>
  );
}
