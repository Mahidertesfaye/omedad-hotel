"use client";

import { useCallback, useRef } from "react";
import { BOOK_NOW_HREF } from "@/constants/navigation";
import { NAV_LINKS } from "@/constants/site";
import {
  useActiveNavLink,
  useMobileMenu,
  useScrollState,
} from "@/hooks";
import { cn } from "@/utils";
import { DesktopNav } from "../DesktopNav";
import { MobileMenuToggle } from "../MobileMenuToggle";
import { MobileNav } from "../MobileNav";
import { NavBookButton } from "../NavBookButton";
import { NavLogo } from "../NavLogo";
import styles from "./Header.module.css";

export function Header() {
  const isScrolled = useScrollState();
  const activeHref = useActiveNavLink(NAV_LINKS);
  const { isOpen, toggle, close } = useMobileMenu();
  const toggleRef = useRef<HTMLButtonElement>(null);

  const handleClose = useCallback(() => {
    close();
  }, [close]);

  return (
    <>
      <header
        className={cn(
          styles.header,
          isScrolled && styles.scrolled,
          isOpen && styles.menuOpen,
        )}
      >
        <div className={styles.inner}>
          <NavLogo
            isScrolled={isScrolled}
            isMenuOpen={isOpen}
            onNavigate={isOpen ? handleClose : undefined}
          />

          <DesktopNav activeHref={activeHref} isScrolled={isScrolled} />

          <div className={styles.actions}>
            <NavBookButton
              href={BOOK_NOW_HREF}
              isScrolled={isScrolled}
              className={styles.desktopBook}
            />
            <MobileMenuToggle
              ref={toggleRef}
              isOpen={isOpen}
              isScrolled={isScrolled}
              onToggle={toggle}
            />
          </div>
        </div>
      </header>

      <MobileNav
        isOpen={isOpen}
        activeHref={activeHref}
        onClose={handleClose}
      />
    </>
  );
}
