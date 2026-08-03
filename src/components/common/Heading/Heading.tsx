import type { ElementType, ReactNode } from "react";
import type { HeadingLevel } from "@/types";
import { cn } from "@/utils";
import styles from "./Heading.module.css";

interface HeadingProps {
  children: ReactNode;
  className?: string;
  level?: HeadingLevel;
  as?: ElementType;
  variant?: "display" | "default";
  muted?: boolean;
  inverse?: boolean;
}

const levelMap: Record<HeadingLevel, ElementType> = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
  5: "h5",
  6: "h6",
};

export function Heading({
  children,
  className,
  level = 2,
  as,
  variant = "display",
  muted = false,
  inverse = false,
}: HeadingProps) {
  const Component = as ?? levelMap[level];

  return (
    <Component
      className={cn(
        styles.heading,
        styles[variant],
        styles[`level-${level}`],
        muted && styles.muted,
        inverse && styles.inverse,
        className,
      )}
    >
      {children}
    </Component>
  );
}
