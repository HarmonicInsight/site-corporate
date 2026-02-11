import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { products } from "@/data/products";
import {
  Presentation,
  Terminal,
  MessageSquare,
  Database,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

export const metadata: Metadata = {
  title: "製品一覧",
  description:
    "Insightシリーズの製品ラインナップ。経営ダッシュボード、資料作成自動化、Python実行環境、AIインタビューなど、業務効率化を支援するツール群をご紹介します。",
};

const iconMap: Record<string, React.ElementType> = {
  Presentation,
  Terminal,
  MessageSquare,
  Database,
  BarChart3,
};

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  blue: {
    bg: "bg-blue-500/10",
    text: "text-blue-400",
    border: "border-blue-500/30",
  },
  green: {
    bg: "bg-green-500/10",
    text: "text-green-400",
    border: "border-green-500/30",
  },
  purple: {
    bg: "bg-purple-500/10",
    text: "text-purple-400",
    border: "border-purple-500/30",
  },
  orange: {
    bg: "bg-[var(--accent-bg)]",
    text: "text-[var(--accent)]",
    border: "border-[var(--accent)]/30",
  },
  indigo: {
    bg: "bg-indigo-500/10",
    text: "text-indigo-400",
    border: "border-indigo-500/30",
  },
};

export default function ProductsPage() {
  return (
    <>
      {/* Hero */}
      <Section className="py-16 md:py-20">
        <Container>
          <SectionHeader>
            <SectionTitle>製品一覧</SectionTitle>
            <SectionDescription>
              業務効率化・自動化を支援するソフトウェア群。
              <br className="hidden md:inline" />
              それぞれが独立したツールとして、すぐに使い始められます。
            </SectionDescription>
          </SectionHeader>
        </Container>
      </Section>

      {/* Products Grid */}
      <Section variant="gray" className="py-12">
        <Container>
          <div className="grid gap-8 md:grid-cols-1 lg:gap-12">
            {products.map((product) => {
              const Icon = iconMap[product.icon] || Presentation;
              const colors = colorMap[product.color] || colorMap.blue;

              return (
                <Card
                  key={product.id}
                  className={`overflow-hidden border-l-4 ${colors.border}`}
                >
                  <div className="grid md:grid-cols-3">
                    <CardHeader className="md:col-span-1">
                      <div
                        className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl ${colors.bg}`}
                      >
                        <Icon className={`h-7 w-7 ${colors.text}`} />
                      </div>
                      <CardTitle className="text-2xl">{product.name}</CardTitle>
                      <CardDescription className="text-base">
                        {product.tagline}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6 md:col-span-2 md:pt-6">
                      <p className="text-[var(--gray-600)]">{product.description}</p>

                      <div className="mt-6">
                        <h4 className="mb-3 text-sm font-semibold text-[var(--gray-900)]">
                          主な機能
                        </h4>
                        <ul className="grid gap-2 sm:grid-cols-2">
                          {product.features.slice(0, 4).map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
                              <span className="text-sm text-[var(--gray-600)]">
                                {feature.title}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-6 flex flex-wrap gap-3">
                        <Button href={`/products/${product.slug}`}>
                          詳細を見る
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                        <Button href="/pricing" variant="outline">
                          価格を確認
                        </Button>
                      </div>
                    </CardContent>
                  </div>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <div className="rounded-2xl bg-[var(--gray-100)] p-8 text-center md:p-12">
            <h2 className="text-2xl font-bold text-[var(--gray-900)] md:text-3xl">
              どの製品を選べばいいかわからない？
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--gray-600)]">
              お気軽にご相談ください。現在の課題をお聞きして、最適な製品をご提案します。
            </p>
            <div className="mt-6">
              <Button href="/contact" size="lg">
                無料で相談する
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
