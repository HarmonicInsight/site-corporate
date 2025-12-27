"use client";

import { useEffect, useRef } from "react";

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

  const services = [
    {
      title: "月次・原価の入力品質設計",
      target: "「毎月の確認作業を減らしたい」管理部門・経理向け",
      description: "入力ルールの整理、チェックロジックの設計、差し戻しフローの構築まで。基幹システムを変えずに入力品質を上げます。",
      period: "6〜10週間",
    },
    {
      title: "現場の報告・帳票を「集めなくていい形」にする",
      target: "「報告が上がってこない」「Excelが乱立している」現場向け",
      description: "報告フォーマットの統一、入力導線の簡素化、自動集計の仕組みを作ります。現場の手間を減らしながら、必要な情報が集まる状態に。",
      period: "4〜8週間",
    },
    {
      title: "業務ヒアリングを「会議しない」方式に置き換える",
      target: "「ヒアリングで時間が取られすぎる」DX担当・企画向け",
      description: "動画・テキスト回答・非同期レビューで業務整理を進めます。忙しい現場に負担をかけず、必要な情報を集めます。",
      period: "2〜4週間",
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6 bg-white dark:bg-gray-950"
    >
      <div className="max-w-5xl mx-auto">
        <div className="fade-in-section text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            その他のサービス
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            月次チェック以外のお悩みにも対応しています
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="fade-in-section bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 flex flex-col"
            >
              <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                {service.title}
              </h3>
              <p className="text-xs text-primary-600 dark:text-primary-400 mb-3">
                {service.target}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">
                {service.description}
              </p>
              <p className="text-xs text-gray-500 mt-4">
                期間目安：{service.period}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
