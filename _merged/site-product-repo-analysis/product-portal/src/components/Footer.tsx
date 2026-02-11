'use client';

import Link from 'next/link';
import { useT } from '@/i18n';

export default function Footer() {
  const { t } = useT();

  const products = [
    { nameKey: 'bizTools', href: '/products' },
    { nameKey: 'rpa', href: '/rpa' },
    { nameKey: 'insightSeries', href: '/tools' },
    { nameKey: 'insightOffice', href: '/insight-office' },
    { nameKey: 'eduPlatform', href: '/education' },
    { nameKey: 'hardware', href: '/hardware' },
  ];

  const services = [
    { nameKey: 'consulting', href: '/consulting' },
    { nameKey: 'constructionDx', href: '/consulting#construction' },
    { nameKey: 'aiDev', href: '/consulting#ai-development' },
  ];

  const apps = [
    { nameKey: 'appsPage', href: '/apps' },
    { nameKey: 'eduTraining', href: '/apps#education' },
    { nameKey: 'caseStudiesFooter', href: '/#case-studies' },
    { nameKey: 'hardware', href: '/hardware' },
  ];

  const legal = [
    { nameKey: 'privacy', href: 'https://h-insight.jp/privacy' },
    { nameKey: 'terms', href: 'https://h-insight.jp/terms' },
    { nameKey: 'contact', href: '/contact' },
  ];

  return (
    <footer className="bg-slate-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-violet-600 flex items-center justify-center">
                <span className="text-white font-bold text-sm">Hi</span>
              </div>
              <span className="text-lg text-white">
                <span className="font-semibold">HARMONIC</span> <span className="font-normal">insight</span>
              </span>
            </div>
            <p className="text-sm leading-6 text-slate-400">
              {t('footer', 'companyDesc')}
            </p>
            <div className="flex space-x-6">
              <a href="https://twitter.com/harmonicinsight" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-400">
                <span className="sr-only">Twitter</span>
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-xs font-medium tracking-widest text-slate-400 uppercase">{t('footer', 'products')}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {products.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                        {item.nameKey === 'rpa' ? 'InsightBot RPA' : item.nameKey === 'insightOffice' ? 'InsightOffice' : t('footer', item.nameKey)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-xs font-medium tracking-widest text-slate-400 uppercase">{t('footer', 'services')}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {services.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                        {t('footer', item.nameKey)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-xs font-medium tracking-widest text-slate-400 uppercase">{t('footer', 'apps')}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {apps.map((item) => (
                    <li key={item.href + item.nameKey}>
                      <Link href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                        {t('footer', item.nameKey)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-xs font-medium tracking-widest text-slate-400 uppercase">{t('footer', 'legal')}</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {legal.map((item) => (
                    <li key={item.href}>
                      <Link href={item.href} className="text-sm text-slate-400 hover:text-white transition-colors">
                        {item.nameKey === 'contact' ? t('common', 'contact') : t('footer', item.nameKey)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-slate-800 pt-8 sm:mt-20 lg:mt-24 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} HARMONIC insight Inc. All rights reserved.
          </p>
          <a href="mailto:info@h-insight.jp" className="text-xs text-slate-500 hover:text-slate-400 transition-colors">
            info@h-insight.jp
          </a>
        </div>
      </div>
    </footer>
  );
}
