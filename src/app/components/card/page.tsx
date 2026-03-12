import { Card } from "@/components/Card";
import { ComponentPreview } from "@/components/ComponentPreview";
import { CodeBlock } from "@/components/CodeBlock";

export default function CardPage() {
  return (
    <div>
      <h1 className="font-display font-bold text-4xl tracking-tight mb-2">Card</h1>
      <p className="text-ink-secondary text-sm mb-10">
        Container for grouped content. Default, interactive, and featured variants.
      </p>

      <ComponentPreview label="Default">
        <Card className="w-full">
          <h3 className="font-display font-semibold text-lg tracking-tight text-ink-primary mb-2">Card Title</h3>
          <p className="text-sm text-ink-secondary">Default card with standard border and padding.</p>
        </Card>
      </ComponentPreview>

      <ComponentPreview label="Interactive">
        <Card variant="interactive" className="w-full">
          <h3 className="font-display font-semibold text-lg tracking-tight text-ink-primary mb-2">Interactive Card</h3>
          <p className="text-sm text-ink-secondary">Hover to see border and shadow change.</p>
        </Card>
      </ComponentPreview>

      <ComponentPreview label="Featured">
        <Card variant="featured" className="w-full">
          <h3 className="font-display font-semibold text-lg tracking-tight text-ink-primary mb-2">Featured Card</h3>
          <p className="text-sm text-ink-secondary">Accent border with glow shadow.</p>
        </Card>
      </ComponentPreview>

      <CodeBlock code={`<Card variant="default">Content</Card>
<Card variant="interactive">Hoverable</Card>
<Card variant="featured">Highlighted</Card>`} />
    </div>
  );
}
