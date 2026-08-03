import L from "leaflet";
import type { LocationMarkerType } from "@/types/location";

const MARKER_CONFIG: Record<
  LocationMarkerType,
  { size: [number, number]; anchor: [number, number]; className: string }
> = {
  hotel: {
    size: [44, 52],
    anchor: [22, 52],
    className: "location-marker location-marker--hotel",
  },
  attraction: {
    size: [32, 38],
    anchor: [16, 38],
    className: "location-marker location-marker--attraction",
  },
  airport: {
    size: [36, 44],
    anchor: [18, 44],
    className: "location-marker location-marker--airport",
  },
};

const MARKER_INNER: Record<LocationMarkerType, string> = {
  hotel: `<span class="location-marker__dot" aria-hidden="true"></span><span class="location-marker__label">Hotel</span>`,
  attraction: `<span class="location-marker__dot" aria-hidden="true"></span>`,
  airport: `<span class="location-marker__dot" aria-hidden="true"></span><span class="location-marker__label">Airport</span>`,
};

export function createMarkerIcon(type: LocationMarkerType): L.DivIcon {
  const config = MARKER_CONFIG[type];

  return L.divIcon({
    className: config.className,
    html: MARKER_INNER[type],
    iconSize: config.size,
    iconAnchor: config.anchor,
    popupAnchor: [0, -config.size[1] + 4],
  });
}
