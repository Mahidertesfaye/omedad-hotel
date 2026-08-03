import { CONTACT } from "@/constants/site";
import type { LocationData } from "@/types/location";

/**
 * Placeholder coordinates centered on Bole, Addis Ababa.
 * Replace with production values or fetch via useLocationMap when API is ready.
 */
export const LOCATION_DATA: LocationData = {
  content: {
    overline: "Location",
    heading: "In the heart of Addis Ababa, moments from the city's finest",
    description:
      "Omedad Hotel sits at the crossroads of culture and convenience — surrounded by historic landmarks, vibrant markets, and seamless connections to Addis Ababa Bole International Airport.",
  },
  hotel: {
    id: "omedad-hotel",
    type: "hotel",
    coordinates: { lat: 9.0054, lng: 38.7636 },
    title: "Omedad Hotel",
    description: "Your destination for refined hospitality in Addis Ababa.",
  },
  attractions: [
    {
      id: "national-museum",
      type: "attraction",
      coordinates: { lat: 9.0389, lng: 38.7614 },
      title: "National Museum of Ethiopia",
      description: "Home to Lucy and centuries of Ethiopian heritage.",
      distance: "3.8 km",
    },
    {
      id: "holy-trinity",
      type: "attraction",
      coordinates: { lat: 9.0336, lng: 38.7678 },
      title: "Holy Trinity Cathedral",
      description: "Iconic cathedral and final resting place of Emperor Haile Selassie.",
      distance: "3.2 km",
    },
    {
      id: "meskel-square",
      type: "attraction",
      coordinates: { lat: 9.0106, lng: 38.7612 },
      title: "Meskel Square",
      description: "Central plaza and gathering place for celebrations.",
      distance: "1.4 km",
    },
    {
      id: "unity-park",
      type: "attraction",
      coordinates: { lat: 9.0319, lng: 38.7469 },
      title: "Unity Park",
      description: "Palace gardens showcasing Ethiopia's history and culture.",
      distance: "2.6 km",
    },
  ],
  airport: {
    id: "bole-airport",
    type: "airport",
    coordinates: { lat: 8.9779, lng: 38.7993 },
    title: "Addis Ababa Bole International Airport",
    description: "ADD — primary gateway to Ethiopia and East Africa.",
    distance: "6.5 km",
  },
  contact: {
    address: CONTACT.address,
    addressLine2: "Kirkos Sub-City, 1000",
    phone: CONTACT.phone,
    email: CONTACT.email,
  },
  map: {
    center: { lat: 9.02, lng: 38.76 },
    zoom: 13,
    minZoom: 11,
    maxZoom: 18,
    tileUrl: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
    tileAttribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
  },
};
