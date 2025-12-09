import { Metadata } from "next";
import Link from "next/link";
import { COMPANY, BLOG_POSTS, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: `知識專欄 - 屋頂清洗、油漆、防水工程知識分享`,
  description: `${COMPANY.name}專業知識分享：屋頂清洗指南、油漆選色技巧、防水工程注意事項等實用文章，幫助您更了解房屋維護知識。`,
};

export default function BlogPage() {
  // Get unique categories
  const categories = [...new Set(BLOG_POSTS.map((post) => post.category))];

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
              多年經驗累積的實用知識，幫助您更了解房屋維護的方方面面
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-[var(--color-border)]">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/blog"
              className="px-6 py-2 rounded-full bg-[var(--color-primary)] text-white font-medium"
            >
              全部文章
            </Link>
            {categories.map((category) => (
              <Link
                key={category}
                href={`/blog?category=${encodeURIComponent(category)}`}
                className="px-6 py-2 rounded-full bg-[var(--color-secondary)] text-[var(--color-text)] font-medium hover:bg-[var(--color-accent)] transition-colors"
              >
                {category}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-[var(--color-background-alt)]">
        <div className="container">
          {/* Featured Post */}
          <div className="mb-12">
            <Link href={`/blog/${BLOG_POSTS[0].slug}`} className="block group">
              <div className="card overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  {/* Image */}
                  <div className="aspect-video lg:aspect-auto bg-[var(--color-secondary)] relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center">
                          <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                          </svg>
                        </div>
                        <span className="text-[var(--color-text-muted)]">精選文章</span>
                      </div>
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="badge badge-accent">精選</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="badge bg-[var(--color-secondary)] text-[var(--color-text)]">
                        {BLOG_POSTS[0].category}
                      </span>
                      <span className="text-sm text-[var(--color-text-muted)]">
                        {BLOG_POSTS[0].readTime} 分鐘閱讀
                      </span>
                    </div>
                    <h2 className="text-2xl lg:text-3xl font-bold text-[var(--color-primary)] mb-4 group-hover:text-[var(--color-accent-dark)] transition-colors">
                      {BLOG_POSTS[0].title}
                    </h2>
                    <p className="text-[var(--color-text-light)] mb-6 line-clamp-3">
                      {BLOG_POSTS[0].excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[var(--color-secondary)] flex items-center justify-center">
                          <span className="font-bold text-[var(--color-primary)]">
                            {BLOG_POSTS[0].author[0]}
                          </span>
                        </div>
                        <div>
                          <p className="font-medium text-[var(--color-text)]">
                            {BLOG_POSTS[0].author}
                          </p>
                          <p className="text-sm text-[var(--color-text-muted)]">
                            {BLOG_POSTS[0].publishedAt}
                          </p>
                        </div>
                      </div>
                      <span className="text-[var(--color-primary)] font-medium group-hover:text-[var(--color-accent-dark)] inline-flex items-center gap-1">
                        閱讀更多
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Other Posts */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {BLOG_POSTS.slice(1).map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
                <article className="card overflow-hidden h-full">
                  {/* Image */}
                  <div className="aspect-video bg-[var(--color-secondary)] relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center">
                        <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="badge bg-[var(--color-secondary)] text-[var(--color-text)]">
                        {post.category}
                      </span>
                      <span className="text-sm text-[var(--color-text-muted)]">
                        {post.readTime} 分鐘
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-[var(--color-primary)] mb-3 group-hover:text-[var(--color-accent-dark)] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[var(--color-text-light)] text-sm line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
                      <span>{post.author}</span>
                      <span>·</span>
                      <span>{post.publishedAt}</span>
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
