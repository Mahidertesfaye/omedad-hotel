import { ABOUT_MEDIA } from "@/constants/about";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import styles from "./AboutImage.module.css";

export function AboutImage() {
  return (
    <figure className={styles.figure}>
      <OptimizedImage
        src={ABOUT_MEDIA.src}
        alt={ABOUT_MEDIA.alt}
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className={styles.image}
      />
      <figcaption className="sr-only">{ABOUT_MEDIA.alt}</figcaption>
    </figure>
  );
}
