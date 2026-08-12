"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { MouseEvent } from "react";
import { SITE_NAME } from "@/constants/site";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import { useLogoScale } from "@/hooks/useLogoScale";
import { cn } from "@/utils";
import styles from "./NavLogo.module.css";

interface NavLogoProps {
  isScrolled: boolean;
  onNavigate?: () => void;
}

export function NavLogo({ isScrolled, onNavigate }: NavLogoProps) {
  const pathname = usePathname();
  const prefersReducedMotion = usePrefersReducedMotion();
  const logoRef = useLogoScale<HTMLAnchorElement>();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (pathname === "/") {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    }
    onNavigate?.();
  };

  return (
    <Link
      ref={logoRef}
      href="/"
      className={cn(styles.logo, isScrolled && styles.scrolled)}
      onClick={handleClick}
      aria-label={`${SITE_NAME} — Home`}
    >
      <Image
        src="/omedad-logo.png"
        alt={SITE_NAME}
        width={140}
        height={140}
        className={styles.logoImage}
        priority
      />
    </Link>
  );
}
