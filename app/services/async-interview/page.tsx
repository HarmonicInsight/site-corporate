import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "会議しない業務ヒアリング | Harmonic Insight",
  description: "動画・テキスト回答・非同期レビューで業務整理を進めます。忙しい現場に負担をかけず、必要な情報を集めます。",
};

export default function AsyncInterviewPage() {
  const deliverables = [
    "ヒアリング設計書（聞くべき項目・優先順位・回答形式）",
    "質問テンプレート（動画/テキスト用）",
    "回答収集フォーム（非同期で回答できる仕組み）",
    "業務整理シート（収集情報を構造化）",
    "現状フロー図（as-is）",
  ];

  return (
      <main className="min-h-screen bg-white dark:bg-gray-950">
        {/* Breadcrumb */}
        <div className="pt-4 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <nav className="text-sm text-gray-500 dark:text-gray-400 py-4">
              <Link href="/" className="hover:text-primary-600 dark:hover:text-primary-400">
                Home
              </Link>
              <span className="mx-2">/</span>
              <Link href="/services" className="hover:text-primary-600 dark:hover:text-primary-400">
                Services
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-900 dark:text-white">会議しない業務ヒアリング</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              業務ヒアリングを「会議しない」方式に置き換える
            </h1>
            <p className="text-primary-600 dark:text-primary-400 text-sm mb-6">
              「ヒアリングで時間が取られすぎる」DX担当・企画向け
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              動画・テキスト回答・非同期レビューで業務整理を進めます。
              忙しい現場に負担をかけず、必要な情報を集めます。
            </p>
          </div>
        </section>

        {/* What Changes */}
        <section className="px-4 sm:px-6 py-12 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              何が変わるか
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-900 rounded-xl p-5">
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">Before</p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <li>• ヒアリングのたびに会議を設定</li>
                  <li>• 現場の時間調整が大変で進まない</li>
                  <li>• 議事録をまとめて確認してもらう手間</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border-2 border-primary-200 dark:border-primary-800">
                <p className="text-xs text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-2">After</p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <li>• 各自の空き時間で回答できる</li>
                  <li>• 会議調整不要、スケジュールに影響しない</li>
                  <li>• 回答がそのまま記録、確認も非同期で</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section className="px-4 sm:px-6 py-12">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              成果物
            </h2>
            <ul className="space-y-3">
              {deliverables.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-600 dark:text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm text-gray-700 dark:text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Duration */}
        <section className="px-4 sm:px-6 py-12 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">期間目安</p>
                <p className="text-xl font-semibold text-gray-900 dark:text-white">2〜4週間</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">費用目安</p>
                <p className="text-xl font-semibold text-gray-900 dark:text-white">50〜150万円</p>
                <p className="text-xs text-gray-500 mt-1">※規模・対象人数により変動</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-6 py-16">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              まずは30分、お話しませんか？
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              貴社の状況をお聞きし、このサービスが合うかどうかをお伝えします。
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200"
            >
              無料相談を申し込む
            </Link>
          </div>
        </section>
      </main>
  );
}
