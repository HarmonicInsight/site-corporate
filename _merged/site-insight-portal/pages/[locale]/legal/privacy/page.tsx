import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "Harmonic Insight Appsのプライバシーポリシー",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">
        プライバシーポリシー
      </h1>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 prose prose-gray max-w-none">
        <p className="text-sm text-gray-500 mb-6">最終更新日: 2024年12月1日</p>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            1. はじめに
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Harmonic Insight（以下「当社」）は、当社が提供するアプリケーション
            （以下「本アプリ」）における利用者の個人情報の取り扱いについて、
            以下のとおりプライバシーポリシーを定めます。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            2. 収集する情報
          </h2>
          <p className="text-gray-700 leading-relaxed">
            本アプリでは、以下の情報を収集する場合があります：
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>デバイス情報（OSバージョン、端末の種類など）</li>
            <li>アプリの利用状況（機能の使用頻度、エラー情報など）</li>
            <li>
              お問い合わせ時にご提供いただく情報（メールアドレス、お名前など）
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            3. 情報の利用目的
          </h2>
          <p className="text-gray-700 leading-relaxed">
            収集した情報は、以下の目的で利用します：
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>本アプリの提供・運営</li>
            <li>本アプリの改善・新機能の開発</li>
            <li>お問い合わせへの対応</li>
            <li>利用状況の分析</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            4. 第三者への提供
          </h2>
          <p className="text-gray-700 leading-relaxed">
            当社は、法令に基づく場合を除き、利用者の同意なく個人情報を
            第三者に提供することはありません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            5. セキュリティ
          </h2>
          <p className="text-gray-700 leading-relaxed">
            当社は、個人情報の漏洩、滅失またはき損の防止その他の個人情報の
            安全管理のために必要かつ適切な措置を講じます。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            6. お問い合わせ
          </h2>
          <p className="text-gray-700 leading-relaxed">
            本ポリシーに関するお問い合わせは、以下までご連絡ください。
          </p>
          <p className="mt-3">
            <a
              href="mailto:support@h-insight.jp"
              className="text-primary-600 hover:text-primary-700"
            >
              support@h-insight.jp
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            7. ポリシーの変更
          </h2>
          <p className="text-gray-700 leading-relaxed">
            当社は、必要に応じて本ポリシーを変更することがあります。
            重要な変更がある場合は、本アプリ内またはウェブサイトで
            お知らせします。
          </p>
        </section>
      </div>

      <div className="mt-8 text-center">
        <Link href="/" className="text-primary-600 hover:text-primary-700">
          ← トップに戻る
        </Link>
      </div>
    </div>
  );
}
