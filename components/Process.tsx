"use client";

import { useEffect, useRef } from "react";

export default function Process() {
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

  const steps = [
    {
      number: "1",
      title: "現状確認",
      description: "現在の入力フロー・チェック方法・問題点をヒアリング。どこでミスが起きているかを特定します。",
      duration: "1〜2週間",
    },
    {
      number: "2",
      title: "ルール設計",
      description: "チェックすべき項目・判定基準・差し戻し条件を整理。既存の業務ルールを明文化します。",
      duration: "2〜3週間",
    },
    {
      number: "3",
      title: "自動判定・差し戻し構築",
      description: "入力時に自動チェックが走る仕組みを構築。おかしい数字は理由付きで差し戻されます。",
      duration: "2〜3週間",
    },
    {
      number: "4",
      title: "運用定着",
      description: "実運用に乗せ、現場からのフィードバックを反映。ルールの調整・例外対応を整備します。",
      duration: "1〜2週間",
    },
  ];

  return (
    <section
      id="process"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6 bg-white dark:bg-gray-950"
    >
      <div className="max-w-4xl mx-auto">
        <div className="fade-in-section text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            進め方
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            約6〜8週間で「チェック不要」の状態を作ります
          </p>
        </div>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700 hidden sm:block" />

          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="fade-in-section relative flex gap-6">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center z-10">
                  <span className="text-primary-600 dark:text-primary-400 font-bold text-sm">
                    {step.number}
                  </span>
                </div>
                <div className="flex-grow pb-2">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {step.title}
                    </h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {step.duration}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
