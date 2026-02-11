"use client";

import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Section, SectionHeader, SectionTitle } from "@/components/ui/section";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { siteConfig } from "@/data/site";
import { Mail, Building2, MessageSquare, CheckCircle2 } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setLoading(false);
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <Section className="py-16 md:py-20">
        <Container>
          <SectionHeader>
            <SectionTitle>お問い合わせ</SectionTitle>
            <p className="mt-4 text-lg text-[var(--gray-600)]">
              製品に関するご質問、導入のご相談、お見積りのご依頼など、
              <br className="hidden md:inline" />
              お気軽にお問い合わせください。
            </p>
          </SectionHeader>
        </Container>
      </Section>

      {/* Contact Form */}
      <Section variant="gray" className="py-12">
        <Container>
          <div className="mx-auto max-w-2xl">
            {submitted ? (
              <Card className="p-8 text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-500/20">
                  <CheckCircle2 className="h-8 w-8 text-green-400" />
                </div>
                <h2 className="mt-6 text-2xl font-semibold text-[var(--gray-900)]">
                  お問い合わせを受け付けました
                </h2>
                <p className="mt-3 text-[var(--gray-600)]">
                  内容を確認の上、担当者よりご連絡いたします。
                  <br />
                  通常、2営業日以内にご返信いたします。
                </p>
                <div className="mt-8">
                  <Button href="/" variant="outline">
                    トップページへ戻る
                  </Button>
                </div>
              </Card>
            ) : (
              <Card className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <Input
                      id="company"
                      label="会社名"
                      placeholder="株式会社○○"
                    />
                    <Input
                      id="name"
                      label="お名前"
                      placeholder="山田 太郎"
                      required
                    />
                  </div>

                  <Input
                    id="email"
                    type="email"
                    label="メールアドレス"
                    placeholder="example@company.com"
                    required
                  />

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[var(--gray-600)]">
                      お問い合わせ種別
                    </label>
                    <select
                      id="type"
                      className="flex h-11 w-full rounded-lg border border-[var(--border)] bg-[var(--gray-100)] px-4 py-2 text-base text-[var(--gray-900)] focus:border-[var(--accent)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]/20"
                      required
                    >
                      <option value="">選択してください</option>
                      <option value="product">製品に関するご質問</option>
                      <option value="quote">法人導入・お見積り</option>
                      <option value="support">サポート・技術的なご質問</option>
                      <option value="other">その他</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[var(--gray-600)]">
                      関心のある製品（任意）
                    </label>
                    <div className="flex flex-wrap gap-4">
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="products"
                          value="insightslides"
                          className="h-4 w-4 rounded border-[var(--border)] bg-[var(--gray-100)]"
                        />
                        <span className="text-sm text-[var(--gray-600)]">
                          InsightSlides
                        </span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="products"
                          value="insightpy"
                          className="h-4 w-4 rounded border-[var(--border)] bg-[var(--gray-100)]"
                        />
                        <span className="text-sm text-[var(--gray-600)]">
                          InsightPy
                        </span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="products"
                          value="interview-insight"
                          className="h-4 w-4 rounded border-[var(--border)] bg-[var(--gray-100)]"
                        />
                        <span className="text-sm text-[var(--gray-600)]">
                          Interview Insight
                        </span>
                      </label>
                    </div>
                  </div>

                  <Textarea
                    id="message"
                    label="お問い合わせ内容"
                    placeholder="ご質問やご要望をお書きください"
                    rows={5}
                    required
                  />

                  <div className="rounded-lg bg-[var(--gray-100)] p-4 text-sm text-[var(--gray-600)]">
                    <p>
                      ご入力いただいた個人情報は、お問い合わせへの対応にのみ使用し、
                      <a
                        href="/legal/privacy"
                        className="text-[var(--accent)] hover:underline"
                      >
                        プライバシーポリシー
                      </a>
                      に基づき適切に管理いたします。
                    </p>
                  </div>

                  <div className="flex justify-center">
                    <Button type="submit" size="lg" disabled={loading}>
                      {loading ? "送信中..." : "送信する"}
                    </Button>
                  </div>
                </form>
              </Card>
            )}
          </div>
        </Container>
      </Section>

      {/* Contact Info */}
      <Section>
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-bg)]">
                  <Mail className="h-6 w-6 text-[var(--accent)]" />
                </div>
                <h3 className="mt-4 font-semibold text-[var(--gray-900)]">
                  メールでのお問い合わせ
                </h3>
                <p className="mt-2 text-sm text-[var(--gray-600)]">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-[var(--accent)] hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-bg)]">
                  <Building2 className="h-6 w-6 text-[var(--accent)]" />
                </div>
                <h3 className="mt-4 font-semibold text-[var(--gray-900)]">
                  法人のお客様
                </h3>
                <p className="mt-2 text-sm text-[var(--gray-600)]">
                  お見積り・導入支援のご相談を承ります
                </p>
              </Card>

              <Card className="p-6 text-center">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-bg)]">
                  <MessageSquare className="h-6 w-6 text-[var(--accent)]" />
                </div>
                <h3 className="mt-4 font-semibold text-[var(--gray-900)]">
                  対応時間
                </h3>
                <p className="mt-2 text-sm text-[var(--gray-600)]">
                  平日 10:00 - 18:00
                  <br />
                  （土日祝日を除く）
                </p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
