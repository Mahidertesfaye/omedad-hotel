import type { ElementType, ReactNode } from "react";
import { cn } from "@/utils";
import styles from "./Text.module.css";

interface TextProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  size?: "sm" | "base" | "lg";
  muted?: boolean;
  light?: boolean;
  inverse?: boolean;
  overline?: boolean;
  label?: boolean;
}

export function Text({
  children,
  className,
  as: Component = "p",
  size = "base",
  muted = false,
  light = false,
  inverse = false,
  overline = false,
  label = false,
}: TextProps) {
  return (
    <Component
      className={cn(
        styles.text,
        styles[size],
        muted && styles.muted,
        light && styles.light,
        inverse && styles.inverse,
        overline && styles.overline,
        label && styles.label,
        className,
      )}
    >
      {children}
    </Component>
  );
}
