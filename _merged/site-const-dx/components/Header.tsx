"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  const navItemsJP = [
    { href: "/", label: "ホーム" },
    { href: "/challenges", label: "業界の課題" },
    { href: "/accounting-challenges", label: "建設業会計の課題" },
    { href: "/data-classification", label: "データ設計" },
    { href: "/management-dx", label: "DXの課題" },
    { href: "/training", label: "人材育成の課題" },
    { href: "/site-efficiency", label: "現場作業効率化" },
    { href: "/gyomu-dock", label: "業務診断" },
    { href: "/services", label: "サービス" },
    { href: "/contact", label: "お問い合わせ" },
  ];

  const navItemsEN = [
    { href: "/en", label: "Home" },
    { href: "/challenges", label: "Industry Challenges" },
    { href: "/accounting-challenges", label: "Accounting Issues" },
    { href: "/data-classification", label: "Data Design" },
    { href: "/management-dx", label: "DX Challenges" },
    { href: "/training", label: "Talent Development" },
    { href: "/site-efficiency", label: "Site Efficiency" },
    { href: "/gyomu-dock", label: "Business Diagnosis" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  // Check if a nav item is active based on the current pathname
  const isActiveLink = (href: string) => {
    if (href === "/" || href === "/en") {
      return pathname === href;
    }
    return pathname.startsWith(href);
  };

  const navItems = isEnglish ? navItemsEN : navItemsJP;
  const logoText = isEnglish ? "Construction DX" : "建設DXの窓口";
  const logoHref = isEnglish ? "/en" : "/";

  return (
    <header className="fixed top-10 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-[var(--border)] z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href={logoHref} className="flex items-center gap-3">
            <span className="text-lg tracking-widest font-medium text-[var(--gray-900)]">
              {logoText}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm tracking-wider transition-colors ${
                  isActiveLink(item.href)
                    ? "text-[var(--accent)] font-medium"
                    : "text-[var(--gray-600)] hover:text-[var(--gray-900)]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Right side: Language Switch */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language Switch */}
            <div className="flex items-center text-xs text-[var(--gray-500)]">
              <Link
                href="/"
                className={`px-2 py-1 transition-colors ${
                  !isEnglish
                    ? "text-[var(--gray-900)] font-medium"
                    : "hover:text-[var(--gray-900)]"
                }`}
              >
                JP
              </Link>
              <span className="text-[var(--gray-300)]">|</span>
              <Link
                href="/en"
                className={`px-2 py-1 transition-colors ${
                  isEnglish
                    ? "text-[var(--gray-900)] font-medium"
                    : "hover:text-[var(--gray-900)]"
                }`}
              >
                EN
              </Link>
            </div>
          </div>

          {/* Mobile/Tablet: Language Switch + Menu Button */}
          <div className="md:hidden flex items-center gap-3">
            {/* Language Switch (Mobile) */}
            <div className="flex items-center text-xs text-[var(--gray-500)]">
              <Link
                href="/"
                className={`px-1.5 py-1 transition-colors ${
                  !isEnglish
                    ? "text-[var(--gray-900)] font-medium"
                    : "hover:text-[var(--gray-900)]"
                }`}
              >
                JP
              </Link>
              <span className="text-[var(--gray-300)]">|</span>
              <Link
                href="/en"
                className={`px-1.5 py-1 transition-colors ${
                  isEnglish
                    ? "text-[var(--gray-900)] font-medium"
                    : "hover:text-[var(--gray-900)]"
                }`}
              >
                EN
              </Link>
            </div>

            {/* Menu Button */}
            <button
              className="p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isEnglish ? "Menu" : "メニュー"}
            >
              <svg
                className="w-5 h-5 text-[var(--gray-900)]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-6 border-t border-[var(--border)]">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-3 tracking-wider transition-colors ${
                    isActiveLink(item.href)
                      ? "text-[var(--accent)] font-medium"
                      : "text-[var(--gray-700)] hover:text-[var(--gray-900)]"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
