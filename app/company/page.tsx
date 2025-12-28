import Link from "next/link";
import type { Metadata } from "next";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "会社概要 | Harmonic Insight LLC",
  description: "ハーモニックインサイト合同会社の会社概要",
};

export default function CompanyPage() {
  const companyInfo = [
    { label: "会社名", value: "Harmonic Insight LLC（ハーモニックインサイト合同会社）" },
    { label: "設立", value: "2025年" },
    { label: "所在地", value: "東京都中央区銀座" },
    { label: "代表", value: "瀬田ルリ子" },
    { label: "事業内容", value: "業務プロセス設計、プロトタイプ開発、運用定着支援" },
  ];

  return (
    <>
      {/* Header */}
      <header className="border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
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
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-12">
            会社概要
          </h1>

          <dl className="divide-y divide-gray-100 dark:divide-gray-800">
            {companyInfo.map((info) => (
              <div
                key={info.label}
                className="py-4 sm:py-5 grid grid-cols-1 sm:grid-cols-3 gap-1 sm:gap-4"
              >
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {info.label}
                </dt>
                <dd className="text-sm text-gray-900 dark:text-white sm:col-span-2">
                  {info.value}
                </dd>
              </div>
            ))}
          </dl>

          <div className="mt-12">
            <Link
              href="/"
              className="inline-flex items-center text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
            >
              <svg
                className="w-4 h-4 mr-1.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              トップに戻る
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
