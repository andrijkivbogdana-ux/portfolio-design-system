"use client";

import { TextReveal } from "@/components/TextReveal";
import { ComponentPreview } from "@/components/ComponentPreview";
import { CodeBlock } from "@/components/CodeBlock";

export default function TextRevealPage() {
  return (
    <div>
      <h1 className="font-display font-bold text-4xl tracking-tight mb-2">TextReveal</h1>
      <p className="text-ink-secondary text-sm mb-10">
        GSAP-powered text entrance animation with clip-path reveal.
      </p>

      <ComponentPreview label="Default">
        <div className="overflow-hidden">
          <TextReveal>
            <h2 className="font-display font-black text-5xl tracking-tightest text-ink-primary">
              Reveal Headline
            </h2>
          </TextReveal>
        </div>
      </ComponentPreview>

      <ComponentPreview label="With Delay">
        <div className="space-y-2">
          <TextReveal delay={0}>
            <p className="font-display font-bold text-2xl tracking-tight text-ink-primary">First line</p>
          </TextReveal>
          <TextReveal delay={0.2}>
            <p className="font-display font-bold text-2xl tracking-tight text-ink-secondary">Second line</p>
          </TextReveal>
          <TextReveal delay={0.4}>
            <p className="font-display font-bold text-2xl tracking-tight text-ink-muted">Third line</p>
          </TextReveal>
        </div>
      </ComponentPreview>

      <CodeBlock code={`<TextReveal>
  <h1 className="font-display font-black text-8xl">
    Headline Here
  </h1>
</TextReveal>`} />
    </div>
  );
}
