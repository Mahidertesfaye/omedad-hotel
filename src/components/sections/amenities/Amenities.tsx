import { Section } from "@/components/common/Section";
import { PageContainer, SectionHeader } from "@/components/ui";
import { AMENITIES_CONTENT } from "@/constants/amenities";
import { AmenitiesGrid } from "./AmenitiesGrid";

export function Amenities() {
  return (
    <Section
      id="amenities"
      variant="alt"
      padding="default"
      ariaLabel="Hotel amenities and services"
    >
      <PageContainer>
        <SectionHeader
          subtitle={AMENITIES_CONTENT.overline}
          title={AMENITIES_CONTENT.heading}
          lead={AMENITIES_CONTENT.description}
        />

        <AmenitiesGrid />
      </PageContainer>
    </Section>
  );
}
