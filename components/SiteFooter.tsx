"use client";

import Link from "next/link";
import { FOOTER_LINKS, SITE_CONFIG } from "@/lib/navigation";

export function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Links */}
      <div className="border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <p className="text-xs text-gray-500 mb-3 tracking-wider uppercase">Company</p>
              <nav className="space-y-2">
                {FOOTER_LINKS.company.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-3 tracking-wider uppercase">Services</p>
              <nav className="space-y-2">
                {FOOTER_LINKS.services.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-3 tracking-wider uppercase">Related Sites</p>
              <nav className="space-y-2">
                {FOOTER_LINKS.external.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
            <div>
              <p className="text-xs text-gray-500 mb-3 tracking-wider uppercase">Legal</p>
              <nav className="space-y-2">
                <Link href="/privacy" className="block text-sm text-gray-400 hover:text-white transition-colors">
                  プライバシーポリシー
                </Link>
                <Link href="/terms" className="block text-sm text-gray-400 hover:text-white transition-colors">
                  利用規約
                </Link>
                <Link href="/legal" className="block text-sm text-gray-400 hover:text-white transition-colors">
                  特定商取引法に基づく表記
                </Link>
              </nav>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name} LLC
          </p>
          <p className="text-xs text-gray-500">{SITE_CONFIG.email}</p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
