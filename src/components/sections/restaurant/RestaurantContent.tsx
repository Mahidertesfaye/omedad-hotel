import { PrimaryButton } from "@/components/ui";
import { SectionSubtitle } from "@/components/ui/SectionSubtitle";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { RESTAURANT_CONTENT } from "@/constants/restaurant";
import styles from "./RestaurantContent.module.css";

export function RestaurantContent() {
  return (
    <div className={styles.content}>
      <SectionSubtitle>{RESTAURANT_CONTENT.overline}</SectionSubtitle>

      <SectionTitle as="h2" className={styles.heading}>
        {RESTAURANT_CONTENT.heading}
      </SectionTitle>

      <div className={styles.description}>
        {RESTAURANT_CONTENT.description.map((paragraph) => (
          <p key={paragraph.slice(0, 32)} className={styles.paragraph}>
            {paragraph}
          </p>
        ))}
      </div>

      <div className={styles.cta}>
        <PrimaryButton href={RESTAURANT_CONTENT.cta.href} size="lg">
          {RESTAURANT_CONTENT.cta.label}
        </PrimaryButton>
      </div>
    </div>
  );
}
