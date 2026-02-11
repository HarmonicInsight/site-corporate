import { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'Insight Series | HarmonicInsight',
  description: '動画・スライド・Python・BI。生産性を劇的に向上させるInsight Seriesツール群。',
};

export default function ToolsPage() {
  const insightSeries = products.filter(p => p.category === 'consulting');

  const categories = [
    {
      title: 'コンテンツ生成',
      description: '動画を自動生成',
      tools: ['InsightMovie'],
    },
    {
      title: 'ドキュメント処理',
      description: 'PDF・PPTを効率的に変換',
      tools: ['InsightSlide'],
    },
    {
      title: 'Python実行',
      description: '環境構築不要でPython実行',
      tools: ['InsightPy'],
    },
    {
      title: '分析・可視化',
      description: 'データをダッシュボードで表示',
      tools: ['InsightBI', 'NoCode Analyzer'],
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#334155_1px,transparent_1px),linear-gradient(to_bottom,#334155_1px,transparent_1px)] bg-[size:48px_48px] opacity-20" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-widest text-indigo-400 uppercase mb-4">
              Productivity Suite
            </p>
            <h1 className="text-4xl font-light text-white sm:text-5xl mb-6 tracking-tight">
              Insight Series
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              動画作成、スライド変換、RPAオーケストレーション、BI分析。
              <br />
              生産性を劇的に向上させるプロフェッショナルツール群。
            </p>
            <div className="mt-8 flex items-center gap-4">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded border border-slate-700 text-slate-300 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
                5つのツール
              </span>
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded border border-slate-700 text-slate-300 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                即座に導入可能
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insightSeries.map((product) => (
              <div
                key={product.id}
                className="group relative rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 hover:border-indigo-300 dark:hover:border-indigo-700 transition-colors overflow-hidden"
              >
                {/* Screenshot - ファイル: /public/images/tools/{product.id}.png */}
                <div className="border-b border-slate-100 dark:border-slate-700/50">
                  <img
                    src={`/images/tools/${product.id}.png`}
                    alt={`${product.nameJa}のスクリーンショット`}
                    className="w-full h-auto"
                  />
                </div>
                {/* Card Header */}
                <div className="p-6 border-b border-slate-100 dark:border-slate-700/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 dark:bg-slate-700 flex items-center justify-center">
                      <svg className="w-5 h-5 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    {product.pricingType === 'free' && (
                      <span className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded text-xs font-medium">
                        無料
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-1">
                    {product.nameJa}
                  </h3>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {product.taglineJa}
                  </p>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {product.descriptionJa}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <p className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-3">
                      Features
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.featuresJa?.slice(0, 4).map((feature, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-slate-50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 rounded text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Highlights */}
                  {product.highlightsJa && product.highlightsJa.length > 0 && (
                    <div className="flex items-center gap-2 mb-6">
                      {product.highlightsJa.map((highlight, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded text-xs font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Categories */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest text-indigo-600 dark:text-indigo-400 uppercase mb-3">
              Categories
            </p>
            <h2 className="text-2xl font-light text-slate-900 dark:text-white mb-4">
              カテゴリ別機能
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              幅広い用途に対応するInsight Seriesの各ツール
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={category.title}
                className="p-6 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50"
              >
                <div className="w-8 h-8 rounded bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mb-4">
                  <span className="text-indigo-600 dark:text-indigo-400 text-sm font-mono">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-base font-medium text-slate-900 dark:text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400 mb-4">
                  {category.description}
                </p>
                <div className="flex flex-wrap gap-1">
                  {category.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 rounded text-xs font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 dark:bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-xs font-medium tracking-widest text-amber-400 dark:text-amber-500 uppercase mb-4">
            Get Started
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white dark:text-slate-900 mb-4">
            生産性を向上させる準備はできていますか？
          </h2>
          <p className="text-slate-400 dark:text-slate-600 max-w-2xl mx-auto mb-8">
            Insight Seriesで業務効率を最大化。無料ツールから始められます。
          </p>
          <a href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            お問い合わせ →
          </a>
        </div>
      </section>
    </div>
  );
}
