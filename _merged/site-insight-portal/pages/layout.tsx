import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Harmonic Insight Apps",
    template: "%s | Harmonic Insight Apps",
  },
  description:
    "Harmonic Insightが開発するアプリケーションのポータルサイト。Android、iOS、Windows向けの便利なアプリをご紹介します。",
  openGraph: {
    title: "Harmonic Insight Apps",
    description:
      "Harmonic Insightが開発するアプリケーションのポータルサイト",
    url: "https://apps.h-insight.jp",
    siteName: "Harmonic Insight Apps",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
  return children;
}
