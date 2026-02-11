"use client";

import Link from "next/link";
import { useState } from "react";

type DiagnosisType = "A" | "B" | "C" | "D" | null;

interface Question {
  id: number;
  text: string;
  options: {
    text: string;
    scores: { A: number; B: number; C: number; D: number };
  }[];
}

const questions: Question[] = [
  {
    id: 1,
    text: "今、一番気になっている経営課題は何ですか？",
    options: [
      { text: "資金繰り・キャッシュフローが不安", scores: { A: 3, B: 0, C: 0, D: 0 } },
      { text: "月次決算の数字がブレる・意味がわからない", scores: { A: 0, B: 3, C: 0, D: 0 } },
      { text: "案件ごとの採算が見えない", scores: { A: 0, B: 0, C: 3, D: 0 } },
      { text: "データはあるのに活用できていない", scores: { A: 0, B: 0, C: 0, D: 3 } },
    ],
  },
  {
    id: 2,
    text: "月次決算について、どれが一番近いですか？",
    options: [
      { text: "そもそも月次決算を出す余裕がない", scores: { A: 2, B: 1, C: 1, D: 0 } },
      { text: "月によって利益が大きくブレる", scores: { A: 0, B: 3, C: 1, D: 0 } },
      { text: "数字は出るが、次のアクションにつながらない", scores: { A: 0, B: 1, C: 2, D: 2 } },
      { text: "かなり整っているが、もっと活用したい", scores: { A: 0, B: 0, C: 1, D: 3 } },
    ],
  },
  {
    id: 3,
    text: "案件別の管理について、現状は？",
    options: [
      { text: "案件別の管理はほとんどできていない", scores: { A: 1, B: 1, C: 3, D: 0 } },
      { text: "Excelで管理しているが手間がかかる", scores: { A: 0, B: 1, C: 2, D: 1 } },
      { text: "システムで管理しているが使いこなせていない", scores: { A: 0, B: 0, C: 1, D: 3 } },
      { text: "案件別の数字はかなり見えている", scores: { A: 1, B: 2, C: 0, D: 1 } },
    ],
  },
  {
    id: 4,
    text: "経営判断をする際、どこに困りますか？",
    options: [
      { text: "そもそも判断する余裕・時間がない", scores: { A: 3, B: 1, C: 0, D: 0 } },
      { text: "数字の信頼性が低くて判断できない", scores: { A: 0, B: 3, C: 1, D: 0 } },
      { text: "何を基準に判断すればいいかわからない", scores: { A: 0, B: 1, C: 3, D: 1 } },
      { text: "データを見ても「だから何？」となる", scores: { A: 0, B: 0, C: 1, D: 3 } },
    ],
  },
  {
    id: 5,
    text: "DXやITツールについて、どれが近いですか？",
    options: [
      { text: "それどころではない、まず現金が心配", scores: { A: 3, B: 0, C: 0, D: 0 } },
      { text: "ツールより先に業務の整理が必要だと思う", scores: { A: 0, B: 2, C: 2, D: 0 } },
      { text: "ツールは入れたが、うまく使えていない", scores: { A: 0, B: 0, C: 1, D: 3 } },
      { text: "もっと高度なツールを検討している", scores: { A: 0, B: 1, C: 1, D: 2 } },
    ],
  },
  {
    id: 6,
    text: "現場と経理の関係について、どれが近いですか？",
    options: [
      { text: "現場が忙しすぎて経理に情報が来ない", scores: { A: 2, B: 2, C: 1, D: 0 } },
      { text: "情報は来るが、タイミングがバラバラ", scores: { A: 0, B: 3, C: 1, D: 0 } },
      { text: "情報はあるが、意味のある形になっていない", scores: { A: 0, B: 1, C: 2, D: 2 } },
      { text: "情報は整っているが、活用しきれていない", scores: { A: 0, B: 0, C: 1, D: 3 } },
    ],
  },
  {
    id: 7,
    text: "3ヶ月後の資金繰りは見えていますか？",
    options: [
      { text: "正直、来月も不安", scores: { A: 3, B: 0, C: 0, D: 0 } },
      { text: "なんとなくは見えるが、精度は低い", scores: { A: 2, B: 2, C: 1, D: 0 } },
      { text: "案件次第で大きく変わるので読みにくい", scores: { A: 1, B: 1, C: 3, D: 0 } },
      { text: "かなり精度高く予測できている", scores: { A: 0, B: 1, C: 1, D: 2 } },
    ],
  },
];

const diagnosisResults: Record<
  "A" | "B" | "C" | "D",
  {
    type: string;
    title: string;
    description: string;
    top3: string[];
    notNow: string[];
    nextStep: string;
  }
