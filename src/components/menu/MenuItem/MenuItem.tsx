"use client";

import { motion } from "framer-motion";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import type { DietaryTag, MenuItem as MenuItemType } from "@/types/menu";
import { cn } from "@/utils";
import styles from "./MenuItem.module.css";

interface MenuItemProps {
  item: MenuItemType;
  index: number;
}

const DIETARY_LABELS: Record<DietaryTag, string> = {
  vegetarian: "Vegetarian",
  vegan: "Vegan",
  "gluten-free": "Gluten free",
  spicy: "Spicy",
  "contains-nuts": "Contains nuts",
};

function formatPrice(amount: number, currency: string) {
  return new Intl.NumberFormat("en-ET", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function MenuItem({ item, index }: MenuItemProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.article
      className={cn(styles.item, item.featured && styles.featured)}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-32px", amount: 0.25 }}
      transition={{
        duration: 0.5,
        delay: prefersReducedMotion ? 0 : Math.min(index * 0.05, 0.2),
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <figure className={styles.media}>
        <OptimizedImage
          src={item.image.src}
          alt={item.image.alt}
          fill
          sizes="96px"
          className={styles.image}
        />
      </figure>

      <div className={styles.content}>
        <div className={styles.headingRow}>
          <h3 className={styles.name}>{item.name}</h3>
          <span className={styles.dots} aria-hidden="true" />
          <p className={styles.price}>{formatPrice(item.price, item.currency)}</p>
        </div>

        <p className={styles.description}>{item.description}</p>

        {item.dietary && item.dietary.length > 0 && (
          <ul className={styles.dietary} aria-label="Dietary information">
            {item.dietary.map((tag) => (
              <li key={tag} className={styles.dietaryTag}>
                {DIETARY_LABELS[tag]}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.article>
  );
}
