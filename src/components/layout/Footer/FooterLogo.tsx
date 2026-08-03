import Link from "next/link";
import { SITE_NAME } from "@/constants/site";
import styles from "./FooterLogo.module.css";

export function FooterLogo() {
  return (
    <Link href="/" className={styles.logo} aria-label={`${SITE_NAME} — Home`}>
      <span className={styles.logoMark} aria-hidden="true">
        O
      </span>
      <span className={styles.logoText}>{SITE_NAME}</span>
    </Link>
  );
}
