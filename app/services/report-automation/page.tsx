import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "現場の報告・帳票改善 | Harmonic Insight",
  description: "報告フォーマットの統一、入力導線の簡素化、自動集計の仕組みを作ります。現場の手間を減らしながら、必要な情報が集まる状態に。",
};

export default function ReportAutomationPage() {
  const deliverables = [
    "報告フォーマット統一案（必要項目・入力形式・提出タイミング）",
    "入力導線設計書（どこから・何を・どう入力するか）",
    "自動集計の仕組み（Excel/スプレッドシート/連携ツール）",
    "現場向け入力ガイド（1枚もの）",
    "管理者向け確認フロー",
  ];

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-950/95 backdrop-blur-md shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link
              href="/"
              className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white tracking-tight"
            >
              Harmonic Insight
            </Link>
            <Link
              href="/#contact"
              className="px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-medium rounded-lg transition-colors duration-200"
            >
              お問い合わせ
            </Link>
          </div>
        </div>
      </header>

      <main className="min-h-screen bg-white dark:bg-gray-950">
        {/* Breadcrumb */}
        <div className="pt-20 sm:pt-24 px-4 sm:px-6">
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
              <span className="text-gray-900 dark:text-white">現場の報告・帳票改善</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="px-4 sm:px-6 py-12 sm:py-16">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              現場の報告・帳票を「集めなくていい形」にする
            </h1>
            <p className="text-primary-600 dark:text-primary-400 text-sm mb-6">
              「報告が上がってこない」「Excelが乱立している」現場向け
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              報告フォーマットの統一、入力導線の簡素化、自動集計の仕組みを作ります。
              現場の手間を減らしながら、必要な情報が集まる状態に。
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
                  <li>• 報告フォーマットが現場ごとにバラバラ</li>
                  <li>• Excelファイルが乱立、どれが最新かわからない</li>
                  <li>• 催促しないと報告が上がってこない</li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-900 rounded-xl p-5 border-2 border-primary-200 dark:border-primary-800">
                <p className="text-xs text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-2">After</p>
                <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2">
                  <li>• フォーマットが統一され、集計が自動化</li>
                  <li>• 入力場所が一本化、迷わず入力できる</li>
                  <li>• 必要な情報が自然と集まる仕組みに</li>
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
                <p className="text-xl font-semibold text-gray-900 dark:text-white">4〜8週間</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">費用目安</p>
                <p className="text-xl font-semibold text-gray-900 dark:text-white">150〜300万円</p>
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
      <Footer />
    </>
  );
}
