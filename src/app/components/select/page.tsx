import { Select } from "@/components/Select";
import { ComponentPreview } from "@/components/ComponentPreview";
import { CodeBlock } from "@/components/CodeBlock";

const OPTIONS = [
  { value: "ui", label: "UI/UX Design" },
  { value: "brand", label: "Brand Design" },
  { value: "motion", label: "Motion Design" },
  { value: "product", label: "Product Design" },
];

export default function SelectPage() {
  return (
    <div>
      <h1 className="font-display font-bold text-4xl tracking-tight mb-2">Select</h1>
      <p className="text-ink-secondary text-sm mb-10">
        Native select with custom styling and chevron icon.
      </p>

      <ComponentPreview label="Default">
        <Select label="Specialization" options={OPTIONS} placeholder="Choose one..." helperText="Select your primary skill." className="w-full max-w-sm" />
      </ComponentPreview>

      <ComponentPreview label="Error">
        <Select label="Specialization" options={OPTIONS} placeholder="Choose one..." error="Please select an option." className="w-full max-w-sm" />
      </ComponentPreview>

      <ComponentPreview label="Disabled">
        <Select label="Specialization" options={OPTIONS} disabled className="w-full max-w-sm" />
      </ComponentPreview>

      <CodeBlock code={`<Select
  label="Specialization"
  options={[{ value: "ui", label: "UI/UX Design" }]}
  placeholder="Choose one..."
/>`} />
    </div>
  );
}
