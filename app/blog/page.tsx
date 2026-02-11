import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "ブログ | Harmonic Insight",
  description: "Harmonic Insight のブログ。業務設計・建設DX・AI活用に関する知見を発信しています。",
};

const categoryColors: Record<string, string> = {
  "AI活用": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
  "建設DX": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "業務設計": "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400",
  "プロダクト": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
};

export default function BlogPage() {
  const categories = [...new Set(blogPosts.map((p) => p.category))];

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950">
      {/* Breadcrumb */}
      <div className="px-4 sm:px-6 pt-4">
        <div className="max-w-5xl mx-auto">
          <nav className="text-sm text-gray-500 dark:text-gray-400 py-4">
            <Link href="/" className="hover:text-primary-600">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-900 dark:text-white">Blog</span>
          </nav>
        </div>
      </div>

      {/* Hero */}
      <section className="px-4 sm:px-6 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            ブログ
          </h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            業務設計・建設DX・AI活用に関する知見を発信しています。
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 sm:px-6 pb-4">
        <div className="max-w-5xl mx-auto flex flex-wrap gap-2 justify-center">
          {categories.map((cat) => (
            <span
              key={cat}
              className={`text-xs px-3 py-1.5 rounded-full font-medium ${categoryColors[cat] || "bg-gray-100 text-gray-700"}`}
            >
              {cat}
            </span>
          ))}
        </div>
      </section>

      {/* Posts */}
      <section className="px-4 sm:px-6 py-8 pb-20">
        <div className="max-w-5xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <article
                key={post.slug}
                className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:border-primary-400 dark:hover:border-primary-500 transition-colors"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${categoryColors[post.category] || "bg-gray-100 text-gray-700"}`}>
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">{post.date}</span>
                </div>
                <h2 className="text-base font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h2>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {post.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
