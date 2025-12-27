"use client";

import { useEffect, useRef, useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <button
        onClick={onToggle}
        className="w-full py-5 flex items-center justify-between text-left"
      >
        <span className="text-sm sm:text-base font-medium text-gray-900 dark:text-white pr-4">
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="pb-5">
          <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
  const sectionRef = useRef<HTMLElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

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

  const faqs = [
    {
      question: "基幹システムは変更しますか？",
      answer: "変更しません。既存の基幹システムはそのまま使い、入力前後のチェック・通知・差し戻しを周辺の仕組みで対応します。大規模なシステム導入は不要です。",
    },
    {
      question: "現場が反発しませんか？",
      answer: "差し戻し理由を明確にし、「何がダメで、どう直せばいいか」が分かる形にします。また、入力ガイドを整備することで、迷わず正しく入力できる状態を作ります。現場の負担は増えず、むしろ「後から怒られる」ストレスが減ります。",
    },
    {
      question: "AIが間違えたらどうなりますか？",
      answer: "本サービスは「ルールベース」を中心に設計します。契約金額との整合、原価率の上下限、前月比の異常値など、明確なルールで判定します。ルールで判断できない例外は人が確認する設計にしており、AIの誤判定リスクは最小限です。",
    },
    {
      question: "データが少なくても導入できますか？",
      answer: "可能です。過去データを使った学習は必須ではありません。まずは「明らかにおかしい入力を止める」ルールから始め、運用しながら精度を上げていきます。",
    },
    {
      question: "導入後のサポートはありますか？",
      answer: "あります。運用開始後1ヶ月間は、ルール調整・例外対応・現場からの問い合わせ対応を含むサポート期間を設けています。その後も必要に応じて保守契約が可能です。",
    },
    {
      question: "建設業以外でも使えますか？",
      answer: "使えます。月次実績・原価管理・入力品質の課題は業界を問わず共通です。製造業、卸売業、サービス業など、「入力→確認→差し戻し」の繰り返しに悩む企業であれば対応可能です。",
    },
  ];

  return (
    <section
      id="faq"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-3xl mx-auto">
        <div className="fade-in-section text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            よくあるご質問
          </h2>
        </div>

        <div className="fade-in-section bg-white dark:bg-gray-900 rounded-2xl px-6 sm:px-8">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
