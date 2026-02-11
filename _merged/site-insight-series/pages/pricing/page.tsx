import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { pricingData } from "@/data/pricing";
import { products } from "@/data/products";
import {
  CheckCircle2,
  Presentation,
  Terminal,
  MessageSquare,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "価格・プラン",
  description:
    "Insightシリーズの価格とプラン一覧。個人向け買い切りライセンスから法人向けカスタムプランまで、ニーズに合わせてお選びいただけます。",
};

const iconMap: Record<string, React.ElementType> = {
  Presentation,
  Terminal,
  MessageSquare,
};

const colorMap: Record<string, { bg: string; text: string }> = {
  blue: { bg: "bg-blue-500/20", text: "text-blue-400" },
  green: { bg: "bg-green-500/20", text: "text-green-400" },
  purple: { bg: "bg-purple-500/20", text: "text-purple-400" },
};

function PricingCard({
  productName,
  plan,
}: {
  productName: string;
  plan: (typeof pricingData)[0]["plans"][0];
}) {
  const checkoutUrl = plan.checkoutEnvKey
    ? process.env[plan.checkoutEnvKey]
    : null;
  const href = checkoutUrl || "/contact";
  const isExternal = !!checkoutUrl;

  return (
    <Card className={`flex flex-col p-6 ${plan.recommended ? "ring-2 ring-[var(--accent)]" : ""}`}>
      {plan.recommended && (
        <Badge variant="primary" className="mb-4 w-fit">
          おすすめ
        </Badge>
      )}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium text-[var(--gray-500)]">
          {productName}
        </span>
      </div>
      <h3 className="mt-2 text-xl font-semibold text-[var(--gray-900)]">
        {plan.name}
      </h3>
      <div className="mt-4">
        <span className="text-4xl font-bold text-[var(--gray-900)]">{plan.price}</span>
        {plan.priceNote && (
          <span className="ml-2 text-sm text-[var(--gray-500)]">{plan.priceNote}</span>
        )}
      </div>
      <ul className="mt-6 flex-1 space-y-3">
        {plan.features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-400" />
            <span className="text-sm text-[var(--gray-600)]">{feature}</span>
          </li>
        ))}
      </ul>
      <div className="mt-8">
        {plan.type === "personal" ? (
          <Button
            href={href}
            external={isExternal}
            className="w-full"
          >
            購入する
          </Button>
        ) : (
          <Button href="/contact" variant="outline" className="w-full">
            お見積り・相談
          </Button>
        )}
      </div>
    </Card>
  );
}

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <Section className="py-16 md:py-20">
        <Container>
          <SectionHeader>
            <SectionTitle>価格・プラン</SectionTitle>
            <SectionDescription>
              シンプルな価格体系。個人利用から法人導入まで対応します。
            </SectionDescription>
          </SectionHeader>
        </Container>
      </Section>

      {/* Pricing Tables */}
      <Section variant="gray" className="py-12">
        <Container>
          {pricingData.map((productPricing) => {
            const product = products.find((p) => p.id === productPricing.productId);
            if (!product) return null;
            const Icon = iconMap[product.icon] || Presentation;
            const colors = colorMap[product.color] || colorMap.blue;

            return (
              <div key={productPricing.productId} className="mb-16 last:mb-0">
                <div className="mb-8 flex items-center gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors.bg}`}
                  >
                    <Icon className={`h-6 w-6 ${colors.text}`} />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-[var(--gray-900)]">
                      {productPricing.productName}
                    </h2>
                    <Link
                      href={`/products/${product.slug}`}
                      className="text-sm text-[var(--accent)] hover:underline"
                    >
                      製品詳細を見る
                    </Link>
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
                  {productPricing.plans.map((plan, idx) => (
                    <PricingCard
                      key={idx}
                      productName={productPricing.productName}
                      plan={plan}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </Container>
      </Section>

      {/* Comparison Table */}
      <Section>
        <Container>
          <SectionHeader>
            <SectionTitle>プラン比較</SectionTitle>
          </SectionHeader>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[600px] text-left">
              <thead>
                <tr className="border-b border-[var(--border)]">
                  <th className="pb-4 font-semibold text-[var(--gray-900)]"></th>
                  <th className="pb-4 text-center font-semibold text-[var(--gray-900)]">
                    個人ライセンス
                  </th>
                  <th className="pb-4 text-center font-semibold text-[var(--gray-900)]">
                    法人ライセンス
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                <tr>
                  <td className="py-4 text-[var(--gray-600)]">利用PC台数</td>
                  <td className="py-4 text-center text-[var(--gray-900)]">1台</td>
                  <td className="py-4 text-center text-[var(--gray-900)]">複数台</td>
                </tr>
                <tr>
                  <td className="py-4 text-[var(--gray-600)]">サポート</td>
                  <td className="py-4 text-center text-[var(--gray-900)]">メール</td>
                  <td className="py-4 text-center text-[var(--gray-900)]">
                    優先メール
                  </td>
                </tr>
                <tr>
                  <td className="py-4 text-[var(--gray-600)]">導入支援</td>
                  <td className="py-4 text-center text-[var(--gray-500)]">-</td>
                  <td className="py-4 text-center">
                    <CheckCircle2 className="mx-auto h-5 w-5 text-green-400" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 text-[var(--gray-600)]">カスタマイズ対応</td>
                  <td className="py-4 text-center text-[var(--gray-500)]">-</td>
                  <td className="py-4 text-center">
                    <CheckCircle2 className="mx-auto h-5 w-5 text-green-400" />
                  </td>
                </tr>
                <tr>
                  <td className="py-4 text-[var(--gray-600)]">請求書払い</td>
                  <td className="py-4 text-center text-[var(--gray-500)]">-</td>
                  <td className="py-4 text-center">
                    <CheckCircle2 className="mx-auto h-5 w-5 text-green-400" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Container>
      </Section>

      {/* Enterprise CTA */}
      <Section variant="gray">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl font-bold text-[var(--gray-900)] md:text-3xl">
              法人での導入をお考えですか？
            </h2>
            <p className="mt-4 text-[var(--gray-600)]">
              ユーザー数や利用形態に応じたお見積りを作成します。
              <br className="hidden md:inline" />
              導入支援やカスタマイズのご相談も承ります。
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" size="lg">
                法人相談する
              </Button>
              <Button href="/products" variant="outline" size="lg">
                製品を見る
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section>
        <Container>
          <SectionHeader>
            <SectionTitle>価格に関するよくある質問</SectionTitle>
          </SectionHeader>
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-[var(--border)]">
            <details className="group py-4">
              <summary className="flex cursor-pointer items-center justify-between text-left font-medium text-[var(--gray-900)]">
                支払い方法は何がありますか？
              </summary>
              <p className="mt-3 text-[var(--gray-600)]">
                個人ライセンスはクレジットカード決済に対応しています。法人ライセンスは請求書払いも可能です。
              </p>
            </details>
            <details className="group py-4">
              <summary className="flex cursor-pointer items-center justify-between text-left font-medium text-[var(--gray-900)]">
                アップデートは有料ですか？
              </summary>
              <p className="mt-3 text-[var(--gray-600)]">
                個人ライセンスは購入後1年間のアップデートが無料です。法人ライセンスはサポート契約期間中、継続的にアップデートを受け取れます。
              </p>
            </details>
            <details className="group py-4">
              <summary className="flex cursor-pointer items-center justify-between text-left font-medium text-[var(--gray-900)]">
                複数製品をまとめて購入する割引はありますか？
              </summary>
              <p className="mt-3 text-[var(--gray-600)]">
                法人ライセンスでは複数製品のセット割引をご用意しています。詳細はお問い合わせください。
              </p>
            </details>
            <details className="group py-4">
              <summary className="flex cursor-pointer items-center justify-between text-left font-medium text-[var(--gray-900)]">
                返金は可能ですか？
              </summary>
              <p className="mt-3 text-[var(--gray-600)]">
                デジタル製品のため、原則として購入後の返金はお受けしておりません。ご不明点は購入前にお問い合わせください。
              </p>
            </details>
          </div>
        </Container>
      </Section>
    </>
  );
}
