import type { Metadata } from "next";
import "./globals.css";
import { GlobalNav } from "@/components/GlobalNav";
import Header from "@/components/Header";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "建設DXの窓口 | ツールの前に、判断を整える",
  description:
    "DXも管理会計も、間違っていない。それでも月次が苦しくなるのは、判断の前提が混ざっているからです。まずは、あなたの会社の「今どこが詰まっているか」を一緒に整理します。",
  keywords: "建設DX, DXコンサルティング, 建設業, 管理会計, 月次決算, DX支援",
  openGraph: {
    title: "建設DXの窓口 | ツールの前に、判断を整える",
    description:
      "DXも管理会計も、間違っていない。それでも月次が苦しくなるのは、判断の前提が混ざっているからです。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="antialiased">
        <GlobalNav />
        <Header />
        <main className="pt-24 md:pt-28">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
