"use client";

import { useEffect, useRef } from "react";

export default function Beliefs() {
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

  const beliefs = [
    {
      main: "UIより運用",
      sub: "見た目が良くても、使われなければ意味がない。",
    },
    {
      main: "KPIより意思決定",
      sub: "数字を出すことより、判断が変わることに価値がある。",
    },
    {
      main: "仕組みは、人が回して初めて価値になる",
      sub: "ツールは手段。定着してこそ成果。",
    },
  ];

  return (
    <section
      id="beliefs"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-4xl mx-auto">
        <div className="fade-in-section text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            What we believe
          </h2>
          <div className="w-12 h-1 bg-primary-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {beliefs.map((belief) => (
            <div
              key={belief.main}
              className="fade-in-section text-center p-6"
            >
              <p className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {belief.main}
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {belief.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
