import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllSlugs,
  getProductBySlug,
  getCoverImage,
  getPlatformLabel,
  getStageLabelJa,
} from "@/lib/products";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "アプリが見つかりません",
    };
  }

  return {
    title: product.name,
    description: product.description,
    openGraph: {
      title: product.name,
      description: product.description,
      images: product.cover ? [product.cover] : undefined,
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const coverImage = getCoverImage(product);
  const description = product.longDescription || product.description;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-primary-600">
              Apps
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-900 font-medium">{product.name}</li>
        </ol>
      </nav>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
        {/* Hero Image */}
        <div className="relative aspect-video bg-gray-100">
          <Image
            src={coverImage}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600">{product.catch}</p>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {product.platforms.map((platform) => (
                <span
                  key={platform}
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-800"
                >
                  {getPlatformLabel(platform)}
                </span>
              ))}
              <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-800">
                {getStageLabelJa(product.stage)}
              </span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-6">
            {product.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <div className="prose prose-gray max-w-none mb-8">
            <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
              {description}
            </p>
          </div>

          {/* Screenshots */}
          {product.screens && product.screens.length > 0 && (
            <div className="mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                スクリーンショット
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {product.screens.map((screen, index) => (
                  <div
                    key={index}
                    className="relative aspect-[9/16] bg-gray-100 rounded-lg overflow-hidden"
                  >
                    <Image
                      src={screen}
                      alt={`${product.name} スクリーンショット ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Links */}
          <div className="flex flex-wrap gap-3 mb-8">
            {product.links.googlePlay && (
              <a
                href={product.links.googlePlay}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
              >
                Google Playで見る
              </a>
            )}
            {product.links.testFlight && (
              <a
                href={product.links.testFlight}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                TestFlightで試す
              </a>
            )}
            {product.links.appStore && (
              <a
                href={product.links.appStore}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors font-medium"
              >
                App Storeで見る
              </a>
            )}
            {product.links.download && (
              <a
                href={product.links.download}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                ダウンロード
              </a>
            )}
            {product.links.github && (
              <a
                href={product.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                GitHub
              </a>
            )}
          </div>

          {/* Story Link */}
          {product.story && (
            <div className="bg-gray-50 rounded-xl p-6 mb-8">
              <h2 className="text-lg font-semibold text-gray-900 mb-2">
                このアプリに込めた思い
              </h2>
              <p className="text-gray-600 mb-4">
                開発の背景や、どんな方に使ってほしいかをご紹介します。
              </p>
              <Link
                href={`/p/${product.slug}/story`}
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
              >
                思いを読む
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </div>
          )}

          {/* Meta Info */}
          <div className="border-t border-gray-200 pt-6">
            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div>
                <dt className="text-gray-500">最終更新</dt>
                <dd className="mt-1 text-gray-900">{product.updatedAt}</dd>
              </div>
              <div>
                <dt className="text-gray-500">対応プラットフォーム</dt>
                <dd className="mt-1 text-gray-900">
                  {product.platforms.map((p) => getPlatformLabel(p)).join(", ")}
                </dd>
              </div>
            </dl>
          </div>

          {/* Support Link */}
          <div className="mt-8 text-center">
            <Link
              href="/support"
              className="text-sm text-gray-500 hover:text-primary-600"
            >
              お問い合わせ・よくある質問はこちら
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
