"use client";

import { BookingSearch } from "@/components/booking";
import { Section } from "@/components/common/Section";
import { PageContainer, SectionHeader } from "@/components/ui";
import { BOOKING_CONTENT } from "@/constants/booking";
import styles from "./Booking.module.css";

export function Booking() {
  return (
    <Section
      id="booking"
      variant="default"
      padding="default"
      ariaLabel="Book your stay at Omedad Hotel"
    >
      <PageContainer>
        <SectionHeader
          subtitle={BOOKING_CONTENT.overline}
          title={BOOKING_CONTENT.heading}
          lead={BOOKING_CONTENT.description}
        />

        <BookingSearch variant="solid" className={styles.search} />
      </PageContainer>
    </Section>
  );
}
