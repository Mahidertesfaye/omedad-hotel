"use client";

import Lenis from "lenis";
import { useEffect, type ReactNode } from "react";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";

interface LenisProviderProps {
  children: ReactNode;
}

/**
 * Smooth scroll via Lenis. Disabled when the user prefers reduced motion.
 * Adds the `lenis` class to `<html>` so CSS can defer to the library.
 */
export function LenisProvider({ children }: LenisProviderProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;

    const lenis = new Lenis({
      duration: 0.9,
      smoothWheel: true,
      touchMultiplier: 1.2,
      wheelMultiplier: 1,
    });

    let frameId = 0;

    const raf = (time: number) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
    };
  }, [prefersReducedMotion]);

  return children;
}
