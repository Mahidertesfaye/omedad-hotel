"use client";

import { useCallback, type RefObject } from "react";
import styles from "./HeroScrollIndicator.module.css";

interface HeroScrollIndicatorProps {
  scrollIndicatorRef?: RefObject<HTMLButtonElement | null>;
  targetId?: string;
}

export function HeroScrollIndicator({
  scrollIndicatorRef,
  targetId = "rooms",
}: HeroScrollIndicatorProps) {
  const handleClick = useCallback(() => {
    const target = document.getElementById(targetId);
    target?.scrollIntoView({ behavior: "smooth" });
  }, [targetId]);

  return (
    <button
      ref={scrollIndicatorRef}
      type="button"
      className={styles.indicator}
      onClick={handleClick}
      aria-label="Scroll to explore"
    >
      <span className={styles.mouse} aria-hidden="true">
        <span className={styles.wheel} />
      </span>
    </button>
  );
}
