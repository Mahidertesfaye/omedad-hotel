"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { cn } from "@/utils";
import styles from "./BackToTop.module.css";

const SHOW_AFTER_PX = 400;

export function BackToTop() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateVisibility = () => {
      setIsVisible(window.scrollY > SHOW_AFTER_PX);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });

    return () => window.removeEventListener("scroll", updateVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <button
      type="button"
      className={cn(styles.button, isVisible && styles.visible)}
      onClick={scrollToTop}
      aria-label="Back to top"
      tabIndex={isVisible ? 0 : -1}
    >
      <ArrowUp aria-hidden="true" strokeWidth={1.75} />
    </button>
  );
}
