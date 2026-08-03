import { AMENITIES } from "@/constants/amenities";
import { AmenityItem } from "./AmenityItem";
import styles from "./AmenitiesGrid.module.css";

export function AmenitiesGrid() {
  return (
    <div className={styles.grid} role="list" aria-label="Hotel amenities">
      {AMENITIES.map((amenity, index) => (
        <AmenityItem key={amenity.id} amenity={amenity} index={index} />
      ))}
    </div>
  );
}
