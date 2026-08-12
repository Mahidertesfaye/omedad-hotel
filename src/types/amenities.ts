export type AmenityIcon =
  | "restaurant"
  | "bar"
  | "conference"
  | "gym"
  | "spa"
  | "reception"
  | "concierge";

export interface Amenity {
  id: string;
  title: string;
  description: string;
  icon: AmenityIcon;
}
