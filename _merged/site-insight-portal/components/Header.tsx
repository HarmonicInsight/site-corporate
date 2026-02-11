"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const menuItems = [
  { href: "/", label: "ホーム" },
  { href: "/news", label: "ニュース" },
  { href: "/about", label: "このサイトについて" },
  { href: "/support", label: "サポート" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-10 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-14">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="text-lg font-semibold text-gray-900">
                Harmonic Insight
              </Link>
            </div>

            {/* Desktop Navigation - Center */}
            <nav className="hidden md:flex items-center">
              {[
                { href: "/", label: "Apps" },
                { href: "/news", label: "News" },
                { href: "/about", label: "About" },
                { href: "/support", label: "Support" },
              ].map((item, index) => (
                <span key={item.href} className="flex items-center">
                  {index > 0 && <span className="text-gray-300 mx-1">|</span>}
                  <Link
                    href={item.href}
                    className="px-3 py-1 text-sm text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    {item.label}
                  </Link>
                </span>
              ))}
            </nav>

            {/* Right side - Language */}
            <div className="hidden md:flex items-center space-x-1 text-sm">
              <span className="text-gray-900 font-medium">JP</span>
              <span className="text-gray-300">|</span>
              <button
                className="text-gray-400 hover:text-gray-600 transition-colors"
                title="English (coming soon)"
              >
                EN
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">メニューを開く</span>
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu - Full screen overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white md:hidden">
          {/* Header */}
          <div className="flex items-center justify-between px-4 h-14 border-b border-gray-200">
            <span className="text-lg font-semibold text-gray-900">
              Harmonic Insight
            </span>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1 text-sm">
                <span className="text-gray-900 font-medium">JP</span>
                <span className="text-gray-300">|</span>
                <span className="text-gray-400">EN</span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-gray-700"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Menu items */}
          <nav className="px-4 py-6">
            {menuItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-4 border-b border-gray-100 text-base ${
                    isActive ? "text-amber-600 font-medium" : "text-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
