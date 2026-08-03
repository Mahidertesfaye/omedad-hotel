import type { ElementType, ReactNode } from "react";
import { cn } from "@/utils";
import styles from "./SectionSubtitle.module.css";

interface SectionSubtitleProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  align?: "left" | "center" | "right";
  inverse?: boolean;
}

export function SectionSubtitle({
  children,
  className,
  as: Component = "p",
  align = "left",
  inverse = false,
}: SectionSubtitleProps) {
  return (
    <Component
      className={cn(
        styles.subtitle,
        styles[`align-${align}`],
        inverse && styles.inverse,
        className,
      )}
    >
      {children}
    </Component>
  );
}
