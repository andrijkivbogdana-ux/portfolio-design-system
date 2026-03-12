import { Section } from "@/components/Section";
import { ComponentPreview } from "@/components/ComponentPreview";
import { CodeBlock } from "@/components/CodeBlock";

export default function SectionPage() {
  return (
    <div>
      <h1 className="font-display font-bold text-4xl tracking-tight mb-2">Section</h1>
      <p className="text-ink-secondary text-sm mb-10">
        Layout wrapper with eyebrow label and heading.
      </p>

      <ComponentPreview label="With Eyebrow + Heading">
        <div className="w-full bg-surface-base rounded-xl overflow-hidden">
          <Section eyebrow="Features" heading="What We Offer" className="py-12">
            <p className="text-sm text-ink-secondary">Section content goes here.</p>
          </Section>
        </div>
      </ComponentPreview>

      <ComponentPreview label="Narrow">
        <div className="w-full bg-surface-base rounded-xl overflow-hidden">
          <Section eyebrow="About" heading="Our Story" narrow className="py-12">
            <p className="text-sm text-ink-secondary">Narrow section for text-heavy content (720px max).</p>
          </Section>
        </div>
      </ComponentPreview>

      <CodeBlock code={`<Section eyebrow="FEATURES" heading="What We Offer">
  <p>Content</p>
</Section>
<Section eyebrow="ABOUT" heading="Our Story" narrow>
  <p>Narrow text content</p>
</Section>`} />
    </div>
  );
}
