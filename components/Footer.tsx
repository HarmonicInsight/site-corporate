"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith("/en");

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
    <footer className="py-8 sm:py-12 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900/50 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
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
