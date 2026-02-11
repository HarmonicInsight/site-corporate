import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/section";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { products } from "@/data/products";
import { generalFAQ } from "@/data/faq";
import {
  Presentation,
  Terminal,
  MessageSquare,
  ArrowRight,
  Book,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ドキュメント",
  description:
    "Insightシリーズの各製品のインストール方法、使い方、よくある質問をまとめたドキュメントです。",
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

export default function DocsPage() {
  return (
    <>
      {/* Hero */}
      <Section className="py-16 md:py-20">
        <Container>
          <SectionHeader>
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--accent-bg)]">
              <Book className="h-7 w-7 text-[var(--accent)]" />
            </div>
            <SectionTitle>ドキュメント</SectionTitle>
            <SectionDescription>
              各製品のインストール方法、使い方、よくある質問をまとめています。
            </SectionDescription>
          </SectionHeader>
        </Container>
      </Section>

      {/* Product Docs */}
      <Section variant="gray" className="py-12">
        <Container>
          <h2 className="mb-8 text-xl font-semibold text-[var(--gray-900)]">
            製品別ドキュメント
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {products.map((product) => {
              const Icon = iconMap[product.icon] || Presentation;
              const colors = colorMap[product.color] || colorMap.blue;

              return (
                <Link key={product.id} href={`/docs/${product.slug}`}>
                  <Card className="h-full transition-shadow hover:shadow-md">
                    <CardHeader>
                      <div
                        className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${colors.bg}`}
                      >
                        <Icon className={`h-6 w-6 ${colors.text}`} />
                      </div>
                      <CardTitle className="flex items-center gap-2">
                        {product.name}
                        <ArrowRight className="h-4 w-4 text-[var(--gray-500)]" />
                      </CardTitle>
                      <CardDescription>{product.tagline}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Quick Links */}
      <Section>
        <Container>
          <h2 className="mb-8 text-xl font-semibold text-[var(--gray-900)]">
            クイックリンク
          </h2>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {products.map((product) => (
              <div key={product.id} className="space-y-2">
                <h3 className="font-medium text-[var(--gray-900)]">{product.name}</h3>
                <ul className="space-y-1 text-sm">
                  <li>
                    <Link
                      href={`/docs/${product.slug}#install`}
                      className="text-[var(--accent)] hover:underline"
                    >
                      インストール方法
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/docs/${product.slug}#quickstart`}
                      className="text-[var(--accent)] hover:underline"
                    >
                      はじめての実行
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={`/docs/${product.slug}#faq`}
                      className="text-[var(--accent)] hover:underline"
                    >
                      よくある質問
                    </Link>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* General FAQ */}
      <Section variant="gray">
        <Container>
          <div className="flex items-center gap-3">
            <HelpCircle className="h-6 w-6 text-[var(--accent)]" />
            <h2 className="text-xl font-semibold text-[var(--gray-900)]">
              共通のよくある質問
            </h2>
          </div>
          <div className="mt-8 divide-y divide-[var(--border)]">
            {generalFAQ.map((item, idx) => (
              <details key={idx} className="group py-4">
                <summary className="flex cursor-pointer items-center justify-between text-left font-medium text-[var(--gray-900)]">
                  {item.question}
                  <ChevronDown className="h-5 w-5 shrink-0 text-[var(--gray-500)] transition-transform group-open:rotate-180" />
                </summary>
                <p className="mt-3 text-[var(--gray-600)]">{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {/* Support */}
      <Section>
        <Container>
          <div className="rounded-xl bg-[var(--gray-100)] p-8 text-center">
            <h2 className="text-xl font-semibold text-[var(--gray-900)]">
              お困りですか？
            </h2>
            <p className="mt-2 text-[var(--gray-600)]">
              ドキュメントで解決しない場合は、お気軽にお問い合わせください。
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex items-center text-[var(--accent)] hover:underline"
            >
              お問い合わせ
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
