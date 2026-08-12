"use client";

import { useState } from "react";
import { Section } from "@/components/common/Section";
import { PageContainer } from "@/components/ui";
import { RoomFilters } from "@/components/rooms/RoomFilters";
import { RoomGrid } from "@/components/rooms/RoomGrid";
import {
  DEFAULT_ROOM_FILTERS,
  ROOMS,
  ROOMS_PAGE_CONTENT,
  filterRooms,
} from "@/data/rooms";
import type { RoomFiltersState } from "@/types/rooms";
import styles from "./RoomsListing.module.css";

export function RoomsListing() {
  const [filters, setFilters] = useState<RoomFiltersState>(DEFAULT_ROOM_FILTERS);
  const filteredRooms = filterRooms(ROOMS, filters);

  return (
    <Section
      variant="alt"
      padding="default"
      ariaLabel="Browse rooms and suites"
      className={styles.section}
    >
      <PageContainer>
        <p className={styles.notice}>{ROOMS_PAGE_CONTENT.notice}</p>

        <div className={styles.toolbar}>
          <RoomFilters
            filters={filters}
            onChange={setFilters}
            resultCount={filteredRooms.length}
          />
        </div>

        <RoomGrid
          rooms={filteredRooms}
          emptyMessage={ROOMS_PAGE_CONTENT.emptyMessage}
          onResetFilters={() => setFilters(DEFAULT_ROOM_FILTERS)}
        />
      </PageContainer>
    </Section>
  );
}
