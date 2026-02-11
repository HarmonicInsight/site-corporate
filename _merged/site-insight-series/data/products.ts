export interface Product {
  id: string;
  name: string;
  slug: string;
  tagline: string;
  description: string;
  icon: string;
  color: string;
  features: {
    title: string;
    description: string;
  }[];
  targetUsers: string[];
  canDo: string[];
  cannotDo: string[];
  futureFeatures: string[];
  installSteps: {
    title: string;
    description: string;
  }[];
  faq: {
    question: string;
    answer: string;
  }[];
}

export const products: Product[] = [
  {
    id: "insight-bi",
    name: "Insight BI",
    slug: "insight-bi",
    tagline: "財務会計が確定する「前」に判断する、経営者ダッシュボード",
    description:
      "月次PLを待っていては遅すぎる。Insight BIは、検収・完成・進行・請求という不完全な現実の中で、経営者が「次の一手」を決めるためのダッシュボードです。プロジェクト型ビジネス（建設業・SI・コンサル）に特化。",
    icon: "BarChart3",
    color: "indigo",
    features: [
      {
        title: "3レイヤー売上管理",
        description:
          "売上を1つの数字に決めず、会計売上（確定）・管理売上（意思決定用）・キャッシュ売上（資金繰り用）の3層で構造的に把握します。",
      },
      {
        title: "原価から着地を読む",
        description:
          "管理会計の本質は「原価はコントロール対象」。見積原価率・最新見積原価率・実績原価率から、売上・粗利の着地を予測します。",
      },
      {
        title: "現場と経営をつなぐ翻訳",
        description:
          "「未成工事支出金が増加」→「この案件、原価が暴れている」。会計用語を経営判断できる言葉に翻訳します。",
      },
    ],
    targetUsers: [
      "建設業・SI・コンサルなどプロジェクト型ビジネスの経営者",
      "月次PLが遅くて判断に困っている方",
      "原価管理を「結果」ではなく「コントロール」したい方",
      "財務会計と管理会計の断絶に悩んでいる方",
    ],
    canDo: [
      "3レイヤー（会計・管理・キャッシュ）での売上・利益把握",
      "9つのKPIによる目標達成判断",
      "原価率の変化から着地売上・粗利を予測",
      "CSV取込による簡単なデータ連携",
      "AIによるデータマッピング提案",
    ],
    cannotDo: [
      "財務会計の仕訳作成・会計処理",
      "リアルタイムの基幹システム連携（CSV取込が前提）",
      "汎用的なBI機能（特化型のため）",
      "会計監査対応の帳票出力",
    ],
    futureFeatures: [
      "案件別アラート機能",
      "予実差異の自動分析",
      "複数事業部の統合ビュー",
    ],
    installSteps: [
      {
        title: "CSVをアップロード",
        description:
          "会計・営業管理からエクスポートしたCSVをそのままアップロード。",
      },
      {
        title: "自動でデータ変換",
        description:
          "独自ETLエンジンが整形。AIがマッピングを提案し、手間を最小化。",
      },
      {
        title: "判断に使う",
        description:
          "3レイヤー × 9 KPIで即座に状況把握。意思決定に集中できます。",
      },
    ],
    faq: [
      {
        question: "どのような業種に向いていますか？",
        answer:
          "建設業、システム開発・SI、コンサルティング、エンジニアリングなど、プロジェクト型ビジネス全般に対応しています。",
      },
      {
        question: "既存の会計ソフトとの連携は？",
        answer:
          "CSV形式でのデータ取込に対応しています。特定の会計ソフトへの依存はなく、柔軟に連携可能です。",
      },
      {
        question: "導入にどのくらい時間がかかりますか？",
        answer:
          "CSVをアップロードするだけで基本的な分析が始められます。初期設定は導入サポートで支援します。",
      },
    ],
  },
  {
    id: "forguncy-insight",
    name: "Forguncy Insight",
    slug: "forguncy-insight",
    tagline: "Forguncyアプリの設計・分析・最適化支援",
    description:
      "Forguncyで構築したアプリケーションの構造を可視化し、設計の改善点や最適化ポイントを提案。開発効率の向上とメンテナンス性の改善をサポートします。",
    icon: "Database",
    color: "orange",
    features: [
      {
        title: "アプリ構造の可視化",
        description:
          "Forguncyアプリのテーブル構造、ページ遷移、データフローを自動で解析し、視覚的に表示します。",
      },
      {
        title: "設計改善の提案",
        description:
          "冗長なデータ構造や非効率なクエリを検出し、パフォーマンス改善のための具体的な提案を行います。",
      },
      {
        title: "ドキュメント自動生成",
        description:
          "アプリの仕様書やER図を自動生成。引き継ぎやチーム開発に必要なドキュメントを効率的に作成します。",
      },
    ],
    targetUsers: [
      "Forguncyでの業務アプリ開発を行う方",
      "既存Forguncyアプリの保守・改善を担当する方",
      "Forguncyアプリの設計品質を向上させたい方",
      "チームでForguncyアプリを開発・運用する組織",
    ],
    canDo: [
      "Forguncyアプリのテーブル・ページ構造の解析",
      "データフローとページ遷移の可視化",
      "設計上の問題点の検出と改善提案",
      "仕様書・ER図の自動生成",
      "アプリ間の依存関係の分析",
    ],
    cannotDo: [
      "Forguncy以外のローコードツールへの対応",
      "アプリの自動修正・自動リファクタリング",
      "実行時のパフォーマンス監視",
      "Forguncyライセンスの提供",
    ],
    futureFeatures: [
      "バージョン間の差分比較",
      "セキュリティチェック機能",
      "チーム向けレビュー機能",
    ],
    installSteps: [
      {
        title: "ダウンロード",
        description:
          "購入後、ダウンロードリンクからツールを取得してください。",
      },
      {
        title: "Forguncyプロジェクト読み込み",
        description:
          "解析対象のForguncyプロジェクトファイルを指定します。",
      },
      {
        title: "解析実行",
        description:
          "解析ボタンを押すと、構造分析と改善提案が自動で生成されます。",
      },
    ],
    faq: [
      {
        question: "対応しているForguncyのバージョンは？",
        answer:
          "Forguncy 8以降に対応しています。それ以前のバージョンについてはお問い合わせください。",
      },
      {
        question: "解析結果はどのような形式で出力されますか？",
        answer:
          "PDF形式の仕様書、PNG/SVG形式のER図、JSON形式の構造データとして出力可能です。",
      },
      {
        question: "複数のアプリを一括で解析できますか？",
        answer:
          "はい。フォルダ指定で複数プロジェクトの一括解析が可能です。",
      },
    ],
  },
  {
    id: "insightslides",
    name: "InsightSlides",
    slug: "insightslides",
    tagline: "PowerPoint資料の自動作成・評価・レビュー支援",
    description:
      "構造化されたデータからPowerPoint資料を自動生成し、既存資料の評価・改善提案までサポート。報告書作成や提案資料の品質向上に貢献します。",
    icon: "Presentation",
    color: "blue",
    features: [
      {
        title: "構造データからスライド自動生成",
        description:
          "JSON・CSV形式のデータをもとに、PowerPoint資料を自動作成。テンプレートに沿った統一感のある資料が作れます。",
      },
      {
        title: "既存資料の評価・改善提案",
        description:
          "アップロードしたPowerPointを解析し、構成や視覚的なバランス、文章量などの観点から改善ポイントを提示します。",
      },
      {
        title: "レビューコメントの自動付与",
        description:
          "AIによるレビューコメントをスライドごとに付与。チーム内でのフィードバック効率を向上させます。",
      },
    ],
    targetUsers: [
      "毎週・毎月の定型報告資料を作成する方",
      "提案書やプレゼン資料の品質を高めたい方",
      "チームで資料レビューを効率化したい方",
      "PowerPoint作成に時間がかかりすぎている方",
    ],
    canDo: [
      "構造化データ（JSON/CSV）からのスライド自動生成",
      "テンプレートに沿ったフォーマット統一",
      "既存PowerPointの構成分析と評価スコア算出",
      "スライドごとの改善提案コメント生成",
      "レビューフローの自動化支援",
    ],
    cannotDo: [
      "非構造化データ（散文・議事録など）からの自動生成",
      "デザイン性の高いグラフィック作成",
      "音声やアニメーションの自動付与",
      "機密情報を含む外部API連携（ローカル完結を推奨）",
    ],
    futureFeatures: [
      "テンプレートライブラリの拡充",
      "スライド間の整合性チェック強化",
      "チームでの共同レビュー機能",
    ],
    installSteps: [
      {
        title: "ダウンロード",
        description:
          "購入後、ダウンロードリンクからzipファイルを取得してください。",
      },
      {
        title: "セットアップ",
        description:
          "解凍後、READMEに従って必要な依存関係をインストールします。",
      },
      {
        title: "初回実行",
        description:
          "サンプルデータで動作確認し、自身のテンプレートを登録してください。",
      },
    ],
    faq: [
      {
        question: "Macでも使えますか？",
        answer:
          "現在はWindows環境を主な動作対象としています。Mac対応は今後の開発ロードマップに含まれています。",
      },
      {
        question: "既存のテンプレートは使えますか？",
        answer:
          "はい。お手持ちのPowerPointテンプレートをベースに出力することが可能です。",
      },
      {
        question: "データの形式に制限はありますか？",
        answer:
          "JSON形式またはCSV形式に対応しています。詳細な形式はドキュメントをご確認ください。",
      },
    ],
  },
  {
    id: "insightpy",
    name: "InsightPy",
    slug: "insightpy",
    tagline: "Python実行環境とユーティリティ群",
    description:
      "業務で使うPythonスクリプトを安定して動かすための実行環境。よく使う処理をまとめたユーティリティも同梱。環境構築の手間を省き、すぐに動かせる状態を提供します。",
    icon: "Terminal",
    color: "green",
    features: [
      {
        title: "すぐ動くPython環境",
        description:
          "依存関係を整理済みの実行環境を提供。pipやvenvのトラブルに悩まされることなく、スクリプトをすぐに実行できます。",
      },
      {
        title: "業務用ユーティリティ群",
        description:
          "Excel操作・PDF変換・ファイル整理など、業務でよく使う処理をまとめたライブラリを同梱しています。",
      },
      {
        title: "エラーログと実行履歴",
        description:
          "実行ログを自動記録。エラー発生時の原因特定やトラブルシューティングを支援します。",
      },
    ],
    targetUsers: [
      "Pythonスクリプトを業務で使いたいが環境構築に苦労している方",
      "定期的なデータ処理を自動化したい方",
      "Excel・PDFなどの定型作業を効率化したい方",
      "非エンジニアでもスクリプトを動かしたい現場の方",
    ],
    canDo: [
      "依存関係を解決済みのPython実行環境の提供",
      "Excel/PDF/CSVなどの一括処理",
      "ファイル・フォルダの自動整理",
      "実行ログの自動記録と確認",
      "コマンドライン/GUIからの実行",
    ],
    cannotDo: [
      "大規模データ処理やビッグデータ分析",
      "Webアプリケーション開発",
      "リアルタイム処理やストリーミング",
      "Python以外の言語のサポート",
    ],
    futureFeatures: [
      "スケジューラ機能（定期実行）",
      "GUIランチャー",
      "処理テンプレートの追加",
    ],
    installSteps: [
      {
        title: "ダウンロード",
        description:
          "購入後にダウンロードリンクが届きます。zipを任意の場所に展開してください。",
      },
      {
        title: "初期設定",
        description:
          "setup.batを実行するだけで環境が整います。追加インストールは不要です。",
      },
      {
        title: "スクリプト実行",
        description:
          "run.batまたはコマンドラインから、同梱のサンプルを実行してみてください。",
      },
    ],
    faq: [
      {
        question: "Pythonの知識がなくても使えますか？",
        answer:
          "基本的な操作はコマンド1つで完了します。カスタマイズにはPythonの基礎知識があると便利です。",
      },
      {
        question: "既存のPython環境と干渉しますか？",
        answer:
          "いいえ。独立した仮想環境として動作するため、既存環境への影響はありません。",
      },
      {
        question: "どんな処理ができますか？",
        answer:
          "Excel操作、PDF変換、ファイル一括リネーム、データ形式変換など、業務でよく使う処理を同梱しています。",
      },
    ],
  },
  {
    id: "interview-insight",
    name: "Interview Insight",
    slug: "interview-insight",
    tagline: "AIによる自動インタビュー・業務ヒアリング",
    description:
      "音声またはテキストでの入力を受け付け、AIが対話形式でヒアリングを実施。回答内容を要約・構造化し、JSONやドキュメント形式で出力。業務ナレッジの可視化に活用できます。",
    icon: "MessageSquare",
    color: "purple",
    features: [
      {
        title: "対話形式の自動ヒアリング",
        description:
          "事前に設定した質問項目に沿って、AIが自動でインタビューを進行。回答に応じた追加質問も行います。",
      },
      {
        title: "回答の要約と構造化",
        description:
          "インタビュー内容を自動で要約し、JSON形式やMarkdown形式で出力。ナレッジベースへの取り込みが容易です。",
      },
      {
        title: "音声・テキスト両対応",
        description:
          "音声入力にも対応しており、マイクからの回答をリアルタイムでテキスト化。移動中や現場でも利用可能です。",
      },
    ],
    targetUsers: [
      "業務ヒアリングや引き継ぎを効率化したい方",
      "現場のノウハウを記録・共有したい方",
      "インタビュー調査を定期的に行うリサーチャー",
      "ドキュメント化されていない知見を可視化したい組織",
    ],
    canDo: [
      "事前設定した質問に基づく自動インタビュー",
      "回答内容の自動要約",
      "JSON/Markdown/テキスト形式での出力",
      "音声入力からのリアルタイムテキスト化",
      "インタビュー履歴の管理",
    ],
    cannotDo: [
      "高度な感情分析や心理評価",
      "リアルタイム翻訳・多言語対応（日本語のみ）",
      "ビデオ通話やカメラ連携",
      "完全自動の質問生成（事前設定が必要）",
    ],
    futureFeatures: [
      "質問テンプレートのライブラリ化",
      "複数人インタビューへの対応",
      "ナレッジベースとの直接連携",
    ],
    installSteps: [
      {
        title: "アプリ起動",
        description:
          "ダウンロード後、アプリを起動し初期設定を行います。APIキーの設定が必要な場合があります。",
      },
      {
        title: "質問項目の設定",
        description:
          "ヒアリングしたい内容に合わせて、質問テンプレートを作成または選択します。",
      },
      {
        title: "インタビュー開始",
        description:
          "開始ボタンを押すとAIがインタビューを開始。終了後に結果をエクスポートできます。",
      },
    ],
    faq: [
      {
        question: "インタビュー内容はどこに保存されますか？",
        answer:
          "ローカル環境に保存されます。クラウドへの送信はユーザーが明示的にエクスポートした場合のみです。",
      },
      {
        question: "質問項目は自由にカスタマイズできますか？",
        answer:
          "はい。テンプレートとして保存し、繰り返し利用することもできます。",
      },
      {
        question: "音声認識の精度はどの程度ですか？",
        answer:
          "標準的な日本語であれば高精度で認識します。専門用語が多い場合は辞書登録機能もあります。",
      },
    ],
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getAllProductSlugs(): string[] {
  return products.map((p) => p.slug);
}
