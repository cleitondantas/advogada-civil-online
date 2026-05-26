import { SITE_URL, siteConfig } from "@/lib/site-config";
import type { FAQItem } from "@/content/faq";

type StructuredDataProps = {
  faqItems?: FAQItem[];
  pageUrl?: string;
  pageTitle?: string;
};

const StructuredData = ({
  faqItems,
  pageUrl = SITE_URL,
  pageTitle = siteConfig.defaultTitle,
}: StructuredDataProps) => {
  const graph: Record<string, unknown>[] = [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: siteConfig.name,
      description: siteConfig.defaultDescription,
      inLanguage: "pt-BR",
    },
    {
      "@type": "LegalService",
      "@id": `${SITE_URL}/#legalservice`,
      name: siteConfig.name,
      url: SITE_URL,
      image: siteConfig.ogImage,
      description: siteConfig.defaultDescription,
      telephone: siteConfig.phoneE164,
      email: siteConfig.email,
      priceRange: "$$",
      areaServed: {
        "@type": "City",
        name: "Guarulhos",
        containedInPlace: {
          "@type": "State",
          name: "São Paulo",
        },
      },
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.city,
        addressRegion: siteConfig.address.state,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "09:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "09:00",
          closes: "12:00",
        },
      ],
      sameAs: [],
    },
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: "Bruna Neri Dantas",
      jobTitle: "Advogada",
      worksFor: { "@id": `${SITE_URL}/#legalservice` },
      knowsAbout: [
        "Direito Civil",
        "Direito do Consumidor",
        "Contratos",
        "Direito de Família",
        "Responsabilidade Civil",
        "Sucessões",
      ],
      url: pageUrl,
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: pageTitle,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#legalservice` },
      inLanguage: "pt-BR",
    },
  ];

  if (faqItems?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: faqItems.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.answer,
        },
      })),
    });
  }

  const schema = {
    "@context": "https://schema.org",
    "@graph": graph,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default StructuredData;
