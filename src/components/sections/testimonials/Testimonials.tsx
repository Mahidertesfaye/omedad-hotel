import dynamic from "next/dynamic";
import { Section } from "@/components/common/Section";
import { PageContainer, SectionHeader, Skeleton } from "@/components/ui";
import { TESTIMONIALS_CONTENT } from "@/constants/testimonials";
import styles from "./Testimonials.module.css";

const TestimonialsCarousel = dynamic(
  () =>
    import("./TestimonialsCarousel").then((mod) => mod.TestimonialsCarousel),
  {
    loading: () => (
      <Skeleton
        className={styles.carouselSkeleton}
        label="Loading testimonials carousel"
      />
    ),
  },
);

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
