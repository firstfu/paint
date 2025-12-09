import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { COMPANY, BLOG_POSTS, SERVICES } from "@/lib/constants";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    return { title: "找不到文章" };
  }

  return {
    title: `${post.title} | ${COMPANY.name}知識專欄`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = BLOG_POSTS.filter((p) => p.category === post.category && p.slug !== slug).slice(0, 3);
  const relatedService = SERVICES.find((s) => s.title.includes(post.category.replace("工程", "")));

  // Generate dummy content based on the post
  const generateContent = () => {
    const sections = [
      {
        title: "前言",
        content: `${post.excerpt} 在本文中，我們將深入探討這個主題，分享我們多年累積的專業知識和經驗。`,
      },
      {
        title: "為什麼這很重要？",
        content: `對於大多數屋主來說，房屋維護可能不是日常會想到的事情。然而，定期的維護和保養可以大幅延長房屋的壽命，同時也能節省長期的維修成本。以${post.category}為例，及時處理可以避免更嚴重的問題發生。`,
      },
      {
        title: "專業建議",
        content: `作為在${COMPANY.region}服務超過${new Date().getFullYear() - COMPANY.yearEstablished}年的專業團隊，我們建議屋主們：

1. **定期檢查**：至少每半年檢查一次屋頂和外牆狀況
2. **及時處理**：發現問題不要拖延，小問題可能會演變成大問題
3. **選擇專業**：DIY 雖然可以省錢，但某些工程還是需要專業人員處理
4. **做好預算**：將房屋維護列入年度預算，避免臨時需要大筆支出`,
      },
      {
        title: "常見問題解答",
        content: `很多客戶會問我們：「什麼時候需要做${post.category}？」答案取決於多個因素，包括房屋的年齡、材質、地理位置等。一般來說，如果您發現以下情況，就應該考慮聯繫專業人員：

- 屋頂或牆面出現明顯變色或髒污
- 有漏水或滲水的跡象
- 油漆開始剝落或起泡
- 防水層出現老化或裂縫`,
      },
      {
        title: "結語",
        content: `希望這篇文章對您有所幫助。如果您有任何關於${post.category}的問題，歡迎隨時聯繫${COMPANY.name}，我們提供免費的到府評估服務。`,
      },
    ];

    return sections;
  };

  const content = generateContent();

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-hero">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)] mb-6">
              <Link href="/" className="hover:text-[var(--color-primary)]">首頁</Link>
              <span>/</span>
              <Link href="/blog" className="hover:text-[var(--color-primary)]">知識專欄</Link>
              <span>/</span>
              <span className="text-[var(--color-text)]">{post.title}</span>
            </div>

            <span className="badge badge-accent mb-4">{post.category}</span>
            <h1 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] mb-6">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--color-secondary)] flex items-center justify-center">
                  <span className="font-bold text-[var(--color-primary)]">
                    {post.author[0]}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-[var(--color-text)]">{post.author}</p>
                  <p className="text-sm text-[var(--color-text-muted)]">{COMPANY.name}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm text-[var(--color-text-muted)]">
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {post.publishedAt}
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {post.readTime} 分鐘閱讀
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Featured Image */}
              <div className="aspect-video bg-[var(--color-secondary)] rounded-2xl mb-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center">
                    <svg className="w-12 h-12 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-[var(--color-text-muted)]">文章圖片</span>
                </div>
              </div>

              {/* Article Content */}
              <article className="prose max-w-none">
                {content.map((section, index) => (
                  <div key={index} className="mb-8">
                    <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-4">
                      {section.title}
                    </h2>
                    <div className="text-[var(--color-text-light)] leading-relaxed whitespace-pre-line">
                      {section.content}
                    </div>
                  </div>
                ))}
              </article>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-[var(--color-border)]">
                <p className="font-medium text-[var(--color-text)] mb-3">相關標籤</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-[var(--color-secondary)] text-sm text-[var(--color-text)]">
                    {post.category}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[var(--color-secondary)] text-sm text-[var(--color-text)]">
                    {COMPANY.region}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-[var(--color-secondary)] text-sm text-[var(--color-text)]">
                    房屋維護
                  </span>
                </div>
              </div>

              {/* Share */}
              <div className="mt-8 flex items-center gap-4">
                <p className="font-medium text-[var(--color-text)]">分享文章</p>
                <div className="flex gap-2">
                  <button className="w-10 h-10 rounded-full bg-[var(--color-secondary)] flex items-center justify-center hover:bg-[var(--color-accent)] transition-colors">
                    <svg className="w-5 h-5 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[var(--color-secondary)] flex items-center justify-center hover:bg-[var(--color-accent)] transition-colors">
                    <svg className="w-5 h-5 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* CTA Card */}
              {relatedService && (
                <div className="card p-6 mb-6 sticky top-32">
                  <h3 className="text-lg font-bold text-[var(--color-primary)] mb-4">
                    需要{relatedService.title}服務嗎？
                  </h3>
                  <p className="text-[var(--color-text-light)] text-sm mb-6">
                    {relatedService.shortDesc}
                  </p>
                  <Link href="/contact" className="btn btn-primary w-full justify-center mb-3">
                    免費估價
                  </Link>
                  <Link
                    href={`/services/${relatedService.id}`}
                    className="btn btn-outline w-full justify-center"
                  >
                    了解更多
                  </Link>
                </div>
              )}

              {/* Contact Card */}
              <div className="card p-6">
                <h3 className="font-bold text-[var(--color-primary)] mb-4">聯絡我們</h3>
                <div className="space-y-4">
                  <a
                    href={`tel:${COMPANY.phone.replace(/-/g, "")}`}
                    className="flex items-center gap-3 text-[var(--color-text-light)] hover:text-[var(--color-primary)]"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    {COMPANY.phone}
                  </a>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="flex items-center gap-3 text-[var(--color-text-light)] hover:text-[var(--color-primary)]"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    {COMPANY.email}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 bg-[var(--color-background-alt)]">
          <div className="container">
            <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-8">相關文章</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`} className="block group">
                  <article className="card overflow-hidden h-full">
                    <div className="aspect-video bg-[var(--color-secondary)] relative">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center">
                          <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-[var(--color-primary)] mb-2 group-hover:text-[var(--color-accent-dark)] transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-[var(--color-text-light)] line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
