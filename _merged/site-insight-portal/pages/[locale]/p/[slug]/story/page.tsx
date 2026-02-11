import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllSlugs, getProductBySlug } from "@/lib/products";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "アプリが見つかりません",
    };
  }

  return {
    title: `${product.name}に込めた思い`,
    description: `${product.name}の開発背景や、どんな方に使ってほしいかをご紹介します。`,
  };
}

interface StorySectionProps {
  title: string;
  content?: string;
}

function StorySection({ title, content }: StorySectionProps) {
  if (!content) return null;

  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-gray-900 mb-3">{title}</h2>
      <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{content}</p>
    </section>
  );
}

export default async function StoryPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const { story } = product;

  if (!story) {
    notFound();
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="mb-6">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-primary-600">
              Apps
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href={`/p/${product.slug}`} className="hover:text-primary-600">
              {product.name}
            </Link>
          </li>
          <li>/</li>
          <li className="text-gray-900 font-medium">思い</li>
        </ol>
      </nav>

      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
            {product.name}に込めた思い
          </h1>
          <p className="text-gray-600">{product.catch}</p>
        </div>

        <StorySection title="なぜこのアプリを作ったのか" content={story.why} />
        <StorySection title="誰に使ってほしいか" content={story.forWho} />
        <StorySection title="開発の哲学" content={story.philosophy} />
        <StorySection title="今後の展望" content={story.roadmap} />

        {/* Back Link */}
        <div className="mt-10 pt-6 border-t border-gray-200">
          <Link
            href={`/p/${product.slug}`}
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium"
          >
            <svg
              className="mr-1 w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            {product.name}の詳細に戻る
          </Link>
        </div>
      </div>
    </div>
  );
}
