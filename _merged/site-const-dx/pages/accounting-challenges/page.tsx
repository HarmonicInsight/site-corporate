import Link from "next/link";

export default function AccountingChallengesPage() {
  const accountingFlow = [
    {
      step: 1,
      title: "工事契約",
      account: null,
      accountNote: "受注残（管理）",
      description: "管理会計の起点。以後、原価と進捗のコントロールが必要",
      note: "売上はまだゼロ",
      highlight: null,
    },
    {
      step: 2,
      title: "原価発生",
      account: "未成工事支出金",
      accountNote: null,
      description: "原価は先に出ていく",
      note: null,
      highlight: "red",
    },
    {
      step: 3,
      title: "請求・入金差額",
      account: null,
      accountNote: null,
      description: "請求と収益認識のタイミングが一致しない",
      note: null,
      highlight: "yellow",
      subItems: [
        { label: "請求済・未回収", account: "売掛金（完成工事未収入金）" },
        { label: "収益と請求のズレ", account: "契約資産（工事未収入金）/ 契約負債（未成工事受入金）" },
      ],
    },
    {
      step: 4,
      title: "引渡・検収",
      account: "完成工事高 / 完成工事原価",
      accountNote: null,
      description: "収益認識の確定",
      note: null,
      highlight: null,
    },
    {
      step: 5,
      title: "代金回収",
      account: "現預金",
      accountNote: null,
      description: "キャッシュの実現",
      note: null,
      highlight: null,
    },
  ];

  const structuralProblems = [
    {
      number: "01",
      title: "原価が売上より先に動く",
      description: "材料・外注費は先払い。売上計上は後。月次の損益が実態と乖離する。",
    },
    {
      number: "02",
      title: "売上と入金がズレる",
      description: "出来高請求しても回収は数ヶ月後。資金繰りと損益が連動しない。",
    },
    {
      number: "03",
      title: "進捗率が見積依存",
      description: "「発生原価÷見積総原価」で進捗を測るが、見積が変われば進捗も変わる。",
    },
    {
      number: "04",
      title: "工事別の締めが運用できない",
      description: "請求書が工事IDで切れない、配賦ルールが無い、外注請求が遅い。工事別の未払・未収・契約差額が管理できず、月次の原価率が歪む。",
    },
    {
      number: "05",
      title: "完成まで粗利が確定しない",
      description: "進行中は「見込粗利」。追加原価・設計変更で着地が変わり続ける。",
    },
    {
      number: "06",
      title: "財務会計と管理会計が混在",
      description: "税務用の数字と意思決定用の数字が分離されておらず、どちらも中途半端になる。",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-[var(--border)]">
        <div className="container-custom">
          <p className="text-sm tracking-widest text-[var(--gray-500)] mb-4">
            建設業会計の課題
          </p>
          <h1 className="font-mincho text-3xl md:text-5xl font-medium text-[var(--gray-900)] mb-8 leading-tight">
            建設業会計の構造的問題
          </h1>
          <p className="text-[var(--gray-600)] max-w-3xl leading-relaxed">
            建設業の会計は、製造業や小売業とは根本的に異なります。
            「原価が先、売上が後」「請求と収益認識のズレ」「完成まで粗利が確定しない」——
            この構造を理解しないまま経営判断をしても、的確な意思決定はできません。
          </p>
        </div>
      </section>

      {/* Accounting Flow */}
      <section className="py-16 md:py-24 bg-[var(--gray-900)] text-white">
        <div className="container-custom">
          <p className="text-sm tracking-widest text-[var(--gray-400)] mb-4">
            会計フロー
          </p>
          <h2 className="font-mincho text-2xl md:text-4xl mb-12 leading-tight">
            建設業会計のフロー
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-16">
            {accountingFlow.map((item, index) => (
              <div
                key={index}
                className={`relative p-6 border ${
                  item.highlight === "red"
                    ? "border-red-500/50 bg-red-500/10"
                    : item.highlight === "yellow"
                    ? "border-yellow-500/50 bg-yellow-500/10"
                    : "border-[var(--gray-700)] bg-[var(--gray-800)]"
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs text-[var(--gray-500)]">STEP {item.step}</span>
                </div>
                <h4 className="font-medium text-white mb-2">{item.title}</h4>

                {item.account && (
                  <p className="text-sm text-[var(--accent)] mb-2">{item.account}</p>
                )}
                {item.accountNote && (
                  <p className="text-xs text-[var(--gray-500)] mb-2">{item.accountNote}</p>
                )}

                {item.subItems && (
                  <div className="space-y-2 mb-3">
                    {item.subItems.map((sub, subIndex) => (
                      <div key={subIndex} className="text-xs">
                        <span className="text-[var(--gray-400)]">{sub.label}</span>
                        <br />
                        <span className="text-[var(--accent)]">{sub.account}</span>
                      </div>
                    ))}
                  </div>
                )}

                <p className="text-xs text-[var(--gray-400)] leading-relaxed">
                  {item.description}
                </p>

                {item.note && (
                  <p className="text-xs text-[var(--gray-500)] mt-2 italic">
                    ※ {item.note}
                  </p>
                )}

                {index < accountingFlow.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 text-[var(--gray-600)]">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Progress-based Revenue Recognition */}
          <div className="mb-16">
            <h3 className="text-lg font-medium text-[var(--gray-200)] mb-8">
              工事進行基準（収益認識基準）
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="border border-[var(--gray-700)] bg-[var(--gray-800)] p-8">
                <h4 className="font-medium text-white mb-4">計算式</h4>
                <div className="space-y-3">
                  <div className="bg-[var(--gray-900)] p-4 font-mono text-sm">
                    <p className="text-[var(--accent)]">当期売上 = 契約金額 × 進捗率</p>
                  </div>
                  <div className="bg-[var(--gray-900)] p-4 font-mono text-sm">
                    <p className="text-[var(--gray-300)]">進捗率 = 発生原価 ÷ 見積総原価</p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-yellow-500/50 bg-yellow-500/10 p-8">
                <h4 className="font-medium text-yellow-300 mb-4">前提条件（これが崩れると破綻する）</h4>
                <ul className="space-y-3 text-sm text-[var(--gray-300)]">
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">●</span>
                    <span>見積総原価を継続的に更新できること</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">●</span>
                    <span>原価の月次締め（未払計上）が正確にできること</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-yellow-400 mt-1">●</span>
                    <span>工事別に原価が集まり切ること</span>
                  </li>
                </ul>
                <div className="mt-6 pt-4 border-t border-yellow-500/30">
                  <p className="text-yellow-200 text-sm font-medium">
                    この前提が崩れると、財務会計の売上も、管理会計の粗利も「もっともらしい嘘」になる
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Cost Structure */}
          <div>
            <h3 className="text-lg font-medium text-[var(--gray-200)] mb-8">
              原価構造（原価率の内訳）
            </h3>
            <div className="grid md:grid-cols-4 gap-4">
              {[
                { label: "材料費", ratio: "15-25%", desc: "資材・消耗品" },
                { label: "労務費", ratio: "20-30%", desc: "自社労務・直接人件費" },
                { label: "外注費", ratio: "40-55%", desc: "協力会社への支払" },
                { label: "経費", ratio: "5-15%", desc: "機械・仮設・その他" },
              ].map((item, index) => (
                <div key={index} className="border border-[var(--gray-700)] bg-[var(--gray-800)] p-6">
                  <p className="text-sm text-[var(--gray-400)] mb-1">{item.label}</p>
                  <p className="font-mincho text-2xl text-white mb-2">{item.ratio}</p>
                  <p className="text-xs text-[var(--gray-500)]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Management Accounting Essence */}
      <section className="py-16 md:py-24 bg-[var(--gray-100)]">
        <div className="container-custom">
          <p className="text-sm tracking-widest text-[var(--gray-500)] mb-4">
            管理会計の本質
          </p>
          <h2 className="font-mincho text-2xl md:text-3xl text-[var(--gray-900)] mb-6">
            原価率で着地を読む
          </h2>
          <p className="text-[var(--gray-600)] max-w-3xl mb-12 leading-relaxed">
            管理会計では、売上より先に「原価の状態」が決まる。
            だから、原価率の変化を追うことで、着地売上・粗利を予測できる。
          </p>

          {/* Three Cost Ratios */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white border border-[var(--border)] p-8">
              <p className="text-sm text-[var(--accent)] tracking-widest mb-2">当初</p>
              <h3 className="font-mincho text-xl text-[var(--gray-900)] mb-4">
                見積原価率
              </h3>
              <p className="text-sm text-[var(--gray-600)] leading-relaxed">
                受注時点の基準。この数字が「あるべき姿」として、以後のコントロールの起点になる。
              </p>
            </div>
            <div className="bg-white border-2 border-[var(--accent)] p-8">
              <p className="text-sm text-[var(--accent)] tracking-widest mb-2">更新</p>
              <h3 className="font-mincho text-xl text-[var(--gray-900)] mb-4">
                最新見積原価率
              </h3>
              <p className="text-sm text-[var(--gray-600)] leading-relaxed">
                進行中のコントロール対象。設計変更・追加工事・原価増を反映し、常に更新する。
              </p>
            </div>
            <div className="bg-white border border-[var(--border)] p-8">
              <p className="text-sm text-[var(--accent)] tracking-widest mb-2">結果</p>
              <h3 className="font-mincho text-xl text-[var(--gray-900)] mb-4">
                実績原価率
              </h3>
              <p className="text-sm text-[var(--gray-600)] leading-relaxed">
                発生した事実。過去は変えられないが、次の見積精度を上げる学習材料になる。
              </p>
            </div>
          </div>

          {/* What Management Wants to See */}
          <div className="bg-white border border-[var(--border)] p-8 mb-8">
            <h3 className="font-mincho text-lg text-[var(--gray-900)] mb-4">
              経営が見たいもの
            </h3>
            <p className="text-[var(--gray-700)] leading-relaxed">
              「原価率が崩れた時点で、着地売上・粗利がどう変わるか」
            </p>
          </div>

          {/* Problem Statement */}
          <div className="border-2 border-[var(--accent)] bg-white p-8">
            <p className="text-[var(--gray-900)] font-medium">
              これを言語化できているダッシュボードが、世の中にほぼ無い。
            </p>
          </div>
        </div>
      </section>

      {/* 6 Structural Problems */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <p className="text-sm tracking-widest text-[var(--gray-500)] mb-4">
            6つの構造的問題
          </p>
          <h2 className="font-mincho text-2xl md:text-3xl text-[var(--gray-900)] mb-12">
            なぜ建設業の経営判断は遅れるのか
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {structuralProblems.map((problem, index) => (
              <div key={index} className="border border-[var(--border)] p-6">
                <div className="flex items-baseline gap-3 mb-3">
                  <span className="font-mincho text-3xl text-[var(--gray-200)]">
                    {problem.number}
                  </span>
                  <h3 className="font-medium text-[var(--gray-900)]">
                    {problem.title}
                  </h3>
                </div>
                <p className="text-sm text-[var(--gray-600)] leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Cost Management Systems Don't Work */}
      <section className="py-16 md:py-24 bg-[var(--gray-50)]">
        <div className="container-custom">
          <p className="text-sm tracking-widest text-[var(--gray-500)] mb-4">
            本当の問題
          </p>
          <h2 className="font-mincho text-2xl md:text-3xl text-[var(--gray-900)] mb-4">
            原価管理システムが使われない本当の理由
          </h2>
          <p className="text-[var(--gray-600)] max-w-3xl mb-12 leading-relaxed">
            システムを入れたのに使われない。その原因は「システム」ではなく「データ設計」にある。
          </p>

          {/* 3つのあるある */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white border border-[var(--border)] p-8">
              <div className="w-10 h-10 bg-red-100 flex items-center justify-center mb-4">
                <span className="text-red-600 text-lg">📊</span>
              </div>
              <h3 className="font-medium text-[var(--gray-900)] mb-3">
                結局Excelに戻ってしまう
              </h3>
              <p className="text-sm text-[var(--gray-600)] leading-relaxed">
                原価管理システムを導入したのに、使いづらくて結局Excelで管理している。
              </p>
            </div>

            <div className="bg-white border border-[var(--border)] p-8">
              <div className="w-10 h-10 bg-red-100 flex items-center justify-center mb-4">
                <span className="text-red-600 text-lg">⏱</span>
              </div>
              <h3 className="font-medium text-[var(--gray-900)] mb-3">
                月末まで数字がわからない
              </h3>
              <p className="text-sm text-[var(--gray-600)] leading-relaxed">
                今月の原価がいくらか、月末の締めが終わるまでわからない。手遅れになる。
              </p>
            </div>

            <div className="bg-white border border-[var(--border)] p-8">
              <div className="w-10 h-10 bg-red-100 flex items-center justify-center mb-4">
                <span className="text-red-600 text-lg">?</span>
              </div>
              <h3 className="font-medium text-[var(--gray-900)] mb-3">
                どのデータが正しいかわからない
              </h3>
              <p className="text-sm text-[var(--gray-600)] leading-relaxed">
                基幹システムの数字とExcelの数字が合わない。どちらを信用すればいいかわからない。
              </p>
            </div>
          </div>

          {/* 本質的な問題 */}
          <div className="bg-white border border-[var(--border)] p-8 md:p-12">
            <h3 className="font-mincho text-xl text-[var(--gray-900)] mb-6">
              本質的な問題：「実績」と「見込み」の混同
            </h3>

            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-red-50 border border-red-200 p-6">
                <h4 className="font-medium text-red-800 mb-3">現状（混乱の原因）</h4>
                <ul className="space-y-2 text-sm text-red-700">
                  <li>• 「実績」と「見込み」を区別せずに設計</li>
                  <li>• 基幹から来るデータを手入力している</li>
                  <li>• 現場判断が必要なものを経理が入力</li>
                  <li>• 「誰が何を入れるか」が決まっていない</li>
                </ul>
              </div>
              <div className="bg-green-50 border border-green-200 p-6">
                <h4 className="font-medium text-green-800 mb-3">あるべき姿</h4>
                <ul className="space-y-2 text-sm text-green-700">
                  <li>• 実績（発生原価）→ 基幹から自動取得</li>
                  <li>• 見込み（着地予測）→ 現場が判断して入力</li>
                  <li>• 確定（予算）→ 承認後はロック</li>
                  <li>• 計算（消化率等）→ 自動算出</li>
                </ul>
              </div>
            </div>

            <p className="text-[var(--gray-700)] mb-8 leading-relaxed">
              <strong>このルールを最初に決めれば、あとは自動で回ります。</strong><br />
              「誰が何を入れるか」を明確にすることが、原価管理DXの第一歩です。
            </p>

            <Link
              href="/data-classification"
              className="inline-flex items-center gap-2 bg-[var(--gray-900)] text-white px-6 py-3 text-sm tracking-wider hover:bg-[var(--gray-800)] transition-colors"
            >
              データ設計の詳細を見る
              <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Insight BI Solution */}
      <section className="py-16 md:py-24 bg-[var(--gray-900)] text-white">
        <div className="container-custom">
          <p className="text-sm tracking-widest text-[var(--gray-400)] mb-4">
            私たちの解
          </p>
          <h2 className="font-mincho text-2xl md:text-4xl mb-8 leading-tight">
            「財務会計の正しさ」と<br />
            「経営判断の速さ」を分離する
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Three Types of Revenue */}
            <div>
              <h3 className="text-lg font-medium text-[var(--gray-200)] mb-6">
                売上を1つにせず、3つ並べる
              </h3>
              <div className="space-y-4">
                <div className="border border-[var(--gray-700)] bg-[var(--gray-800)] p-6">
                  <p className="text-sm text-[var(--gray-400)] mb-1">財務会計売上</p>
                  <p className="text-white">収益認識基準に従う結果</p>
                </div>
                <div className="border-2 border-[var(--accent)] bg-[var(--gray-800)] p-6">
                  <p className="text-sm text-[var(--accent)] mb-1">管理会計売上</p>
                  <p className="text-white">進捗×契約×最新見積＝意思決定用</p>
                </div>
                <div className="border border-[var(--gray-700)] bg-[var(--gray-800)] p-6">
                  <p className="text-sm text-[var(--gray-400)] mb-1">キャッシュ売上</p>
                  <p className="text-white">請求・入金＝資金繰り用</p>
                </div>
              </div>
            </div>

            {/* Three Types of Gross Profit */}
            <div>
              <h3 className="text-lg font-medium text-[var(--gray-200)] mb-6">
                粗利も同様に分離する
              </h3>
              <div className="space-y-4">
                <div className="border border-[var(--gray-700)] bg-[var(--gray-800)] p-6">
                  <p className="text-sm text-[var(--gray-400)] mb-1">見積粗利（当初）</p>
                  <p className="text-white">受注時点の計画値</p>
                </div>
                <div className="border-2 border-[var(--accent)] bg-[var(--gray-800)] p-6">
                  <p className="text-sm text-[var(--accent)] mb-1">最新見積粗利（更新）</p>
                  <p className="text-white">現時点での着地予測</p>
                </div>
                <div className="border border-[var(--gray-700)] bg-[var(--gray-800)] p-6">
                  <p className="text-sm text-[var(--gray-400)] mb-1">実績粗利（結果）</p>
                  <p className="text-white">発生した事実</p>
                </div>
              </div>
            </div>
          </div>

          {/* Closing Message */}
          <div className="border-t border-[var(--gray-700)] pt-12">
            <p className="font-mincho text-xl md:text-2xl text-center text-[var(--gray-200)] leading-relaxed">
              1つの数字で経営判断しようとするから、遅れる。
              <br />
              <span className="text-white">私たちは、目的別に数字を分離する。</span>
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-[var(--gray-100)]">
        <div className="container-custom text-center">
          <h2 className="font-mincho text-2xl md:text-3xl text-[var(--gray-900)] mb-6">
            会計・原価管理のお悩み、ご相談ください
          </h2>
          <p className="text-[var(--gray-600)] mb-8 max-w-xl mx-auto">
            「月次の数字が信用できない」「着地予測ができない」など、
            建設業会計に関するお悩みをお聞かせください。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn-primary">
              お問い合わせ
            </Link>
            <Link href="/management-dx" className="btn-outline">
              DXの課題を見る
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
