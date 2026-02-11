export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

export const generalFAQ: FAQItem[] = [
  {
    question: "Insightシリーズとは何ですか？",
    answer:
      "業務の効率化・自動化を支援するソフトウェア群です。資料作成、Python実行環境、インタビュー自動化など、それぞれ独立した製品として提供しています。",
    category: "general",
  },
  {
    question: "どのような業種で使われていますか？",
    answer:
      "製造業、建設業、コンサルティング、IT企業など、幅広い業種でご利用いただいています。定型業務の効率化が必要な場面であれば、業種を問わず活用できます。",
    category: "general",
  },
  {
    question: "無料で試すことはできますか？",
    answer:
      "現在、無料トライアル版の提供は行っておりません。ご購入前にご不明点があれば、お問い合わせフォームよりご連絡ください。",
    category: "general",
  },
  {
    question: "サポートはありますか？",
    answer:
      "メールでのサポートを提供しています。法人ライセンスをご契約の場合は、優先対応や導入支援も含まれます。",
    category: "support",
  },
  {
    question: "返金は可能ですか？",
    answer:
      "デジタル製品のため、原則として購入後の返金はお受けしておりません。ご不明点は購入前にお問い合わせください。",
    category: "payment",
  },
  {
    question: "法人での導入を検討しています。見積もりは可能ですか？",
    answer:
      "はい、ユーザー数や利用形態に応じてお見積りいたします。お問い合わせフォームより「法人導入相談」とご連絡ください。",
    category: "business",
  },
  {
    question: "複数の製品を組み合わせて使えますか？",
    answer:
      "はい、各製品は独立して動作しますが、組み合わせて利用することでより効果的な業務改善が可能です。セット割引についてはお問い合わせください。",
    category: "general",
  },
  {
    question: "インストール方法がわかりません",
    answer:
      "各製品のDocsページに詳しいインストール手順を記載しています。それでも解決しない場合はサポートまでご連絡ください。",
    category: "support",
  },
];

export const productFAQ: Record<string, FAQItem[]> = {
  insightslides: [
    {
      question: "対応しているPowerPointのバージョンは？",
      answer:
        "Microsoft PowerPoint 2016以降を推奨しています。Microsoft 365にも対応しています。",
    },
    {
      question: "Googleスライドには対応していますか？",
      answer:
        "現在はPowerPoint形式（.pptx）のみ対応しています。出力したファイルはGoogleスライドでインポート可能です。",
    },
  ],
  insightpy: [
    {
      question: "Pythonの特定バージョンは必要ですか？",
      answer:
        "同梱のPython環境を使用するため、別途インストールは不要です。Python 3.11をベースとしています。",
    },
    {
      question: "自分でスクリプトを追加できますか？",
      answer:
        "はい、scriptsフォルダに独自のスクリプトを配置して実行できます。依存関係の追加方法はドキュメントをご確認ください。",
    },
  ],
  "interview-insight": [
    {
      question: "オフラインでも使えますか？",
      answer:
        "音声認識とAI処理にはインターネット接続が必要です。テキスト入力モードであればオフラインでも一部機能が利用可能です。",
    },
    {
      question: "インタビュー結果をチームで共有できますか？",
      answer:
        "JSON・Markdown形式でエクスポートできるため、社内のナレッジ管理ツールやドキュメント共有サービスで共有可能です。",
    },
  ],
};

export function getFAQByCategory(category: string): FAQItem[] {
  return generalFAQ.filter((item) => item.category === category);
}
