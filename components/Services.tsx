"use client";

import { useEffect, useRef } from "react";

interface ServiceCardProps {
  title: string;
  problem: string;
  value: string;
  outcome: string;
  icon: React.ReactNode;
}

function ServiceCard({ title, problem, value, outcome, icon }: ServiceCardProps) {
  return (
    <div className="fade-in-section bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md dark:shadow-gray-900/50 transition-all duration-300 border border-gray-100 dark:border-gray-800 flex flex-col h-full">
      <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-600 dark:text-primary-400 mb-5">
        {icon}
      </div>

      <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-4">
        {title}
      </h3>

      <div className="space-y-4 flex-grow">
        <div>
          <p className="text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-1">
            課題
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
            {problem}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-1">
            提供価値
          </p>
          <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
            {value}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-1">
            期待成果
          </p>
          <p className="text-primary-700 dark:text-primary-400 text-sm font-medium leading-relaxed">
            {outcome}
          </p>
        </div>
      </div>
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const elements = sectionRef.current?.querySelectorAll(".fade-in-section");
    elements?.forEach((el, index) => {
      (el as HTMLElement).style.transitionDelay = `${index * 100}ms`;
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const services: ServiceCardProps[] = [
    {
      title: "業務プロセス設計",
      problem:
        "ダッシュボードを作ったのに、誰も見ない。データはあるのに、判断が変わらない。",
      value:
        "データソースから意思決定フロー、アクションまでを一貫して設計。建設・業務管理に強い。",
      outcome: "判断が速くなる。作業が減る。仕組みが回る。",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"
          />
        </svg>
      ),
    },
    {
      title: "プロトタイプ開発",
      problem:
        "要件が固まらない。動くものを見ないと、議論が進まない。",
      value:
        "最速でプロトタイプを構築し、合意形成を加速。全体設計から実装まで一人で完結。",
      outcome: "手戻りが減る。意思決定が前倒しになる。",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
    {
      title: "運用定着支援",
      problem:
        "導入したツールが使われない。現場に定着しない。負荷だけが残る。",
      value:
        "更新運用・教育・定着までを設計し、伴走。仕組みを人に馴染ませる。",
      outcome: "負荷が下がる。継続する。再現性が生まれる。",
      icon: (
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="fade-in-section text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Services
          </h2>
          <div className="w-12 h-1 bg-primary-500 mx-auto rounded-full mb-6" />
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            UIは作れて当たり前の時代。
            <br className="sm:hidden" />
            差がつくのは、運用・データ・判断の設計。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>

        <div className="fade-in-section text-center">
          <a
            href="#contact"
            className="inline-flex items-center text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium transition-colors duration-200"
          >
            ご相談はこちら
            <svg
              className="w-4 h-4 ml-1.5"
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
