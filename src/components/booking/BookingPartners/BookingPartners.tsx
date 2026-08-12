import { FaAirbnb } from "react-icons/fa6";
import { SiBookingdotcom } from "react-icons/si";
import { OutlineButton } from "@/components/ui";
import { BOOKING_CONTENT, BOOKING_PARTNERS } from "@/constants/booking";
import type { BookingPartnerId } from "@/types/booking";
import { cn } from "@/utils";
import styles from "./BookingPartners.module.css";

const PARTNER_ICONS: Record<
  BookingPartnerId,
  typeof SiBookingdotcom | typeof FaAirbnb
> = {
  booking: SiBookingdotcom,
  airbnb: FaAirbnb,
};

interface BookingPartnersProps {
  className?: string;
}

export function BookingPartners({ className }: BookingPartnersProps) {
  return (
    <div className={cn(styles.partners, className)}>
      <p className={styles.label}>{BOOKING_CONTENT.partnersLabel}</p>

      <ul className={styles.list}>
        {BOOKING_PARTNERS.map((partner) => {
          const Icon = PARTNER_ICONS[partner.id];

          return (
            <li key={partner.id}>
              <OutlineButton
                href={partner.href}
                external
                size="md"
                className={styles.link}
                aria-label={partner.ariaLabel}
              >
                <Icon className={styles.icon} aria-hidden="true" />
                {partner.label}
              </OutlineButton>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
