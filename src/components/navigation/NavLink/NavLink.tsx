"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
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
}

export function NavLink({
  href,
  label,
  isActive,
  isScrolled,
  onNavigate,
  variant = "desktop",
}: NavLinkProps) {
  const pathname = usePathname();
  const prefersReducedMotion = usePrefersReducedMotion();
  const isMobile = variant === "mobile";

  const linkClassName = cn(
    styles.link,
    styles[variant],
    isActive && styles.active,
    isScrolled && !isMobile && styles.scrolled,
  );

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (href === "/" && pathname === "/") {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }
    onNavigate?.();
  };

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

  return (
    <li className={styles.item}>
      <Link
        href={href}
        className={linkClassName}
        onClick={handleClick}
        aria-current={isActive ? "page" : undefined}
      >
        {linkContent}
      </Link>
    </li>
  );
}