> = {
  A: {
    type: "A",
    title: "キャッシュ最優先型",
    description:
      "今は資金繰りの安定が最優先です。DXやツールの話は後回しでOK。まず、キャッシュの見通しを立てることに集中しましょう。",
    top3: [
      "入金・出金のタイミングを週単位で可視化する",
      "売掛金の回収サイトを短縮できないか交渉する",
      "固定費の見直しと、変動費化できる項目を洗い出す",
    ],
    notNow: [
      "BIツールの導入",
      "基幹システムのリプレース",
      "データ分析基盤の構築",
    ],
    nextStep: "まずは30分の無料相談で、資金繰り改善の優先順位を整理しましょう。",
  },
  B: {
    type: "B",
    title: "月次ブレ沼型",
    description:
      "月次決算の数字がブレる、意味がわからない状態です。原因は「売上認識」と「原価認識」の基準が混在していることが多いです。",
    top3: [
      "月次は「判断用」と宣言し、精度を追いすぎない",
      "売上認識と原価認識の「基準の混在」を棚卸する",
      "赤字月の原因を「案件×タイミング」で分類する",
    ],
    notNow: [
      "BI刷新・Databricks導入（判断が決まってから）",
      "会計システムの入れ替え",
      "予実管理システムの導入",
    ],
    nextStep: "月次のブレを整理する2週間クイック診断がおすすめです。",
  },
  C: {
    type: "C",
    title: "案件別判断未整備型",
    description:
      "案件ごとの採算が見えず、どの案件に手を打つべきかわからない状態です。「判断の軸」を設計することで改善できます。",
    top3: [
      "案件別の粗利を「完工時点」ではなく「進行中」で見る",
      "赤字予兆が出た時の「判断ルール」を決める",
      "案件のタイプ別に、見るべき指標を絞り込む",
    ],
    notNow: [
      "原価管理システムの導入（判断軸が先）",
      "全案件の完全な可視化（まず重要な案件から）",
      "AIによる予測（データより判断ルールが先）",
    ],
    nextStep: "判断の設計パック（8週間）で、崩れない仕組みを作りましょう。",
  },
  D: {
    type: "D",
    title: "データはあるのに使えない型",
    description:
      "システムやツールは入っている。データも蓄積されている。でも、意思決定に活かせていない。よくある状態です。",
    top3: [
      "「誰が、いつ、何を決めるか」を明文化する",
      "既存データから「判断に必要な情報だけ」を抽出する",
      "週次・月次のレビュー会議の形式を見直す",
    ],
    notNow: [
      "さらなるツール導入（まず今あるものを活用）",
      "データ統合基盤の構築（目的が先）",
      "AIによる高度な分析（判断フローが先）",
    ],
    nextStep: "クイック診断で「使える形」に整理しましょう。",
  },
};

