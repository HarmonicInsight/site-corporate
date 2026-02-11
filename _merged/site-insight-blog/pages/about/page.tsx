import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, BookOpen, Smartphone, Database, Briefcase } from 'lucide-react';
import { siteConfig } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About',
  description: 'プロフィール',
};

export default function AboutPage() {
  const achievements = [
    {
      icon: BookOpen,
      title: '著書30冊以上',
      description: 'IT・ビジネス関連書籍を多数執筆',
    },
    {
      icon: Smartphone,
      title: 'アプリ開発',
      description: 'スマホアプリ・Windowsアプリを開発',
    },
    {
      icon: Database,
      title: '基幹システム',
      description: '100社以上の導入支援実績',
    },
    {
      icon: Briefcase,
      title: 'DXコンサルティング',
      description: '28年の建設業DX支援経験',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[var(--gray-900)] text-white py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 md:px-8 text-center">
          <div className="w-24 h-24 rounded-full bg-[var(--accent)] mx-auto mb-6 flex items-center justify-center text-3xl font-medium text-white">
            E
          </div>
          <h1 className="text-3xl md:text-4xl font-medium mb-4">
            {siteConfig.author.name}
          </h1>
          <p className="text-gray-300">Harmonic Insight LLC 共同経営者</p>
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-4 md:px-8 py-16">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          ホームに戻る
        </Link>

        {/* Bio */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-medium mb-6">プロフィール</h2>
          <div className="rounded-lg bg-white border border-[var(--border)] p-8">
            <p className="text-[var(--foreground-secondary)] leading-relaxed">
              {siteConfig.author.bio}
            </p>
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-medium mb-8">実績</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-lg bg-white border border-[var(--border)] p-6 flex items-start gap-4 hover:border-[var(--accent)] transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--accent-light)] flex items-center justify-center">
                    <Icon className="h-6 w-6 text-[var(--accent)]" />
                  </div>
                  <div>
                    <h3 className="font-medium mb-1 text-[var(--foreground)]">{item.title}</h3>
                    <p className="text-sm text-[var(--muted)]">{item.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* About This Site */}
        <section className="bg-[var(--background-secondary)] -mx-4 md:-mx-8 px-4 md:px-8 py-16">
          <h2 className="text-2xl md:text-3xl font-medium mb-6">このサイトについて</h2>
          <div className="rounded-lg bg-white border border-[var(--border)] p-8">
            <p className="text-[var(--foreground-secondary)] leading-relaxed mb-4">
              {siteConfig.name}は、生成AI時代のコンテンツ量産型ブログサイトです。
              書籍紹介、アプリ紹介、基幹システム、コンサルティング、リサーチ、AI活用、コラムなど、
              幅広いトピックについて発信しています。
            </p>
            <p className="text-[var(--foreground-secondary)] leading-relaxed">
              このサイトはNext.js、Tailwind CSS、MDXで構築されています。
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
