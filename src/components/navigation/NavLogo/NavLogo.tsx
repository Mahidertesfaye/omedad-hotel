"use client";

import Link from "next/link";
import { SITE_NAME } from "@/constants/site";
import { cn } from "@/utils";
import { useLogoScale } from "@/hooks/useLogoScale";
import styles from "./NavLogo.module.css";

interface NavLogoProps {
  isScrolled: boolean;
  isMenuOpen?: boolean;
  onNavigate?: () => void;
}

export function NavLogo({
  isScrolled,
  isMenuOpen = false,
  onNavigate,
}: NavLogoProps) {
  const logoRef = useLogoScale<HTMLAnchorElement>();

  return (
    <Link
      ref={logoRef}
      href="/"
      className={cn(
        styles.logo,
        isScrolled && styles.scrolled,
        isMenuOpen && styles.menuOpen,
      )}
      onClick={onNavigate}
      aria-label={`${SITE_NAME} — Home`}
    >
      <span className={styles.logoMark} aria-hidden="true">
        O
      </span>
      <span className={styles.logoText}>{SITE_NAME}</span>
    </Link>
  );
}
