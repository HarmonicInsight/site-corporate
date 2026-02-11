import Link from "next/link";

export default function TrainingPage() {
  const paradigmProblems = [
    {
      number: "01",
      title: "人材確保の限界",
      description:
        "「何でもできる人」を待っていては、いつまでも人が足りない。現場に張り付ける人材は減り続けている。",
    },
    {
      number: "02",
      title: "育成の非効率",
      description:
        "1人に8つの能力を全て習得させるのは、時間もコストもかかりすぎる。結果、育成が追いつかず、ベテラン頼みが続く。",
    },
    {
      number: "03",
      title: "働き方の硬直化",
      description:
        "「現場にいなければ仕事にならない」という前提が、シニア・子育て世代・地方人材の活用を阻んでいる。",
    },
  ];

  const roles = [
    {
      number: "01",
      title: "現場リーダー",
      role: "現場作業の指揮・安全管理・職人統率",
      location: "作業現場",
      skills: [
        "施工管理の実務力",
        "安全管理・KY活動",
        "職人とのコミュニケーション",
        "リアルタイム報告（チャット・映像共有）",
        "異常時のエスカレーション判断",
      ],
      difference: "書類作成・原価管理から解放され、現場作業に集中できる",
      talent: null,
    },
    {
      number: "02",
      title: "計数サポーター",
      role: "原価・進捗のモニタリングと早期警報",
      location: "本社・拠点・リモート",
      skills: [
        "建設業会計の理解",
        "データ分析・異常検知",
        "現場データの読み解き",
        "アラート基準の運用",
        "現場リーダーへのフィードバック",
      ],
      difference: null,
      talent: "経理経験者、シニア人材（現場経験者）、子育て中の時短勤務者",
    },
    {
      number: "03",
      title: "ドキュメントサポーター",
      role: "報告書・検査書類・申請書類の作成支援",
      location: "本社・拠点・リモート",
      skills: [
        "建設業書類の知識",
        "正確な文書作成力",
        "現場データからの書類作成",
        "品質基準の理解",
        "締切管理",
      ],
      difference: null,
      talent: "事務職経験者、建設業経験のある復職者、地方在住人材",
    },
    {
      number: "04",
      title: "技術アドバイザー",
      role: "遠隔からの技術指導・判断支援・品質チェック",
      location: "本社・自宅・任意の場所",
      skills: [
        "豊富な現場経験",
        "映像・データからの状況把握",
        "的確な技術アドバイス",
        "若手への指導力",
        "判断基準の言語化",
      ],
      difference: null,
      talent: "定年後のベテラン技術者、体力的に現場が難しくなった熟練者、複数現場を掛け持ちできる専門家",
    },
  ];

  const connectingSkills = [
    {
      number: "01",
      title: "データをつなぐ",
      items: [
        "現場の状況をデータ・映像で伝える力",
        "数字から現場の実態を読み解く力",
        "リアルタイム情報を適切に共有する力",
      ],
    },
    {
      number: "02",
      title: "役割をつなぐ",
      items: [
        "自分の役割と他者の役割の境界を理解する",
        "必要な情報を必要な人に渡す",
        "抜け漏れを防ぐ「のりしろ」の意識",
      ],
    },
    {
      number: "03",
      title: "言葉をつなぐ（翻訳力）",
      items: [
        "現場の言葉 ⇔ 経営の言葉",
        "技術の言葉 ⇔ 数字の言葉",
        "問題 ⇔ 解決策の橋渡し",
      ],
    },
  ];

  const developmentSteps = [
    {
      step: 1,
      title: "役割の明確化",
      items: [
        "自社の工事特性に合わせた役割分担の設計",
        "各役割に必要なスキルの定義",
        "「誰が何を担うか」の基準づくり",
      ],
    },
    {
      step: 2,
      title: "段階的な移行",
      items: [
        "まずは1現場でパイロット実施",
        "書類作成から段階的にリモート化",
        "成功パターンを横展開",
      ],
    },
    {
      step: 3,
      title: "新たな人材プールの開拓",
      items: [
        "シニア人材の遠隔参加の仕組み",
        "子育て世代のリモートワーク導入",
        "地方・遠隔地人材の活用",
      ],
    },
    {
      step: 4,
      title: "コミュニケーション基盤の整備",
      items: [
        "リアルタイム情報共有ツールの導入",
        "報告・エスカレーションの基準づくり",
        "映像・データ活用のルール化",
      ],
    },
  ];

  const supportServices = [
    {
      title: "役割設計",
      description: "御社の工事特性・組織体制に合わせた分散協調型の役割分担を設計します",
    },
    {
      title: "スキル定義",
      description: "各役割に必要なスキルを明確化し、育成計画の策定を支援します",
    },
    {
      title: "パイロット導入",
      description: "1現場から段階的に導入し、成功パターンを一緒につくります",
    },
    {
      title: "人材活用設計",
      description: "シニア・時短・リモート人材の活用方法を具体的に設計します",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-16 md:py-24 border-b border-[var(--border)]">
        <div className="container-custom">
          <p className="text-sm tracking-widest text-[var(--gray-500)] mb-4">
            人材育成の課題
          </p>
          <h1 className="font-mincho text-3xl md:text-5xl font-medium text-[var(--gray-900)] mb-8 leading-tight">
            「1人で全部」から「チームで共創」へ
            <br />
            <span className="text-[var(--gray-600)]">分散協調型時代の人材育成</span>
          </h1>
          <p className="text-[var(--gray-600)] max-w-3xl leading-relaxed">
            建設業の人材育成は、長らく「現場で何でもできるスーパー社員」を目指してきました。
            しかし、デジタル技術の進化と労働市場の変化により、「分散協調型の働き方」が可能になった今、
            求められる人材像も変わります。
          </p>
          <p className="text-[var(--gray-600)] max-w-3xl leading-relaxed mt-4">
            1人で抱え込むのではなく、役割を分担し、データと映像でつながり、
            それぞれの強みを活かすチーム。そんな新しい働き方を支える人材を、仕組みで育てる方法を提案します。
          </p>
        </div>
      </section>

      {/* Paradigm Shift Section */}
      <section className="py-16 md:py-24 bg-[var(--gray-100)]">
        <div className="container-custom">
          <p className="text-sm tracking-widest text-[var(--gray-500)] mb-4">
            パラダイムシフト
          </p>
          <h2 className="font-mincho text-2xl md:text-3xl text-[var(--gray-900)] mb-12">
            なぜ「スーパー社員」モデルは限界なのか
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {paradigmProblems.map((problem, index) => (
              <div key={index} className="bg-white border border-[var(--border)] p-8">
                <span className="font-mincho text-4xl text-[var(--gray-200)]">
                  {problem.number}
                </span>
                <h3 className="font-mincho text-xl text-[var(--gray-900)] mt-4 mb-4">
                  {problem.title}
                </h3>
                <p className="text-sm text-[var(--gray-600)] leading-relaxed">
                  {problem.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Model Diagram Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <p className="text-sm tracking-widest text-[var(--gray-500)] mb-4">
            新しい人材像
          </p>
          <h2 className="font-mincho text-2xl md:text-3xl text-[var(--gray-900)] mb-12">
            分散協調型時代に求められる人材とは
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Model */}
            <div className="border border-[var(--border)] p-8 bg-[var(--gray-50)]">
              <p className="text-sm text-[var(--gray-500)] mb-4">BEFORE</p>
              <h3 className="font-mincho text-xl text-[var(--gray-900)] mb-6">
                現場集中型（従来）
              </h3>
              <div className="bg-white border border-[var(--gray-200)] p-6 mb-4">
                <p className="text-sm font-medium text-[var(--gray-700)] mb-3">作業所</p>
                <div className="border-2 border-[var(--gray-300)] p-4 text-center">
                  <p className="font-medium text-[var(--gray-900)]">所長（1人で全部）</p>
                  <ul className="text-xs text-[var(--gray-600)] mt-2 space-y-1">
                    <li>・現場管理</li>
                    <li>・原価管理</li>
                    <li>・書類作成</li>
                    <li>・発注者対応</li>
                    <li>・報告・連絡</li>
                  </ul>
                </div>
                <div className="text-center my-3 text-[var(--gray-400)]">↓ 報告書</div>
              </div>
              <div className="bg-[var(--gray-200)] p-4 text-center">
                <p className="text-sm text-[var(--gray-700)]">本社</p>
                <p className="text-xs text-red-600 mt-1">→ 状況把握が遅れる</p>
              </div>
            </div>

            {/* New Model */}
            <div className="border-2 border-[var(--accent)] p-8 bg-[var(--accent)]/5">
              <p className="text-sm text-[var(--accent)] mb-4">AFTER</p>
              <h3 className="font-mincho text-xl text-[var(--gray-900)] mb-6">
                分散協調型（これから）
              </h3>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="border border-[var(--accent)]/30 bg-white p-4">
                    <p className="text-xs text-[var(--accent)] mb-2">作業所</p>
                    <p className="text-sm font-medium text-[var(--gray-900)]">現場担当</p>
                    <ul className="text-xs text-[var(--gray-600)] mt-1">
                      <li>・施工管理</li>
                      <li>・安全管理</li>
                      <li>・職人統率</li>
                    </ul>
                  </div>
                  <div className="border border-[var(--accent)]/30 bg-white p-4">
                    <p className="text-xs text-[var(--accent)] mb-2">本社・拠点</p>
                    <p className="text-sm font-medium text-[var(--gray-900)]">計数担当</p>
                    <ul className="text-xs text-[var(--gray-600)] mt-1">
                      <li>・原価チェック</li>
                      <li>・進捗監視</li>
                    </ul>
                    <p className="text-sm font-medium text-[var(--gray-900)] mt-2">書類担当</p>
                    <ul className="text-xs text-[var(--gray-600)] mt-1">
                      <li>・報告書作成</li>
                      <li>・検査書類</li>
                    </ul>
                  </div>
                </div>
                <div className="text-center text-xs text-[var(--accent)]">
                  ↕ リアルタイムでデータ・映像が連携
                </div>
                <div className="border border-[var(--accent)]/30 bg-white p-4">
                  <p className="text-xs text-[var(--accent)] mb-2">リモート</p>
                  <p className="text-sm font-medium text-[var(--gray-900)]">熟練者・技術アドバイザー</p>
                  <ul className="text-xs text-[var(--gray-600)] mt-1">
                    <li>・技術指導 ・判断支援 ・品質確認 ・レビュー</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Four Roles Section */}
      <section className="py-16 md:py-24 bg-[var(--gray-900)] text-white">
        <div className="container-custom">
          <p className="text-sm tracking-widest text-[var(--gray-400)] mb-4">
            4つの役割
          </p>
          <h2 className="font-mincho text-2xl md:text-4xl mb-12">
            分散協調型チームの4つの役割
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {roles.map((role, index) => (
              <div key={index} className="border border-[var(--gray-700)] bg-[var(--gray-800)] p-8">
                <div className="flex items-baseline gap-3 mb-4">
                  <span className="font-mincho text-3xl text-[var(--gray-600)]">
                    {role.number}
                  </span>
                  <h3 className="font-mincho text-xl text-white">{role.title}</h3>
                </div>

                <div className="space-y-4 text-sm">
                  <div>
                    <p className="text-[var(--gray-500)] mb-1">役割</p>
                    <p className="text-[var(--gray-200)]">{role.role}</p>
                  </div>
                  <div>
                    <p className="text-[var(--gray-500)] mb-1">働く場所</p>
                    <p className="text-[var(--accent)]">{role.location}</p>
                  </div>
                  <div>
                    <p className="text-[var(--gray-500)] mb-2">求められるスキル</p>
                    <ul className="space-y-1">
                      {role.skills.map((skill, i) => (
                        <li key={i} className="text-[var(--gray-300)] flex items-start gap-2">
                          <span className="text-[var(--gray-600)]">・</span>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </div>
                  {role.difference && (
                    <div className="border-t border-[var(--gray-700)] pt-4">
                      <p className="text-[var(--gray-500)] mb-1">従来との違い</p>
                      <p className="text-green-400">{role.difference}</p>
                    </div>
                  )}
                  {role.talent && (
                    <div className="border-t border-[var(--gray-700)] pt-4">
                      <p className="text-[var(--gray-500)] mb-1">活用できる人材</p>
                      <p className="text-[var(--accent)]">{role.talent}</p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connecting Skills Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <p className="text-sm tracking-widest text-[var(--gray-500)] mb-4">
            共通スキル
          </p>
          <h2 className="font-mincho text-2xl md:text-3xl text-[var(--gray-900)] mb-6">
            分散協調型の核心：「つなぐ力」を育てる
          </h2>
          <p className="text-[var(--gray-600)] max-w-3xl mb-12">
            どの役割であっても、分散協調型で成果を出すには「つなぐ力」が不可欠です。
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {connectingSkills.map((skill, index) => (
              <div key={index} className="border-l-2 border-[var(--accent)] pl-6">
                <span className="text-sm text-[var(--accent)]">{skill.number}</span>
                <h3 className="font-mincho text-xl text-[var(--gray-900)] mt-2 mb-4">
                  {skill.title}
                </h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-sm text-[var(--gray-600)] flex items-start gap-2">
                      <span className="text-[var(--gray-400)]">・</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development System Section */}
      <section className="py-16 md:py-24 bg-[var(--gray-100)]">
        <div className="container-custom">
          <p className="text-sm tracking-widest text-[var(--gray-500)] mb-4">
            育成の仕組み
          </p>
          <h2 className="font-mincho text-2xl md:text-3xl text-[var(--gray-900)] mb-12">
            「分散協調型人材」を仕組みで育てる
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {developmentSteps.map((step, index) => (
              <div key={index} className="bg-white border border-[var(--border)] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-8 h-8 rounded-full bg-[var(--accent)] text-white flex items-center justify-center text-sm font-medium">
                    {step.step}
                  </span>
                  <h3 className="font-medium text-[var(--gray-900)]">{step.title}</h3>
                </div>
                <ul className="space-y-2">
                  {step.items.map((item, i) => (
                    <li key={i} className="text-sm text-[var(--gray-600)] flex items-start gap-2">
                      <span className="text-[var(--accent)]">・</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coexistence Section */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm tracking-widest text-[var(--gray-500)] mb-4">
              従来型との両立
            </p>
            <h2 className="font-mincho text-2xl md:text-3xl text-[var(--gray-900)] mb-8">
              「1人所長」も、チームの中で活きる
            </h2>
            <p className="text-[var(--gray-600)] leading-relaxed mb-6">
              分散協調型への移行は、従来の「1人所長」を否定するものではありません。
              むしろ、優秀な所長の負担を減らし、その判断力・統率力をより多くの現場に活かすための進化です。
            </p>
            <p className="text-[var(--gray-600)] leading-relaxed">
              ベテランの経験は「技術アドバイザー」として複数現場を支え、
              若手は「現場リーダー」として実務に集中しながら成長する。
              そんな世代間連携が、分散協調型の真価です。
            </p>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-16 md:py-24 bg-[var(--gray-900)] text-white">
        <div className="container-custom">
          <p className="text-sm tracking-widest text-[var(--gray-400)] mb-4">
            私たちの支援
          </p>
          <h2 className="font-mincho text-2xl md:text-3xl mb-12">
            分散協調型への移行を支援します
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supportServices.map((service, index) => (
              <div key={index} className="border border-[var(--gray-700)] p-6">
                <span className="text-sm text-[var(--accent)]">0{index + 1}</span>
                <h3 className="font-mincho text-lg text-white mt-2 mb-4">
                  {service.title}
                </h3>
                <p className="text-sm text-[var(--gray-400)] leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-[var(--gray-100)]">
        <div className="container-custom text-center">
          <h2 className="font-mincho text-2xl md:text-3xl text-[var(--gray-900)] mb-6">
            「人が足りない」を、働き方で解決する
          </h2>
          <p className="text-[var(--gray-600)] mb-8 max-w-xl mx-auto">
            スーパー社員を待つのではなく、今いる人材の力を最大化する働き方へ。
            まずは御社の現状を診断し、分散協調型への移行可能性を一緒に探りませんか。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/diagnosis" className="btn-primary">
              無料診断を受ける
            </Link>
            <Link href="/contact" className="btn-outline">
              お問い合わせ
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
