"use client";

import { useId, type RefObject } from "react";
import { PrimaryButton, Select } from "@/components/ui";
import {
  BOOKING_LABELS,
  BOOKING_LIMITS,
} from "@/constants/booking";
import { useBookingSearch } from "@/hooks/useBookingSearch";
import type { BookingSearchValues, BookingSearchVariant } from "@/types/booking";
import { cn } from "@/utils";
import { BookingSearchField } from "./BookingSearchField";
import styles from "./BookingSearch.module.css";

interface BookingSearchProps {
  className?: string;
  containerRef?: RefObject<HTMLDivElement | null>;
  variant?: BookingSearchVariant;
  animate?: boolean;
  onSubmit?: (values: BookingSearchValues) => void;
}

function buildOptions(min: number, max: number) {
  return Array.from({ length: max - min + 1 }, (_, index) => {
    const value = min + index;
    return { value: String(value), label: String(value) };
  });
}

export function BookingSearch({
  className,
  containerRef,
  variant = "glass",
  animate = true,
  onSubmit,
}: BookingSearchProps) {
  const idPrefix = useId().replace(/:/g, "");
  const {
    values,
    setCheckIn,
    setCheckOut,
    setAdults,
    setChildren,
    setRooms,
    handleSubmit,
  } = useBookingSearch(onSubmit);

  const inputClassName = cn(styles.control, styles.input);

  return (
    <div
      ref={containerRef}
      className={cn(
        styles.wrapper,
        styles[variant],
        animate && styles.animate,
        className,
      )}
    >
      <form
        className={styles.form}
        onSubmit={handleSubmit}
        aria-label="Booking search"
      >
        <BookingSearchField
          id={`${idPrefix}-check-in`}
          label={BOOKING_LABELS.checkIn}
        >
          <input
            id={`${idPrefix}-check-in`}
            type="date"
            className={inputClassName}
            value={values.checkIn}
            onChange={(event) => setCheckIn(event.target.value)}
            required
          />
        </BookingSearchField>

        <div className={styles.divider} aria-hidden="true" />

        <BookingSearchField
          id={`${idPrefix}-check-out`}
          label={BOOKING_LABELS.checkOut}
        >
          <input
            id={`${idPrefix}-check-out`}
            type="date"
            className={inputClassName}
            value={values.checkOut}
            onChange={(event) => setCheckOut(event.target.value)}
            required
          />
        </BookingSearchField>

        <div className={styles.divider} aria-hidden="true" />

        <BookingSearchField
          id={`${idPrefix}-adults`}
          label={BOOKING_LABELS.adults}
        >
          <Select
            id={`${idPrefix}-adults`}
            variant="ghost"
            value={String(values.adults)}
            options={buildOptions(
              BOOKING_LIMITS.adults.min,
              BOOKING_LIMITS.adults.max,
            )}
            onChange={(value) => setAdults(Number(value))}
          />
        </BookingSearchField>

        <div className={styles.divider} aria-hidden="true" />

        <BookingSearchField
          id={`${idPrefix}-children`}
          label={BOOKING_LABELS.children}
        >
          <Select
            id={`${idPrefix}-children`}
            variant="ghost"
            value={String(values.children)}
            options={buildOptions(
              BOOKING_LIMITS.children.min,
              BOOKING_LIMITS.children.max,
            )}
            onChange={(value) => setChildren(Number(value))}
          />
        </BookingSearchField>

        <div className={styles.divider} aria-hidden="true" />

        <BookingSearchField
          id={`${idPrefix}-rooms`}
          label={BOOKING_LABELS.rooms}
        >
          <Select
            id={`${idPrefix}-rooms`}
            variant="ghost"
            value={String(values.rooms)}
            options={buildOptions(
              BOOKING_LIMITS.rooms.min,
              BOOKING_LIMITS.rooms.max,
            )}
            onChange={(value) => setRooms(Number(value))}
          />
        </BookingSearchField>

        <PrimaryButton type="submit" size="lg" className={styles.submit}>
          {BOOKING_LABELS.submit}
        </PrimaryButton>
      </form>
    </div>
  );
}
