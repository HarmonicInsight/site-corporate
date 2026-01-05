"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isEnglish = pathname.startsWith("/en");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getAlternatePath = () => {
    if (isEnglish) {
      const jpPath = pathname.replace(/^\/en/, "") || "/";
      return jpPath;
    } else {
      return `/en${pathname === "/" ? "" : pathname}`;
    }
  };

  // Group sites navigation (dark bar) - matching const-dx-home exactly
  const groupSites = [
    { href: "/", label: "Home", current: true },
    { href: "https://const-dx-home.vercel.app/", label: "建設DX", external: true },
    { href: "https://insight-series-site.vercel.app/", label: "Insight Series", external: true },
    { href: "https://h-insight-apps-portal.vercel.app/", label: "Apps/Lab", external: true },
    { href: "https://insight-bi-ruby.vercel.app/", label: "Dashboard", external: true },
  ];

  // Site-specific navigation
  const navItems = isEnglish
    ? [
        { href: "/en/company", label: "Company" },
      ]
    : [
        { href: "/company", label: "会社概要" },
      ];

  const contactHref = isEnglish ? "/en#contact" : "#contact";
  const homeHref = isEnglish ? "/en" : "/";

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Dark Group Navigation Bar */}
      <div className="bg-gray-900 text-white text-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-10">
            {/* Left: Group Sites */}
            <nav className="flex items-center overflow-x-auto">
              <span className="font-medium whitespace-nowrap">Harmonic Insight</span>
              <span className="text-gray-600 mx-2 hidden sm:inline">|</span>

              {groupSites.map((site, index) => (
                <span key={site.href} className="flex items-center whitespace-nowrap">
                  {index > 0 && <span className="text-gray-600 mx-1 hidden sm:inline">|</span>}
                  {site.external ? (
                    <a
                      href={site.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors px-1 sm:px-2"
                    >
                      {site.label}
                    </a>
                  ) : (
                    <Link
                      href={site.href}
                      className={`px-1 sm:px-2 transition-colors ${
                        site.current
                          ? "text-white"
                          : "text-gray-400 hover:text-white"
                      }`}
                    >
                      {site.label}
                    </Link>
                  )}
                </span>
              ))}
            </nav>

            {/* Right: Language Switch */}
            <div className="flex items-center ml-4">
              <Link
                href={isEnglish ? getAlternatePath() : pathname}
                className={`px-1 ${!isEnglish ? "text-white" : "text-gray-400 hover:text-white"}`}
              >
                JP
              </Link>
              <span className="text-gray-600 mx-1">|</span>
              <Link
                href={isEnglish ? pathname : getAlternatePath()}
                className={`px-1 ${isEnglish ? "text-white" : "text-gray-400 hover:text-white"}`}
              >
                EN
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation (White) */}
      <div
        className={`bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800 ${
          isScrolled ? "shadow-sm" : ""
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-14">
            {/* Logo/Site Title */}
            <Link
              href={homeHref}
              className="text-lg font-mincho font-medium text-gray-900 dark:text-white"
            >
              Harmonic Insight
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={contactHref}
                className="ml-2 px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {isEnglish ? "Contact" : "お問い合わせ"}
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-gray-600 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <nav className="md:hidden py-4 border-t border-gray-100 dark:border-gray-800">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-2 text-sm text-gray-600 dark:text-gray-300"
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={contactHref}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 text-sm text-gray-600 dark:text-gray-300"
              >
                {isEnglish ? "Contact" : "お問い合わせ"}
              </a>
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
