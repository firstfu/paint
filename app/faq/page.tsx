import { Metadata } from "next";
import Link from "next/link";
import { COMPANY, SERVICES, FAQS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `常見問題 - 屋頂清洗、油漆、防水工程 FAQ`,
  description: `${COMPANY.name}常見問題解答：屋頂清洗費用、油漆施工時間、防水工程等問題，讓您對服務有更清楚的了解。`,
};

export default function FAQPage() {
  // Group FAQs by category
  const generalFaqs = FAQS.filter((faq) => faq.category === "general");
  const serviceFaqs = FAQS.filter((faq) => faq.category !== "general");

  // Get service names for each FAQ
  const getServiceName = (category: string) => {
    const service = SERVICES.find((s) => s.id === category);
    return service?.title || "一般問題";
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-hero">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label justify-center">FAQ</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-6">
              常見問題
            </h1>
            <p className="text-lg text-[var(--color-text-light)]">
              我們整理了客戶最常詢問的問題，幫助您更了解我們的服務
            </p>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-8 bg-white border-b border-[var(--color-border)]">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="#general"
              className="px-6 py-2 rounded-full bg-[var(--color-primary)] text-white font-medium hover:bg-[var(--color-primary-dark)] transition-colors"
            >
              一般問題
            </a>
            {SERVICES.map((service) => (
              <a
                key={service.id}
                href={`#${service.id}`}
                className="px-6 py-2 rounded-full bg-[var(--color-secondary)] text-[var(--color-text)] font-medium hover:bg-[var(--color-accent)] transition-colors"
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 bg-[var(--color-background-alt)]">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* General FAQs */}
              <div id="general" className="mb-12 scroll-mt-32">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)] flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-[var(--color-primary)]">一般問題</h2>
                </div>
                <div className="space-y-4">
                  {generalFaqs.map((faq) => (
                    <details key={faq.id} className="group card overflow-hidden">
                      <summary className="cursor-pointer p-5 flex items-center justify-between font-medium text-[var(--color-text)] hover:bg-[var(--color-secondary-light)] transition-colors">
                        <span className="pr-4">{faq.question}</span>
                        <svg className="w-5 h-5 text-[var(--color-text-muted)] transition-transform group-open:rotate-180 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </summary>
                      <div className="px-5 pb-5 text-[var(--color-text-light)] border-t border-[var(--color-border)]">
                        <p className="pt-4">{faq.answer}</p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>

              {/* Service-specific FAQs */}
              {SERVICES.map((service) => {
                const faqs = serviceFaqs.filter((faq) => faq.category === service.id);
                if (faqs.length === 0) return null;

                return (
                  <div key={service.id} id={service.id} className="mb-12 scroll-mt-32">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)] flex items-center justify-center">
                        <span className="text-2xl">
                          {service.icon === "droplets" && "💧"}
                          {service.icon === "paintbrush" && "🖌️"}
                          {service.icon === "roller" && "🎨"}
                          {service.icon === "shield" && "🛡️"}
                        </span>
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-[var(--color-primary)]">{service.title}</h2>
                        <p className="text-sm text-[var(--color-text-muted)]">{service.titleEn}</p>
                      </div>
                    </div>
                    <div className="space-y-4">
                      {faqs.map((faq) => (
                        <details key={faq.id} className="group card overflow-hidden">
                          <summary className="cursor-pointer p-5 flex items-center justify-between font-medium text-[var(--color-text)] hover:bg-[var(--color-secondary-light)] transition-colors">
                            <span className="pr-4">{faq.question}</span>
                            <svg className="w-5 h-5 text-[var(--color-text-muted)] transition-transform group-open:rotate-180 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                          </summary>
                          <div className="px-5 pb-5 text-[var(--color-text-light)] border-t border-[var(--color-border)]">
                            <p className="pt-4">{faq.answer}</p>
                          </div>
                        </details>
                      ))}
                    </div>
                    <div className="mt-6">
                      <Link
                        href={`/services/${service.id}`}
                        className="text-[var(--color-primary)] font-medium hover:text-[var(--color-accent-dark)] inline-flex items-center gap-1"
                      >
                        了解更多{service.title}服務
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Contact Card */}
              <div className="card p-6 sticky top-32">
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4">
                  還有其他問題嗎？
                </h3>
                <p className="text-[var(--color-text-light)] text-sm mb-6">
                  如果您的問題不在上述列表中，歡迎直接聯繫我們，我們很樂意為您解答。
                </p>
                <div className="space-y-3 mb-6">
                  <a
                    href={`tel:${COMPANY.phone.replace(/-/g, "")}`}
                    className="flex items-center gap-3 p-3 rounded-xl bg-[var(--color-secondary)] hover:bg-[var(--color-accent)] transition-colors"
                  >
                    <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div>
                      <p className="text-xs text-[var(--color-text-muted)]">手機</p>
                      <p className="font-semibold text-[var(--color-primary)]">{COMPANY.mobile}</p>
                    </div>
                  </a>
                </div>
                <Link href="/contact" className="btn btn-primary w-full justify-center">
                  線上詢問
                </Link>

                {/* Service Areas */}
                <div className="mt-8 pt-6 border-t border-[var(--color-border)]">
                  <h4 className="font-medium text-[var(--color-text)] mb-3">服務地區</h4>
                  <div className="flex flex-wrap gap-1">
                    {COMPANY.subRegions.map((region) => (
                      <span
                        key={region}
                        className="px-2 py-1 rounded bg-[var(--color-secondary)] text-xs text-[var(--color-text-muted)]"
                      >
                        {region}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--color-primary)]">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              準備好開始了嗎？
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              免費到府評估，給您最專業的建議和最實在的報價
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="btn btn-accent btn-lg">
                免費估價
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/portfolio" className="btn bg-white/10 text-white hover:bg-white/20 btn-lg">
                查看案例
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
