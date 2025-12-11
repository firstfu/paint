import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { COMPANY, SERVICES, PORTFOLIO_ITEMS, FAQS } from "@/lib/constants";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);

  if (!service) {
    return { title: "找不到頁面" };
  }

  return {
    title: `${service.title} - ${COMPANY.region}專業${service.title}服務`,
    description: `${COMPANY.name}提供專業${service.title}服務。${service.description}`,
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.id === slug);

  if (!service) {
    notFound();
  }

  const relatedPortfolio = PORTFOLIO_ITEMS.filter((p) => p.category === slug).slice(0, 2);
  const relatedFaqs = FAQS.filter((f) => f.category === slug);
  const otherServices = SERVICES.filter((s) => s.id !== slug);

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-hero relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm text-[var(--color-text-muted)] hover:text-[var(--color-primary)] mb-6"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              返回服務列表
            </Link>
            <span className="badge badge-accent mb-4">{service.titleEn}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-6">
              {service.title}
            </h1>
            <p className="text-lg text-[var(--color-text-light)] mb-8">
              {service.shortDesc}
            </p>
            <div className="flex gap-4">
              <Link href="/contact" className="btn btn-primary btn-lg">
                免費估價
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href={`tel:${COMPANY.phone.replace(/-/g, "")}`} className="btn btn-outline btn-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Detail */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="prose max-w-none mb-12">
                <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                  服務介紹
                </h2>
                <p className="text-[var(--color-text-light)] leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Features */}
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
                  服務特色
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-4 rounded-xl bg-[var(--color-secondary-light)]"
                    >
                      <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                        <svg className="w-5 h-5 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="font-medium text-[var(--color-text)]">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Portfolio */}
              {relatedPortfolio.length > 0 && (
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
                    相關案例
                  </h2>
                  <div className="grid sm:grid-cols-2 gap-6">
                    {relatedPortfolio.map((item) => (
                      <div key={item.id} className="card p-4">
                        <div className="aspect-video bg-[var(--color-secondary)] rounded-lg mb-4 overflow-hidden relative">
                          <Image
                            src={item.afterImage}
                            alt={item.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 640px) 100vw, 50vw"
                          />
                        </div>
                        <h3 className="font-semibold text-[var(--color-primary)] mb-1">
                          {item.title}
                        </h3>
                        <p className="text-sm text-[var(--color-text-light)]">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6">
                    <Link href="/portfolio" className="text-[var(--color-primary)] font-medium hover:text-[var(--color-accent-dark)] inline-flex items-center gap-1">
                      查看更多案例
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )}

              {/* FAQ */}
              {relatedFaqs.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
                    常見問題
                  </h2>
                  <div className="space-y-4">
                    {relatedFaqs.map((faq) => (
                      <details key={faq.id} className="group rounded-xl border border-[var(--color-border)] bg-white">
                        <summary className="cursor-pointer p-5 flex items-center justify-between font-medium text-[var(--color-text)]">
                          {faq.question}
                          <svg className="w-5 h-5 text-[var(--color-text-muted)] transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </summary>
                        <div className="px-5 pb-5 text-[var(--color-text-light)]">
                          {faq.answer}
                        </div>
                      </details>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA Card */}
              <div className="card p-6 mb-6 sticky top-32">
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-4">
                  立即預約{service.title}服務
                </h3>
                <p className="text-[var(--color-text-light)] text-sm mb-6">
                  填寫表單或撥打電話，我們會在 24 小時內與您聯繫
                </p>
                <div className="space-y-3">
                  <Link href="/contact" className="btn btn-primary w-full justify-center">
                    線上預約
                  </Link>
                  <a
                    href={`tel:${COMPANY.phone.replace(/-/g, "")}`}
                    className="btn btn-outline w-full justify-center"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {COMPANY.phone}
                  </a>
                </div>

                <div className="border-t border-[var(--color-border)] mt-6 pt-6">
                  <h4 className="font-medium text-[var(--color-text)] mb-4">其他服務</h4>
                  <div className="space-y-2">
                    {otherServices.map((s) => (
                      <Link
                        key={s.id}
                        href={`/services/${s.id}`}
                        className="flex items-center gap-2 text-sm text-[var(--color-text-light)] hover:text-[var(--color-primary)] py-2"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                        {s.title}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
