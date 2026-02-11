export const siteConfig = {
  name: "Insightシリーズ",
  company: "Harmonic Insight",
  description:
    "業務の効率化・自動化を支援するソフトウェア群。資料作成、Python実行環境、インタビュー自動化など。",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://insight.h-insight.jp",
  email: "support@h-insight.jp",
  links: {
    contact: "/contact",
    terms: "/legal/terms",
    privacy: "/legal/privacy",
  },
  navigation: [
    { label: "製品", href: "/products" },
    { label: "価格", href: "/pricing" },
    { label: "ドキュメント", href: "/docs" },
    { label: "お問い合わせ", href: "/contact" },
  ],
  footer: {
    company: "Harmonic Insight",
    links: [
      { label: "利用規約", href: "/legal/terms" },
      { label: "プライバシーポリシー", href: "/legal/privacy" },
      { label: "お問い合わせ", href: "/contact" },
    ],
  },
};
