import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "利用規約 | HARMONIC insight",
  description: "HARMONIC insight の利用規約",
};

export default function TermsPage() {
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
            利用規約
          </h1>

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              本利用規約（以下「本規約」）は、ハーモニックインサイト合同会社（以下「当社」）が提供するウェブサイトおよびサービス（以下「本サービス」）の利用条件を定めるものです。利用者の皆さまには、本規約に同意いただいた上で本サービスをご利用いただきます。
            </p>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                第1条（適用）
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                本規約は、利用者と当社との間の本サービスの利用に関わる一切の関係に適用されるものとします。当社が本サービス上で掲載する個別の規定やガイドラインは、本規約の一部を構成するものとします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                第2条（利用条件）
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                利用者は、本規約に同意の上、当社の定める方法に従い本サービスを利用するものとします。当社は、利用者が以下のいずれかに該当する場合、本サービスの利用を制限または拒否することがあります。
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2 list-disc list-inside mt-3">
                <li>本規約に違反した場合</li>
                <li>登録情報に虚偽の事実があることが判明した場合</li>
                <li>その他、当社が利用を適当でないと判断した場合</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                第3条（禁止事項）
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                利用者は、本サービスの利用にあたり、以下の行為をしてはなりません。
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2 list-disc list-inside mt-3">
                <li>法令または公序良俗に違反する行為</li>
                <li>犯罪行為に関連する行為</li>
                <li>当社または第三者の知的財産権、肖像権、プライバシー、名誉その他の権利を侵害する行為</li>
                <li>本サービスの運営を妨害するおそれのある行為</li>
                <li>不正アクセスまたはこれを試みる行為</li>
                <li>他の利用者に関する個人情報等を収集または蓄積する行為</li>
                <li>本サービスを通じて取得した情報を不正に利用する行為</li>
                <li>その他、当社が不適切と判断する行為</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                第4条（知的財産権）
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                本サービスに関する著作権、商標権その他一切の知的財産権は、当社または正当な権利を有する第三者に帰属します。利用者は、当社の事前の書面による承諾なく、本サービスのコンテンツを複製、転載、改変、販売その他二次利用することはできません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                第5条（免責事項）
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                当社は、本サービスに事実上または法律上の瑕疵（安全性、信頼性、正確性、完全性、有効性、特定の目的への適合性、セキュリティに関する欠陥、エラーやバグ、権利侵害などを含みます）がないことを明示的にも黙示的にも保証しておりません。
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-3">
                当社は、本サービスに起因して利用者に生じたあらゆる損害について、当社の故意または重過失による場合を除き、一切の責任を負いません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                第6条（サービス内容の変更等）
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                当社は、利用者への事前の通知なく、本サービスの内容を変更し、または本サービスの提供を中止することができるものとし、これによって利用者に生じた損害について一切の責任を負いません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                第7条（利用規約の変更）
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                当社は、必要と判断した場合には、利用者への事前の通知なく本規約を変更することができます。変更後の規約は、当社ウェブサイト上に掲載した時点から効力を生じるものとします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                第8条（準拠法・管轄裁判所）
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                本規約の解釈にあたっては、日本法を準拠法とします。本サービスに関して紛争が生じた場合には、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                第9条（お問い合わせ）
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                本規約に関するお問い合わせは、下記までご連絡ください。
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                メール：info@h-insight.jp
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
