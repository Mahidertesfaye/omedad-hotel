import { Section } from "@/components/common/Section";
import { PageContainer } from "@/components/ui";
import { RestaurantContent } from "./RestaurantContent";
import { RestaurantMedia } from "./RestaurantMedia";
import styles from "./Restaurant.module.css";

export function Restaurant() {
  return (
    <Section
      id="restaurant"
      variant="default"
      padding="default"
      ariaLabel="Restaurant and fine dining at Omedad Hotel"
    >
      <PageContainer>
        <div className={styles.grid}>
          <div className={styles.copy}>
            <RestaurantContent />
          </div>
          <div className={styles.media}>
            <RestaurantMedia />
          </div>
        </div>
      </PageContainer>
    </Section>
  );
}
