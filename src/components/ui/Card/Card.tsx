import type { ElementType, ReactNode } from "react";
import { cn } from "@/utils";
import styles from "./Card.module.css";

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  variant?: "default" | "elevated" | "outline";
  padding?: "none" | "sm" | "md" | "lg";
}

export function Card({
  children,
  className,
  as: Component = "div",
  variant = "default",
  padding = "md",
}: CardProps) {
  return (
    <Component
      className={cn(
        styles.card,
        styles[variant],
        styles[`padding-${padding}`],
        className,
      )}
    >
      {children}
    </Component>
  );
}
