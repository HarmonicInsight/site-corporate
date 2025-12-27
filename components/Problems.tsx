"use client";

import { useEffect, useRef } from "react";

export default function Problems() {
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
      (el as HTMLElement).style.transitionDelay = `${index * 80}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const problems = [
    {
      text: "DXツールを導入したが、現場でまったく使われていない",
      detail: "ツール選定は正しかったはずなのに、定着しない",
    },
    {
      text: "業務整理が曖昧なまま、システム化を進めて失敗した",
      detail: "要件定義の段階で「何を実現したいか」が共有されていなかった",
    },
    {
      text: "コンサル・SI・現場の言葉が噛み合わず、議論が空転する",
      detail: "抽象的な構想と、具体的な業務の間に橋がかからない",
    },
    {
      text: "資料や構想は立派だが、実装フェーズで止まる",
      detail: "絵を描く人と、作る人と、使う人が分断されている",
    },
    {
      text: "ダッシュボードを作ったが、見る人がいない",
      detail: "データは出せても、判断や行動に繋がっていない",
    },
    {
      text: "属人化した業務を標準化したいが、どこから手をつけていいか分からない",
      detail: "現状把握すらできていないまま、改善の議論が始まっている",
    },
  ];

  return (
    <section
      id="problems"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6 bg-white dark:bg-gray-950"
    >
      <div className="max-w-4xl mx-auto">
        <div className="fade-in-section text-center mb-12 sm:mb-16">
          <p className="text-sm font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-3">
            Problems
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            こんな課題、ありませんか？
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base max-w-2xl mx-auto">
            DX・業務改善・IT導入で「うまくいかなかった経験」を持つ方へ
          </p>
        </div>

        <div className="space-y-4">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="fade-in-section bg-gray-50 dark:bg-gray-900 rounded-xl p-5 sm:p-6 border-l-4 border-primary-500"
            >
              <p className="text-gray-900 dark:text-white font-medium mb-1">
                {problem.text}
              </p>
              <p className="text-gray-500 dark:text-gray-400 text-sm">
                {problem.detail}
              </p>
            </div>
          ))}
        </div>

        <div className="fade-in-section text-center mt-12">
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            これらの問題の根本原因は、
            <span className="text-gray-900 dark:text-white font-medium">
              「業務」と「システム」の設計がズレていること
            </span>
            です。
          </p>
          <a
            href="#solutions"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors"
          >
            解決策を見る
            <svg
              className="w-4 h-4 ml-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
