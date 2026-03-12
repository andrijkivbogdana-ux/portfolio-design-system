"use client";

import { useEffect, type RefObject } from "react";
import gsap from "gsap";

interface MagnetOptions {
  strength?: number;
}

export function useMagnet(
  ref: RefObject<HTMLElement | null>,
  options?: MagnetOptions
) {
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const strength = options?.strength ?? 0.3;

    const handleMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      gsap.to(el, {
        x: x * strength,
        y: y * strength,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleLeave = () => {
      gsap.to(el, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.5)" });
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);

    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
    };
  }, [ref, options?.strength]);
}
