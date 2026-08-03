"use client";

import { useId, type RefObject } from "react";
import { PrimaryButton } from "@/components/ui";
import {
  BOOKING_DEFAULTS,
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

function buildOptions(min: number, max: number): number[] {
  return Array.from({ length: max - min + 1 }, (_, index) => min + index);
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
    setCheckIn,
    setCheckOut,
    setAdults,
    setChildren,
    setRooms,
    handleSubmit,
  } = useBookingSearch(onSubmit);

  const inputClassName = cn(styles.control, styles.input);
  const selectClassName = cn(styles.control, styles.select);

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
            onChange={(event) => setCheckOut(event.target.value)}
            required
          />
        </BookingSearchField>

        <div className={styles.divider} aria-hidden="true" />

        <BookingSearchField
          id={`${idPrefix}-adults`}
          label={BOOKING_LABELS.adults}
        >
          <select
            id={`${idPrefix}-adults`}
            className={selectClassName}
            defaultValue={BOOKING_DEFAULTS.adults}
            onChange={(event) => setAdults(Number(event.target.value))}
          >
            {buildOptions(
              BOOKING_LIMITS.adults.min,
              BOOKING_LIMITS.adults.max,
            ).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </BookingSearchField>

        <div className={styles.divider} aria-hidden="true" />

        <BookingSearchField
          id={`${idPrefix}-children`}
          label={BOOKING_LABELS.children}
        >
          <select
            id={`${idPrefix}-children`}
            className={selectClassName}
            defaultValue={BOOKING_DEFAULTS.children}
            onChange={(event) => setChildren(Number(event.target.value))}
          >
            {buildOptions(
              BOOKING_LIMITS.children.min,
              BOOKING_LIMITS.children.max,
            ).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </BookingSearchField>

        <div className={styles.divider} aria-hidden="true" />

        <BookingSearchField
          id={`${idPrefix}-rooms`}
          label={BOOKING_LABELS.rooms}
        >
          <select
            id={`${idPrefix}-rooms`}
            className={selectClassName}
            defaultValue={BOOKING_DEFAULTS.rooms}
            onChange={(event) => setRooms(Number(event.target.value))}
          >
            {buildOptions(
              BOOKING_LIMITS.rooms.min,
              BOOKING_LIMITS.rooms.max,
            ).map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </BookingSearchField>

        <PrimaryButton type="submit" size="lg" className={styles.submit}>
          {BOOKING_LABELS.submit}
        </PrimaryButton>
      </form>
    </div>
  );
}
