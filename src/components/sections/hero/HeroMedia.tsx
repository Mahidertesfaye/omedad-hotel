import type { HeroMediaConfig } from "@/types/hero";
import { OptimizedImage } from "@/components/ui/OptimizedImage";
import styles from "./HeroMedia.module.css";

interface HeroMediaProps {
  media: HeroMediaConfig;
  mediaRef?: React.RefObject<HTMLDivElement | null>;
}

export function HeroMedia({ media, mediaRef }: HeroMediaProps) {
  return (
    <div ref={mediaRef} className={styles.media}>
      {media.type === "video" ? (
        <video
          className={styles.asset}
          autoPlay
          muted
          loop
          playsInline
          poster={media.poster}
        >
          <source src={media.src} type="video/mp4" />
        </video>
      ) : (
        <OptimizedImage
          src={media.src}
          alt={media.alt}
          fill
          priority
          sizes="100vw"
          className={styles.asset}
        />
      )}
    </div>
  );
}
