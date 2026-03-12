import { Breadcrumb } from "@/components/Breadcrumb";
import { ComponentPreview } from "@/components/ComponentPreview";
import { CodeBlock } from "@/components/CodeBlock";

export default function BreadcrumbPage() {
  return (
    <div>
      <h1 className="font-display font-bold text-4xl tracking-tight mb-2">Breadcrumb</h1>
      <p className="text-ink-secondary text-sm mb-10">
        Navigation trail showing page hierarchy.
      </p>

      <ComponentPreview label="Default">
        <Breadcrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Components", href: "/components" },
            { label: "Breadcrumb" },
          ]}
        />
      </ComponentPreview>

      <ComponentPreview label="Two Levels">
        <Breadcrumb
          items={[
            { label: "Dashboard", href: "/" },
            { label: "Settings" },
          ]}
        />
      </ComponentPreview>

      <CodeBlock code={`<Breadcrumb items={[
  { label: "Home", href: "/" },
  { label: "Components", href: "/components" },
  { label: "Breadcrumb" },
]} />`} />
    </div>
  );
}
