export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "ai-requirements-design",
    title: "AI時代の要件定義 — 曖昧さを構造に変える技術",
    description: "AIを活用した要件定義プロセスの改善手法。従来の曖昧な要件を構造化データに変換するアプローチを解説。",
    category: "AI活用",
    date: "2026-01",
  },
  {
    slug: "ai-task-management-pixie",
    title: "AIタスク管理「Pixie」— タスクを部品として設計する",
    description: "AIが業務タスクを自動分解・構造化。属人的なタスク管理からの脱却を支援するPixieの設計思想。",
    category: "プロダクト",
    date: "2026-01",
  },
  {
    slug: "construction-cost-management-best-practices",
    title: "建設業の原価管理ベストプラクティス",
    description: "プロジェクト型ビジネスにおける原価管理の考え方と実践。3レイヤー管理の導入事例。",
    category: "建設DX",
    date: "2026-01",
  },
  {
    slug: "core-system-pitfalls",
    title: "基幹システム導入の落とし穴",
    description: "基幹システム導入プロジェクトでよくある失敗パターンと、それを回避するための設計アプローチ。",
    category: "業務設計",
    date: "2025-12",
  },
  {
    slug: "development-factory-os",
    title: "開発を工場のように回す「Factory OS」",
    description: "ソフトウェア開発プロセスを製造業の視点で再設計。再現可能な開発体制の構築手法。",
    category: "業務設計",
    date: "2025-12",
  },
  {
    slug: "diagnosis-without-treatment",
    title: "診断だけして終わるDX — 治療なき診断の問題",
    description: "DX診断レポートが棚上げされる構造的な原因と、診断→実行を一気通貫で設計するアプローチ。",
    category: "建設DX",
    date: "2025-11",
  },
  {
    slug: "evaluate-ai-frameworks",
    title: "AI導入フレームワークの評価基準",
    description: "企業がAIフレームワークを選定する際の評価軸と、業務適用における判断ポイント。",
    category: "AI活用",
    date: "2025-11",
  },
  {
    slug: "hospital-model-for-construction",
    title: "建設業に「病院モデル」を適用する",
    description: "建設業の業務課題を医療モデルで分析。診断→治療→予防の3ステップによる業務改善フレームワーク。",
    category: "建設DX",
    date: "2025-10",
  },
  {
    slug: "pixie-app-introduction",
    title: "Pixie App — AIアシスタントの新しい形",
    description: "日常業務を支援するAIアシスタントPixieの紹介。タスク管理から意思決定支援まで。",
    category: "プロダクト",
    date: "2025-10",
  },
  {
    slug: "stop-worrying",
    title: "「心配すること」をやめる — 仕組みで解決する業務不安",
    description: "業務の属人化が生む心理的負担を、構造設計によって解消するアプローチ。",
    category: "業務設計",
    date: "2025-09",
  },
  {
    slug: "three-to-two-layers",
    title: "3層から2層へ — 管理構造のシンプル化",
    description: "過剰な管理階層が業務を遅くする。3層構造を2層に再設計することで得られる効率化の実例。",
    category: "業務設計",
    date: "2025-09",
  },
];
