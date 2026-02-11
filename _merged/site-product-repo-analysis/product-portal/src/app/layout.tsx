import type { Metadata } from 'next';
import { Playfair_Display, DM_Sans, Noto_Sans_JP } from 'next/font/google';
import './globals.css';
import { Header, Footer } from '@/components';
import { LanguageProvider } from '@/i18n';

const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['300', '400', '500', '600'],
});

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-japanese',
  weight: ['300', '400', '500', '700'],
});

export const metadata: Metadata = {
  title: 'HarmonicInsight — AI-Powered Business Solutions',
  description:
    'Solve Excel management, RPA migration, BPO automation, and knowledge preservation with AI-powered products. 28 years of experience, 100+ companies.',
  keywords: ['HarmonicInsight', 'Excel', 'RPA', 'UiPath', 'BPO', 'AI', 'automation', 'InsightOffice', 'InsightBot'],
  openGraph: {
    title: 'HarmonicInsight — AI-Powered Business Solutions',
    description:
      'Solve Excel management, RPA migration, BPO automation, and knowledge preservation with AI-powered products.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className={`${playfair.variable} ${dmSans.variable} ${notoSansJP.variable}`}>
      <body className="antialiased font-sans">
        <LanguageProvider>
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
