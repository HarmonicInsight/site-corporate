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

  const principles = [
    {
      title: "構造で捉える",
      description: "問題を分解し、関係性を可視化する",
    },
    {
      title: "再現可能にする",
      description: "属人化を避け、仕組みとして定着させる",
    },
    {
      title: "現場に負担をかけない",
      description: "使う人の視点で、無理のない形に落とし込む",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="pt-10 pb-12 sm:py-16 md:py-20 px-4 sm:px-6 bg-white dark:bg-gray-950"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((principle, index) => (
            <div
              key={index}
              className="fade-in-section text-center"
            >
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {principle.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {principle.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
