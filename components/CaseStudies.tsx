"use client";

import { useEffect, useRef } from "react";

export default function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-in-section");
    elements?.forEach((el, index) => {
      (el as HTMLElement).style.transitionDelay = `${index * 100}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const cases = [
    {
      company: "建設会社A社（準大手・関東）",
      problem: "月次実績の確認に管理部門3名が毎月延べ40時間を費やしていた",
      solution: "入力時の自動チェック＋差し戻しルールを導入",
      results: [
        { label: "確認工数", before: "40時間/月", after: "8時間/月", change: "80%削減" },
        { label: "手戻り件数", before: "月50件", after: "月8件", change: "84%減" },
      ],
      period: "8週間",
    },
    {
      company: "ゼネコン協力会社B社（中堅）",
      problem: "原価率の異常値が月末まで発見されず、報告書の修正が頻発",
      solution: "原価率・進捗率の自動整合チェックを登録前に実施",
      results: [
        { label: "月次締め", before: "翌月10日", after: "翌月5日", change: "5日短縮" },
        { label: "報告修正", before: "月12件", after: "月2件", change: "83%減" },
      ],
      period: "6週間",
    },
    {
      company: "設備工事会社C社（地方）",
      problem: "営業の入力品質にばらつきがあり、経理が「検査員」状態だった",
      solution: "入力ガイド＋リアルタイム警告＋差し戻し理由の明確化",
      results: [
        { label: "入力エラー", before: "月80件", after: "月15件", change: "81%減" },
        { label: "経理の残業", before: "月20時間", after: "月5時間", change: "75%減" },
      ],
      period: "7週間",
    },
  ];

  return (
    <section
      id="cases"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-5xl mx-auto">
        <div className="fade-in-section text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            導入事例
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            実際の改善効果（社名は仮名）
          </p>
        </div>

        <div className="space-y-6">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className="fade-in-section bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-sm"
            >
              <div className="flex flex-wrap items-center gap-2 mb-4">
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  {caseStudy.company}
                </span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  期間：{caseStudy.period}
                </span>
              </div>

              <div className="mb-4">
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">課題</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">{caseStudy.problem}</p>
              </div>

              <div className="mb-5">
                <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">対応</p>
                <p className="text-sm text-gray-700 dark:text-gray-300">{caseStudy.solution}</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                {caseStudy.results.map((result, idx) => (
                  <div key={idx} className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-2">{result.label}</p>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-gray-500 dark:text-gray-400 line-through">{result.before}</span>
                      <span className="text-gray-400">→</span>
                      <span className="text-gray-900 dark:text-white font-medium">{result.after}</span>
                      <span className="text-primary-600 dark:text-primary-400 font-medium text-xs">({result.change})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
