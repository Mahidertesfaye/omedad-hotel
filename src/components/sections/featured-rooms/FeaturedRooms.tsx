import dynamic from "next/dynamic";
import { Section } from "@/components/common/Section";
import {
  OutlineButton,
  PageContainer,
  SectionHeader,
  Skeleton,
} from "@/components/ui";
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
        <SectionHeader
          subtitle={FEATURED_ROOMS_CONTENT.overline}
          title={FEATURED_ROOMS_CONTENT.heading}
        />

        <div className={styles.grid} aria-label="Featured room listings">
          {FEATURED_ROOMS.map((room) => (
            <FeaturedRoomCard key={room.id} room={room} />
          ))}
        </div>

        <FeaturedRoomsSlider rooms={FEATURED_ROOMS} />

        <div className={styles.cta}>
          <OutlineButton href={FEATURED_ROOMS_CONTENT.exploreMore.href} size="lg">
            {FEATURED_ROOMS_CONTENT.exploreMore.label}
          </OutlineButton>
        </div>
      </PageContainer>
    </Section>
  );
}
