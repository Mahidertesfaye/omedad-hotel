export const BOOKING_CONTENT = {
  overline: "Reservations",
  heading: "Plan your stay with us",
  description:
    "Select your dates and preferences below. Our team will confirm availability and respond promptly.",
} as const;

export const BOOKING_LABELS = {
  checkIn: "Check In",
  checkOut: "Check Out",
  adults: "Adults",
  children: "Children",
  rooms: "Rooms",
  submit: "Search Availability",
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
