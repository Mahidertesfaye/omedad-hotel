"use client";

import { motion } from "framer-motion";
import { MenuItem } from "@/components/menu/MenuItem";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import type { MenuCategory, MenuItem as MenuItemType } from "@/types/menu";
import styles from "./MenuSection.module.css";

interface MenuSectionProps {
  category: MenuCategory;
  items: MenuItemType[];
  index: number;
}

export function MenuSection({ category, items, index }: MenuSectionProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (items.length === 0) return null;

  const countLabel = `${items.length} ${items.length === 1 ? "dish" : "dishes"}`;

  return (
    <motion.section
      id={`menu-${category.id}`}
      className={styles.section}
      aria-labelledby={`menu-heading-${category.id}`}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 20 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px", amount: 0.15 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      style={{ scrollMarginTop: "calc(var(--header-height) + 4.5rem)" }}
    >
      <header className={styles.header}>
        <div className={styles.meta}>
          <span className={styles.index} aria-hidden="true">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className={styles.count}>{countLabel}</span>
        </div>
        <h2 id={`menu-heading-${category.id}`} className={styles.title}>
          {category.label}
        </h2>
        <div className={styles.rule} aria-hidden="true" />
      </header>

      <div className={styles.list}>
        {items.map((item, itemIndex) => (
          <MenuItem key={item.id} item={item} index={itemIndex} />
        ))}
      </div>
    </motion.section>
  );
}
