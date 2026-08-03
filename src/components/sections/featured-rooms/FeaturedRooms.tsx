import dynamic from "next/dynamic";
import { Section } from "@/components/common/Section";
import { PageContainer, Skeleton } from "@/components/ui";
import { SectionSubtitle } from "@/components/ui/SectionSubtitle";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { FEATURED_ROOMS, FEATURED_ROOMS_CONTENT } from "@/constants/rooms";
import { FeaturedRoomCard } from "./FeaturedRoomCard";
import styles from "./FeaturedRooms.module.css";

const FeaturedRoomsSlider = dynamic(
  () =>
    import("./FeaturedRoomsSlider").then((mod) => mod.FeaturedRoomsSlider),
  {
    loading: () => (
      <Skeleton className={styles.sliderSkeleton} label="Loading rooms carousel" />
    ),
  },
);

export function FeaturedRooms() {
  return (
    <Section
      id="rooms"
      variant="default"
      padding="default"
      ariaLabel="Featured rooms at Omedad Hotel"
    >
      <PageContainer>
        <header className={styles.header}>
          <SectionSubtitle align="center">
            {FEATURED_ROOMS_CONTENT.overline}
          </SectionSubtitle>

          <SectionTitle as="h2" align="center" className={styles.heading}>
            {FEATURED_ROOMS_CONTENT.heading}
          </SectionTitle>
        </header>

        <div className={styles.grid} aria-label="Featured room listings">
          {FEATURED_ROOMS.map((room) => (
            <FeaturedRoomCard key={room.id} room={room} />
          ))}
        </div>

        <FeaturedRoomsSlider rooms={FEATURED_ROOMS} />
      </PageContainer>
    </Section>
  );
}
