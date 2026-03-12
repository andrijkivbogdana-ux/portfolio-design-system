import { Score } from "@/components/Score";
import { ComponentPreview } from "@/components/ComponentPreview";
import { CodeBlock } from "@/components/CodeBlock";

export default function ScorePage() {
  return (
    <div>
      <h1 className="font-display font-bold text-4xl tracking-tight mb-2">Score</h1>
      <p className="text-ink-secondary text-sm mb-10">
        Visual score display as ring or bar. Color-coded by value.
      </p>

      <ComponentPreview label="Ring Variant">
        <Score value={9} label="Layout" />
        <Score value={6} label="Color" />
        <Score value={3} label="Spacing" />
      </ComponentPreview>

      <ComponentPreview label="Bar Variant">
        <div className="w-full space-y-4">
          <Score variant="bar" value={9} max={10} label="Typography" />
          <Score variant="bar" value={5} max={10} label="Hierarchy" />
          <Score variant="bar" value={2} max={10} label="Accessibility" />
        </div>
      </ComponentPreview>

      <CodeBlock code={`<Score value={9} label="Layout" variant="ring" />
<Score value={5} max={10} label="Hierarchy" variant="bar" />`} />
    </div>
  );
}
