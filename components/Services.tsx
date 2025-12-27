"use client";

import { useEffect, useRef } from "react";

interface ServiceCategoryProps {
  title: string;
  description: string;
  items: {
    name: string;
    target: string;
    link?: string;
  }[];
}

function ServiceCategory({ title, description, items }: ServiceCategoryProps) {
  return (
    <div className="fade-in-section bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 dark:border-gray-800">
      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
        {title}
      </h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-5">
        {description}
      </p>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item.name}
            className="flex items-start gap-2 text-sm"
          >
            <svg
              className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <div>
              <span className="text-gray-900 dark:text-white font-medium">
                {item.name}
              </span>
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-2 text-primary-600 dark:text-primary-400 hover:underline text-xs"
                >
                  詳細 →
                </a>
              ) : null}
              <p className="text-gray-500 dark:text-gray-400 text-xs mt-0.5">
                {item.target}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Services() {
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

  const categories: ServiceCategoryProps[] = [
    {
      title: "業務設計・DX構想支援",
      description: "業務が整理されないままシステム化して失敗する問題を防ぐ",
      items: [
        {
          name: "業務プロセス設計",
          target: "業務フローが曖昧なまま進んでいる組織向け",
        },
        {
          name: "DX構想・ロードマップ策定",
          target: "何から手をつけていいか分からない経営層・DX担当向け",
        },
        {
          name: "データ・KPI設計",
          target: "ダッシュボードを作っても判断に繋がらない組織向け",
        },
      ],
    },
    {
      title: "ツール・アプリ開発",
      description: "要件が固まらないまま開発が進む問題を防ぐ",
      items: [
        {
          name: "Insight Series（生産性ツール）",
          target: "PowerPoint自動生成、Python開発支援など",
          link: "https://h-insight.jp/",
        },
        {
          name: "プロトタイプ・MVP開発",
          target: "動くもので合意を取りたいプロジェクト向け",
        },
        {
          name: "業務アプリ開発",
          target: "既製品では対応できない業務課題を持つ組織向け",
        },
      ],
    },
    {
      title: "ナレッジ化・コンテンツ支援",
      description: "属人化した知見を組織の資産に変える",
      items: [
        {
          name: "Harmonic Novels（書籍シリーズ）",
          target: "AI×人間の共創による小説・実用書。Kindleで発売中",
          link: "https://www.amazon.co.jp/",
        },
        {
          name: "業務マニュアル・ドキュメント整備",
          target: "ナレッジが個人に閉じている組織向け",
        },
        {
          name: "研修・教育コンテンツ開発",
          target: "ツール導入後の定着に課題を持つ組織向け",
        },
      ],
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-5xl mx-auto">
        <div className="fade-in-section text-center mb-12 sm:mb-16">
          <p className="text-sm font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-3">
            Services
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            サービス一覧
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base max-w-2xl mx-auto">
            課題の段階に応じて、必要な支援を組み合わせて提供します
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((category) => (
            <ServiceCategory key={category.title} {...category} />
          ))}
        </div>

        <div className="fade-in-section text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            まずは相談する
          </a>
        </div>
      </div>
    </section>
  );
}
