import { Metadata } from 'next';
import Link from 'next/link';
import { products } from '@/data/products';

export const metadata: Metadata = {
  title: 'コンサルティング | HarmonicInsight',
  description: '建設業に特化したDXコンサルティング、AI業務改善、AI時代のシステム開発支援。',
};

export default function ConsultingPage() {
  const consultingServices = products.filter(p => p.category === 'resources');

  const processSteps = [
    { step: '01', title: '要件定義', description: 'コンサルタントが課題を整理' },
    { step: '02', title: 'AI設計', description: '最適なアーキテクチャを構築' },
    { step: '03', title: '高速実装', description: 'AIによる効率的な開発' },
    { step: '04', title: 'リリース', description: '短期間で製品化を実現' },
  ];

  const strengths = [
    {
      title: '建設業界に精通',
      description: '工務店出身の実績を活かし、建設業界特有の課題を深く理解。現場目線のソリューションを提供。',
    },
    {
      title: 'AI時代の開発力',
      description: '20以上の製品・ツールを生み出してきた実績。要件定義からリリースまで、驚くほど短期間で実現。',
    },
    {
      title: 'ハードウェア連携',
      description: '特許出願中の独自ハードウェア技術。ソフトウェアだけでなく、現場を変革するIoTソリューション。',
    },
  ];

  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-900 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,#1e293b_25%,transparent_25%,transparent_75%,#1e293b_75%)] bg-[size:60px_60px] opacity-20" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-500/5" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-widest text-yellow-500 uppercase mb-4">
              Professional Services
            </p>
            <h1 className="text-4xl font-light text-white sm:text-5xl mb-6 tracking-tight">
              コンサルティング
            </h1>
            <p className="text-lg text-slate-400 leading-relaxed">
              建設業に特化した実績と、AI時代の新しい開発スタイル。
              <br />
              要件定義から実装まで、ビジネスの変革をサポートします。
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="space-y-24">
            {consultingServices.map((service, index) => (
              <div
                key={service.id}
                id={service.id === 'construction-consulting' ? 'construction' : service.id === 'ai-development' ? 'ai-development' : undefined}
                className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <p className="text-xs font-medium tracking-widest text-yellow-600 dark:text-yellow-500 uppercase mb-4">
                    Service 0{index + 1}
                  </p>
                  <h2 className="text-2xl font-medium text-slate-900 dark:text-white mb-4">
                    {service.nameJa}
                  </h2>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {service.descriptionJa}
                  </p>

                  {/* Highlights */}
                  {service.highlightsJa && service.highlightsJa.length > 0 && (
                    <div className="flex items-center gap-2 mb-6">
                      {service.highlightsJa.map((highlight, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 text-yellow-700 dark:text-yellow-500 rounded text-sm font-medium"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Features */}
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {service.featuresJa?.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-yellow-600 dark:text-yellow-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-slate-700 dark:text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                </div>

                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="rounded-lg border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 p-8">
                    <div className="text-center py-12">
                      <div className="w-16 h-16 mx-auto mb-6 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 flex items-center justify-center">
                        <svg className="w-8 h-8 text-yellow-600 dark:text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          {index === 0 ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          )}
                        </svg>
                      </div>
                      <p className="text-slate-600 dark:text-slate-400">
                        {service.taglineJa}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Factory Section */}
      <section className="py-24 bg-slate-50 dark:bg-slate-800/50">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest text-yellow-600 dark:text-yellow-500 uppercase mb-3">
              Product Factory
            </p>
            <h2 className="text-2xl font-light text-slate-900 dark:text-white mb-4">
              要件定義から実装まで、AIが加速する開発
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
              コンサルタントが要件を整理し、AIが設計・実装を担当。
              他社が夢見る開発スタイルを、私たちはすでに実現しています。
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="p-6 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 text-center"
              >
                <div className="w-10 h-10 mx-auto mb-4 rounded-lg bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 flex items-center justify-center">
                  <span className="text-yellow-600 dark:text-yellow-500 text-sm font-mono font-medium">
                    {item.step}
                  </span>
                </div>
                <h3 className="text-base font-medium text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strength Section */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-xs font-medium tracking-widest text-yellow-600 dark:text-yellow-500 uppercase mb-3">
              Our Strengths
            </p>
            <h2 className="text-2xl font-light text-slate-900 dark:text-white mb-4">
              HarmonicInsightの強み
            </h2>
            <p className="text-slate-600 dark:text-slate-400">
              建設業界の実績とAI技術の融合
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {strengths.map((item, index) => (
              <div
                key={item.title}
                className="p-6 rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50"
              >
                <div className="w-8 h-8 rounded bg-yellow-50 dark:bg-yellow-900/20 flex items-center justify-center mb-4">
                  <span className="text-yellow-600 dark:text-yellow-500 text-sm font-mono">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-medium text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 dark:bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white dark:text-slate-900 mb-4">
            ビジネスの変革を始めましょう
          </h2>
          <p className="text-slate-400 dark:text-slate-600 max-w-2xl mx-auto mb-8">
            建設業に特化した知見で、貴社の課題を解決します。
          </p>
          <a href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            お問い合わせ →
          </a>
        </div>
      </section>
    </div>
  );
}
