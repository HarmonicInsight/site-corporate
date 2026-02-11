import type { Metadata } from "next";
import "./globals.css";
import { GlobalNav } from "@/components/GlobalNav";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "HARMONIC insight LLC | 業務を、誰でも回る形に",
  description:
    "ハーモニックインサイト合同会社 — 業務を部品として定義し、組み立てて、誰でも回る形にする。建設業DX支援・業務プロセス設計・ソフトウェア開発。",
  keywords: [
    "HARMONIC insight",
    "ハーモニックインサイト",
    "建設DX",
    "業務設計",
    "業務改善",
    "Insightシリーズ",
  ],
  authors: [{ name: "HARMONIC insight LLC" }],
  openGraph: {
    title: "HARMONIC insight LLC | 業務を、誰でも回る形に",
    description:
      "業務を部品として定義し、組み立てて、誰でも回る形にする。建設業DX支援・業務プロセス設計・ソフトウェア開発。",
    url: "https://h-insight.jp",
    siteName: "HARMONIC insight",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HARMONIC insight LLC | 業務を、誰でも回る形に",
    description:
      "業務を部品として定義し、組み立てて、誰でも回る形にする。建設業DX支援・業務プロセス設計・ソフトウェア開発。",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300">
        <GlobalNav />
        <div className="pt-14">
          {children}
        </div>
        <SiteFooter />
      </body>
    </html>
  );
}
