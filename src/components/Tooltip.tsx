"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/animations";

type TooltipPlacement = "top" | "bottom" | "left" | "right";

export interface TooltipProps {
  content: string;
  placement?: TooltipPlacement;
  children: React.ReactNode;
  className?: string;
}

const placementStyles: Record<TooltipPlacement, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

const animFrom: Record<TooltipPlacement, { x?: number; y?: number }> = {
  top: { y: 4 },
  bottom: { y: -4 },
  left: { x: 4 },
  right: { x: -4 },
};

export function Tooltip({
  content,
  placement = "top",
  children,
  className,
}: TooltipProps) {
  const [visible, setVisible] = useState(false);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  const show = useCallback(() => {
    timeoutRef.current = setTimeout(() => {
      setVisible(true);
    }, 200);
  }, []);

  const hide = useCallback(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setVisible(false);
  }, []);

  useEffect(() => {
    if (visible && tooltipRef.current) {
      gsap.fromTo(
        tooltipRef.current,
        { opacity: 0, ...animFrom[placement] },
        { opacity: 1, x: 0, y: 0, duration: 0.15, ease: EASE.smooth }
      );
    }
  }, [visible, placement]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <div
      className={cn("relative inline-flex", className)}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}
      {visible && (
        <div
          ref={tooltipRef}
          role="tooltip"
          className={cn(
            "absolute z-30 bg-surface-overlay border border-border rounded px-3 py-1.5",
            "text-xs font-body text-ink-secondary whitespace-nowrap pointer-events-none",
            placementStyles[placement]
          )}
        >
          {content}
        </div>
      )}
    </div>
  );
}
