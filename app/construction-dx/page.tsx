import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "建設DXの窓口 | HARMONIC insight",
  description: "ツールの前に、判断を整える。業務を部品として定義し、組み立てて回る形にする建設業向けDX支援。業務ドック・DX診断・教育プログラム。",
};

export default function ConstructionDxPage() {
  const services = [
    {
      title: "業務ドック",
      description: "業務プロセスの健康診断。現場の実態をヒアリングし、課題の構造を可視化します。人間ドックのように、定期的に業務の状態を点検。",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
    },
    {
      title: "DX診断",
      description: "現状の業務プロセスとIT活用度を診断し、優先すべき改善ポイントを特定。レポートだけでなく、実行計画まで落とし込みます。",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
    },
    {
      title: "教育プログラム",
      description: "DXを推進する人材を育てる研修プログラム。ツールの使い方ではなく、業務を構造で捉える考え方を伝えます。",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: "管理DXコンサルティング",
      description: "原価管理・実行予算・月次決算の業務改善。基幹システムを変えずに、入力品質と管理精度を向上させます。",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
    },
  ];

  const topics = [
    { title: "現場効率化", description: "報告のデジタル化、帳票の統一、データの自動集計で現場の手間を削減。" },
    { title: "会計課題", description: "「毎月確認するだけで精一杯」を脱却。入力品質の設計で月次を早期化。" },
    { title: "データ分類", description: "社内に散在するデータを用途別に分類。何を捨て、何を活かすかを整理。" },
    { title: "業務部品化", description: "属人的な業務を「誰でも回せる部品」に変換。引き継ぎ・採用の負荷を軽減。" },
  ];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* Breadcrumb */}
      <div className="px-4 sm:px-6 pt-4">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm text-gray-500 dark:text-gray-400 py-4">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 dark:text-white">建設DX</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="px-4 sm:px-6 py-12 sm:py-20 bg-gradient-to-b from-blue-50 to-white dark:from-blue-950/20 dark:to-gray-950">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm font-medium text-blue-600 dark:text-blue-400 mb-3">Construction DX</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            建設DXの窓口
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-4">
            ツールの前に、判断を整える。
          </p>
          <p className="text-gray-500 dark:text-gray-500 max-w-2xl mx-auto">
            業務を部品として定義し、組み立てて、誰でも回る形にする。<br />
            建設業に特化した業務改善・DX支援を行っています。
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="px-4 sm:px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            支援メニュー
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
            診断→設計→実行を一気通貫でサポート
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div
                key={i}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                  {service.icon}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="px-4 sm:px-6 py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4 text-center">
            よくあるテーマ
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-12">
            こんな課題をお持ちの方はご相談ください
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {topics.map((topic, i) => (
              <div key={i} className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700">
                <h3 className="font-bold text-gray-900 dark:text-white mb-2">{topic.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="px-4 sm:px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-8 text-center">私たちの考え方</h2>
          <div className="border-l-4 border-blue-500 pl-6 py-2 bg-blue-50 dark:bg-blue-950/20 rounded-r-lg">
            <p className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              「ツールを入れればDXが進む」わけではない。
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              まず業務を構造的に捉え、何を変え、何を残すかを決める。
              その判断ができて初めて、適切なツール選定と導入が可能になります。
              私たちは「判断の整理」から伴走します。
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
            まずは相談から
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            30分のオンライン相談で、貴社のDX課題を整理します。
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            無料相談を申し込む
          </Link>
        </div>
      </section>
    </main>
  );
}
