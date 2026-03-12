"use client";

import { useEffect, useRef, useCallback } from "react";
import { X } from "lucide-react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { EASE, DURATION } from "@/lib/animations";

type DrawerSide = "left" | "right";

export interface DrawerProps {
  open: boolean;
  onClose: () => void;
  side?: DrawerSide;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

export function Drawer({
  open,
  onClose,
  side = "right",
  title,
  children,
  className,
}: DrawerProps) {
  const backdropRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const animateIn = useCallback(() => {
    if (!backdropRef.current || !panelRef.current) return;
    gsap.fromTo(
      backdropRef.current,
      { opacity: 0 },
      { opacity: 1, duration: DURATION.fast, ease: EASE.smooth }
    );
    gsap.fromTo(
      panelRef.current,
      { x: side === "right" ? "100%" : "-100%" },
      { x: "0%", duration: DURATION.fast, ease: EASE.snappy }
    );
  }, [side]);

  useEffect(() => {
    if (open) animateIn();
  }, [open, animateIn]);

  useEffect(() => {
    if (!open) return;
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-40">
      <div
        ref={backdropRef}
        className="absolute inset-0 bg-surface-base/80"
        onClick={onClose}
      />
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={cn(
          "fixed top-0 bottom-0 z-40 bg-surface-overlay w-80 md:w-96 p-6",
          side === "right"
            ? "right-0 border-l border-border"
            : "left-0 border-r border-border",
          className
        )}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-ink-muted hover:text-ink-primary"
          aria-label="Close drawer"
        >
          <X className="w-5 h-5" />
        </button>
        {title && (
          <h2 className="font-display font-semibold text-lg tracking-tight mb-4 pr-8">
            {title}
          </h2>
        )}
        {children}
      </div>
    </div>
  );
}
