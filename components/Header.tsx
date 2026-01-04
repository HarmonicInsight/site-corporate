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

  // Group sites navigation (external)
  const groupSites = [
    { href: "/", label: "Corporate", current: true },
    { href: "https://const-dx-home.vercel.app/", label: "建設DX", external: true },
    { href: "https://insight-bi-ruby.vercel.app/", label: "InsightBI", external: true },
    { href: "https://h-insight-apps-portal.vercel.app/", label: "Apps", external: true },
  ];

  // Site-specific navigation
  const navItems = isEnglish
    ? [
        { href: "/en", label: "Home" },
        { href: "/en/company", label: "Company" },
      ]
    : [
        { href: "/", label: "Home" },
        { href: "/services", label: "Services" },
        { href: "/company", label: "Company" },
      ];

  const contactHref = isEnglish ? "/en#contact" : "#contact";
  const homeHref = isEnglish ? "/en" : "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-gray-950/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      {/* Group Navigation Bar */}
      <div className="border-b border-gray-100 dark:border-gray-800 bg-gray-50/80 dark:bg-gray-900/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-8">
            {/* Group Sites */}
            <nav className="flex items-center space-x-1 text-xs">
              {groupSites.map((site) =>
                site.external ? (
                  <a
                    key={site.href}
                    href={site.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-2 py-1 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {site.label}
                  </a>
                ) : (
                  <Link
                    key={site.href}
                    href={site.href}
                    className={`px-2 py-1 transition-colors ${
                      site.current
                        ? "text-gray-900 dark:text-white font-medium"
                        : "text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
                    }`}
                  >
                    {site.label}
                  </Link>
                )
              )}
            </nav>

            {/* Language Switch (Top Bar) */}
            <div className="flex items-center text-xs">
              <Link
                href={isEnglish ? getAlternatePath() : pathname}
                className={`px-1.5 ${!isEnglish ? "text-gray-900 dark:text-white font-medium" : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"}`}
              >
                JP
              </Link>
              <span className="text-gray-300 dark:text-gray-600">|</span>
              <Link
                href={isEnglish ? pathname : getAlternatePath()}
                className={`px-1.5 ${isEnglish ? "text-gray-900 dark:text-white font-medium" : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"}`}
              >
                EN
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-14 sm:h-16">
          {/* Logo */}
          <Link
            href={homeHref}
            className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white tracking-tight"
          >
            Harmonic Insight
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-sm"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={contactHref}
              className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
            >
              Contact
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-3 md:hidden">
            <a
              href={contactHref}
              className="px-3 py-1.5 bg-primary-600 hover:bg-primary-700 text-white text-xs font-medium rounded-lg transition-colors duration-200"
            >
              Contact
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-100 dark:border-gray-800">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2.5 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 text-sm"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
