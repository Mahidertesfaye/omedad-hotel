"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { cn } from "@/utils";
import styles from "./NavLink.module.css";

interface NavLinkProps {
  href: string;
  label: string;
  isActive: boolean;
  isScrolled: boolean;
  onNavigate?: () => void;
  variant?: "desktop" | "mobile";
  index?: number;
}

export function NavLink({
  href,
  label,
  isActive,
  isScrolled,
  onNavigate,
  variant = "desktop",
  index = 0,
}: NavLinkProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const isMobile = variant === "mobile";

  const linkClassName = cn(
    styles.link,
    styles[variant],
    isActive && styles.active,
    isScrolled && !isMobile && styles.scrolled,
  );

  const linkContent = (
    <>
      <span className={styles.label}>{label}</span>
      {isActive &&
        (prefersReducedMotion ? (
          <span
            className={isMobile ? styles.mobileIndicator : styles.indicator}
          />
        ) : (
          <motion.span
            className={isMobile ? styles.mobileIndicator : styles.indicator}
            layoutId={isMobile ? "mobile-nav-indicator" : "desktop-nav-indicator"}
            transition={{ type: "spring", stiffness: 380, damping: 30 }}
          />
        ))}
    </>
  );

  if (isMobile) {
    const itemClassName = styles.item;

    if (prefersReducedMotion) {
      return (
        <li className={itemClassName}>
          <Link
            href={href}
            className={linkClassName}
            onClick={onNavigate}
            aria-current={isActive ? "page" : undefined}
          >
            {linkContent}
          </Link>
        </li>
      );
    }

    return (
      <motion.li
        className={itemClassName}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 12 }}
        transition={{
          duration: 0.4,
          delay: 0.08 + index * 0.06,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        <Link
          href={href}
          className={linkClassName}
          onClick={onNavigate}
          aria-current={isActive ? "page" : undefined}
        >
          {linkContent}
        </Link>
      </motion.li>
    );
  }

  return (
    <li className={styles.item}>
      <Link
        href={href}
        className={linkClassName}
        aria-current={isActive ? "page" : undefined}
      >
        {linkContent}
      </Link>
    </li>
  );
}
