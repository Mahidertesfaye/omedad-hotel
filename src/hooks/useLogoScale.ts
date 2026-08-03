"use client";

import { useEffect, useRef } from "react";
import { ensureGsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "./useMediaQuery";

const LOGO_SCALE_MIN = 0.88;

export function useLogoScale<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const element = ref.current;
    if (!element || prefersReducedMotion) return;

    const gsap = ensureGsap();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { scale: 1, transformOrigin: "left center" },
        {
          scale: LOGO_SCALE_MIN,
          ease: "none",
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "120px top",
            scrub: 0.4,
          },
        },
      );
    });

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return ref;
}
