"use client";

import { Container } from "@/components/ui/container";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const globalNavLinks = [
  { label: "Harmonic Insight", href: "https://harmonicinsight.com", external: true },
  { label: "Home", href: "/" },
  { label: "建設DX", href: "https://const-dx-home.vercel.app", external: true },
  { label: "Insight Series", href: "/", current: true },
  { label: "Apps/Lab", href: "#" },
  { label: "Dashboard", href: "https://github.com/HarmonicInsight/app-web-insight-bi", external: true },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  // Check if current path matches navigation item
  const isCurrentPage = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <>
      {/* Global Top Navigation Bar */}
      <div className="bg-[var(--gray-900)] text-white">
        <Container>
          <div className="flex h-10 items-center text-xs">
            {/* Global Links */}
            <nav className="hidden items-center md:flex">
              {globalNavLinks.map((link, idx) => (
                <span key={link.label} className="flex items-center">
                  {idx > 0 && <span className="mx-2 text-white/30">|</span>}
                  {link.external ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "transition-colors hover:text-[var(--accent)]",
                        link.current ? "text-[var(--accent)]" : "text-white/80"
                      )}
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className={cn(
                        "transition-colors hover:text-[var(--accent)]",
                        link.current ? "text-[var(--accent)]" : "text-white/80"
                      )}
                    >
                      {link.label}
                    </Link>
                  )}
                </span>
              ))}
            </nav>

            {/* Mobile: Show brand name */}
            <span className="text-white/80 md:hidden">Harmonic Insight</span>
          </div>
        </Container>
      </div>

      {/* Main Header */}
      <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-white">
        <Container>
          <div className="flex h-14 items-center justify-between">
            {/* Site Name + Desktop Navigation */}
            <div className="flex items-center gap-8">
              <Link href="/" className="flex items-center">
                <span className="font-mincho text-xl text-[var(--gray-900)]">
                  {siteConfig.name}
                </span>
              </Link>

              {/* Desktop Navigation */}
              <nav className="hidden items-center gap-6 md:flex">
                {siteConfig.navigation.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-sm transition-colors",
                      isCurrentPage(item.href)
                        ? "text-[var(--accent)]"
                        : "text-[var(--gray-600)] hover:text-[var(--accent)]"
                    )}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center text-[var(--gray-600)] hover:text-[var(--gray-900)] md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="メニュー"
            >
              {menuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation Menu */}
          <div
            className={cn(
              "overflow-hidden transition-all duration-200 md:hidden",
              menuOpen ? "max-h-[400px] border-t border-[var(--border)]" : "max-h-0"
            )}
          >
            <nav className="py-4">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "block py-3 transition-colors",
                    isCurrentPage(item.href)
                      ? "text-[var(--accent)]"
                      : "text-[var(--gray-600)] hover:text-[var(--accent)]"
                  )}
                  onClick={() => setMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </Container>
      </header>
    </>
  );
}
