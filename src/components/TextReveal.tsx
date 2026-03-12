"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { EASE, DURATION } from "@/lib/animations";
import { cn } from "@/lib/utils";

export interface TextRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

export function TextReveal({ children, delay = 0, className }: TextRevealProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!innerRef.current) return;

    gsap.fromTo(
      innerRef.current,
      { y: "100%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: DURATION.default,
        ease: EASE.snappy,
        delay,
      }
    );
  }, [delay]);

  return (
    <div ref={wrapperRef} className={cn("overflow-hidden", className)}>
      <div ref={innerRef}>{children}</div>
    </div>
  );
}
