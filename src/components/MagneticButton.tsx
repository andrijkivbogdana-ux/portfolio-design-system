"use client";

import { useRef } from "react";
import { useMagnet } from "@/hooks/useMagnet";
import { Button, type ButtonProps } from "./Button";
import { cn } from "@/lib/utils";

export interface MagneticButtonProps extends ButtonProps {
  strength?: number;
}

export function MagneticButton({
  strength = 0.4,
  className,
  children,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  useMagnet(ref, { strength });

  return (
    <div ref={ref} className={cn("inline-block", className)}>
      <Button {...props}>{children}</Button>
    </div>
  );
}
