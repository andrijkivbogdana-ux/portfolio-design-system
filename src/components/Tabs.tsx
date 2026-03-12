"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  defaultTab?: string;
  className?: string;
}

export function Tabs({ items, defaultTab, className }: TabsProps) {
  const [activeId, setActiveId] = useState(defaultTab ?? items[0]?.id);

  const activeItem = items.find((item) => item.id === activeId);

  return (
    <div className={className}>
      <div className="flex border-b border-border gap-0" role="tablist">
        {items.map((item) => (
          <button
            key={item.id}
            role="tab"
            aria-selected={item.id === activeId}
            onClick={() => setActiveId(item.id)}
            className={cn(
              "px-4 py-2.5 text-sm font-body font-medium transition-colors duration-fast",
              item.id === activeId
                ? "text-ink-primary border-b-2 border-acid -mb-px"
                : "text-ink-muted hover:text-ink-secondary"
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="pt-6">
        {activeItem?.content}
      </div>
    </div>
  );
}
