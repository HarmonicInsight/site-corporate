import type { Metadata } from "next";
import Link from "next/link";
import { products, getProductBySlug, getAllProductSlugs } from "@/data/products";

export function generateStaticParams() {
  return getAllProductSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "製品が見つかりません" };
  return {
    title: `${product.name} — ${product.tagline} | HARMONIC insight`,
    description: product.description,
  };
}

const colorMap: Record<string, { bg: string; text: string; border: string; accent: string }> = {
  indigo: { bg: "bg-indigo-50 dark:bg-indigo-950/20", text: "text-indigo-600 dark:text-indigo-400", border: "border-indigo-200 dark:border-indigo-800", accent: "bg-indigo-600" },
  orange: { bg: "bg-orange-50 dark:bg-orange-950/20", text: "text-orange-600 dark:text-orange-400", border: "border-orange-200 dark:border-orange-800", accent: "bg-orange-600" },
  blue: { bg: "bg-blue-50 dark:bg-blue-950/20", text: "text-blue-600 dark:text-blue-400", border: "border-blue-200 dark:border-blue-800", accent: "bg-blue-600" },
  green: { bg: "bg-green-50 dark:bg-green-950/20", text: "text-green-600 dark:text-green-400", border: "border-green-200 dark:border-green-800", accent: "bg-green-600" },
  purple: { bg: "bg-purple-50 dark:bg-purple-950/20", text: "text-purple-600 dark:text-purple-400", border: "border-purple-200 dark:border-purple-800", accent: "bg-purple-600" },
};

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">製品が見つかりません</h1>
          <Link href="/products" className="text-primary-600 hover:text-primary-700">製品一覧に戻る</Link>
        </div>
      </main>
    );
  }

  const colors = colorMap[product.color] || colorMap.indigo;
  const otherProducts = products.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* Breadcrumb */}
      <div className="px-4 sm:px-6 pt-4">
        <div className="max-w-4xl mx-auto">
          <nav className="text-sm text-gray-500 dark:text-gray-400 py-4">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-primary-600">Products</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 dark:text-white">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className={`px-4 sm:px-6 py-12 sm:py-16 ${colors.bg}`}>
        <div className="max-w-4xl mx-auto">
          <p className={`text-sm font-medium ${colors.text} mb-3`}>Insight Series</p>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {product.name}
          </h1>
          <p className={`text-lg ${colors.text} mb-4`}>
            {product.tagline}
          </p>
          <p className="text-gray-600 dark:text-gray-400 max-w-3xl">
            {product.description}
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 sm:px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-8">主な機能</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {product.features.map((feature, i) => (
              <div
                key={i}
                className={`rounded-xl p-6 border ${colors.border} ${colors.bg}`}
              >
                <div className={`w-8 h-8 ${colors.accent} rounded-lg flex items-center justify-center text-white text-sm font-bold mb-4`}>
                  {i + 1}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Target Users */}
      <section className="px-4 sm:px-6 py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-8">こんな方に</h2>
          <div className="space-y-3">
            {product.targetUsers.map((user, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className={`mt-1.5 w-2 h-2 rounded-full ${colors.accent} flex-shrink-0`} />
                <p className="text-gray-700 dark:text-gray-300">{user}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Products */}
      <section className="px-4 sm:px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-8">その他の製品</h2>
          <div className="grid sm:grid-cols-3 gap-4">
            {otherProducts.map((p) => {
              const c = colorMap[p.color] || colorMap.indigo;
              return (
                <Link
                  key={p.id}
                  href={`/products/${p.slug}`}
                  className={`block rounded-xl p-5 border ${c.border} ${c.bg} hover:shadow-md transition-shadow`}
                >
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">{p.name}</h3>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{p.tagline}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-6 py-16 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            {product.name}について詳しく聞く
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            導入やカスタマイズに関するご質問など、お気軽にどうぞ。
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
