import { Container } from "@/components/ui/container";
import {
  Section,
  SectionHeader,
  SectionLabel,
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
import { generalFAQ } from "@/data/faq";
import {
  Presentation,
  Terminal,
  MessageSquare,
  Database,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  FileText,
  Zap,
  Settings,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  Presentation,
  Terminal,
  MessageSquare,
  Database,
  BarChart3,
};

const colorMap: Record<string, string> = {
  blue: "bg-blue-100 text-blue-600",
  green: "bg-green-100 text-green-600",
  purple: "bg-purple-100 text-purple-600",
  orange: "bg-[var(--accent-bg)] text-[var(--accent)]",
  indigo: "bg-indigo-100 text-indigo-600",
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <Section className="relative overflow-hidden py-20 md:py-32">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-xs tracking-widest text-[var(--gray-500)] mb-6">
              INSIGHT SERIES
            </p>
            <h1 className="text-balance font-mincho text-3xl tracking-wide text-[var(--gray-900)] md:text-4xl lg:text-5xl">
              業務の頭の中を
              <br />
              <span className="text-[var(--accent)]">構造化</span>して、
              <span className="text-[var(--accent)]">自動化</span>する
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-[var(--gray-600)] md:text-lg">
              資料作成、データ処理、ヒアリング。
              <br className="hidden md:inline" />
              繰り返しの業務を仕組みに変え、本来やるべきことに集中できる環境を。
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/contact" size="lg">
                無料で相談する
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button href="/products" variant="outline" size="lg">
                製品を見る
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Value Proposition */}
      <Section variant="gray">
        <Container>
          <SectionHeader>
            <SectionLabel>CONCEPT</SectionLabel>
            <SectionTitle>業務改善の3つの軸</SectionTitle>
            <SectionDescription>
              Insightシリーズは、日々の業務を「すぐ動く」状態に近づけます
            </SectionDescription>
          </SectionHeader>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center bg-[var(--accent-bg)]">
                <FileText className="h-7 w-7 text-[var(--accent)]" />
              </div>
              <h3 className="mt-4 font-mincho text-lg text-[var(--gray-900)]">
                業務の頭の中を吐き出して構造化
              </h3>
              <p className="mt-2 text-sm text-[var(--gray-600)]">
                暗黙知を形式知に。属人化した業務フローやノウハウを、誰でも使える形に整理します。
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center bg-[var(--accent-bg)]">
                <Zap className="h-7 w-7 text-[var(--accent)]" />
              </div>
              <h3 className="mt-4 font-mincho text-lg text-[var(--gray-900)]">
                資料作成・レビューの自動化
              </h3>
              <p className="mt-2 text-sm text-[var(--gray-600)]">
                毎週・毎月の定型資料作成を自動化。品質の一定化とレビュー効率の向上を同時に実現します。
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center bg-[var(--accent-bg)]">
                <Settings className="h-7 w-7 text-[var(--accent)]" />
              </div>
              <h3 className="mt-4 font-mincho text-lg text-[var(--gray-900)]">
                実行環境を整えて「すぐ動く」に寄せる
              </h3>
              <p className="mt-2 text-sm text-[var(--gray-600)]">
                環境構築の手間を省き、使いたいときにすぐ動かせる。継続的な運用を止めない仕組みを提供します。
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Products */}
      <Section>
        <Container>
          <SectionHeader>
            <SectionLabel>PRODUCTS</SectionLabel>
            <SectionTitle>製品ラインナップ</SectionTitle>
            <SectionDescription>
              それぞれが独立したツールとして動作します。
              <br className="hidden md:inline" />
              組み合わせることで、より効果的な業務改善が可能です。
            </SectionDescription>
          </SectionHeader>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {products.map((product) => {
              const Icon = iconMap[product.icon] || Presentation;
              const colorClass = colorMap[product.color] || colorMap.blue;

              return (
                <Card key={product.id} className="flex flex-col">
                  <CardHeader>
                    <div
                      className={`mb-4 flex h-12 w-12 items-center justify-center ${colorClass}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <CardTitle>{product.name}</CardTitle>
                    <CardDescription>{product.tagline}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col">
                    <p className="flex-1 text-sm text-[var(--gray-600)]">
                      {product.description}
                    </p>
                    <div className="mt-6">
                      <Link
                        href={`/products/${product.slug}`}
                        className="inline-flex items-center text-sm font-medium text-[var(--accent)] hover:text-[var(--accent-light)]"
                      >
                        詳しく見る
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* How It Works */}
      <Section variant="gray">
        <Container>
          <SectionHeader>
            <SectionLabel>FLOW</SectionLabel>
            <SectionTitle>導入の流れ</SectionTitle>
            <SectionDescription>
              シンプルなステップで、すぐに使い始められます
            </SectionDescription>
          </SectionHeader>

          <div className="mt-12 grid gap-8 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "お問い合わせ",
                description: "現在の課題や導入目的をお聞かせください",
              },
              {
                step: "02",
                title: "製品選定",
                description:
                  "課題に合った製品をご提案。個人・法人でプランを選択",
              },
              {
                step: "03",
                title: "購入・導入",
                description:
                  "オンラインで購入後、すぐにダウンロード・セットアップ",
              },
              {
                step: "04",
                title: "運用開始",
                description:
                  "ドキュメントを参照しながら、実際の業務で活用開始",
              },
            ].map((item) => (
              <div key={item.step} className="relative text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center bg-[var(--gray-900)] font-mincho text-lg text-white">
                  {item.step}
                </div>
                <h3 className="mt-4 font-mincho text-lg text-[var(--gray-900)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-[var(--gray-600)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Case Study Placeholder */}
      <Section>
        <Container>
          <SectionHeader>
            <SectionLabel>CASE STUDY</SectionLabel>
            <SectionTitle>導入事例</SectionTitle>
            <SectionDescription>
              様々な業種のお客様にご活用いただいています
            </SectionDescription>
          </SectionHeader>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[var(--gray-100)]">
                  <span className="text-xl">🏭</span>
                </div>
                <div>
                  <h3 className="font-mincho text-[var(--gray-900)]">製造業 A社</h3>
                  <p className="mt-2 text-sm text-[var(--gray-600)]">
                    週次報告資料の作成時間を80%削減。InsightSlidesを活用し、工程データから自動で進捗レポートを生成。担当者が本来の分析業務に集中できるようになりました。
                  </p>
                </div>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-[var(--gray-100)]">
                  <span className="text-xl">🏗️</span>
                </div>
                <div>
                  <h3 className="font-mincho text-[var(--gray-900)]">
                    建設業 B社
                  </h3>
                  <p className="mt-2 text-sm text-[var(--gray-600)]">
                    現場ノウハウの属人化を解消。Interview
                    Insightでベテラン社員のヒアリングを実施し、ナレッジベースを構築。新人教育の質が向上しました。
                  </p>
                </div>
              </div>
            </Card>
          </div>
          <div className="mt-8 text-center">
            <p className="text-xs text-[var(--gray-500)]">
              ※ 事例は導入効果のイメージです。実際の効果は環境により異なります。
            </p>
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section variant="gray">
        <Container>
          <SectionHeader>
            <SectionLabel>FAQ</SectionLabel>
            <SectionTitle>よくある質問</SectionTitle>
          </SectionHeader>

          <div className="mx-auto mt-12 max-w-3xl divide-y divide-[var(--border)]">
            {generalFAQ.slice(0, 5).map((item, index) => (
              <details key={index} className="group py-4">
                <summary className="flex cursor-pointer items-center justify-between text-left font-medium text-[var(--gray-900)]">
                  {item.question}
                  <ChevronDown className="h-5 w-5 shrink-0 text-[var(--gray-500)] transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-[var(--gray-600)]">{item.answer}</p>
              </details>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button href="/docs" variant="outline">
              FAQをもっと見る
            </Button>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="dark">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs tracking-widest text-white/60 mb-4">
              GET STARTED
            </p>
            <h2 className="font-mincho text-2xl text-white md:text-3xl">
              業務改善を、今すぐ始めましょう
            </h2>
            <p className="mt-4 text-white/80">
              お気軽にご相談ください。課題に合わせた最適な製品をご提案します。
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                href="/contact"
                variant="accent"
                size="lg"
              >
                無料で相談する
              </Button>
              <Button
                href="/pricing"
                variant="outline-light"
                size="lg"
              >
                価格を見る
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                <span>法人相談対応</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                <span>導入支援あり</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" />
                <span>メールサポート</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
