"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function ServiceHighlights() {
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

  const services = [
    {
      title: "月次実績チェック自動化パック",
      description: "入力ミスを月末まで放置しない。チェックを仕組みで終わらせます。",
      period: "6〜8週間",
      href: "/services/monthly-check",
      isPrimary: true,
    },
    {
      title: "月次・原価の入力品質設計",
      description: "入力ルールの整理から差し戻しフローまで。",
      period: "6〜10週間",
      href: "/services/input-quality",
      isPrimary: false,
    },
    {
      title: "現場の報告・帳票改善",
      description: "報告を「集めなくていい形」にします。",
      period: "4〜8週間",
      href: "/services/report-automation",
      isPrimary: false,
    },
    {
      title: "会議しない業務ヒアリング",
      description: "動画・テキストで非同期に業務整理を進めます。",
      period: "2〜4週間",
      href: "/services/async-interview",
      isPrimary: false,
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 px-4 sm:px-6 bg-white dark:bg-gray-950"
    >
      <div className="max-w-4xl mx-auto">
        <div className="fade-in-section text-center mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
            サービス
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            業務プロセスの設計・改善を支援します
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {services.map((service, index) => (
            <Link
              key={index}
              href={service.href}
              className={`fade-in-section block rounded-xl p-5 transition-colors ${
                service.isPrimary
                  ? "bg-primary-50 dark:bg-primary-950/30 border-2 border-primary-200 dark:border-primary-800 hover:border-primary-400 dark:hover:border-primary-600 sm:col-span-2"
                  : "bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-500"
              }`}
            >
              <div className="flex items-start justify-between">
                <div className="flex-grow">
                  {service.isPrimary && (
                    <span className="inline-block text-xs font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-2">
                      主力サービス
                    </span>
                  )}
                  <h3 className={`font-semibold text-gray-900 dark:text-white mb-1 ${
                    service.isPrimary ? "text-lg" : "text-base"
                  }`}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    {service.description}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-500">
                    期間目安：{service.period}
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-gray-400 flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </div>
            </Link>
          ))}
        </div>

        <div className="fade-in-section text-center mt-8">
          <Link
            href="/services"
            className="inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            サービス一覧を見る
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
