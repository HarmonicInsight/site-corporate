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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6 bg-white dark:bg-gray-950"
    >
      <div className="max-w-3xl mx-auto">
        <div className="fade-in-section text-center space-y-4">
          <p className="text-gray-900 dark:text-white text-xl sm:text-2xl font-medium leading-relaxed">
            設計し、運用を回し、判断を速くする。
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
            データの流れと人の動きを整えることで、
            <br className="hidden sm:block" />
            仕組みが定着し、成果につながる。
          </p>
        </div>
      </div>
    </section>
  );
}
