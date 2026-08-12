import { CONTACT } from "@/constants/site";
import type { LocationData } from "@/types/location";

/**
 * Coordinates approximate the Airport Road / African Avenue corridor in Bole.
 * Replace with surveyed production values when available.
 */
export const LOCATION_DATA: LocationData = {
  content: {
    overline: "Location",
    heading: "Approximately 6 minutes from Bole International Airport",
    description:
      "Omedad Hotel sits on Airport Road / African Avenue in Bole — Kirkos Sub-city, W-01 — with 24-hour reception, concierge service, and convenient access to major business destinations across Addis Ababa.",
  },
  hotel: {
    id: "omedad-hotel",
    type: "hotel",
    coordinates: { lat: 8.9948, lng: 38.7872 },
    title: "Omedad Hotel",
    description: "Modern city hotel on Airport Road, Bole.",
  },
  attractions: [
    {
      id: "meskel-square",
      type: "attraction",
      coordinates: { lat: 9.0106, lng: 38.7612 },
      title: "Meskel Square",
      description: "Central plaza and gathering place for celebrations.",
      distance: "Nearby",
    },
    {
      id: "national-museum",
      type: "attraction",
      coordinates: { lat: 9.0389, lng: 38.7614 },
      title: "National Museum of Ethiopia",
      description: "Home to Lucy and centuries of Ethiopian heritage.",
      distance: "City center",
    },
    {
      id: "holy-trinity",
      type: "attraction",
      coordinates: { lat: 9.0336, lng: 38.7678 },
      title: "Holy Trinity Cathedral",
      description: "Iconic cathedral and resting place of Emperor Haile Selassie.",
      distance: "City center",
    },
    {
      id: "unity-park",
      type: "attraction",
      coordinates: { lat: 9.0319, lng: 38.7469 },
      title: "Unity Park",
      description: "Palace gardens showcasing Ethiopia's history and culture.",
      distance: "City center",
    },
  ],
  airport: {
    id: "bole-airport",
    type: "airport",
    coordinates: { lat: 8.9779, lng: 38.7993 },
    title: "Addis Ababa Bole International Airport",
    description: "ADD — primary gateway to Ethiopia and East Africa.",
    distance: "Approx. 6 minutes",
  },
  contact: {
    address: CONTACT.address,
    addressLine2: CONTACT.addressDetail,
    phone: CONTACT.phone,
    phones: CONTACT.phones,
    email: CONTACT.email,
  },
  map: {
    center: { lat: 8.99, lng: 38.79 },
    zoom: 13,
    minZoom: 11,
    maxZoom: 18,
    tileUrl: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    tileAttribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  },
};
