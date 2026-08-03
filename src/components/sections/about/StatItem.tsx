"use client";

import { useEffect, useRef } from "react";
import { ensureGsap } from "@/lib/gsap";
import type { AboutStat } from "@/types/about";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import styles from "./StatItem.module.css";

interface StatItemProps {
  stat: AboutStat;
  isActive: boolean;
  index: number;
}

function formatValue(value: number, decimals: number): string {
  return decimals > 0 ? value.toFixed(decimals) : Math.round(value).toString();
}

export function StatItem({ stat, isActive, index }: StatItemProps) {
  const valueRef = useRef<HTMLSpanElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const element = valueRef.current;
    if (!element || !isActive) return;

    if (prefersReducedMotion) {
      element.textContent = formatValue(stat.value, stat.decimals);
      return;
    }

    const gsap = ensureGsap();
    const counter = { value: 0 };

    gsap.to(counter, {
      value: stat.value,
      duration: 2,
      delay: index * 0.12,
      ease: "power2.out",
      onUpdate: () => {
        element.textContent = formatValue(counter.value, stat.decimals);
      },
    });
  }, [isActive, stat, index, prefersReducedMotion]);

  return (
    <div className={styles.stat}>
      <p className={styles.value}>
        <span ref={valueRef}>0</span>
        {stat.suffix && <span className={styles.suffix}>{stat.suffix}</span>}
      </p>
      <p className={styles.label}>{stat.label}</p>
    </div>
  );
}
