import dynamic from "next/dynamic";
import { Section } from "@/components/common/Section";
import { PageContainer, Skeleton } from "@/components/ui";
import { SectionSubtitle } from "@/components/ui/SectionSubtitle";
import { SectionTitle } from "@/components/ui/SectionTitle";
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
        <header className={styles.header}>
          <SectionSubtitle align="center">
            {TESTIMONIALS_CONTENT.overline}
          </SectionSubtitle>

          <SectionTitle as="h2" align="center" className={styles.heading}>
            {TESTIMONIALS_CONTENT.heading}
          </SectionTitle>

          <p className={styles.lead}>{TESTIMONIALS_CONTENT.description}</p>
        </header>

        <TestimonialsCarousel />
      </PageContainer>
    </Section>
  );
}
