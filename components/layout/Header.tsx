"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/constants";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-[var(--color-primary)] text-white py-2 text-sm">
        <div className="container flex flex-wrap items-center justify-between gap-2">
          <p className="hidden sm:block">
            專業服務 {COMPANY.region} 地區 | 免費估價
          </p>
          <div className="flex items-center gap-4 sm:gap-6 ml-auto">
            <a
              href={`mailto:${COMPANY.email}`}
              className="flex items-center gap-1.5 hover:text-[var(--color-accent)] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="hidden md:inline">{COMPANY.email}</span>
            </a>
            <a
              href={`tel:${COMPANY.phone.replace(/-/g, "")}`}
              className="flex items-center gap-1.5 hover:text-[var(--color-accent)] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{COMPANY.phone}</span>
            </a>
            <span className="hidden lg:flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {COMPANY.hours}
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-md py-3"
            : "bg-white py-4"
        }`}
      >
        <div className="container flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-10 h-10 bg-[var(--color-accent)] rounded-xl flex items-center justify-center transform group-hover:rotate-6 transition-transform">
              <svg className="w-6 h-6 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
              </svg>
            </div>
            <div>
              <span className="font-serif text-xl font-bold text-[var(--color-primary)]">
                {COMPANY.name}
              </span>
              <span className="hidden sm:block text-xs text-[var(--color-text-muted)]">
                {COMPANY.slogan}
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <div key={link.href} className="relative group">
                {link.hasDropdown ? (
                  <button
                    className="flex items-center gap-1 px-4 py-2 text-[var(--color-text)] hover:text-[var(--color-primary)] font-medium transition-colors"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {link.label}
                    <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className="px-4 py-2 text-[var(--color-text)] hover:text-[var(--color-primary)] font-medium transition-colors"
                  >
                    {link.label}
                  </Link>
                )}

                {/* Services Dropdown */}
                {link.hasDropdown && (
                  <div
                    className={`absolute top-full left-0 pt-2 transition-all duration-200 ${
                      isServicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
                    }`}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <div className="bg-white rounded-xl shadow-xl border border-[var(--color-border)] p-2 min-w-[240px]">
                      {SERVICES.map((service) => (
                        <Link
                          key={service.id}
                          href={`/services/${service.id}`}
                          className="flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-[var(--color-secondary-light)] transition-colors group/item"
                        >
                          <div className="w-10 h-10 rounded-lg bg-[var(--color-accent)]/20 flex items-center justify-center group-hover/item:bg-[var(--color-accent)] transition-colors">
                            <ServiceIcon type={service.icon} className="w-5 h-5 text-[var(--color-primary)]" />
                          </div>
                          <div>
                            <p className="font-medium text-[var(--color-primary)]">{service.title}</p>
                            <p className="text-xs text-[var(--color-text-muted)]">{service.shortDesc}</p>
                          </div>
                        </Link>
                      ))}
                      <div className="border-t border-[var(--color-border)] mt-2 pt-2">
                        <Link
                          href="/services"
                          className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-[var(--color-primary)] hover:bg-[var(--color-secondary-light)] rounded-lg transition-colors"
                        >
                          查看所有服務
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* CTA & Mobile Menu */}
          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden sm:flex btn btn-primary"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              免費估價
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 rounded-lg hover:bg-[var(--color-secondary)] transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-white border-t border-[var(--color-border)] shadow-lg transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <nav className="container py-4">
            {NAV_LINKS.map((link) => (
              <div key={link.href}>
                {link.hasDropdown ? (
                  <>
                    <button
                      className="w-full flex items-center justify-between px-4 py-3 text-[var(--color-text)] font-medium"
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                    >
                      {link.label}
                      <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {isServicesOpen && (
                      <div className="pl-4 pb-2">
                        {SERVICES.map((service) => (
                          <Link
                            key={service.id}
                            href={`/services/${service.id}`}
                            className="flex items-center gap-3 px-4 py-2 text-sm text-[var(--color-text-light)] hover:text-[var(--color-primary)]"
                            onClick={() => setIsMobileMenuOpen(false)}
                          >
                            <ServiceIcon type={service.icon} className="w-4 h-4" />
                            {service.title}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-[var(--color-text)] font-medium hover:text-[var(--color-primary)]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="px-4 pt-4 border-t border-[var(--color-border)] mt-2">
              <Link
                href="/contact"
                className="btn btn-primary w-full justify-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                免費估價
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

// Service Icon Component
function ServiceIcon({ type, className }: { type: string; className?: string }) {
  const icons: Record<string, React.ReactElement> = {
    droplets: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    paintbrush: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
      </svg>
    ),
    roller: (
      <svg className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M18 4V3c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V6h1v4H9v11c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-9h8V4h-3z"/>
      </svg>
    ),
    shield: (
      <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  };

  return icons[type] || icons.droplets;
}
