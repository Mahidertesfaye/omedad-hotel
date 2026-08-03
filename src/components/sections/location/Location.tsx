import { Section } from "@/components/common/Section";
import { PageContainer } from "@/components/ui";
import { LocationContent } from "./LocationContent";
import { LocationMap } from "./LocationMap";
import styles from "./Location.module.css";

export function Location() {
  return (
    <Section
      id="location"
      variant="alt"
      padding="default"
      ariaLabel="Hotel location, map, and contact details"
    >
      <PageContainer>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <LocationContent />
          </div>
          <div className={styles.media}>
            <LocationMap />
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}
