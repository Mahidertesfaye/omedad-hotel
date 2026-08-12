export type LocationMarkerType = "hotel" | "attraction" | "airport";

export interface Coordinates {
  lat: number;
  lng: number;
}

export interface LocationMarker {
  id: string;
  type: LocationMarkerType;
  coordinates: Coordinates;
  title: string;
  description?: string;
  /** Human-readable distance from the hotel, e.g. "1.2 km" */
  distance?: string;
}

export interface LocationPhone {
  display: string;
  href: string;
}

export interface LocationContact {
  address: string;
  addressLine2?: string;
  phone: string;
  phones?: readonly LocationPhone[];
  email: string;
}

export interface LocationContent {
  overline: string;
  heading: string;
  description: string;
}

export interface LocationMapConfig {
  center: Coordinates;
  zoom: number;
  minZoom: number;
  maxZoom: number;
  tileUrl: string;
  tileAttribution: string;
}

/** Shape returned by a future /api/location endpoint */
export interface LocationData {
  content: LocationContent;
  hotel: LocationMarker;
  attractions: LocationMarker[];
  airport: LocationMarker;
  contact: LocationContact;
  map: LocationMapConfig;
}
