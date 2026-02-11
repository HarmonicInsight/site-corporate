"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const siteMapJP = [
  {
    href: "https://harmonic-insight-corporate.vercel.app/company",
    label: "Home",
    description: "思想・ビジョン・アプローチ",
  },
  {
    href: "/",
    label: "建設DX",
    description: "建設業向け業務改善",
    current: true,
  },
  {
    href: "https://insight-series-site.vercel.app/",
    label: "Insight Series",
    description: "業務自動化ツール群",
  },
  {
    href: "https://h-insight-apps-portal.vercel.app/",
    label: "Apps/Lab",
    description: "実験的アプリ・検証",
  },
  {
    href: "https://toko-bi.vercel.app/",
    label: "Dashboard Samples",
    description: "データ運用設計のプロトタイプ",
  },
];

const siteMapEN = [
  {
    href: "https://harmonic-insight-corporate.vercel.app/en/company",
    label: "Home",
    description: "Vision & Approach",
  },
  {
    href: "/en",
    label: "Construction DX",
    description: "Construction industry solutions",
    current: true,
  },
  {
    href: "https://insight-series-site.vercel.app/",
    label: "Insight Series",
    description: "Automation tools",
  },
  {
    href: "https://h-insight-apps-portal.vercel.app/",
    label: "Apps/Lab",
    description: "Experimental apps",
  },
  {
    href: "https://toko-bi.vercel.app/",
    label: "Dashboard Samples",
    description: "Data operation prototypes",
  },
];

export default function Footer() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  const siteMap = isEnglish ? siteMapEN : siteMapJP;
  const currentLabel = isEnglish ? "(current)" : "（現在地）";

  return (
    <footer className="bg-[var(--gray-900)] text-white">
      <div className="container-custom py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-4">
            <span className="text-lg tracking-widest font-medium">
              Harmonic Insight
            </span>
            <p className="text-[var(--accent)] text-sm mt-2 mb-4">
              {isEnglish
                ? "Transform decisions into systems"
                : "判断を、仕組みに変える"}
            </p>
            <p className="text-[var(--gray-400)] text-sm leading-relaxed max-w-sm">
              {isEnglish
                ? "Shape data into actionable insights. Replace individual expertise with systematic processes. Start with designs that make work easier."
                : "データを「判断に使える形」に整える。属人化を仕組みで解消する。現場が楽になる設計から始める。"}
            </p>
          </div>

          {/* Site Map */}
          <div className="md:col-span-3">
            <h4 className="text-sm tracking-wider mb-6 text-[var(--gray-300)]">
              {isEnglish ? "Sites" : "サイト群"}
            </h4>
            <ul className="space-y-3">
              {siteMap.map((site) => (
                <li key={site.href}>
                  {site.current ? (
                    <span className="text-sm text-white">
                      {site.label}
                      <span className="text-[var(--gray-500)] ml-2 text-xs">{currentLabel}</span>
                    </span>
                  ) : (
                    <Link
                      href={site.href}
                      className="text-sm text-[var(--gray-400)] hover:text-white transition-colors"
                      target={site.href.startsWith("http") ? "_blank" : undefined}
                      rel={site.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {site.label}
                      <span className="text-[var(--gray-600)] ml-2 text-xs">{site.description}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services / Links */}
          <div className="md:col-span-2">
            <h4 className="text-sm tracking-wider mb-6 text-[var(--gray-300)]">
              {isEnglish ? "Links" : "サービス"}
            </h4>
            <ul className="space-y-3">
              {isEnglish ? (
                <>
                  <li>
                    <Link href="/en#method" className="text-sm text-[var(--gray-400)] hover:text-white transition-colors">
                      Our Approach
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://harmonic-insight-corporate.vercel.app/en/company"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-[var(--gray-400)] hover:text-white transition-colors"
                    >
                      About Us
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link href="/gyomu-dock" className="text-sm text-[var(--gray-400)] hover:text-white transition-colors">
                      業務ドック
                    </Link>
                  </li>
                  <li>
                    <Link href="/diagnosis" className="text-sm text-[var(--gray-400)] hover:text-white transition-colors">
                      無料診断
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="text-sm text-[var(--gray-400)] hover:text-white transition-colors">
                      サービス一覧
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="text-sm tracking-wider mb-6 text-[var(--gray-300)]">
              {isEnglish ? "Contact" : "コンタクト"}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href={isEnglish ? "/en#contact" : "/contact"}
                  className="text-sm text-[var(--accent)] hover:text-white transition-colors"
                >
                  {isEnglish ? "Get in Touch" : "初回相談（30分・無料）"}
                </Link>
              </li>
              {!isEnglish && (
                <li>
                  <Link href="/philosophy" className="text-sm text-[var(--gray-400)] hover:text-white transition-colors">
                    私たちの考え
                  </Link>
                </li>
              )}
              <li>
                <a
                  href="mailto:info@h-insight.jp"
                  className="text-sm text-[var(--gray-400)] hover:text-white transition-colors"
                >
                  info@h-insight.jp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[var(--gray-800)] mt-16 pt-8 text-center text-[var(--gray-500)] text-xs tracking-wider">
          <p>
            &copy; {new Date().getFullYear()} Harmonic Insight —{" "}
            {isEnglish
              ? "Transform decisions into systems"
              : "判断を、仕組みに変える"}
          </p>
        </div>
      </div>
    </footer>
  );
}
