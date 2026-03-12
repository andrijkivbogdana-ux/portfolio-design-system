"use client";

import { useContext } from "react";
import { ToastContext, type ToastVariant } from "@/components/ToastProvider";

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }

  const toast = (message: string, variant?: ToastVariant, duration?: number) => {
    context.addToast({ message, variant: variant ?? "info", duration });
  };

  toast.success = (message: string, duration?: number) =>
    toast(message, "success", duration);
  toast.warning = (message: string, duration?: number) =>
    toast(message, "warning", duration);
  toast.error = (message: string, duration?: number) =>
    toast(message, "error", duration);
  toast.info = (message: string, duration?: number) =>
    toast(message, "info", duration);

  return toast;
}
