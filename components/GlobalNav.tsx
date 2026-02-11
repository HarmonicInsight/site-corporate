"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_ITEMS, SITE_CONFIG } from "@/lib/navigation";

export function GlobalNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  return (
    <div className="fixed top-0 left-0 right-0 bg-gray-900 text-white z-[60]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14">
          {/* Brand + Nav */}
          <div className="flex items-center min-w-0">
            <Link
              href={isEnglish ? "/en" : "/"}
              className="text-white tracking-wider font-medium whitespace-nowrap mr-4 text-sm"
            >
              {SITE_CONFIG.name}
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center">
              {NAV_ITEMS.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm px-3 py-1 transition-colors whitespace-nowrap ${
                      isActive
                        ? "text-white font-medium"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {isEnglish ? item.labelEn : item.label}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* Right: Language + Contact + Mobile */}
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center text-xs">
              <Link
                href={isEnglish ? pathname.replace(/^\/en/, "") || "/" : `/en${pathname === "/" ? "" : pathname}`}
                className="text-gray-400 hover:text-white transition-colors"
              >
                {isEnglish ? "JP" : "EN"}
              </Link>
            </div>

            <Link
              href="/#contact"
              className="hidden sm:block text-xs text-gray-400 hover:text-white transition-colors whitespace-nowrap"
            >
              お問い合わせ →
            </Link>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-1.5 text-gray-400 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="メニュー"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-3 border-t border-gray-800">
            {NAV_ITEMS.map((item) => {
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`block py-2.5 px-1 text-sm ${
                    isActive ? "text-white font-medium" : "text-gray-400 hover:text-white"
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {isEnglish ? item.labelEn : item.label}
                </Link>
              );
            })}
            <div className="mt-3 pt-3 border-t border-gray-800 flex items-center justify-between">
              <Link
                href="/#contact"
                className="block py-2 px-1 text-sm text-gray-400 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                お問い合わせ →
              </Link>
              <Link
                href={isEnglish ? pathname.replace(/^\/en/, "") || "/" : `/en${pathname === "/" ? "" : pathname}`}
                className="text-sm text-gray-400 hover:text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                {isEnglish ? "日本語" : "English"}
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default GlobalNav;
