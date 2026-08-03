"use client";

import { useCallback, useState, type FormEvent } from "react";
import { BOOKING_DEFAULTS } from "@/constants/booking";
import type { BookingSearchValues } from "@/types/booking";

interface UseBookingSearchReturn {
  values: BookingSearchValues;
  setCheckIn: (value: string) => void;
  setCheckOut: (value: string) => void;
  setAdults: (value: number) => void;
  setChildren: (value: number) => void;
  setRooms: (value: number) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

export function useBookingSearch(
  onSubmit?: (values: BookingSearchValues) => void,
): UseBookingSearchReturn {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState<number>(BOOKING_DEFAULTS.adults);
  const [children, setChildren] = useState<number>(BOOKING_DEFAULTS.children);
  const [rooms, setRooms] = useState<number>(BOOKING_DEFAULTS.rooms);

  const handleSubmit = useCallback(
    (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      onSubmit?.({ checkIn, checkOut, adults, children, rooms });
    },
    [checkIn, checkOut, adults, children, rooms, onSubmit],
  );

  return {
    values: { checkIn, checkOut, adults, children, rooms },
    setCheckIn,
    setCheckOut,
    setAdults,
    setChildren,
    setRooms,
    handleSubmit,
  };
}
