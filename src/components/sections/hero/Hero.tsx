"use client";

import { useRef } from "react";
import { HERO_MEDIA } from "@/constants/hero";
import { useHeroAnimation } from "@/hooks/useHeroAnimation";
import type { HeroMediaConfig } from "@/types/hero";
import { HeroContent } from "./HeroContent";
import { HeroMedia } from "./HeroMedia";
import { HeroOverlay } from "./HeroOverlay";
import { HeroScrollIndicator } from "./HeroScrollIndicator";
import styles from "./Hero.module.css";

interface HeroProps {
  media?: HeroMediaConfig;
}

export function Hero({ media = HERO_MEDIA }: HeroProps) {
  const mediaRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const overlineRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLButtonElement>(null);

  useHeroAnimation({
    mediaRef,
    overlayRef,
    overlineRef,
    headlineRef,
    subtitleRef,
    ctaRef,
    scrollIndicatorRef,
  });

  return (
    <section id="hero" className={styles.hero} aria-label="Welcome">
      <div className={styles.background}>
        <HeroMedia media={media} mediaRef={mediaRef} />
        <HeroOverlay overlayRef={overlayRef} />
      </div>

      <div className={styles.body}>
        <div className={styles.copy}>
          <HeroContent
            contentRefs={{
              overline: overlineRef,
              headline: headlineRef,
              subtitle: subtitleRef,
              cta: ctaRef,
            }}
          />
        </div>

        <div className={styles.scroll}>
          <HeroScrollIndicator scrollIndicatorRef={scrollIndicatorRef} />
        </div>
      </div>
    </section>
  );
}
