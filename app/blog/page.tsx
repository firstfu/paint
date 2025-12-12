import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { COMPANY, BLOG_POSTS, SERVICES } from "@/lib/constants";
import BlogContent from "@/components/blog/BlogContent";

export const metadata: Metadata = {
  title: `知識專欄 - 屋頂清洗、油漆、防水工程知識分享`,
  description: `${COMPANY.name}專業知識分享：屋頂清洗指南、油漆選色技巧、防水工程注意事項等實用文章，幫助您更了解房屋維護知識。`,
};

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-hero">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label justify-center">知識專欄</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-6">
              專業知識分享
            </h1>
            <p className="text-lg text-[var(--color-text-light)]">
              專業知識分享，幫助您更了解房屋維護的方方面面
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content with Category Filter */}
      <BlogContent posts={BLOG_POSTS} />

      {/* Subscribe Section */}
      <section className="py-16 bg-[var(--color-primary)]">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              訂閱我們的電子報
            </h2>
            <p className="text-white/70 mb-8">
              獲取最新的房屋維護知識和優惠資訊
            </p>
            <div className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="請輸入您的 Email"
                className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-white/50"
              />
              <button className="btn btn-accent">
                訂閱
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label justify-center">Our Services</span>
            <h2 className="section-title">相關服務</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="card p-6 text-center hover:border-[var(--color-accent)] transition-colors group"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-[var(--color-secondary)] flex items-center justify-center group-hover:bg-[var(--color-accent)] transition-colors">
                  <span className="text-3xl">
                    {service.icon === "droplets" && "💧"}
                    {service.icon === "paintbrush" && "🖌️"}
                    {service.icon === "roller" && "🎨"}
                    {service.icon === "shield" && "🛡️"}
                  </span>
                </div>
                <h3 className="font-bold text-[var(--color-primary)] group-hover:text-[var(--color-accent-dark)]">
                  {service.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
