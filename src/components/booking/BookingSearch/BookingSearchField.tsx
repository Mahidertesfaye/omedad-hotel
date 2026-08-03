import type { ReactNode } from "react";
import { cn } from "@/utils";
import styles from "./BookingSearchField.module.css";

interface BookingSearchFieldProps {
  id: string;
  label: string;
  children: ReactNode;
  className?: string;
}

export function BookingSearchField({
  id,
  label,
  children,
  className,
}: BookingSearchFieldProps) {
  return (
    <div className={cn(styles.field, className)}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      {children}
    </div>
  );
}
