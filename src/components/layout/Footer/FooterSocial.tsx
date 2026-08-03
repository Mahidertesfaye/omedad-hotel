import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FOOTER_CONTENT, FOOTER_SOCIAL_LINKS } from "@/constants/footer";
import type { SocialPlatform } from "@/types/footer";
import styles from "./FooterSocial.module.css";

const SOCIAL_ICONS: Record<SocialPlatform, typeof FaInstagram> = {
  instagram: FaInstagram,
  facebook: FaFacebook,
  twitter: FaXTwitter,
};

export function FooterSocial() {
  return (
    <div className={styles.social}>
      <h2 className={styles.heading}>{FOOTER_CONTENT.socialHeading}</h2>

      <ul className={styles.list}>
        {FOOTER_SOCIAL_LINKS.map((social) => {
          const Icon = SOCIAL_ICONS[social.platform];

          return (
            <li key={social.platform}>
              <a
                href={social.href}
                className={styles.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <Icon className={styles.icon} aria-hidden="true" />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
