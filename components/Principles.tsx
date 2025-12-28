"use client";

import { useEffect, useRef } from "react";

export default function Principles() {
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

  const principles = ["構造で捉える", "再現可能にする", "現場に負担をかけない"];

  return (
    <section
      ref={sectionRef}
      className="pt-8 pb-10 sm:py-12 md:py-16 px-4 sm:px-6 bg-white dark:bg-gray-950"
    >
      <div className="max-w-3xl mx-auto">
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8">
          {principles.map((principle, index) => (
            <span
              key={index}
              className="fade-in-section text-sm sm:text-base font-medium text-gray-700 dark:text-gray-300"
            >
              {principle}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
