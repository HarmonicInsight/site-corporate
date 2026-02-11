import { Metadata } from 'next';
import { Suspense } from 'react';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import SearchBox from '@/components/SearchBox';
import PostCard from '@/components/PostCard';
import { searchPosts } from '@/lib/posts';

export const metadata: Metadata = {
  title: '検索',
  description: '記事を検索',
};

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

function SearchResults({ query }: { query: string }) {
  const results = query ? searchPosts(query) : [];

  if (!query) {
    return (
      <div className="text-center py-12 text-[var(--muted)]">
        <p>キーワードを入力して検索してください。</p>
      </div>
    );
  }

  if (results.length === 0) {
    return (
      <div className="text-center py-12 text-[var(--muted)]">
        <p>&ldquo;{query}&rdquo; に一致する記事が見つかりませんでした。</p>
        <p className="mt-2 text-sm">別のキーワードで検索してみてください。</p>
      </div>
    );
  }

  return (
    <>
      <p className="text-[var(--muted)] mb-6">
        &ldquo;{query}&rdquo; の検索結果: {results.length}件
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((post) => (
          <PostCard
            key={post.slug}
            title={post.frontmatter.title}
            slug={post.slug}
            category={post.frontmatter.category}
            thumbnail={post.frontmatter.thumbnail}
            summary={post.frontmatter.summary}
            date={post.frontmatter.date}
            tags={post.frontmatter.tags}
            featured={post.frontmatter.featured}
          />
        ))}
      </div>
    </>
  );
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q } = await searchParams;
  const query = q || '';

  return (
    <div className="mx-auto max-w-6xl px-4 py-8">
      {/* Back Link */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--foreground)] transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        ホームに戻る
      </Link>

      {/* Header */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">検索</h1>
        <Suspense fallback={<div className="h-14 bg-[var(--card)] rounded-lg animate-pulse" />}>
          <SearchBox className="max-w-2xl" />
        </Suspense>
      </header>

      {/* Results */}
      <SearchResults query={query} />
    </div>
  );
}
