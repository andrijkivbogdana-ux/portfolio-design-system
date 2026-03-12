"use client";

import { useEffect, useRef } from "react";
import { CheckCircle, AlertTriangle, XCircle, Info, X } from "lucide-react";
import gsap from "gsap";
import { cn } from "@/lib/utils";
import { EASE } from "@/lib/animations";
import type { ToastVariant } from "./ToastProvider";

export interface ToastProps {
  variant?: ToastVariant;
  message: string;
  duration?: number;
  onDismiss: () => void;
}

const variantConfig: Record<
  ToastVariant,
  { border: string; icon: typeof Info; iconColor: string }
> = {
  info: { border: "", icon: Info, iconColor: "text-ink-secondary" },
  success: { border: "border-l-4 border-l-success", icon: CheckCircle, iconColor: "text-success" },
  warning: { border: "border-l-4 border-l-warning", icon: AlertTriangle, iconColor: "text-warning" },
  error: { border: "border-l-4 border-l-error", icon: XCircle, iconColor: "text-error" },
};

export function Toast({
  variant = "info",
  message,
  duration = 5000,
  onDismiss,
}: ToastProps) {
  const ref = useRef<HTMLDivElement>(null);
  const config = variantConfig[variant];
  const Icon = config.icon;

  useEffect(() => {
    if (!ref.current) return;
    gsap.fromTo(
      ref.current,
      { y: 16, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.3, ease: EASE.smooth }
    );
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (ref.current) {
        gsap.to(ref.current, {
          y: 16,
          opacity: 0,
          duration: 0.2,
          ease: EASE.smooth,
          onComplete: onDismiss,
        });
      } else {
        onDismiss();
      }
    }, duration);
    return () => clearTimeout(timer);
  }, [duration, onDismiss]);

  return (
    <div
      ref={ref}
      role="alert"
      className={cn(
        "bg-surface-overlay border border-border rounded-xl p-4 flex items-start gap-3 min-w-[280px] max-w-sm",
        config.border
      )}
    >
      <Icon className={cn("w-5 h-5 flex-shrink-0 mt-0.5", config.iconColor)} />
      <p className="text-sm font-body text-ink-primary flex-1">{message}</p>
      <button
        onClick={onDismiss}
        className="flex-shrink-0 text-ink-muted hover:text-ink-primary"
        aria-label="Dismiss"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
