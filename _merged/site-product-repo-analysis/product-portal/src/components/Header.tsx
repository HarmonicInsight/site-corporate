'use client';

import Link from 'next/link';
import { useState } from 'react';
import { useLanguage, useT, localeNames, Locale } from '@/i18n';

const navKeys = [
  { key: 'insightOffice', href: '/insight-office' },
  { key: 'rpa', href: '/rpa' },
  { key: 'tools', href: '/products' },
  { key: 'education', href: '/apps' },
  { key: 'consulting', href: '/consulting' },
  { key: 'caseStudies', href: '/#case-studies' },
] as const;

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const { locale, setLocale } = useLanguage();
  const { t } = useT();

  const locales: Locale[] = ['ja', 'en', 'zh'];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Global">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-violet-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">Hi</span>
              </div>
              <span className="text-lg text-slate-900 dark:text-white">
                <span className="font-semibold">HARMONIC</span> <span className="font-normal">insight</span>
              </span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden items-center gap-2">
            {/* Language switcher (mobile) */}
            <div className="relative">
              <button
                type="button"
                className="px-2 py-1 rounded text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
              >
                {locale.toUpperCase()}
              </button>
              {langMenuOpen && (
                <div className="absolute right-0 top-full mt-1 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg py-1 z-50">
                  {locales.map((l) => (
                    <button
                      key={l}
                      className={`block w-full text-left px-4 py-2 text-sm ${locale === l ? 'text-violet-600 dark:text-violet-400 font-medium' : 'text-slate-600 dark:text-slate-300'} hover:bg-slate-50 dark:hover:bg-slate-700`}
                      onClick={() => { setLocale(l); setLangMenuOpen(false); }}
                    >
                      {localeNames[l]}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700 dark:text-slate-200"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Menu</span>
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navKeys.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="text-sm text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                {t('nav', item.key)}
              </Link>
            ))}
          </div>

          {/* CTA + Language switcher (desktop) */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-4">
            {/* Language switcher */}
            <div className="relative">
              <button
                type="button"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
                onClick={() => setLangMenuOpen(!langMenuOpen)}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5a17.92 17.92 0 01-8.716-2.247m0 0A9.015 9.015 0 003 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
                {localeNames[locale]}
              </button>
              {langMenuOpen && (
                <div className="absolute right-0 top-full mt-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg shadow-lg py-1 z-50 min-w-[120px]">
                  {locales.map((l) => (
                    <button
                      key={l}
                      className={`block w-full text-left px-4 py-2 text-sm ${locale === l ? 'text-violet-600 dark:text-violet-400 font-medium bg-slate-50 dark:bg-slate-700/50' : 'text-slate-600 dark:text-slate-300'} hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors`}
                      onClick={() => { setLocale(l); setLangMenuOpen(false); }}
                    >
                      {localeNames[l]}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <Link
              href="/contact"
              className="rounded-lg border border-slate-200 dark:border-slate-700 px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors"
            >
              {t('common', 'contact')}
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden">
          <div className="space-y-1 px-4 pb-4 pt-2 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
            {navKeys.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="block rounded-lg px-3 py-2 text-base text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800"
                onClick={() => setMobileMenuOpen(false)}
              >
                {t('nav', item.key)}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block rounded-lg border border-slate-200 dark:border-slate-700 px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-300 text-center mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t('common', 'contact')}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
