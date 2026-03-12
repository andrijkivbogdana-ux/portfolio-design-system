"use client";

import { useState } from "react";
import { Info, CheckCircle, AlertTriangle, XCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

type AlertVariant = "info" | "success" | "warning" | "error";

export interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children: React.ReactNode;
  dismissible?: boolean;
  onDismiss?: () => void;
  className?: string;
}

const variantConfig: Record<
  AlertVariant,
  { border: string; icon: typeof Info; iconColor: string }
> = {
  info: { border: "border-border", icon: Info, iconColor: "text-ink-secondary" },
  success: { border: "border-success", icon: CheckCircle, iconColor: "text-success" },
  warning: { border: "border-warning", icon: AlertTriangle, iconColor: "text-warning" },
  error: { border: "border-error", icon: XCircle, iconColor: "text-error" },
};

export function Alert({
  variant = "info",
  title,
  children,
  dismissible = false,
  onDismiss,
  className,
}: AlertProps) {
  const [visible, setVisible] = useState(true);
  const config = variantConfig[variant];
  const Icon = config.icon;

  if (!visible) return null;

  const handleDismiss = () => {
    setVisible(false);
    onDismiss?.();
  };

  return (
    <div
      role="alert"
      className={cn(
        "bg-surface-raised border rounded-xl p-4 flex items-start gap-3",
        config.border,
        className
      )}
    >
      <Icon className={cn("w-5 h-5 flex-shrink-0 mt-0.5", config.iconColor)} />
      <div className="flex-1 min-w-0">
        {title && (
          <p className="text-sm font-body font-medium text-ink-primary">{title}</p>
        )}
        <div className="text-sm font-body text-ink-secondary">{children}</div>
      </div>
      {dismissible && (
        <button
          onClick={handleDismiss}
          className="flex-shrink-0 text-ink-muted hover:text-ink-primary"
          aria-label="Dismiss alert"
        >
          <X className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
