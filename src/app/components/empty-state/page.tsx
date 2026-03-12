import { FolderOpen, Search } from "lucide-react";
import { EmptyState } from "@/components/EmptyState";
import { Button } from "@/components/Button";
import { ComponentPreview } from "@/components/ComponentPreview";
import { CodeBlock } from "@/components/CodeBlock";

export default function EmptyStatePage() {
  return (
    <div>
      <h1 className="font-display font-bold text-4xl tracking-tight mb-2">EmptyState</h1>
      <p className="text-ink-secondary text-sm mb-10">
        Placeholder for empty content areas with optional CTA.
      </p>

      <ComponentPreview label="With Icon + CTA">
        <EmptyState
          icon={FolderOpen}
          heading="No portfolios yet"
          description="Upload your first portfolio to get an AI-powered review."
        >
          <Button variant="primary">Upload Portfolio</Button>
        </EmptyState>
      </ComponentPreview>

      <ComponentPreview label="Search No Results">
        <EmptyState
          icon={Search}
          heading="No results found"
          description="Try adjusting your search terms or filters."
        >
          <Button variant="ghost">Clear Filters</Button>
        </EmptyState>
      </ComponentPreview>

      <CodeBlock code={`<EmptyState
  icon={FolderOpen}
  heading="No portfolios yet"
  description="Upload your first portfolio."
>
  <Button>Upload</Button>
</EmptyState>`} />
    </div>
  );
}
