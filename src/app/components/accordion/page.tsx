"use client";

import { Accordion } from "@/components/Accordion";
import { ComponentPreview } from "@/components/ComponentPreview";
import { CodeBlock } from "@/components/CodeBlock";

const ITEMS = [
  { id: "1", title: "What file formats are supported?", content: "We support PDF, PNG, JPG, and Figma URLs for portfolio uploads." },
  { id: "2", title: "How long does the review take?", content: "AI-powered reviews are generated in under 60 seconds." },
  { id: "3", title: "Can I get a human review?", content: "Yes, you can request a human expert review after the AI analysis." },
];

export default function AccordionPage() {
  return (
    <div>
      <h1 className="font-display font-bold text-4xl tracking-tight mb-2">Accordion</h1>
      <p className="text-ink-secondary text-sm mb-10">
        Expandable content panels with GSAP height animation.
      </p>

      <ComponentPreview label="Single Mode (default)">
        <div className="w-full">
          <Accordion items={ITEMS} />
        </div>
      </ComponentPreview>

      <ComponentPreview label="Multiple Mode">
        <div className="w-full">
          <Accordion items={ITEMS} multiple />
        </div>
      </ComponentPreview>

      <CodeBlock code={`<Accordion items={[
  { id: "1", title: "Question?", content: "Answer." },
]} />
<Accordion items={items} multiple />`} />
    </div>
  );
}
