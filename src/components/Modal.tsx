"use client";

import { useEffect, useRef, useCallback } from "react";
import { X } from "lucide-react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { trapFocus } from "@/lib/focus-trap";
import { EASE, DURATION } from "@/lib/animations";

type ModalSize = "sm" | "md" | "lg";

export interface ModalProps {
  open: boolean;
  onClose: () => void;
  size?: ModalSize;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

const sizeStyles: Record<ModalSize, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
};

export function Modal({
  open,
  onClose,
  size = "md",
  title,
  children,
  className,
}: ModalProps) {
  const backdropRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const cleanupRef = useRef<(() => void) | null>(null);

  const animateIn = useCallback(() => {
    if (!backdropRef.current || !panelRef.current) return;
    gsap.fromTo(
      backdropRef.current,
      { opacity: 0 },
      { opacity: 1, duration: DURATION.fast, ease: EASE.smooth }
    );
    gsap.fromTo(
      panelRef.current,
      { scale: 0.95, opacity: 0 },
      { scale: 1, opacity: 1, duration: DURATION.fast, ease: EASE.snappy }
    );
  }, []);

  useEffect(() => {
    if (open) {
      animateIn();
      if (panelRef.current) {
        cleanupRef.current = trapFocus(panelRef.current);
      }
    }
    return () => {
      cleanupRef.current?.();
    };
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
    <div className="fixed inset-0 z-40 flex items-center justify-center">
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
          "relative bg-surface-overlay border border-border rounded-xl p-6 mx-4 w-full",
          sizeStyles[size],
          className
        )}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-ink-muted hover:text-ink-primary"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
        {title && (
          <h2 className="font-display font-semibold text-lg tracking-tight mb-4">
            {title}
          </h2>
        )}
        {children}
      </div>
    </div>
  );
}
