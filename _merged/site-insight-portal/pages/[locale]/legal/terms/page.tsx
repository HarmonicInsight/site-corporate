import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "利用規約",
  description: "Harmonic Insight Appsの利用規約",
};

export default function TermsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">利用規約</h1>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8 prose prose-gray max-w-none">
        <p className="text-sm text-gray-500 mb-6">最終更新日: 2024年12月1日</p>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            第1条（適用）
          </h2>
          <p className="text-gray-700 leading-relaxed">
            本規約は、Harmonic Insight（以下「当社」）が提供するアプリケーション
            （以下「本アプリ」）の利用条件を定めるものです。利用者は本規約に
            同意した上で本アプリをご利用ください。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            第2条（禁止事項）
          </h2>
          <p className="text-gray-700 leading-relaxed">
            利用者は、本アプリの利用にあたり、以下の行為をしてはなりません。
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-3 space-y-1">
            <li>法令または公序良俗に違反する行為</li>
            <li>当社または第三者の知的財産権を侵害する行為</li>
            <li>本アプリの運営を妨害する行為</li>
            <li>
              リバースエンジニアリング、逆コンパイル、逆アセンブルその他これらに類する行為
            </li>
            <li>不正アクセスまたはこれを試みる行為</li>
            <li>その他当社が不適切と判断する行為</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            第3条（免責事項）
          </h2>
          <p className="text-gray-700 leading-relaxed">
            当社は、本アプリに事実上または法律上の瑕疵（安全性、信頼性、正確性、
            完全性、有効性、特定の目的への適合性、セキュリティなどに関する欠陥、
            エラーやバグ、権利侵害などを含みます）がないことを明示的にも黙示的にも
            保証しておりません。
          </p>
          <p className="text-gray-700 leading-relaxed mt-3">
            当社は、本アプリに起因して利用者に生じたあらゆる損害について、
            当社の故意または重過失による場合を除き、一切の責任を負いません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            第4条（サービス内容の変更等）
          </h2>
          <p className="text-gray-700 leading-relaxed">
            当社は、利用者への事前の通知なく、本アプリの内容を変更し、
            または本アプリの提供を中止することができるものとし、これによって
            利用者に生じた損害について一切の責任を負いません。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            第5条（規約の変更）
          </h2>
          <p className="text-gray-700 leading-relaxed">
            当社は、必要と判断した場合には、利用者への事前の通知なく本規約を
            変更することができます。変更後の規約は、当社ウェブサイト上に
            掲載した時点から効力を生じるものとします。
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            第6条（準拠法・管轄裁判所）
          </h2>
          <p className="text-gray-700 leading-relaxed">
            本規約の解釈にあたっては、日本法を準拠法とします。
            本アプリに関して紛争が生じた場合には、当社の本店所在地を管轄する
            裁判所を専属的合意管轄とします。
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-3">
            第7条（お問い合わせ）
          </h2>
          <p className="text-gray-700 leading-relaxed">
            本規約に関するお問い合わせは、以下までご連絡ください。
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
      </div>

      <div className="mt-8 text-center">
        <Link href="/" className="text-primary-600 hover:text-primary-700">
          ← トップに戻る
        </Link>
      </div>
    </div>
  );
}
