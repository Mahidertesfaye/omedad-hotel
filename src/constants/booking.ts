import type { BookingPartner } from "@/types/booking";

export const BOOKING_CONTENT = {
  overline: "Reservations",
  heading: "Check availability for your stay",
  description:
    "Select your dates and preferences below. Our team will confirm availability and respond promptly — rates are provided upon request.",
  partnersLabel: "Or reserve through",
} as const;

/**
 * Third-party reservation partners shown on the live Omedad site.
 * Replace hrefs with official property deep links when available.
 */
export const BOOKING_PARTNERS: readonly BookingPartner[] = [
  {
    id: "booking",
    label: "Booking.com",
    href: "https://www.booking.com/hotel/et/omedad.html",
    ariaLabel: "Reserve Omedad Hotel on Booking.com",
  },
  {
    id: "airbnb",
    label: "Airbnb",
    href: "https://www.airbnb.com/s/Omedad-Hotel--Addis-Ababa/homes",
    ariaLabel: "Find Omedad Hotel on Airbnb",
  },
] as const;

export const BOOKING_LABELS = {
  checkIn: "Check In",
  checkOut: "Check Out",
  adults: "Adults",
  children: "Children",
  rooms: "Rooms",
  submit: "Check Availability",
} as const;

export const BOOKING_DEFAULTS = {
  adults: 2,
  children: 0,
  rooms: 1,
} as const;

export const BOOKING_LIMITS = {
  adults: { min: 1, max: 6 },
  children: { min: 0, max: 4 },
  rooms: { min: 1, max: 4 },
} as const;
