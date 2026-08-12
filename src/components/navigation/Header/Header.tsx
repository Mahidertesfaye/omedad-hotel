"use client";

import { usePathname } from "next/navigation";
import { BOOK_NOW_HREF } from "@/constants/navigation";
import { NAV_LINKS } from "@/constants/site";
import { useActiveNavLink, useScrollState } from "@/hooks";
import { cn } from "@/utils";
import { DesktopNav } from "../DesktopNav";
import { MobileNav } from "../MobileNav";
import { NavBackButton } from "../NavBackButton";
import { NavBookButton } from "../NavBookButton";
import { NavLogo } from "../NavLogo";
import styles from "./Header.module.css";

export function Header() {
  const pathname = usePathname();
  const isScrolled = useScrollState();
  const activeHref = useActiveNavLink(NAV_LINKS);
  const showBack = pathname !== "/";

  return (
    <>
      <header
        className={cn(styles.header, isScrolled && styles.scrolled)}
      >
        <div className={styles.inner}>
          <div className={styles.brand}>
            {showBack ? <NavBackButton isScrolled={isScrolled} /> : null}
            <NavLogo isScrolled={isScrolled} />
          </div>

          <DesktopNav activeHref={activeHref} isScrolled={isScrolled} />

          <div className={styles.actions}>
            <NavBookButton href={BOOK_NOW_HREF} isScrolled={isScrolled} />
          </div>
        </div>
      </header>

      <MobileNav />
    </>
  );
}
