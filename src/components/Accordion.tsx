"use client";

import { useState, useRef, useCallback } from "react";
import { ChevronDown } from "lucide-react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { EASE, DURATION } from "@/lib/animations";

export interface AccordionItem {
  id: string;
  title: string;
  content: React.ReactNode;
}

export interface AccordionProps {
  items: AccordionItem[];
  multiple?: boolean;
  className?: string;
}

function AccordionPanel({
  item,
  isOpen,
  onToggle,
}: {
  item: AccordionItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const contentRef = useRef<HTMLDivElement>(null);

  const animate = useCallback(
    (open: boolean) => {
      if (!contentRef.current) return;
      if (open) {
        gsap.set(contentRef.current, { height: "auto", overflow: "hidden" });
        gsap.from(contentRef.current, {
          height: 0,
          duration: DURATION.fast,
          ease: EASE.smooth,
        });
      } else {
        gsap.to(contentRef.current, {
          height: 0,
          overflow: "hidden",
          duration: DURATION.fast,
          ease: EASE.smooth,
        });
      }
    },
    []
  );

  const handleToggle = () => {
    animate(!isOpen);
    onToggle();
  };

  return (
    <div className="border-b border-border">
      <button
        onClick={handleToggle}
        className="flex justify-between items-center w-full py-4 text-left"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-body font-medium text-ink-primary">
          {item.title}
        </span>
        <ChevronDown
          className={cn(
            "w-4 h-4 text-ink-muted transition-transform duration-fast",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <div
        ref={contentRef}
        style={{ height: isOpen ? "auto" : 0, overflow: "hidden" }}
      >
        <div className="pb-4 text-sm font-body text-ink-secondary">
          {item.content}
        </div>
      </div>
    </div>
  );
}

export function Accordion({ items, multiple = false, className }: AccordionProps) {
  const [openIds, setOpenIds] = useState<Set<string>>(new Set());

  const handleToggle = (id: string) => {
    setOpenIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        if (!multiple) next.clear();
        next.add(id);
      }
      return next;
    });
  };

  return (
    <div className={className}>
      {items.map((item) => (
        <AccordionPanel
          key={item.id}
          item={item}
          isOpen={openIds.has(item.id)}
          onToggle={() => handleToggle(item.id)}
        />
      ))}
    </div>
  );
}
