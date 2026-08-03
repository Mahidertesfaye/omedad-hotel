import { PageContainer } from "@/components/ui";
import { FOOTER_CONTENT } from "@/constants/footer";
import { FooterContact } from "./FooterContact";
import { FooterCopyright } from "./FooterCopyright";
import { FooterLogo } from "./FooterLogo";
import { FooterNav } from "./FooterNav";
import { FooterNewsletter } from "./FooterNewsletter";
import { FooterSocial } from "./FooterSocial";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer} aria-label="Site footer">
      <PageContainer>
        <div className={styles.top}>
          <div className={styles.brand}>
            <FooterLogo />
            <p className={styles.tagline}>{FOOTER_CONTENT.tagline}</p>
          </div>

          <FooterNav />
          <FooterContact />
          <FooterNewsletter />
        </div>

        <div className={styles.divider} aria-hidden="true" />

        <div className={styles.bottom}>
          <FooterCopyright />
          <FooterSocial />
        </div>
      </PageContainer>
    </footer>
  );
}
