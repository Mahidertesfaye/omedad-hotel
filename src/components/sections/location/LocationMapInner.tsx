"use client";

import "leaflet/dist/leaflet.css";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useLocationMap } from "@/hooks/useLocationMap";
import type { LocationMarker } from "@/types/location";
import { createMarkerIcon } from "./createMarkerIcon";
import styles from "./LocationMap.module.css";

function MapMarker({ marker }: { marker: LocationMarker }) {
  const position: [number, number] = [
    marker.coordinates.lat,
    marker.coordinates.lng,
  ];

  return (
    <Marker position={position} icon={createMarkerIcon(marker.type)}>
      <Popup>
        <div className={styles.popup}>
          <p className={styles.popupTitle}>{marker.title}</p>
          {marker.description ? (
            <p className={styles.popupDescription}>{marker.description}</p>
          ) : null}
          {marker.distance ? (
            <p className={styles.popupDistance}>{marker.distance} from hotel</p>
          ) : null}
        </div>
      </Popup>
    </Marker>
  );
}

export function LocationMapInner() {
  const { data, isLoading, error } = useLocationMap();

  if (error) {
    return (
      <div className={styles.fallback} role="alert">
        Unable to load the map. Please try again later.
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={styles.fallback} aria-busy="true" aria-label="Loading map">
        Loading map…
      </div>
    );
  }

  const { map, hotel, attractions, airport } = data;
  const center: [number, number] = [map.center.lat, map.center.lng];
  const markers = [hotel, ...attractions, airport];

  return (
    <div className={styles.wrapper}>
      <MapContainer
        center={center}
        zoom={map.zoom}
        minZoom={map.minZoom}
        maxZoom={map.maxZoom}
        className={styles.map}
        scrollWheelZoom={false}
        aria-label="Map showing Omedad Hotel and nearby points of interest"
      >
        <TileLayer url={map.tileUrl} attribution={map.tileAttribution} />
        {markers.map((marker) => (
          <MapMarker key={marker.id} marker={marker} />
        ))}
      </MapContainer>
    </div>
  );
}
