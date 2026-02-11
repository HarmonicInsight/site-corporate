export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  color: string;
  features: { title: string; description: string }[];
  targetUsers: string[];
}

export const products: Product[] = [
  {
    id: "insight-bi",
    name: "Insight BI",
    slug: "insight-bi",
    tagline: "財務会計が確定する「前」に判断する、経営者ダッシュボード",
    description:
      "月次PLを待っていては遅すぎる。Insight BIは、検収・完成・進行・請求という不完全な現実の中で、経営者が「次の一手」を決めるためのダッシュボードです。プロジェクト型ビジネス（建設業・SI・コンサル）に特化。",
    color: "indigo",
    features: [
      { title: "3レイヤー売上管理", description: "会計売上・管理売上・キャッシュ売上の3層で構造的に把握。" },
      { title: "原価から着地を読む", description: "見積原価率・実績原価率から売上・粗利の着地を予測。" },
      { title: "現場と経営をつなぐ翻訳", description: "会計用語を経営判断できる言葉に翻訳。" },
    ],
    targetUsers: [
      "プロジェクト型ビジネスの経営者",
      "月次PLが遅くて判断に困っている方",
      "原価管理をコントロールしたい方",
    ],
  },
  {
    id: "forguncy-insight",
    name: "Forguncy Insight",
    slug: "forguncy-insight",
    tagline: "Forguncyアプリの設計・分析・最適化支援",
    description:
      "Forguncyで構築したアプリケーションの構造を可視化し、設計の改善点や最適化ポイントを提案。開発効率の向上とメンテナンス性の改善をサポートします。",
    color: "orange",
    features: [
      { title: "アプリ構造の可視化", description: "テーブル構造、ページ遷移、データフローを自動解析。" },
      { title: "設計改善の提案", description: "冗長なデータ構造や非効率なクエリを検出。" },
      { title: "ドキュメント自動生成", description: "仕様書やER図を自動生成。" },
    ],
    targetUsers: [
      "Forguncyでの業務アプリ開発を行う方",
      "既存Forguncyアプリの保守・改善担当者",
    ],
  },
  {
    id: "insightslides",
    name: "InsightSlides",
    slug: "insightslides",
    tagline: "PowerPoint資料の自動作成・評価・レビュー支援",
    description:
      "構造化されたデータからPowerPoint資料を自動生成し、既存資料の評価・改善提案までサポート。報告書作成や提案資料の品質向上に貢献します。",
    color: "blue",
    features: [
      { title: "スライド自動生成", description: "JSON・CSVデータから統一感のある資料を自動作成。" },
      { title: "既存資料の評価", description: "構成や視覚的バランスから改善ポイントを提示。" },
      { title: "レビューコメント自動付与", description: "AIがスライドごとにフィードバック。" },
    ],
    targetUsers: [
      "定型報告資料を作成する方",
      "提案書の品質を高めたい方",
    ],
  },
  {
    id: "insightpy",
    name: "InsightPy",
    slug: "insightpy",
    tagline: "Python実行環境とユーティリティ群",
    description:
      "業務で使うPythonスクリプトを安定して動かすための実行環境。よく使う処理をまとめたユーティリティも同梱。環境構築の手間を省き、すぐに動かせる状態を提供します。",
    color: "green",
    features: [
      { title: "すぐ動くPython環境", description: "依存関係を整理済み。すぐにスクリプトを実行できます。" },
      { title: "業務用ユーティリティ群", description: "Excel操作・PDF変換・ファイル整理など同梱。" },
      { title: "エラーログと実行履歴", description: "実行ログを自動記録。トラブルシューティングを支援。" },
    ],
    targetUsers: [
      "Python環境構築に苦労している方",
      "定期的なデータ処理を自動化したい方",
    ],
  },
  {
    id: "interview-insight",
    name: "Interview Insight",
    slug: "interview-insight",
    tagline: "AIによる自動インタビュー・業務ヒアリング",
    description:
      "音声またはテキストでの入力を受け付け、AIが対話形式でヒアリングを実施。回答内容を要約・構造化し、JSONやドキュメント形式で出力。業務ナレッジの可視化に活用できます。",
    color: "purple",
    features: [
      { title: "対話形式の自動ヒアリング", description: "事前設定した質問項目に沿ってAIが自動進行。" },
      { title: "回答の要約と構造化", description: "JSON/Markdown形式で出力。ナレッジベースに取り込み容易。" },
      { title: "音声・テキスト両対応", description: "マイクからのリアルタイムテキスト化にも対応。" },
    ],
    targetUsers: [
      "業務ヒアリングを効率化したい方",
      "現場のノウハウを記録・共有したい方",
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
