export type AmenityIcon =
  | "restaurant"
  | "wifi"
  | "conference"
  | "shuttle"
  | "gym"
  | "spa"
  | "parking";

export interface Amenity {
  id: string;
  title: string;
  description: string;
  icon: AmenityIcon;
}
