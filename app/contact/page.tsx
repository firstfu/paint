"use client";

import { useState } from "react";
import Link from "next/link";
import { COMPANY, SERVICES } from "@/lib/constants";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    address: "",
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
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-hero">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label justify-center">聯絡我們</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-6">
              免費估價，專人服務
            </h1>
            <p className="text-lg text-[var(--color-text-light)]">
              填寫表單或直接撥打電話，我們會在 24 小時內與您聯繫
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left - Contact Info */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
                聯繫方式
              </h2>

              {/* Contact Cards */}
              <div className="space-y-4 mb-8">
                <a
                  href={`tel:${COMPANY.phone.replace(/-/g, "")}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[var(--color-secondary-light)] hover:bg-[var(--color-secondary)] transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[var(--color-text-muted)]">電話</p>
                    <p className="text-xl font-bold text-[var(--color-primary)]">{COMPANY.phone}</p>
                  </div>
                </a>

                <a
                  href={`tel:${COMPANY.mobile.replace(/-/g, "")}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[var(--color-secondary-light)] hover:bg-[var(--color-secondary)] transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-accent)] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[var(--color-text-muted)]">手機</p>
                    <p className="text-xl font-bold text-[var(--color-primary)]">{COMPANY.mobile}</p>
                  </div>
                </a>

                {/* Email 已移除
                <a
                  href={`mailto:${COMPANY.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl bg-[var(--color-secondary-light)] hover:bg-[var(--color-secondary)] transition-all group"
                >
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-secondary)] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[var(--color-text-muted)]">Email</p>
                    <p className="font-bold text-[var(--color-primary)]">{COMPANY.email}</p>
                  </div>
                </a>
                */}

                {/* 地址已移除
                <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--color-secondary-light)]">
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-secondary)] flex items-center justify-center">
                    <svg className="w-7 h-7 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[var(--color-text-muted)]">地址</p>
                    <p className="font-bold text-[var(--color-primary)]">{COMPANY.address}</p>
                  </div>
                </div>
                */}

                <div className="flex items-center gap-4 p-4 rounded-xl bg-[var(--color-secondary-light)]">
                  <div className="w-14 h-14 rounded-xl bg-[var(--color-secondary)] flex items-center justify-center">
                    <svg className="w-7 h-7 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-[var(--color-text-muted)]">營業時間</p>
                    <p className="font-bold text-[var(--color-primary)]">{COMPANY.hours}</p>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="mb-8">
                <h3 className="font-bold text-[var(--color-primary)] mb-4">服務地區</h3>
                <div className="flex flex-wrap gap-2">
                  {COMPANY.subRegions.map((region) => (
                    <span
                      key={region}
                      className="px-3 py-1 rounded-full bg-[var(--color-secondary)] text-sm text-[var(--color-text)]"
                    >
                      {region}
                    </span>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div>
                <h3 className="font-bold text-[var(--color-primary)] mb-4">社群媒體</h3>
                <div className="flex gap-3">
                  <a href="#" className="w-12 h-12 rounded-xl bg-[var(--color-secondary)] flex items-center justify-center hover:bg-[var(--color-accent)] transition-colors">
                    <svg className="w-6 h-6 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-xl bg-[var(--color-secondary)] flex items-center justify-center hover:bg-[var(--color-accent)] transition-colors">
                    <svg className="w-6 h-6 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a href="#" className="w-12 h-12 rounded-xl bg-[#06C755] flex items-center justify-center hover:opacity-80 transition-opacity">
                    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63.346 0 .628.285.628.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.282.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="lg:col-span-3">
              <div className="bg-[var(--color-background-alt)] rounded-3xl p-8">
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
                        setFormData({ name: "", phone: "", email: "", service: "", address: "", message: "" });
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

                    <div className="grid md:grid-cols-2 gap-6">
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
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-[var(--color-text)] mb-2">
                        施工地址
                      </label>
                      <input
                        type="text"
                        className="input"
                        placeholder="請輸入施工地址（方便我們評估）"
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      />
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
                      提交表單即表示您同意我們的 <Link href="/privacy" className="underline hover:text-[var(--color-primary)]">隱私權政策</Link>
                    </p>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - 地圖區塊已移除
      <section className="py-20 bg-[var(--color-secondary)]">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label justify-center">Location</span>
            <h2 className="section-title">我們的位置</h2>
          </div>
          <div className="aspect-video md:aspect-[21/9] bg-white rounded-3xl flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center">
                <svg className="w-10 h-10 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <p className="text-[var(--color-text-muted)]">地圖位置</p>
              <p className="text-lg font-medium text-[var(--color-primary)] mt-2">{COMPANY.address}</p>
            </div>
          </div>
        </div>
      </section>
      */}

      {/* FAQ Preview */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label justify-center">FAQ</span>
            <h2 className="section-title">常見問題</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            <div className="card p-6">
              <h3 className="font-bold text-[var(--color-primary)] mb-2">報價是免費的嗎？</h3>
              <p className="text-[var(--color-text-light)]">
                是的，我們提供免費到府評估報價服務。師傅會實際查看現場狀況後，給您詳細的報價單，絕不會有隱藏費用。
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-[var(--color-primary)] mb-2">多久會回覆我的詢問？</h3>
              <p className="text-[var(--color-text-light)]">
                我們會在收到詢問後的 24 小時內與您聯繫。如果是緊急情況，建議直接撥打電話聯繫。
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-[var(--color-primary)] mb-2">服務範圍有哪些地區？</h3>
              <p className="text-[var(--color-text-light)]">
                我們的服務範圍涵蓋整個{COMPANY.region}，包括{COMPANY.subRegions.slice(0, 4).join("、")}等地區。
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Link href="/faq" className="btn btn-outline">
              查看更多問題
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
