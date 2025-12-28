"use client";

import { useEffect, useRef } from "react";

export default function CorporateHero() {
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
      className="relative min-h-[60vh] flex items-center justify-center px-4 sm:px-6 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto py-20">
        <h1 className="fade-in-section text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8 leading-tight">
          業務を、誰でも回る形に。
        </h1>

        <div className="fade-in-section space-y-3 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          <p>
            業務を部品として定義し、組み立てて、誰でも回る形にする。
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm">
            属人性を仕組みで解消し、現場に負担をかけない設計を支援します。
          </p>
        </div>
      </div>
    </section>
  );
}
