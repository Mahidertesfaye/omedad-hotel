import { SITE_NAME } from "@/constants/site";
import styles from "./FooterCopyright.module.css";

export function FooterCopyright() {
  const year = new Date().getFullYear();

  return (
    <p className={styles.copyright}>
      <small>
        &copy; {year} {SITE_NAME}. All rights reserved.
      </small>
    </p>
  );
}
