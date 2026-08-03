import { cn } from "@/utils";
import styles from "./Skeleton.module.css";

export interface SkeletonProps {
  className?: string;
  /** Accessible label for screen readers */
  label?: string;
  /** Render as a circle (avatars, icons) */
  circle?: boolean;
}

export function Skeleton({
  className,
  label = "Loading",
  circle = false,
}: SkeletonProps) {
  return (
    <div
      className={cn(styles.skeleton, circle && styles.circle, className)}
      role="status"
      aria-label={label}
      aria-busy="true"
    />
  );
}
