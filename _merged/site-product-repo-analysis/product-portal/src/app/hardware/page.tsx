import { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'ハードウェアソリューション | HarmonicInsight',
  description: '特許出願中の独自技術を活用したIoT・ハードウェア製品。民泊IoTシステム、押圧式スキャナーなど。',
};

export default function HardwarePage() {
  const hardwareProducts = products.filter(p => p.category === 'opensource');

  const technologies = [
    '押圧検知による精密な位置決め技術',
    'リアルタイム騒音モニタリングシステム',
    'クラウド連携によるデータ管理',
    'AIを活用した自動分析・アラート',
  ];

  const useCases = [
    {
      title: '民泊・短期賃貸',
      description: '騒音トラブルを事前に検知し、近隣住民との問題を未然に防止。オーナー様の安心を実現。',
    },
    {
      title: 'ホテル・旅館',
      description: '各フロアの騒音状況をリアルタイムで把握。迅速な対応で顧客満足度を向上。',
    },
    {
      title: 'オフィス・商業施設',
      description: '環境騒音のモニタリングで快適な空間を維持。データに基づいた改善を実施。',
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-50 dark:bg-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,#fef3c7_0%,transparent_50%)] opacity-30 dark:opacity-10" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded border border-amber-300 dark:border-amber-700 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 text-xs font-medium mb-6">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              特許出願中
            </div>
            <p className="text-xs font-medium tracking-widest text-slate-500 dark:text-slate-400 uppercase mb-4">
              Hardware Solutions
            </p>
            <h1 className="text-4xl font-light text-slate-900 dark:text-white sm:text-5xl mb-6 tracking-tight">
              ハードウェアソリューション
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              独自の特許技術を活用したIoT・ハードウェア製品。
              <br />
              現場の課題を解決する革新的なソリューション。
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {hardwareProducts.map((product) => (
              <div
                key={product.id}
                className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 overflow-hidden"
              >
                {/* Screenshot - minpaku-iot only */}
                {product.id === 'minpaku-iot' && (
                  <div className="border-b border-slate-100 dark:border-slate-700">
                    <img
                      src={`/images/hardware/${product.id}.png`}
                      alt={`${product.nameJa}のスクリーンショット`}
                      className="w-full h-auto"
                    />
                  </div>
                )}
                {/* Product Header */}
                <div className="p-8 border-b border-slate-100 dark:border-slate-700">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 flex items-center justify-center">
                      <svg className="w-6 h-6 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                      </svg>
                    </div>
                    {product.status === 'coming-soon' ? (
                      <span className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded text-xs font-medium">
                        Coming Soon
                      </span>
                    ) : (
                      <span className="px-3 py-1 bg-amber-50 dark:bg-amber-900/20 text-amber-700 dark:text-amber-400 rounded text-xs font-medium">
                        提供中
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-medium text-slate-900 dark:text-white mb-2">
                    {product.nameJa}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {product.taglineJa}
                  </p>
                </div>

                {/* Product Body */}
                <div className="p-8">
                  <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                    {product.descriptionJa}
                  </p>

                  {/* Highlights */}
                  {product.highlightsJa && product.highlightsJa.length > 0 && (
                    <div className="flex items-center gap-2 mb-8">
                      {product.highlightsJa.map((highlight, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400 rounded text-sm font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Features Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {product.featuresJa?.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-700/30"
                      >
                        <svg className="w-4 h-4 text-amber-600 dark:text-amber-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-xs font-medium tracking-widest text-amber-600 dark:text-amber-400 uppercase mb-4">
                Technology
              </p>
              <h2 className="text-2xl font-light text-slate-900 dark:text-white sm:text-3xl mb-6">
                特許出願中の革新的テクノロジー
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                HarmonicInsightのハードウェアソリューションは、独自に開発した特許技術を活用。
                従来のソリューションでは実現できなかった課題を解決します。
              </p>
              <ul className="space-y-4">
                {technologies.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                    <span className="flex-shrink-0 w-5 h-5 rounded bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mt-0.5">
                      <svg className="w-3 h-3 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 p-8">
                <div className="text-center py-8">
                  <div className="w-20 h-20 mx-auto mb-6 rounded-lg bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 flex items-center justify-center">
                    <svg className="w-10 h-10 text-amber-600 dark:text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-medium text-slate-900 dark:text-white mb-2">
                    特許出願中
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400">
                    独自技術で差別化を実現
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest text-amber-600 dark:text-amber-400 uppercase mb-3">
              Use Cases
            </p>
            <h2 className="text-2xl font-light text-slate-900 dark:text-white mb-4">
              導入事例・活用シーン
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              様々な業界でご活用いただいています
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={useCase.title}
                className="p-6 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50"
              >
                <div className="w-8 h-8 rounded bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center mb-4">
                  <span className="text-amber-600 dark:text-amber-400 text-sm font-mono">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-3">
                  {useCase.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 dark:bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <p className="text-xs font-medium tracking-widest text-rose-400 dark:text-rose-500 uppercase mb-4">
            Get Started
          </p>
          <h2 className="text-2xl sm:text-3xl font-semibold text-white dark:text-slate-900 mb-4">
            ハードウェアソリューションに興味がありますか？
          </h2>
          <p className="text-slate-400 dark:text-slate-600 max-w-2xl mx-auto mb-8">
            IoTと組込みシステムで、ビジネスの可能性を広げます。
          </p>
          <a href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            お問い合わせ →
          </a>
        </div>
      </section>
    </div>
  );
}
