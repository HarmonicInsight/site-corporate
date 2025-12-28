"use client";

import { useEffect, useRef } from "react";

export default function CorporateContact() {
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
      id="contact"
      ref={sectionRef}
      className="py-16 sm:py-20 px-4 sm:px-6 bg-white dark:bg-gray-950"
    >
      <div className="max-w-2xl mx-auto">
        <div className="fade-in-section text-center mb-10">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-3">
            まずは30分、お話しませんか？
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            オンラインで貴社の状況をお聞きし、対応可能かどうかをお伝えします。
          </p>
        </div>

        <div className="fade-in-section bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 sm:p-8">
          <form className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  会社名
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="株式会社〇〇"
                />
              </div>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  お名前
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="山田 太郎"
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                メールアドレス
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                placeholder="example@company.co.jp"
              />
            </div>

            <div>
              <label htmlFor="interest" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                ご関心のあるテーマ
              </label>
              <select
                id="interest"
                name="interest"
                className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              >
                <option value="">選択してください</option>
                <option value="monthly-check">月次実績チェック自動化パック</option>
                <option value="input-quality">月次・原価の入力品質改善</option>
                <option value="report">現場報告・帳票の改善</option>
                <option value="interview">会議しない業務ヒアリング</option>
                <option value="other">その他</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                現在のお悩み・ご状況（任意）
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none"
                placeholder="例：月次の締めが毎回遅れていて、管理部門が疲弊しています..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg shadow-primary-600/20"
            >
              30分の無料相談を申し込む
            </button>
          </form>

          <div className="mt-6 text-center space-y-2">
            <p className="text-xs text-gray-600 dark:text-gray-300">
              担当: Erik Arthur（Chief Architect / Strategist）
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              ※ 営業目的のご連絡には返信いたしかねます
            </p>
          </div>
        </div>

        <div className="fade-in-section mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
            フォーム以外でのご連絡
          </p>
          <a
            href="mailto:info@harmonic-insight.jp"
            className="inline-flex items-center text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300"
          >
            <svg className="w-4 h-4 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            info@harmonic-insight.jp
          </a>
        </div>
      </div>
    </section>
  );
}
