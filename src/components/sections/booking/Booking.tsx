"use client";

import { BookingSearch } from "@/components/booking";
import { Section } from "@/components/common/Section";
import { PageContainer } from "@/components/ui";
import { SectionSubtitle } from "@/components/ui/SectionSubtitle";
import { SectionTitle } from "@/components/ui/SectionTitle";
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
        <header className={styles.header}>
          <SectionSubtitle align="center">
            {BOOKING_CONTENT.overline}
          </SectionSubtitle>

          <SectionTitle as="h2" align="center" className={styles.heading}>
            {BOOKING_CONTENT.heading}
          </SectionTitle>

          <p className={styles.lead}>{BOOKING_CONTENT.description}</p>
        </header>

        <BookingSearch
          variant="solid"
          className={styles.search}
        />
      </PageContainer>
    </Section>
  );
}
