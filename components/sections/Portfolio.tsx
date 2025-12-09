"use client";

import { useState } from "react";
import Link from "next/link";
import { PORTFOLIO_ITEMS, SERVICES } from "@/lib/constants";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredItems = activeFilter === "all"
    ? PORTFOLIO_ITEMS
    : PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section className="py-20 bg-[var(--color-background-alt)]" id="portfolio">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="section-label">案例展示</span>
          <h2 className="section-title">
            實際成果對比
          </h2>
          <p className="section-description mx-auto">
            眼見為憑，看看我們如何讓老舊房屋煥然一新
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
              activeFilter === "all"
                ? "bg-[var(--color-primary)] text-white"
                : "bg-white text-[var(--color-text)] hover:bg-[var(--color-secondary)]"
            }`}
          >
            全部
          </button>
          {SERVICES.map(service => (
            <button
              key={service.id}
              onClick={() => setActiveFilter(service.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeFilter === service.id
                  ? "bg-[var(--color-primary)] text-white"
                  : "bg-white text-[var(--color-text)] hover:bg-[var(--color-secondary)]"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filteredItems.map((item, index) => (
            <PortfolioCard key={item.id} item={item} index={index} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link href="/portfolio" className="btn btn-outline">
            查看更多案例
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

function PortfolioCard({
  item,
  index,
}: {
  item: typeof PORTFOLIO_ITEMS[number];
  index: number;
}) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.touches[0].clientX - rect.left, rect.width));
    setSliderPosition((x / rect.width) * 100);
  };

  const service = SERVICES.find(s => s.id === item.category);

  return (
    <div
      className="card overflow-hidden"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Before/After Slider */}
      <div
        className="relative aspect-[16/10] cursor-ew-resize select-none"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* Before Image (Background) */}
        <div className="absolute inset-0 bg-[var(--color-secondary)]">
          <div className="w-full h-full flex items-center justify-center text-[var(--color-text-muted)]">
            <span className="text-sm">Before 圖片</span>
          </div>
        </div>

        {/* After Image (Overlay with clip) */}
        <div
          className="absolute inset-0 bg-[var(--color-accent)]/20"
          style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
        >
          <div className="w-full h-full flex items-center justify-center text-[var(--color-primary)]">
            <span className="text-sm">After 圖片</span>
          </div>
        </div>

        {/* Slider Handle */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-lg"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute bottom-4 left-4 px-3 py-1 bg-black/50 text-white text-xs font-medium rounded-full backdrop-blur-sm">
          Before
        </div>
        <div className="absolute bottom-4 right-4 px-3 py-1 bg-[var(--color-accent)] text-[var(--color-primary)] text-xs font-medium rounded-full">
          After
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <span className="badge badge-accent text-xs">{service?.title}</span>
          <span className="text-xs text-[var(--color-text-muted)]">{item.location}</span>
        </div>
        <h3 className="text-lg font-semibold text-[var(--color-primary)] mb-2">
          {item.title}
        </h3>
        <p className="text-sm text-[var(--color-text-light)]">
          {item.description}
        </p>
      </div>
    </div>
  );
}
