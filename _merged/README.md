# _merged/ — 統合済みサイトコンテンツ

他のサイト系リポジトリから、法人サイト（h-insight.jp）構築に活用できるコンテンツを集約しました。
元リポジトリは削除予定のため、ここが唯一のコピーです。

---

## 構成

### 1. site-insight-series/（Insight Series 製品サイト）
- **data/** — 全製品の構造化データ（`products.ts`, `pricing.ts`, `faq.ts`, `docs.ts`）
- **pages/** — 製品ページ群（`/products/`, `/pricing/`, `/docs/`, `/about/`, `/legal/`）
- **components/** — UIコンポーネント（共通UI・レイアウト）
- **content/blog/** — ブログ記事

### 2. site-insight-portal/（アプリポータル）
- **data/products.json** — 全18+製品のカタログデータ（日英対応、story/roadmap付き）
- **components/** — ProductCard, FilterButtons, SearchBar, TagChips 等
- **messages/** — i18n メッセージ（ja.json, en.json）
- **i18n/** — next-intl 設定

### 3. site-const-dx/（建設DXの窓口サイト）
- **pages/** — 建設DX特化のコンテンツページ群:
  - `/diagnosis/` — 業務診断
  - `/training/` — 教育プログラム
  - `/accounting-challenges/` — 会計課題
  - `/management-dx/` — 管理DX
  - `/philosophy/` — 考え方
  - `/services/` — サービス
  - `/challenges/` — 課題一覧
  - `/data-classification/` — データ分類
  - `/site-efficiency/` — 現場効率化
  - `/gyomu-dock/` — 業務ドック
- **components/** — Header, Footer, RelatedSites

### 4. site-insight-blog/（ブログサイト）
- **content/posts/** — ブログ記事11本（MDX形式）:
  - `ai-requirements-design.mdx`
  - `ai-task-management-pixie.mdx`
  - `construction-cost-management-best-practices.mdx`
  - `core-system-pitfalls.mdx`
  - `development-factory-os.mdx`
  - `diagnosis-without-treatment.mdx`
  - `evaluate-ai-frameworks.mdx`
  - `hospital-model-for-construction.mdx`
  - `pixie-app-introduction.mdx`
  - `stop-worrying.mdx`
  - `three-to-two-layers.mdx`
- **components/** — Header, Footer, PostCard, SearchBox, CategoryNav 等
- **messages/** — i18n メッセージ
- **scripts/** — 記事処理スクリプト

### 5. site-product-repo-analysis/（製品マーケティング評価）
- **PRODUCT_MARKETING_REVIEW.md** — 全製品ポートフォリオのマーケ評価レポート（Claude Opus 4.5作成）
- **product-portal/** — 製品ポータルの参考実装

---

## 活用方法

1. **製品データ**: `site-insight-series/data/products.ts` と `site-insight-portal/data/products.json` が最も充実。新法人サイトの製品セクション構築時に利用。
2. **建設DXコンテンツ**: `site-const-dx/pages/` のページ群は、法人サイトの「建設DX」セクションにそのまま活用可能。
3. **ブログ記事**: `site-insight-blog/content/posts/` の11記事は、法人サイトにブログ機能を追加する際に移植可能。
4. **マーケ戦略**: `site-product-repo-analysis/PRODUCT_MARKETING_REVIEW.md` は製品戦略の参考資料。
5. **i18nデータ**: portal と blog の `messages/` には日英翻訳データがあり、多言語対応時に活用可能。

---

## 元リポジトリ（参考）

| リポジトリ | 最終更新 | Vercel URL |
|:--|:--|:--|
| site-insight-series | 2026-01-05 | insight-series-site.vercel.app |
| site-insight-portal | 2026-01-05 | h-insight-apps-portal.vercel.app |
| site-const-dx | 2026-01-05 | const-dx-home.vercel.app |
| site-insight-blog | 2026-01-25 | insight-blog-olive.vercel.app |
| site-product-repo-analysis | 2026-02-04 | repo-analysis-swart.vercel.app |
