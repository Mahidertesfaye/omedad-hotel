import { PrimaryButton } from "@/components/ui";
import { HERO_CONTENT } from "@/constants/hero";
import styles from "./HeroContent.module.css";

interface HeroContentProps {
  contentRefs?: {
    overline: React.RefObject<HTMLParagraphElement | null>;
    headline: React.RefObject<HTMLHeadingElement | null>;
    subtitle: React.RefObject<HTMLParagraphElement | null>;
    cta: React.RefObject<HTMLDivElement | null>;
  };
}

export function HeroContent({ contentRefs }: HeroContentProps) {
  return (
    <div className={styles.content}>
      <p ref={contentRefs?.overline} className={styles.overline}>
        {HERO_CONTENT.overline}
      </p>

      <h1 ref={contentRefs?.headline} className={styles.headline}>
        {HERO_CONTENT.headline}
      </h1>

      <p ref={contentRefs?.subtitle} className={styles.subtitle}>
        {HERO_CONTENT.subtitle}
      </p>

      <div ref={contentRefs?.cta} className={styles.cta}>
        <PrimaryButton href={HERO_CONTENT.cta.href} size="lg" inverse>
          {HERO_CONTENT.cta.label}
        </PrimaryButton>
      </div>
    </div>
  );
}
