"use client";

import { useEffect, useRef } from "react";

export default function Philosophy() {
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

  const beliefs = [
    {
      question: "なぜ「作って終わらせない」のか",
      answer:
        "私たちは、構想だけを納品して終わるコンサルティングを何度も見てきました。資料は立派でも、実装されず、運用されず、成果が出ない。それは支援とは呼べません。だから私たちは、設計から実装・運用定着まで一貫して関わることを選んでいます。",
    },
    {
      question: "なぜスケールや人海戦術を選ばないのか",
      answer:
        "大規模なチームを組めば、コミュニケーションロスが発生します。「誰が何を決めたか分からない」状態では、質もスピードも落ちる。少人数で、決定権を持つ人間が直接手を動かす。それが最も確実に成果を出す方法だと考えています。",
    },
    {
      question: "なぜ業務とシステムを一体で見るのか",
      answer:
        "システムだけを切り出して作っても、業務に合わなければ使われません。業務だけを整理しても、実装されなければ絵に描いた餅です。両方を理解し、両方を設計できる人間が、両方を見る。それが「作って終わり」を防ぐ唯一の方法です。",
    },
  ];

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6 bg-white dark:bg-gray-950"
    >
      <div className="max-w-3xl mx-auto">
        <div className="fade-in-section text-center mb-12 sm:mb-16">
          <p className="text-sm font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-3">
            Philosophy
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            私たちのスタンス
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base">
            なぜこのやり方を選んでいるのか
          </p>
        </div>

        <div className="space-y-8">
          {beliefs.map((belief) => (
            <div
              key={belief.question}
              className="fade-in-section"
            >
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3">
                {belief.question}
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed pl-4 border-l-2 border-gray-200 dark:border-gray-700">
                {belief.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
