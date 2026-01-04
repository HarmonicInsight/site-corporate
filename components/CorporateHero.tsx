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
      className="relative px-4 sm:px-6 overflow-hidden pt-28 pb-10 sm:pt-32 sm:pb-14 md:pt-36 md:pb-20"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl mx-auto">
        <h1 className="fade-in-section text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
          業務を、誰でも回る形に。
        </h1>

        <p className="fade-in-section text-base sm:text-lg text-gray-600 dark:text-gray-400">
          部品化して、組み立てて、仕組みで回す。
        </p>
      </div>
    </section>
  );
}
