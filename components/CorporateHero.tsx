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
          思考と創造を、形にする。
        </h1>

        <div className="fade-in-section space-y-2 text-base sm:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
          <p>
            Harmonic Insight は、業務・技術・人の関係を「構造」で捉え、
          </p>
          <p>
            再現可能な形に設計することを大切にしています。
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm pt-2">
            詳細は専用サイトとサービスページでご案内しています。
          </p>
        </div>
      </div>
    </section>
  );
}
