import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Section, SectionTitle } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { getProductBySlug, getAllProductSlugs } from "@/data/products";
import { getPricingByProductId } from "@/data/pricing";
import {
  Presentation,
  Terminal,
  MessageSquare,
  Database,
  BarChart3,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Users,
  Lightbulb,
  ChevronDown,
} from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Presentation,
  Terminal,
  MessageSquare,
  Database,
  BarChart3,
};

const colorMap: Record<string, { bg: string; text: string; gradient: string }> = {
  blue: {
    bg: "bg-blue-500/20",
    text: "text-blue-400",
    gradient: "from-blue-600 to-blue-700",
  },
  green: {
    bg: "bg-green-500/20",
    text: "text-green-400",
    gradient: "from-green-600 to-green-700",
  },
  purple: {
    bg: "bg-purple-500/20",
    text: "text-purple-400",
    gradient: "from-purple-600 to-purple-700",
  },
  orange: {
    bg: "bg-[var(--accent-bg)]",
    text: "text-[var(--accent)]",
    gradient: "from-[var(--accent)] to-[var(--accent-dark)]",
  },
  indigo: {
    bg: "bg-indigo-500/20",
    text: "text-indigo-400",
    gradient: "from-indigo-600 to-indigo-700",
  },
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "製品が見つかりません" };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: `${product.name} | Insightシリーズ`,
      description: product.description,
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const pricing = getPricingByProductId(product.id);
  const Icon = iconMap[product.icon] || Presentation;
  const colors = colorMap[product.color] || colorMap.blue;

  return (
    <>
      {/* Hero */}
      <Section
        className={`bg-gradient-to-br ${colors.gradient} py-16 text-white md:py-24`}
      >
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20">
                <Icon className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-3xl font-bold md:text-4xl lg:text-5xl">
                  {product.name}
                </h1>
                <p className="mt-2 text-lg opacity-90">{product.tagline}</p>
              </div>
            </div>
            <p className="mt-6 max-w-2xl text-lg opacity-90">
              {product.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                href="/pricing"
                size="lg"
                className="bg-white text-[var(--gray-900)] hover:bg-white/90"
              >
                価格を確認する
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                相談する
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Target Users */}
      <Section>
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-3">
              <Users className={`h-6 w-6 ${colors.text}`} />
              <SectionTitle className="!mt-0 text-2xl">対象ユーザー</SectionTitle>
            </div>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {product.targetUsers.map((user, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-green-400" />
                  <span className="text-[var(--gray-600)]">{user}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* Features */}
      <Section variant="gray">
        <Container>
          <div className="mx-auto max-w-4xl">
            <SectionTitle className="text-2xl">主な機能</SectionTitle>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {product.features.map((feature, idx) => (
                <Card key={idx} className="p-6">
                  <h3 className="font-semibold text-[var(--gray-900)]">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--gray-600)]">
                    {feature.description}
                  </p>
                </Card>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Can Do / Cannot Do */}
      <Section>
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-2">
              {/* Can Do */}
              <div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-green-400" />
                  <h2 className="text-xl font-semibold text-[var(--gray-900)]">
                    できること
                  </h2>
                </div>
                <ul className="mt-4 space-y-3">
                  {product.canDo.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-[var(--gray-600)]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-green-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cannot Do */}
              <div>
                <div className="flex items-center gap-2">
                  <XCircle className="h-5 w-5 text-red-400" />
                  <h2 className="text-xl font-semibold text-[var(--gray-900)]">
                    できないこと（注意点）
                  </h2>
                </div>
                <ul className="mt-4 space-y-3">
                  {product.cannotDo.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-[var(--gray-600)]"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-red-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Future Features */}
            {product.futureFeatures.length > 0 && (
              <div className="mt-8 rounded-lg bg-[var(--gray-100)] p-6">
                <div className="flex items-center gap-2">
                  <Lightbulb className="h-5 w-5 text-yellow-400" />
                  <h3 className="font-semibold text-[var(--gray-900)]">
                    今後の開発予定
                  </h3>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {product.futureFeatures.map((feature, idx) => (
                    <Badge key={idx} variant="default">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Installation Steps */}
      <Section variant="gray">
        <Container>
          <div className="mx-auto max-w-4xl">
            <SectionTitle className="text-2xl">導入の流れ</SectionTitle>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {product.installSteps.map((step, idx) => (
                <div key={idx} className="relative">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-full ${colors.bg} ${colors.text} font-bold`}
                  >
                    {idx + 1}
                  </div>
                  <h3 className="mt-4 font-semibold text-[var(--gray-900)]">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-[var(--gray-600)]">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Pricing CTA */}
      {pricing && (
        <Section>
          <Container>
            <div className="mx-auto max-w-4xl">
              <SectionTitle className="text-2xl">価格</SectionTitle>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {pricing.plans.map((plan, idx) => (
                  <Card
                    key={idx}
                    className={`p-6 ${plan.recommended ? "ring-2 ring-[var(--accent)]" : ""}`}
                  >
                    {plan.recommended && (
                      <Badge variant="primary" className="mb-4">
                        おすすめ
                      </Badge>
                    )}
                    <h3 className="text-lg font-semibold text-[var(--gray-900)]">
                      {plan.name}
                    </h3>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-[var(--gray-900)]">
                        {plan.price}
                      </span>
                      {plan.priceNote && (
                        <span className="ml-2 text-sm text-[var(--gray-500)]">
                          {plan.priceNote}
                        </span>
                      )}
                    </div>
                    <ul className="mt-4 space-y-2">
                      {plan.features.map((feature, fidx) => (
                        <li
                          key={fidx}
                          className="flex items-start gap-2 text-sm text-[var(--gray-600)]"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="mt-6">
                      {plan.type === "personal" ? (
                        <Button href="/pricing" className="w-full">
                          購入する
                        </Button>
                      ) : (
                        <Button href="/contact" variant="outline" className="w-full">
                          お見積り・相談
                        </Button>
                      )}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      )}

      {/* FAQ */}
      <Section variant="gray">
        <Container>
          <div className="mx-auto max-w-4xl">
            <SectionTitle className="text-2xl">よくある質問</SectionTitle>
            <div className="mt-8 divide-y divide-[var(--border)]">
              {product.faq.map((item, idx) => (
                <details key={idx} className="group py-4">
                  <summary className="flex cursor-pointer items-center justify-between text-left font-medium text-[var(--gray-900)]">
                    {item.question}
                    <ChevronDown className="h-5 w-5 shrink-0 text-[var(--gray-500)] transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="mt-3 text-[var(--gray-600)]">{item.answer}</p>
                </details>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button href={`/docs/${product.slug}`} variant="outline">
                ドキュメントを見る
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section variant="dark">
        <Container>
          <div className="mx-auto max-w-3xl text-center text-white">
            <h2 className="text-2xl font-bold md:text-3xl">
              {product.name}を始めましょう
            </h2>
            <p className="mt-4 opacity-90">
              ご不明点があればお気軽にお問い合わせください。
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                href="/pricing"
                className="bg-white text-[var(--accent)] hover:bg-white/90"
              >
                価格を見る
              </Button>
              <Button
                href="/contact"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                無料で相談する
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
