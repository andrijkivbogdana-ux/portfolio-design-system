import { Badge } from "@/components/Badge";
import { ComponentPreview } from "@/components/ComponentPreview";
import { CodeBlock } from "@/components/CodeBlock";

export default function BadgePage() {
  return (
    <div>
      <h1 className="font-display font-bold text-4xl tracking-tight mb-2">Badge</h1>
      <p className="text-ink-secondary text-sm mb-10">
        Small labels for categorization and status indication.
      </p>

      <ComponentPreview label="All Variants">
        <Badge variant="muted">Muted</Badge>
        <Badge variant="acid">Acid</Badge>
        <Badge variant="mist">Mist</Badge>
        <Badge variant="success">Success</Badge>
        <Badge variant="warning">Warning</Badge>
        <Badge variant="error">Error</Badge>
      </ComponentPreview>

      <CodeBlock code={`<Badge variant="muted">Muted</Badge>
<Badge variant="acid">Acid</Badge>
<Badge variant="mist">Mist</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>`} />
    </div>
  );
}
