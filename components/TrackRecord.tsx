"use client";

import { useEffect, useRef } from "react";

export default function TrackRecord() {
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

  const stats = [
    { number: "50+", label: "業務設計・DX支援の実績" },
    { number: "15+", label: "ツール・アプリ開発件数" },
    { number: "90%", label: "運用定着率" },
  ];

  const industries = [
    "建設・不動産",
    "製造業",
    "IT・ソフトウェア",
    "経営管理・管理会計",
    "営業・マーケティング",
    "バックオフィス業務",
  ];

  const features = [
    {
      title: "構想で終わらせない",
      description:
        "戦略や構想だけを納品して終わりにしません。設計から実装・運用定着まで一貫して伴走します。",
    },
    {
      title: "少人数で高品質",
      description:
        "大人数のチームではなく、経験豊富な少数精鋭で対応。コミュニケーションロスを減らし、スピードと質を両立します。",
    },
    {
      title: "業務とシステムの両方が分かる",
      description:
        "業務設計とシステム実装の両方を理解しているからこそ、翻訳なしで一気通貫の支援が可能です。",
    },
  ];

  return (
    <section
      id="track-record"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6 bg-white dark:bg-gray-950"
    >
      <div className="max-w-5xl mx-auto">
        <div className="fade-in-section text-center mb-12 sm:mb-16">
          <p className="text-sm font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-3">
            Track Record
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            実績と信頼
          </h2>
        </div>

        {/* Stats */}
        <div className="fade-in-section grid grid-cols-3 gap-4 sm:gap-8 mb-12 sm:mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl sm:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-1">
                {stat.number}
              </p>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Industries */}
        <div className="fade-in-section bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 sm:p-8 mb-8">
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-4">
            支援業界・領域
          </h3>
          <div className="flex flex-wrap gap-2">
            {industries.map((industry) => (
              <span
                key={industry}
                className="px-3 py-1.5 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-sm rounded-full border border-gray-200 dark:border-gray-700"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="fade-in-section bg-gray-50 dark:bg-gray-900 rounded-xl p-5 sm:p-6"
            >
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
