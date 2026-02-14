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
              本利用規約（以下「本規約」）は、ハーモニックインサイト合同会社（以下「当社」）が提供するすべてのソフトウェア製品、ウェブサイト、およびサービス（以下「本サービス」）の利用条件を定めるものです。利用者（以下「ユーザー」）は、本サービスを利用することにより、本規約に同意したものとみなされます。
            </p>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                第1条（適用範囲）
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                本規約は、当社が提供するすべてのソフトウェア製品、ウェブサイト、およびサービスに適用されます。ユーザーは本サービスを利用することにより、本規約に同意したものとみなされます。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                第2条（サービスの利用）
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                ユーザーは、適法かつ本規約に従って本サービスを利用するものとします。当社は、事前の通知なく、本サービスの内容を変更、追加、または廃止する場合があります。これによってユーザーに生じた損害について、当社は一切の責任を負いません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                第3条（アカウントおよびライセンス）
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                ユーザーは、自己の責任においてアカウント情報およびライセンスキーを適切に管理するものとします。アカウント情報やライセンスキーの管理不十分、第三者による使用等によって生じた損害について、当社は一切の責任を負いません。
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-3">
                ライセンスの譲渡、共有、または再配布は、当社の書面による事前の同意がない限り禁止されます。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                第4条（禁止事項）
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                ユーザーは、本サービスの利用にあたり、以下の行為をしてはなりません。
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-2 list-disc list-inside mt-3">
                <li>法令または公序良俗に違反する行為</li>
                <li>当社または第三者の知的財産権を侵害する行為</li>
                <li>リバースエンジニアリング、逆コンパイル、逆アセンブルその他これらに類する行為</li>
                <li>本サービスの運営を妨害するおそれのある行為</li>
                <li>当社の許可なく本サービスを商業目的で利用する行為</li>
                <li>その他、当社が不適切と判断する行為</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                第5条（知的財産権）
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                本サービスに関する著作権、商標権その他一切の知的財産権は、すべて当社または正当な権利を有する第三者に帰属します。本規約は、ユーザーに対して本サービスに関する知的財産権を譲渡するものではありません。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                第6条（免責事項）
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                当社は、本サービスの正確性、完全性、有用性等について、いかなる保証も行いません。当社は、本サービスに起因してユーザーに生じたあらゆる損害について、当社の故意または重過失による場合を除き、一切の責任を負いません。
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-3">
                本サービスに含まれるAI機能の出力についても同様に、その正確性や完全性を保証するものではなく、ユーザーの責任において利用するものとします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                第7条（利用規約の変更）
              </h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                当社は、必要と判断した場合には、ユーザーへの事前の通知なく本規約を変更することができます。変更後の規約は、当社ウェブサイト上に掲載した時点から効力を生じるものとします。
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                第8条（準拠法および管轄裁判所）
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
