import { Section } from "@/components/common/Section";
import { PageContainer, SectionHeader } from "@/components/ui";
import { TESTIMONIALS_CONTENT } from "@/constants/testimonials";
import { TestimonialsCarousel } from "./TestimonialsCarousel";

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      variant="default"
      padding="default"
      ariaLabel="Guest testimonials"
    >
      <PageContainer>
        <SectionHeader
          subtitle={TESTIMONIALS_CONTENT.overline}
          title={TESTIMONIALS_CONTENT.heading}
          lead={TESTIMONIALS_CONTENT.description}
        />

        <TestimonialsCarousel />
      </PageContainer>
    </Section>
  );
}
