import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "月次・原価の入力品質設計 | Harmonic Insight",
  description: "入力ルールの整理、チェックロジックの設計、差し戻しフローの構築まで。基幹システムを変えずに入力品質を上げます。",
};

export default function InputQualityPage() {
  const deliverables = [
    "入力ルール整理表（項目・形式・必須/任意・入力タイミング）",
    "チェックロジック定義書（判定条件・閾値・警告/エラー区分）",
    "差し戻しフロー図（誰が・いつ・どのように差し戻すか）",
    "差し戻しテンプレート（理由明記・修正方法の案内）",
    "運用ルール1枚（現場向け簡易マニュアル）",
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
              <span className="text-gray-900 dark:text-white">月次・原価の入力品質設計</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              月次・原価の入力品質設計
            </h1>
            <p className="text-primary-600 dark:text-primary-400 text-sm mb-6">
              「毎月の確認作業を減らしたい」管理部門・経理向け
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              入力ルールの整理、チェックロジックの設計、差し戻しフローの構築まで。
              基幹システムを変えずに入力品質を上げます。
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
                  <li>• 入力ルールが暗黙知で、人によってバラバラ</li>
                  <li>• 月末に「怪しい数字」を手作業で探す</li>
                  <li>• 差し戻し理由が不明確で、現場と経理の摩擦</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border-2 border-primary-200 dark:border-primary-800">
                <p className="text-xs text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-2">After</p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <li>• 入力ルールが明文化され、誰でも同じ品質で入力</li>
                  <li>• 入力時点で自動チェック、月末確認が最小限に</li>
                  <li>• 差し戻し理由が明確で、修正方法もすぐわかる</li>
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

        {/* Duration & Price */}
        <section className="px-4 sm:px-6 py-12 bg-gray-50 dark:bg-gray-900/50">
          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">期間目安</p>
                <p className="text-xl font-semibold text-gray-900 dark:text-white">6〜10週間</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">費用目安</p>
                <p className="text-xl font-semibold text-gray-900 dark:text-white">200〜400万円</p>
                <p className="text-xs text-gray-500 mt-1">※規模・複雑さにより変動</p>
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
