import dynamic from "next/dynamic";
import { Section } from "@/components/common/Section";
import { PageContainer, SectionHeader, Skeleton } from "@/components/ui";
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
        <SectionHeader
          subtitle={GALLERY_CONTENT.overline}
          title={GALLERY_CONTENT.heading}
          lead={GALLERY_CONTENT.description}
        />

        <GalleryGrid />
      </PageContainer>
    </Section>
  );
}
