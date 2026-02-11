"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Building2,
  Package,
  AppWindow,
  Layers,
  LayoutDashboard,
  ExternalLink,
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
    isCurrent: true,
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

interface NavLink {
  label: string;
  href: string;
}

interface CTAButton {
  label: string;
  href: string;
}

interface SiteNavigationProps {
  currentSite?: string;
  navLinks?: NavLink[];
  ctaButton?: CTAButton;
}

const defaultNavLinks: NavLink[] = [
  { label: "Products", href: "/products" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "/docs" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

export function SiteNavigation({
  currentSite = "insight-series",
  navLinks = defaultNavLinks,
  ctaButton = { label: "お問い合わせ", href: "/contact" },
}: SiteNavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [siteMenuOpen, setSiteMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentSiteInfo = sites.find((s) => s.id === currentSite) || sites[2];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg-primary)]/95 backdrop-blur-md border-b border-[var(--border-primary)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav className="flex h-16 items-center justify-between">
          {/* Logo & Site Switcher */}
          <div className="flex items-center gap-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--accent-primary)]">
                <span className="text-sm font-bold text-white">I</span>
              </div>
              <span className="text-lg font-semibold text-[var(--text-primary)]">
                {currentSiteInfo.name}
              </span>
            </Link>

            {/* Site Switcher Dropdown */}
            <div className="relative hidden md:block">
              <button
                onClick={() => setSiteMenuOpen(!siteMenuOpen)}
                className="flex items-center gap-1 rounded-lg px-2 py-1 text-sm text-[var(--text-tertiary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-secondary)] transition-colors"
              >
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${siteMenuOpen ? "rotate-180" : ""}`}
                />
              </button>

              {siteMenuOpen && (
                <>
                  <div
                    className="fixed inset-0 z-40"
                    onClick={() => setSiteMenuOpen(false)}
                  />
                  <div className="absolute left-0 top-full z-50 mt-2 w-64 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-primary)] shadow-lg overflow-hidden">
                    <div className="p-2">
                      <p className="px-3 py-2 text-xs font-medium text-[var(--text-tertiary)] uppercase tracking-wide">
                        Harmonic Insight Sites
                      </p>
                      {sites.map((site) => {
                        const Icon = site.icon;
                        const isCurrentSite = site.id === currentSite;
                        const isExternal = site.url.startsWith("http");

                        return (
                          <a
                            key={site.id}
                            href={site.url}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noopener noreferrer" : undefined}
                            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                              isCurrentSite
                                ? "bg-[var(--accent-primary)]/10 text-[var(--accent-primary)]"
                                : "text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)]"
                            }`}
                            onClick={() => setSiteMenuOpen(false)}
                          >
                            <Icon className="h-4 w-4" />
                            <div className="flex-1">
                              <div className="text-sm font-medium">{site.name}</div>
                              <div className="text-xs text-[var(--text-tertiary)]">
                                {site.description}
                              </div>
                            </div>
                            {isExternal && (
                              <ExternalLink className="h-3 w-3 text-[var(--text-tertiary)]" />
                            )}
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-[var(--accent-primary)]"
                    : "text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-3 md:flex">
            <Link
              href={ctaButton.href}
              className="btn-primary text-sm"
            >
              {ctaButton.label}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            className="rounded-lg p-2 text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-[var(--border-primary)] bg-[var(--bg-primary)]">
            <div className="flex flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    pathname === link.href
                      ? "text-[var(--accent-primary)] bg-[var(--accent-primary)]/10"
                      : "text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="mt-3 px-4">
                <Link
                  href={ctaButton.href}
                  className="btn-primary block text-center text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {ctaButton.label}
                </Link>
              </div>

              {/* Mobile Site Switcher */}
              <div className="mt-4 border-t border-[var(--border-primary)] pt-4">
                <p className="px-4 text-xs font-medium text-[var(--text-tertiary)] uppercase tracking-wide mb-2">
                  Other Sites
                </p>
                {sites
                  .filter((s) => s.id !== currentSite)
                  .map((site) => {
                    const Icon = site.icon;
                    const isExternal = site.url.startsWith("http");
                    return (
                      <a
                        key={site.id}
                        href={site.url}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-3 px-4 py-2 text-sm text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)]"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        <Icon className="h-4 w-4" />
                        <span>{site.name}</span>
                        {isExternal && (
                          <ExternalLink className="h-3 w-3 ml-auto" />
                        )}
                      </a>
                    );
                  })}
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
