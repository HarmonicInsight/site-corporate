/**
 * HARMONIC insight 公式サイト — ナビゲーション設定
 * ドメイン: h-insight.jp
 */

export interface NavItem {
  label: string;
  labelEn: string;
  href: string;
  description?: string;
}

export const SITE_CONFIG = {
  name: "HARMONIC insight",
  domain: "https://h-insight.jp",
  email: "info@h-insight.jp",
} as const;

/** メインナビゲーション */
export const NAV_ITEMS: NavItem[] = [
  {
    label: "サービス",
    labelEn: "Services",
    href: "/services",
    description: "業務プロセス設計・改善サービス",
  },
  {
    label: "製品",
    labelEn: "Products",
    href: "/products",
    description: "Insightシリーズ製品一覧",
  },
  {
    label: "建設DX",
    labelEn: "Construction DX",
    href: "/construction-dx",
    description: "建設業界のDX支援",
  },
  {
    label: "ブログ",
    labelEn: "Blog",
    href: "/blog",
    description: "技術・ビジネス情報",
  },
  {
    label: "会社概要",
    labelEn: "Company",
    href: "/company",
    description: "会社情報・経営体制",
  },
];

/** フッター用リンク */
export const FOOTER_LINKS = {
  company: [
    { label: "会社概要", href: "/company" },
    { label: "プライバシーポリシー", href: "/privacy" },
    { label: "お問い合わせ", href: "/#contact" },
  ],
  services: [
    { label: "サービス一覧", href: "/services" },
    { label: "製品一覧", href: "/products" },
    { label: "建設DX", href: "/construction-dx" },
  ],
  external: [
    { label: "Insight Office", href: "https://www.insight-office.com/ja" },
    { label: "Insight Novels", href: "https://www.insight-novels.com/" },
    { label: "瀬田博之（コンサルタント紹介）", href: "https://erikhiroyuki.com/" },
  ],
} as const;
