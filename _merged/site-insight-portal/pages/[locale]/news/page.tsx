import { Metadata } from "next";
import Link from "next/link";
import { getAllProducts } from "@/lib/products";
import { getStageLabelJa } from "@/lib/products";

export const metadata: Metadata = {
  title: "ニュース",
  description: "Harmonic Insight Appsの最新情報とアップデート履歴",
};

export default function NewsPage() {
  const products = getAllProducts();

  // Sort by updatedAt descending
  const sortedProducts = [...products].sort(
    (a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
  );

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">ニュース</h1>

      <p className="text-gray-600 mb-8">
        アプリの最新情報とアップデート履歴をお知らせします。
      </p>

      <div className="space-y-4">
        {sortedProducts.map((product) => (
          <article
            key={product.slug}
            className="bg-white rounded-xl border border-gray-200 p-5 hover:shadow-sm transition-shadow"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-grow">
                <div className="flex items-center gap-2 mb-2">
                  <time
                    dateTime={product.updatedAt}
                    className="text-sm text-gray-500"
                  >
                    {product.updatedAt}
                  </time>
                  <span className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-700">
                    {getStageLabelJa(product.stage)}
                  </span>
                </div>
                <h2 className="text-lg font-semibold text-gray-900 mb-1">
                  {product.name}
                </h2>
                <p className="text-gray-600 text-sm">{product.catch}</p>
              </div>
              <Link
                href={`/p/${product.slug}`}
                className="flex-shrink-0 text-primary-600 hover:text-primary-700 text-sm font-medium"
              >
                詳細 →
              </Link>
            </div>
          </article>
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500">ニュースはまだありません。</p>
        </div>
      )}
    </div>
  );
}
