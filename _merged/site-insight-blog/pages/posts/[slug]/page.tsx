import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { format } from 'date-fns';
import { ja } from 'date-fns/locale';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getPostBySlug, getPostSlugs, getPostsByCategory } from '@/lib/posts';
import { getCategoryBySlug, siteConfig } from '@/lib/constants';
import PostCard from '@/components/PostCard';
import TagList from '@/components/TagList';
import AmazonEmbed from '@/components/AmazonEmbed';
import AdSenseUnit from '@/components/AdSenseUnit';

interface PostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return { title: 'Not Found' };
  }

  return {
    title: post.frontmatter.title,
    description: post.frontmatter.summary,
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.summary,
      type: 'article',
      publishedTime: post.frontmatter.date,
      authors: [post.frontmatter.author],
      tags: post.frontmatter.tags,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.frontmatter.title,
      description: post.frontmatter.summary,
    },
  };
}

const mdxComponents = {
  AmazonEmbed,
};

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const { frontmatter, content } = post;
  const categoryInfo = getCategoryBySlug(frontmatter.category);
  const CategoryIcon = categoryInfo?.icon;
  const formattedDate = format(new Date(frontmatter.date), 'yyyy年MM月dd日', {
    locale: ja,
  });

  // Get related posts from the same category
  const relatedPosts = getPostsByCategory(frontmatter.category)
    .filter((p) => p.slug !== slug)
    .slice(0, 3);

  // JSON-LD structured data
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: frontmatter.title,
    description: frontmatter.summary,
    author: {
      '@type': 'Person',
      name: frontmatter.author,
    },
    datePublished: frontmatter.date,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.name,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <article className="mx-auto max-w-4xl px-4 md:px-8 py-12">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          記事一覧に戻る
        </Link>

        {/* Header */}
        <header className="mb-10">
          {/* Category */}
          <Link
            href={`/category/${frontmatter.category}`}
            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--accent)] hover:opacity-80 transition-opacity mb-4"
          >
            {CategoryIcon && <CategoryIcon className="h-4 w-4" />}
            {categoryInfo?.name || frontmatter.category}
          </Link>

          {/* Title */}
          <h1 className="text-2xl md:text-4xl font-medium mb-6 leading-tight">
            {frontmatter.title}
          </h1>

          {/* Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-[var(--muted)]">
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {formattedDate}
            </div>
            <div className="flex items-center gap-1">
              <User className="h-4 w-4" />
              {frontmatter.author}
            </div>
          </div>

          {/* Tags */}
          <div className="flex items-center gap-2 mt-4">
            <Tag className="h-4 w-4 text-[var(--muted)]" />
            <TagList tags={frontmatter.tags} />
          </div>
        </header>

        {/* Summary */}
        <div className="rounded-lg bg-[var(--accent-light)] border border-[var(--accent)]/20 p-6 mb-10">
          <p className="text-[var(--foreground-secondary)] leading-relaxed">{frontmatter.summary}</p>
        </div>

        {/* Amazon Embed if ASIN exists */}
        {frontmatter.amazon_asin && (
          <AmazonEmbed
            asin={frontmatter.amazon_asin}
            title={frontmatter.title}
          />
        )}

        {/* App Store Links */}
        {(frontmatter.app_store_url ||
          frontmatter.play_store_url ||
          frontmatter.windows_url) && (
          <div className="flex flex-wrap gap-3 mb-10">
            {frontmatter.app_store_url && (
              <a
                href={frontmatter.app_store_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-black px-4 py-2 text-white text-sm font-medium hover:opacity-80 transition-opacity"
              >
                App Store
              </a>
            )}
            {frontmatter.play_store_url && (
              <a
                href={frontmatter.play_store_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#01875f] px-4 py-2 text-white text-sm font-medium hover:opacity-80 transition-opacity"
              >
                Google Play
              </a>
            )}
            {frontmatter.windows_url && (
              <a
                href={frontmatter.windows_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#0078d4] px-4 py-2 text-white text-sm font-medium hover:opacity-80 transition-opacity"
              >
                Windows
              </a>
            )}
          </div>
        )}

        {/* Content */}
        <div className="prose max-w-none">
          <MDXRemote source={content} components={mdxComponents} />
        </div>

        {/* Ad after content */}
        <div className="my-10">
          <AdSenseUnit slot="post-content-bottom" format="horizontal" />
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="mt-16 pt-10 border-t border-[var(--border)]">
            <h2 className="text-2xl font-medium mb-8">関連記事</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <PostCard
                  key={relatedPost.slug}
                  title={relatedPost.frontmatter.title}
                  slug={relatedPost.slug}
                  category={relatedPost.frontmatter.category}
                  thumbnail={relatedPost.frontmatter.thumbnail}
                  summary={relatedPost.frontmatter.summary}
                  date={relatedPost.frontmatter.date}
                  tags={relatedPost.frontmatter.tags}
                />
              ))}
            </div>
          </section>
        )}
      </article>
    </>
  );
}