export default function DiagnosisPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [scores, setScores] = useState({ A: 0, B: 0, C: 0, D: 0 });
  const [result, setResult] = useState<DiagnosisType>(null);
  const [isStarted, setIsStarted] = useState(false);

  const handleAnswer = (optionScores: { A: number; B: number; C: number; D: number }) => {
    const newScores = {
      A: scores.A + optionScores.A,
      B: scores.B + optionScores.B,
      C: scores.C + optionScores.C,
      D: scores.D + optionScores.D,
    };
    setScores(newScores);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      const maxScore = Math.max(newScores.A, newScores.B, newScores.C, newScores.D);
      let resultType: DiagnosisType = "A";
      if (newScores.B === maxScore) resultType = "B";
      else if (newScores.C === maxScore) resultType = "C";
      else if (newScores.D === maxScore) resultType = "D";
      else if (newScores.A === maxScore) resultType = "A";
      setResult(resultType);
    }
  };

  const resetDiagnosis = () => {
    setCurrentQuestion(0);
    setScores({ A: 0, B: 0, C: 0, D: 0 });
    setResult(null);
    setIsStarted(false);
  };

  if (!isStarted) {
    return (
      <>
        <section className="py-20 md:py-28 border-b border-[var(--border)]">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xs tracking-widest text-[var(--gray-500)] mb-4">FREE DIAGNOSIS</p>
              <h1 className="font-mincho text-3xl md:text-4xl text-[var(--gray-900)] mb-6 tracking-wide">
                無料タイプ診断
              </h1>
              <p className="text-[var(--gray-600)] leading-relaxed">
                7つの質問に答えるだけで、あなたの会社の
                <br />
                「今どこで詰まっているか」がわかります。
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-custom">
            <div className="max-w-lg mx-auto">
              <div className="border border-[var(--border)] p-10 text-center">
                <h2 className="font-mincho text-xl text-[var(--gray-900)] mb-8">
                  診断で分かること
                </h2>
                <div className="grid grid-cols-2 gap-4 mb-10">
                  <div className="border border-[var(--border)] p-4">
                    <div className="font-mincho text-2xl text-[var(--gray-900)]">A</div>
                    <div className="text-xs text-[var(--gray-500)] mt-1">キャッシュ最優先型</div>
                  </div>
                  <div className="border border-[var(--border)] p-4">
                    <div className="font-mincho text-2xl text-[var(--gray-900)]">B</div>
                    <div className="text-xs text-[var(--gray-500)] mt-1">月次ブレ沼型</div>
                  </div>
                  <div className="border border-[var(--border)] p-4">
                    <div className="font-mincho text-2xl text-[var(--gray-900)]">C</div>
                    <div className="text-xs text-[var(--gray-500)] mt-1">案件別判断未整備型</div>
                  </div>
                  <div className="border border-[var(--border)] p-4">
                    <div className="font-mincho text-2xl text-[var(--gray-900)]">D</div>
                    <div className="text-xs text-[var(--gray-500)] mt-1">データはあるのに使えない型</div>
                  </div>
                </div>
                <p className="text-sm text-[var(--gray-600)] mb-8">
                  それぞれのタイプに合わせた
                  <br />
                  「今やるべきTOP3」と「今はやらなくていいこと」をお伝えします。
                </p>
                <button
                  onClick={() => setIsStarted(true)}
                  className="btn-primary"
                >
                  診断を始める
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  if (result) {
    const resultData = diagnosisResults[result];
    return (
      <>
        <section className="py-20 md:py-28 border-b border-[var(--border)]">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-xs tracking-widest text-[var(--gray-500)] mb-4">RESULT</p>
              <h1 className="font-mincho text-2xl md:text-3xl text-[var(--gray-900)] mb-6 tracking-wide">
                あなたのタイプは
              </h1>
              <div className="inline-block border-2 border-[var(--gray-900)] px-8 py-4 mb-8">
                <span className="font-mincho text-4xl text-[var(--accent)]">{resultData.type}</span>
                <span className="font-mincho text-xl ml-3">{resultData.title}</span>
              </div>
              <p className="text-[var(--gray-600)] leading-relaxed">
                {resultData.description}
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-28">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto space-y-12">
              {/* TOP 3 */}
              <div className="border border-[var(--border)] p-8 md:p-10">
                <h2 className="font-mincho text-lg text-[var(--gray-900)] mb-8">
                  今やるべきTOP3
                </h2>
                <div className="space-y-6">
                  {resultData.top3.map((item, index) => (
                    <div key={index} className="flex gap-6 items-start">
                      <div className="step-number">{index + 1}</div>
                      <p className="text-[var(--gray-700)] pt-2 text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Not Now */}
              <div className="not-now-box">
                <h2 className="font-mincho text-lg text-[var(--gray-900)] mb-6">
                  今はやらなくていいこと
                </h2>
                <ul className="space-y-3">
                  {resultData.notNow.map((item, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm text-[var(--gray-600)]">
                      <span className="text-[var(--gray-400)]">—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Next Step */}
              <div className="highlight-box">
                <h3 className="font-medium text-[var(--gray-900)] mb-2 text-sm">次のステップ</h3>
                <p className="text-sm text-[var(--gray-700)]">{resultData.nextStep}</p>
              </div>

              {/* CTA */}
              <div className="text-center pt-8 border-t border-[var(--border)]">
                <p className="text-sm text-[var(--gray-600)] mb-8">
                  より詳しく状況を整理したい方は、無料相談をご活用ください。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn-primary">
                    30分相談を予約する
                  </Link>
                  <button onClick={resetDiagnosis} className="btn-outline">
                    もう一度診断する
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  // Question View
  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <>
      <section className="py-8 border-b border-[var(--border)]">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-3">
              <span className="text-xs tracking-widest text-[var(--gray-500)]">
                QUESTION {currentQuestion + 1} / {questions.length}
              </span>
              <span className="text-xs text-[var(--gray-500)]">{Math.round(progress)}%</span>
            </div>
            <div className="h-px bg-[var(--border)] overflow-hidden">
              <div
                className="h-full bg-[var(--gray-900)] transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="font-mincho text-xl md:text-2xl text-[var(--gray-900)] mb-12 text-center leading-relaxed">
              {question.text}
            </h2>
            <div className="space-y-4">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option.scores)}
                  className="w-full text-left p-6 border border-[var(--border)] hover:border-[var(--gray-900)] transition-all"
                >
                  <span className="text-[var(--gray-800)]">{option.text}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
