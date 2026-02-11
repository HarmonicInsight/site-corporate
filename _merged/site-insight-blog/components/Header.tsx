'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { siteConfig } from '@/lib/constants';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations('common');

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('books'), href: '/books' },
    { name: t('apps'), href: '/apps' },
    { name: t('consulting'), href: '/category/consulting' },
    { name: t('coreSystems'), href: '/category/core-systems' },
    { name: t('column'), href: '/category/column' },
    { name: t('about'), href: '/about' },
  ];

  return (
    <header className="sticky top-10 z-50 bg-white">
      {/* Site Navigation Bar */}
      <div className="border-b border-[var(--border)]">
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="flex h-12 items-center justify-between">
            {/* Site Name */}
            <Link
              href="/"
              className="font-serif text-lg tracking-wide text-[var(--foreground)]"
              style={{ fontFamily: "'Noto Serif JP', serif" }}
            >
              {siteConfig.name}
            </Link>

            {/* Desktop: Nav Links */}
            <nav className="hidden md:flex items-center gap-1 text-sm">
              {navigation.map((item, index) => (
                <span key={item.href} className="flex items-center whitespace-nowrap">
                  {index > 0 && <span className="mx-2 text-[var(--border)]">|</span>}
                  <Link
                    href={item.href}
                    className="text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
                  >
                    {item.name}
                  </Link>
                </span>
              ))}
            </nav>

            {/* Right side: Language + Menu */}
            <div className="flex items-center gap-3">
              <LanguageSwitcher />

              {/* Menu Button - Mobile only */}
              <button
                className="md:hidden p-2 text-[var(--muted)] hover:text-[var(--accent)]"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label={t('menu')}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Dropdown Navigation - Mobile */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-[var(--border)] shadow-lg z-50">
          <div className="mx-auto max-w-6xl px-4 md:px-8 py-4">
            <nav className="flex flex-col">
              {navigation.map((item, index) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-4 text-base border-b border-[var(--border)] last:border-b-0 transition-colors ${
                    index === 0
                      ? 'text-[var(--accent)] font-medium'
                      : 'text-[var(--foreground)] hover:text-[var(--accent)]'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
