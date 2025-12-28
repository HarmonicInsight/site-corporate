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

  // Get corresponding path for language switch
  const getAlternatePath = () => {
    if (isEnglish) {
      // EN -> JP: remove /en prefix
      const jpPath = pathname.replace(/^\/en/, "") || "/";
      return jpPath;
    } else {
      // JP -> EN: add /en prefix
      return `/en${pathname === "/" ? "" : pathname}`;
    }
  };

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
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link
            href={homeHref}
            className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white tracking-tight"
          >
            Harmonic Insight
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
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

            {/* Language Switch */}
            <div className="flex items-center text-sm border-l border-gray-200 dark:border-gray-700 pl-6 ml-2">
              <Link
                href={isEnglish ? getAlternatePath() : pathname}
                className={`${!isEnglish ? "text-gray-900 dark:text-white font-medium" : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"}`}
              >
                JP
              </Link>
              <span className="mx-2 text-gray-300 dark:text-gray-600">|</span>
              <Link
                href={isEnglish ? pathname : getAlternatePath()}
                className={`${isEnglish ? "text-gray-900 dark:text-white font-medium" : "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"}`}
              >
                EN
              </Link>
            </div>
          </nav>

          {/* Mobile: Language + CTA + Menu */}
          <div className="flex items-center gap-3 lg:hidden">
            {/* Mobile Language Switch */}
            <div className="flex items-center text-xs">
              <Link
                href={isEnglish ? getAlternatePath() : pathname}
                className={`${!isEnglish ? "text-gray-900 dark:text-white font-medium" : "text-gray-400 dark:text-gray-500"}`}
              >
                JP
              </Link>
              <span className="mx-1 text-gray-300 dark:text-gray-600">|</span>
              <Link
                href={isEnglish ? pathname : getAlternatePath()}
                className={`${isEnglish ? "text-gray-900 dark:text-white font-medium" : "text-gray-400 dark:text-gray-500"}`}
              >
                EN
              </Link>
            </div>

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
          <nav className="lg:hidden py-4 border-t border-gray-100 dark:border-gray-800">
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
