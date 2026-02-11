import Link from "next/link";

export default function ManagementDXPage() {
  const problemCards = [
    {
      icon: "📊",
      title: "結局Excelに戻ってしまう",
      description:
        "原価管理システムを導入したのに、使いづらくて結局Excelで管理している。",
    },
    {
      icon: "⏰",
      title: "月末まで数字がわからない",
      description:
        "今月の原価がいくらか、月末の締めが終わるまでわからない。手遅れになる。",
    },
    {
      icon: "🤷",
      title: "ダッシュボードを見ても判断できない",
      description:
        "数字は出ているが、それが良いのか悪いのか、何をすべきかわからない。",
    },
  ];

  const challenges = [
    {
      number: "01",
      title: "実績と見込みの混同",
      problem: [
        "「実績」と「見込み」を区別せずにシステム設計している",
        "どのデータが正しいかわからなくなる",
        "結果、誰もデータを信用しない",
      ],
      solution: [
        "実績（発生原価）→ 基幹システムから自動取得。人間は触らない。",
        "見込み（着地予測）→ 現場が判断して入力。いつでも更新可。",
      ],
    },
    {
      number: "02",
      title: "財務会計と管理会計の混同",
      problem: [
        "財務会計の数字をそのままダッシュボードに出している",
        "確定した過去の数字しか見えない",
        "経営判断に必要な「未来の予測」がない",
      ],
      solution: [
        "財務会計 → 過去を確定する仕組み（正確さ重視）",
        "管理会計 → 未来を予測する仕組み（早さ重視）",
        "経営ダッシュボードは「管理会計」であるべき",
      ],
    },
    {
      number: "03",
      title: "入力者と責任者の不一致",
      problem: [
        "基幹から来るはずのデータを、なぜか手入力している",
        "現場しか知らない見込みを、経理が入力しようとしている",
        "「誰が」「何を」入れるか決まっていない",
      ],
      solution: [
        "各データ項目の「入力者」を明確に定義",
        "基幹連携できるものは自動化",
        "現場判断が必要なものだけ手入力",
      ],
    },
  ];

  const dataClassification = [
    {
      category: "実績",
      nature: "発生した事実",
      inputBy: "システム（自動）",
      timing: "日次/月次",
      examples: "発生原価、工数実績、出来高",
      color: "bg-blue-500/10 border-blue-500/30",
    },
    {
      category: "確定",
      nature: "決めた計画",
      inputBy: "承認者",
      timing: "承認時のみ",
      examples: "受注額、実行予算、契約条件",
      color: "bg-green-500/10 border-green-500/30",
    },
    {
      category: "見込み",
      nature: "現場の判断",
      inputBy: "PM/所長",
      timing: "週次（随時）",
      examples: "進捗率、着地原価、リスク",
      color: "bg-yellow-500/10 border-yellow-500/30",
    },
    {
      category: "計算",
      nature: "自動算出",
      inputBy: "システム（自動）",
      timing: "リアルタイム",
      examples: "消化率、着地粗利、アラート",
      color: "bg-purple-500/10 border-purple-500/30",
    },
  ];

  const approachSteps = [
    {
      step: 1,
      title: "データ設計",
      items: [
        "貴社の原価管理に必要なデータ項目を洗い出し",
        "各項目の「区分」（実績/確定/見込み/計算）を定義",
        "入力者・更新タイミング・権限を明確化",
      ],
    },
    {
      step: 2,
      title: "連携設計",
      items: [
        "基幹システムからの自動取得ポイントを特定",
        "現場入力が必要な項目を最小化",
        "Excel入力とシステムの役割分担を設計",
      ],
    },
    {
      step: 3,
      title: "ダッシュボード構築",
      items: [
        "経営判断に必要なKPIを定義",
        "着地見込み・アラートの計算ロジックを実装",
        "スマホ/タブレットでも確認できるUI",
      ],
    },
    {
      step: 4,
      title: "運用定着",
      items: [
        "「誰が」「いつ」「何を」入れるかをルール化",
        "週次/月次の運用フローを確立",
        "継続的な改善サポート",
      ],
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-[var(--border)]">
        <div className="container-custom">
          <p className="text-sm tracking-widest text-[var(--gray-500)] mb-4">
            経営管理DX
          </p>
          <h1 className="font-mincho text-3xl md:text-5xl font-medium text-[var(--gray-900)] mb-8 leading-tight">
            原価管理システムを入れたのに、
            <br />
            なぜ使われないのか
          </h1>
          <p className="text-[var(--gray-600)] max-w-2xl leading-relaxed">
            「システムを導入したのに結局Excelに戻った」
            「月末まで数字がわからない」「ダッシュボードを見ても判断できない」——
            これらは「システムの問題」ではありません。「データの設計」の問題です。
          </p>
        </div>
      </section>

      {/* Problem Cards Section */}
      <section className="py-16 md:py-24 bg-[var(--gray-100)]">
        <div className="container-custom">
          <h2 className="font-mincho text-2xl md:text-3xl text-[var(--gray-900)] mb-4 text-center">
            こんな経験はありませんか？
          </h2>
          <p className="text-[var(--gray-600)] text-center mb-12">
            原価管理システムを導入した多くの企業が直面する課題
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {problemCards.map((card, index) => (
              <div
                key={index}
                className="bg-white border border-[var(--border)] p-8 text-center"
              >
                <div className="text-4xl mb-4">{card.icon}</div>
                <h3 className="font-mincho text-xl text-[var(--gray-900)] mb-4">
                  {card.title}
                </h3>
                <p className="text-sm text-[var(--gray-600)] leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <p className="font-mincho text-lg text-[var(--gray-800)]">
              これらは「システムの問題」ではありません。
              <br />
              <span className="text-[var(--accent)] font-medium">
                「データの設計」の問題です。
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Essential Challenges Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <p className="text-sm tracking-widest text-[var(--gray-500)] mb-4">
            本質的課題
          </p>
          <h2 className="font-mincho text-2xl md:text-3xl text-[var(--gray-900)] mb-12">
            原価管理が機能しない3つの本質的課題
          </h2>

          <div className="space-y-8">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="border border-[var(--border)] overflow-hidden"
              >
                <div className="bg-[var(--gray-100)] p-6 border-b border-[var(--border)]">
                  <div className="flex items-baseline gap-4">
                    <span className="font-mincho text-3xl text-[var(--gray-300)]">
                      {challenge.number}
                    </span>
                    <h3 className="font-mincho text-xl text-[var(--gray-900)]">
                      {challenge.title}
                    </h3>
                  </div>
                </div>
                <div className="grid md:grid-cols-2">
                  <div className="p-6 border-b md:border-b-0 md:border-r border-[var(--border)] bg-red-50/50">
                    <p className="text-sm font-medium text-red-700 mb-4">
                      問題
                    </p>
                    <ul className="space-y-2">
                      {challenge.problem.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-[var(--gray-700)] flex items-start gap-2"
                        >
                          <span className="text-red-400 mt-1">×</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="p-6 bg-green-50/50">
                    <p className="text-sm font-medium text-green-700 mb-4">
                      本来あるべき姿
                    </p>
                    <ul className="space-y-2">
                      {challenge.solution.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm text-[var(--gray-700)] flex items-start gap-2"
                        >
                          <span className="text-green-500 mt-1">○</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Classification Section */}
      <section className="py-16 md:py-24 bg-[var(--gray-900)] text-white">
        <div className="container-custom">
          <p className="text-sm tracking-widest text-[var(--gray-400)] mb-4">
            データ4分類
          </p>
          <h2 className="font-mincho text-2xl md:text-4xl mb-6 leading-tight">
            データを4つに分類すれば、
            <br />
            すべて解決する
          </h2>
          <p className="text-[var(--gray-300)] max-w-3xl mb-12 leading-relaxed">
            原価管理の混乱は「データの性質」を区別していないことが原因です。
            すべてのデータを4つに分類し、それぞれの入力ルールを決めれば、システムは機能し始めます。
          </p>

          {/* Classification Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
            {dataClassification.map((item, index) => (
              <div
                key={index}
                className={`border p-6 ${item.color}`}
              >
                <p className="text-lg font-medium text-white mb-4">
                  {item.category}
                </p>
                <div className="space-y-3 text-sm">
                  <div>
                    <p className="text-[var(--gray-500)]">性質</p>
                    <p className="text-[var(--gray-200)]">{item.nature}</p>
                  </div>
                  <div>
                    <p className="text-[var(--gray-500)]">入力者</p>
                    <p className="text-[var(--gray-200)]">{item.inputBy}</p>
                  </div>
                  <div>
                    <p className="text-[var(--gray-500)]">更新タイミング</p>
                    <p className="text-[var(--gray-200)]">{item.timing}</p>
                  </div>
                  <div>
                    <p className="text-[var(--gray-500)]">例</p>
                    <p className="text-[var(--accent)]">{item.examples}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Data Flow Diagram */}
          <div className="bg-[var(--gray-800)] border border-[var(--gray-700)] p-8 mb-8">
            <h3 className="text-lg font-medium text-[var(--gray-200)] mb-8 text-center">
              データフロー概念図
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm">
              <div className="space-y-4 text-center md:text-right">
                <div className="bg-blue-500/20 border border-blue-500/50 px-4 py-2">
                  基幹システム
                </div>
                <div className="bg-green-500/20 border border-green-500/50 px-4 py-2">
                  承認フロー
                </div>
                <div className="bg-yellow-500/20 border border-yellow-500/50 px-4 py-2">
                  現場入力
                </div>
              </div>
              <div className="text-[var(--gray-500)] text-2xl">→</div>
              <div className="space-y-4 text-center">
                <div className="text-[var(--gray-400)]">自動</div>
                <div className="text-[var(--gray-400)]">承認後</div>
                <div className="text-[var(--gray-400)]">随時</div>
              </div>
              <div className="text-[var(--gray-500)] text-2xl">→</div>
              <div className="space-y-4 text-center md:text-left">
                <div className="text-blue-300">実績データ</div>
                <div className="text-green-300">確定データ</div>
                <div className="text-yellow-300">見込みデータ</div>
              </div>
              <div className="text-[var(--gray-500)] text-2xl">→</div>
              <div className="bg-purple-500/20 border border-purple-500/50 px-4 py-3 text-center">
                <div className="text-purple-300 font-medium">統合</div>
                <div className="text-xs text-[var(--gray-400)] mt-1">計算エンジン</div>
              </div>
              <div className="text-[var(--gray-500)] text-2xl">→</div>
              <div className="bg-[var(--accent)]/20 border border-[var(--accent)] px-4 py-3 text-center">
                <div className="text-[var(--accent)] font-medium">ダッシュボード</div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <p className="text-[var(--gray-300)] leading-relaxed">
              このルールを最初に決めれば、あとは自動で回ります。
              <br />
              <span className="text-white font-medium">
                「誰が何を入れるか」を明確にすることが、原価管理DXの第一歩です。
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <p className="text-sm tracking-widest text-[var(--gray-500)] mb-4">
            あるべき姿
          </p>
          <h2 className="font-mincho text-2xl md:text-3xl text-[var(--gray-900)] mb-12">
            原価管理があるべき姿
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="border-2 border-[var(--gray-300)] p-8 bg-[var(--gray-50)]">
              <p className="text-sm font-medium text-[var(--gray-500)] mb-4">
                BEFORE: 従来の原価管理
              </p>
              <ul className="space-y-4">
                {[
                  "月末にならないと数字がわからない",
                  "実績と見込みが混在",
                  "手入力が多くミスが発生",
                  "ダッシュボードを見ても判断できない",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[var(--gray-600)]"
                  >
                    <span className="text-red-400 mt-1">×</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* After */}
            <div className="border-2 border-[var(--accent)] p-8 bg-[var(--accent)]/5">
              <p className="text-sm font-medium text-[var(--accent)] mb-4">
                AFTER: あるべき原価管理
              </p>
              <ul className="space-y-4">
                {[
                  "リアルタイムで消化状況がわかる",
                  "実績は自動取得、見込みは現場が入力",
                  "入力は最小限、計算は自動",
                  "着地見込みとアラートで即座に判断",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[var(--gray-700)]"
                  >
                    <span className="text-green-500 mt-1">○</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Arrow between */}
          <div className="text-center my-8">
            <div className="inline-block text-4xl text-[var(--accent)]">↓</div>
          </div>

          <div className="text-center">
            <p className="font-mincho text-xl text-[var(--gray-800)]">
              「データの設計」を変えれば、システムは使われるようになる
            </p>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 md:py-24 bg-[var(--gray-100)]">
        <div className="container-custom">
          <p className="text-sm tracking-widest text-[var(--gray-500)] mb-4">
            私たちのアプローチ
          </p>
          <h2 className="font-mincho text-2xl md:text-3xl text-[var(--gray-900)] mb-12">
            弊社のアプローチ
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {approachSteps.map((step, index) => (
              <div key={index} className="bg-white border border-[var(--border)] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-[var(--accent)] text-white flex items-center justify-center text-sm font-medium">
                    {step.step}
                  </span>
                  <h3 className="font-mincho text-lg text-[var(--gray-900)]">
                    {step.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {step.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-[var(--gray-600)] flex items-start gap-2"
                    >
                      <span className="text-[var(--accent)] mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[var(--gray-900)] text-white">
        <div className="container-custom text-center">
          <h2 className="font-mincho text-2xl md:text-3xl mb-6">
            原価管理のお悩み、ご相談ください
          </h2>
          <p className="text-[var(--gray-300)] mb-8 max-w-xl mx-auto leading-relaxed">
            「システムを入れたのに使われない」
            <br />
            「何から手をつければいいかわからない」
            <br />
            そんなお悩みをお持ちの方、まずはお気軽にご相談ください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              お問い合わせ
            </Link>
            <a
              href="mailto:info@h-insight.jp"
              className="border border-white/30 text-white px-6 py-3 text-sm tracking-wider hover:bg-white/10 transition-colors"
            >
              info@h-insight.jp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
