import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "このサイトについて",
  description: "Harmonic Insight Apps Portalについて",
};

export default function AboutPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        このサイトについて
      </h1>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 space-y-8">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            Harmonic Insight Apps Portal
          </h2>
          <p className="text-gray-700 leading-relaxed">
            このサイトは、Harmonic Insightが開発するアプリケーションを
            紹介するポータルサイトです。Android、iOS、Windows向けの
            様々なアプリをご覧いただけます。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            私たちの目指すこと
          </h2>
          <p className="text-gray-700 leading-relaxed">
            「テクノロジーを通じて、日々の生活やビジネスをもっと便利に、
            もっと楽しく」をモットーに、使いやすく価値のあるアプリケーションを
            開発しています。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            アプリのステータスについて
          </h2>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-start">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-green-100 text-green-800 border border-green-300 mr-3 mt-0.5">
                PUB
              </span>
              <span>
                <strong>公開中</strong>：正式版としてストアで公開されています。
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-purple-100 text-purple-800 border border-purple-300 mr-3 mt-0.5">
                BETA
              </span>
              <span>
                <strong>β版</strong>
                ：テスト公開中です。TestFlightやベータ版としてお試しいただけます。
              </span>
            </li>
            <li className="flex items-start">
              <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-bold bg-yellow-100 text-yellow-800 border border-yellow-300 mr-3 mt-0.5">
                DEV
              </span>
              <span>
                <strong>開発中</strong>
                ：現在開発を進めています。リリースをお楽しみに！
              </span>
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            お問い合わせ
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            アプリに関するご質問、ご意見、お問い合わせは以下からお願いいたします。
          </p>
          <Link
            href="/support"
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            サポートページへ
            <svg
              className="ml-1 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </section>
      </div>
    </div>
  );
}
