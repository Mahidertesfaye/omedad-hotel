import { Section } from "@/components/common/Section";
import { PageContainer } from "@/components/ui";
import { AboutContent } from "./AboutContent";
import { AboutImage } from "./AboutImage";
import styles from "./About.module.css";

export function About() {
  return (
    <Section id="about" variant="alt" padding="default" ariaLabel="About Omedad Hotel">
      <PageContainer>
        <div className={styles.grid}>
          <div className={styles.media}>
            <AboutImage />
          </div>
          <div className={styles.copy}>
            <AboutContent />
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}
