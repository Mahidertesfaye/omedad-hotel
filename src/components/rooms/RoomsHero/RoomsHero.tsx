"use client";

import { PageHero } from "@/components/ui/PageHero";
import { ROOMS_PAGE_CONTENT } from "@/data/rooms";

export function RoomsHero() {
  return (
    <PageHero
      title={ROOMS_PAGE_CONTENT.title}
      description={ROOMS_PAGE_CONTENT.description}
      breadcrumb={ROOMS_PAGE_CONTENT.breadcrumb}
      imageSrc="/images/rooms/placeholder.svg"
      headingId="rooms-hero-heading"
      pattern="geometric"
    />
  );
}
