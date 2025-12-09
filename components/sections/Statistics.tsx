"use client";

import { useEffect, useState, useRef } from "react";
import { COMPANY } from "@/lib/constants";

const stats = [
  {
    value: COMPANY.completedProjects,
    suffix: "+",
    label: "完成專案",
    description: "累積服務案例",
  },
  {
    value: new Date().getFullYear() - COMPANY.yearEstablished,
    suffix: "年",
    label: "服務經驗",
    description: "專業累積年資",
  },
  {
    value: COMPANY.satisfactionRate,
    suffix: "%",
    label: "客戶滿意度",
    description: "優質服務保證",
  },
  {
    value: COMPANY.subRegions.length,
    suffix: "+",
    label: "服務區域",
    description: "遍及南投各地",
  },
];

function useCountUp(end: number, duration: number = 2000, start: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }, [end, duration, start]);

  return count;
}

export default function Statistics() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-[var(--color-primary)] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({
  stat,
  index,
  isVisible,
}: {
  stat: typeof stats[0];
  index: number;
  isVisible: boolean;
}) {
  const count = useCountUp(stat.value, 2000, isVisible);

  return (
    <div
      className="text-center group"
      style={{ animationDelay: `${index * 150}ms` }}
    >
      <div className="relative inline-block mb-4">
        {/* Decorative circle */}
        <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full bg-white/10 transform group-hover:scale-110 transition-transform" />
        <div className="relative w-24 h-24 mx-auto rounded-full bg-[var(--color-accent)] flex items-center justify-center">
          <span className="text-3xl font-bold text-[var(--color-primary)]">
            {count}{stat.suffix}
          </span>
        </div>
      </div>
      <h3 className="text-xl font-semibold text-white mb-1">
        {stat.label}
      </h3>
      <p className="text-white/60 text-sm">
        {stat.description}
      </p>
    </div>
  );
}
