"use client";

import { ABOUT_STATS } from "@/constants/about";
import { useInView } from "@/hooks/useInView";
import { StatItem } from "./StatItem";
import styles from "./AboutStats.module.css";

export function AboutStats() {
  const { ref, isInView } = useInView<HTMLDivElement>({
    threshold: 0.3,
    rootMargin: "-40px",
  });

  return (
    <div
      ref={ref}
      className={styles.stats}
      aria-label="Hotel statistics"
    >
      {ABOUT_STATS.map((stat, index) => (
        <StatItem
          key={stat.id}
          stat={stat}
          isActive={isInView}
          index={index}
        />
      ))}
    </div>
  );
}
