export interface PricingPlan {
  productId: string;
  productName: string;
  plans: {
    type: "personal" | "business";
    name: string;
    price: string;
    priceNote?: string;
    features: string[];
    recommended?: boolean;
    checkoutEnvKey: string;
  }[];
}

export const pricingData: PricingPlan[] = [
  {
    productId: "insight-bi",
    productName: "Insight BI",
    plans: [
      {
        type: "personal",
        name: "スタンダード",
        price: "¥50,000",
        priceNote: "月額（税別）",
        features: [
          "経営者ダッシュボード",
          "3レイヤー売上管理",
          "9つのKPI自動算出",
          "CSV取込（無制限）",
          "AIマッピング提案",
          "導入サポート",
        ],
        checkoutEnvKey: "NEXT_PUBLIC_CHECKOUT_INSIGHT_BI",
      },
      {
        type: "business",
        name: "エンタープライズ",
        price: "お見積り",
        priceNote: "ユーザー数・機能に応じて",
        features: [
          "スタンダードの全機能",
          "複数事業部対応",
          "カスタムKPI設定",
          "API連携",
          "優先サポート",
          "専任コンサルタント",
        ],
        recommended: true,
        checkoutEnvKey: "",
      },
    ],
  },
  {
    productId: "forguncy-insight",
    productName: "Forguncy Insight",
    plans: [
      {
        type: "personal",
        name: "個人ライセンス",
        price: "¥19,800",
        priceNote: "買い切り",
        features: [
          "1台のPCで利用可能",
          "構造解析・ER図出力",
          "仕様書自動生成",
          "メールサポート",
          "アップデート1年間無料",
        ],
        checkoutEnvKey: "NEXT_PUBLIC_CHECKOUT_FORGUNCY_INSIGHT",
      },
      {
        type: "business",
        name: "法人ライセンス",
        price: "お見積り",
        priceNote: "ユーザー数に応じて",
        features: [
          "複数台での利用可能",
          "一括解析機能",
          "カスタムレポート対応",
          "優先サポート",
          "導入支援あり",
          "請求書払い対応",
        ],
        recommended: true,
        checkoutEnvKey: "",
      },
    ],
  },
  {
    productId: "insightslides",
    productName: "InsightSlides",
    plans: [
      {
        type: "personal",
        name: "個人ライセンス",
        price: "¥9,800",
        priceNote: "買い切り",
        features: [
          "1台のPCで利用可能",
          "基本テンプレート付属",
          "メールサポート",
          "アップデート1年間無料",
        ],
        checkoutEnvKey: "NEXT_PUBLIC_CHECKOUT_INSIGHTSLIDES",
      },
      {
        type: "business",
        name: "法人ライセンス",
        price: "お見積り",
        priceNote: "ユーザー数に応じて",
        features: [
          "複数台での利用可能",
          "カスタムテンプレート対応",
          "優先サポート",
          "導入支援あり",
          "請求書払い対応",
        ],
        recommended: true,
        checkoutEnvKey: "",
      },
    ],
  },
  {
    productId: "insightpy",
    productName: "InsightPy",
    plans: [
      {
        type: "personal",
        name: "個人ライセンス",
        price: "¥4,980",
        priceNote: "買い切り",
        features: [
          "1台のPCで利用可能",
          "基本ユーティリティ全て同梱",
          "ドキュメント・サンプル付き",
          "メールサポート",
        ],
        checkoutEnvKey: "NEXT_PUBLIC_CHECKOUT_INSIGHTPY",
      },
      {
        type: "business",
        name: "法人ライセンス",
        price: "お見積り",
        priceNote: "ユーザー数に応じて",
        features: [
          "複数台での利用可能",
          "カスタム処理の追加開発",
          "優先サポート",
          "導入支援あり",
        ],
        recommended: true,
        checkoutEnvKey: "",
      },
    ],
  },
  {
    productId: "interview-insight",
    productName: "Interview Insight",
    plans: [
      {
        type: "personal",
        name: "個人ライセンス",
        price: "¥14,800",
        priceNote: "買い切り",
        features: [
          "1台のPCで利用可能",
          "基本質問テンプレート付属",
          "音声入力対応",
          "メールサポート",
        ],
        checkoutEnvKey: "NEXT_PUBLIC_CHECKOUT_INTERVIEW_INSIGHT",
      },
      {
        type: "business",
        name: "法人ライセンス",
        price: "お見積り",
        priceNote: "ユーザー数に応じて",
        features: [
          "複数台での利用可能",
          "カスタム質問テンプレート作成支援",
          "ナレッジ連携サポート",
          "優先サポート",
          "導入研修あり",
        ],
        recommended: true,
        checkoutEnvKey: "",
      },
    ],
  },
];

export function getPricingByProductId(
  productId: string
): PricingPlan | undefined {
  return pricingData.find((p) => p.productId === productId);
}
