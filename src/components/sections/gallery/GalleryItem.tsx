"use client";

import { motion } from "framer-motion";
import type { GalleryAspectRatio, GalleryImage } from "@/types/gallery";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import styles from "./GalleryItem.module.css";

interface GalleryItemProps {
  image: GalleryImage;
  index: number;
  onOpen: (index: number) => void;
}

const ASPECT_CLASS: Record<GalleryAspectRatio, string> = {
  portrait: styles.aspectPortrait,
  landscape: styles.aspectLandscape,
  square: styles.aspectSquare,
  tall: styles.aspectTall,
  wide: styles.aspectWide,
};

export function GalleryItem({ image, index, onOpen }: GalleryItemProps) {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <motion.li
      className={styles.item}
      initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-32px", amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: (index % 3) * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <button
        type="button"
        className={styles.trigger}
        onClick={() => onOpen(index)}
        aria-label={`View ${image.title}`}
      >
        <div className={`${styles.media} ${ASPECT_CLASS[image.aspectRatio]}`}>
          <OptimizedImage
            src={image.src}
            alt=""
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={styles.image}
            draggable={false}
          />

          <div className={styles.overlay} aria-hidden="true">
            <span className={styles.category}>{image.category}</span>
            <span className={styles.title}>{image.title}</span>
          </div>
        </div>
      </button>
    </motion.li>
  );
}
