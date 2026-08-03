"use client";

import { motion } from "framer-motion";
import {
  Bus,
  CircleParking,
  Dumbbell,
  Sparkles,
  Users,
  UtensilsCrossed,
  Wifi,
  type LucideIcon,
} from "lucide-react";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import type { Amenity, AmenityIcon } from "@/types/amenities";
import styles from "./AmenityItem.module.css";

const AMENITY_ICONS: Record<AmenityIcon, LucideIcon> = {
  restaurant: UtensilsCrossed,
  wifi: Wifi,
  conference: Users,
  shuttle: Bus,
  gym: Dumbbell,
  spa: Sparkles,
  parking: CircleParking,
};

interface AmenityItemProps {
  amenity: Amenity;
  index: number;
}

export function AmenityItem({ amenity, index }: AmenityItemProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const Icon = AMENITY_ICONS[amenity.icon];

  return (
    <motion.article
      className={styles.item}
      role="listitem"
      initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-48px", amount: 0.35 }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <div className={styles.iconWrap} aria-hidden="true">
        <Icon className={styles.icon} strokeWidth={1.25} />
      </div>

      <h3 className={styles.title}>{amenity.title}</h3>
      <p className={styles.description}>{amenity.description}</p>
    </motion.article>
  );
}
