import Link from "next/link";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "会社概要 | Harmonic Insight LLC",
  description: "業務を部品として定義し、組み立てて、誰でも回る形にする。建設業DX支援、ソフトウェア開発、コンテンツ制作を行っています。",
};

export default function CompanyPage() {
  const businessAreas = [
    {
      title: "建設DXの窓口",
      description: "業務を部品化し、誰でも回る仕組みに。業務ドック・DX診断・コンサルティング。",
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
      description: "属人化をほどく設計・変換・説明の基盤。現場に負担をかけないツール群。",
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
      description: "脳トレ・診断・生産性ツール。日常を仕組みで支援するアプリ群。",
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
      description: "AI×未来×日本を描く小説群。創作プロセスも仕組み化して多言語展開。",
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
      <Header />
      <main className="min-h-screen bg-white dark:bg-gray-950 pt-16 sm:pt-20">
        {/* Hero Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-sm text-gray-500 dark:text-gray-400 tracking-widest mb-4">COMPANY</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              会社概要
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              業務を部品として定義し、組み立てて、誰でも回る形にする。
            </p>
          </div>
        </section>

        {/* 事業領域 */}
        <section className="py-16 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
              事業領域
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
              4つの領域で、仕組み化を実践しています。
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

        {/* 創業の背景 */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
              創業の背景
            </h2>
            <div className="space-y-8 text-gray-700 dark:text-gray-300 leading-relaxed">
              {/* Intro */}
              <div className="space-y-4">
                <p>
                  Harmonic Insightは「仕組み化」の専門家によって設立されました。
                </p>
                <p className="text-gray-600 dark:text-gray-400">
                  業務を部品として設計し、誰でも回る形にする——<br />
                  この考え方を、建設業DX・業務ツール開発・コンテンツ制作に適用しています。
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">約30年</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">IT業界</p>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">7年</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">建設業DX</p>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">200分野+</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">大規模PJで統括</p>
                </div>
              </div>

              {/* 主な実績 */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
                  主な実績
                </h3>
                <div className="space-y-6">
                  {/* 建設業DX */}
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-5">
                    <p className="font-semibold text-gray-900 dark:text-white mb-3">
                      建設業DX
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li>大規模スタジアム建設プロジェクトで200以上の分野のシステム構成を統括。</li>
                      <li>営業・積算・調達・施工管理を一気通貫で管理するDXシステムの全体構想・要件定義を推進。</li>
                      <li>原価管理・実行予算の業務改善、BIM統合管理ツールの企画・導入を実施。</li>
                    </ul>
                  </div>

                  {/* 業務システム・RPA */}
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-5">
                    <p className="font-semibold text-gray-900 dark:text-white mb-3">
                      業務システム・RPA
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li>会計パッケージの開発・導入に10年従事。</li>
                      <li>標準プロセス・ドキュメント・周辺ツールを整備し、「誰でも再現できる形」にして展開。</li>
                      <li>RPA導入では教育マテリアルと標準フレームワークを自ら作成し、導入手法として確立。</li>
                    </ul>
                  </div>

                  {/* コンテンツ制作 */}
                  <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-5">
                    <p className="font-semibold text-gray-900 dark:text-white mb-3">
                      コンテンツ制作
                    </p>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li>AI×未来×日本をテーマに、7シリーズ・19作品の小説を多言語で展開。</li>
                      <li>企画から編集・翻訳・サイト構築まで、創作プロセスも仕組み化して運用。</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Closing Quote */}
              <div className="border-l-4 border-primary-500 pl-6 py-2 bg-gray-50 dark:bg-gray-900 rounded-r-lg">
                <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                  「業務を部品として設計し、誰でも回る形にする」
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  ツール導入ではなく、業務の本質的な改善を支援しています。
                </p>
              </div>
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

        {/* 基本情報 */}
        <section className="py-16 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-8 pb-4 border-b border-gray-200 dark:border-gray-700">
              基本情報
            </h2>
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <div className="w-32 flex-shrink-0 text-gray-500 dark:text-gray-400 font-medium text-sm">
                  会社名
                </div>
                <div className="text-gray-900 dark:text-white text-sm">
                  ハーモニックインサイト合同会社（Harmonic Insight LLC）
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <div className="w-32 flex-shrink-0 text-gray-500 dark:text-gray-400 font-medium text-sm">
                  設立
                </div>
                <div className="text-gray-900 dark:text-white text-sm">
                  2025年8月
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <div className="w-32 flex-shrink-0 text-gray-500 dark:text-gray-400 font-medium text-sm">
                  代表
                </div>
                <div className="text-gray-900 dark:text-white text-sm">
                  瀬田 ルリ子
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <div className="w-32 flex-shrink-0 text-gray-500 dark:text-gray-400 font-medium text-sm">
                  所在地
                </div>
                <div className="text-gray-900 dark:text-white text-sm">
                  東京都
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <div className="w-32 flex-shrink-0 text-gray-500 dark:text-gray-400 font-medium text-sm">
                  連絡先
                </div>
                <div className="text-gray-900 dark:text-white text-sm">
                  info@h-insight.jp
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
                <div className="w-32 flex-shrink-0 text-gray-500 dark:text-gray-400 font-medium text-sm">
                  事業内容
                </div>
                <div className="text-gray-900 dark:text-white text-sm">
                  建設業DX支援 / ソフトウェア開発 / コンテンツ制作
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 経営体制 */}
        <section className="py-12 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              経営体制
            </h2>
            <div className="space-y-6">
              {/* 代表社員 */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                <div className="sm:w-44 flex-shrink-0">
                  <p className="text-xs text-gray-500 dark:text-gray-400 tracking-wider mb-0.5">
                    代表社員
                  </p>
                  <p className="text-base font-semibold text-gray-900 dark:text-white">
                    瀬田 ルリ子
                  </p>
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    ハーモニックインサイト合同会社の代表として、会社運営および事業推進を統括しています。
                  </p>
                </div>
              </div>

              {/* Chief Architect / Strategist */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 pt-5 border-t border-gray-200 dark:border-gray-700">
                <div className="sm:w-44 flex-shrink-0">
                  <p className="text-xs text-gray-500 dark:text-gray-400 tracking-wider mb-0.5">
                    Chief Architect / Strategist
                  </p>
                  <p className="text-base font-medium text-gray-900 dark:text-white">
                    Erik Arthur
                  </p>
                </div>
                <div className="flex-grow">
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    業務を部品として設計し、組み立てて回る設計思想の構築、Insight Seriesのプロダクト設計、Harmonic Insightにおける全体アーキテクチャ戦略を担当しています。
                  </p>
                </div>
              </div>
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
