"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

  // Group sites (same as Header)
  const groupSites = [
    { href: "/", label: "Corporate", current: true },
    { href: "https://const-dx-home.vercel.app/", label: "建設DX", external: true },
    { href: "https://insight-bi-ruby.vercel.app/", label: "InsightBI", external: true },
    { href: "https://h-insight-apps-portal.vercel.app/", label: "Apps", external: true },
    { href: "https://novels.h-insight.jp/", label: "Novels", external: true },
  ];

  const navItems = isEnglish
    ? [
        { href: "/services", label: "Services (Japanese)" },
        { href: "/en/company", label: "Company" },
        { href: "/privacy", label: "Privacy" },
      ]
    : [
        { href: "/services", label: "Services" },
        { href: "/company", label: "Company" },
        { href: "/privacy", label: "Privacy" },
      ];

  return (
    <footer className="bg-gray-50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-800">
      {/* Group Sites */}
      <div className="border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <p className="text-xs text-gray-400 dark:text-gray-500 mb-3">Harmonic Insight Group</p>
          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {groupSites.map((site) =>
              site.external ? (
                <a
                  key={site.href}
                  href={site.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {site.label}
                </a>
              ) : (
                <Link
                  key={site.href}
                  href={site.href}
                  className={`text-sm transition-colors ${
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
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              &copy; 2025 Harmonic Insight LLC
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
              Strategy &amp; Architecture by Erik Arthur
            </p>
          </div>

          <nav className="flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  );
}
