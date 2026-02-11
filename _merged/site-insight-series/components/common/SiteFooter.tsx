"use client";

import Link from "next/link";
import {
  Building2,
  Package,
  AppWindow,
  Layers,
  LayoutDashboard,
  ExternalLink,
  Mail,
  FileText,
  Hammer,
} from "lucide-react";

// Harmonic Insight サイト一覧
const sites = [
  {
    id: "corporate",
    name: "Harmonic Insight",
    description: "コーポレートサイト",
    url: "https://h-insight.jp",
    icon: Building2,
  },
  {
    id: "construction-dx",
    name: "建設DXコンサル",
    description: "建設業向けDX支援",
    url: "https://construction-dx.h-insight.jp",
    icon: Hammer,
  },
  {
    id: "insight-series",
    name: "Insightシリーズ",
    description: "業務効率化ツール",
    url: "/",
    icon: Package,
  },
  {
    id: "apps",
    name: "Apps",
    description: "アプリポータル",
    url: "https://apps.h-insight.jp",
    icon: AppWindow,
  },
  {
    id: "framework",
    name: "Framework",
    description: "開発フレームワーク",
    url: "https://insight-framework.vercel.app",
    icon: Layers,
  },
  {
    id: "dashboard",
    name: "Dashboard",
    description: "管理ダッシュボード",
    url: "https://dashboard.h-insight.jp",
    icon: LayoutDashboard,
  },
];

interface FooterLink {
  label: string;
  href: string;
}

interface FooterLinkGroup {
  title: string;
  links: FooterLink[];
}

interface SiteFooterProps {
  currentSite?: string;
  footerLinks?: FooterLinkGroup[];
  description?: string;
}

const defaultFooterLinks: FooterLinkGroup[] = [
  {
    title: "Products",
    links: [
      { label: "InsightSlides", href: "/products/insightslides" },
      { label: "InsightPy", href: "/products/insightpy" },
      { label: "Interview Insight", href: "/products/interview-insight" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "ドキュメント", href: "/docs" },
      { label: "ブログ", href: "/blog" },
      { label: "価格・プラン", href: "/pricing" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "私たちについて", href: "/about" },
      { label: "お問い合わせ", href: "/contact" },
      { label: "利用規約", href: "/legal/terms" },
      { label: "プライバシーポリシー", href: "/legal/privacy" },
    ],
  },
];

export function SiteFooter({
  currentSite = "insight-series",
  footerLinks = defaultFooterLinks,
  description = "業務の効率化・自動化を支援するソフトウェア群。資料作成、Python実行環境、インタビュー自動化など。",
}: SiteFooterProps) {
  const currentYear = new Date().getFullYear();
  const relatedSites = sites.filter((s) => s.id !== currentSite);

  return (
    <footer className="border-t border-[var(--border-primary)] bg-[var(--bg-secondary)]">
      {/* Related Sites */}
      <div className="border-b border-[var(--border-primary)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-xs font-medium text-[var(--text-tertiary)] uppercase tracking-wide mb-4">
            Harmonic Insight Sites
          </p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {relatedSites.map((site) => {
              const Icon = site.icon;
              const isExternal = site.url.startsWith("http");
              return (
                <a
                  key={site.id}
                  href={site.url}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-2 p-3 rounded-lg bg-[var(--bg-tertiary)] border border-[var(--border-primary)] hover:border-[var(--border-secondary)] transition-colors group"
                >
                  <Icon className="h-4 w-4 text-[var(--text-tertiary)] group-hover:text-[var(--accent-primary)] transition-colors" />
                  <span className="text-sm text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors">
                    {site.name}
                  </span>
                  {isExternal && (
                    <ExternalLink className="h-3 w-3 text-[var(--text-muted)] ml-auto" />
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid gap-8 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent-primary)]">
                <span className="text-sm font-bold text-white">I</span>
              </div>
              <span className="text-lg font-semibold text-[var(--text-primary)]">
                Insightシリーズ
              </span>
            </Link>
            <p className="mt-4 text-sm text-[var(--text-secondary)] max-w-sm">
              {description}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://note.com/h_insight"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[var(--text-tertiary)] hover:text-[var(--accent-primary)] transition-colors"
              >
                <FileText className="h-4 w-4" />
                <span>note</span>
              </a>
              <a
                href="mailto:support@h-insight.jp"
                className="flex items-center gap-2 text-sm text-[var(--text-tertiary)] hover:text-[var(--accent-primary)] transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>お問い合わせ</span>
              </a>
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-semibold text-[var(--text-primary)] mb-4">
                {group.title}
              </h3>
              <ul className="space-y-2">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--accent-primary)] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-[var(--border-primary)]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-sm text-[var(--text-tertiary)]">
            &copy; {currentYear} Harmonic Insight. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
