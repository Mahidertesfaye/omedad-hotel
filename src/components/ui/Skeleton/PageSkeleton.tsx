import { Skeleton } from "./Skeleton";
import styles from "./PageSkeleton.module.css";

export function PageSkeleton() {
  return (
    <div className={styles.page} aria-hidden="true">
      <Skeleton className={styles.hero} label="Loading hero" />

      <div className={styles.sections}>
        <Skeleton className={styles.sectionTitle} label="Loading section" />
        <Skeleton className={styles.sectionBody} label="Loading content" />
        <Skeleton className={styles.sectionTitle} label="Loading section" />
        <div className={styles.grid}>
          <Skeleton className={styles.card} label="Loading card" />
          <Skeleton className={styles.card} label="Loading card" />
          <Skeleton className={styles.card} label="Loading card" />
        </div>
      </div>
    </div>
  );
}
