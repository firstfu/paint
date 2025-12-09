"use client";

import Link from "next/link";
import Image from "next/image";
import { COMPANY } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden gradient-hero">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob blob-accent w-[500px] h-[500px] -top-20 -right-20" />
        <div className="blob blob-primary w-[400px] h-[400px] bottom-20 -left-20" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(var(--color-primary) 1px, transparent 1px),
                             linear-gradient(90deg, var(--color-primary) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="container relative z-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-sm mb-6 animate-fade-in-down">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-[var(--color-text)]">
                {COMPANY.region} No.1 專業服務團隊
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
              <span className="text-[var(--color-primary)]">讓您的房屋</span>
              <br />
              <span className="text-gradient">煥然一新</span>
            </h1>

            {/* Description */}
            <p className="text-lg text-[var(--color-text-light)] mb-8 leading-relaxed animate-fade-in-up delay-200">
              無論是髒污斑駁的屋頂、老舊褪色的外牆，還是令人頭痛的漏水問題，
              我們都能以專業技術為您徹底解決。{COMPANY.completedProjects}+ 完工案例，
              {COMPANY.satisfactionRate}% 客戶滿意度。
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-10 animate-fade-in-up delay-300">
              <Link href="/contact" className="btn btn-primary btn-lg group">
                免費估價
                <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <button className="btn btn-ghost btn-lg group">
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] flex items-center justify-center mr-1">
                  <svg className="w-4 h-4 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                觀看影片
              </button>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-6 animate-fade-in-up delay-400">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] border-2 border-white flex items-center justify-center text-xs font-bold text-[var(--color-primary)]"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full bg-[var(--color-primary)] border-2 border-white flex items-center justify-center text-xs font-bold text-white">
                  +99
                </div>
              </div>
              <div>
                <div className="flex items-center gap-1 mb-0.5">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <svg key={i} className="w-4 h-4 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-[var(--color-text-muted)]">
                  <span className="font-semibold text-[var(--color-text)]">{COMPANY.satisfactionRate}%</span> 客戶滿意
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image & Stats Card */}
          <div className="relative lg:pl-8">
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl animate-scale-in">
              <div className="aspect-[4/5] bg-gradient-to-br from-[var(--color-secondary)] to-[var(--color-secondary-dark)] relative">
                {/* Placeholder for hero image */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center">
                      <svg className="w-16 h-16 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <p className="text-[var(--color-text-muted)] text-sm">專業施工團隊</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 md:left-0 bg-white rounded-2xl shadow-xl p-5 animate-slide-in-left delay-400">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-[var(--color-primary)] flex items-center justify-center">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-[var(--color-text-muted)]">完成專案</p>
                  <p className="text-2xl font-bold text-[var(--color-primary)]">
                    {COMPANY.completedProjects}+
                  </p>
                </div>
              </div>
            </div>

            {/* Floating Badge Card */}
            <div className="absolute top-8 -right-4 md:right-0 bg-white rounded-2xl shadow-xl p-4 animate-slide-in-right delay-500">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)] flex items-center justify-center">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-[var(--color-text-muted)]">服務年資</p>
                  <p className="text-lg font-bold text-[var(--color-primary)]">
                    {new Date().getFullYear() - COMPANY.yearEstablished}+ 年
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-20 text-white" viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path
            fill="currentColor"
            d="M0,64L48,58.7C96,53,192,43,288,42.7C384,43,480,53,576,58.7C672,64,768,64,864,58.7C960,53,1056,43,1152,42.7C1248,43,1344,53,1392,58.7L1440,64L1440,80L1392,80C1344,80,1248,80,1152,80C1056,80,960,80,864,80C768,80,672,80,576,80C480,80,384,80,288,80C192,80,96,80,48,80L0,80Z"
          />
        </svg>
      </div>
    </section>
  );
}
