'use client';

import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import { getCategoryBySlug } from '@/lib/constants';

interface PostCardProps {
  title: string;
  slug: string;
  category: string;
  thumbnail: string;
  summary: string;
  date: string;
  tags: string[];
  featured?: boolean;
}

export default function PostCard({
  title,
  slug,
  category,
  thumbnail,
  summary,
  date,
  tags,
  featured,
}: PostCardProps) {
  const categoryInfo = getCategoryBySlug(category);
  const CategoryIcon = categoryInfo?.icon;
  const formattedDate = format(new Date(date), 'yyyy.MM.dd', { locale: ja });

  const defaultThumbnail = `/images/generated/${slug}.png`;
  const imageSrc = thumbnail || defaultThumbnail;

  return (
    <Link href={`/posts/${slug}`} className="group block">
      <article
        className={`relative overflow-hidden rounded-lg border transition-all duration-200 ${
          featured
            ? 'border-2 border-[var(--accent)] bg-[var(--card-hover)]'
            : 'border-[var(--border)] bg-white hover:border-[var(--accent)]'
        }`}
      >
        {/* Thumbnail */}
        <div className="relative aspect-video overflow-hidden bg-[var(--gray-100)]">
          {thumbnail ? (
            <Image
              src={imageSrc}
              alt={title}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gradient-to-br from-white to-[var(--gray-100)]">
              {CategoryIcon && (
                <CategoryIcon className="h-12 w-12 text-[var(--muted)]" />
              )}
            </div>
          )}
          {featured && (
            <div className="absolute top-3 right-3 rounded bg-[var(--accent)] px-2.5 py-1 text-xs font-medium text-white">
              注目
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Category Badge */}
          <div className="flex items-center gap-2 mb-3">
            {CategoryIcon && (
              <CategoryIcon className="h-4 w-4 text-[var(--accent)]" />
            )}
            <span className="text-xs font-medium text-[var(--accent)]">
              {categoryInfo?.name || category}
            </span>
            <span className="text-xs text-[var(--muted)]">{formattedDate}</span>
          </div>

          {/* Title */}
          <h3 className="font-medium text-lg mb-2 line-clamp-2 text-[var(--foreground)] group-hover:text-[var(--accent)] transition-colors">
            {title}
          </h3>

          {/* Summary */}
          <p className="text-sm text-[var(--muted)] line-clamp-2 mb-4 leading-relaxed">
            {summary}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-[var(--gray-100)] px-2.5 py-0.5 text-xs text-[var(--muted)]"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
