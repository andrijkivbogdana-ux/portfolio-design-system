"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_GROUPS = [
  {
    label: "Core",
    items: [
      { name: "Button", slug: "button" },
      { name: "Card", slug: "card" },
      { name: "Section", slug: "section" },
      { name: "TextReveal", slug: "text-reveal" },
      { name: "MagneticButton", slug: "magnetic-button" },
    ],
  },
  {
    label: "Forms",
    items: [
      { name: "Input", slug: "input" },
      { name: "Textarea", slug: "textarea" },
      { name: "Select", slug: "select" },
      { name: "Toggle", slug: "toggle" },
      { name: "FileUpload", slug: "file-upload" },
    ],
  },
  {
    label: "Feedback",
    items: [
      { name: "Badge", slug: "badge" },
      { name: "Score", slug: "score" },
      { name: "ProgressBar", slug: "progress-bar" },
      { name: "Accordion", slug: "accordion" },
      { name: "Avatar", slug: "avatar" },
      { name: "Divider", slug: "divider" },
    ],
  },
  {
    label: "Status",
    items: [
      { name: "Toast", slug: "toast" },
      { name: "Skeleton", slug: "skeleton" },
      { name: "Spinner", slug: "spinner" },
      { name: "Alert", slug: "alert" },
      { name: "EmptyState", slug: "empty-state" },
    ],
  },
  {
    label: "Overlays & Nav",
    items: [
      { name: "Modal", slug: "modal" },
      { name: "Tabs", slug: "tabs" },
      { name: "Tooltip", slug: "tooltip" },
      { name: "Drawer", slug: "drawer" },
      { name: "Breadcrumb", slug: "breadcrumb" },
    ],
  },
];

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      <aside className="fixed left-0 top-0 bottom-0 w-64 bg-surface-raised border-r border-border overflow-y-auto p-6">
        <Link href="/" className="block mb-8">
          <h1 className="font-display font-bold text-sm tracking-tight text-ink-primary">
            Portfolio Review AI
          </h1>
          <p className="text-xs font-body text-ink-muted mt-0.5">Design System</p>
        </Link>

        <nav className="space-y-6">
          {NAV_GROUPS.map((group) => (
            <div key={group.label}>
              <p className="text-xs font-body font-medium tracking-widest uppercase text-ink-muted mb-2">
                {group.label}
              </p>
              <ul className="space-y-0.5">
                {group.items.map((item) => {
                  const href = `/components/${item.slug}`;
                  const isActive = pathname === href;
                  return (
                    <li key={item.slug}>
                      <Link
                        href={href}
                        className={cn(
                          "block px-3 py-1.5 rounded text-sm font-body",
                          isActive
                            ? "text-ink-primary bg-surface-subtle"
                            : "text-ink-muted hover:text-ink-secondary"
                        )}
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </aside>

      <main className="ml-64 flex-1 p-10 max-w-4xl">{children}</main>
    </div>
  );
}
