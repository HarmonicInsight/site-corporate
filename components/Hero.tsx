"use client";

import { useEffect, useRef } from "react";

export default function Hero() {
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
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-[85vh] flex items-center justify-center px-4 sm:px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto py-20">
        <p className="fade-in-section text-sm text-gray-500 dark:text-gray-400 mb-6">
          建設業の管理部門・経理の方へ
        </p>

        <h1 className="fade-in-section text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          月次の「手作業チェック」を、
          <br />
          仕組みで終わらせます。
        </h1>

        <p className="fade-in-section text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4 max-w-2xl mx-auto leading-relaxed">
          営業・現場の入力ミスを月末に発見して、修正依頼を出して、
          <br className="hidden md:block" />
          また戻ってきて、また確認して——。
        </p>
        <p className="fade-in-section text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed font-medium">
          その繰り返しを「入力時点で止める」仕組みを作ります。
        </p>

        <div className="fade-in-section flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg shadow-primary-600/20"
          >
            30分の無料相談（オンライン）
          </a>
          <a
            href="/services/monthly-check"
            className="inline-flex items-center justify-center px-6 py-3.5 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors duration-200"
          >
            月次チェック自動化パックを見る
          </a>
        </div>

        {/* Scroll hint */}
        <div className="fade-in-section mt-16">
          <a
            href="#problems"
            className="inline-flex flex-col items-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
          >
            <span className="text-xs mb-2">こんな状況ありませんか？</span>
            <svg
              className="w-5 h-5 animate-bounce"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
