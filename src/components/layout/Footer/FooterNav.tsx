import Link from "next/link";
import { FOOTER_CONTENT, FOOTER_NAV_LINKS } from "@/constants/footer";
import styles from "./FooterNav.module.css";

export function FooterNav() {
  return (
    <nav className={styles.nav} aria-label="Footer navigation">
      <h2 className={styles.heading}>{FOOTER_CONTENT.navHeading}</h2>

      <ul className={styles.list}>
        {FOOTER_NAV_LINKS.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className={styles.link}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
