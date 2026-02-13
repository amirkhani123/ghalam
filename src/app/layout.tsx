import type { Metadata } from "next";
import { Vazirmatn, Zain } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  variable: "--font-vazirmatn",
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
});
const zain = Zain({
  variable: "--font-zain",
  subsets: ["arabic"],
  weight: ["300","400","700","800"],
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
    <html lang="fa-ir" dir="rtl">
      <body className={`${vazirmatn.variable} ${zain.variable} antialiased `}>{children}</body>
    </html>
  );
}
