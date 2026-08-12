"use client";

import { motion } from "framer-motion";
import { OutlineButton, PrimaryButton } from "@/components/ui";
import { Card } from "@/components/ui/Card";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import { ROOMS_PAGE_CONTENT } from "@/data/rooms";
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery";
import type { Room } from "@/types/rooms";
import styles from "./RoomCard.module.css";

interface RoomCardProps {
  room: Room;
  index: number;
}

function formatPrice(amount: number, currency: string) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}

export function RoomCard({ room, index }: RoomCardProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const previewAmenities = room.amenities.slice(0, 4);

  return (
    <motion.article
      id={room.slug}
      className={styles.wrapper}
      initial={prefersReducedMotion ? false : { opacity: 0, y: 28 }}
      whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px", amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: prefersReducedMotion ? 0 : Math.min(index * 0.08, 0.32),
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      <Card variant="elevated" padding="none" className={styles.card}>
        <figure className={styles.media}>
          <OptimizedImage
            src={room.image.src}
            alt={room.image.alt}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={styles.image}
          />
          {room.featured && (
            <span className={styles.featured}>Featured</span>
          )}
        </figure>

        <div className={styles.body}>
          <div className={styles.header}>
            <h2 className={styles.title}>{room.name}</h2>
            <p className={styles.description}>{room.description}</p>
          </div>

          <dl className={styles.meta}>
            <div className={styles.metaItem}>
              <dt className={styles.metaLabel}>Size</dt>
              <dd className={styles.metaValue}>{room.size}</dd>
            </div>
            <div className={styles.metaItem}>
              <dt className={styles.metaLabel}>Bed</dt>
              <dd className={styles.metaValue}>{room.bedType}</dd>
            </div>
            <div className={styles.metaItem}>
              <dt className={styles.metaLabel}>Guests</dt>
              <dd className={styles.metaValue}>
                Up to {room.guests}
              </dd>
            </div>
          </dl>

          <ul className={styles.amenities} aria-label={`${room.name} amenities`}>
            {previewAmenities.map((amenity) => (
              <li key={amenity} className={styles.amenity}>
                {amenity}
              </li>
            ))}
          </ul>

          <div className={styles.footer}>
            <p className={styles.price}>
              <span className={styles.priceLabel}>From</span>
              <span className={styles.priceValue}>
                {formatPrice(room.price, room.currency)}
                <span className={styles.pricePeriod}> / night</span>
              </span>
            </p>

            <div className={styles.actions}>
              <OutlineButton href={`#${room.slug}`} size="sm" className={styles.viewButton}>
                View Room
              </OutlineButton>
              <PrimaryButton href={ROOMS_PAGE_CONTENT.bookHref} size="sm">
                Book Now
              </PrimaryButton>
            </div>
          </div>
        </div>
      </Card>
    </motion.article>
  );
}
