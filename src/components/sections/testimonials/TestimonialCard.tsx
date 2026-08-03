import { OptimizedImage } from "@/components/ui/OptimizedImage";
import type { Testimonial } from "@/types/testimonials";
import { TestimonialRating } from "./TestimonialRating";
import styles from "./TestimonialCard.module.css";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.avatarWrap}>
        <OptimizedImage
          src={testimonial.photo.src}
          alt={testimonial.photo.alt}
          width={64}
          height={64}
          className={styles.avatar}
        />
      </div>

      <TestimonialRating
        rating={testimonial.rating}
        label={`${testimonial.rating} out of 5 stars`}
      />

      <blockquote className={styles.quote}>
        <p className={styles.review}>{testimonial.review}</p>
      </blockquote>

      <footer className={styles.attribution}>
        <cite className={styles.name}>{testimonial.name}</cite>
        <span className={styles.country}>{testimonial.country}</span>
      </footer>
    </article>
  );
}
