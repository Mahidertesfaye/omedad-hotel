import { CONTACT, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/constants/site";

export function SiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    telephone: CONTACT.phone,
    email: CONTACT.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: CONTACT.address,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
