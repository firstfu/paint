import type { Metadata } from "next";
import { Noto_Sans_TC, Noto_Serif_TC } from "next/font/google";
import "./globals.css";
import { COMPANY, SEO_KEYWORDS } from "@/lib/constants";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const notoSans = Noto_Sans_TC({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const notoSerif = Noto_Serif_TC({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.region}屋頂清洗、油漆、防水專家 | ${COMPANY.name} - ${COMPANY.slogan}`,
    template: `%s | ${COMPANY.name}`,
  },
  description: `${COMPANY.name}提供${COMPANY.region}專業屋頂清洗、屋頂油漆、室內油漆、防水處理服務。${COMPANY.completedProjects}+完工案例，${COMPANY.satisfactionRate}%客戶滿意度。立即預約免費估價！`,
  keywords: [...SEO_KEYWORDS.primary, ...SEO_KEYWORDS.secondary, ...SEO_KEYWORDS.local],
  authors: [{ name: COMPANY.name }],
  creator: COMPANY.name,
  publisher: COMPANY.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://tuxinju.com.tw"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "zh_TW",
    url: "https://tuxinju.com.tw",
    siteName: COMPANY.name,
    title: `${COMPANY.region}屋頂清洗、油漆、防水專家 | ${COMPANY.name}`,
    description: `${COMPANY.name}提供${COMPANY.region}專業屋頂清洗、屋頂油漆、室內油漆、防水處理服務。立即預約免費估價！`,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${COMPANY.name} - ${COMPANY.slogan}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.region}屋頂清洗、油漆、防水專家 | ${COMPANY.name}`,
    description: `${COMPANY.name}提供${COMPANY.region}專業屋頂清洗、屋頂油漆、室內油漆、防水處理服務。`,
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-TW">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1A1B4B" />
      </head>
      <body
        className={`${notoSans.variable} ${notoSerif.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
