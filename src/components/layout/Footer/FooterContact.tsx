import { Mail, MapPin, Phone } from "lucide-react";
import { FOOTER_CONTACT, FOOTER_CONTENT } from "@/constants/footer";
import styles from "./FooterContact.module.css";

export function FooterContact() {
  const phones = FOOTER_CONTACT.phones;

  return (
    <div className={styles.contact}>
      <h2 className={styles.heading}>{FOOTER_CONTENT.contactHeading}</h2>

      <ul className={styles.list}>
        <li className={styles.item}>
          <MapPin className={styles.icon} strokeWidth={1.25} aria-hidden="true" />
          <address className={styles.value}>
            {FOOTER_CONTACT.address}
            {FOOTER_CONTACT.addressDetail ? (
              <>
                <br />
                {FOOTER_CONTACT.addressDetail}
              </>
            ) : null}
          </address>
        </li>

        <li className={styles.item}>
          <Phone className={styles.icon} strokeWidth={1.25} aria-hidden="true" />
          <div className={styles.phoneStack}>
            {phones.map((phone) => (
              <a key={phone.href} href={phone.href} className={styles.link}>
                {phone.display}
              </a>
            ))}
          </div>
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
