"use client";

import { BOOK_NOW_HREF } from "@/constants/navigation";
import { NAV_LINKS } from "@/constants/site";
import { useActiveNavLink, useScrollState } from "@/hooks";
import { cn } from "@/utils";
import { DesktopNav } from "../DesktopNav";
import { MobileNav } from "../MobileNav";
import { NavBookButton } from "../NavBookButton";
import { NavLogo } from "../NavLogo";
import styles from "./Header.module.css";

export function Header() {
  const isScrolled = useScrollState();
  const activeHref = useActiveNavLink(NAV_LINKS);

  return (
    <>
      <header
        className={cn(styles.header, isScrolled && styles.scrolled)}
      >
        <div className={styles.inner}>
          <NavLogo isScrolled={isScrolled} />

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
