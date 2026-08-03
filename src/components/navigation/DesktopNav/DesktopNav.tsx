import { NAV_LINKS } from "@/constants/site";
import type { NavLink as NavLinkType } from "@/types";
import { NavLink } from "../NavLink";
import styles from "./DesktopNav.module.css";

interface DesktopNavProps {
  links?: readonly NavLinkType[];
  activeHref: string;
  isScrolled: boolean;
}

export function DesktopNav({
  links = NAV_LINKS,
  activeHref,
  isScrolled,
}: DesktopNavProps) {
  return (
    <nav className={styles.nav} aria-label="Main navigation">
      <ul className={styles.list} role="list">
        {links.map((link) => (
          <NavLink
            key={link.href}
            href={link.href}
            label={link.label}
            isActive={activeHref === link.href}
            isScrolled={isScrolled}
            variant="desktop"
          />
        ))}
      </ul>
    </nav>
  );
}
