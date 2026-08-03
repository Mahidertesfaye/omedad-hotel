import { HERO_OVERLAY } from "@/constants/hero";
import styles from "./HeroOverlay.module.css";

interface HeroOverlayProps {
  overlayRef?: React.RefObject<HTMLDivElement | null>;
}

export function HeroOverlay({ overlayRef }: HeroOverlayProps) {
  return (
    <div
      ref={overlayRef}
      className={styles.overlay}
      style={
        {
          "--hero-overlay-color": HERO_OVERLAY.color,
          "--hero-overlay-opacity": HERO_OVERLAY.opacity,
        } as React.CSSProperties
      }
      aria-hidden="true"
    />
  );
}
