"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface BlogPost {
  id: number | string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  author: string;
  publishedAt: string;
  readTime: number;
}

interface BlogContentProps {
  posts: readonly BlogPost[];
}

export default function BlogContent({ posts }: BlogContentProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  // Get unique categories
  const categories = [...new Set(posts.map((post) => post.category))];

  // Filter posts based on active category
  const filteredPosts = activeCategory
    ? posts.filter((post) => post.category === activeCategory)
    : posts;

  // Get featured post (first post of filtered results)
  const featuredPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <>
      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-[var(--color-border)]">
        <div className="container">
          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => setActiveCategory(null)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === null
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-[var(--color-secondary)] text-[var(--color-text)] hover:bg-[var(--color-accent)]"
              }`}
            >
              全部文章
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-[var(--color-primary)] text-white"
                    : "bg-[var(--color-secondary)] text-[var(--color-text)] hover:bg-[var(--color-accent)]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-[var(--color-background-alt)]">
        <div className="container">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-[var(--color-text-light)]">目前沒有此分類的文章</p>
            </div>
          ) : (
            <>
              {/* Featured Post */}
              {featuredPost && (
                <div className="mb-12">
                  <Link href={`/blog/${featuredPost.slug}`} className="block group">
                    <div className="card overflow-hidden">
                      <div className="grid lg:grid-cols-2">
                        {/* Image */}
                        <div className="aspect-video lg:aspect-auto lg:min-h-[300px] bg-[var(--color-secondary)] relative">
                          <Image
                            src={featuredPost.image}
                            alt={featuredPost.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            priority
                          />
                          <div className="absolute top-4 left-4 z-10">
                            <span className="badge badge-accent">精選</span>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="p-8 lg:p-12 flex flex-col justify-center">
                          <div className="flex items-center gap-4 mb-4">
                            <span className="badge bg-[var(--color-secondary)] text-[var(--color-text)]">
                              {featuredPost.category}
                            </span>
                            <span className="text-sm text-[var(--color-text-muted)]">
                              {featuredPost.readTime} 分鐘閱讀
                            </span>
                          </div>
                          <h2 className="text-2xl lg:text-3xl font-bold text-[var(--color-primary)] mb-4 group-hover:text-[var(--color-accent-dark)] transition-colors">
                            {featuredPost.title}
                          </h2>
                          <p className="text-[var(--color-text-light)] mb-6 line-clamp-3">
                            {featuredPost.excerpt}
                          </p>
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-full bg-[var(--color-secondary)] flex items-center justify-center">
                                <span className="font-bold text-[var(--color-primary)]">
                                  {featuredPost.author[0]}
                                </span>
                              </div>
                              <div>
                                <p className="font-medium text-[var(--color-text)]">
                                  {featuredPost.author}
                                </p>
                                <p className="text-sm text-[var(--color-text-muted)]">
                                  {featuredPost.publishedAt}
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
              )}

              {/* Other Posts */}
              {otherPosts.length > 0 && (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {otherPosts.map((post) => (
                    <Link key={post.id} href={`/blog/${post.slug}`} className="block group">
                      <article className="card overflow-hidden h-full">
                        {/* Image */}
                        <div className="aspect-video bg-[var(--color-secondary)] relative">
                          <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          />
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
              )}
            </>
          )}
        </div>
      </section>
    </>
  );
}
