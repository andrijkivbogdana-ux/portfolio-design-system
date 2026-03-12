import { Avatar } from "@/components/Avatar";
import { ComponentPreview } from "@/components/ComponentPreview";
import { CodeBlock } from "@/components/CodeBlock";

export default function AvatarPage() {
  return (
    <div>
      <h1 className="font-display font-bold text-4xl tracking-tight mb-2">Avatar</h1>
      <p className="text-ink-secondary text-sm mb-10">
        User representation with image or fallback initials.
      </p>

      <ComponentPreview label="Sizes">
        <Avatar size="sm" fallback="SM" />
        <Avatar size="md" fallback="MD" />
        <Avatar size="lg" fallback="LG" />
      </ComponentPreview>

      <ComponentPreview label="Fallback">
        <Avatar fallback="JD" />
        <Avatar fallback="?" />
        <Avatar />
      </ComponentPreview>

      <CodeBlock code={`<Avatar size="md" fallback="JD" />
<Avatar src="/avatar.jpg" alt="User" size="lg" />`} />
    </div>
  );
}
