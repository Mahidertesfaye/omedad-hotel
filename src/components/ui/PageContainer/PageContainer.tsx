import type { ElementType, ReactNode } from "react";
import { cn } from "@/utils";
import styles from "./PageContainer.module.css";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  size?: "default" | "narrow" | "wide";
}

export function PageContainer({
  children,
  className,
  as: Component = "div",
  size = "default",
}: PageContainerProps) {
  return (
    <Component
      className={cn(styles.pageContainer, styles[size], className)}
    >
      {children}
    </Component>
  );
}
