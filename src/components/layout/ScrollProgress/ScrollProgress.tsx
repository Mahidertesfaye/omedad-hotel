"use client";

import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import styles from "./ScrollProgress.module.css";

export function ScrollProgress() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (prefersReducedMotion) return;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(scrollable > 0 ? scrollTop / scrollable : 0);
    };

    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);

    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, [prefersReducedMotion]);

  if (prefersReducedMotion) return null;

  const value = Math.round(progress * 100);

  return (
    <div
      className={styles.track}
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={value}
      aria-label="Page scroll progress"
    >
      <div
        className={styles.bar}
        style={{ transform: `scaleX(${progress})` }}
        aria-hidden="true"
      />
    </div>
  );
}
