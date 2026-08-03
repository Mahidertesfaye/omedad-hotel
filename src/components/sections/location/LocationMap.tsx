"use client";

import dynamic from "next/dynamic";
import { MapSkeleton } from "@/components/ui/Skeleton/MapSkeleton";
import styles from "./LocationMap.module.css";

const LocationMapInner = dynamic(
  () =>
    import("./LocationMapInner").then((mod) => mod.LocationMapInner),
  {
    ssr: false,
    loading: () => <MapSkeleton />,
  },
);

export function LocationMap() {
  return <LocationMapInner />;
}
