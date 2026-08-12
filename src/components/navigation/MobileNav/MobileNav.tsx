"use client";

import { NAV_LINKS } from "@/constants/site";
import { useActiveNavLink } from "@/hooks";
import type { NavLink as NavLinkType } from "@/types";
import { NavLink } from "../NavLink";
import styles from "./MobileNav.module.css";

interface MobileNavProps {
  links?: readonly NavLinkType[];
}

export function MobileNav({ links = NAV_LINKS }: MobileNavProps) {
  const activeHref = useActiveNavLink(links);

  return (
    <nav className={styles.bar} aria-label="Mobile navigation">
      <ul className={styles.list} role="list">
        {links.map((link) => (
          <NavLink
            key={link.href}
            href={link.href}
            label={link.label}
            isActive={activeHref === link.href}
            isScrolled={false}
            variant="mobile"
          />
        ))}
      </ul>
    </nav>
  );
}
