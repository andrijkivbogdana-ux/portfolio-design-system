"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: cn(
    "bg-acid text-ink-inverse",
    "hover:bg-acid-dim",
    "focus-visible:ring-acid"
  ),
  secondary: cn(
    "bg-mist text-ink-inverse",
    "hover:bg-mist-dim",
    "focus-visible:ring-mist"
  ),
  ghost: cn(
    "bg-transparent text-ink-secondary",
    "border border-transparent hover:border-border hover:text-ink-primary",
    "transition-colors duration-fast"
  ),
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-3.5 py-1.5 text-xs",
  md: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3 text-base",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "font-body font-medium rounded",
          "focus-visible:outline-none focus-visible:ring-2",
          "focus-visible:ring-offset-2 focus-visible:ring-offset-surface-base",
          "disabled:opacity-40 disabled:cursor-not-allowed",
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";
