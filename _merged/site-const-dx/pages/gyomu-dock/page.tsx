"use client";

import Link from "next/link";
import { useState } from "react";

export default function GyomuDockPage() {
  const [checkedSymptoms, setCheckedSymptoms] = useState<number[]>([]);

  const symptoms = [
    "月次が締まるのが毎月20日以降になる",
    "原価を見ているのに、手遅れで気づく",
    "現場代理人が事務作業で疲弊している",
    "同じ数字を複数の資料に転記している",
    "会議・報告資料づくりで1日が終わる",
    "DXツールは入れたが、誰も見ていない",
    "例外処理が多く、担当者しか回せない",
  ];

  const toggleSymptom = (index: number) => {
    setCheckedSymptoms((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const examinations = [
    {
      name: "問診",
      type: "ヒアリング",
      description: "困りごと、業務の現実、制約条件を聞き取り",
    },
    {
      name: "レントゲン",
      type: "可視化",
      description: "業務の流れ・入力→処理→出力を図解",
    },
    {
      name: "血液検査",
      type: "数値",
      description: "KPI/進捗/原価/締め日数など「標準値」との差を測定",
    },
    {
      name: "CT",
      type: "データ/IT",
      description: "Excel/基幹/ツール間のデータの詰まりを発見",
    },
  ];

  const diagnoses = [
    {
      grade: "A",
      status: "健康",
      action: "維持と予防",
      color: "bg-emerald-50 border-emerald-200 text-emerald-800",
    },
    {
      grade: "B",
      status: "経過観察",
      action: "軽い改善",
      color: "bg-blue-50 border-blue-200 text-blue-800",
    },
    {
      grade: "C",
      status: "要改善",
      action: "ボトルネック解消",
      color: "bg-amber-50 border-amber-200 text-amber-800",
    },
    {
      grade: "D",
      status: "要治療",
      action: "応急処置＋再設計",
      color: "bg-red-50 border-red-200 text-red-800",
    },
  ];

  const firstAidItems = [
    "転記作業の削減",
    "締め日の短縮",
    "報告の自動化",
    "判断材料の整備",
  ];

  const treatmentItems = [
    "業務フローの再設計",
    "データソース統合",
    "運用ルール整備",
    "定着支援",
  ];

  const whyUs = [
    "いきなりツールを売らない",
    "現場が「楽になる」を最優先",
    "人を増やさない前提で設計する",
    "建設業の月次・原価・現場運用を前提に診る",
  ];

  return (
    <main>
      {/* Section 1: Hero (symptom-first) */}
      <section className="bg-white py-20 md:py-32 border-b border-[var(--border)]">
        <div className="container-custom">
          <div className="max-w-3xl">
            <p className="text-sm tracking-widest text-[var(--gray-500)] mb-6">
              BUSINESS HEALTH CHECK
            </p>
            <h1 className="font-mincho text-3xl md:text-5xl font-medium text-[var(--gray-900)] mb-8 leading-tight tracking-wide">
              忙しい。
              <br />
              でも、成果が出ない。
            </h1>
            <p className="text-[var(--gray-600)] leading-relaxed mb-4 max-w-xl">
              人を増やしても、現場が楽にならない。
              <br />
              それは「業務の不調」かもしれません。
            </p>
            <p className="text-[var(--gray-700)] leading-relaxed mb-10 max-w-xl font-medium">
              業務ドックで、まず「今の状態」を見える化します。
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                初診相談（30分）
              </Link>
              <a href="#symptoms" className="btn-outline">
                よくある症状を見る
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Symptom checklist */}
      <section id="symptoms" className="py-16 md:py-24 scroll-mt-24">
        <div className="container-custom">
          <p className="text-sm tracking-widest text-[var(--gray-500)] text-center mb-4">
            SYMPTOMS CHECK
          </p>
          <h2 className="section-title">こんな症状、ありませんか</h2>
          <p className="section-subtitle">
            建設業の現場でよく見られる「業務の不調」です
          </p>

          <div className="max-w-2xl mx-auto">
            <div className="space-y-3">
              {symptoms.map((symptom, index) => (
                <button
                  key={index}
                  onClick={() => toggleSymptom(index)}
                  className={`w-full text-left p-4 border transition-all ${
                    checkedSymptoms.includes(index)
                      ? "border-[var(--accent)] bg-[#fffbf0]"
                      : "border-[var(--border)] bg-white hover:border-[var(--gray-400)]"
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-5 h-5 border flex items-center justify-center flex-shrink-0 ${
                        checkedSymptoms.includes(index)
                          ? "border-[var(--accent)] bg-[var(--accent)]"
                          : "border-[var(--gray-400)]"
                      }`}
                    >
                      {checkedSymptoms.includes(index) && (
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      )}
                    </div>
                    <span
                      className={`text-sm ${
                        checkedSymptoms.includes(index)
                          ? "text-[var(--gray-900)]"
                          : "text-[var(--gray-700)]"
                      }`}
                    >
                      {symptom}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {checkedSymptoms.length >= 3 && (
              <div className="mt-8 highlight-box">
                <p className="text-sm text-[var(--gray-700)]">
                  <span className="text-[var(--accent)] font-medium">
                    {checkedSymptoms.length}つ当てはまりました
                  </span>
                  <span className="mx-2">—</span>
                  まず状態確認がおすすめです。30分の初診相談で、優先順位を整理しましょう。
                </p>
                <Link
                  href="/contact"
                  className="inline-block mt-4 text-sm text-[var(--gray-900)] border-b border-[var(--gray-900)] pb-1 hover:text-[var(--gray-600)] hover:border-[var(--gray-600)] transition-colors"
                >
                  初診相談を予約する
                </Link>
              </div>
            )}

            {checkedSymptoms.length > 0 && checkedSymptoms.length < 3 && (
              <div className="mt-8 not-now-box">
                <p className="text-sm text-[var(--gray-600)]">
                  {checkedSymptoms.length}つ当てはまっています。
                  3つ以上当てはまる場合、まず状態確認がおすすめです。
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Section 3: What is "業務ドック" */}
      <section className="py-16 md:py-24 bg-[var(--gray-100)]">
        <div className="container-custom">
          <p className="text-sm tracking-widest text-[var(--gray-500)] text-center mb-4">
            WHAT IS GYOMU-DOCK
          </p>
          <h2 className="section-title">業務ドックとは</h2>
          <p className="section-subtitle">
            人間ドックのように、業務の「今の状態」を検査します
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {examinations.map((exam, index) => (
              <div key={index} className="bg-white border border-[var(--border)] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="font-mincho text-2xl text-[var(--gray-300)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <p className="font-medium text-[var(--gray-900)]">
                      {exam.name}
                    </p>
                    <p className="text-xs text-[var(--accent)]">{exam.type}</p>
                  </div>
                </div>
                <p className="text-sm text-[var(--gray-600)] leading-relaxed">
                  {exam.description}
                </p>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto mt-12">
            <div className="bg-white border border-[var(--border)] p-6 text-center">
              <p className="text-sm text-[var(--gray-600)]">
                検査時間の目安：
                <span className="text-[var(--gray-900)] font-medium ml-2">
                  初診相談 30分 + 業務ヒアリング 2〜3時間
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Results sample (A–D judgement) */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <p className="text-sm tracking-widest text-[var(--gray-500)] text-center mb-4">
            DIAGNOSIS RESULTS
          </p>
          <h2 className="section-title">診断結果イメージ</h2>
          <p className="section-subtitle">
            検査結果を4段階で評価し、優先すべき対応を明確にします
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {diagnoses.map((diag, index) => (
              <div
                key={index}
                className={`border p-5 text-center ${diag.color}`}
              >
                <p className="font-mincho text-3xl mb-2">{diag.grade}</p>
                <p className="font-medium text-sm mb-1">{diag.status}</p>
                <p className="text-xs opacity-75">{diag.action}</p>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto mt-12 space-y-4">
            <p className="text-sm tracking-widest text-[var(--gray-500)] mb-4">
              発見される問題の例
            </p>
            <div className="border-l-2 border-[var(--gray-300)] pl-6 py-2">
              <p className="text-[var(--gray-700)]">
                「月次締めが遅い原因が『二重入力』と『承認待ち』に集中」
              </p>
            </div>
            <div className="border-l-2 border-[var(--gray-300)] pl-6 py-2">
              <p className="text-[var(--gray-700)]">
                「原価が見えない原因が『データの分断』と『例外運用』」
              </p>
            </div>
            <div className="border-l-2 border-[var(--gray-300)] pl-6 py-2">
              <p className="text-[var(--gray-700)]">
                「報告資料に時間がかかる原因が『集計の手作業』と『フォーマット不統一』」
              </p>
            </div>
          </div>

          <div className="max-w-2xl mx-auto mt-10">
            <div className="highlight-box">
              <p className="text-sm text-[var(--gray-700)]">
                <span className="text-[var(--accent)] font-medium">
                  いきなり大改革はしません
                </span>
                <span className="mx-2">—</span>
                まず「今週楽になる」手当てから始めます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: How we treat (応急処置→根治) */}
      <section className="py-16 md:py-24 bg-[var(--gray-900)] text-white">
        <div className="container-custom">
          <p className="text-sm tracking-widest text-[var(--gray-400)] text-center mb-4">
            TREATMENT APPROACH
          </p>
          <h2 className="font-mincho text-2xl md:text-3xl text-center mb-4">
            応急処置から、根治へ
          </h2>
          <p className="text-center text-[var(--gray-400)] max-w-xl mx-auto mb-12">
            すぐに効果が出る対策から始め、段階的に根本解決へ進みます
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="border border-[var(--gray-700)] p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-[var(--accent)] text-white text-xs px-3 py-1">
                  FIRST AID
                </span>
                <span className="text-[var(--gray-400)] text-sm">
                  1〜2週間
                </span>
              </div>
              <h3 className="font-mincho text-xl mb-6">応急処置</h3>
              <ul className="space-y-3">
                {firstAidItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-[var(--gray-300)]"
                  >
                    <span className="text-[var(--accent)]">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="border border-[var(--gray-700)] p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="bg-white text-[var(--gray-900)] text-xs px-3 py-1">
                  TREATMENT
                </span>
                <span className="text-[var(--gray-400)] text-sm">
                  1〜3ヶ月
                </span>
              </div>
              <h3 className="font-mincho text-xl mb-6">根治</h3>
              <ul className="space-y-3">
                {treatmentItems.map((item, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-3 text-[var(--gray-300)]"
                  >
                    <span className="text-white">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Why us (doctor-like stance) */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <p className="text-sm tracking-widest text-[var(--gray-500)] text-center mb-4">
            OUR STANCE
          </p>
          <h2 className="section-title">私たちのスタンス</h2>
          <p className="section-subtitle">
            建設業の「かかりつけ医」として
          </p>

          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {whyUs.map((item, index) => (
              <div
                key={index}
                className="border-l-2 border-[var(--accent)] pl-6 py-4"
              >
                <p className="text-[var(--gray-800)]">{item}</p>
              </div>
            ))}
          </div>

          <div className="max-w-2xl mx-auto mt-12 text-center">
            <p className="text-[var(--gray-600)] leading-relaxed">
              システムを売ることが目的ではありません。
              <br />
              現場が「少し楽になった」と感じる状態をつくることが、私たちの仕事です。
            </p>
          </div>
        </div>
      </section>

      {/* Section 7: CTA + Contact */}
      <section className="py-16 md:py-24 bg-[var(--gray-100)]">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-mincho text-2xl md:text-3xl text-[var(--gray-900)] mb-6">
              まずは、30分の初診相談から
            </h2>
            <p className="text-[var(--gray-600)] mb-10">
              今の状況をお聞きし、業務ドックが必要かどうかを一緒に判断します。
              <br />
              相談だけでも構いません。お気軽にどうぞ。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                初診相談（30分）を予約する
              </Link>
              <Link href="/services" className="btn-outline">
                業務ドックの進め方を見る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
