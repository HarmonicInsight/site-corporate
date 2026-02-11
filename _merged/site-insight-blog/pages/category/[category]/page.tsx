import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getPostsByCategory } from '@/lib/posts';
import { categories, getCategoryBySlug } from '@/lib/constants';
import PostCard from '@/components/PostCard';
import CategoryNav from '@/components/CategoryNav';

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return categories.map((cat) => ({ category: cat.slug }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const categoryInfo = getCategoryBySlug(category);

  if (!categoryInfo) {
    return { title: 'Not Found' };
  }

  return {
    title: categoryInfo.name,
    description: categoryInfo.description,
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const categoryInfo = getCategoryBySlug(category);

  if (!categoryInfo) {
    notFound();
  }

  const posts = getPostsByCategory(category);
  const CategoryIcon = categoryInfo.icon;

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

      {/* Category Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-2">
          <CategoryIcon className="h-8 w-8 text-[var(--accent)]" />
          <h1 className="text-3xl md:text-4xl font-bold">{categoryInfo.name}</h1>
        </div>
        <p className="text-[var(--muted)]">{categoryInfo.description}</p>
        <p className="text-sm text-[var(--muted)] mt-2">
          {posts.length}件の記事
        </p>
      </header>

      {/* Category Navigation */}
      <section className="mb-8">
        <CategoryNav />
      </section>

      {/* Posts */}
      {posts.length === 0 ? (
        <div className="text-center py-12 text-[var(--muted)]">
          <p>このカテゴリにはまだ記事がありません。</p>
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
