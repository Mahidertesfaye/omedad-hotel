export interface BookingSearchValues {
  checkIn: string;
  checkOut: string;
  adults: number;
  children: number;
  rooms: number;
}

export type BookingSearchVariant = "glass" | "solid";
