"use client";

import {
  Mail,
  MapPin,
  Phone,
  Plane,
  Landmark,
} from "lucide-react";
import { SectionSubtitle } from "@/components/ui/SectionSubtitle";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { useLocationMap } from "@/hooks/useLocationMap";
import styles from "./LocationContent.module.css";

export function LocationContent() {
  const { data } = useLocationMap();
  const { content, contact, airport, attractions } = data;

  return (
    <div className={styles.content}>
      <SectionSubtitle>{content.overline}</SectionSubtitle>

      <SectionTitle as="h2" className={styles.heading}>
        {content.heading}
      </SectionTitle>

      <p className={styles.description}>{content.description}</p>

      <div className={styles.contact}>
        <h3 className={styles.contactHeading}>Contact &amp; Directions</h3>

        <ul className={styles.contactList}>
          <li className={styles.contactItem}>
            <MapPin className={styles.contactIcon} strokeWidth={1.25} aria-hidden="true" />
            <div>
              <span className={styles.contactLabel}>Address</span>
              <address className={styles.contactValue}>
                {contact.address}
                {contact.addressLine2 ? (
                  <>
                    <br />
                    {contact.addressLine2}
                  </>
                ) : null}
              </address>
            </div>
          </li>

          <li className={styles.contactItem}>
            <Phone className={styles.contactIcon} strokeWidth={1.25} aria-hidden="true" />
            <div>
              <span className={styles.contactLabel}>Phone</span>
              <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className={styles.contactLink}>
                {contact.phone}
              </a>
            </div>
          </li>

          <li className={styles.contactItem}>
            <Mail className={styles.contactIcon} strokeWidth={1.25} aria-hidden="true" />
            <div>
              <span className={styles.contactLabel}>Email</span>
              <a href={`mailto:${contact.email}`} className={styles.contactLink}>
                {contact.email}
              </a>
            </div>
          </li>
        </ul>
      </div>

      <div className={styles.airport}>
        <div className={styles.airportIconWrap} aria-hidden="true">
          <Plane className={styles.airportIcon} strokeWidth={1.25} />
        </div>
        <div>
          <h3 className={styles.airportTitle}>{airport.title}</h3>
          <p className={styles.airportDescription}>{airport.description}</p>
          {airport.distance ? (
            <p className={styles.airportDistance}>{airport.distance} from hotel</p>
          ) : null}
        </div>
      </div>

      <div className={styles.attractions}>
        <h3 className={styles.attractionsHeading}>Nearby Attractions</h3>

        <ul className={styles.attractionsList}>
          {attractions.map((attraction) => (
            <li key={attraction.id} className={styles.attractionItem}>
              <div className={styles.attractionIconWrap} aria-hidden="true">
                <Landmark className={styles.attractionIcon} strokeWidth={1.25} />
              </div>
              <div className={styles.attractionCopy}>
                <span className={styles.attractionTitle}>{attraction.title}</span>
                {attraction.distance ? (
                  <span className={styles.attractionDistance}>{attraction.distance}</span>
                ) : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
