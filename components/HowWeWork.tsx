"use client";

import { useEffect, useRef } from "react";

interface StepProps {
  number: string;
  title: string;
  description: string;
}

function Step({ number, title, description }: StepProps) {
  return (
    <div className="fade-in-section flex items-start gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
        <span className="text-primary-600 dark:text-primary-400 font-semibold text-sm">
          {number}
        </span>
      </div>
      <div>
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-1">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}

export default function HowWeWork() {
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

  const steps: StepProps[] = [
    {
      number: "01",
      title: "現状の棚卸",
      description: "データ・判断・運用の流れを可視化。何がボトルネックかを特定する。",
    },
    {
      number: "02",
      title: "最小プロトタイプ",
      description: "動くもので合意を取る。議論を空中戦から地上戦へ。",
    },
    {
      number: "03",
      title: "運用設計と定着",
      description: "回る仕組みに育てる。更新ルール・教育・伴走で現場に馴染ませる。",
    },
  ];

  return (
    <section
      id="how-we-work"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6 bg-white dark:bg-gray-950"
    >
      <div className="max-w-3xl mx-auto">
        <div className="fade-in-section text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            How we work
          </h2>
          <div className="w-12 h-1 bg-primary-500 mx-auto rounded-full" />
        </div>

        <div className="space-y-8">
          {steps.map((step, index) => (
            <div key={step.number}>
              <Step {...step} />
              {index < steps.length - 1 && (
                <div className="ml-5 mt-4 h-8 border-l-2 border-dashed border-gray-200 dark:border-gray-700" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
