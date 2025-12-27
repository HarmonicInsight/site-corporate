"use client";

import { useEffect, useRef } from "react";

export default function Solutions() {
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

  const solutions = [
    {
      number: "01",
      title: "業務を「実装可能な構造」に分解する",
      description:
        "抽象的な構想や思想ではなく、誰が・何を・いつ・どう判断するかを具体化。システム化できる粒度まで業務を分解し、設計に落とし込みます。",
      scope: "対象：業務フロー整理、要件定義、データ設計",
    },
    {
      number: "02",
      title: "「使われ続ける」前提で設計・実装する",
      description:
        "ツール導入がゴールではありません。現場が使い続けられる運用ルール、更新フロー、教育までを含めて設計。導入後に放置されない仕組みを作ります。",
      scope: "対象：プロトタイプ開発、運用設計、定着支援",
    },
    {
      number: "03",
      title: "人・業務・IT・AIを一体で設計する",
      description:
        "システムだけ、業務だけ、AIだけを切り出して考えません。意思決定の流れ、データの流れ、人の動きを一体として設計し、全体が回る状態を作ります。",
      scope: "対象：DX構想策定、KPI設計、判断フロー構築",
    },
  ];

  return (
    <section
      id="solutions"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-5xl mx-auto">
        <div className="fade-in-section text-center mb-12 sm:mb-16">
          <p className="text-sm font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-3">
            What We Do
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            私たちが提供する解決策
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base max-w-2xl mx-auto">
            「作って終わり」にしないために、設計から運用定着まで一貫して支援します
          </p>
        </div>

        <div className="space-y-6">
          {solutions.map((solution) => (
            <div
              key={solution.number}
              className="fade-in-section bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-gray-800"
            >
              <div className="flex items-start gap-4 sm:gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                  <span className="text-primary-600 dark:text-primary-400 font-bold text-sm">
                    {solution.number}
                  </span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-3">
                    {solution.description}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    {solution.scope}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
