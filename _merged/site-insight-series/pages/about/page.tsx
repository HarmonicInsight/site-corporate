import { Metadata } from "next";
import { Container } from "@/components/ui/container";
import {
  Section,
  SectionHeader,
  SectionTitle,
  SectionDescription,
} from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";
import {
  Lightbulb,
  Target,
  FileText,
  RefreshCw,
} from "lucide-react";

export const metadata: Metadata = {
  title: "私たちについて",
  description:
    "Harmonic Insightの開発思想とInsightシリーズが目指す業務改善の形について紹介します。",
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section className="py-16 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-3xl font-bold text-[var(--gray-900)] md:text-4xl lg:text-5xl">
              業務を「仕組み」に変える
            </h1>
            <p className="mt-6 text-lg text-[var(--gray-600)]">
              Harmonic Insightは、業務の効率化と自動化を支援するソフトウェアを開発しています。
              <br className="hidden md:inline" />
              私たちが目指すのは、日々の業務を持続可能な「仕組み」に変えること。
            </p>
          </div>
        </Container>
      </Section>

      {/* Philosophy */}
      <Section variant="gray">
        <Container>
          <SectionHeader>
            <SectionTitle>開発思想</SectionTitle>
            <SectionDescription>
              Insightシリーズの根底にある3つの考え方
            </SectionDescription>
          </SectionHeader>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            <Card className="p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--accent-bg)]">
                <FileText className="h-7 w-7 text-[var(--accent)]" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[var(--gray-900)]">
                業務の構造化
              </h3>
              <p className="mt-3 text-[var(--gray-600)]">
                頭の中にある業務知識やノウハウを、形式知として外に出す。属人化を防ぎ、誰でも再現できる状態を目指します。
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--accent-bg)]">
                <Target className="h-7 w-7 text-[var(--accent)]" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[var(--gray-900)]">
                アウトプット起点
              </h3>
              <p className="mt-3 text-[var(--gray-600)]">
                最終的に必要なアウトプット（資料、データ、ドキュメント）から逆算して、プロセスを設計する。無駄な作業を減らします。
              </p>
            </Card>

            <Card className="p-8">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[var(--accent-bg)]">
                <RefreshCw className="h-7 w-7 text-[var(--accent)]" />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-[var(--gray-900)]">
                止まらない運用
              </h3>
              <p className="mt-3 text-[var(--gray-600)]">
                一度作った仕組みが、継続的に動き続けること。環境構築の手間を省き、「すぐ動く」状態を維持します。
              </p>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Our Approach */}
      <Section>
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-[var(--gray-900)] md:text-3xl">
              私たちが解決したい課題
            </h2>
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-400">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--gray-900)]">
                    同じ資料を毎回作り直している
                  </h3>
                  <p className="mt-1 text-[var(--gray-600)]">
                    週次・月次の報告資料を、毎回ゼロから作成。フォーマットが統一されず、作成に時間がかかる。
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-400">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--gray-900)]">
                    業務知識が特定の人に集中している
                  </h3>
                  <p className="mt-1 text-[var(--gray-600)]">
                    「あの人しか知らない」業務が多く、異動や退職で引き継ぎに苦労する。ドキュメント化も進まない。
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-500/20 text-red-400">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--gray-900)]">
                    自動化したいが環境構築が大変
                  </h3>
                  <p className="mt-1 text-[var(--gray-600)]">
                    Pythonで自動化したいが、環境構築でつまずく。せっかく作ったスクリプトも、動かなくなると放置されがち。
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-xl bg-[var(--accent-bg)] p-8">
              <div className="flex items-center gap-3">
                <Lightbulb className="h-6 w-6 text-[var(--accent)]" />
                <h3 className="text-lg font-semibold text-[var(--gray-900)]">
                  Insightシリーズの答え
                </h3>
              </div>
              <p className="mt-3 text-[var(--gray-600)]">
                これらの課題に対して、InsightSlidesは資料作成を、InsightPyは実行環境を、Interview
                Insightはナレッジの構造化を支援します。それぞれ独立したツールとして使えますが、組み合わせることでより効果的な業務改善が実現できます。
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Company */}
      <Section variant="gray">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="text-2xl font-bold text-[var(--gray-900)] md:text-3xl">
              Harmonic Insightについて
            </h2>
            <div className="mt-8 space-y-4 text-[var(--gray-600)]">
              <p>
                Harmonic
                Insightは、業務効率化ソフトウェアの開発・販売を行う事業者です。
              </p>
              <p>
                製造業・建設業をはじめとする様々な業種のお客様に、業務改善のためのツールを提供しています。
              </p>
              <p>
                「業務を仕組みに変える」をモットーに、現場で本当に使えるソフトウェアの開発に取り組んでいます。
              </p>
            </div>
            <div className="mt-8">
              <p className="text-sm text-[var(--gray-500)]">
                お問い合わせ：
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-[var(--accent)] hover:underline"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section variant="dark">
        <Container>
          <div className="mx-auto max-w-3xl text-center text-white">
            <h2 className="text-2xl font-bold md:text-3xl">
              業務改善を、一緒に始めましょう
            </h2>
            <p className="mt-4 opacity-90">
              お気軽にご相談ください。課題に合わせた最適な製品をご提案します。
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                href="/products"
                className="bg-white text-[var(--accent)] hover:bg-white/90"
              >
                製品を見る
              </Button>
              <Button
                href="/contact"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
              >
                お問い合わせ
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
