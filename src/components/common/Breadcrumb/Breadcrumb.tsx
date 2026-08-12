import Link from "next/link";
import { cn } from "@/utils";
import styles from "./Breadcrumb.module.css";

export interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: readonly BreadcrumbItem[];
  className?: string;
  tone?: "light" | "dark";
}

export function Breadcrumb({
  items,
  className,
  tone = "light",
}: BreadcrumbProps) {
  return (
    <nav
      className={cn(styles.breadcrumb, styles[tone], className)}
      aria-label="Breadcrumb"
    >
      <ol className={styles.list}>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <li key={item.href} className={styles.item}>
              {isLast ? (
                <span className={styles.current} aria-current="page">
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className={styles.link}>
                  {item.label}
                </Link>
              )}
              {!isLast && (
                <span className={styles.separator} aria-hidden="true">
                  /
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
