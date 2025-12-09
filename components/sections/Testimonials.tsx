"use client";

import { useState } from "react";
import { TESTIMONIALS } from "@/lib/constants";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Header & Navigation */}
          <div>
            <span className="section-label">客戶評價</span>
            <h2 className="section-title">
              聽聽他們怎麼說
            </h2>
            <p className="section-description mb-8">
              超過 2,500 位滿意客戶的真實回饋，
              我們用品質贏得口碑
            </p>

            {/* Customer Avatars */}
            <div className="flex items-center gap-4 mb-8">
              {TESTIMONIALS.map((testimonial, index) => (
                <button
                  key={testimonial.id}
                  onClick={() => setActiveIndex(index)}
                  className={`relative w-14 h-14 rounded-full transition-all ${
                    index === activeIndex
                      ? "ring-4 ring-[var(--color-accent)] scale-110"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] flex items-center justify-center text-[var(--color-primary)] font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  {index === activeIndex && (
                    <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-[var(--color-accent)]" />
                  )}
                </button>
              ))}
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border-2 border-[var(--color-border)] flex items-center justify-center hover:border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center hover:bg-[var(--color-primary-light)] transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Right - Testimonial Card */}
          <div className="relative">
            {/* Background Decoration */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[var(--color-accent)]/20 rounded-full blur-2xl" />

            {/* Card */}
            <div className="relative bg-[var(--color-secondary-light)] rounded-3xl p-8 md:p-10">
              {/* Quote Icon */}
              <div className="absolute -top-5 left-8 w-10 h-10 bg-[var(--color-accent)] rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6 pt-4">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className={`w-5 h-5 ${
                      i < TESTIMONIALS[activeIndex].rating
                        ? "text-[var(--color-accent)]"
                        : "text-gray-300"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-lg md:text-xl text-[var(--color-text)] leading-relaxed mb-8">
                「{TESTIMONIALS[activeIndex].content}」
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] flex items-center justify-center text-[var(--color-primary)] font-bold text-xl">
                  {TESTIMONIALS[activeIndex].name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-[var(--color-primary)]">
                    {TESTIMONIALS[activeIndex].name}
                  </p>
                  <p className="text-sm text-[var(--color-text-muted)]">
                    {TESTIMONIALS[activeIndex].title} · {TESTIMONIALS[activeIndex].location}
                  </p>
                </div>
                <div className="ml-auto">
                  <span className="badge badge-outline">
                    {TESTIMONIALS[activeIndex].service}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
