import {
  CONTACT,
  HOTEL_STAR_RATING,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "@/constants/site";

export function SiteJsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    logo: `${SITE_URL}/omedad-logo.png`,
    image: `${SITE_URL}/omedad-logo.png`,
    telephone: CONTACT.phones.map((phone) => phone.href.replace("tel:", "")),
    email: CONTACT.email,
    starRating: {
      "@type": "Rating",
      ratingValue: HOTEL_STAR_RATING,
      bestRating: 5,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "Airport Road, African Avenue",
      addressLocality: "Addis Ababa",
      addressRegion: "Kirkos Sub-city, W-01",
      addressCountry: "ET",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
