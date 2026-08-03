import { Skeleton } from "@/components/ui/Skeleton";
import styles from "./MapSkeleton.module.css";

export function MapSkeleton() {
  return (
    <div className={styles.wrapper} aria-hidden="true">
      <Skeleton className={styles.map} label="Loading map" />
    </div>
  );
}
