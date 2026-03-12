"use client";

import { useEffect, useRef, type RefObject } from "react";
import gsap from "gsap";

export function useGsapContext(scope: RefObject<HTMLElement | null>) {
  const ctx = useRef<gsap.Context | null>(null);

  useEffect(() => {
    if (!scope.current) return;
    ctx.current = gsap.context(() => {}, scope.current);
    return () => {
      ctx.current?.revert();
    };
  }, [scope]);

  return ctx;
}
