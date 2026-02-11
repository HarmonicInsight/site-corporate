import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { products, getProductBySlug, getAllProductSlugs } from "@/data/products";
import { getDocByProductId } from "@/data/docs";
import { productFAQ } from "@/data/faq";
import {
  Presentation,
  Terminal,
  MessageSquare,
  ArrowLeft,
  ArrowRight,
  ChevronDown,
  Book,
  Play,
  HelpCircle,
} from "lucide-react";
import Link from "next/link";

const iconMap: Record<string, React.ElementType> = {
  Presentation,
  Terminal,
  MessageSquare,
};

const sectionIcons: Record<string, React.ElementType> = {
  install: Book,
  quickstart: Play,
  faq: HelpCircle,
};

const colorMap: Record<string, { bg: string; text: string }> = {
  blue: { bg: "bg-blue-500/20", text: "text-blue-400" },
  green: { bg: "bg-green-500/20", text: "text-green-400" },
  purple: { bg: "bg-purple-500/20", text: "text-purple-400" },
};

interface PageProps {
  params: Promise<{ product: string }>;
}

export async function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ product: slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { product: slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return { title: "ドキュメントが見つかりません" };
  }

  return {
    title: `${product.name} ドキュメント`,
    description: `${product.name}のインストール方法、使い方、よくある質問をまとめたドキュメントです。`,
  };
}

function MarkdownContent({ content }: { content: string }) {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let inCodeBlock = false;
  let codeContent: string[] = [];

  lines.forEach((line, idx) => {
    if (line.startsWith("```")) {
      if (inCodeBlock) {
        elements.push(
          <pre
            key={`code-${idx}`}
            className="mb-4 overflow-x-auto rounded-lg bg-[white] p-4 text-sm text-[var(--gray-900)]"
          >
            <code>{codeContent.join("\n")}</code>
          </pre>
        );
        codeContent = [];
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      return;
    }

    if (inCodeBlock) {
      codeContent.push(line);
      return;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h3
          key={idx}
          className="mb-3 mt-6 text-lg font-semibold text-[var(--gray-900)]"
        >
          {line.slice(3)}
        </h3>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={idx} className="ml-4 list-disc text-[var(--gray-600)]">
          {line.slice(2)}
        </li>
      );
    } else if (/^\d+\.\s/.test(line)) {
      elements.push(
        <li key={idx} className="ml-4 list-decimal text-[var(--gray-600)]">
          {line.replace(/^\d+\.\s/, "")}
        </li>
      );
    } else if (line.includes("`") && !line.startsWith("`")) {
      const parts = line.split(/(`[^`]+`)/);
      elements.push(
        <p key={idx} className="mb-2 text-[var(--gray-600)]">
          {parts.map((part, i) =>
            part.startsWith("`") ? (
              <code
                key={i}
                className="rounded bg-[var(--gray-100)] px-1.5 py-0.5 font-mono text-sm text-[var(--gray-900)]"
              >
                {part.slice(1, -1)}
              </code>
            ) : (
              part
            )
          )}
        </p>
      );
    } else if (line.trim()) {
      elements.push(
        <p key={idx} className="mb-2 text-[var(--gray-600)]">
          {line}
        </p>
      );
    }
  });

  return <div className="prose-sm">{elements}</div>;
}

