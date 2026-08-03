import { Star } from "lucide-react";
import styles from "./TestimonialRating.module.css";

interface TestimonialRatingProps {
  rating: number;
  label?: string;
}

export function TestimonialRating({ rating, label }: TestimonialRatingProps) {
  const stars = Array.from({ length: 5 }, (_, index) => index + 1);

  return (
    <div
      className={styles.rating}
      role="img"
      aria-label={label ?? `${rating} out of 5 stars`}
    >
      {stars.map((star) => (
        <Star
          key={star}
          className={`${styles.star} ${star <= rating ? styles.filled : styles.empty}`}
          strokeWidth={1.25}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}
