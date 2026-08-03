"use client";

import { RESTAURANT_MEDIA } from "@/constants/restaurant";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { useRestaurantParallax } from "@/hooks/useRestaurantParallax";
import styles from "./RestaurantMedia.module.css";

export function RestaurantMedia() {
  const { containerRef, imageRef } = useRestaurantParallax();

  return (
    <figure ref={containerRef} className={styles.figure}>
      <div ref={imageRef} className={styles.imageInner}>
        <OptimizedImage
          src={RESTAURANT_MEDIA.src}
          alt={RESTAURANT_MEDIA.alt}
          fill
          sizes="(max-width: 1024px) 100vw, 55vw"
          className={styles.image}
        />
      </div>
      <figcaption className="sr-only">{RESTAURANT_MEDIA.alt}</figcaption>
    </figure>
  );
}
