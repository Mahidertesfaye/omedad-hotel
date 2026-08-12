import { Star } from "lucide-react";
import { cn } from "@/utils";
import styles from "./HotelStarRating.module.css";

interface HotelStarRatingProps {
  rating: number;
  label: string;
  className?: string;
  /** Visual treatment for dark hero surfaces vs light sections. */
  variant?: "inverse" | "default";
}

export function HotelStarRating({
  rating,
  label,
  className,
  variant = "default",
}: HotelStarRatingProps) {
  const stars = Array.from({ length: rating }, (_, index) => index + 1);

  return (
    <div
      className={cn(styles.badge, styles[variant], className)}
      role="img"
      aria-label={label}
    >
      <span className={styles.stars} aria-hidden="true">
        {stars.map((star) => (
          <Star key={star} className={styles.star} strokeWidth={1.5} />
        ))}
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}
