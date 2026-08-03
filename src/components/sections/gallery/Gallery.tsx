import dynamic from "next/dynamic";
import { Section } from "@/components/common/Section";
import { PageContainer, Skeleton } from "@/components/ui";
import { SectionSubtitle } from "@/components/ui/SectionSubtitle";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { GALLERY_CONTENT } from "@/constants/gallery";
import styles from "./Gallery.module.css";

const GalleryGrid = dynamic(
  () => import("./GalleryGrid").then((mod) => mod.GalleryGrid),
  {
    loading: () => (
      <Skeleton className={styles.gridSkeleton} label="Loading gallery" />
    ),
  },
);

export function Gallery() {
  return (
    <Section
      id="gallery"
      variant="alt"
      padding="default"
      ariaLabel="Photo gallery of Omedad Hotel"
    >
      <PageContainer>
        <header className={styles.header}>
          <SectionSubtitle align="center">
            {GALLERY_CONTENT.overline}
          </SectionSubtitle>

          <SectionTitle as="h2" align="center" className={styles.heading}>
            {GALLERY_CONTENT.heading}
          </SectionTitle>

          <p className={styles.lead}>{GALLERY_CONTENT.description}</p>
        </header>

        <GalleryGrid />
      </PageContainer>
    </Section>
  );
}
