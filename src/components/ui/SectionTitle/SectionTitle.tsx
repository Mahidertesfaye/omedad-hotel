import type { ElementType, ReactNode } from "react";
import { cn } from "@/utils";
import styles from "./SectionTitle.module.css";

interface SectionTitleProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  align?: "left" | "center" | "right";
  inverse?: boolean;
  id?: string;
}

export function SectionTitle({
  children,
  className,
  as: Component = "h2",
  align = "left",
  inverse = false,
  id,
}: SectionTitleProps) {
  return (
    <Component
      id={id}
      className={cn(
        styles.title,
        styles[`align-${align}`],
        inverse && styles.inverse,
        className,
      )}
    >
      {children}
    </Component>
  );
}
