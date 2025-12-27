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
      className="relative min-h-[80vh] flex items-center justify-center px-4 sm:px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto py-20">
        <p className="fade-in-section text-sm text-primary-600 dark:text-primary-400 font-medium mb-6 tracking-wide">
          Harmonic Insight LLC
        </p>

        <h1 className="fade-in-section text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          DXが「作って終わり」になる問題を、
          <br className="hidden sm:block" />
          業務設計から止める。
        </h1>

        <p className="fade-in-section text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
          ツールを入れても使われない。構想は立派だが実装が続かない。
          <br className="hidden md:block" />
          その原因は「業務」と「システム」の設計がズレているから。
          <br className="hidden md:block" />
          私たちは、設計・実装・運用を一貫して支援します。
        </p>

        <div className="fade-in-section flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#problems"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200"
          >
            よくある課題を見る
            <svg
              className="w-4 h-4 ml-2"
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
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 font-medium rounded-lg transition-colors duration-200"
          >
            相談する
          </a>
        </div>
      </div>
    </section>
  );
}
