"use client";

import { useEffect, useRef } from "react";

export default function ExternalSites() {
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

  const sites = [
    {
      title: "建設DX・業務設計",
      description: "業務を部品として定義し、組み立てて回る形に。",
      url: "https://const-dx-home.vercel.app/",
    },
    {
      title: "Insight Series",
      description: "属人化をほどくための、設計・変換・説明の基盤。",
      url: "https://insight-series-site.vercel.app/",
    },
    {
      title: "Apps Portal",
      description: "アプリ・ツールの一覧とデモ入口。",
      url: "https://h-insight-apps-portal.vercel.app/",
    },
    {
      title: "Harmonic Novels",
      description: "未来の仕事と社会を、物語で描く。",
      url: "https://novels.h-insight.jp/",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-16 sm:py-20 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-4xl mx-auto">
        <div className="fade-in-section text-center mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
            専用サイト
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            各領域の詳細はこちら
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {sites.map((site, index) => (
            <a
              key={index}
              href={site.url}
              target="_blank"
              rel="noopener noreferrer"
              className="fade-in-section block bg-white dark:bg-gray-900 rounded-xl p-5 border border-gray-200 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-500 transition-colors group"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                    {site.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {site.description}
                  </p>
                </div>
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-primary-500 transition-colors flex-shrink-0 mt-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
