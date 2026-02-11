import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Smartphone } from 'lucide-react';
import { getPostsByCategory } from '@/lib/posts';
import PostCard from '@/components/PostCard';

export const metadata: Metadata = {
  title: 'アプリ紹介',
  description: '開発したアプリの紹介',
};

export default function AppsPage() {
  const posts = getPostsByCategory('apps');

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
        <div className="flex items-center gap-3 mb-2">
          <Smartphone className="h-8 w-8 text-[var(--accent)]" />
          <h1 className="text-3xl md:text-4xl font-bold">アプリ紹介</h1>
        </div>
        <p className="text-[var(--muted)]">開発したアプリの紹介</p>
        <p className="text-sm text-[var(--muted)] mt-2">
          {posts.length}件の記事
        </p>
      </header>

      {/* Posts */}
      {posts.length === 0 ? (
        <div className="text-center py-12 text-[var(--muted)]">
          <p>まだアプリ紹介の記事がありません。</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
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
      )}
    </div>
  );
}
