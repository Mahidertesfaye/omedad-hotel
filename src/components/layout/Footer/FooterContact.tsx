import { Mail, MapPin, Phone } from "lucide-react";
import { FOOTER_CONTACT, FOOTER_CONTENT } from "@/constants/footer";
import styles from "./FooterContact.module.css";

export function FooterContact() {
  return (
    <div className={styles.contact}>
      <h2 className={styles.heading}>{FOOTER_CONTENT.contactHeading}</h2>

      <ul className={styles.list}>
        <li className={styles.item}>
          <MapPin className={styles.icon} strokeWidth={1.25} aria-hidden="true" />
          <address className={styles.value}>{FOOTER_CONTACT.address}</address>
        </li>

        <li className={styles.item}>
          <Phone className={styles.icon} strokeWidth={1.25} aria-hidden="true" />
          <a
            href={`tel:${FOOTER_CONTACT.phone.replace(/\s/g, "")}`}
            className={styles.link}
          >
            {FOOTER_CONTACT.phone}
          </a>
        </li>

        <li className={styles.item}>
          <Mail className={styles.icon} strokeWidth={1.25} aria-hidden="true" />
          <a href={`mailto:${FOOTER_CONTACT.email}`} className={styles.link}>
            {FOOTER_CONTACT.email}
          </a>
        </li>
      </ul>
    </div>
  );
}
