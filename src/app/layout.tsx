import type { Metadata } from "next";

import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import localFont from "next/font/local";
import { Zain } from "next/font/google";
const estedad = localFont({
  src: "../../public/fonts/Estedad-Regular.woff2",
  weight: "400",
  variable: "--font-vazirmatn",
});
const zain = Zain({
  variable: "--font-zain",
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
});

export const metadata: Metadata = {
  title: "قلم | خدمات قضایی و اینترنتی",
  description:
    "کافی نت قلم ارائه‌دهنده خدمات اداری و اینترنتی شامل پرداخت قبوض، استعلام و پرداخت خلافی خودرو، انجام امور مالیاتی و خدمات نوشت‌افزاری، با محیطی امن و ساده برای کاربران در سراسر ایران.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa-ir" dir="rtl" className=" scroll-smooth">
      <body
        className={`${estedad.variable} ${zain.variable} antialiased  container m-auto box-border relative font-sans  `}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