export default async function ProductDocPage({ params }: PageProps) {
  const { product: slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const doc = getDocByProductId(product.id);
  const faq = productFAQ[product.slug] || [];
  const Icon = iconMap[product.icon] || Presentation;
  const colors = colorMap[product.color] || colorMap.blue;

  const productIndex = products.findIndex((p) => p.id === product.id);
  const prevProduct = productIndex > 0 ? products[productIndex - 1] : null;
  const nextProduct =
    productIndex < products.length - 1 ? products[productIndex + 1] : null;

  return (
    <>
      {/* Header */}
      <Section className="py-12 md:py-16">
        <Container>
          <Link
            href="/docs"
            className="mb-6 inline-flex items-center text-sm text-[var(--gray-600)] hover:text-[var(--accent)]"
          >
            <ArrowLeft className="mr-1 h-4 w-4" />
            ドキュメント一覧
          </Link>
          <div className="flex items-center gap-4">
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-xl ${colors.bg}`}
            >
              <Icon className={`h-7 w-7 ${colors.text}`} />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-[var(--gray-900)] md:text-3xl">
                {product.name} ドキュメント
              </h1>
              <p className="mt-1 text-[var(--gray-600)]">{product.tagline}</p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Table of Contents */}
      <Section variant="gray" className="py-8">
        <Container>
          <h2 className="mb-4 text-sm font-semibold uppercase tracking-wide text-[var(--gray-500)]">
            目次
          </h2>
          <div className="flex flex-wrap gap-3">
            {doc?.sections.map((section) => {
              const SectionIcon = sectionIcons[section.id] || Book;
              return (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="inline-flex items-center gap-2 rounded-lg bg-[var(--gray-50)] px-4 py-2 text-sm font-medium text-[var(--gray-600)] shadow-sm transition-colors hover:bg-[var(--accent-bg)] hover:text-[var(--accent)]"
                >
                  <SectionIcon className="h-4 w-4" />
                  {section.title}
                </a>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Content */}
      <Section className="py-12">
        <Container>
          <div className="mx-auto max-w-3xl">
            {doc?.sections.map((section) => {
              const SectionIcon = sectionIcons[section.id] || Book;
              return (
                <div key={section.id} id={section.id} className="mb-12 scroll-mt-20">
                  <div className="mb-6 flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${colors.bg}`}
                    >
                      <SectionIcon className={`h-5 w-5 ${colors.text}`} />
                    </div>
                    <h2 className="text-xl font-bold text-[var(--gray-900)]">
                      {section.title}
                    </h2>
                  </div>
                  <Card className="p-6">
                    <MarkdownContent content={section.content} />
                  </Card>
                </div>
              );
            })}

            {/* Product-specific FAQ */}
            {faq.length > 0 && (
              <div id="faq" className="mb-12 scroll-mt-20">
                <div className="mb-6 flex items-center gap-3">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${colors.bg}`}
                  >
                    <HelpCircle className={`h-5 w-5 ${colors.text}`} />
                  </div>
                  <h2 className="text-xl font-bold text-[var(--gray-900)]">
                    製品別FAQ
                  </h2>
                </div>
                <Card className="divide-y divide-[var(--border)] p-6">
                  {faq.map((item, idx) => (
                    <details key={idx} className="group py-4 first:pt-0 last:pb-0">
                      <summary className="flex cursor-pointer items-center justify-between text-left font-medium text-[var(--gray-900)]">
                        {item.question}
                        <ChevronDown className="h-5 w-5 shrink-0 text-[var(--gray-500)] transition-transform group-open:rotate-180" />
                      </summary>
                      <p className="mt-3 text-[var(--gray-600)]">{item.answer}</p>
                    </details>
                  ))}
                </Card>
              </div>
            )}
          </div>
        </Container>
      </Section>

      {/* Navigation */}
      <Section variant="gray" className="py-8">
        <Container>
          <div className="flex items-center justify-between">
            <div>
              {prevProduct && (
                <Link
                  href={`/docs/${prevProduct.slug}`}
                  className="inline-flex items-center text-sm text-[var(--gray-600)] hover:text-[var(--accent)]"
                >
                  <ArrowLeft className="mr-1 h-4 w-4" />
                  {prevProduct.name}
                </Link>
              )}
            </div>
            <div>
              {nextProduct && (
                <Link
                  href={`/docs/${nextProduct.slug}`}
                  className="inline-flex items-center text-sm text-[var(--gray-600)] hover:text-[var(--accent)]"
                >
                  {nextProduct.name}
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section>
        <Container>
          <div className="rounded-xl bg-[var(--gray-100)] p-8 text-center">
            <h2 className="text-xl font-semibold text-[var(--gray-900)]">
              さらに詳しく知りたいですか？
            </h2>
            <p className="mt-2 text-[var(--gray-600)]">
              ご不明点があれば、お気軽にお問い合わせください。
            </p>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
              <Button href={`/products/${product.slug}`} variant="outline">
                製品詳細を見る
              </Button>
              <Button href="/contact">お問い合わせ</Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
