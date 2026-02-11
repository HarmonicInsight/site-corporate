import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "利用規約",
  description: "Insightシリーズの利用規約です。",
};

export default function TermsPage() {
  return (
    <Section className="py-16 md:py-20">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="text-3xl font-bold text-[var(--gray-900)]">利用規約</h1>
          <p className="mt-4 text-sm text-[var(--gray-500)]">
            最終更新日：2024年12月1日
          </p>

          <div className="mt-8 space-y-8 text-[var(--gray-600)]">
            <section>
              <h2 className="text-xl font-semibold text-[var(--gray-900)]">
                第1条（適用）
              </h2>
              <p className="mt-3">
                本規約は、{siteConfig.company}
                （以下「当社」といいます）が提供するInsightシリーズ製品（以下「本製品」といいます）の利用に関する条件を、本製品を利用するお客様（以下「ユーザー」といいます）と当社との間で定めるものです。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--gray-900)]">
                第2条（ライセンスの付与）
              </h2>
              <div className="mt-3 space-y-2">
                <p>
                  1.
                  当社は、ユーザーに対し、本規約に従い、本製品を使用する非独占的かつ譲渡不能なライセンスを付与します。
                </p>
                <p>
                  2. 個人ライセンスは、1台のコンピュータでの使用に限定されます。
                </p>
                <p>
                  3.
                  法人ライセンスは、契約で定めた範囲内での使用に限定されます。
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--gray-900)]">
                第3条（禁止事項）
              </h2>
              <p className="mt-3">
                ユーザーは、本製品の利用にあたり、以下の行為を行ってはなりません。
              </p>
              <ul className="mt-2 ml-6 list-disc space-y-1">
                <li>本製品の複製、改変、リバースエンジニアリング</li>
                <li>本製品のライセンスの譲渡、再許諾、貸与</li>
                <li>本製品を利用した違法行為</li>
                <li>当社または第三者の権利を侵害する行為</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--gray-900)]">
                第4条（免責事項）
              </h2>
              <div className="mt-3 space-y-2">
                <p>
                  1.
                  当社は、本製品に関して、特定目的への適合性、正確性、完全性、有用性、第三者の権利を侵害していないことについて、明示的にも黙示的にも保証しません。
                </p>
                <p>
                  2.
                  当社は、本製品の利用により生じた損害について、当社の故意または重過失による場合を除き、責任を負いません。
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--gray-900)]">
                第5条（サポート）
              </h2>
              <div className="mt-3 space-y-2">
                <p>
                  1.
                  当社は、本製品に関するメールでのサポートを提供します。
                </p>
                <p>
                  2.
                  サポートの対応時間は、平日10:00〜18:00（土日祝日を除く）です。
                </p>
                <p>
                  3.
                  法人ライセンスのお客様には、優先サポートを提供します。
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--gray-900)]">
                第6条（返金）
              </h2>
              <p className="mt-3">
                本製品はデジタルダウンロード製品であるため、原則として購入後の返金はお受けしておりません。ただし、製品に重大な欠陥がある場合は、購入後30日以内に限り、当社の判断により返金に応じる場合があります。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--gray-900)]">
                第7条（規約の変更）
              </h2>
              <p className="mt-3">
                当社は、必要に応じて本規約を変更することがあります。変更後の規約は、当社ウェブサイトに掲載した時点で効力を生じます。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-[var(--gray-900)]">
                第8条（準拠法・管轄）
              </h2>
              <p className="mt-3">
                本規約は日本法に準拠します。本規約に関する紛争については、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
              </p>
            </section>

            <section className="rounded-lg bg-[var(--gray-100)] p-6">
              <h2 className="text-lg font-semibold text-[var(--gray-900)]">
                お問い合わせ
              </h2>
              <p className="mt-2">
                本規約に関するお問い合わせは、以下までご連絡ください。
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
