import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Harmonic Insight LLC | 思考と創造を、形にする",
  description:
    "ハーモニックインサイト合同会社 - AIと人間の共創による小説・書籍シリーズ、プロフェッショナル向け生産性ツール、ライフスタイルアプリを提供。",
  keywords: [
    "Harmonic Insight",
    "ハーモニックインサイト",
    "AI小説",
    "生産性ツール",
    "ライフスタイルアプリ",
  ],
  authors: [{ name: "Harmonic Insight LLC" }],
  openGraph: {
    title: "Harmonic Insight LLC | 思考と創造を、形にする",
    description:
      "AIと人間の共創による小説・書籍シリーズ、プロフェッショナル向け生産性ツール、ライフスタイルアプリを提供。",
    url: "https://harmonic-insight.jp",
    siteName: "Harmonic Insight",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Harmonic Insight LLC | 思考と創造を、形にする",
    description:
      "AIと人間の共創による小説・書籍シリーズ、プロフェッショナル向け生産性ツール、ライフスタイルアプリを提供。",
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
        {children}
      </body>
    </html>
  );
}
