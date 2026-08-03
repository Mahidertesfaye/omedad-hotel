"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { BOOK_NOW_HREF } from "@/constants/navigation";
import { NAV_LINKS } from "@/constants/site";
import { useMenuKeyboardNav } from "@/hooks/useMenuKeyboardNav";
import type { NavLink as NavLinkType } from "@/types";
import { NavBookButton } from "../NavBookButton";
import { NavLink } from "../NavLink";
import styles from "./MobileNav.module.css";

interface MobileNavProps {
  isOpen: boolean;
  links?: readonly NavLinkType[];
  activeHref: string;
  onClose: () => void;
}

export function MobileNav({
  isOpen,
  links = NAV_LINKS,
  activeHref,
  onClose,
}: MobileNavProps) {
  const menuRef = useRef<HTMLDivElement>(null);

  useMenuKeyboardNav(menuRef, isOpen);

  useEffect(() => {
    if (!isOpen || !menuRef.current) return;

    const firstLink = menuRef.current.querySelector<HTMLAnchorElement>("a");
    firstLink?.focus();
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          id="mobile-navigation"
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className={styles.backdrop}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            aria-hidden="true"
            onClick={onClose}
          />

          <motion.nav
            className={styles.panel}
            aria-label="Mobile navigation menu"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <ul className={styles.list} role="list">
              {links.map((link, index) => (
                <NavLink
                  key={link.href}
                  href={link.href}
                  label={link.label}
                  isActive={activeHref === link.href}
                  isScrolled={false}
                  onNavigate={onClose}
                  variant="mobile"
                  index={index}
                />
              ))}
            </ul>

            <motion.div
              className={styles.actions}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{
                duration: 0.4,
                delay: 0.08 + links.length * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <NavBookButton
                href={BOOK_NOW_HREF}
                isScrolled={false}
                inverse
                onNavigate={onClose}
              />
            </motion.div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
