"use client";

import { useState } from "react";
import Link from "next/link";
import { FAQS } from "@/lib/constants";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const displayFaqs = FAQS.slice(0, 5);

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left - Header */}
          <div className="lg:sticky lg:top-32">
            <span className="section-label">常見問題</span>
            <h2 className="section-title">
              您可能想知道的
            </h2>
            <p className="section-description mb-8">
              這裡整理了客戶最常詢問的問題，
              如果您有其他疑問，歡迎直接聯繫我們
            </p>

            <Link href="/faq" className="btn btn-outline mb-8">
              查看所有問題
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>

            {/* Contact Card */}
            <div className="p-6 rounded-2xl bg-[var(--color-secondary-light)] border border-[var(--color-border)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)] flex items-center justify-center shrink-0">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--color-primary)] mb-1">
                    還有其他問題？
                  </h3>
                  <p className="text-sm text-[var(--color-text-light)] mb-3">
                    我們的客服團隊隨時為您服務
                  </p>
                  <Link href="/contact" className="text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-accent-dark)] transition-colors inline-flex items-center gap-1">
                    聯絡我們
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Right - FAQ Accordion */}
          <div className="space-y-4">
            {displayFaqs.map((faq, index) => (
              <div
                key={faq.id}
                className={`rounded-2xl border transition-all ${
                  openIndex === index
                    ? "border-[var(--color-primary)] bg-white shadow-lg"
                    : "border-[var(--color-border)] bg-[var(--color-secondary-light)] hover:border-[var(--color-primary)]/30"
                }`}
              >
                <button
                  className="w-full p-5 text-left flex items-center justify-between gap-4"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className={`font-medium transition-colors ${
                    openIndex === index
                      ? "text-[var(--color-primary)]"
                      : "text-[var(--color-text)]"
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${
                    openIndex === index
                      ? "bg-[var(--color-primary)] text-white rotate-180"
                      : "bg-[var(--color-border)] text-[var(--color-text-muted)]"
                  }`}>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}>
                  <div className="px-5 pb-5 text-[var(--color-text-light)]">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
