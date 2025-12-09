"use client";

import Link from "next/link";
import { BLOG_POSTS } from "@/lib/constants";

export default function BlogPreview() {
  return (
    <section className="py-20 bg-white" id="blog">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="section-label">知識專欄</span>
            <h2 className="section-title">
              實用知識分享
            </h2>
            <p className="section-description">
              提供屋頂保養、油漆技巧、防水知識等實用文章
            </p>
          </div>
          <Link href="/blog" className="btn btn-outline shrink-0">
            查看所有文章
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BLOG_POSTS.map((post, index) => (
            <article
              key={post.id}
              className="card group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] bg-[var(--color-secondary)] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <svg className="w-12 h-12 text-[var(--color-text-muted)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="badge badge-accent text-xs">
                    {post.category}
                  </span>
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-[var(--color-primary)]/0 group-hover:bg-[var(--color-primary)]/20 transition-colors" />
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Meta */}
                <div className="flex items-center gap-3 text-xs text-[var(--color-text-muted)] mb-3">
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {new Date(post.publishedAt).toLocaleDateString('zh-TW')}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {post.readTime} 分鐘
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-semibold text-[var(--color-primary)] mb-2 line-clamp-2 group-hover:text-[var(--color-accent-dark)] transition-colors">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>

                {/* Excerpt */}
                <p className="text-sm text-[var(--color-text-light)] line-clamp-2 mb-4">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <Link
                  href={`/blog/${post.slug}`}
                  className="inline-flex items-center gap-1 text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] transition-colors"
                >
                  閱讀更多
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
