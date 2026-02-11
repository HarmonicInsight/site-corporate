import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "プライバシーポリシー | HARMONIC insight",
  description: "HARMONIC insight のプライバシーポリシー",
};

export default function PrivacyPage() {
  return (
    <>
      {/* Header */}
      <header className="border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-4">
          <Link
            href="/"
            className="text-xl font-semibold text-gray-900 dark:text-white tracking-tight hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
          >
            HARMONIC insight
          </Link>
        </div>
      </header>

      <main className="min-h-screen bg-white dark:bg-gray-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8">
            プライバシーポリシー
          </h1>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              HARMONIC insight LLC（以下「当社」）は、お客様の個人情報の保護を重要な責務と認識し、以下のとおりプライバシーポリシーを定めます。
            </p>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                1. 個人情報の収集
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                当社は、お問い合わせやサービス提供に際して、お名前、会社名、メールアドレス等の個人情報を収集することがあります。これらの情報は、お客様の同意を得た範囲内で収集いたします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                2. 個人情報の利用目的
              </h2>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2 list-disc list-inside">
                <li>お問い合わせへの回答</li>
                <li>サービスの提供・運営</li>
                <li>サービス改善のための分析</li>
                <li>当社からのご案内（ご同意いただいた場合）</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                3. 個人情報の第三者提供
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                当社は、法令に基づく場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                4. 個人情報の安全管理
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                当社は、個人情報の漏洩、滅失、毀損を防止するため、適切なセキュリティ対策を講じます。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                5. お問い合わせ
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                個人情報の取り扱いに関するお問い合わせは、下記までご連絡ください。
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                メール：info@h-insight.jp
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                6. 改定
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                当社は、必要に応じて本ポリシーを改定することがあります。改定した場合は、本ページにて公表いたします。
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-4">
                制定日：2025年1月
              </p>
            </section>
          </div>

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
