import type { Metadata } from "next";
import Link from "next/link";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "製品一覧 — Insight Series | HARMONIC insight",
  description: "HARMONIC insight が提供するInsight Series製品一覧。InsightBI・Forguncy Insight・InsightSlides・InsightPy・Interview Insight。",
};

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  indigo: { bg: "bg-indigo-50 dark:bg-indigo-950/30", text: "text-indigo-600 dark:text-indigo-400", border: "border-indigo-200 dark:border-indigo-800" },
  orange: { bg: "bg-orange-50 dark:bg-orange-950/30", text: "text-orange-600 dark:text-orange-400", border: "border-orange-200 dark:border-orange-800" },
  blue: { bg: "bg-blue-50 dark:bg-blue-950/30", text: "text-blue-600 dark:text-blue-400", border: "border-blue-200 dark:border-blue-800" },
  green: { bg: "bg-green-50 dark:bg-green-950/30", text: "text-green-600 dark:text-green-400", border: "border-green-200 dark:border-green-800" },
  purple: { bg: "bg-purple-50 dark:bg-purple-950/30", text: "text-purple-600 dark:text-purple-400", border: "border-purple-200 dark:border-purple-800" },
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* Breadcrumb */}
      <div className="px-4 sm:px-6 pt-4">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm text-gray-500 dark:text-gray-400 py-4">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 dark:text-white">Products</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Insight Series
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            属人化をほどくための、設計・変換・説明の基盤。
            <br className="hidden sm:block" />
            業務を部品として扱えるツール群です。
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-4 sm:px-6 pb-20">
        <div className="max-w-5xl mx-auto space-y-6">
          {products.map((product) => {
            const colors = colorMap[product.color] || colorMap.indigo;
            return (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className={`block rounded-2xl p-6 sm:p-8 transition-all hover:shadow-lg ${colors.bg} border ${colors.border} hover:border-primary-400`}
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-grow">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      {product.name}
                    </h2>
                    <p className={`text-sm ${colors.text} mb-3`}>
                      {product.tagline}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      {product.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {product.features.map((f, i) => (
                        <span key={i} className="text-xs px-2 py-1 bg-white/70 dark:bg-gray-800/70 rounded text-gray-600 dark:text-gray-400">
                          {f.title}
                        </span>
                      ))}
                    </div>
                  </div>
                  <span className={`inline-flex items-center text-sm font-medium ${colors.text} flex-shrink-0`}>
                    詳細 →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-4">
            製品について詳しく聞きたい方へ
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            導入検討・カスタマイズのご相談など、お気軽にお問い合わせください。
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            お問い合わせ
          </Link>
        </div>
      </section>
    </main>
  );
}
