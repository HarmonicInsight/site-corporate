import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "サポート",
  description: "Harmonic Insight Appsに関するよくある質問とお問い合わせ先",
};

const faqs = [
  {
    question: "アプリが起動しません",
    answer:
      "まずは端末の再起動をお試しください。それでも解決しない場合は、アプリを一度アンインストールしてから再インストールしてください。問題が続く場合はお問い合わせください。",
  },
  {
    question: "データのバックアップはできますか？",
    answer:
      "アプリによって異なります。各アプリの設定画面をご確認ください。バックアップ機能がないアプリについては、今後のアップデートで対応を検討しています。",
  },
  {
    question: "対応OSを教えてください",
    answer:
      "各アプリの詳細ページに対応プラットフォームを記載しています。Android、iOS、Windowsのいずれかに対応しています。",
  },
  {
    question: "アプリの不具合を報告したい",
    answer:
      "お問い合わせフォームまたはメールにて、発生した問題の詳細（端末情報、OSバージョン、発生手順など）をお知らせください。迅速に対応いたします。",
  },
  {
    question: "機能の要望を送りたい",
    answer:
      "ぜひお聞かせください！お問い合わせよりご意見をお送りいただければ、今後の開発の参考にさせていただきます。",
  },
  {
    question: "β版アプリに参加したい",
    answer:
      "β版が公開されているアプリは、各アプリの詳細ページからTestFlight（iOS）やβ版ダウンロードリンクにアクセスできます。",
  },
];

export default function SupportPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">サポート</h1>

      {/* Contact Section */}
      <div className="bg-primary-50 rounded-2xl p-6 mb-10">
        <h2 className="text-xl font-bold text-gray-900 mb-3">お問い合わせ</h2>
        <p className="text-gray-700 mb-4">
          アプリに関するご質問、不具合の報告、機能のご要望などは、
          以下のメールアドレスまでお気軽にお問い合わせください。
        </p>
        <a
          href="mailto:support@h-insight.jp"
          className="inline-flex items-center px-5 py-2.5 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors font-medium"
        >
          <svg
            className="w-5 h-5 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          support@h-insight.jp
        </a>
        <p className="text-sm text-gray-500 mt-3">
          通常2〜3営業日以内にご返信いたします。
        </p>
      </div>

      {/* FAQ Section */}
      <div>
        <h2 className="text-xl font-bold text-gray-900 mb-6">
          よくある質問（FAQ）
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl border border-gray-200 p-5"
            >
              <h3 className="font-semibold text-gray-900 mb-2">
                Q. {faq.question}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                A. {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation */}
      <div className="mt-10 pt-6 border-t border-gray-200 text-center">
        <Link href="/" className="text-primary-600 hover:text-primary-700">
          ← アプリ一覧に戻る
        </Link>
      </div>
    </div>
  );
}
