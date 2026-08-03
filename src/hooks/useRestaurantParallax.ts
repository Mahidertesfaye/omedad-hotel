"use client";

import { useEffect, useRef, type RefObject } from "react";
import { ensureGsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "./useMediaQuery";

interface UseRestaurantParallaxReturn {
  containerRef: RefObject<HTMLDivElement | null>;
  imageRef: RefObject<HTMLDivElement | null>;
}

export function useRestaurantParallax(): UseRestaurantParallaxReturn {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const container = containerRef.current;
    const image = imageRef.current;
    if (!container || !image || prefersReducedMotion) return;

    const gsap = ensureGsap();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        image,
        { yPercent: -5, scale: 1 },
        {
          yPercent: 5,
          scale: 1.08,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        },
      );
    }, container);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return { containerRef, imageRef };
}
