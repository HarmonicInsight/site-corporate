import Link from 'next/link';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
  size?: 'small' | 'medium' | 'large';
}

export default function ProductCard({ product, size = 'medium' }: ProductCardProps) {
  const isLarge = size === 'large';
  const isSmall = size === 'small';

  return (
    <Link
      href={product.href}
      className={`group relative block overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-xl transition-all duration-300 ${
        isLarge ? 'p-8' : isSmall ? 'p-4' : 'p-6'
      }`}
    >
      {/* Highlights / Badges */}
      {product.highlightsJa && product.highlightsJa.length > 0 && (
        <div className="absolute top-4 right-4 flex gap-2">
          {product.highlightsJa.map((highlight, index) => (
            <span
              key={index}
              className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                highlight === 'ベータ版' || highlight === 'Beta'
                  ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200'
                  : highlight === '新着' || highlight === 'New'
                  ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                  : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
              }`}
            >
              {highlight}
            </span>
          ))}
        </div>
      )}

      {/* Icon */}
      <div
        className={`${product.gradient} ${
          isLarge ? 'w-16 h-16 text-3xl' : isSmall ? 'w-10 h-10 text-lg' : 'w-14 h-14 text-2xl'
        } rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        <span role="img" aria-label={product.name}>
          {product.icon}
        </span>
      </div>

      {/* Content */}
      <h3
        className={`font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors ${
          isLarge ? 'text-2xl' : isSmall ? 'text-base' : 'text-xl'
        }`}
      >
        {product.nameJa}
      </h3>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{product.name}</p>

      <p
        className={`text-gray-600 dark:text-gray-300 mb-4 ${
          isLarge ? 'text-base' : 'text-sm'
        } line-clamp-2`}
      >
        {product.taglineJa}
      </p>

      {/* Price or Status */}
      <div className="flex items-center justify-between">
        <span
          className={`font-semibold ${
            product.pricingType === 'free'
              ? 'text-green-600 dark:text-green-400'
              : product.pricingType === 'contact'
              ? 'text-purple-600 dark:text-purple-400'
              : 'text-blue-600 dark:text-blue-400'
          }`}
        >
          {product.pricingType === 'free'
            ? '無料'
            : product.pricingType === 'contact'
            ? '要お問い合わせ'
            : product.priceJa}
        </span>

        {/* Status Badge */}
        <span
          className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
            product.status === 'available'
              ? 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300'
              : product.status === 'beta'
              ? 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300'
              : product.status === 'free'
              ? 'bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300'
              : 'bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300'
          }`}
        >
          {product.status === 'available'
            ? '提供中'
            : product.status === 'beta'
            ? 'ベータ'
            : product.status === 'free'
            ? '無料'
            : '近日公開'}
        </span>
      </div>

      {/* Hover Arrow */}
      <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <svg
          className="w-6 h-6 text-blue-600 dark:text-blue-400"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 8l4 4m0 0l-4 4m4-4H3"
          />
        </svg>
      </div>
    </Link>
  );
}
