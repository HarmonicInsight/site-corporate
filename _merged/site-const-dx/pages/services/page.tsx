import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "サービス | 建設DXの窓口",
  description:
    "無料DX診断から業務コンサルティング、AI-BPO、グローバル展開まで、建設業の経営課題を解決する6つのサービスを提供します。",
};

export default function ServicesPage() {
  const services = [
    {
      number: "01",
      tag: "無料",
      title: "DX診断",
      subtitle: "「保険の窓口」モデルを建設業DXに応用",
      description:
        "ほとんどのお客様は、ここからのスタートを想定しています。現状の課題を整理し、最適な打ち手を明確にします。ベンダーに相談する前に、まず「判断」を整えましょう。",
      features: [
        "現状の課題タイプを診断",
        "優先すべき施策の明確化",
        "適切なツール・ベンダーの方向性提示",
        "中立的な立場でのアドバイス",
      ],
      cta: "無料診断を受ける",
      ctaLink: "/diagnosis",
      highlight: true,
    },
    {
      number: "02",
      tag: "収益の中核",
      title: "業務コンサルティング",
      subtitle: "業務評価・DX評価・事業基盤構築・原価管理",
      description:
        "建設業の経営判断を「勘と経験」から「仕組みと数字」へ変革します。原価管理の高度化から人材育成の仕組みづくりまで、一貫してサポートします。",
      features: [
        "業務評価・DX成熟度評価",
        "事業基盤構築/人的資本・教育体系整備",
        "原価管理の仕組み構築",
        "月次管理・KPI設計",
      ],
      subServices: [
        {
          title: "原価管理の高度化",
          items: [
            "受注・案件管理の一元化",
            "実行予算管理の電子化",
            "原価・進捗のリアルタイム把握",
            "赤字予兆の早期アラート",
          ],
        },
        {
          title: "事業基盤整備",
          items: [
            "戦略（事業部戦略・投資戦略）",
            "業務基盤（プロセス・ナレッジ・ツール）",
            "業務推進能力（組織運営・PM力）",
          ],
        },
      ],
      cta: "詳しく相談する",
      ctaLink: "/contact",
      highlight: false,
    },
    {
      number: "03",
      tag: "チャレンジ",
      title: "AI-BPO",
      subtitle: "業務診断からAI適正箇所の見極め・上流設計",
      description:
        "「AIを入れたい」ではなく「何をAIに任せるべきか」から設計します。業務全体を見渡し、AI活用の適正箇所を見極め、効果的な導入を支援します。",
      features: [
        "業務プロセスの可視化・分析",
        "AI適用箇所の特定と優先順位付け",
        "上流の全体設計",
        "導入効果の試算と検証",
      ],
      cta: "詳しく相談する",
      ctaLink: "/contact",
      highlight: false,
    },
    {
      number: "04",
      tag: "グローバル",
      title: "グローバルボーダー案件",
      subtitle: "ASEAN現地の日系・ローカル展開",
      description:
        "日本で確立した建設DX×経営管理の型を、人手不足と成長が同時に進むアジア市場へ展開。現地での困り事解決から、日系ソリューションのロールアウトまで対応します。",
      features: [
        "現地の業務改善評価",
        "日系ソリューションのロールアウト",
        "現地メンバとの連携構築",
        "ローカル開発チームとの協働",
      ],
      regions: [
        "タイ",
        "ベトナム",
        "インドネシア",
        "インド",
        "中国",
        "香港",
      ],
      cta: "詳しく相談する",
      ctaLink: "/contact",
      highlight: false,
    },
    {
      number: "05",
      tag: "M&A対応",
      title: "PMI/組織改編後の運用診断",
      subtitle: "M&A後・組織再編後の業務最適化",
      description:
        "建設業のM&Aは今後も増加傾向。統合後の運用診断から、営業方針・プロセスの見直しまで、スムーズな統合と早期のシナジー創出を支援します。",
      features: [
        "統合後の業務プロセス診断",
        "営業方針・プロセスの見直し",
        "システム統合の方針策定",
        "組織文化の融合支援",
      ],
      cta: "詳しく相談する",
      ctaLink: "/contact",
      highlight: false,
    },
    {
      number: "06",
      tag: "実行支援",
      title: "PM・PMO展開",
      subtitle: "プロジェクトマネジメント支援",
      description:
        "DX推進や業務改革のプロジェクトを、PMOとして伴走支援します。計画策定から実行管理、課題解決まで、プロジェクトの成功を一緒に追求します。",
      features: [
        "プロジェクト計画策定",
        "進捗・課題管理",
        "ステークホルダー調整",
        "成果物品質管理",
      ],
      cta: "詳しく相談する",
      ctaLink: "/contact",
      highlight: false,
    },
  ];

  const strengths = [
    {
      title: "建設業・会計わかる",
      description:
        "建設業務知識・経験、建設業会計含めた業界特有の商習慣理解、建設業ネットワーク",
      keywords: ["建設業育ち", "プロジェクト多数経験", "関連書籍執筆"],
    },
    {
      title: "IT・AI作れる",
      description:
        "要件定義→設計→開発→保守、AI/ローコード/クラウド、システム開発者視点",
      keywords: ["一気通貫の実装経験", "独自の設計・実装ノウハウ"],
    },
    {
      title: "グローバル届けられる",
      description:
        "ASEAN中心の現地展開、日本→現地ロールアウト、現地→日本ロールイン",
      keywords: ["多国籍チーム開発", "オフショア開発経験"],
    },
    {
      title: "コンサルまとめられる",
      description:
        "経営・管理・現場の橋渡し、業務整理・可視化、経営層・意思決定者との折衝",
      keywords: ["大手〜中小の経営層対応", "経営から現場までの対応"],
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="py-16 md:py-24 border-b border-[var(--border)]">
        <div className="container-custom">
          <p className="text-sm tracking-widest text-[var(--gray-500)] mb-4">
            SERVICES
          </p>
          <h1 className="font-mincho text-3xl md:text-5xl font-medium text-[var(--gray-900)] mb-8 leading-tight">
            6つのサービスで、
            <br />
            建設業の変革を支援する
          </h1>
          <p className="text-[var(--gray-600)] max-w-2xl leading-relaxed">
            無料のDX診断から、業務コンサルティング、AI活用、グローバル展開まで。
            御社の状況に合わせて、最適なサービスをご提案します。
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                id={`service-${service.number}`}
                className={`scroll-mt-24 ${
                  service.highlight
                    ? "bg-[var(--gray-100)] p-8 md:p-12 border border-[var(--border)]"
                    : "border-l-2 border-[var(--gray-300)] pl-8 md:pl-12"
                }`}
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-mincho text-4xl text-[var(--gray-300)]">
                    {service.number}
                  </span>
                  <span
                    className={`text-xs tracking-wider px-3 py-1 ${
                      service.highlight
                        ? "bg-[var(--accent)] text-white"
                        : "bg-[var(--gray-200)] text-[var(--gray-600)]"
                    }`}
                  >
                    {service.tag}
                  </span>
                </div>
                <h2 className="font-mincho text-2xl md:text-3xl text-[var(--gray-900)] mb-2">
                  {service.title}
                </h2>
                <p className="text-sm text-[var(--gray-500)] mb-6">
                  {service.subtitle}
                </p>
                <p className="text-[var(--gray-600)] leading-relaxed mb-8 max-w-2xl">
                  {service.description}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h3 className="text-sm font-medium text-[var(--gray-900)] mb-4">
                      提供内容
                    </h3>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-[var(--gray-600)]"
                        >
                          <span className="text-[var(--gray-400)]">—</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.subServices && (
                    <div className="space-y-6">
                      {service.subServices.map((sub, i) => (
                        <div key={i}>
                          <h4 className="text-sm font-medium text-[var(--gray-900)] mb-3">
                            {sub.title}
                          </h4>
                          <ul className="space-y-2">
                            {sub.items.map((item, j) => (
                              <li
                                key={j}
                                className="text-xs text-[var(--gray-500)] pl-4 border-l border-[var(--gray-200)]"
                              >
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {service.regions && (
                    <div>
                      <h3 className="text-sm font-medium text-[var(--gray-900)] mb-4">
                        対応地域
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {service.regions.map((region, i) => (
                          <span
                            key={i}
                            className="text-xs border border-[var(--border)] px-3 py-1"
                          >
                            {region}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <Link
                  href={service.ctaLink}
                  className={
                    service.highlight
                      ? "btn-primary inline-block"
                      : "btn-outline inline-block"
                  }
                >
                  {service.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Strengths */}
      <section className="py-16 md:py-24 bg-[var(--gray-900)] text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <p className="text-sm tracking-widest text-[var(--gray-400)] mb-4">
              OUR STRENGTHS
            </p>
            <h2 className="font-mincho text-2xl md:text-3xl">
              4つの強みで、建設業の変革を支える
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {strengths.map((strength, index) => (
              <div
                key={index}
                className="border border-[var(--gray-700)] p-6"
              >
                <h3 className="font-medium text-white mb-3">{strength.title}</h3>
                <p className="text-sm text-[var(--gray-400)] mb-4">
                  {strength.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {strength.keywords.map((kw, i) => (
                    <span
                      key={i}
                      className="text-xs text-[var(--accent)] border border-[var(--accent)] px-2 py-1"
                    >
                      {kw}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24">
        <div className="container-custom text-center">
          <h2 className="font-mincho text-2xl md:text-3xl text-[var(--gray-900)] mb-6">
            まずは無料診断から始めませんか
          </h2>
          <p className="text-[var(--gray-600)] mb-8 max-w-xl mx-auto">
            どのサービスが適切かわからなくても大丈夫です。
            無料診断で現状を整理し、最適な打ち手を一緒に考えましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/diagnosis" className="btn-primary">
              無料診断を受ける
            </Link>
            <Link
              href="/contact"
              className="border border-[var(--gray-900)] text-[var(--gray-900)] px-8 py-4 text-sm tracking-wider hover:bg-[var(--gray-900)] hover:text-white transition-all"
            >
              相談する
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
