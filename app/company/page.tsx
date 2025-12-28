import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "会社概要 | Harmonic Insight LLC",
  description: "ハーモニックインサイト合同会社の会社概要。建設業DX支援、ソフトウェア開発、コンテンツ制作を行っています。",
};

export default function CompanyPage() {
  const businessAreas = [
    {
      title: "建設DXの窓口",
      description: "建設業の経営判断を、勘と経験から仕組みと数字へ。業務ドック・DX診断・コンサルティング。",
      href: "https://const-dx-home.vercel.app/",
      color: "blue",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
    {
      title: "Insightシリーズ",
      description: "業務の頭の中を構造化して自動化する。資料作成・データ処理・ヒアリングツール群。",
      href: "https://insight-series-site.vercel.app/",
      color: "emerald",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
        </svg>
      ),
    },
    {
      title: "Apps",
      description: "モバイルアプリケーション。脳トレ・診断・生産性ツールなど、日々の生活とビジネスを支援。",
      href: "https://h-insight-apps-portal.vercel.app/",
      color: "violet",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Novels",
      description: "AI×未来×日本を見つめなおす独創プラットフォーム。7シリーズ・19作品を多言語で展開。",
      href: "https://novels.h-insight.jp/",
      color: "amber",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
  ];

  const history = [
    { date: "2025年8月", event: "ハーモニックインサイト合同会社 設立" },
    { date: "2025年8月", event: "小説プラットフォーム「Harmonic Novels」公開" },
    { date: "2025年", event: "建設DXコンサルティング事業開始" },
    { date: "2025年", event: "Insightシリーズ・Appsポータル公開" },
  ];

  const colorClasses: Record<string, { bg: string; bgHover: string; text: string }> = {
    blue: { bg: "bg-blue-100 dark:bg-blue-900/30", bgHover: "group-hover:bg-blue-200 dark:group-hover:bg-blue-800/40", text: "text-blue-600 dark:text-blue-400" },
    emerald: { bg: "bg-emerald-100 dark:bg-emerald-900/30", bgHover: "group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800/40", text: "text-emerald-600 dark:text-emerald-400" },
    violet: { bg: "bg-violet-100 dark:bg-violet-900/30", bgHover: "group-hover:bg-violet-200 dark:group-hover:bg-violet-800/40", text: "text-violet-600 dark:text-violet-400" },
    amber: { bg: "bg-amber-100 dark:bg-amber-900/30", bgHover: "group-hover:bg-amber-200 dark:group-hover:bg-amber-800/40", text: "text-amber-600 dark:text-amber-400" },
  };

  return (
    <>
      {/* Header */}
      <header className="border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-xl font-semibold text-gray-900 dark:text-white tracking-tight hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            Harmonic Insight
          </Link>
          <nav className="flex items-center space-x-4">
            <Link
              href="/services"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Services
            </Link>
            <Link
              href="/#contact"
              className="text-sm text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      <main className="min-h-screen bg-white dark:bg-gray-950">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 tracking-widest mb-4">COMPANY</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              会社概要
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              思考と創造を、形にする。
            </p>
          </div>
        </section>

        {/* 基本情報 */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
              基本情報
            </h2>
            <dl className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <dt className="text-gray-500 dark:text-gray-400 font-medium">会社名</dt>
                <dd className="md:col-span-2 text-gray-900 dark:text-white">
                  ハーモニックインサイト合同会社
                  <span className="block text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Harmonic Insight LLC
                  </span>
                </dd>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <dt className="text-gray-500 dark:text-gray-400 font-medium">設立</dt>
                <dd className="md:col-span-2 text-gray-900 dark:text-white">2025年8月15日</dd>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <dt className="text-gray-500 dark:text-gray-400 font-medium">代表</dt>
                <dd className="md:col-span-2 text-gray-900 dark:text-white">代表社員</dd>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <dt className="text-gray-500 dark:text-gray-400 font-medium">所在地</dt>
                <dd className="md:col-span-2 text-gray-900 dark:text-white">
                  〒104-0061<br />
                  東京都中央区銀座1丁目12番4号<br />
                  N&E BLD. 6F
                </dd>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <dt className="text-gray-500 dark:text-gray-400 font-medium">連絡先</dt>
                <dd className="md:col-span-2">
                  <a
                    href="mailto:info@h-insight.jp"
                    className="text-primary-600 dark:text-primary-400 hover:underline"
                  >
                    info@h-insight.jp
                  </a>
                </dd>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                <dt className="text-gray-500 dark:text-gray-400 font-medium">事業内容</dt>
                <dd className="md:col-span-2 text-gray-900 dark:text-white">
                  <ul className="space-y-1">
                    <li>・業務コンサルティング（建設業DX支援）</li>
                    <li>・ソフトウェア開発・販売</li>
                    <li>・モバイルアプリケーション開発</li>
                    <li>・コンテンツ制作・出版</li>
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* 事業領域 */}
        <section className="py-16 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              事業領域
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
              4つの領域で、思考と創造を形にしています。
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {businessAreas.map((area, index) => {
                const colors = colorClasses[area.color];
                return (
                  <a
                    key={index}
                    href={area.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 dark:border-gray-800"
                  >
                    <div className={`w-12 h-12 ${colors.bg} ${colors.bgHover} rounded-lg flex items-center justify-center mb-4 transition-colors`}>
                      <span className={colors.text}>{area.icon}</span>
                    </div>
                    <h3 className={`font-bold text-gray-900 dark:text-white mb-2 group-hover:${colors.text} transition-colors`}>
                      {area.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {area.description}
                    </p>
                    <span className={`inline-flex items-center text-sm ${colors.text} mt-4 group-hover:translate-x-1 transition-transform`}>
                      詳しく見る →
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        {/* 代表について */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
              代表について
            </h2>
            <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              <p>
                建設業界のデジタルトランスフォーメーション支援に28年間従事。
                これまでに700社以上の企業を支援し、業務改革・システム導入・組織変革を推進してきました。
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">28年</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">建設業DX支援</p>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">700社+</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">支援実績</p>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">約40冊</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">著書</p>
                </div>
              </div>
              <p>
                デンツーソーケン（現 電通総研）でのSTRAVIS会計パッケージ開発、
                タイ・中国・香港でのグローバルビジネス開発、
                UiPathのRPA事業立ち上げを経て、
                FPT Consulting Japanにて建設DX事業を統括。
                20名以上のチームを率い、建設業特化のDXソリューションを展開してきました。
              </p>
              <p>
                「業務を部品として設計し、誰でも回る形にする」という考え方のもと、
                ツール導入ではなく業務の本質的な改善を支援しています。
              </p>
            </div>
          </div>
        </section>

        {/* 沿革 */}
        <section className="py-16 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
              沿革
            </h2>
            <div className="space-y-4">
              {history.map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="w-28 flex-shrink-0 text-gray-500 dark:text-gray-400 font-medium text-sm">
                    {item.date}
                  </div>
                  <div className="text-gray-900 dark:text-white text-sm">
                    {item.event}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              お問い合わせ
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              サービスに関するご質問、お仕事のご相談など、<br className="hidden sm:block" />
              お気軽にお問い合わせください。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/#contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium"
              >
                お問い合わせフォーム
              </Link>
              <a
                href="mailto:info@h-insight.jp"
                className="inline-flex items-center justify-center px-8 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                info@h-insight.jp
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
