import type { ElementType, ReactNode } from "react";
import { cn } from "@/utils";
import styles from "./Container.module.css";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  size?: "default" | "narrow" | "wide";
}

export function Container({
  children,
  className,
  as: Component = "div",
  size = "default",
}: ContainerProps) {
  return (
    <Component
      className={cn(styles.container, styles[size], className)}
    >
      {children}
    </Component>
  );
}
