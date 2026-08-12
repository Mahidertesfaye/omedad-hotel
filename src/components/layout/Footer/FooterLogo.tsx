import Image from "next/image";
import Link from "next/link";
import { SITE_NAME } from "@/constants/site";
import styles from "./FooterLogo.module.css";

export function FooterLogo() {
  return (
    <Link href="/" className={styles.logo} aria-label={`${SITE_NAME} — Home`}>
      <Image
        src="/logo.png"
        alt={SITE_NAME}
        width={140}
        height={140}
        className={styles.logoImage}
      />
    </Link>
  );
}
