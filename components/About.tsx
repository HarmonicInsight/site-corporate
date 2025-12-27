"use client";

import { useEffect, useRef } from "react";

export default function About() {
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

  const companyInfo = [
    { label: "設立", value: "2025年" },
    { label: "所在地", value: "東京都中央区銀座" },
    { label: "代表", value: "瀬田ルリ子" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6 bg-white dark:bg-gray-950"
    >
      <div className="max-w-4xl mx-auto">
        <div className="fade-in-section text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About
          </h2>
          <div className="w-12 h-1 bg-primary-500 mx-auto rounded-full" />
        </div>

        <div className="fade-in-section bg-gray-50 dark:bg-gray-900 rounded-2xl p-8 sm:p-12">
          <div className="text-center mb-10 space-y-3">
            <p className="text-gray-900 dark:text-white text-lg sm:text-xl font-medium leading-relaxed">
              設計し、運用を回し、判断を速くする。
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
              データの流れと人の動きを整えることで、
              <br className="hidden sm:block" />
              仕組みが定着し、成果につながる。
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {companyInfo.map((info) => (
              <div key={info.label} className="text-center">
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-500 uppercase tracking-wider mb-2">
                  {info.label}
                </p>
                <p className="text-base sm:text-lg font-medium text-gray-900 dark:text-white">
                  {info.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
