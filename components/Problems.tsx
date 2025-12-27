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
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      text: "月次実績が毎回「怪しい」。管理部門が手作業で照合している",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
      text: "入力ミスが月末に発覚し、差し戻し→修正→再確認の連鎖で締めが遅れる",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
      text: "現場・営業が「とりあえず登録」して、後から経理に怒られる",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      text: "管理部門が「検査員」になっていて、本来の業務に手が回らない",
    },
    {
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      text: "原価率・進捗・契約金額の整合がとれず、報告のたびに数字が揺れる",
    },
  ];

  return (
    <section
      id="problems"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6 bg-white dark:bg-gray-950"
    >
      <div className="max-w-3xl mx-auto">
        <div className="fade-in-section text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            こんな状況、ありませんか？
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            建設業の管理部門・経理でよく聞く「月次の悩み」
          </p>
        </div>

        <div className="space-y-4">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="fade-in-section flex items-start gap-4 bg-gray-50 dark:bg-gray-900 rounded-xl p-5 border-l-4 border-amber-500"
            >
              <div className="flex-shrink-0 text-amber-600 dark:text-amber-400 mt-0.5">
                {problem.icon}
              </div>
              <p className="text-gray-800 dark:text-gray-200 text-sm sm:text-base leading-relaxed">
                {problem.text}
              </p>
            </div>
          ))}
        </div>

        <div className="fade-in-section mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            これらの問題に共通する原因は——
          </p>
          <p className="text-lg font-medium text-gray-900 dark:text-white">
            「チェックを後工程に回している」こと。
          </p>
        </div>
      </div>
    </section>
  );
}
