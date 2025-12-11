"use client";

import { TEAM_MEMBERS } from "@/lib/constants";

export default function Team() {
  return (
    <section className="py-20 bg-[var(--color-background-alt)]" id="team">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="section-label">專業團隊</span>
          <h2 className="section-title">
            值得信賴的夥伴
          </h2>
          <p className="section-description mx-auto">
            專業師傅團隊，為您提供最優質的服務
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={member.id}
              className="group text-center"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Avatar */}
              <div className="relative mb-6 inline-block">
                <div className="w-36 h-36 mx-auto rounded-full bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-accent-dark)] p-1">
                  <div className="w-full h-full rounded-full bg-[var(--color-secondary)] flex items-center justify-center">
                    <span className="text-4xl font-bold text-[var(--color-primary)]">
                      {member.name.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Info */}
              <h3 className="text-xl font-semibold text-[var(--color-primary)] mb-1">
                {member.name}
              </h3>
              <p className="text-[var(--color-accent-dark)] font-medium text-sm mb-3">
                {member.role}
              </p>
              <p className="text-sm text-[var(--color-text-light)] max-w-xs mx-auto">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
