// 製品・サービスの型定義

export type ProductCategory =
  | 'saas'           // SaaS製品（売れる製品）
  | 'consulting'     // コンサルティングサービス（売れるサービス）
  | 'opensource'     // オープンソース/無料ツール（アピール用）
  | 'resources';     // リソース・ナレッジベース（アピール用）

export type ProductStatus =
  | 'available'      // 販売中
  | 'coming-soon'    // 近日公開
  | 'beta'           // ベータ版
  | 'free';          // 無料

export type PricingType =
  | 'subscription'   // サブスクリプション
  | 'one-time'       // 一括購入
  | 'contact'        // 要問い合わせ
  | 'free';          // 無料

export interface Product {
  id: string;
  name: string;
  nameJa: string;
  tagline: string;
  taglineJa: string;
  description: string;
  descriptionJa: string;
  category: ProductCategory;
  status: ProductStatus;
  pricingType: PricingType;
  price?: string;
  priceJa?: string;
  features: string[];
  featuresJa: string[];
  icon: string;
  color: string;
  gradient: string;
  href: string;
  ctaText: string;
  ctaTextJa: string;
  highlights?: string[];
  highlightsJa?: string[];
}

export interface CategoryInfo {
  id: ProductCategory;
  name: string;
  nameJa: string;
  description: string;
  descriptionJa: string;
  icon: string;
  color: string;
}
