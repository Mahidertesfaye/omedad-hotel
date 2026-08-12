"use client";

import { motion } from "framer-motion";
import { MenuItem } from "@/components/menu/MenuItem";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import type { MenuCategory, MenuItem as MenuItemType } from "@/types/menu";
import styles from "./MenuSection.module.css";

interface MenuSectionProps {
  category: MenuCategory;
  items: MenuItemType[];
}

export function MenuSection({ category, items }: MenuSectionProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  if (items.length === 0) return null;

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
        <h2 id={`menu-heading-${category.id}`} className={styles.title}>
          {category.label}
        </h2>
      </header>

      <div className={styles.list}>
        {items.map((item, index) => (
          <MenuItem key={item.id} item={item} index={index} />
        ))}
      </div>
    </motion.section>
  );
}
