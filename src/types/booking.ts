export interface BookingSearchValues {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  rooms: number;
}

export type BookingSearchVariant = "glass" | "solid";

export type BookingPartnerId = "booking" | "airbnb";

export interface BookingPartner {
  id: BookingPartnerId;
  label: string;
  href: string;
  ariaLabel: string;
}
