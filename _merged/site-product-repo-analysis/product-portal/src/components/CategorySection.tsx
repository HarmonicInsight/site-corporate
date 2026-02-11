import Link from 'next/link';
import { Product, CategoryInfo } from '@/types';
import ProductCard from './ProductCard';

interface CategorySectionProps {
  category: CategoryInfo;
  products: Product[];
  showViewAll?: boolean;
}

const categoryColors: Record<string, string> = {
  blue: 'from-blue-500 to-cyan-500',
  purple: 'from-purple-500 to-pink-500',
  green: 'from-green-500 to-emerald-500',
  orange: 'from-orange-500 to-amber-500',
};

const categoryBgColors: Record<string, string> = {
  blue: 'bg-blue-50 dark:bg-blue-950/30',
  purple: 'bg-purple-50 dark:bg-purple-950/30',
  green: 'bg-green-50 dark:bg-green-950/30',
  orange: 'bg-orange-50 dark:bg-orange-950/30',
};

export default function CategorySection({
  category,
  products,
  showViewAll = true,
}: CategorySectionProps) {
  const gradientColor = categoryColors[category.color] || categoryColors.blue;
  const bgColor = categoryBgColors[category.color] || categoryBgColors.blue;

  return (
    <section className={`py-16 ${bgColor}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span
                className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${gradientColor} text-2xl`}
              >
                {category.icon}
              </span>
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
                  {category.nameJa}
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400">{category.name}</p>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-2xl">
              {category.descriptionJa}
            </p>
          </div>

          {showViewAll && (
            <Link
              href={`/${category.id === 'consulting' ? 'services' : category.id}`}
              className="mt-4 sm:mt-0 inline-flex items-center text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
            >
              すべて見る
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
          )}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
