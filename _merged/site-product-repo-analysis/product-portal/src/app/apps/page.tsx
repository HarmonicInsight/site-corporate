import { Metadata } from 'next';
import Link from 'next/link';
import { educationProducts } from '@/data/products';

export const metadata: Metadata = {
  title: '教育・研修ツール | HarmonicInsight',
  description: 'コンサルティング思考、建設業知識、セキュリティチェックなど、業務に役立つ教育・研修ツール。',
};

export default function AppsPage() {
  return (
    <div className="bg-white dark:bg-slate-900 min-h-screen">
      {/* Hero Section */}
      <section className="relative py-24 bg-slate-50 dark:bg-slate-800 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,#ccfbf1_0%,transparent_50%)] opacity-50 dark:opacity-10" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-medium tracking-widest text-teal-600 dark:text-teal-400 uppercase mb-4">
              Education & Training
            </p>
            <h1 className="text-4xl font-light text-slate-900 dark:text-white sm:text-5xl mb-6 tracking-tight">
              教育・研修ツール
            </h1>
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
              コンサルティング思考の習得、業界知識の確認、セキュリティ基準への対応。
              <br />
              業務に直結するスキルアップツールを無料・低価格で提供しています。
            </p>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {educationProducts.map((product) => (
              <a
                key={product.id}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-lg border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800/50 hover:border-teal-300 dark:hover:border-teal-700 transition-colors overflow-hidden"
              >
                {/* Card Header */}
                <div className="p-6 border-b border-slate-100 dark:border-slate-700/50">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-teal-50 dark:bg-teal-900/20 border border-teal-200 dark:border-teal-800 flex items-center justify-center">
                      <svg className="w-5 h-5 text-teal-600 dark:text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-base font-medium text-slate-900 dark:text-white">
                        {product.nameJa}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {product.taglineJa}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {product.features.map((feature, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-slate-50 dark:bg-slate-700/50 text-slate-600 dark:text-slate-300 rounded text-xs"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {product.price}
                    </span>
                    <span className="inline-flex items-center text-sm text-teal-600 dark:text-teal-400 group-hover:underline">
                      開く
                      <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900 dark:bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white dark:text-slate-900 mb-4">
            業務改善についてご相談ください
          </h2>
          <p className="text-slate-400 dark:text-slate-600 max-w-2xl mx-auto mb-8">
            教育・研修ツールの導入から、業務全体の改善まで。まずはお気軽にご連絡ください。
          </p>
          <Link href="/contact" className="inline-flex items-center px-6 py-3 rounded-lg bg-white dark:bg-slate-900 text-slate-900 dark:text-white font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
            お問い合わせ →
          </Link>
        </div>
      </section>
    </div>
  );
}
