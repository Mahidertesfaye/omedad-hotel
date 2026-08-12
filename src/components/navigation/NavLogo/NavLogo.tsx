"use client";

import Image from "next/image";
import Link from "next/link";
import { SITE_NAME } from "@/constants/site";
import { cn } from "@/utils";
import { useLogoScale } from "@/hooks/useLogoScale";
import styles from "./NavLogo.module.css";

interface NavLogoProps {
  isScrolled: boolean;
  onNavigate?: () => void;
}

export function NavLogo({ isScrolled, onNavigate }: NavLogoProps) {
  const logoRef = useLogoScale<HTMLAnchorElement>();

  return (
    <Link
      ref={logoRef}
      href="/"
      className={cn(styles.logo, isScrolled && styles.scrolled)}
      onClick={onNavigate}
      aria-label={`${SITE_NAME} — Home`}
    >
      <Image
        src="/logo.png"
        alt={SITE_NAME}
        width={140}
        height={140}
        className={styles.logoImage}
        priority
      />
    </Link>
  );
}
