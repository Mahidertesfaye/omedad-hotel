"use client";

import { useMemo } from "react";
import { LOCATION_DATA } from "@/constants/location";
import type { LocationData } from "@/types/location";

export interface UseLocationMapResult {
  data: LocationData;
  isLoading: boolean;
  error: Error | null;
}

/**
 * Provides location map data. Currently returns static placeholder content;
 * swap the implementation for an API fetch when the backend is ready.
 *
 * @example
 * // Future integration:
 * // const response = await fetch("/api/location");
 * // return response.json() as LocationData;
 */
export function useLocationMap(): UseLocationMapResult {
  const data = useMemo(() => LOCATION_DATA, []);

  return {
    data,
    isLoading: false,
    error: null,
  };
}
