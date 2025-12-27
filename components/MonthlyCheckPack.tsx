"use client";

import { useEffect, useRef } from "react";

export default function MonthlyCheckPack() {
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

  return (
    <section
      id="monthly-pack"
      ref={sectionRef}
      className="py-20 sm:py-28 px-4 sm:px-6 bg-primary-50 dark:bg-primary-950/20"
    >
      <div className="max-w-5xl mx-auto">
        <div className="fade-in-section text-center mb-12">
          <p className="text-sm font-medium text-primary-600 dark:text-primary-400 uppercase tracking-wider mb-3">
            主力サービス
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
            月次実績チェック自動化パック
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            「人がチェックしなくていい状態」を6〜8週間で作ります
          </p>
        </div>

        {/* Before/After */}
        <div className="fade-in-section grid md:grid-cols-2 gap-6 mb-12">
          {/* Before */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-xs font-medium rounded">Before</span>
              <span className="text-sm text-gray-500">現状のよくある流れ</span>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs text-gray-600 dark:text-gray-400">1</span>
                <p className="text-gray-700 dark:text-gray-300">営業・現場が基幹システムに入力</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs text-gray-600 dark:text-gray-400">2</span>
                <p className="text-gray-700 dark:text-gray-300">入力ミスが混入（契約と不整合、原価率異常など）</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs text-gray-600 dark:text-gray-400">3</span>
                <p className="text-gray-700 dark:text-gray-300">月次締めで管理部門が手作業で照合</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-amber-200 dark:bg-amber-800 flex items-center justify-center text-xs text-amber-700 dark:text-amber-300">4</span>
                <p className="text-gray-700 dark:text-gray-300">NG→差し戻し→修正→再確認の繰り返し</p>
              </div>
            </div>
          </div>

          {/* After */}
          <div className="bg-white dark:bg-gray-900 rounded-2xl p-6 border-2 border-primary-500">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs font-medium rounded">After</span>
              <span className="text-sm text-gray-500">導入後の流れ</span>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-xs text-primary-700 dark:text-primary-300">1</span>
                <p className="text-gray-700 dark:text-gray-300">営業・現場が入力</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-xs text-primary-700 dark:text-primary-300">2</span>
                <p className="text-gray-700 dark:text-gray-300">
                  <span className="font-medium text-primary-700 dark:text-primary-300">登録前に自動チェック</span>
                  （契約・過去実績・原価率・進捗）
                </p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-xs text-primary-700 dark:text-primary-300">3</span>
                <p className="text-gray-700 dark:text-gray-300">おかしい数字は理由付きで自動差し戻し</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-green-200 dark:bg-green-800 flex items-center justify-center text-xs text-green-700 dark:text-green-300">4</span>
                <p className="text-gray-700 dark:text-gray-300">月次は「確認」から「承認」だけに</p>
              </div>
            </div>
          </div>
        </div>

        {/* Specs */}
        <div className="fade-in-section bg-white dark:bg-gray-900 rounded-2xl p-6 sm:p-8 mb-8">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">パッケージ内容</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">期間</p>
              <p className="text-gray-900 dark:text-white font-medium">6〜8週間</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">対象範囲</p>
              <p className="text-gray-900 dark:text-white font-medium">月次実績・月次報告に限定</p>
              <p className="text-xs text-gray-500 mt-1">※全社改革・基幹刷新は含みません</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">成果物</p>
              <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                <li>• チェックルール一覧</li>
                <li>• 判定ロジック定義書</li>
                <li>• 差し戻しテンプレート</li>
                <li>• Before/Afterフロー</li>
                <li>• 運用ルール1枚</li>
              </ul>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-1">費用目安</p>
              <p className="text-gray-900 dark:text-white font-medium">300〜600万円</p>
              <p className="text-xs text-gray-500 mt-1">※規模・複雑さにより変動</p>
            </div>
          </div>
        </div>

        {/* Expected Results */}
        <div className="fade-in-section grid sm:grid-cols-3 gap-4 mb-10">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-5 text-center">
            <p className="text-2xl sm:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">50〜90%</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">管理部門の確認工数削減</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-5 text-center">
            <p className="text-2xl sm:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">大幅減</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">月次締め後の手戻り</p>
          </div>
          <div className="bg-white dark:bg-gray-900 rounded-xl p-5 text-center">
            <p className="text-2xl sm:text-3xl font-bold text-primary-600 dark:text-primary-400 mb-1">向上</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">入力品質・データ信頼性</p>
          </div>
        </div>

        {/* CTA */}
        <div className="fade-in-section text-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors duration-200 shadow-lg shadow-primary-600/20"
          >
            このパックについて相談する
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
            30分のオンライン相談で、貴社の状況に合うかお伝えします
          </p>
        </div>
      </div>
    </section>
  );
}
