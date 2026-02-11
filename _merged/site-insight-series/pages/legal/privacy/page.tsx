import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "Insightシリーズのプライバシーポリシーです。",
};

export default function PrivacyPage() {
  return (
    <Section className="py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-[var(--gray-900)]">
            プライバシーポリシー
          </h1>
          <p className="mt-4 text-sm text-[var(--gray-500)]">
            最終更新日：2024年12月1日
          </p>

          <div className="mt-8 space-y-8 text-[var(--gray-600)]">
            <section>
              <h2 className="text-xl font-semibold text-[var(--gray-900)]">
                はじめに
              </h2>
              <p className="mt-3">
                {siteConfig.company}
                （以下「当社」といいます）は、お客様の個人情報の保護を重要と考え、以下のプライバシーポリシーに従い、お客様の個人情報を適切に取り扱います。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--gray-900)]">
                1. 収集する情報
              </h2>
              <p className="mt-3">当社は、以下の情報を収集することがあります。</p>
              <ul className="mt-2 ml-6 list-disc space-y-1">
                <li>
                  お問い合わせフォームでご入力いただく情報（お名前、メールアドレス、会社名等）
                </li>
                <li>製品購入時にご入力いただく情報（お名前、メールアドレス、決済情報等）</li>
                <li>
                  ウェブサイトの利用状況（アクセスログ、Cookie等）
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--gray-900)]">
                2. 情報の利用目的
              </h2>
              <p className="mt-3">
                収集した情報は、以下の目的で利用します。
              </p>
              <ul className="mt-2 ml-6 list-disc space-y-1">
                <li>製品・サービスの提供</li>
                <li>お問い合わせへの対応</li>
                <li>製品のアップデート・サポート情報の提供</li>
                <li>サービスの改善・新機能の開発</li>
                <li>統計データの作成（個人を特定できない形式）</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--gray-900)]">
                3. 情報の共有
              </h2>
              <p className="mt-3">
                当社は、以下の場合を除き、お客様の個人情報を第三者に提供しません。
              </p>
              <ul className="mt-2 ml-6 list-disc space-y-1">
                <li>お客様の同意がある場合</li>
                <li>法令に基づく場合</li>
                <li>
                  業務委託先に必要な範囲で提供する場合（適切な管理のもと）
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--gray-900)]">
                4. Cookieの使用
              </h2>
              <p className="mt-3">
                当社のウェブサイトでは、利便性向上のためCookieを使用しています。Cookieの使用を希望しない場合は、ブラウザの設定で無効にすることができます。ただし、一部の機能が制限される場合があります。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--gray-900)]">
                5. 情報の保護
              </h2>
              <p className="mt-3">
                当社は、お客様の個人情報を適切に管理し、不正アクセス、紛失、破壊、改ざん、漏洩等を防止するため、合理的なセキュリティ対策を講じています。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--gray-900)]">
                6. お客様の権利
              </h2>
              <p className="mt-3">
                お客様は、当社に対して、ご自身の個人情報の開示、訂正、削除を請求することができます。ご希望の場合は、下記のお問い合わせ先までご連絡ください。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--gray-900)]">
                7. 製品における情報の取り扱い
              </h2>
              <div className="mt-3 space-y-2">
                <p>
                  InsightSlides、InsightPyは、原則としてローカル環境で動作し、お客様のデータを当社のサーバーに送信することはありません。
                </p>
                <p>
                  Interview
                  Insightは、AI処理のためにインターネット接続を使用しますが、インタビュー結果はお客様のローカル環境に保存されます。
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--gray-900)]">
                8. ポリシーの変更
              </h2>
              <p className="mt-3">
                当社は、必要に応じて本ポリシーを変更することがあります。重要な変更がある場合は、当社ウェブサイトでお知らせします。
              </p>
            </section>

            <section className="rounded-lg bg-[var(--gray-100)] p-6">
              <h2 className="text-lg font-semibold text-[var(--gray-900)]">
                お問い合わせ
              </h2>
              <p className="mt-2">
                個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください。
              </p>
              <p className="mt-2">
                <span className="font-medium">{siteConfig.company}</span>
                <br />
                Email:{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[var(--accent)] hover:underline"
                >
                  {siteConfig.email}
                </a>
              </p>
            </section>
          </div>
        </div>
      </Container>
    </Section>
  );
}
