import { Section } from "@/components/common/Section";
import { PageContainer } from "@/components/ui";
import { SectionSubtitle } from "@/components/ui/SectionSubtitle";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { AMENITIES_CONTENT } from "@/constants/amenities";
import { AmenitiesGrid } from "./AmenitiesGrid";
import styles from "./Amenities.module.css";

export function Amenities() {
  return (
    <Section
      id="amenities"
      variant="alt"
      padding="default"
      ariaLabel="Hotel amenities and services"
    >
      <PageContainer>
        <header className={styles.header}>
          <SectionSubtitle align="center">
            {AMENITIES_CONTENT.overline}
          </SectionSubtitle>

          <SectionTitle as="h2" align="center" className={styles.heading}>
            {AMENITIES_CONTENT.heading}
          </SectionTitle>

          <p className={styles.lead}>{AMENITIES_CONTENT.description}</p>
        </header>

        <AmenitiesGrid />
      </PageContainer>
    </Section>
  );
}
