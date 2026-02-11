"use client";

export default function SiteEfficiencyPage() {
  const conventionalProblems = [
    {
      title: "分析偏重",
      description:
        "アンケート、ヒアリング、測定調査に膨大な時間と費用を投入するが、得られるのは「レポート」であり「結果」ではない",
    },
    {
      title: "現場負担の増加",
      description:
        "忙しい現場にアンケート回答やヒアリング対応を求め、本来の業務を圧迫",
    },
    {
      title: "表面的な改善",
      description:
        "「会議を減らす」「タブレットを導入する」等の施策は、根本原因（意思決定の遅延、承認プロセスの複雑さ）に対処していない",
    },
    {
      title: "コンサル依存",
      description:
        "多年度にわたる継続支援を前提とした設計。自走できる仕組みになっていない",
    },
  ];

  const decisionBoxExamples = [
    {
      category: "材料発注",
      current: "所長→支店→本社の3段階承認",
      improved: "金額基準による権限委譲（100万円以下は所長決裁）",
      effect: "承認待ち時間：平均3日→0.5日",
    },
    {
      category: "設計変更",
      current: "都度稟議",
      improved: "変更カテゴリ別の事前承認枠設定",
      effect: "稟議作成時間：月20時間→5時間",
    },
    {
      category: "協力会社選定",
      current: "毎回比較検討",
      improved: "認定協力会社リストからの選定は所長判断",
      effect: "選定プロセス：5日→1日",
    },
  ];

  const workCategories = [
    {
      type: "価値創造",
      examples: "品質管理判断、安全巡回、協力会社との技術協議、顧客対応",
      action: "時間を確保・拡充（現場力の源泉）",
      color: "var(--accent)",
    },
    {
      type: "非価値創造",
      examples: "書類作成、データ入力、承認待ち、会議参加（情報伝達のみ）",
      action: "削除・自動化・集約化",
      color: "var(--gray-500)",
    },
    {
      type: "必要悪",
      examples: "法定書類、行政手続き、検査対応準備",
      action: "標準化・テンプレート化で最小化",
      color: "var(--gray-400)",
    },
  ];

  const workflowDeletions = [
    {
      title: "日報の二重入力廃止",
      description: "現場システムと本社システムの統合により、1回の入力で完結",
    },
    {
      title: "定例会議の廃止",
      description:
        "情報共有目的の会議は非同期コミュニケーション（チャット・動画）に置換",
    },
    {
      title: "押印プロセスの電子化",
      description: "電子署名の導入により、物理的な書類回覧を廃止",
    },
    {
      title: "検査記録の自動生成",
      description: "写真撮影と同時にメタデータから帳票を自動作成",
    },
  ];

  const technologies = [
    {
      name: "生成AI",
      usage: "定型文書の自動作成、議事録生成、報告書ドラフト",
      reduction: "書類作成時間の80%削減",
    },
    {
      name: "IoTセンサー",
      usage: "作業進捗の自動計測、安全監視の自動化",
      reduction: "巡回・目視確認時間の50%削減",
    },
    {
      name: "クラウド統合",
      usage: "単一データソース化、リアルタイム情報共有",
      reduction: "データ転記・二重入力の100%削減",
    },
    {
      name: "RPA",
      usage: "定型業務の自動実行、システム間連携",
      reduction: "事務作業時間の70%削減",
    },
  ];

  const phases = [
    {
      number: "01",
      title: "診断・設計",
      duration: "4週間",
      items: [
        "現行の意思決定フロー・承認プロセスの可視化",
        "業務のFactorization（価値創造/非価値創造の分類）",
        "削除・簡素化対象の特定と優先順位付け",
        "新ワークフロー設計",
      ],
    },
    {
      number: "02",
      title: "パイロット実施",
      duration: "8週間",
      items: [
        "選定現場（2〜3現場）での新プロセス試行",
        "権限委譲マトリクスの実運用テスト",
        "テクノロジーツールの導入・調整",
        "効果測定と課題抽出",
      ],
    },
    {
      number: "03",
      title: "全社展開",
      duration: "12週間",
      items: [
        "パイロット結果に基づく改善・最適化",
        "全現場への段階的展開",
        "管理職・現場責任者向け研修",
        "モニタリング体制の構築",
      ],
    },
  ];

  const expectedResults = [
    { metric: "月間時間外労働時間", current: "80時間/人", target: "45時間/人以下" },
    { metric: "承認プロセス所要時間", current: "平均3日", target: "平均0.5日" },
    { metric: "書類作成時間", current: "1日2時間", target: "1日30分" },
    { metric: "会議時間", current: "週10時間", target: "週3時間" },
    { metric: "価値創造業務への時間配分", current: "40%", target: "70%以上" },
  ];

  const comparison = [
    {
      item: "アプローチ",
      conventional: "業務を効率化する",
      ours: "業務自体を無くす",
    },
    {
      item: "対象",
      conventional: "現場業務の改善",
      ours: "意思決定構造・ワークフローの変革",
    },
    {
      item: "期間",
      conventional: "16週間で「計画」完了",
      ours: "24週間で「実行・定着」完了",
    },
    {
      item: "成果物",
      conventional: "レポート・提言書",
      ours: "実稼働する新プロセス",
    },
    {
      item: "自走性",
      conventional: "継続的なコンサル支援が必要",
      ours: "自社で継続改善可能な仕組み",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-40 pb-20 md:pt-48 md:pb-28 bg-[var(--gray-50)]">
        <div className="container-custom">
          <div className="max-w-4xl">
            <p className="text-xs tracking-[0.3em] text-[var(--gray-500)] mb-4 uppercase">
              Site Work Efficiency
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-light text-[var(--gray-900)] leading-tight mb-6">
              建設現場の労働時間削減
            </h1>
            <p className="text-lg md:text-xl text-[var(--gray-600)] leading-relaxed mb-8">
              構造的アプローチによる抜本的改革提案
            </p>
            <div className="p-6 bg-white border-l-4 border-[var(--accent)]">
              <p className="text-base text-[var(--gray-700)] leading-relaxed">
                建設業界の労働時間削減は、現場レベルの業務改善だけでは限界があります。
                <strong>意思決定構造の簡素化</strong>、
                <strong>ワークフローの根本的再設計</strong>、そして
                <strong>テクノロジーの戦略的活用</strong>
                を組み合わせた「構造的アプローチ」により、持続可能な労働時間削減を実現します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Message */}
      <section className="py-16 bg-[var(--gray-900)]">
        <div className="container-custom">
          <p className="text-center text-xl md:text-2xl text-white font-light leading-relaxed max-w-4xl mx-auto">
            従来型コンサルティング（分析→計画→実行）との根本的な違いは、
            <br className="hidden md:block" />
            <span className="text-[var(--accent)]">
              「業務を改善する」のではなく「業務自体を無くす」発想
            </span>
            にあります。
          </p>
        </div>
      </section>

      {/* Section 1: Problems with Conventional Approach */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs tracking-[0.3em] text-[var(--gray-500)] mb-3 uppercase">
              Problem
            </p>
            <h2 className="text-2xl md:text-3xl font-light text-[var(--gray-900)] mb-4">
              従来アプローチの問題点
            </h2>
            <p className="text-[var(--gray-600)] mb-12">
              多くのコンサルティングファームが提案する「現場業務の効率化」アプローチには、以下の構造的限界があります。
            </p>

            <div className="grid gap-6">
              {conventionalProblems.map((problem, index) => (
                <div
                  key={index}
                  className="p-6 border border-[var(--border)] hover:border-[var(--gray-300)] transition-colors"
                >
                  <h3 className="text-lg font-medium text-[var(--gray-900)] mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-[var(--gray-600)] text-sm leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Three Pillars */}
      <section className="py-20 md:py-28 bg-[var(--gray-50)]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs tracking-[0.3em] text-[var(--gray-500)] mb-3 uppercase">
              Approach
            </p>
            <h2 className="text-2xl md:text-3xl font-light text-[var(--gray-900)] mb-4">
              構造的アプローチ：3つの柱
            </h2>
            <p className="text-[var(--gray-600)] mb-6">
              本提案は、
              <strong>「3ゼロ原則」（時間ゼロ・労力ゼロ・ミスゼロ）</strong>
              に基づき、業務の根本的な再設計を行います。
            </p>
          </div>
        </div>
      </section>

      {/* Pillar 1: Decision Structure */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl font-light text-[var(--accent)]">01</span>
              <div>
                <h3 className="text-xl md:text-2xl font-light text-[var(--gray-900)]">
                  意思決定構造の簡素化
                </h3>
                <p className="text-sm text-[var(--gray-500)]">
                  「意思決定Box」の削除
                </p>
              </div>
            </div>

            <p className="text-[var(--gray-600)] mb-8">
              現在の建設現場では、軽微な判断事項でも複数の承認プロセスを経る必要があります。
              この「意思決定Box」を分析し、不要なものを削除します。
            </p>

            <div className="space-y-4 mb-12">
              {decisionBoxExamples.map((example, index) => (
                <div
                  key={index}
                  className="grid md:grid-cols-4 gap-4 p-6 bg-[var(--gray-50)] border border-[var(--border)]"
                >
                  <div>
                    <p className="text-xs text-[var(--gray-500)] mb-1">カテゴリ</p>
                    <p className="font-medium text-[var(--gray-900)]">
                      {example.category}
                    </p>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--gray-500)] mb-1">現状</p>
                    <p className="text-sm text-[var(--gray-600)]">{example.current}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--gray-500)] mb-1">改善後</p>
                    <p className="text-sm text-[var(--gray-700)]">{example.improved}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[var(--gray-500)] mb-1">削減効果</p>
                    <p className="text-sm font-medium text-[var(--accent)]">
                      {example.effect}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-6 border-l-4 border-[var(--accent)] bg-[var(--gray-50)]">
              <h4 className="font-medium text-[var(--gray-900)] mb-2">
                権限委譲マトリクスの設計
              </h4>
              <p className="text-sm text-[var(--gray-600)]">
                「誰が何をどこまで決められるか」を明確化し、現場の自律的判断を促進します。
                判断基準を金額・影響範囲・緊急度で定量化することで、「念のため確認」という非効率を排除します。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 2: Workflow Redesign */}
      <section className="py-20 md:py-28 bg-[var(--gray-50)]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl font-light text-[var(--accent)]">02</span>
              <div>
                <h3 className="text-xl md:text-2xl font-light text-[var(--gray-900)]">
                  ワークフローの根本的再設計
                </h3>
                <p className="text-sm text-[var(--gray-500)]">
                  Factorization（業務の因数分解）
                </p>
              </div>
            </div>

            <p className="text-[var(--gray-600)] mb-8">
              すべての業務を「価値創造」と「非価値創造」に分解し、非価値創造業務を徹底的に削減・自動化します。
            </p>

            <div className="space-y-4 mb-12">
              {workCategories.map((category, index) => (
                <div
                  key={index}
                  className="p-6 bg-white border border-[var(--border)]"
                  style={{ borderLeftColor: category.color, borderLeftWidth: "4px" }}
                >
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <p
                        className="font-medium text-lg"
                        style={{ color: category.color }}
                      >
                        {category.type}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--gray-500)] mb-1">具体例</p>
                      <p className="text-sm text-[var(--gray-600)]">
                        {category.examples}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-[var(--gray-500)] mb-1">アクション</p>
                      <p className="text-sm text-[var(--gray-700)]">
                        {category.action}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <h4 className="text-lg font-medium text-[var(--gray-900)] mb-6">
              ワークフロー削除の具体例
            </h4>
            <div className="grid md:grid-cols-2 gap-4">
              {workflowDeletions.map((item, index) => (
                <div key={index} className="p-5 bg-white border border-[var(--border)]">
                  <h5 className="font-medium text-[var(--gray-900)] mb-2">
                    {item.title}
                  </h5>
                  <p className="text-sm text-[var(--gray-600)]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pillar 3: Technology */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-8">
              <span className="text-4xl font-light text-[var(--accent)]">03</span>
              <div>
                <h3 className="text-xl md:text-2xl font-light text-[var(--gray-900)]">
                  テクノロジーの戦略的活用
                </h3>
                <p className="text-sm text-[var(--gray-500)]">
                  「業務効率化」ではなく「業務削除」のために
                </p>
              </div>
            </div>

            <p className="text-[var(--gray-600)] mb-8">
              テクノロジーは「業務効率化」ではなく
              <strong>「業務削除」</strong>
              のために活用します。ツール導入が目的化しないよう、明確なROI基準を設定します。
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              {technologies.map((tech, index) => (
                <div
                  key={index}
                  className="p-6 border border-[var(--border)] hover:border-[var(--gray-300)] transition-colors"
                >
                  <h4 className="font-medium text-[var(--gray-900)] mb-3">
                    {tech.name}
                  </h4>
                  <p className="text-sm text-[var(--gray-600)] mb-3">{tech.usage}</p>
                  <p className="text-sm font-medium text-[var(--accent)]">
                    {tech.reduction}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Execution Plan */}
      <section className="py-20 md:py-28 bg-[var(--gray-50)]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs tracking-[0.3em] text-[var(--gray-500)] mb-3 uppercase">
              Execution Plan
            </p>
            <h2 className="text-2xl md:text-3xl font-light text-[var(--gray-900)] mb-12">
              実行計画
            </h2>

            <div className="space-y-8">
              {phases.map((phase) => (
                <div
                  key={phase.number}
                  className="grid md:grid-cols-[120px_1fr] gap-6 p-6 bg-white border border-[var(--border)]"
                >
                  <div>
                    <span className="text-3xl font-light text-[var(--accent)]">
                      {phase.number}
                    </span>
                    <p className="text-sm text-[var(--gray-500)] mt-1">
                      {phase.duration}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-lg font-medium text-[var(--gray-900)] mb-4">
                      {phase.title}
                    </h4>
                    <ul className="space-y-2">
                      {phase.items.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-[var(--gray-600)] flex items-start gap-2"
                        >
                          <span className="text-[var(--accent)] mt-1">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 4: Expected Results */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs tracking-[0.3em] text-[var(--gray-500)] mb-3 uppercase">
              Expected Results
            </p>
            <h2 className="text-2xl md:text-3xl font-light text-[var(--gray-900)] mb-12">
              期待される効果
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-[var(--gray-900)]">
                    <th className="text-left py-4 text-sm font-medium text-[var(--gray-900)]">
                      指標
                    </th>
                    <th className="text-left py-4 text-sm font-medium text-[var(--gray-500)]">
                      現状
                    </th>
                    <th className="text-left py-4 text-sm font-medium text-[var(--accent)]">
                      目標
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {expectedResults.map((result, index) => (
                    <tr key={index} className="border-b border-[var(--border)]">
                      <td className="py-4 text-sm text-[var(--gray-900)]">
                        {result.metric}
                      </td>
                      <td className="py-4 text-sm text-[var(--gray-500)]">
                        {result.current}
                      </td>
                      <td className="py-4 text-sm font-medium text-[var(--accent)]">
                        {result.target}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Comparison */}
      <section className="py-20 md:py-28 bg-[var(--gray-50)]">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs tracking-[0.3em] text-[var(--gray-500)] mb-3 uppercase">
              Comparison
            </p>
            <h2 className="text-2xl md:text-3xl font-light text-[var(--gray-900)] mb-12">
              従来アプローチとの比較
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="border-b-2 border-[var(--gray-900)]">
                    <th className="text-left py-4 px-4 text-sm font-medium text-[var(--gray-900)]">
                      項目
                    </th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-[var(--gray-500)]">
                      従来型コンサル
                    </th>
                    <th className="text-left py-4 px-4 text-sm font-medium text-[var(--accent)]">
                      本提案
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, index) => (
                    <tr key={index} className="border-b border-[var(--border)]">
                      <td className="py-4 px-4 text-sm font-medium text-[var(--gray-900)]">
                        {row.item}
                      </td>
                      <td className="py-4 px-4 text-sm text-[var(--gray-500)]">
                        {row.conventional}
                      </td>
                      <td className="py-4 px-4 text-sm font-medium text-[var(--gray-700)]">
                        {row.ours}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <section className="py-20 md:py-28 bg-[var(--gray-900)]">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-light text-white mb-8">
              結論
            </h2>
            <p className="text-lg text-white/80 leading-relaxed mb-8">
              建設現場の労働時間削減は、「もっと効率的に働く」ことではなく、
              <span className="text-[var(--accent)] font-medium">
                「不要な業務を無くす」
              </span>
              ことで実現します。
            </p>

            <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 mb-12">
              <div className="text-white/60 text-sm">
                <span className="text-[var(--accent)]">1</span> 意思決定Boxの削除
              </div>
              <div className="text-white/60 text-sm">
                <span className="text-[var(--accent)]">2</span>{" "}
                ワークフローの根本的再設計
              </div>
              <div className="text-white/60 text-sm">
                <span className="text-[var(--accent)]">3</span>{" "}
                テクノロジーの戦略的活用
              </div>
            </div>

            <p className="text-lg text-white/90 leading-relaxed mb-12">
              この3つの柱により、現場職員が本来の価値創造業務に集中できる環境を構築します。
            </p>

            <div className="p-6 border border-white/20">
              <p className="text-white font-light text-lg">
                これは単なる「働き方改革」ではなく、
                <br className="hidden md:block" />
                <span className="text-[var(--accent)]">
                  建設業の生産システムそのものの変革
                </span>
                です。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-light text-[var(--gray-900)] mb-6">
              お問い合わせ
            </h2>
            <p className="text-[var(--gray-600)] mb-8">
              本提案に関するご質問・ご相談はお気軽にお問い合わせください。
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[var(--gray-900)] text-white px-8 py-4 text-sm tracking-wider hover:bg-[var(--gray-800)] transition-colors"
            >
              お問い合わせ
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
