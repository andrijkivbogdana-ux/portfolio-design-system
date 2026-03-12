"use client";

import { useEffect, type RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { REVEAL } from "@/lib/animations";

gsap.registerPlugin(ScrollTrigger);

export function useReveal(
  ref: RefObject<HTMLElement | null>,
  options?: { delay?: number; y?: number }
) {
  useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const yVal = options?.y ?? REVEAL.y;
    const delayVal = options?.delay ?? 0;

    // Set initial hidden state
    gsap.set(el, { y: yVal, opacity: 0 });

    // Animate to visible when scrolled into view
    gsap.to(el, {
      y: 0,
      opacity: 1,
      duration: REVEAL.duration,
      ease: REVEAL.ease,
      delay: delayVal,
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        once: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [ref, options?.delay, options?.y]);
}
