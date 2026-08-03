import type { ElementType, ReactNode } from "react";
import type { SectionVariant } from "@/types";
import { cn } from "@/utils";
import styles from "./Section.module.css";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: ElementType;
  variant?: SectionVariant;
  padding?: "default" | "sm" | "none";
  ariaLabel?: string;
}

export function Section({
  children,
  className,
  id,
  as: Component = "section",
  variant = "default",
  padding = "default",
  ariaLabel,
}: SectionProps) {
  return (
    <Component
      id={id}
      className={cn(
        styles.section,
        styles[variant],
        styles[`padding-${padding}`],
        className,
      )}
      aria-label={ariaLabel}
    >
      {children}
    </Component>
  );
}
