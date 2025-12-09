"use client";

import Link from "next/link";
import { SERVICES } from "@/lib/constants";

export default function Services() {
  return (
    <section className="py-20 bg-white" id="services">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">我們的服務</span>
          <h2 className="section-title">
            專業服務項目
          </h2>
          <p className="section-description mx-auto">
            提供完整的屋頂清洗、油漆、防水一站式服務，
            讓您的房屋從裡到外煥然一新
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="group relative bg-[var(--color-secondary-light)] rounded-2xl p-6 hover:bg-white hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[var(--color-accent)]/20 flex items-center justify-center mb-5 group-hover:bg-[var(--color-accent)] group-hover:scale-110 transition-all duration-300">
                <ServiceIcon type={service.icon} className="w-7 h-7 text-[var(--color-primary)]" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-2">
                {service.title}
              </h3>
              <p className="text-[var(--color-text-light)] text-sm mb-4 leading-relaxed">
                {service.shortDesc}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-5">
                {service.features.slice(0, 3).map((feature, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                    <svg className="w-4 h-4 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex items-center gap-2 text-[var(--color-primary)] font-medium text-sm group-hover:text-[var(--color-accent-dark)] transition-colors">
                了解更多
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-[var(--color-accent)] transition-colors pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link href="/services" className="btn btn-outline">
            查看所有服務
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

// Service Icon Component
function ServiceIcon({ type, className }: { type: string; className?: string }) {
  const icons: Record<string, React.ReactElement> = {
    droplets: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    paintbrush: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    roller: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z"/>
      </svg>
    ),
    shield: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  };

  return icons[type] || icons.droplets;
}
