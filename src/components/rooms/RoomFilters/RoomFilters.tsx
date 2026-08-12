"use client";

import {
  BED_TYPE_OPTIONS,
  GUEST_OPTIONS,
  PRICE_RANGE_OPTIONS,
  ROOM_TYPE_OPTIONS,
} from "@/data/rooms";
import { Select } from "@/components/ui/Select";
import type { BedType, RoomFiltersState, RoomType } from "@/types/rooms";
import { cn } from "@/utils";
import styles from "./RoomFilters.module.css";

interface RoomFiltersProps {
  filters: RoomFiltersState;
  onChange: (filters: RoomFiltersState) => void;
  resultCount: number;
  className?: string;
}

export function RoomFilters({
  filters,
  onChange,
  resultCount,
  className,
}: RoomFiltersProps) {
  return (
    <form
      className={cn(styles.filters, className)}
      aria-label="Filter rooms"
      onSubmit={(event) => event.preventDefault()}
    >
      <div className={styles.fields}>
        <Select
          label="Room type"
          variant="boxed"
          value={filters.roomType}
          options={ROOM_TYPE_OPTIONS.map((option) => ({
            value: option.value,
            label: option.label,
          }))}
          onChange={(value) =>
            onChange({
              ...filters,
              roomType: value as RoomType | "all",
            })
          }
        />

        <Select
          label="Guests"
          variant="boxed"
          value={String(filters.guests)}
          options={GUEST_OPTIONS.map((option) => ({
            value: String(option.value),
            label: option.label,
          }))}
          onChange={(value) =>
            onChange({
              ...filters,
              guests: value === "all" ? "all" : Number(value),
            })
          }
        />

        <Select
          label="Bed type"
          variant="boxed"
          value={filters.bedType}
          options={BED_TYPE_OPTIONS.map((option) => ({
            value: option.value,
            label: option.label,
          }))}
          onChange={(value) =>
            onChange({
              ...filters,
              bedType: value as BedType | "all",
            })
          }
        />

        <Select
          label="Price range"
          variant="boxed"
          value={filters.priceRange}
          options={PRICE_RANGE_OPTIONS.map((option) => ({
            value: option.value,
            label: option.label,
          }))}
          onChange={(value) =>
            onChange({
              ...filters,
              priceRange: value as RoomFiltersState["priceRange"],
            })
          }
        />
      </div>

      <p className={styles.count} aria-live="polite">
        {resultCount} {resultCount === 1 ? "room" : "rooms"}
      </p>
    </form>
  );
}
