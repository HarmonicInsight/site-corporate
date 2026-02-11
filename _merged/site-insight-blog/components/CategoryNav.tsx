'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { categories } from '@/lib/constants';

interface CategoryNavProps {
  showAll?: boolean;
}

export default function CategoryNav({ showAll = true }: CategoryNavProps) {
  const pathname = usePathname();
  const currentCategory = pathname.split('/').pop();

  return (
    <nav className="flex flex-wrap gap-2">
      {showAll && (
        <Link
          href="/"
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
            pathname === '/'
              ? 'bg-[var(--accent)] text-white'
              : 'bg-white text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] border border-[var(--border)]'
          }`}
        >
          すべて
        </Link>
      )}
      {categories.map((category) => {
        const Icon = category.icon;
        const isActive = currentCategory === category.slug;

        return (
          <Link
            key={category.slug}
            href={`/category/${category.slug}`}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
              isActive
                ? 'bg-[var(--accent)] text-white'
                : 'bg-white text-[var(--muted)] hover:text-[var(--accent)] hover:border-[var(--accent)] border border-[var(--border)]'
            }`}
          >
            <Icon className="h-4 w-4" />
            {category.name}
          </Link>
        );
      })}
    </nav>
  );
}
