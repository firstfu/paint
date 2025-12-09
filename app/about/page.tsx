import { Metadata } from "next";
import Link from "next/link";
import { COMPANY, TEAM_MEMBERS, SERVICES } from "@/lib/constants";

export const metadata: Metadata = {
  title: `關於我們 - ${COMPANY.region}在地${new Date().getFullYear() - COMPANY.yearEstablished}年專業團隊`,
  description: `認識${COMPANY.name}：${COMPANY.region}專業屋頂清洗、油漆、防水服務團隊。成立於${COMPANY.yearEstablished}年，擁有${new Date().getFullYear() - COMPANY.yearEstablished}年豐富經驗，服務超過${COMPANY.completedProjects}戶家庭。`,
};

export default function AboutPage() {
  const yearsExperience = new Date().getFullYear() - COMPANY.yearEstablished;

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 gradient-hero relative overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <span className="section-label justify-center">關於我們</span>
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--color-primary)] mb-6">
              {COMPANY.region}在地 {yearsExperience} 年<br />專業油漆防水團隊
            </h1>
            <p className="text-lg text-[var(--color-text-light)]">
              {COMPANY.slogan}，從一個小工班到今天的專業團隊，
              我們始終堅持品質第一、服務至上的理念
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="aspect-square bg-[var(--color-secondary)] rounded-3xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center">
                      <span className="text-6xl font-bold text-[var(--color-primary)]">{yearsExperience}</span>
                    </div>
                    <p className="text-xl font-medium text-[var(--color-text)]">年專業經驗</p>
                  </div>
                </div>
              </div>
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-6 max-w-xs">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)] flex items-center justify-center">
                    <svg className="w-6 h-6 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[var(--color-primary)]">{COMPANY.satisfactionRate}%</p>
                    <p className="text-sm text-[var(--color-text-muted)]">客戶滿意度</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <span className="badge badge-accent mb-4">Our Story</span>
              <h2 className="text-3xl font-bold text-[var(--color-primary)] mb-6">
                從街坊鄰居的信任開始
              </h2>
              <div className="space-y-4 text-[var(--color-text-light)] leading-relaxed">
                <p>
                  {COMPANY.yearEstablished} 年，創辦人陳建國師傅憑著一身好手藝，開始為南投鄉親服務。
                  從最初的街坊鄰居口耳相傳，到今天服務遍及整個南投縣，
                  {COMPANY.name}始終保持著創業時的初心。
                </p>
                <p>
                  我們相信，每一間房子都是屋主的心血結晶。無論是洗屋頂、油漆還是防水工程，
                  我們都以對待自己家的心態來服務每一位客戶。這份用心，就是我們能夠累積超過
                  {COMPANY.completedProjects} 個案例的原因。
                </p>
                <p>
                  今天的{COMPANY.name}已經是一支專業團隊，但我們從未忘記最初的承諾：
                  用最實在的價格，提供最專業的服務。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[var(--color-background-alt)]">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label justify-center">Our Values</span>
            <h2 className="section-title">我們的核心價值</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "品質保證",
                description: "使用優質材料，嚴格把關每一道工序。我們的工程都有保固，讓您無後顧之憂。",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "價格透明",
                description: "免費到府評估，報價單清楚明瞭。絕不中途加價，讓您放心託付。",
              },
              {
                icon: (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                ),
                title: "用心服務",
                description: "把每一間房子當成自己的家來對待，細心呵護您的居住空間。",
              },
            ].map((value, i) => (
              <div key={i} className="card p-8 text-center">
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[var(--color-accent)] flex items-center justify-center text-[var(--color-primary)]">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                  {value.title}
                </h3>
                <p className="text-[var(--color-text-light)]">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label justify-center">Our Team</span>
            <h2 className="section-title">專業團隊</h2>
            <p className="section-description">
              經驗豐富的專業師傅，是我們最大的資產
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {TEAM_MEMBERS.map((member) => (
              <div key={member.id} className="card p-6 text-center group">
                {/* Avatar */}
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-[var(--color-secondary)] flex items-center justify-center relative overflow-hidden">
                  <span className="text-4xl font-bold text-[var(--color-primary)]">
                    {member.name[0]}
                  </span>
                  {/* Experience Badge */}
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 bg-[var(--color-accent)] text-[var(--color-primary)] text-xs font-bold px-3 py-1 rounded-full">
                    {member.experience}經驗
                  </div>
                </div>
                <h3 className="text-xl font-bold text-[var(--color-primary)] mb-1">
                  {member.name}
                </h3>
                <p className="text-[var(--color-accent-dark)] font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-[var(--color-text-light)] text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 bg-[var(--color-secondary)]">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label justify-center">Service Areas</span>
            <h2 className="section-title">服務範圍</h2>
            <p className="section-description">
              深耕{COMPANY.region}，服務遍及各鄉鎮
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {COMPANY.subRegions.map((region) => (
              <div
                key={region}
                className="bg-white rounded-xl p-4 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-[var(--color-accent)]/20 flex items-center justify-center">
                  <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <p className="font-medium text-[var(--color-text)]">{region}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <span className="section-label justify-center">Our Services</span>
            <h2 className="section-title">服務項目</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {SERVICES.map((service) => (
              <Link
                key={service.id}
                href={`/services/${service.id}`}
                className="card p-6 hover:border-[var(--color-accent)] transition-colors group"
              >
                <div className="w-12 h-12 mb-4 rounded-xl bg-[var(--color-secondary)] flex items-center justify-center group-hover:bg-[var(--color-accent)] transition-colors">
                  <span className="text-2xl">
                    {service.icon === "droplets" && "💧"}
                    {service.icon === "paintbrush" && "🖌️"}
                    {service.icon === "roller" && "🎨"}
                    {service.icon === "shield" && "🛡️"}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-[var(--color-primary)] mb-2 group-hover:text-[var(--color-accent-dark)]">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--color-text-light)]">
                  {service.shortDesc}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[var(--color-primary)]">
        <div className="container">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              讓我們為您服務
            </h2>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              {yearsExperience} 年經驗，{COMPANY.completedProjects}+ 完工案例，
              您值得最專業的服務
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/contact" className="btn btn-accent btn-lg">
                免費估價
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/portfolio" className="btn bg-white/10 text-white hover:bg-white/20 btn-lg">
                查看案例
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
