"use client";

import { useState } from "react";
import { COMPANY, SERVICES } from "@/lib/constants";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
  };

  return (
    <section className="py-20 bg-[var(--color-background-alt)]" id="contact">
      <div className="container">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Contact Info */}
          <div className="lg:col-span-2">
            <span className="section-label">聯絡我們</span>
            <h2 className="section-title">
              預約免費估價
            </h2>
            <p className="section-description mb-8">
              填寫表單或直接撥打電話，我們會盡快與您聯繫
            </p>

            {/* Contact Cards */}
            <div className="space-y-4">
              <a
                href={`tel:${COMPANY.phone.replace(/-/g, "")}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">電話</p>
                  <p className="font-semibold text-[var(--color-primary)]">{COMPANY.phone}</p>
                </div>
              </a>

              {/* Email 已移除
              <a
                href={`mailto:${COMPANY.email}`}
                className="flex items-center gap-4 p-4 rounded-xl bg-white hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">Email</p>
                  <p className="font-semibold text-[var(--color-primary)]">{COMPANY.email}</p>
                </div>
              </a>
              */}

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-secondary)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">地址</p>
                  <p className="font-semibold text-[var(--color-primary)]">{COMPANY.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-white">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-secondary)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">營業時間</p>
                  <p className="font-semibold text-[var(--color-primary)]">{COMPANY.hours}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-green-100 flex items-center justify-center">
                    <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-2">
                    感謝您的詢問！
                  </h3>
                  <p className="text-[var(--color-text-light)] mb-6">
                    我們會在 24 小時內與您聯繫
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", phone: "", email: "", service: "", message: "" });
                    }}
                    className="btn btn-outline"
                  >
                    提交另一個詢問
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                        您的姓名 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        className="input"
                        placeholder="請輸入您的姓名"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                        聯絡電話 <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        className="input"
                        placeholder="請輸入您的電話"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                      電子信箱
                    </label>
                    <input
                      type="email"
                      className="input"
                      placeholder="請輸入您的 Email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                      需要的服務 <span className="text-red-500">*</span>
                    </label>
                    <select
                      required
                      className="input"
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    >
                      <option value="">請選擇服務項目</option>
                      {SERVICES.map((service) => (
                        <option key={service.id} value={service.id}>
                          {service.title}
                        </option>
                      ))}
                      <option value="other">其他 / 不確定</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                      詳細說明
                    </label>
                    <textarea
                      className="input"
                      rows={4}
                      placeholder="請描述您的需求，例如房屋類型、面積大小、問題狀況等..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary btn-lg w-full disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        送出中...
                      </>
                    ) : (
                      <>
                        送出詢問
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                      </>
                    )}
                  </button>

                  <p className="text-xs text-center text-[var(--color-text-muted)]">
                    提交表單即表示您同意我們的 <a href="/privacy" className="underline hover:text-[var(--color-primary)]">隱私權政策</a>
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
