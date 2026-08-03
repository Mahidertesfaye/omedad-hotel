"use client";

import { useEffect, type RefObject } from "react";
import { ensureGsap } from "@/lib/gsap";
import { usePrefersReducedMotion } from "./useMediaQuery";

interface HeroAnimationRefs {
  mediaRef: RefObject<HTMLDivElement | null>;
  overlayRef: RefObject<HTMLDivElement | null>;
  overlineRef: RefObject<HTMLParagraphElement | null>;
  headlineRef: RefObject<HTMLHeadingElement | null>;
  subtitleRef: RefObject<HTMLParagraphElement | null>;
  ctaRef: RefObject<HTMLDivElement | null>;
  scrollIndicatorRef: RefObject<HTMLButtonElement | null>;
}

export function useHeroAnimation(refs: HeroAnimationRefs): void {
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const gsap = ensureGsap();
    const media = refs.mediaRef.current;
    const overlay = refs.overlayRef.current;
    const scrollIndicator = refs.scrollIndicatorRef.current;

    const content = [
      refs.overlineRef.current,
      refs.headlineRef.current,
      refs.subtitleRef.current,
      refs.ctaRef.current,
    ].filter(Boolean) as HTMLElement[];

    if (!media) return;

    if (prefersReducedMotion) {
      gsap.set(media, { scale: 1, opacity: 1 });
      if (overlay) gsap.set(overlay, { opacity: 1 });
      gsap.set(content, { y: 0, opacity: 1 });
      if (scrollIndicator) gsap.set(scrollIndicator, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.set(media, { scale: 1.12, opacity: 0 });
      if (overlay) gsap.set(overlay, { opacity: 0 });
      gsap.set(content, { y: 48, opacity: 0 });
      if (scrollIndicator) gsap.set(scrollIndicator, { opacity: 0, y: -8 });

      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });

      timeline
        .to(media, { opacity: 1, duration: 1.8, ease: "power2.out" })
        .to(media, { scale: 1, duration: 2.8, ease: "power2.out" }, 0);

      if (overlay) {
        timeline.to(
          overlay,
          { opacity: 1, duration: 1.4, ease: "power2.inOut" },
          0.2,
        );
      }

      timeline.to(
        content,
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          stagger: 0.14,
          ease: "power3.out",
        },
        0.65,
      );

      if (scrollIndicator) {
        timeline.to(
          scrollIndicator,
          { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
          1.15,
        );
      }

      gsap.to(media, {
        scale: 1.07,
        duration: 22,
        ease: "none",
        repeat: -1,
        yoyo: true,
        delay: 2.8,
      });
    });

    return () => ctx.revert();
  }, [prefersReducedMotion]);
}
