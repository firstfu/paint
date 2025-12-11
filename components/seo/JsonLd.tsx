import { COMPANY, SERVICES, FAQS } from "@/lib/constants";

export default function JsonLd() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://tuxinju.com.tw/#localbusiness",
    name: COMPANY.name,
    alternateName: COMPANY.nameEn,
    description: COMPANY.description,
    url: "https://tuxinju.com.tw",
    telephone: COMPANY.phone,
    geo: {
      "@type": "GeoCoordinates",
      latitude: "23.9157",
      longitude: "120.6847",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "17:00",
    },
    priceRange: "$$",
    image: "https://tuxinju.com.tw/images/og-image.jpg",
    sameAs: [],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "100",  // 暫時使用固定值，原為 COMPANY.completedProjects
    },
    areaServed: COMPANY.subRegions.map(region => ({
      "@type": "City",
      name: region,
    })),
  };

  const servicesSchema = SERVICES.map((service, index) => ({
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://tuxinju.com.tw/services/${service.id}#service`,
    name: service.title,
    description: service.description,
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://tuxinju.com.tw/#localbusiness",
    },
    areaServed: {
      "@type": "State",
      name: "南投縣",
    },
    serviceType: service.titleEn,
    position: index + 1,
  }));

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map(faq => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://tuxinju.com.tw/#website",
    url: "https://tuxinju.com.tw",
    name: COMPANY.name,
    description: COMPANY.description,
    publisher: {
      "@type": "LocalBusiness",
      "@id": "https://tuxinju.com.tw/#localbusiness",
    },
    inLanguage: "zh-TW",
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://tuxinju.com.tw/#organization",
    name: COMPANY.name,
    url: "https://tuxinju.com.tw",
    logo: "https://tuxinju.com.tw/images/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY.phone,
      contactType: "customer service",
      areaServed: "TW",
      availableLanguage: "zh-TW",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
    </>
  );
}
