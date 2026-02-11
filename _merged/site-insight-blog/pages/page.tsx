import PostCard from '@/components/PostCard';
import CategoryNav from '@/components/CategoryNav';
import { getAllPosts, getFeaturedPosts } from '@/lib/posts';
import { siteConfig } from '@/lib/constants';

export default function Home() {
  const allPosts = getAllPosts();
  const featuredPosts = getFeaturedPosts();
  const regularPosts = allPosts.filter((post) => !post.frontmatter.featured);

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[var(--gray-900)] text-white py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4 md:px-8 text-center">
          <h1 className="text-3xl md:text-5xl font-medium mb-6">
            {siteConfig.name}
          </h1>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
            {siteConfig.description}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-4 md:px-8 py-16">
        {/* Category Navigation */}
        <section className="mb-12">
          <CategoryNav />
        </section>

        {/* Featured Posts */}
        {featuredPosts.length > 0 && (
          <section className="mb-16">
            <h2 className="text-2xl md:text-3xl font-medium mb-8">注目の記事</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {featuredPosts.map((post) => (
                <PostCard
                  key={post.slug}
                  title={post.frontmatter.title}
                  slug={post.slug}
                  category={post.frontmatter.category}
                  thumbnail={post.frontmatter.thumbnail}
                  summary={post.frontmatter.summary}
                  date={post.frontmatter.date}
                  tags={post.frontmatter.tags}
                  featured={true}
                />
              ))}
            </div>
          </section>
        )}

        {/* Latest Posts */}
        <section>
          <h2 className="text-2xl md:text-3xl font-medium mb-8">最新の記事</h2>
          {allPosts.length === 0 ? (
            <div className="text-center py-16 text-[var(--muted)] bg-[var(--gray-100)] rounded-lg">
              <p>まだ記事がありません。</p>
              <p className="mt-2 text-sm">content/posts/ フォルダにMDXファイルを追加してください。</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(featuredPosts.length > 0 ? regularPosts : allPosts).map((post) => (
                <PostCard
                  key={post.slug}
                  title={post.frontmatter.title}
                  slug={post.slug}
                  category={post.frontmatter.category}
                  thumbnail={post.frontmatter.thumbnail}
                  summary={post.frontmatter.summary}
                  date={post.frontmatter.date}
                  tags={post.frontmatter.tags}
                />
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
}
