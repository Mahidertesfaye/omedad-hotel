"use client";

import { forwardRef, useCallback, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils";
import styles from "./MobileMenuToggle.module.css";

interface MobileMenuToggleProps {
  isOpen: boolean;
  isScrolled: boolean;
  onToggle: () => void;
}

export const MobileMenuToggle = forwardRef<
  HTMLButtonElement,
  MobileMenuToggleProps
>(function MobileMenuToggle({ isOpen, isScrolled, onToggle }, ref) {
  const wasOpen = useRef(false);

  useEffect(() => {
    if (isOpen) {
      wasOpen.current = true;
      return;
    }

    if (wasOpen.current && ref && typeof ref !== "function" && ref.current) {
      ref.current.focus();
    }
  }, [isOpen, ref]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onToggle();
      }
    },
    [onToggle],
  );

  return (
    <button
      ref={ref}
      type="button"
      className={cn(
        styles.toggle,
        isScrolled && styles.scrolled,
        isOpen && styles.open,
      )}
      onClick={onToggle}
      onKeyDown={handleKeyDown}
      aria-expanded={isOpen}
      aria-controls="mobile-navigation"
      aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
    >
      <span className={styles.lines} aria-hidden="true">
        <motion.span
          className={styles.line}
          animate={
            isOpen
              ? { rotate: 45, y: 0, width: "100%" }
              : { rotate: 0, y: -6, width: "100%" }
          }
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.span
          className={styles.line}
          animate={
            isOpen
              ? { opacity: 0, scaleX: 0 }
              : { opacity: 1, scaleX: 1 }
          }
          transition={{ duration: 0.2 }}
        />
        <motion.span
          className={styles.line}
          animate={
            isOpen
              ? { rotate: -45, y: 0, width: "100%" }
              : { rotate: 0, y: 6, width: "70%" }
          }
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        />
      </span>
    </button>
  );
});
