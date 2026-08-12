import { PrimaryButton } from "@/components/ui";
import { SectionSubtitle } from "@/components/ui/SectionSubtitle";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ABOUT_CONTENT } from "@/constants/about";
import { AboutStats } from "./AboutStats";
import styles from "./AboutContent.module.css";

export function AboutContent() {
  return (
    <div className={styles.content}>
      <SectionSubtitle>{ABOUT_CONTENT.overline}</SectionSubtitle>

      <SectionTitle as="h2" className={styles.heading}>
        {ABOUT_CONTENT.heading}
      </SectionTitle>

      <div className={styles.description}>
        {ABOUT_CONTENT.description.map((paragraph, index) => (
          <p
            key={paragraph.slice(0, 24)}
            className={
              index === 0 ? `${styles.paragraph} ${styles.lead}` : styles.paragraph
            }
          >
            {paragraph}
          </p>
        ))}
      </div>

      <AboutStats />

      <div className={styles.cta}>
        <PrimaryButton href={ABOUT_CONTENT.cta.href} size="lg">
          {ABOUT_CONTENT.cta.label}
        </PrimaryButton>
      </div>
    </div>
  );
}
