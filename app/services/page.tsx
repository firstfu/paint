import { Metadata } from "next";
import Link from "next/link";
import { COMPANY, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: `專業服務項目 - 屋頂清洗、油漆、防水`,
  description: `${COMPANY.name}提供專業屋頂清洗、屋頂油漆、室內油漆、防水處理服務。${COMPANY.region}在地專業團隊，品質保證。`,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-hero">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label justify-center">服務項目</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-6">
              專業服務，品質保證
            </h1>
            <p className="text-lg text-[var(--color-text-light)]">
              提供完整的屋頂與室內裝修服務，從清潔、油漆到防水，
              一站式解決您所有房屋維護需求
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="space-y-24">
            {SERVICES.map((service, index) => (
              <div
                key={service.id}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <div className="aspect-[4/3] bg-[var(--color-secondary)] rounded-3xl overflow-hidden relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center">
                          <ServiceIcon type={service.icon} className="w-12 h-12 text-[var(--color-primary)]" />
                        </div>
                        <p className="text-[var(--color-text-muted)]">{service.title}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                  <span className="badge badge-accent mb-4">{service.titleEn}</span>
                  <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-4">
                    {service.title}
                  </h2>
                  <p className="text-[var(--color-text-light)] mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[var(--color-accent)]/20 flex items-center justify-center shrink-0">
                          <svg className="w-4 h-4 text-[var(--color-accent-dark)]" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <span className="text-sm font-medium text-[var(--color-text)]">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <Link href={`/services/${service.id}`} className="btn btn-primary">
                      了解詳情
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                    <Link href="/contact" className="btn btn-outline">
                      免費估價
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--color-primary)]">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              需要我們的服務嗎？
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              立即聯繫我們，免費到府評估，給您最專業的建議和最實在的報價
            </p>
            <Link href="/contact" className="btn btn-primary btn-lg">
              立即預約
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ServiceIcon({ type, className }: { type: string; className?: string }) {
  const icons: Record<string, React.ReactElement> = {
    droplets: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    paintbrush: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    roller: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z"/>
      </svg>
    ),
    shield: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  };

  return icons[type] || icons.droplets;
}
