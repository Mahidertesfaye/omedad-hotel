"use client";

import { motion } from "framer-motion";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import type { DietaryTag, MenuItem as MenuItemType } from "@/types/menu";
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
      className={styles.item}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 22 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-32px", amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: prefersReducedMotion ? 0 : Math.min(index * 0.06, 0.24),
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <figure className={styles.media}>
        <OptimizedImage
          src={item.image.src}
          alt={item.image.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 960px) 50vw, 320px"
          className={styles.image}
        />
        {item.featured && (
          <span className={styles.featuredBadge}>Chef&apos;s pick</span>
        )}
        <p className={styles.priceBadge}>
          {formatPrice(item.price, item.currency)}
        </p>
      </figure>

      <div className={styles.content}>
        <h3 className={styles.name}>{item.name}</h3>
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
