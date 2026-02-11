import {
  BookOpen,
  Smartphone,
  Database,
  Briefcase,
  Search,
  Cpu,
  PenLine,
  LucideIcon,
} from 'lucide-react';

export const siteConfig = {
  name: 'InsightBlog',
  description: '業務を「構造」から考える。建設DX・業務設計の知見を発信。',
  url: 'https://insight-blog.vercel.app',
  author: {
    name: 'Erik',
    bio: 'Harmonic Insight LLC共同経営者。著書30冊以上。スマホアプリ・Windowsアプリ開発者。建設業DXコンサルタント（28年の経験、700社以上支援）。基幹システムの業務分析手法に精通。',
  },
  social: {
    twitter: '',
    github: '',
  },
  amazonAssociateId: '',
  adsenseId: '',
};

export interface Category {
  slug: string;
  name: string;
  icon: LucideIcon;
  description: string;
}

export const categories: Category[] = [
  { slug: 'books', name: '書籍紹介', icon: BookOpen, description: '著書やおすすめ書籍の紹介' },
  { slug: 'apps', name: 'アプリ紹介', icon: Smartphone, description: '開発したアプリの紹介' },
  { slug: 'core-systems', name: '基幹システム', icon: Database, description: '基幹システム導入・活用のノウハウ' },
  { slug: 'consulting', name: 'コンサルティング', icon: Briefcase, description: 'DXコンサルティングの知見' },
  { slug: 'research', name: 'リサーチ', icon: Search, description: '業界動向やリサーチ結果' },
  { slug: 'ai', name: 'AI活用', icon: Cpu, description: 'AI・生成AIの活用方法' },
  { slug: 'column', name: 'コラム', icon: PenLine, description: '日々の気づきや考察' },
];

export const getCategoryBySlug = (slug: string): Category | undefined => {
  return categories.find((cat) => cat.slug === slug);
};

// Top navigation bar (company-wide links)
export const topNavigation = [
  { name: 'Harmonic Insight', href: 'https://harmonic-insight.com', external: true },
  { name: 'Home', href: 'https://harmonic-insight.com', external: true },
  { name: '建設DX', href: 'https://const-dx-home.vercel.app', external: true },
  { name: 'Insight Series', href: '/books' },
  { name: 'Apps/Lab', href: '/apps' },
  { name: 'Dashboard', href: 'https://insight-bi-ruby.vercel.app/', external: true },
  { name: 'Blog', href: '/' },
];

// Secondary navigation (page-level links for this site)
export const secondaryNavigation = [
  { name: 'ホーム', href: '/' },
  { name: '書籍', href: '/books' },
  { name: 'アプリ', href: '/apps' },
  { name: 'コンサル', href: '/category/consulting' },
  { name: '基幹システム', href: '/category/core-systems' },
  { name: 'コラム', href: '/category/column' },
  { name: 'About', href: '/about' },
];

// Main navigation (page-level)
export const navigation = [
  { name: 'ホーム', href: '/' },
  { name: '書籍', href: '/books' },
  { name: 'アプリ', href: '/apps' },
  { name: 'About', href: '/about' },
];
