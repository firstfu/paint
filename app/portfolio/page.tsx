import { Metadata } from "next";
import Link from "next/link";
import { COMPANY, SERVICES, PORTFOLIO_ITEMS } from "@/lib/constants";

export const metadata: Metadata = {
  title: `案例展示 - ${COMPANY.region}屋頂清洗、油漆工程實績`,
  description: `查看${COMPANY.name}的施工案例，包含屋頂清洗、油漆、防水工程的 Before/After 對比照片。${COMPANY.region}在地${new Date().getFullYear() - COMPANY.yearEstablished}年經驗，${COMPANY.completedProjects}+ 完工案例。`,
};

export default function PortfolioPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-hero">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label justify-center">案例展示</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-6">
              我們的施工實績
            </h1>
            <p className="text-lg text-[var(--color-text-light)]">
              每一個案例都是我們用心服務的見證，查看 Before/After 對比照片，
              感受專業施工的差異
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-[var(--color-border)]">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-[var(--color-primary)]">{COMPANY.completedProjects}+</p>
              <p className="text-[var(--color-text-muted)]">完工案例</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[var(--color-primary)]">{COMPANY.satisfactionRate}%</p>
              <p className="text-[var(--color-text-muted)]">客戶滿意度</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[var(--color-primary)]">{new Date().getFullYear() - COMPANY.yearEstablished}</p>
              <p className="text-[var(--color-text-muted)]">年豐富經驗</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-[var(--color-primary)]">{COMPANY.subRegions.length}</p>
              <p className="text-[var(--color-text-muted)]">服務鄉鎮</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-[var(--color-background-alt)]">
        <div className="container">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            <Link
              href="/portfolio"
              className="px-6 py-2 rounded-full bg-[var(--color-primary)] text-white font-medium"
            >
              全部案例
            </Link>
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/portfolio?category=${service.id}`}
                className="px-6 py-2 rounded-full bg-white text-[var(--color-text)] font-medium hover:bg-[var(--color-secondary)] transition-colors"
              >
                {service.title}
              </Link>
            ))}
          </div>

          {/* Portfolio Items */}
          <div className="grid md:grid-cols-2 gap-8">
            {PORTFOLIO_ITEMS.map((item) => {
              const service = SERVICES.find((s) => s.id === item.category);
              return (
                <div key={item.id} className="card overflow-hidden group">
                  {/* Before/After Container */}
                  <div className="relative aspect-[4/3] bg-[var(--color-secondary)]">
                    <div className="absolute inset-0 flex">
                      {/* Before */}
                      <div className="w-1/2 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[var(--color-secondary)] flex items-center justify-center">
                          <span className="text-[var(--color-text-muted)]">施工前</span>
                        </div>
                        <div className="absolute bottom-4 left-4 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
                          BEFORE
                        </div>
                      </div>
                      {/* Divider */}
                      <div className="w-px bg-white/50 z-10" />
                      {/* After */}
                      <div className="w-1/2 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[var(--color-accent)]/20 flex items-center justify-center">
                          <span className="text-[var(--color-primary)]">施工後</span>
                        </div>
                        <div className="absolute bottom-4 right-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">
                          AFTER
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="badge badge-accent">
                        {service?.title || item.category}
                      </span>
                      <span className="text-sm text-[var(--color-text-muted)]">
                        {item.location}
                      </span>
                      <span className="text-sm text-[var(--color-text-muted)]">
                        {item.completedAt}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-[var(--color-primary)] mb-2 group-hover:text-[var(--color-accent-dark)] transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-[var(--color-text-light)]">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--color-primary)]">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              您的房屋也需要專業照顧嗎？
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              免費到府評估，讓我們為您打造煥然一新的居住空間
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="btn btn-accent btn-lg">
                免費估價
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href={`tel:${COMPANY.phone.replace(/-/g, "")}`} className="btn bg-white/10 text-white hover:bg-white/20 btn-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {COMPANY.phone}
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
